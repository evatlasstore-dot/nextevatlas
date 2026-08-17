import homepage from "./homepage.json";
import { EVATLAS_BUSINESS_ID } from "@/data/business-schema";
import {
  absoluteAssetUrl,
  absolutePageUrl,
  IMAGE_ACQUIRE_LICENSE_URL,
  IMAGE_COPYRIGHT_NOTICE,
  IMAGE_LICENSE_URL,
  SITE_DESCRIPTION,
  SITE_HOME_TITLE_WITH_BRAND,
  SITE_NAME,
  SITE_PRIMARY_IMAGE,
  SITE_URL,
} from "@/lib/site";

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["EVAtlas Maroc", "evatlas.store"],
  url: absolutePageUrl(),
  inLanguage: "fr-MA",
  publisher: { "@id": EVATLAS_BUSINESS_ID },
};

const homePrimaryImage = {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#primaryimage`,
  url: absoluteAssetUrl(SITE_PRIMARY_IMAGE),
  contentUrl: absoluteAssetUrl(SITE_PRIMARY_IMAGE),
  width: 1254,
  height: 1254,
  caption: "Autel MaxiCharger, borne de recharge connectée proposée par EVAtlas au Maroc",
  representativeOfPage: true,
  creator: { "@id": EVATLAS_BUSINESS_ID },
  creditText: SITE_NAME,
  copyrightNotice: IMAGE_COPYRIGHT_NOTICE,
  license: IMAGE_LICENSE_URL,
  acquireLicensePage: IMAGE_ACQUIRE_LICENSE_URL,
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: absolutePageUrl(),
  name: SITE_HOME_TITLE_WITH_BRAND,
  description: SITE_DESCRIPTION,
  inLanguage: "fr-MA",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": EVATLAS_BUSINESS_ID },
  mainEntity: { "@id": EVATLAS_BUSINESS_ID },
  primaryImageOfPage: homePrimaryImage,
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  isPartOf: { "@id": `${SITE_URL}/#webpage` },
  mainEntity: homepage.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
