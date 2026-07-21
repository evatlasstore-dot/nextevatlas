import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site EVAtlas et informations de contact de l’éditeur.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "editeur",
    title: "Éditeur du site",
    paragraphs: [
      "Le site evatlas.ma est édité sous la marque EVAtlas. L’adresse de contact communiquée est le 12 Rue Mustapha Manfalouti, Gauthier – RDC, Casablanca 20053. EVAtlas peut être contacté par e-mail à evatlas.store@gmail.com ou par téléphone au +212 6 94 59 23 74.",
      "La dénomination sociale complète, la forme juridique et les identifiants administratifs de la structure exploitante ne figurent pas dans les informations actuellement disponibles dans ce projet. Ils devront être ajoutés à cette page avant toute publication commerciale définitive.",
    ],
  },
  {
    id: "publication",
    title: "Publication et contenu",
    paragraphs: [
      "EVAtlas assure la publication des contenus présentés sur ce site. Les informations relatives aux produits, à la recharge et à l’installation sont fournies à titre informatif et ne remplacent ni une étude technique du site ni les conditions particulières d’une proposition commerciale.",
      "Les caractéristiques et disponibilités peuvent évoluer. Seuls les documents expressément acceptés dans le cadre d’un projet définissent les engagements applicables entre les parties.",
    ],
  },
  {
    id: "hebergement",
    title: "Hébergement",
    paragraphs: [
      "Les coordonnées du prestataire d’hébergement définitif ne figurent pas dans les informations disponibles dans ce projet. Elles devront être renseignées sur cette page lors de la mise en production du domaine evatlas.ma.",
    ],
  },
  {
    id: "propriete-intellectuelle",
    title: "Propriété intellectuelle",
    paragraphs: [
      "La structure, les textes, l’identité visuelle et les éléments propres à EVAtlas présentés sur ce site sont protégés par les règles applicables à la propriété intellectuelle, sous réserve des droits détenus par leurs propriétaires respectifs.",
      "Les marques, noms de produits, photographies et documents appartenant à des fabricants ou à des tiers restent la propriété de leurs titulaires. Leur présence sur le site n’emporte aucun transfert de droit.",
    ],
  },
  {
    id: "responsabilite",
    title: "Responsabilité",
    paragraphs: [
      "EVAtlas s’efforce de maintenir des informations claires et à jour. Une erreur, une omission ou une indisponibilité temporaire peut néanmoins survenir. L’utilisateur est invité à faire confirmer toute information déterminante avant de prendre une décision technique ou commerciale.",
      "EVAtlas ne saurait être tenu responsable d’un usage du site contraire à sa destination, ni d’une décision prise sans vérification des caractéristiques du véhicule et de l’installation électrique concernée.",
    ],
  },
  {
    id: "liens",
    title: "Liens externes",
    paragraphs: [
      "Le site peut proposer des liens vers des services ou ressources externes. EVAtlas ne contrôle pas leur disponibilité, leur contenu ni leurs pratiques de confidentialité. L’utilisateur est invité à consulter les conditions propres à chaque service tiers.",
    ],
  },
];

export default function LegalNoticesPage() {
  return (
    <LegalPage
      eyebrow="Informations juridiques"
      title="Mentions légales"
      introduction="Les informations essentielles concernant l’édition, le contenu et l’utilisation du site EVAtlas."
      sections={sections}
      note="Avant la mise en production commerciale, compléter impérativement cette page avec la dénomination sociale, la forme juridique, le capital le cas échéant, les identifiants administratifs applicables, le responsable de publication et les coordonnées de l’hébergeur."
    />
  );
}
