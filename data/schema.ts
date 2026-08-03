import homepage from "./homepage.json";
import { absoluteAssetUrl, absolutePageUrl, SITE_NAME, SITE_URL } from "@/lib/site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
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
  url: absolutePageUrl(),
  inLanguage: "fr-MA",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homepage.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};
