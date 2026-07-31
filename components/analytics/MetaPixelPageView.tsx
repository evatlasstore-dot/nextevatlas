"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
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

  return null;
}
