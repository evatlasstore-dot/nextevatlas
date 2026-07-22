import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EVAtlas — Recharge électrique au Maroc",
    short_name: "EVAtlas",
    description: "Bornes de recharge connectées et accompagnement d’installation au Maroc.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2f4ed",
    theme_color: "#173326",
    lang: "fr-MA",
    icons: [
      { src: "/images/evatlas-icon-192.png?v=2", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/images/evatlas-icon-512.png?v=2", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
