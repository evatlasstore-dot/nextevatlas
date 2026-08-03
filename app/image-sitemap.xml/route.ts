import { blogPosts } from "@/data/blog";
import { absoluteAssetUrl, absolutePageUrl } from "@/lib/site";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export function GET() {
  const urls = blogPosts
    .map(
      (post) => `  <url>
    <loc>${escapeXml(absolutePageUrl(`/blog/${post.slug}/`))}</loc>
    <lastmod>${post.dateModified}</lastmod>
    <image:image>
      <image:loc>${escapeXml(absoluteAssetUrl(post.image))}</image:loc>
    </image:image>
  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
