import homepage from "./homepage.json";
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

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "EVAtlas Maroc",
  url: absolutePageUrl(),
  logo: {
    "@type": "ImageObject",
    url: absoluteAssetUrl("/images/evatlas-logo.png"),
    width: 1421,
    height: 215,
  },
  email: "evatlas.store@gmail.com",
  telephone: "+212712833284",
  areaServed: { "@type": "Country", name: "Maroc" },
  sameAs: [
    "https://www.instagram.com/evatlas.store/",
    "https://www.linkedin.com/company/evatlas-maroc",
    "https://x.com/evatlasmaroc",
    "https://www.facebook.com/profile.php?id=61592317502532",
    "https://www.pinterest.com/evatlasmaroc/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "service client",
    telephone: "+212712833284",
    email: "evatlas.store@gmail.com",
    availableLanguage: ["fr"],
    areaServed: "MA",
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: absolutePageUrl(),
  image: absoluteAssetUrl("/images/evatlas-logo.png"),
  logo: absoluteAssetUrl("/images/evatlas-logo.png"),
  email: "evatlas.store@gmail.com",
  telephone: "+212712833284",
  parentOrganization: { "@id": `${SITE_URL}/#organization` },
  areaServed: [
    { "@type": "Country", name: "Maroc" },
    { "@type": "City", name: "Casablanca" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 Rue Mustapha Manfalouti, Gauthier – RDC",
    addressLocality: "Casablanca",
    postalCode: "20053",
    addressCountry: "MA",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: ["EVAtlas Maroc", "evatlas.store"],
  url: absolutePageUrl(),
  inLanguage: "fr-MA",
  publisher: { "@id": `${SITE_URL}/#organization` },
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
  creator: { "@id": `${SITE_URL}/#organization` },
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
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: { "@id": `${SITE_URL}/#localbusiness` },
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
