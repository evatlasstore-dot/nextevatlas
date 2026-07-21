import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique EVAtlas relative aux données personnelles et aux demandes adressées depuis le site.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "responsable",
    title: "Responsable des données",
    paragraphs: [
      "EVAtlas traite les informations qui lui sont adressées depuis le site ou par ses canaux de contact afin de répondre aux demandes et d’étudier les projets de recharge. Toute question relative aux données personnelles peut être envoyée à evatlas.store@gmail.com.",
    ],
  },
  {
    id: "donnees",
    title: "Données susceptibles d’être traitées",
    paragraphs: [
      "Les données traitées dépendent de votre interaction avec EVAtlas. Elles peuvent inclure vos coordonnées, les informations que vous transmettez sur votre véhicule, votre besoin de recharge et votre lieu d’installation, ainsi que le contenu de vos échanges.",
      "Des informations techniques strictement nécessaires au fonctionnement et à la sécurité du site peuvent également être enregistrées par l’infrastructure utilisée pour le mettre à disposition.",
    ],
    items: [
      "Nom, prénom et moyens de contact communiqués volontairement.",
      "Informations relatives au véhicule, au stationnement et à l’installation électrique.",
      "Messages, demandes de devis et préférences exprimées au cours des échanges.",
      "Données techniques nécessaires au fonctionnement, à la sécurité et au diagnostic du site.",
    ],
  },
  {
    id: "finalites",
    title: "Pourquoi ces données sont-elles utilisées ?",
    paragraphs: [
      "Les informations sont utilisées pour répondre à vos questions, préparer ou suivre une demande, vérifier la cohérence d’une solution, organiser les échanges liés à un projet et assurer le fonctionnement du site.",
      "Une communication commerciale ne doit être adressée que lorsqu’elle est compatible avec le contexte de votre demande ou lorsqu’un consentement approprié a été recueilli.",
    ],
  },
  {
    id: "bases",
    title: "Fondements du traitement",
    paragraphs: [
      "Selon la situation, le traitement repose sur votre demande préalable à un devis ou à un service, sur l’exécution d’un engagement accepté, sur une obligation applicable, sur l’intérêt légitime à sécuriser et améliorer le site, ou sur votre consentement lorsqu’il est requis.",
    ],
  },
  {
    id: "destinataires",
    title: "Destinataires et prestataires",
    paragraphs: [
      "L’accès aux données est limité aux personnes qui en ont besoin pour répondre à la demande ou réaliser le service concerné. Des prestataires techniques peuvent intervenir pour l’hébergement, la messagerie, la maintenance ou des fonctions explicitement activées sur le site.",
      "EVAtlas ne vend pas les données personnelles. Lorsqu’un prestataire traite des données pour le compte d’EVAtlas, son intervention doit rester limitée à la mission confiée et encadrée par des obligations appropriées.",
    ],
  },
  {
    id: "conservation",
    title: "Durée de conservation",
    paragraphs: [
      "Les données sont conservées pendant la durée nécessaire au traitement de la demande et au suivi de la relation correspondante, puis pendant les périodes utiles au respect des obligations applicables ou à la défense de droits. Les données devenues inutiles doivent être supprimées ou rendues anonymes.",
    ],
  },
  {
    id: "droits",
    title: "Vos droits",
    paragraphs: [
      "Vous pouvez demander l’accès aux données vous concernant, leur rectification, leur suppression lorsque les conditions sont réunies, la limitation de certains traitements ou vous opposer à un usage particulier. Vous pouvez également retirer un consentement pour l’avenir lorsqu’un traitement repose sur celui-ci.",
      "Pour faciliter la réponse, indiquez l’objet de votre demande et le moyen de contact utilisé lors de vos échanges avec EVAtlas. Une vérification d’identité proportionnée peut être demandée si elle est nécessaire pour protéger vos informations.",
    ],
  },
  {
    id: "securite",
    title: "Sécurité et mise à jour",
    paragraphs: [
      "EVAtlas met en œuvre des mesures raisonnables destinées à préserver la confidentialité, l’intégrité et la disponibilité des informations traitées. Aucun service en ligne ne pouvant garantir une sécurité absolue, les mesures sont réévaluées selon les fonctionnalités effectivement déployées.",
      "Cette politique peut être mise à jour pour refléter une évolution du site, des services ou des exigences applicables. La date affichée en tête de page permet d’identifier la version en vigueur.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Données personnelles"
      title="Politique de confidentialité"
      introduction="Cette politique explique quelles informations peuvent être traitées lorsque vous contactez EVAtlas et comment exercer vos choix."
      sections={sections}
    />
  );
}
