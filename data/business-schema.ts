import { SOCIAL_NETWORKS } from "@/data/contact";
import {
  absoluteAssetUrl,
  absolutePageUrl,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

export const EVATLAS_BUSINESS_ID = `${SITE_URL}/#business`;
export const EVATLAS_LOGO_ID = `${SITE_URL}/#logo`;
export const EVATLAS_BUSINESS_IMAGE_ID = `${SITE_URL}/#business-image`;

export const evatlasBusinessNode = {
  "@type": "LocalBusiness",
  "@id": EVATLAS_BUSINESS_ID,
  name: SITE_NAME,
  alternateName: "EVAtlas Maroc",
  description: SITE_DESCRIPTION,
  url: absolutePageUrl(),
  telephone: "+212712833284",
  email: "evatlas.store@gmail.com",
  logo: {
    "@type": "ImageObject",
    "@id": EVATLAS_LOGO_ID,
    url: absoluteAssetUrl("/images/evatlas-logo.png"),
    contentUrl: absoluteAssetUrl("/images/evatlas-logo.png"),
    width: 1421,
    height: 215,
  },
  image: {
    "@type": "ImageObject",
    "@id": EVATLAS_BUSINESS_IMAGE_ID,
    url: absoluteAssetUrl("/images/evatlas-team.jpg"),
    contentUrl: absoluteAssetUrl("/images/evatlas-team.jpg"),
    width: 1232,
    height: 822,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Rue Mustapha Manfalouti, Gauthier – RDC",
    postalCode: "20053",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  sameAs: SOCIAL_NETWORKS.map(({ href }) => href),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "service client",
    telephone: "+212712833284",
    email: "evatlas.store@gmail.com",
    availableLanguage: ["fr"],
    areaServed: "MA",
  },
};

export const evatlasBusinessSchema = {
  "@context": "https://schema.org",
  ...evatlasBusinessNode,
};
