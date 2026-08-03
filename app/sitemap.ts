import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { absoluteAssetUrl, absolutePageUrl } from "@/lib/site";

export const dynamic = "force-static";

const contentDate = new Date("2026-07-17T00:00:00.000Z");
const technicalSheetDate = new Date("2026-07-24T00:00:00.000Z");
const blogLastModified = new Date(
  `${blogPosts.reduce(
    (latest, post) => post.dateModified > latest ? post.dateModified : latest,
    "2026-07-17",
  )}T00:00:00.000Z`,
);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: absolutePageUrl(),
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: absolutePageUrl("/nos-produits/"),
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: absolutePageUrl("/nos-produits/autel-maxicharger/"),
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: absolutePageUrl("/simulateur/"),
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: absolutePageUrl("/devis/"),
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: absolutePageUrl("/a-propos/"),
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: absolutePageUrl("/faq/"),
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: absolutePageUrl("/blog/"),
      lastModified: blogLastModified,
      changeFrequency: "weekly",
    },
    {
      url: absolutePageUrl("/mentions-legales/"),
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: absolutePageUrl("/politique-de-confidentialite/"),
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: absolutePageUrl("/cookies/"),
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: absolutePageUrl("/conditions-generales/"),
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: absoluteAssetUrl("/documents/fiche-technique-evatlas-autel-maxicharger-22kw.pdf"),
      lastModified: technicalSheetDate,
      changeFrequency: "yearly",
    },
  ];

  const articles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absolutePageUrl(`/blog/${post.slug}/`),
    lastModified: new Date(`${post.dateModified}T00:00:00.000Z`),
    changeFrequency: "monthly",
  }));

  return [...pages, ...articles];
}
