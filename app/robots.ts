import type { MetadataRoute } from "next";
import { absolutePageUrl, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      absolutePageUrl("/sitemap.xml"),
      absolutePageUrl("/image-sitemap.xml"),
    ],
    host: SITE_URL,
  };
}
