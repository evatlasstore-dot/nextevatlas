import product from "@/data/autel-maxicharger.json";
import { absoluteAssetUrl, absolutePageUrl } from "@/lib/site";

const productUrl = absolutePageUrl("/nos-produits/autel-maxicharger/");

export const autelProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `${productUrl}#product`,
  name: product.name,
  description: "Borne de recharge connectée Type 2 jusqu’à 22 kW proposée par EVAtlas au Maroc.",
  brand: { "@type": "Brand", name: "Autel" },
  manufacturer: { "@type": "Organization", name: "Autel" },
  category: "Borne de recharge pour véhicule électrique",
  image: [absoluteAssetUrl("/images/product/autel-maxicharger/hero-poster.png")],
  url: productUrl,
  mainEntityOfPage: productUrl,
  additionalProperty: [
    { "@type": "PropertyValue", name: "Puissance", value: product.power },
    { "@type": "PropertyValue", name: "Connecteur", value: "Type 2" },
    { "@type": "PropertyValue", name: "Intensité maximale", value: "32 A" },
    { "@type": "PropertyValue", name: "Connectivité", value: "Wi-Fi, Bluetooth, Ethernet, RFID" },
    { "@type": "PropertyValue", name: "Protection", value: "IP54, IK08" },
  ],
};

export const autelFaqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: product.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
