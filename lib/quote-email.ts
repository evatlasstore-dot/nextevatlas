import { randomUUID } from "node:crypto";
import tls, { type TLSSocket } from "node:tls";

import { WHATSAPP_NUMBER, WHATSAPP_URL } from "@/data/contact";
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

const emailSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://evatlas.store").replace(/\/+$/u, "");
const emailLogoUrl = `${emailSiteUrl}/images/evatlas-logo.png`;
const emailProductUrl = `${emailSiteUrl}/nos-produits/autel-maxicharger/`;
const emailInstagramUrl = "https://www.instagram.com/evatlas.store/";
const emailLinkedInUrl = "https://www.linkedin.com/company/evatlas-maroc";

type EmailButtonVariant = "primary" | "secondary" | "light";

function emailButton(label: string, href: string, variant: EmailButtonVariant = "primary"): string {
  const variants: Record<EmailButtonVariant, { background: string; border: string; color: string }> = {
    primary: { background: "#173f2b", border: "#173f2b", color: "#ffffff" },
    secondary: { background: "#dff2a5", border: "#dff2a5", color: "#173f2b" },
    light: { background: "#ffffff", border: "#cdd7c9", color: "#173f2b" },
  };
  const colors = variants[variant];

  return `<a class="email-action" href="${escapeHtml(href)}" style="display:inline-block;background:${colors.background};border:1px solid ${colors.border};border-radius:999px;color:${colors.color};font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:18px;padding:13px 20px;text-align:center;text-decoration:none">${escapeHtml(label)}&nbsp;&nbsp;→</a>`;
}

function emailLayout(options: {
  preheader: string;
  eyebrow: string;
  title: string;
  introduction: string;
  content: string;
  footerNote: string;
}): string {
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(options.title)}</title>
    <style>
      @media only screen and (max-width:620px) {
        .email-page-pad { padding: 14px 8px !important; }
        .email-card-pad { padding: 28px 20px !important; }
        .email-header-pad { padding: 22px 20px !important; }
        .email-title { font-size: 30px !important; line-height: 35px !important; }
        .email-intro { font-size: 16px !important; line-height: 25px !important; }
        .email-column { display: block !important; width: 100% !important; }
        .email-column-gap { display: none !important; }
        .email-action-cell { display: block !important; width: 100% !important; padding: 0 0 10px !important; }
        .email-action { box-sizing: border-box !important; display: block !important; width: 100% !important; }
        .email-detail-label { width: 42% !important; }
        .email-logo { width: 176px !important; }
      }
    </style>
  </head>
  <body style="background:#eef2e9;margin:0;padding:0;-webkit-text-size-adjust:100%;word-spacing:normal">
    <div style="display:none;font-size:1px;color:#eef2e9;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden">${escapeHtml(options.preheader)}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2e9;border-collapse:collapse">
      <tr>
        <td class="email-page-pad" align="center" style="padding:32px 14px">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;max-width:680px">
            <tr>
              <td class="email-header-pad" style="background:#f9faf6;border:1px solid #dbe2d7;border-bottom:0;border-radius:28px 28px 0 0;padding:24px 34px">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">
                  <tr>
                    <td>
                      <a href="${emailSiteUrl}/" style="text-decoration:none">
                        <img class="email-logo" src="${emailLogoUrl}" width="190" alt="EVAtlas" style="border:0;display:block;height:auto;max-width:100%;outline:none;text-decoration:none">
                      </a>
                    </td>
                    <td align="right" style="color:#718272;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase">Recharge connectée</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="email-card-pad" style="background:#ffffff;border-left:1px solid #dbe2d7;border-right:1px solid #dbe2d7;padding:42px 44px 18px">
                <p style="color:#688260;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;line-height:18px;margin:0 0 14px;text-transform:uppercase">${escapeHtml(options.eyebrow)}</p>
                <h1 class="email-title" style="color:#102f20;font-family:Arial,Helvetica,sans-serif;font-size:38px;font-weight:700;letter-spacing:-1.2px;line-height:43px;margin:0 0 16px">${escapeHtml(options.title)}</h1>
                <p class="email-intro" style="color:#56675a;font-family:Arial,Helvetica,sans-serif;font-size:17px;line-height:27px;margin:0">${escapeHtml(options.introduction)}</p>
              </td>
            </tr>
            <tr>
              <td class="email-card-pad" style="background:#ffffff;border-left:1px solid #dbe2d7;border-right:1px solid #dbe2d7;padding:22px 44px 42px">
                ${options.content}
              </td>
            </tr>
            <tr>
              <td style="background:#173f2b;border-radius:0 0 28px 28px;padding:26px 34px">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">
                  <tr>
                    <td class="email-column" style="color:#f5f8f2;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:19px;width:58%">${escapeHtml(options.footerNote)}</td>
                    <td class="email-column" align="right" style="color:#dff2a5;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:19px">
                      <a href="${emailSiteUrl}/" style="color:#dff2a5;text-decoration:none">evatlas.store</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${emailInstagramUrl}" style="color:#dff2a5;text-decoration:none">Instagram</a>&nbsp;&nbsp;·&nbsp;&nbsp;<a href="${emailLinkedInUrl}" style="color:#dff2a5;text-decoration:none">LinkedIn</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderDetailRows(details: Array<[string, string]>): string {
  return details
    .map(
      ([label, value], index) => `<tr>
        <td class="email-detail-label" style="border-bottom:${index === details.length - 1 ? "0" : "1px solid #e2e7df"};color:#718074;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:.7px;line-height:18px;padding:13px 12px;text-transform:uppercase;width:36%">${escapeHtml(label)}</td>
        <td style="border-bottom:${index === details.length - 1 ? "0" : "1px solid #e2e7df"};color:#173322;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;line-height:21px;padding:13px 12px">${escapeHtml(value)}</td>
      </tr>`,
    )
    .join("");
}

function detailCard(title: string, details: Array<[string, string]>): string {
  return `<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f7f9f4;border:1px solid #dce4d8;border-collapse:separate;border-radius:18px;margin:0 0 16px;overflow:hidden">
    <tr>
      <td style="border-bottom:1px solid #dce4d8;color:#5e7959;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.6px;padding:15px 16px 11px;text-transform:uppercase">${escapeHtml(title)}</td>
    </tr>
    <tr>
      <td>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">${renderDetailRows(details)}</table>
      </td>
    </tr>
  </table>`;
}

function normalizeWhatsAppPhone(phone: string): string {
  let digits = phone.replace(/\D/gu, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = `212${digits.slice(1)}`;
  if (digits.length === 9) digits = `212${digits}`;
  return digits;
}

function createInternalMessage(config: MailConfig, submission: QuoteSubmission): MailMessage {
  const details = quoteDetails(submission);
  const customerLabels = new Set(["Profil", "Organisation", "Ville", "Contact", "Téléphone", "E-mail"]);
  const customerDetails = details.filter(([label]) => customerLabels.has(label));
  const projectDetails = details.filter(([label]) => !customerLabels.has(label));
  const mailtoUrl = `mailto:${submission.email}?subject=${encodeURIComponent(`Votre projet de recharge EVAtlas — ${submission.city}`)}`;
  const phoneUrl = `tel:${submission.phone.replace(/[^\d+]/gu, "")}`;
  const clientWhatsAppNumber = normalizeWhatsAppPhone(submission.phone);
  const clientWhatsAppUrl = `https://wa.me/${clientWhatsAppNumber}?text=${encodeURIComponent(`Bonjour ${submission.firstName}, je vous contacte au sujet de votre demande de devis EVAtlas.`)}`;
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
    html: emailLayout({
      preheader: `${submission.firstName} ${submission.lastName} vient d’envoyer une demande de devis à ${submission.city}.`,
      eyebrow: "Nouvelle demande · À traiter",
      title: "Un nouveau projet est prêt à être repris.",
      introduction: `${submission.firstName} ${submission.lastName} souhaite être accompagné pour son projet de recharge à ${submission.city}. Toutes les informations transmises sont réunies ci-dessous.`,
      content: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#173f2b;border-collapse:separate;border-radius:20px;margin:0 0 20px">
          <tr>
            <td style="padding:22px 24px">
              <p style="color:#cfe99a;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;line-height:16px;margin:0 0 7px;text-transform:uppercase">Contact prioritaire</p>
              <p style="color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:22px;font-weight:700;line-height:28px;margin:0">${escapeHtml(`${submission.firstName} ${submission.lastName}`.trim())}</p>
              <p style="color:#d6dfd8;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:22px;margin:5px 0 0">${escapeHtml(`${submission.city} · ${submission.customerType === "particulier" ? "Particulier" : "Professionnel"}`)}</p>
            </td>
          </tr>
        </table>
        ${detailCard("Coordonnées du client", customerDetails)}
        ${detailCard("Projet de recharge", projectDetails)}
        <p style="color:#5b6d5e;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:21px;margin:22px 0 12px">Répondez directement à cet e-mail ou choisissez une action rapide :</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">
          <tr>
            <td class="email-action-cell" style="padding:0 8px 0 0">${emailButton("Répondre par e-mail", mailtoUrl)}</td>
            <td class="email-action-cell" style="padding:0 8px 0 0">${emailButton("Appeler", phoneUrl, "light")}</td>
            <td class="email-action-cell" style="padding:0">${emailButton("WhatsApp", clientWhatsAppUrl, "secondary")}</td>
          </tr>
        </table>`,
      footerNote: "Notification privée EVAtlas · Les informations de ce message proviennent du formulaire de devis.",
    }),
  };
}

function createCustomerMessage(submission: QuoteSubmission): MailMessage {
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
    html: emailLayout({
      preheader: "Votre demande EVAtlas a bien été reçue. Un conseiller vous contactera prochainement.",
      eyebrow: "Demande reçue · Confirmation",
      title: `Merci ${submission.firstName}, votre projet est entre de bonnes mains.`,
      introduction: "Votre demande nous est bien parvenue. Un conseiller EVAtlas va maintenant l’étudier et vous contactera prochainement pour reprendre votre projet de recharge.",
      content: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#edf6d7;border:1px solid #d4e5ad;border-collapse:separate;border-radius:20px;margin:0 0 22px">
          <tr>
            <td width="58" valign="top" style="padding:20px 0 20px 20px">
              <div style="background:#173f2b;border-radius:50%;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:700;height:38px;line-height:38px;text-align:center;width:38px">✓</div>
            </td>
            <td style="padding:19px 20px 19px 12px">
              <p style="color:#173f2b;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:700;line-height:22px;margin:0 0 3px">Confirmation enregistrée</p>
              <p style="color:#57704f;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;margin:0">Aucune autre action n’est nécessaire pour le moment.</p>
            </td>
          </tr>
        </table>
        ${detailCard("Résumé de votre demande", [
          ["Solution", productLabels[submission.product]],
          ["Véhicule", submission.vehicle],
          ["Installation", `${installationLabels[submission.installationType]} · ${mountingLabels[submission.mounting]}`],
          ["Ville", submission.city],
        ])}
        <p style="color:#607160;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;letter-spacing:1.5px;line-height:17px;margin:26px 0 14px;text-transform:uppercase">Les prochaines étapes</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin:0 0 26px">
          <tr>
            <td width="48" valign="top" style="padding:0 0 18px"><div style="background:#173f2b;border-radius:50%;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;height:32px;line-height:32px;text-align:center;width:32px">01</div></td>
            <td valign="top" style="padding:2px 0 18px"><p style="color:#173322;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;line-height:20px;margin:0 0 3px">Demande reçue</p><p style="color:#69796b;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;margin:0">Vos informations ont été transmises à notre équipe.</p></td>
          </tr>
          <tr>
            <td width="48" valign="top" style="padding:0 0 18px"><div style="background:#dff2a5;border-radius:50%;color:#173f2b;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;height:32px;line-height:32px;text-align:center;width:32px">02</div></td>
            <td valign="top" style="padding:2px 0 18px"><p style="color:#173322;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;line-height:20px;margin:0 0 3px">Étude de votre projet</p><p style="color:#69796b;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;margin:0">Un conseiller analyse votre besoin et votre configuration.</p></td>
          </tr>
          <tr>
            <td width="48" valign="top"><div style="background:#f2f5ef;border:1px solid #cfdbcc;border-radius:50%;color:#527057;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;height:30px;line-height:30px;text-align:center;width:30px">03</div></td>
            <td valign="top" style="padding:2px 0 0"><p style="color:#173322;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;line-height:20px;margin:0 0 3px">Prise de contact</p><p style="color:#69796b;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:20px;margin:0">Notre équipe revient vers vous pour préciser la solution.</p></td>
          </tr>
        </table>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse">
          <tr>
            <td class="email-action-cell" style="padding:0 8px 0 0">${emailButton("Découvrir la MaxiCharger", emailProductUrl)}</td>
            <td class="email-action-cell" style="padding:0">${emailButton("Contacter EVAtlas", `${WHATSAPP_URL}?text=${encodeURIComponent(`Bonjour EVAtlas, je viens d’envoyer une demande de devis au nom de ${submission.firstName} ${submission.lastName}.`)}`, "secondary")}</td>
          </tr>
        </table>
        <p style="color:#738175;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:19px;margin:22px 0 0">Besoin d’une réponse rapide ? Écrivez-nous sur WhatsApp au ${escapeHtml(WHATSAPP_NUMBER)}.</p>`,
      footerNote: "EVAtlas · La recharge électrique connectée, installée avec soin et pensée pour le Maroc.",
    }),
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
