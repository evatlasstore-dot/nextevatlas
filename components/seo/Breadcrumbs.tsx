import Link from "next/link";
import { absolutePageUrl, canonicalPath } from "@/lib/site";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
  className?: string;
  tone?: "default" | "inverse";
};

/**
 * One shared source for the visible breadcrumb and its BreadcrumbList schema.
 * Keeping both outputs together prevents labels or URLs from drifting apart.
 */
export default function Breadcrumbs({
  items,
  className = "",
  tone = "default",
}: BreadcrumbsProps) {
  if (items.length < 2) return null;

  const currentItem = items.at(-1)!;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absolutePageUrl(currentItem.href)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolutePageUrl(item.href),
    })),
  };

  const classes = [
    "breadcrumb",
    tone === "inverse" ? "breadcrumb--inverse" : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <>
      <nav aria-label="Fil d’Ariane" className={classes}>
        <ol>
          {items.map((item, index) => {
            const isCurrent = index === items.length - 1;

            return (
              <li key={`${item.href}-${item.name}`}>
                {index > 0 && (
                  <span className="breadcrumb-separator" aria-hidden="true">›</span>
                )}
                {isCurrent ? (
                  <span aria-current="page" title={item.name}>{item.name}</span>
                ) : (
                  <Link href={canonicalPath(item.href)}>{item.name}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
