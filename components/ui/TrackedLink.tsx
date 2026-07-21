"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName?: string;
  children: ReactNode;
};

export default function TrackedLink({ eventName, onClick, children, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
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
