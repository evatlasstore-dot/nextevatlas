export type LeadAttributionTouch = {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  term: string;
  referrer: string;
  landingPage: string;
  capturedAt: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
};

export type LeadAttribution = {
  firstTouch: LeadAttributionTouch;
  lastTouch: LeadAttributionTouch;
  conversionPage: string;
  deviceType: "mobile" | "tablet" | "desktop" | "unknown";
};

type StoredAttribution = Pick<LeadAttribution, "firstTouch" | "lastTouch"> & {
  expiresAt: number;
};

const STORAGE_KEY = "evatlas_lead_attribution_v1";
const RETENTION_MS = 90 * 24 * 60 * 60 * 1_000;
const MAX_PATH_LENGTH = 300;
const MAX_REFERRER_LENGTH = 400;
const MAX_CAMPAIGN_LENGTH = 160;
const MAX_IDENTIFIER_LENGTH = 220;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanString(value: unknown, maximum: number): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[\u0000-\u001f\u007f]/gu, " ").replace(/\s+/gu, " ").slice(0, maximum);
}

function cleanPath(value: unknown): string {
  const path = cleanString(value, MAX_PATH_LENGTH);
  return path.startsWith("/") ? path : "";
}

function cleanDate(value: unknown): string {
  const date = cleanString(value, 40);
  return date && Number.isFinite(Date.parse(date)) ? date : "";
}

function sanitizeTouch(value: unknown): LeadAttributionTouch | null {
  if (!isRecord(value)) return null;

  const source = cleanString(value.source, 80);
  const medium = cleanString(value.medium, 80);
  const landingPage = cleanPath(value.landingPage);
  const capturedAt = cleanDate(value.capturedAt);
  if (!source || !medium || !landingPage || !capturedAt) return null;

  return {
    source,
    medium,
    campaign: cleanString(value.campaign, MAX_CAMPAIGN_LENGTH),
    content: cleanString(value.content, MAX_CAMPAIGN_LENGTH),
    term: cleanString(value.term, MAX_CAMPAIGN_LENGTH),
    referrer: cleanString(value.referrer, MAX_REFERRER_LENGTH),
    landingPage,
    capturedAt,
    gclid: cleanString(value.gclid, MAX_IDENTIFIER_LENGTH),
    fbclid: cleanString(value.fbclid, MAX_IDENTIFIER_LENGTH),
    msclkid: cleanString(value.msclkid, MAX_IDENTIFIER_LENGTH),
  };
}

export function sanitizeLeadAttribution(value: unknown): LeadAttribution | null {
  if (!isRecord(value)) return null;

  const firstTouch = sanitizeTouch(value.firstTouch);
  const lastTouch = sanitizeTouch(value.lastTouch);
  if (!firstTouch || !lastTouch) return null;

  const device = cleanString(value.deviceType, 16);
  const deviceType: LeadAttribution["deviceType"] =
    device === "mobile" || device === "tablet" || device === "desktop" ? device : "unknown";

  return {
    firstTouch,
    lastTouch,
    conversionPage: cleanPath(value.conversionPage) || lastTouch.landingPage,
    deviceType,
  };
}

function safePagePath(): string {
  if (typeof window === "undefined") return "/";
  return `${window.location.pathname || "/"}`.slice(0, MAX_PATH_LENGTH);
}

function safeReferrer(): string {
  if (typeof document === "undefined" || !document.referrer) return "";

  try {
    const referrer = new URL(document.referrer);
    if (typeof window !== "undefined" && referrer.origin === window.location.origin) return "";
    return `${referrer.origin}${referrer.pathname}`.slice(0, MAX_REFERRER_LENGTH);
  } catch {
    return "";
  }
}

function sourceFromReferrer(referrer: string): { source: string; medium: string } {
  if (!referrer) return { source: "direct", medium: "(none)" };

  let hostname = "";
  try {
    hostname = new URL(referrer).hostname.replace(/^www\./u, "").toLowerCase();
  } catch {
    return { source: "referral", medium: "referral" };
  }

  const searchEngines: Array<[RegExp, string]> = [
    [/(^|\.)google\./u, "google"],
    [/(^|\.)bing\.com$/u, "bing"],
    [/(^|\.)yahoo\./u, "yahoo"],
    [/(^|\.)duckduckgo\.com$/u, "duckduckgo"],
  ];
  const searchEngine = searchEngines.find(([pattern]) => pattern.test(hostname));
  if (searchEngine) return { source: searchEngine[1], medium: "organic" };

  const socialNetworks: Array<[RegExp, string]> = [
    [/(^|\.)(facebook|instagram)\.com$/u, hostname.includes("instagram") ? "instagram" : "facebook"],
    [/(^|\.)linkedin\.com$/u, "linkedin"],
    [/(^|\.)pinterest\.(com|fr)$/u, "pinterest"],
    [/(^|\.)(x|twitter)\.com$/u, "x"],
    [/(^|\.)tiktok\.com$/u, "tiktok"],
    [/(^|\.)youtube\.com$/u, "youtube"],
    [/(^|\.)whatsapp\.com$/u, "whatsapp"],
  ];
  const social = socialNetworks.find(([pattern]) => pattern.test(hostname));
  if (social) return { source: social[1], medium: "social" };

  return { source: hostname || "referral", medium: "referral" };
}

function createCurrentTouch(): LeadAttributionTouch {
  const parameters = typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search);
  const referrer = safeReferrer();
  const gclid = cleanString(parameters.get("gclid"), MAX_IDENTIFIER_LENGTH);
  const fbclid = cleanString(parameters.get("fbclid"), MAX_IDENTIFIER_LENGTH);
  const msclkid = cleanString(parameters.get("msclkid"), MAX_IDENTIFIER_LENGTH);
  const utmSource = cleanString(parameters.get("utm_source"), 80);
  const utmMedium = cleanString(parameters.get("utm_medium"), 80);

  let inferred = sourceFromReferrer(referrer);
  if (gclid) inferred = { source: "google", medium: "cpc" };
  if (fbclid) inferred = { source: "meta", medium: "paid_social" };
  if (msclkid) inferred = { source: "microsoft", medium: "cpc" };

  return {
    source: utmSource || inferred.source,
    medium: utmMedium || inferred.medium,
    campaign: cleanString(parameters.get("utm_campaign"), MAX_CAMPAIGN_LENGTH),
    content: cleanString(parameters.get("utm_content"), MAX_CAMPAIGN_LENGTH),
    term: cleanString(parameters.get("utm_term"), MAX_CAMPAIGN_LENGTH),
    referrer,
    landingPage: safePagePath(),
    capturedAt: new Date().toISOString(),
    gclid,
    fbclid,
    msclkid,
  };
}

function readStoredAttribution(): StoredAttribution | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const value: unknown = JSON.parse(raw);
    if (!isRecord(value) || typeof value.expiresAt !== "number" || value.expiresAt <= Date.now()) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }

    const sanitized = sanitizeLeadAttribution({
      firstTouch: value.firstTouch,
      lastTouch: value.lastTouch,
      conversionPage: "/",
      deviceType: "unknown",
    });
    return sanitized
      ? { firstTouch: sanitized.firstTouch, lastTouch: sanitized.lastTouch, expiresAt: value.expiresAt }
      : null;
  } catch {
    return null;
  }
}

function writeStoredAttribution(value: StoredAttribution): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Attribution must never prevent navigation or submission of the quote form.
  }
}

function isMeaningfulTouch(touch: LeadAttributionTouch): boolean {
  return touch.source !== "direct" || touch.medium !== "(none)" || Boolean(touch.gclid || touch.fbclid || touch.msclkid);
}

export function captureLeadAttribution(): void {
  if (typeof window === "undefined") return;

  const currentTouch = createCurrentTouch();
  const stored = readStoredAttribution();
  const firstTouch = stored?.firstTouch || currentTouch;
  const lastTouch = !stored || isMeaningfulTouch(currentTouch) ? currentTouch : stored.lastTouch;

  writeStoredAttribution({
    firstTouch,
    lastTouch,
    expiresAt: Date.now() + RETENTION_MS,
  });
}

function detectDeviceType(): LeadAttribution["deviceType"] {
  if (typeof window === "undefined") return "unknown";
  const width = window.innerWidth;
  if (width <= 767) return "mobile";
  if (width <= 1100) return "tablet";
  return "desktop";
}

export function getLeadAttributionSnapshot(): LeadAttribution | null {
  if (typeof window === "undefined") return null;

  let stored = readStoredAttribution();
  if (!stored) {
    captureLeadAttribution();
    stored = readStoredAttribution();
  }
  if (!stored) return null;

  return sanitizeLeadAttribution({
    firstTouch: stored.firstTouch,
    lastTouch: stored.lastTouch,
    conversionPage: safePagePath(),
    deviceType: detectDeviceType(),
  });
}
