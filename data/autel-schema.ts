import product from "@/data/autel-maxicharger.json";

const siteUrl = "https://evatlas.ma";
const productUrl = `${siteUrl}/nos-produits/autel-maxicharger`;

export const autelProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: "Borne de recharge AC connectée jusqu’à 22 kW, proposée avec installation professionnelle par EVAtlas au Maroc.",
  brand: { "@type": "Brand", name: "Autel" },
  url: productUrl
};

export const autelFaqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: product.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export const autelBreadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Nos Produits", item: `${siteUrl}/nos-produits` }, { "@type": "ListItem", position: 3, name: product.shortName, item: productUrl }] };
