"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { canonicalPath } from "@/lib/site";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName?: string;
  children: ReactNode;
};

export default function TrackedLink({ eventName, href, onClick, children, ...props }: TrackedLinkProps) {
  const canonicalHref = typeof href === "string" ? canonicalPath(href) : href;

  return (
    <Link
      {...props}
      href={canonicalHref}
      onClick={(event) => {
        if (eventName && typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: eventName } }));
        }
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
