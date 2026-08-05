import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site EVAtlas et informations de contact de l’éditeur.",
  alternates: { canonical: "/mentions-legales/" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "editeur",
    title: "Éditeur du site",
    paragraphs: [
      "Le site www.evatlas.store est édité sous la marque EVAtlas. L’adresse de contact communiquée est le 12 Rue Mustapha Manfalouti, Gauthier – RDC, Casablanca 20053. EVAtlas peut être contacté par e-mail à evatlas.store@gmail.com ou par téléphone au +212 7 12 83 32 84.",
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
      "Le site www.evatlas.store est déployé sur l’infrastructure de Vercel et distribué via les services réseau de Cloudflare. Les informations contractuelles complètes de l’hébergeur doivent être reprises depuis le compte utilisé par l’éditeur du site.",
    ],
  },
  {
    id: "propriete-intellectuelle",
    title: "Propriété intellectuelle",
    paragraphs: [
      "La structure, les textes, l’identité visuelle, les photographies, les rendus, les illustrations et les autres images publiés par EVAtlas sur ce site sont protégés par les règles applicables à la propriété intellectuelle. Sauf mention écrite contraire, EVAtlas est titulaire des droits d’auteur sur ces images.",
      "Les marques, logos, noms de produits et designs de produits éventuellement représentés restent protégés au bénéfice de leurs titulaires respectifs. Les conditions d’utilisation des images EVAtlas et la procédure de demande d’autorisation sont précisées sur la page Licence des images.",
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
