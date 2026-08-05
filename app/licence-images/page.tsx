import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Licence et utilisation des images",
  description:
    "Conditions d’utilisation, de reproduction et de demande d’autorisation pour les images publiées par EVAtlas.",
  alternates: { canonical: "/licence-images/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/licence-images/",
    title: "Licence et utilisation des images | EVAtlas",
    description: "Droits d’auteur et procédure d’autorisation pour les images EVAtlas.",
  },
};

const sections: LegalSection[] = [
  {
    id: "titularite",
    title: "Titularité des images",
    paragraphs: [
      "EVAtlas est titulaire des droits d’auteur sur les photographies, rendus, illustrations, visuels, créations graphiques et autres images publiés sur le site www.evatlas.store, sauf mention écrite contraire apparaissant à proximité d’un contenu déterminé.",
      "La mise en ligne d’une image ne constitue ni une cession de droits ni une autorisation de reproduction. Les droits non expressément accordés restent réservés à EVAtlas.",
    ],
  },
  {
    id: "utilisation-autorisee",
    title: "Utilisation autorisée du site",
    paragraphs: [
      "Les visiteurs peuvent consulter les images dans le cadre normal de la navigation sur le site. Leur affichage temporaire par le navigateur ne confère aucun droit d’exploitation, de modification, de téléchargement à des fins de republication ou de diffusion à des tiers.",
      "Toute utilisation dépassant la simple consultation nécessite une autorisation écrite préalable d’EVAtlas.",
    ],
  },
  {
    id: "utilisations-interdites",
    title: "Utilisations soumises à autorisation",
    paragraphs: [
      "Sans accord écrit préalable, il est notamment interdit de reproduire, modifier, recadrer, distribuer, revendre, intégrer dans une publicité, publier sur un autre site, transmettre à une banque d’images ou exploiter commercialement les images EVAtlas.",
      "Une autorisation peut prévoir des limites portant sur le support, la durée, le territoire, le format, le contexte de publication et la mention de crédit obligatoire.",
    ],
    items: [
      "Publication sur un site internet, une place de marché ou un réseau social tiers.",
      "Utilisation dans une brochure, une publicité, une présentation ou un document commercial.",
      "Modification, détourage, adaptation ou création d’un visuel dérivé.",
      "Transmission, revente ou mise à disposition auprès d’un tiers.",
    ],
  },
  {
    id: "demande-autorisation",
    title: "Demander une autorisation",
    paragraphs: [
      "Pour demander l’autorisation d’utiliser une image, écrivez à evatlas.store@gmail.com avec l’objet « Demande de licence image ». La demande doit identifier précisément l’image et expliquer l’utilisation envisagée.",
      "Merci d’indiquer l’URL de l’image ou de la page concernée, le nom du demandeur, le support prévu, le contexte d’utilisation, le territoire, la durée et le caractère commercial ou non commercial du projet.",
      "L’autorisation n’est acquise qu’après réception d’un accord écrit d’EVAtlas. L’absence de réponse ne vaut pas autorisation.",
    ],
  },
  {
    id: "credit",
    title: "Crédit et mention de copyright",
    paragraphs: [
      "Lorsqu’une utilisation est autorisée, la mention de crédit et de copyright à employer est, sauf instruction différente communiquée par écrit : « © EVAtlas. Tous droits réservés. »",
      "La présence d’un crédit ne remplace pas l’autorisation préalable et ne permet pas une utilisation en dehors du périmètre accepté.",
    ],
  },
  {
    id: "marques-produits",
    title: "Marques et produits représentés",
    paragraphs: [
      "La propriété des images EVAtlas est distincte des droits attachés aux marques, logos, noms commerciaux, modèles et designs de produits éventuellement représentés. Ces signes et éléments restent protégés au bénéfice de leurs titulaires respectifs.",
      "Une autorisation d’utiliser une image EVAtlas n’emporte aucun droit sur une marque ou un produit tiers au-delà de ce qui est expressément prévu dans l’accord écrit.",
    ],
  },
  {
    id: "signalement",
    title: "Signalement et retrait",
    paragraphs: [
      "Toute personne estimant qu’une image publiée porte atteinte à un droit peut contacter EVAtlas à evatlas.store@gmail.com en indiquant l’URL concernée, la nature du droit invoqué et les éléments permettant d’examiner la demande.",
      "EVAtlas étudiera le signalement et pourra, selon les éléments disponibles, corriger le crédit, compléter les informations ou retirer temporairement le contenu pendant l’examen.",
    ],
  },
];

export default function ImageLicensePage() {
  return (
    <LegalPage
      eyebrow="Droits d’auteur"
      title="Licence et utilisation des images"
      introduction="Les règles applicables aux images EVAtlas et la procédure à suivre pour demander une autorisation écrite."
      sections={sections}
      updatedAt={{ dateTime: "2026-08-05", label: "5 août 2026" }}
      note="Pour toute réutilisation, une autorisation écrite préalable est obligatoire. Le simple accès à une image ou la présence d’un crédit ne constitue pas une licence."
    />
  );
}
