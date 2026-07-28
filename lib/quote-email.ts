import { randomUUID } from "node:crypto";
import tls, { type TLSSocket } from "node:tls";

import type { QuoteSubmission } from "@/lib/quote-request";

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  notificationEmail: string;
  from: string;
  fromAddress: string;
};

type MailMessage = {
  to: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  autoReply?: boolean;
};

type SmtpResponse = {
  code: number;
  message: string;
};

type MailDeliveryStage =
  | "connection"
  | "greeting"
  | "ehlo"
  | "authentication"
  | "sender"
  | "recipient"
  | "content"
  | "delivery"
  | "unknown";

export type QuoteEmailResult = {
  internalEmailSent: true;
  customerEmailSent: boolean;
};

export type SafeMailError = {
  name: string;
  stage: MailDeliveryStage;
  smtpCode: number | null;
  temporary: boolean;
};

class MailDeliveryError extends Error {
  constructor(
    public readonly stage: MailDeliveryStage,
    public readonly smtpCode: number | null,
    public readonly temporary: boolean,
    cause: unknown,
  ) {
    super(`SMTP delivery failed during ${stage}.`, { cause });
    this.name = "MailDeliveryError";
  }
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const temporarySmtpCodes = new Set([421, 450, 451, 452]);
const temporaryNetworkCodes = new Set(["ECONNRESET", "ETIMEDOUT", "EPIPE", "EAI_AGAIN"]);

const productLabels = {
  "autel-maxicharger": "Autel MaxiCharger AC Wallbox",
  "a-definir": "Solution à définir avec EVAtlas",
} as const;

const installationLabels = {
  maison: "Maison ou villa",
  residence: "Résidence ou copropriété",
  entreprise: "Entreprise ou bureau",
  hotel: "Hôtel ou établissement d’accueil",
  parking: "Parking ou espace partagé",
} as const;

const mountingLabels = {
  murale: "Pose murale",
  "sur-pied": "Pose sur pied",
  "a-definir": "À déterminer sur place",
} as const;

const supplyLabels = {
  monophase: "Monophasée",
  triphase: "Triphasée",
  inconnue: "Je ne sais pas encore",
} as const;

function getRequiredEnvironmentVariable(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Missing ${name} configuration.`);
  return value;
}

function getMailConfig(): MailConfig {
  const host = getRequiredEnvironmentVariable("SMTP_HOST");
  const rawPort = getRequiredEnvironmentVariable("SMTP_PORT");
  const port = Number(rawPort);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid SMTP_PORT configuration.");

  const secureValue = process.env.SMTP_SECURE?.trim().toLowerCase();
  const secure = secureValue ? secureValue === "true" : port === 465;
  if (!secure) {
    throw new Error("This mail transport requires implicit TLS. Set SMTP_SECURE=true and use a TLS SMTP port.");
  }

  const user = getRequiredEnvironmentVariable("SMTP_USER");
  const rawPassword = getRequiredEnvironmentVariable("SMTP_PASSWORD");
  // Google displays app passwords in groups of four characters. Accept both
  // the grouped and compact forms while keeping other SMTP passwords unchanged.
  const password = host.toLowerCase() === "smtp.gmail.com" ? rawPassword.replace(/\s+/gu, "") : rawPassword;
  const notificationEmail = (process.env.QUOTE_NOTIFICATION_EMAIL?.trim() || user).toLowerCase();
  const from = getRequiredEnvironmentVariable("MAIL_FROM").replace(/[\r\n]+/gu, " ");
  const fromAddressMatch = from.match(/<([^<>\s]+@[^<>\s]+)>/u);
  const fromAddress = (fromAddressMatch?.[1] || from).trim().toLowerCase();

  if (!emailPattern.test(user) || !emailPattern.test(notificationEmail) || !emailPattern.test(fromAddress)) {
    throw new Error("SMTP e-mail configuration is invalid.");
  }

  return { host, port, secure, user, password, notificationEmail, from, fromAddress };
}

function smtpCodeFromError(error: unknown): number | null {
  if (!(error instanceof Error)) return null;
  const match = error.message.match(/\b([245]\d{2})\b/u);
  return match ? Number(match[1]) : null;
}

function networkCodeFromError(error: unknown): string | null {
  if (!error || typeof error !== "object" || !("code" in error)) return null;
  return typeof error.code === "string" ? error.code : null;
}

function isTemporaryDeliveryError(error: unknown, smtpCode: number | null): boolean {
  if (smtpCode !== null && temporarySmtpCodes.has(smtpCode)) return true;
  const networkCode = networkCodeFromError(error);
  if (networkCode !== null && temporaryNetworkCodes.has(networkCode)) return true;
  return error instanceof Error && /timed out|closed unexpectedly/iu.test(error.message);
}

export function getSafeMailError(error: unknown): SafeMailError {
  if (error instanceof MailDeliveryError) {
    return {
      name: error.name,
      stage: error.stage,
      smtpCode: error.smtpCode,
      temporary: error.temporary,
    };
  }

  return {
    name: error instanceof Error ? error.name : "UnknownError",
    stage: "unknown",
    smtpCode: smtpCodeFromError(error),
    temporary: false,
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;")
    .replace(/'/gu, "&#039;");
}

function encodeHeader(value: string): string {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function encodeBody(value: string): string {
  return Buffer.from(value, "utf8").toString("base64").match(/.{1,76}/gu)?.join("\r\n") || "";
}

function createMessage(config: MailConfig, message: MailMessage): string {
  const boundary = `=_EVATLAS_${randomUUID().replace(/-/gu, "")}`;
  const headers = [
    `From: ${config.from}`,
    `To: ${message.to}`,
    ...(message.replyTo ? [`Reply-To: ${message.replyTo}`] : []),
    `Subject: ${encodeHeader(message.subject)}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${randomUUID()}@${config.host}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    ...(message.autoReply ? ["Auto-Submitted: auto-replied", "X-Auto-Response-Suppress: All"] : []),
  ];

  return [
    ...headers,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    encodeBody(message.text),
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    encodeBody(message.html),
    `--${boundary}--`,
    "",
  ].join("\r\n");
}

class SmtpSession {
  private buffer = "";
  private lines: string[] = [];
  private nextLineResolver: ((line: string) => void) | null = null;
  private closedError: Error | null = null;

  constructor(private readonly socket: TLSSocket) {
    socket.setEncoding("utf8");
    socket.setTimeout(20_000, () => {
      this.closeWithError(new Error("SMTP command timed out."));
      socket.destroy();
    });
    socket.on("data", (chunk: string) => this.receive(chunk));
    socket.on("error", (error: Error) => this.closeWithError(error));
    socket.on("close", () => this.closeWithError(new Error("SMTP connection closed unexpectedly.")));
  }

  private receive(chunk: string) {
    this.buffer += chunk;
    let delimiter = this.buffer.indexOf("\r\n");
    while (delimiter !== -1) {
      const line = this.buffer.slice(0, delimiter);
      this.buffer = this.buffer.slice(delimiter + 2);
      if (this.nextLineResolver) {
        const resolve = this.nextLineResolver;
        this.nextLineResolver = null;
        resolve(line);
      } else {
        this.lines.push(line);
      }
      delimiter = this.buffer.indexOf("\r\n");
    }
  }

  private closeWithError(error: Error) {
    if (this.closedError) return;
    this.closedError = error;
    if (this.nextLineResolver) {
      const resolve = this.nextLineResolver;
      this.nextLineResolver = null;
      resolve("");
    }
  }

  private async nextLine(): Promise<string> {
    if (this.lines.length > 0) return this.lines.shift() as string;
    if (this.closedError) throw this.closedError;

    return new Promise<string>((resolve, reject) => {
      this.nextLineResolver = (line) => {
        if (this.closedError) {
          reject(this.closedError);
          return;
        }
        resolve(line);
      };
    });
  }

  async response(): Promise<SmtpResponse> {
    const lines: string[] = [];
    let code: number | null = null;

    while (true) {
      const line = await this.nextLine();
      const match = /^(\d{3})([ -])(.*)$/u.exec(line);
      if (!match) throw new Error("Malformed SMTP response.");

      const currentCode = Number(match[1]);
      if (code !== null && currentCode !== code) throw new Error("Inconsistent SMTP response.");
      code = currentCode;
      lines.push(match[3]);
      if (match[2] === " ") return { code, message: lines.join("\n") };
    }
  }

  async command(command: string, expectedCodes: number[]): Promise<SmtpResponse> {
    await new Promise<void>((resolve, reject) => {
      this.socket.write(`${command}\r\n`, "utf8", (error) => (error ? reject(error) : resolve()));
    });
    const response = await this.response();
    if (!expectedCodes.includes(response.code)) {
      throw new Error(`SMTP command failed with code ${response.code}.`);
    }
    return response;
  }

  async data(content: string) {
    const dotStuffed = content.replace(/(^|\r\n)\./gu, "$1..");
    await new Promise<void>((resolve, reject) => {
      this.socket.write(`${dotStuffed}\r\n.\r\n`, "utf8", (error) => (error ? reject(error) : resolve()));
    });
    const response = await this.response();
    if (response.code !== 250) throw new Error(`SMTP message was rejected with code ${response.code}.`);
  }

  async quit() {
    try {
      await this.command("QUIT", [221]);
    } finally {
      this.socket.end();
    }
  }

  destroy() {
    this.socket.destroy();
  }
}

function connect(config: MailConfig): Promise<TLSSocket> {
  return new Promise((resolve, reject) => {
    const socket = tls.connect({
      host: config.host,
      port: config.port,
      servername: config.host,
      rejectUnauthorized: true,
    });
    const timeout = setTimeout(() => {
      socket.destroy();
      reject(new Error("SMTP connection timed out."));
    }, 15_000);
    const fail = (error: Error) => {
      clearTimeout(timeout);
      reject(error);
    };

    socket.once("error", fail);
    socket.once("secureConnect", () => {
      clearTimeout(timeout);
      socket.off("error", fail);
      resolve(socket);
    });
  });
}

async function sendMail(config: MailConfig, message: MailMessage): Promise<void> {
  let stage: MailDeliveryStage = "connection";
  let session: SmtpSession | null = null;

  try {
    session = new SmtpSession(await connect(config));
    stage = "greeting";
    const greeting = await session.response();
    if (greeting.code !== 220) throw new Error(`SMTP greeting failed with code ${greeting.code}.`);

    stage = "ehlo";
    const ehlo = await session.command("EHLO evatlas.local", [250]);
    stage = "authentication";
    if (/AUTH(?:[ =].*)?\bPLAIN\b/iu.test(ehlo.message)) {
      const credentials = Buffer.from(`\u0000${config.user}\u0000${config.password}`, "utf8").toString("base64");
      await session.command(`AUTH PLAIN ${credentials}`, [235]);
    } else if (/AUTH(?:[ =].*)?\bLOGIN\b/iu.test(ehlo.message)) {
      await session.command("AUTH LOGIN", [334]);
      await session.command(Buffer.from(config.user, "utf8").toString("base64"), [334]);
      await session.command(Buffer.from(config.password, "utf8").toString("base64"), [235]);
    } else {
      throw new Error("SMTP server does not advertise a supported authentication method.");
    }

    stage = "sender";
    await session.command(`MAIL FROM:<${config.fromAddress}>`, [250]);
    stage = "recipient";
    await session.command(`RCPT TO:<${message.to}>`, [250, 251]);
    stage = "content";
    await session.command("DATA", [354]);
    stage = "delivery";
    await session.data(createMessage(config, message));
    await session.quit();
  } catch (error) {
    session?.destroy();
    if (error instanceof MailDeliveryError) throw error;
    const smtpCode = smtpCodeFromError(error);
    throw new MailDeliveryError(stage, smtpCode, isTemporaryDeliveryError(error, smtpCode), error);
  }
}

async function sendMailWithRetry(config: MailConfig, message: MailMessage): Promise<void> {
  const maximumAttempts = 2;

  for (let attempt = 1; attempt <= maximumAttempts; attempt += 1) {
    try {
      await sendMail(config, message);
      return;
    } catch (error) {
      const safeError = getSafeMailError(error);
      if (!safeError.temporary || attempt === maximumAttempts) throw error;
    }
  }
}

function quoteDetails(submission: QuoteSubmission): Array<[string, string]> {
  return [
    ["Solution", productLabels[submission.product]],
    ["Profil", submission.customerType === "particulier" ? "Particulier" : "Professionnel"],
    ...(submission.organization ? [["Organisation", submission.organization] as [string, string]] : []),
    ["Véhicule", submission.vehicle],
    ["Lieu d’installation", installationLabels[submission.installationType]],
    ["Configuration", mountingLabels[submission.mounting]],
    ["Alimentation électrique", supplyLabels[submission.electricalSupply]],
    ["Ville", submission.city],
    ["Contact", `${submission.firstName} ${submission.lastName}`.trim()],
    ["Téléphone", submission.phone],
    ["E-mail", submission.email],
    ...(submission.simulation
      ? [["Simulation", `${submission.simulation.capacity} kWh · ${submission.simulation.start} % → ${submission.simulation.target} % · ${submission.simulation.power} kW`] as [string, string]]
      : []),
  ];
}

function createInternalMessage(config: MailConfig, submission: QuoteSubmission): MailMessage {
  const details = quoteDetails(submission);
  const rows = details.map(([label, value]) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #d9e1d8;color:#4a5a4c;font-weight:700">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #d9e1d8;color:#142d20">${escapeHtml(value)}</td></tr>`).join("");
  const text = [
    "Nouvelle demande de devis EVAtlas",
    "",
    ...details.map(([label, value]) => `${label} : ${value}`),
  ].join("\n");

  return {
    to: config.notificationEmail,
    replyTo: submission.email || undefined,
    subject: `Nouvelle demande de devis — ${submission.firstName} · ${submission.city}`,
    text,
    html: `<div style="font-family:Arial,sans-serif;color:#142d20;max-width:680px;margin:0 auto;padding:24px"><p style="color:#60815e;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">EVATLAS · NOUVELLE DEMANDE</p><h1 style="font-size:28px;line-height:1.2;margin:0 0 22px">Un nouveau projet est à reprendre.</h1><table role="presentation" style="width:100%;border-collapse:collapse;background:#f8faf5;border:1px solid #d9e1d8">${rows}</table><p style="margin-top:22px;color:#536654;font-size:14px">Répondez directement à cet e-mail pour contacter le client lorsque son adresse e-mail est renseignée.</p></div>`,
  };
}

function createCustomerMessage(submission: QuoteSubmission): MailMessage {
  const firstName = escapeHtml(submission.firstName);
  const text = [
    `Bonjour ${submission.firstName},`,
    "",
    "Merci pour votre demande d’étude EVAtlas.",
    "Un conseiller EVAtlas vous contactera prochainement pour reprendre votre projet de recharge.",
    "",
    "À très bientôt,",
    "L’équipe EVAtlas",
  ].join("\n");

  return {
    to: submission.email,
    subject: "Votre demande EVAtlas a bien été reçue",
    text,
    autoReply: true,
    html: `<div style="font-family:Arial,sans-serif;color:#142d20;max-width:620px;margin:0 auto;padding:32px 24px"><p style="color:#60815e;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">EVATLAS · DEMANDE REÇUE</p><h1 style="font-size:30px;line-height:1.15;margin:0 0 18px">Merci ${firstName}, votre demande est bien reçue.</h1><p style="font-size:17px;line-height:1.6;color:#455846">Un conseiller EVAtlas vous contactera prochainement pour reprendre votre projet de recharge.</p><p style="font-size:17px;line-height:1.6;color:#455846">À très bientôt,<br><strong>L’équipe EVAtlas</strong></p></div>`,
  };
}

export async function sendQuoteEmails(
  submission: QuoteSubmission,
  context?: { requestId?: string },
): Promise<QuoteEmailResult> {
  const config = getMailConfig();
  const internalMessage = createInternalMessage(config, submission);

  // The EVAtlas notification is the critical delivery. Only its failure should
  // make the quote request fail in the browser.
  await sendMailWithRetry(config, internalMessage);

  let customerEmailSent = false;
  if (submission.email) {
    try {
      await sendMailWithRetry(config, createCustomerMessage(submission));
      customerEmailSent = true;
    } catch (error) {
      // Never log the recipient or form contents. The request remains successful
      // because EVAtlas has already received the lead.
      console.warn("Quote customer confirmation failed:", {
        requestId: context?.requestId || "unavailable",
        ...getSafeMailError(error),
      });
    }
  }

  return { internalEmailSent: true, customerEmailSent };
}
