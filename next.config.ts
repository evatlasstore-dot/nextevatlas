import type { NextConfig } from "next";
import { absoluteAssetUrl } from "./lib/site";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/documents/fiche-technique-evatlas-autel-maxicharger-22kw.pdf",
        headers: [
          {
            key: "Link",
            value: `<${absoluteAssetUrl("/documents/fiche-technique-evatlas-autel-maxicharger-22kw.pdf")}>; rel="canonical"`,
          },
          { key: "X-Robots-Tag", value: "index, follow" },
        ],
      },
    ];
  },
};

export default nextConfig;
