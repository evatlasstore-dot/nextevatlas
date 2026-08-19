"use client";

import { useEffect } from "react";

import { captureLeadAttribution } from "@/lib/lead-attribution";

export default function LeadAttributionTracker() {
  useEffect(() => {
    captureLeadAttribution();
  }, []);

  return null;
}
