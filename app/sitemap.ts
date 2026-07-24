import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

const siteUrl = "https://evatlas.store";
const contentDate = new Date("2026-07-17T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/nos-produits`,
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/nos-produits/autel-maxicharger`,
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/simulateur`,
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/devis`,
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/a-propos`,
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/faq`,
      lastModified: contentDate,
      changeFrequency: "monthly",
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: contentDate,
      changeFrequency: "weekly",
    },
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/politique-de-confidentialite`,
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/cookies`,
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
    {
      url: `${siteUrl}/conditions-generales`,
      lastModified: contentDate,
      changeFrequency: "yearly",
    },
  ];

  const articles: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(`${post.dateModified}T00:00:00.000Z`),
    changeFrequency: "monthly",
  }));

  return [...pages, ...articles];
}
