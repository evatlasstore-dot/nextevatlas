export const SITE_URL = "https://www.evatlas.store";
export const SITE_NAME = "EVAtlas";
export const SITE_LOCALE = "fr-MA";
export const SITE_HOME_TITLE = "Bornes de recharge au Maroc";
export const SITE_HOME_TITLE_WITH_BRAND = `${SITE_HOME_TITLE} | ${SITE_NAME}`;
export const SITE_DESCRIPTION =
  "EVAtlas accompagne particuliers et professionnels au Maroc dans le choix et l’installation de bornes de recharge connectées jusqu’à 22 kW.";
export const SITE_PRIMARY_IMAGE =
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-01-closed.png";
export const SITE_SOCIAL_IMAGE =
  "/images/product/autel-maxicharger/hero-poster.png";
export const IMAGE_COPYRIGHT_NOTICE = "© EVAtlas. Tous droits réservés.";
export const IMAGE_LICENSE_URL = `${SITE_URL}/licence-images/`;
export const IMAGE_ACQUIRE_LICENSE_URL = `${IMAGE_LICENSE_URL}#demande-autorisation`;

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
