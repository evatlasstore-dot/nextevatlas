"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { canonicalPath } from "@/lib/site";

type ProductRouteLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  children: ReactNode;
  eventName?: string;
  href?: string;
};

// The product experience contains a long sticky sequence and autoplay media.
// A native navigation intentionally starts that scene from a clean document state.
export default function ProductRouteLink({
  children,
  eventName,
  href = "/nos-produits/autel-maxicharger/",
  onClick,
  ...props
}: ProductRouteLinkProps) {
  return (
    <a
      {...props}
      href={canonicalPath(href)}
      onClick={(event) => {
        if (eventName) window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: eventName } }));
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
