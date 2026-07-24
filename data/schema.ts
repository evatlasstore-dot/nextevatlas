import homepage from "./homepage.json";

const siteUrl = "https://evatlas.store";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EVAtlas",
  url: siteUrl,
  email: "evatlas.store@gmail.com",
  telephone: "+212694592374",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EVAtlas",
  url: siteUrl,
  email: "evatlas.store@gmail.com",
  telephone: "+212694592374",
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
  name: "EVAtlas",
  url: siteUrl,
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
