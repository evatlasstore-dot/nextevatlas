import { randomUUID } from "node:crypto";

import { NextRequest, NextResponse } from "next/server";

import { getSafeMailError, sendQuoteEmails } from "@/lib/quote-email";
import { parseQuoteSubmission } from "@/lib/quote-request";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 16_384;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 4;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimits = new Map<string, RateLimitEntry>();

function json(data: Record<string, unknown>, status = 200, headers?: HeadersInit) {
  return NextResponse.json(data, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

function isSameOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const requestHost = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").split(",")[0].trim();
    return Boolean(requestHost) && new URL(origin).host === requestHost;
  } catch {
    return false;
  }
}

function getClientKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

function consumeRateLimit(key: string): { allowed: true } | { allowed: false; retryAfterSeconds: number } {
  const now = Date.now();
  if (rateLimits.size > 500) {
    for (const [entryKey, entry] of rateLimits) {
      if (entry.resetAt <= now) rateLimits.delete(entryKey);
    }
  }

  const existing = rateLimits.get(key);
  if (!existing || existing.resetAt <= now) {
    rateLimits.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)) };
  }

  existing.count += 1;
  return { allowed: true };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return json({ ok: false, error: "Origine de la demande non autorisée." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: "La demande est trop volumineuse." }, 413);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: "Le format de la demande est invalide." }, 400);
  }

  if (!isRecord(body)) {
    return json({ ok: false, error: "Le format de la demande est invalide." }, 400);
  }

  // Bots commonly fill hidden fields. Return a neutral answer without sending any e-mail.
  if (typeof body.website === "string" && body.website.trim()) {
    return json({ ok: true, requestId: randomUUID(), customerEmailSent: false });
  }

  const rateLimit = consumeRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    return json(
      { ok: false, error: "Trop de demandes ont été envoyées. Réessayez dans quelques minutes." },
      429,
      { "Retry-After": String(rateLimit.retryAfterSeconds) },
    );
  }

  const parsed = parseQuoteSubmission(body);
  if (!parsed.success) {
    return json({ ok: false, error: "Certaines informations sont à corriger.", fieldErrors: parsed.errors }, 422);
  }

  const requestId = randomUUID();
  try {
    const result = await sendQuoteEmails(parsed.data, { requestId });
    return json(
      {
        ok: true,
        requestId,
        internalEmailSent: result.internalEmailSent,
        customerEmailSent: result.customerEmailSent,
      },
      201,
    );
  } catch (error) {
    // Do not log the submission itself: it contains personal information.
    console.error("Quote e-mail delivery failed:", {
      requestId,
      ...getSafeMailError(error),
    });
    return json({ ok: false, error: "Le service d’envoi est momentanément indisponible. Réessayez dans quelques instants ou contactez notre équipe." }, 503);
  }
}
