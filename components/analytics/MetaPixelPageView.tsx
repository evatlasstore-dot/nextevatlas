"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

type TrackingEventDetail = {
  event?: unknown;
  eventId?: unknown;
  params?: unknown;
};

const allowedLeadParameters = new Set([
  "event_id",
  "lead_source",
  "lead_medium",
  "lead_campaign",
  "landing_page",
  "conversion_page",
  "device_type",
]);

function safeTrackingParameters(value: unknown): Record<string, string | number | boolean> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return {};

  const parameters: Record<string, string | number | boolean> = {};
  for (const [key, item] of Object.entries(value)) {
    if (!allowedLeadParameters.has(key)) continue;
    if (typeof item === "string") parameters[key] = item.slice(0, 200);
    if (typeof item === "number" && Number.isFinite(item)) parameters[key] = item;
    if (typeof item === "boolean") parameters[key] = item;
  }
  return parameters;
}

export default function MetaPixelPageView() {
  const pathname = usePathname();
  const initialPageViewTracked = useRef(false);

  useEffect(() => {
    if (!initialPageViewTracked.current) {
      initialPageViewTracked.current = true;
      return;
    }

    window.fbq?.("track", "PageView");
  }, [pathname]);

  useEffect(() => {
    const handleTrackingEvent = (event: Event) => {
      const detail = (event as CustomEvent<TrackingEventDetail>).detail;
      const eventName = typeof detail?.event === "string" ? detail.event : "";
      if (!/^[a-z][a-z0-9_]{0,39}$/u.test(eventName)) return;

      const parameters = safeTrackingParameters(detail.params);
      window.gtag?.("event", eventName, parameters);

      if (eventName === "generate_lead") {
        const eventId = typeof detail.eventId === "string" ? detail.eventId.slice(0, 100) : "";
        window.fbq?.("track", "Lead", {}, eventId ? { eventID: eventId } : undefined);
      } else {
        window.fbq?.("trackCustom", eventName);
      }
    };

    window.addEventListener("evatlas:tracking", handleTrackingEvent);
    return () => window.removeEventListener("evatlas:tracking", handleTrackingEvent);
  }, []);

  return null;
}
