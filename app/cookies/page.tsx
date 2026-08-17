import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique relative aux cookies",
  description: "Informations sur les cookies et technologies similaires susceptibles d’être utilisés sur le site EVAtlas.",
  alternates: { canonical: "/cookies/" },
  robots: { index: false, follow: true },
};

const sections: LegalSection[] = [
  {
    id: "definition",
    title: "Qu’est-ce qu’un cookie ?",
    paragraphs: [
      "Un cookie est un petit fichier ou identifiant enregistré ou lu sur votre appareil lors de la consultation d’un service en ligne. Des technologies similaires peuvent également permettre de mémoriser un choix, d’assurer une fonction ou de mesurer l’utilisation d’une page.",
    ],
  },
  {
    id: "necessaires",
    title: "Cookies strictement nécessaires",
    paragraphs: [
      "Ces technologies permettent le fonctionnement essentiel du site, sa sécurité, la gestion de vos choix ou la continuité d’une fonctionnalité demandée. Elles ne doivent pas être utilisées à d’autres fins incompatibles avec leur caractère nécessaire.",
    ],
  },
  {
    id: "mesure",
    title: "Mesure d’audience",
    paragraphs: [
      "Si un outil de mesure d’audience est activé, il peut aider EVAtlas à comprendre quelles pages sont consultées et à détecter des problèmes d’utilisation. Sa configuration doit limiter les données au strict besoin et respecter le choix exprimé lorsque le consentement est requis.",
      "Le projet actuel émet certains événements techniques internes lors d’interactions, mais leur transmission à un service tiers dépend des outils effectivement configurés au moment de la mise en production.",
    ],
  },
  {
    id: "tiers",
    title: "Services tiers",
    paragraphs: [
      "Des services externes, par exemple une vidéo, une carte, un outil de communication ou une mesure d’audience, peuvent déposer ou lire leurs propres identifiants uniquement s’ils sont intégrés et activés. Le cas échéant, leur finalité et leur fournisseur doivent apparaître dans l’interface de gestion des choix.",
    ],
  },
  {
    id: "choix",
    title: "Gérer vos choix",
    paragraphs: [
      "Les cookies non nécessaires ne doivent être activés qu’après le recueil du choix approprié. Vous devez pouvoir accepter, refuser ou modifier ce choix avec une facilité comparable. Les réglages du navigateur permettent également de supprimer ou bloquer certains cookies, mais peuvent affecter des fonctions demandées.",
    ],
  },
  {
    id: "duree",
    title: "Durée et évolution",
    paragraphs: [
      "La durée de vie d’un cookie dépend de sa finalité et de la configuration du service concerné. L’inventaire précis, les fournisseurs et les durées devront être alignés sur les outils réellement utilisés lors de la mise en production du site.",
      "Cette page est mise à jour lorsque les technologies utilisées ou leur configuration évoluent de manière significative.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      path="/cookies/"
      eyebrow="Vos préférences"
      title="Politique relative aux cookies"
      introduction="Comprendre les technologies susceptibles d’être utilisées sur le site et la manière dont vos choix doivent être respectés."
      sections={sections}
      note="Avant d’activer un outil non nécessaire, mettre en place une interface de consentement réellement connectée aux services concernés et compléter l’inventaire avec leurs noms, finalités, fournisseurs et durées."
    />
  );
}
