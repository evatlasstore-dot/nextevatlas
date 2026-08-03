import product from "@/data/autel-maxicharger.json";
import { absoluteAssetUrl, absolutePageUrl } from "@/lib/site";

const productUrl = absolutePageUrl("/nos-produits/autel-maxicharger/");

export const autelProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${productUrl}#product`,
  name: product.name,
  description: "Borne de recharge AC connectée jusqu’à 22 kW, proposée avec installation professionnelle par EVAtlas au Maroc.",
  brand: { "@type": "Brand", name: "Autel" },
  manufacturer: { "@type": "Organization", name: "Autel" },
  category: "Borne de recharge pour véhicule électrique",
  image: [absoluteAssetUrl("/images/product/autel-maxicharger/hero-poster.png")],
  url: productUrl,
  mainEntityOfPage: productUrl,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Puissance", value: product.power },
    { "@type": "PropertyValue", name: "Connecteur", value: "Type 2, Mode 3" },
    { "@type": "PropertyValue", name: "Installation", value: product.installation },
    { "@type": "PropertyValue", name: "Câble", value: product.cable },
  ],
};

export const autelFaqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: product.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export const autelBreadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: absolutePageUrl() }, { "@type": "ListItem", position: 2, name: "Nos Produits", item: absolutePageUrl("/nos-produits/") }, { "@type": "ListItem", position: 3, name: product.shortName, item: productUrl }] };
