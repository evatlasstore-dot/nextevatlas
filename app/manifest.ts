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
      { src: "/images/evatlas-logo.png", sizes: "1421x215", type: "image/png", purpose: "any" },
    ],
  };
}
