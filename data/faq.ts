export type FaqCategory = "Choisir" | "Compatibilité" | "Installation" | "Application" | "Accompagnement";

export type FaqEntry = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
};

export const faqCategories: FaqCategory[] = [
  "Choisir",
  "Compatibilité",
  "Installation",
  "Application",
  "Accompagnement",
];

export const faqEntries: FaqEntry[] = [
  {
    id: "puissance-borne",
    category: "Choisir",
    question: "Quelle puissance de borne choisir pour mon usage ?",
    answer:
      "La bonne puissance dépend de votre véhicule, de votre installation électrique et du temps dont vous disposez habituellement pour recharger. La MaxiCharger peut délivrer jusqu’à 22 kW, mais la puissance réellement utilisée reste limitée par le véhicule et par la puissance disponible sur le site.",
  },
  {
    id: "maison-entreprise",
    category: "Choisir",
    question: "La même borne convient-elle à une maison et à une entreprise ?",
    answer:
      "Une même gamme peut répondre à plusieurs contextes, mais la configuration ne se décide pas de la même manière. Le nombre d’utilisateurs, les horaires, la gestion des accès, la puissance disponible et l’emplacement doivent être étudiés avant de retenir la solution.",
  },
  {
    id: "longueur-cable",
    category: "Choisir",
    question: "Comment choisir entre un câble de 5 m et de 7,5 m ?",
    answer:
      "Le choix dépend de la position habituelle du véhicule, de l’emplacement possible de la borne et du passage du câble. Une vérification sur plan ou sur site permet d’éviter un câble trop court et de conserver un cheminement propre.",
  },
  {
    id: "type-2",
    category: "Compatibilité",
    question: "Quels véhicules sont compatibles avec la MaxiCharger ?",
    answer:
      "La MaxiCharger présentée par EVAtlas utilise un connecteur Type 2 en Mode 3. Avant l’installation, EVAtlas vérifie le connecteur du véhicule, sa puissance de recharge AC et les caractéristiques électriques du site.",
  },
  {
    id: "puissance-reelle",
    category: "Compatibilité",
    question: "Une borne 22 kW recharge-t-elle toujours à 22 kW ?",
    answer:
      "Non. La vitesse finale correspond à la limite la plus basse entre la borne, le chargeur embarqué du véhicule et l’installation électrique. Une borne capable de 22 kW peut donc fonctionner à une puissance inférieure selon le véhicule ou le raccordement.",
  },
  {
    id: "monophase-triphase",
    category: "Compatibilité",
    question: "Faut-il obligatoirement disposer d’une alimentation triphasée ?",
    answer:
      "La puissance maximale de 22 kW correspond à une alimentation triphasée adaptée. Une étude de votre installation permet de déterminer la configuration possible et la puissance cohérente avec votre raccordement actuel.",
  },
  {
    id: "etapes-installation",
    category: "Installation",
    question: "Comment se déroule une installation EVAtlas ?",
    answer:
      "Le parcours comprend l’analyse du besoin, la vérification technique du site, la pose de la borne, puis sa configuration et sa mise en service. Les protections, le raccordement, l’emplacement et la prise en main sont cadrés avant la fin de l’intervention.",
  },
  {
    id: "pose-murale-pied",
    category: "Installation",
    question: "Puis-je choisir une pose murale ou une pose sur pied ?",
    answer:
      "Oui. La pose murale est compacte lorsque le stationnement se trouve près d’un support adapté. La pose sur pied répond aux emplacements sans mur approprié. Le choix final dépend de l’implantation et des contraintes techniques du site.",
  },
  {
    id: "verification-site",
    category: "Installation",
    question: "Quelles informations faut-il préparer pour l’étude technique ?",
    answer:
      "Les informations utiles sont notamment le modèle du véhicule, l’emplacement de stationnement, la distance approximative jusqu’au tableau électrique, la puissance disponible et quelques photos lisibles du site. Une visite peut être proposée lorsque ces éléments ne suffisent pas.",
  },
  {
    id: "copropriete-parking",
    category: "Installation",
    question: "Une installation est-elle possible dans une résidence ou un parking partagé ?",
    answer:
      "Ce type de projet doit être étudié selon l’accès au tableau, le cheminement électrique, les règles du lieu et les besoins de gestion des utilisateurs. EVAtlas peut cadrer la solution technique à partir des informations propres au site.",
  },
  {
    id: "fonctions-application",
    category: "Application",
    question: "Que permet l’Autel Charge App ?",
    answer:
      "L’application permet notamment de démarrer ou arrêter la recharge, programmer des horaires, suivre la consommation, consulter l’historique, gérer la puissance et les accès, et recevoir des notifications.",
  },
  {
    id: "connexion-borne",
    category: "Application",
    question: "Quelles connexions sont disponibles sur la borne ?",
    answer:
      "La MaxiCharger prend en charge le Wi‑Fi, le Bluetooth et l’Ethernet. Une option 4G peut également être disponible selon la configuration retenue.",
  },
  {
    id: "rfid",
    category: "Application",
    question: "Peut-on contrôler l’accès à la recharge ?",
    answer:
      "La borne prend en charge l’accès RFID et des fonctions de gestion via l’application. Le mode d’accès approprié dépend du contexte, notamment lorsqu’une borne est utilisée par plusieurs personnes.",
  },
  {
    id: "garantie",
    category: "Accompagnement",
    question: "Quelle garantie est indiquée pour la MaxiCharger ?",
    answer:
      "La garantie indiquée pour l’Autel MaxiCharger présentée sur le site est de 24 mois. Les conditions exactes applicables au matériel et à l’installation sont précisées dans la proposition remise pour votre projet.",
  },
  {
    id: "devis",
    category: "Accompagnement",
    question: "Comment obtenir une recommandation et un devis ?",
    answer:
      "Vous pouvez transmettre les informations principales sur votre véhicule, votre installation et votre emplacement. EVAtlas pourra alors vérifier le besoin et préparer une proposition adaptée aux éléments communiqués.",
  },
  {
    id: "zone-intervention",
    category: "Accompagnement",
    question: "EVAtlas accompagne-t-il des projets en dehors de Casablanca ?",
    answer:
      "EVAtlas est basé à Casablanca et étudie des projets au Maroc. La faisabilité de l’accompagnement et de l’installation est confirmée selon la localisation et les caractéristiques du projet.",
  },
];
