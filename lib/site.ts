export const SITE_URL = "https://www.evatlas.store";
export const SITE_NAME = "EVAtlas";
export const SITE_LOCALE = "fr-MA";

const hasFileExtension = (pathname: string) => /\/[^/]+\.[a-z0-9]+$/iu.test(pathname);

/**
 * Keep every internal page link on the canonical trailing-slash format used by
 * Next.js. Query strings and fragments are preserved, while static files are
 * left untouched.
 */
export function canonicalPath(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;

  const suffixIndex = href.search(/[?#]/u);
  const pathname = suffixIndex === -1 ? href : href.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : href.slice(suffixIndex);

  if (pathname === "/" || pathname.endsWith("/") || hasFileExtension(pathname)) {
    return `${pathname}${suffix}`;
  }

  return `${pathname}/${suffix}`;
}

export function absolutePageUrl(pathname = "/"): string {
  const path = canonicalPath(pathname.startsWith("/") ? pathname : `/${pathname}`);
  return `${SITE_URL}${path}`;
}

export function absoluteAssetUrl(pathname: string): string {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${SITE_URL}${path}`;
}
