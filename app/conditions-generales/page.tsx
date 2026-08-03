import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales d’utilisation du site et principes applicables aux demandes adressées à EVAtlas.",
  alternates: { canonical: "/conditions-generales/" },
  robots: { index: true, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "objet",
    title: "Objet",
    paragraphs: [
      "Les présentes conditions encadrent l’accès au site EVAtlas, l’utilisation de ses contenus et l’envoi de demandes relatives à une solution de recharge. Elles ne remplacent pas les conditions particulières figurant dans un devis, un bon de commande, une facture, une garantie ou tout autre document accepté pour un projet déterminé.",
    ],
  },
  {
    id: "informations",
    title: "Informations présentées",
    paragraphs: [
      "Les contenus du site ont pour objectif de présenter des produits, des usages et une méthode d’accompagnement. Les puissances, durées de recharge et compatibilités dépendent du véhicule, du raccordement et de la configuration retenue.",
      "Une simulation ou une information en ligne constitue une estimation indicative. Elle ne vaut ni étude électrique, ni offre ferme, ni garantie de résultat pour un site qui n’a pas encore été vérifié.",
    ],
  },
  {
    id: "demandes",
    title: "Demandes de devis et échanges",
    paragraphs: [
      "L’envoi d’une demande n’oblige pas l’utilisateur à commander et n’engage pas EVAtlas à accepter un projet avant vérification des informations nécessaires. L’utilisateur s’engage à communiquer des éléments exacts et à signaler toute contrainte connue pouvant affecter l’étude ou l’installation.",
      "Une proposition devient applicable selon les modalités de validité, d’acceptation et, le cas échéant, de paiement qui y sont indiquées. En cas de contradiction, les conditions particulières acceptées pour le projet prévalent sur les informations générales du site.",
    ],
  },
  {
    id: "installation",
    title: "Étude, installation et mise en service",
    paragraphs: [
      "La faisabilité d’une installation dépend notamment de l’état du site, du tableau électrique, des protections, du cheminement, de la puissance disponible et des autorisations éventuellement nécessaires dans le lieu concerné.",
      "Le périmètre de l’intervention, les travaux inclus, les éventuelles exclusions et les conditions de réception doivent être précisés dans la proposition correspondante. Toute modification découverte ou demandée après validation peut nécessiter une adaptation du projet.",
    ],
  },
  {
    id: "prix-paiement",
    title: "Prix et paiement",
    paragraphs: [
      "Les prix applicables, les taxes, les frais éventuels, l’échéancier et les moyens de paiement sont ceux indiqués dans la proposition ou le document commercial accepté. Aucun prix n’est réputé ferme sur la seule base d’une page informative ou d’une estimation en ligne.",
    ],
  },
  {
    id: "produits-garanties",
    title: "Produits, garanties et assistance",
    paragraphs: [
      "Les caractéristiques finales du matériel, les accessoires, la garantie annoncée et les conditions d’assistance sont détaillés dans les documents remis avec la solution. La garantie indiquée sur la fiche de l’Autel MaxiCharger est de 24 mois, sous réserve des conditions précisées pour le projet.",
      "Une mauvaise utilisation, une intervention non autorisée ou une modification extérieure au périmètre accepté peut affecter le fonctionnement et les garanties applicables. Tout incident doit être signalé avec les informations permettant son diagnostic.",
    ],
  },
  {
    id: "utilisation-site",
    title: "Utilisation du site",
    paragraphs: [
      "L’utilisateur s’engage à ne pas perturber le fonctionnement du site, contourner ses mesures de sécurité, tenter d’accéder à des zones non autorisées ou utiliser ses contenus d’une manière portant atteinte aux droits d’EVAtlas ou de tiers.",
      "EVAtlas peut faire évoluer, suspendre ou corriger une fonctionnalité afin d’en assurer la sécurité, la maintenance ou la cohérence, sans que cela ne modifie un engagement commercial déjà accepté.",
    ],
  },
  {
    id: "droit-litiges",
    title: "Droit applicable et règlement des différends",
    paragraphs: [
      "Les conditions particulières acceptées pour un projet doivent préciser le droit applicable et les modalités de règlement des différends. En cas de difficulté, les parties sont invitées à rechercher d’abord une solution amiable en échangeant les éléments utiles à la compréhension de la situation.",
      "Les droits impératifs dont bénéficie une partie en vertu de la réglementation applicable restent inchangés.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Cadre d’utilisation"
      title="Conditions générales"
      introduction="Les principes qui encadrent l’utilisation du site et les premières étapes d’un projet avec EVAtlas."
      sections={sections}
      note="Ces conditions générales constituent un socle informatif. Les conditions commerciales définitives doivent être validées par EVAtlas et adaptées au statut juridique de l’exploitant, aux services réellement proposés et à la réglementation applicable avant la mise en production."
    />
  );
}
