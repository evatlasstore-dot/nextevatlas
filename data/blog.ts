export type BlogTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type BlogNote = {
  title: string;
  text: string;
};

export type BlogSection = {
  id: string;
  title: string;
  paragraphs: string[];
  listTitle?: string;
  bullets?: string[];
  ordered?: boolean;
  table?: BlogTable;
  note?: BlogNote;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  readingTime: number;
  datePublished: string;
  dateModified: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  intro: string[];
  quickAnswer: string;
  sections: BlogSection[];
  faq: BlogFaq[];
  relatedSlugs: string[];
  productCta?: {
    eyebrow: string;
    title: string;
    text: string;
    label: string;
  };
};

const publicationDate = "2026-07-17";
const newPublicationDate = "2026-07-29";
const latestPublicationDate = "2026-07-31";
const augustPublicationDate = "2026-08-03";

export const blogPosts: BlogPost[] = [
  {
    slug: "borne-recharge-maroc-guide",
    title: "Borne de recharge au Maroc : le guide complet",
    seoTitle: "Borne de recharge au Maroc : guide complet",
    description:
      "Puissance, compatibilité et installation : découvrez comment choisir une borne de recharge adaptée à votre véhicule et à votre quotidien au Maroc.",
    excerpt:
      "Les repères essentiels pour passer d’une simple prise de courant à une solution de recharge cohérente, sûre et facile à utiliser au quotidien.",
    category: "Guide essentiel",
    readingTime: 10,
    datePublished: publicationDate,
    dateModified: publicationDate,
    image: "/images/blog/borne-recharge-maroc-guide.jpg",
    imageAlt:
      "Illustration d’une voiture électrique en recharge devant une maison contemporaine au Maroc",
    keywords: [
      "borne de recharge Maroc",
      "wallbox Maroc",
      "recharge voiture électrique",
      "installation borne électrique",
    ],
    intro: [
      "Choisir une borne ne consiste pas seulement à rechercher la puissance la plus élevée. La bonne solution est celle qui correspond au véhicule, à l’installation électrique, au temps de stationnement et aux habitudes réelles du conducteur.",
      "Ce guide rassemble les décisions à prendre avant une installation au Maroc. Il donne un cadre simple pour comparer les puissances, vérifier la compatibilité et préparer un projet qui pourra évoluer sans complexifier l’usage quotidien.",
    ],
    quickAnswer:
      "Commencez par vérifier la puissance acceptée en courant alternatif par votre véhicule, puis la capacité disponible sur votre installation. Une borne de 7,4 ou 11 kW couvre déjà de nombreux usages résidentiels ; 22 kW n’est pertinent que si le véhicule, l’alimentation et le besoin réel le permettent.",
    sections: [
      {
        id: "besoin-reel",
        title: "Partir du besoin réel, pas de la fiche technique",
        paragraphs: [
          "Une voiture reste généralement stationnée plusieurs heures au domicile ou sur un site professionnel. Cette durée disponible compte autant que la puissance instantanée. Un conducteur qui récupère chaque nuit l’énergie consommée dans la journée n’a pas le même besoin qu’un véhicule fortement sollicité qui doit repartir rapidement.",
          "Le dimensionnement devient beaucoup plus clair lorsque quatre informations sont réunies : l’énergie à récupérer, la durée habituelle de stationnement, la puissance maximale acceptée par le chargeur embarqué du véhicule et la marge disponible sur l’installation électrique.",
        ],
        listTitle: "Les quatre questions à documenter",
        bullets: [
          "Combien de kilomètres ou de kilowattheures faut-il récupérer lors d’une journée habituelle ?",
          "Pendant combien d’heures le véhicule reste-t-il branché ?",
          "Quelle puissance AC le véhicule accepte-t-il réellement ?",
          "Quelle puissance peut être dédiée à la recharge sans perturber les autres usages du bâtiment ?",
        ],
      },
      {
        id: "choisir-puissance",
        title: "Comprendre les puissances 7,4, 11 et 22 kW",
        paragraphs: [
          "La puissance de la borne indique la vitesse maximale à laquelle elle peut fournir de l’énergie. Elle ne garantit pas que le véhicule utilisera toute cette capacité : la limite la plus basse entre la borne, la voiture et l’installation s’impose toujours.",
          "À domicile, une puissance modérée associée à une longue plage nocturne peut être plus cohérente qu’une puissance élevée rarement exploitée. Sur un site accueillant plusieurs véhicules, la gestion dynamique de la puissance peut devenir plus importante que la puissance nominale d’un seul point de charge.",
        ],
        table: {
          caption: "Repères de puissance pour une recharge AC",
          headers: ["Puissance", "Configuration courante", "Profil d’usage indicatif"],
          rows: [
            ["7,4 kW", "Monophasé, selon l’installation", "Recharge résidentielle pendant plusieurs heures"],
            ["11 kW", "Triphasé, selon l’installation", "Bon équilibre pour un véhicule compatible"],
            ["22 kW", "Triphasé, selon l’installation", "Rotation plus soutenue et véhicule compatible 22 kW AC"],
          ],
        },
        note: {
          title: "Le bon réflexe",
          text: "Ne retenez jamais 22 kW uniquement parce que la borne l’affiche. Vérifiez d’abord la limite AC du véhicule et la capacité réellement disponible sur place.",
        },
      },
      {
        id: "compatibilite",
        title: "Vérifier la compatibilité avec le véhicule",
        paragraphs: [
          "Le connecteur Type 2 est utilisé par de nombreux véhicules électriques pour la recharge AC. La forme du connecteur ne suffit toutefois pas à déterminer la vitesse : deux voitures équipées du même port peuvent accepter des puissances différentes en courant alternatif.",
          "La fiche technique du véhicule, le manuel constructeur ou les informations affichées dans son interface permettent d’identifier la puissance du chargeur embarqué. Il faut aussi vérifier le type de câble, sa longueur utile et la manière dont il sera rangé autour de la place de stationnement.",
        ],
        listTitle: "Points de compatibilité à confirmer",
        bullets: [
          "Type de connecteur et puissance AC maximale du véhicule",
          "Longueur de câble nécessaire sans tension ni passage gênant",
          "Fonctions souhaitées : programmation, application, RFID ou suivi des sessions",
          "Possibilité de limiter ou d’ajuster la puissance lorsque le bâtiment est fortement sollicité",
        ],
      },
      {
        id: "installation",
        title: "Ce qu’une installation professionnelle doit cadrer",
        paragraphs: [
          "Une borne est un équipement de puissance utilisé de façon répétée. Son installation doit donc être pensée comme un ensemble : alimentation, cheminement du câble, protections, fixation, connexion et mise en service. Une visite ou une collecte technique sérieuse évite les hypothèses sur la distance, le tableau électrique et la qualité du support.",
          "Le professionnel adapte les composants aux caractéristiques de la borne, aux prescriptions du fabricant et aux conditions du site. Il vérifie ensuite le fonctionnement, configure les paramètres utiles et explique les gestes essentiels à l’utilisateur.",
        ],
        listTitle: "Un parcours d’installation lisible",
        ordered: true,
        bullets: [
          "Recueillir les informations sur le véhicule, l’usage et le site",
          "Vérifier l’alimentation, le tableau et le cheminement possible",
          "Définir l’emplacement, la puissance et les protections adaptées",
          "Installer, raccorder et configurer la borne",
          "Tester la recharge et remettre les consignes d’utilisation",
        ],
      },
      {
        id: "emplacement",
        title: "Pose murale ou sur pied : choisir un emplacement durable",
        paragraphs: [
          "La pose murale est souvent compacte et directe lorsque le stationnement longe une paroi adaptée. La pose sur pied apporte davantage de liberté lorsque le mur est éloigné, peu accessible ou mal positionné par rapport au port de charge du véhicule.",
          "Dans les deux cas, l’emplacement doit protéger la circulation des personnes, éviter qu’un câble traverse un passage et rester pratique avec le véhicule garé dans son sens habituel. Il est utile d’anticiper un deuxième véhicule ou une modification future du stationnement.",
        ],
        table: {
          caption: "Comparaison des deux implantations",
          headers: ["Critère", "Pose murale", "Pose sur pied"],
          rows: [
            ["Encombrement", "Très compact", "Nécessite une base au sol"],
            ["Souplesse de position", "Dépend d’un support adapté", "Placement plus libre"],
            ["Cheminement", "Souvent direct près du mur", "À prévoir jusqu’au pied"],
          ],
        },
      },
      {
        id: "decision",
        title: "Transformer les informations en décision simple",
        paragraphs: [
          "Une bonne recommandation peut tenir sur une page : véhicule et limite AC, énergie quotidienne à récupérer, temps de stationnement, puissance disponible, emplacement et fonctions souhaitées. Ce résumé permet de comparer des solutions sur des bases identiques.",
          "Le simulateur EVAtlas aide à établir un premier ordre de grandeur. Une étude d’installation confirme ensuite ce qui est réalisable sur le site et précise la configuration finale sans surdimensionnement inutile.",
        ],
        listTitle: "Votre dossier de départ",
        bullets: [
          "Modèle et année du véhicule",
          "Photo du tableau électrique et de l’emplacement envisagé",
          "Distance approximative entre le tableau et la place",
          "Durée de stationnement et fréquence de recharge",
          "Besoin éventuel d’application, de RFID ou de pilotage de puissance",
        ],
      },
    ],
    faq: [
      {
        question: "Une borne de 22 kW recharge-t-elle toujours plus vite ?",
        answer:
          "Non. La vitesse est limitée par le maillon le moins puissant entre l’installation, la borne et le chargeur embarqué du véhicule. Une voiture limitée à 11 kW AC ne prendra pas 22 kW sur une borne AC 22 kW.",
      },
      {
        question: "Faut-il recharger complètement la voiture chaque nuit ?",
        answer:
          "Pas nécessairement. Beaucoup d’usages consistent à récupérer uniquement l’énergie consommée dans la journée. Les recommandations de niveau de charge propres au véhicule restent prioritaires.",
      },
      {
        question: "Peut-on installer une borne sans mur à proximité ?",
        answer:
          "Oui, une pose sur pied peut être étudiée. Le support, l’alimentation et le cheminement doivent être adaptés aux conditions réelles du stationnement.",
      },
    ],
    relatedSlugs: [
      "installer-borne-recharge-maison-maroc",
      "borne-recharge-7-11-22-kw",
      "prix-borne-recharge-installation-maroc",
    ],
  },
  {
    slug: "installer-borne-recharge-maison-maroc",
    title: "Installer une borne de recharge chez soi au Maroc",
    seoTitle: "Installer une borne de recharge chez soi au Maroc",
    description:
      "Préparez une installation de borne à domicile : étude électrique, protections, emplacement, mise en service et choix entre pose murale ou sur pied.",
    excerpt:
      "Un parcours pratique pour préparer le logement, choisir le bon emplacement et comprendre chaque étape jusqu’à la première recharge.",
    category: "Installation",
    readingTime: 9,
    datePublished: publicationDate,
    dateModified: publicationDate,
    image: "/images/blog/installer-borne-recharge-maison-maroc.jpg",
    imageAlt:
      "Illustration d’un technicien préparant l’installation d’une borne dans un garage résidentiel marocain",
    keywords: [
      "installation borne recharge maison Maroc",
      "installer wallbox domicile",
      "borne recharge garage",
      "pose murale borne électrique",
    ],
    intro: [
      "Installer une borne à domicile rend la recharge plus prévisible : la voiture récupère son énergie pendant qu’elle stationne, sans détour supplémentaire. Pour que cette simplicité dure, le projet doit être préparé à partir du site réel et non d’une configuration théorique.",
      "Le tableau électrique, la distance jusqu’au véhicule, le support de fixation et les usages du logement influencent tous la solution. Voici les vérifications utiles avant le rendez-vous technique et les étapes qui conduisent à une mise en service claire.",
    ],
    quickAnswer:
      "Une installation à domicile commence par l’étude du véhicule, du tableau électrique et du trajet du câble. Le professionnel choisit ensuite une puissance et des protections adaptées, fixe la borne à un emplacement pratique, réalise les essais puis configure l’accès et l’application si nécessaire.",
    sections: [
      {
        id: "preparer-site",
        title: "Observer le site avant de choisir le matériel",
        paragraphs: [
          "Une photo du garage ne raconte pas tout le projet. Il faut localiser le tableau, comprendre les usages électriques importants du logement et mesurer le chemin que suivra le câble. Un passage simple et accessible réduit la complexité ; un trajet extérieur, enterré ou traversant plusieurs zones demande une préparation différente.",
          "L’orientation habituelle de la voiture est également importante. Le câble doit rejoindre le port de charge sans être tendu, rouler sous les roues ni barrer un passage. Lorsque plusieurs véhicules sont envisagés, leur position future mérite d’être intégrée dès le départ.",
        ],
        listTitle: "Informations faciles à préparer",
        bullets: [
          "Photos lisibles du tableau électrique fermé et de son environnement",
          "Vue générale de la place de stationnement et du mur ou sol disponible",
          "Distance approximative et obstacles entre le tableau et la borne",
          "Modèle du véhicule, puissance AC acceptée et position de son port de charge",
          "Équipements électriques importants utilisés simultanément dans le logement",
        ],
      },
      {
        id: "audit-electrique",
        title: "L’étude électrique donne la limite utile du projet",
        paragraphs: [
          "La puissance annoncée par une borne est une capacité maximale. L’installation doit pouvoir l’alimenter avec une marge cohérente pour les autres équipements du logement. L’étude vérifie la nature de l’alimentation, l’état du tableau, la puissance disponible et les possibilités de raccordement.",
          "Si les usages varient fortement dans la journée, un pilotage de puissance peut ajuster la recharge afin d’éviter une sollicitation excessive. Cette fonction peut rendre une installation plus souple sans viser en permanence la puissance maximale.",
        ],
        note: {
          title: "À retenir",
          text: "Une photo permet un premier échange, mais elle ne remplace pas les mesures et vérifications nécessaires lorsque la configuration du site présente une incertitude.",
        },
      },
      {
        id: "circuit-protections",
        title: "Circuit et protections : un ensemble conçu pour la borne",
        paragraphs: [
          "La recharge est un usage soutenu. La borne doit donc disposer d’un circuit et de protections choisis pour son modèle, sa puissance et les caractéristiques de l’installation. Le fabricant précise des exigences que le professionnel rapproche des conditions observées sur place.",
          "La section des conducteurs, les dispositifs de protection, la mise à la terre et la qualité des connexions ne se choisissent pas à partir d’une règle générique trouvée en ligne. Ils sont dimensionnés et vérifiés dans le cadre de l’installation réelle.",
        ],
        listTitle: "Ce que le dossier technique doit couvrir",
        bullets: [
          "Circuit dédié et cheminement protégé",
          "Protections compatibles avec la borne et l’installation",
          "Continuité et qualité de la mise à la terre",
          "Fixation stable et conditions d’utilisation du matériel",
          "Essais fonctionnels avant la remise à l’utilisateur",
        ],
      },
      {
        id: "emplacement-maison",
        title: "Trouver l’emplacement le plus naturel au quotidien",
        paragraphs: [
          "La meilleure position n’est pas nécessairement la plus proche du tableau. Elle équilibre la simplicité du raccordement et le confort d’usage pendant plusieurs années. Une borne facile à atteindre sera branchée naturellement ; une borne mal orientée peut rendre chaque recharge plus contraignante.",
          "Pour une installation extérieure, il faut retenir un matériel adapté à l’environnement prévu et respecter ses conditions de pose. Le câble doit pouvoir être rangé proprement, à l’écart de l’eau stagnante, des chocs probables et des zones de circulation.",
        ],
        table: {
          caption: "Questions d’emplacement à trancher",
          headers: ["Question", "Pourquoi elle compte"],
          rows: [
            ["Où se trouve le port du véhicule ?", "Évite un câble tendu ou trop court"],
            ["Le mur est-il adapté ?", "Détermine si une pose murale est pertinente"],
            ["Le passage reste-t-il libre ?", "Réduit les risques de gêne ou de chute"],
            ["Un second véhicule est-il prévu ?", "Évite de figer une implantation trop étroite"],
          ],
        },
      },
      {
        id: "etapes-installation",
        title: "Les cinq étapes d’une installation lisible",
        paragraphs: [
          "Un déroulement clair permet à l’utilisateur de savoir ce qui est validé et ce qui reste à décider. Les ajustements éventuels sont traités avant la pose plutôt qu’au moment du raccordement.",
        ],
        listTitle: "Du premier échange à la recharge",
        ordered: true,
        bullets: [
          "Qualification du véhicule, des habitudes et du besoin de puissance",
          "Collecte technique ou visite du site selon la complexité",
          "Validation de la configuration, de l’emplacement et du cheminement",
          "Installation, raccordement et configuration des fonctions connectées",
          "Essais, démonstration et transmission des informations utiles",
        ],
      },
      {
        id: "reception",
        title: "Bien réceptionner la borne et ses réglages",
        paragraphs: [
          "La mise en service ne se limite pas à constater que la voiture charge. L’utilisateur doit savoir démarrer et arrêter une session, reconnaître les indicateurs principaux, ranger le câble et utiliser l’application ou le badge si ces fonctions sont activées.",
          "Il est utile de conserver la référence du matériel, la configuration retenue, les documents remis et le contact d’assistance. Une installation bien documentée sera plus simple à maintenir ou à faire évoluer.",
        ],
        listTitle: "Checklist de remise",
        bullets: [
          "Test de recharge avec le véhicule lorsque cela est possible",
          "Présentation des voyants et des modes d’accès",
          "Connexion à l’application et réglage d’une programmation éventuelle",
          "Explication des limites de puissance configurées",
          "Remise des références et conditions de garantie applicables",
        ],
      },
    ],
    faq: [
      {
        question: "Une visite technique est-elle toujours nécessaire ?",
        answer:
          "Pas dans toutes les configurations. Des photos et informations précises peuvent parfois suffire à préparer un projet simple. Une visite devient pertinente dès qu’un point important reste incertain.",
      },
      {
        question: "La borne peut-elle être installée à l’extérieur ?",
        answer:
          "Oui si le modèle et son installation conviennent aux conditions prévues. L’emplacement, la fixation, le cheminement et l’exposition doivent être étudiés ensemble.",
      },
      {
        question: "Puis-je préparer moi-même le câblage ?",
        answer:
          "La conception et le raccordement doivent rester sous la responsabilité du professionnel qui vérifie l’ensemble. Toute préparation préalable doit être convenue avec lui afin d’éviter une solution incompatible.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-maroc-guide",
      "prix-borne-recharge-installation-maroc",
      "borne-recharge-exterieure-maroc",
    ],
  },
  {
    slug: "prix-borne-recharge-installation-maroc",
    title: "Prix d’une borne de recharge au Maroc : le budget à prévoir",
    seoTitle: "Prix d’une borne de recharge au Maroc",
    description:
      "Comprenez ce qui compose le prix d’une borne de recharge au Maroc : matériel, câblage, protections, pose, configuration et options du projet.",
    excerpt:
      "Plutôt qu’un chiffre isolé, découvrez les postes qui font réellement varier le budget et les éléments qu’un devis clair doit présenter.",
    category: "Budget",
    readingTime: 8,
    datePublished: publicationDate,
    dateModified: publicationDate,
    image: "/images/blog/prix-borne-recharge-installation-maroc.jpg",
    imageAlt:
      "Illustration d’une borne, de son câble et des différents éléments composant un projet d’installation",
    keywords: [
      "prix borne recharge Maroc",
      "coût installation wallbox Maroc",
      "devis borne électrique",
      "budget recharge domicile",
    ],
    intro: [
      "Le budget d’une borne ne se résume pas au prix du boîtier. Deux projets utilisant le même modèle peuvent nécessiter des chemins de câble, des protections et des temps d’intervention très différents. Une comparaison utile porte donc sur la solution installée et mise en service.",
      "Les prix du matériel et des prestations évoluent. Ce guide ne publie pas de fourchette non vérifiée : il explique les postes à demander et la manière de comparer des devis construits sur un périmètre identique.",
    ],
    quickAnswer:
      "Le budget total dépend principalement de la borne choisie, de la puissance, de la distance depuis le tableau, du cheminement, des protections nécessaires, du support de pose et des fonctions de pilotage. Un prix sérieux est associé à un périmètre technique explicite.",
    sections: [
      {
        id: "prix-solution",
        title: "Comparer le prix d’une solution complète",
        paragraphs: [
          "Une offre très basse peut ne couvrir que le matériel, tandis qu’une autre inclut l’étude, les fournitures électriques, la pose, les essais et la configuration. Avant de comparer les montants, il faut aligner le contenu de chaque proposition.",
          "Le devis doit distinguer ce qui est certain de ce qui dépend encore d’une visite ou d’une mesure. Cette transparence est plus utile qu’un forfait présenté sans hypothèses, car elle réduit le risque d’ajouts tardifs.",
        ],
        table: {
          caption: "Les principaux postes d’un projet",
          headers: ["Poste", "Ce qu’il peut inclure", "Question à poser"],
          rows: [
            ["Borne", "Puissance, câble, connectivité, accès", "La référence et les fonctions sont-elles précisées ?"],
            ["Étude", "Collecte technique ou visite", "Quelles hypothèses ont été vérifiées ?"],
            ["Électricité", "Câble, protections, coffret éventuel", "Les fournitures sont-elles détaillées ?"],
            ["Pose", "Fixation, passage, raccordement", "Quel trajet et quelle longueur sont inclus ?"],
            ["Mise en service", "Essais, application, explications", "La configuration est-elle comprise ?"],
          ],
        },
      },
      {
        id: "materiel",
        title: "Ce qui fait varier le prix de la borne",
        paragraphs: [
          "La puissance maximale n’est qu’un critère. La présence d’un câble attaché, sa longueur, les interfaces réseau, le lecteur RFID, le pilotage de puissance et les services logiciels peuvent différencier deux modèles.",
          "Il faut relier chaque fonction à un usage. Une connectivité avancée est pertinente si l’utilisateur souhaite programmer, contrôler les accès ou suivre les sessions. Elle a moins de valeur si la borne doit simplement charger un seul véhicule chaque nuit sans gestion particulière.",
        ],
        listTitle: "Fonctions à valoriser seulement si elles sont utiles",
        bullets: [
          "Puissance réellement exploitable par le véhicule et le site",
          "Longueur et mode de rangement du câble",
          "Application, programmation et historique",
          "Accès libre, badge RFID ou comptes utilisateurs",
          "Pilotage dynamique et possibilité d’évolution",
        ],
      },
      {
        id: "installation-budget",
        title: "Pourquoi la configuration du site pèse sur le budget",
        paragraphs: [
          "La distance entre le tableau et la place influence la quantité de câble et le temps de pose. Un passage apparent accessible n’a pas la même complexité qu’un trajet extérieur, une traversée de paroi, un cheminement enterré ou une zone nécessitant une protection mécanique particulière.",
          "L’état et l’espace disponible dans le tableau peuvent également modifier la solution. Le professionnel doit pouvoir expliquer les adaptations proposées et leur lien avec les conditions observées, sans appliquer automatiquement la configuration la plus lourde.",
        ],
        listTitle: "Facteurs de chantier à documenter",
        bullets: [
          "Longueur et accessibilité du parcours",
          "Nature des murs, sols et supports",
          "Pose intérieure ou exposition extérieure",
          "Place disponible et organisation du tableau",
          "Pose murale ou création d’une base pour un pied",
        ],
      },
      {
        id: "options-cout-global",
        title: "Regarder le coût d’usage, pas seulement l’achat",
        paragraphs: [
          "Une solution simple à utiliser et correctement dimensionnée évite de payer une capacité inutilisable. À l’inverse, une économie sur le câble, l’emplacement ou la gestion de puissance peut créer une contrainte quotidienne ou limiter une évolution déjà prévisible.",
          "Le coût global comprend aussi la qualité de la mise en service, la clarté de la garantie et l’accès à une assistance. Ces éléments doivent être décrits sans promesse vague : durée, périmètre, canal de contact et conditions applicables.",
        ],
        note: {
          title: "Une dépense évitable",
          text: "Surdimensionner la puissance sans vérifier la limite AC du véhicule peut augmenter la complexité sans réduire le temps de recharge.",
        },
      },
      {
        id: "comparer-devis",
        title: "La grille pour comparer deux devis",
        paragraphs: [
          "Deux propositions deviennent comparables lorsqu’elles répondent au même besoin et indiquent les mêmes limites. Une référence précise, un cheminement défini et une liste d’inclusions valent mieux qu’un intitulé global difficile à vérifier.",
        ],
        listTitle: "Vérifiez ces éléments ligne par ligne",
        ordered: true,
        bullets: [
          "Référence exacte de la borne, puissance et longueur de câble",
          "Hypothèses sur le véhicule et l’installation électrique",
          "Longueur, mode de passage et finitions incluses",
          "Protections, fournitures et support de fixation",
          "Essais, configuration, application et prise en main",
          "Garantie du matériel et périmètre de l’intervention",
          "Éléments exclus ou soumis à validation sur site",
        ],
      },
      {
        id: "demande-precise",
        title: "Obtenir une estimation plus précise dès le premier échange",
        paragraphs: [
          "Une demande bien préparée réduit les hypothèses. Le modèle du véhicule, quelques photos, la distance approximative et les fonctions souhaitées permettent de qualifier rapidement le projet.",
          "Si une information est inconnue, mieux vaut la signaler que la deviner. Le devis peut alors identifier clairement le point à vérifier avant validation finale.",
        ],
        listTitle: "À joindre à votre demande",
        bullets: [
          "Véhicule actuel et éventuel second véhicule",
          "Adresse générale et type de stationnement",
          "Photos du tableau et de la place",
          "Distance et obstacles visibles",
          "Préférence de puissance, application ou contrôle d’accès",
        ],
      },
    ],
    faq: [
      {
        question: "Pourquoi ne pas afficher un prix fixe pour toutes les installations ?",
        answer:
          "Parce que la distance, le cheminement, le tableau, le support et les fonctions varient d’un site à l’autre. Un prix fixe sans périmètre peut masquer des exclusions importantes.",
      },
      {
        question: "La borne la plus puissante est-elle forcément la plus chère à installer ?",
        answer:
          "Pas systématiquement, mais une puissance plus élevée peut exiger une configuration électrique différente. La compatibilité du véhicule et la capacité du site doivent être vérifiées avant de comparer.",
      },
      {
        question: "Que doit inclure la mise en service ?",
        answer:
          "Elle devrait couvrir les essais, la configuration retenue, la connexion aux fonctions utiles et une explication claire de l’utilisation. Le périmètre exact doit apparaître dans la proposition.",
      },
    ],
    relatedSlugs: [
      "installer-borne-recharge-maison-maroc",
      "borne-recharge-maroc-guide",
      "borne-recharge-7-11-22-kw",
    ],
  },
  {
    slug: "borne-recharge-7-11-22-kw",
    title: "7,4 kW, 11 kW ou 22 kW : quelle borne choisir ?",
    seoTitle: "Borne 7,4, 11 ou 22 kW : quelle puissance choisir ?",
    description:
      "Comparez les bornes 7,4, 11 et 22 kW selon votre véhicule, votre installation électrique, votre temps de stationnement et votre usage quotidien.",
    excerpt:
      "Une méthode concrète pour choisir la puissance utile, comprendre la limite du véhicule et éviter un surdimensionnement sans bénéfice.",
    category: "Comparatif",
    readingTime: 8,
    datePublished: publicationDate,
    dateModified: publicationDate,
    image: "/images/blog/borne-recharge-7-11-22-kw.jpg",
    imageAlt:
      "Illustration abstraite d’une borne de recharge et de trois niveaux de puissance électrique",
    keywords: [
      "borne 7,4 kW",
      "borne 11 kW",
      "borne 22 kW",
      "puissance wallbox",
      "chargeur embarqué voiture électrique",
    ],
    intro: [
      "Les valeurs 7,4, 11 et 22 kW sont faciles à comparer sur une brochure, mais elles ne racontent pas la vitesse réellement obtenue. La voiture, la borne et le bâtiment forment un même système ; la capacité la plus faible fixe le résultat.",
      "Le bon choix récupère l’énergie nécessaire pendant le temps disponible, avec une installation cohérente. Cette approche permet souvent de viser plus juste qu’une sélection fondée uniquement sur la valeur la plus élevée.",
    ],
    quickAnswer:
      "Choisissez 7,4 kW pour de nombreux usages résidentiels avec plusieurs heures de stationnement, 11 kW si le véhicule et une alimentation triphasée adaptée le permettent, et 22 kW seulement pour un besoin soutenu avec véhicule compatible 22 kW AC. Une étude du site confirme la faisabilité.",
    sections: [
      {
        id: "kw-kwh",
        title: "kW et kWh : deux notions à ne pas confondre",
        paragraphs: [
          "Le kilowatt mesure une puissance, c’est-à-dire le rythme auquel l’énergie peut être transférée. Le kilowattheure mesure une quantité d’énergie. Une batterie de 60 kWh n’a donc pas une puissance de 60 kW : elle peut stocker une certaine énergie et la recevoir à un rythme qui dépend du système de recharge.",
          "Pour estimer un temps théorique, on divise l’énergie à ajouter par la puissance effective. Dans la réalité, des pertes et des limites de fonctionnement allongent ce résultat. Cette formule reste néanmoins un bon outil pour comparer deux configurations.",
        ],
        note: {
          title: "Exemple simple",
          text: "Ajouter 30 kWh avec une puissance effective de 7,4 kW demande un peu plus de quatre heures en théorie, puis davantage lorsque l’on tient compte des pertes et des conditions réelles.",
        },
      },
      {
        id: "trois-puissances",
        title: "Ce que changent réellement les trois puissances",
        paragraphs: [
          "Chaque niveau correspond à une configuration électrique et à une vitesse maximale différente. Les valeurs ci-dessous sont des ordres de grandeur avant pertes, pas une promesse de performance pour tous les véhicules.",
        ],
        table: {
          caption: "Comparatif des puissances AC",
          headers: ["Borne", "Énergie théorique en une heure", "Usage souvent adapté", "Point à confirmer"],
          rows: [
            ["7,4 kW", "Jusqu’à environ 7,4 kWh", "Recharge nocturne à domicile", "Capacité du circuit monophasé"],
            ["11 kW", "Jusqu’à environ 11 kWh", "Recharge résidentielle ou professionnelle équilibrée", "Véhicule et alimentation triphasée"],
            ["22 kW", "Jusqu’à environ 22 kWh", "Rotation plus rapide lorsque l’AC 22 kW est accepté", "Compatibilité véhicule et marge du site"],
          ],
        },
      },
      {
        id: "limite-vehicule",
        title: "Le chargeur embarqué du véhicule fixe souvent la limite",
        paragraphs: [
          "En recharge AC, l’électronique embarquée convertit le courant pour la batterie. Sa puissance maximale peut être inférieure à celle de la borne. Une borne 22 kW alimentant une voiture limitée à 7,4 kW fournira environ la capacité acceptée par la voiture, pas 22 kW.",
          "Cette information figure généralement dans les caractéristiques de recharge AC du véhicule. Il ne faut pas la confondre avec la puissance maximale annoncée pour la recharge rapide DC, qui utilise une architecture différente.",
        ],
        listTitle: "À rechercher dans la fiche du véhicule",
        bullets: [
          "Puissance maximale en recharge AC",
          "Fonctionnement monophasé ou triphasé",
          "Type de connecteur AC",
          "Capacité utile de la batterie",
        ],
      },
      {
        id: "limite-installation",
        title: "La puissance disponible doit rester compatible avec le bâtiment",
        paragraphs: [
          "La borne partage l’alimentation générale avec les autres équipements. Une installation capable d’atteindre une valeur élevée à un instant donné n’a pas forcément intérêt à la dédier en permanence à la voiture.",
          "Le pilotage dynamique peut réduire ou augmenter la recharge selon la consommation du bâtiment. Dans certains projets, cette intelligence apporte davantage de confort qu’une augmentation brute de puissance.",
        ],
        listTitle: "Éléments étudiés sur le site",
        bullets: [
          "Type d’alimentation et puissance disponible",
          "Consommations simultanées les plus importantes",
          "Organisation et capacité du tableau électrique",
          "Distance jusqu’à la borne",
          "Intérêt d’une gestion dynamique de la puissance",
        ],
      },
      {
        id: "profils",
        title: "Choisir selon le profil de stationnement",
        paragraphs: [
          "Un véhicule parcourant une distance régulière et stationnant toute la nuit peut récupérer son énergie avec une puissance modérée. Une flotte ou un véhicule qui repart plusieurs fois par jour impose une autre logique, surtout si plusieurs points de charge partagent la même alimentation.",
        ],
        table: {
          caption: "Profils d’usage et priorité de décision",
          headers: ["Profil", "Priorité", "Orientation à étudier"],
          rows: [
            ["Domicile, longue nuit", "Récupérer l’usage quotidien", "7,4 ou 11 kW selon véhicule et site"],
            ["Deux véhicules", "Partager la puissance intelligemment", "Pilotage ou recharge alternée"],
            ["Véhicule très sollicité", "Réduire le temps entre deux départs", "11 ou 22 kW si l’ensemble est compatible"],
            ["Parking collectif", "Servir plusieurs places", "Dimensionnement global et évolution par phases"],
          ],
        },
      },
      {
        id: "methode-choix",
        title: "Une méthode de choix en quatre décisions",
        paragraphs: [
          "La puissance finale découle d’une série de filtres simples. Cette méthode évite de commencer par un modèle précis avant d’avoir défini le besoin.",
        ],
        listTitle: "Décidez dans cet ordre",
        ordered: true,
        bullets: [
          "Calculer l’énergie à récupérer lors d’une journée exigeante mais réaliste",
          "Diviser cette énergie par le nombre d’heures de stationnement disponibles",
          "Comparer le résultat à la limite AC du véhicule",
          "Faire confirmer la puissance et le pilotage possibles sur le site",
        ],
        note: {
          title: "Avant de choisir",
          text: "Le simulateur fournit une première estimation. L’étude d’installation reste nécessaire pour valider l’alimentation et la configuration physique.",
        },
      },
    ],
    faq: [
      {
        question: "Une borne 22 kW peut-elle fonctionner à une puissance plus faible ?",
        answer:
          "De nombreux modèles permettent une configuration inférieure, mais cela dépend de la borne et de l’installation. La valeur doit être réglée dans un cadre validé par le professionnel.",
      },
      {
        question: "11 kW suffit-il pour une recharge nocturne ?",
        answer:
          "Dans de nombreux cas oui, mais la réponse dépend de l’énergie à récupérer, du temps disponible et de la puissance AC acceptée par le véhicule.",
      },
      {
        question: "L’application peut-elle augmenter la puissance de recharge ?",
        answer:
          "Non au-delà des limites physiques du véhicule, de la borne et de l’installation. Elle peut en revanche programmer ou ajuster une puissance autorisée selon les fonctions disponibles.",
      },
    ],
    relatedSlugs: [
      "temps-recharge-voiture-electrique",
      "borne-recharge-maroc-guide",
      "installer-borne-recharge-maison-maroc",
    ],
  },
  {
    slug: "temps-recharge-voiture-electrique",
    title: "Temps de recharge d’une voiture électrique : calcul et exemples",
    seoTitle: "Temps de recharge d’une voiture électrique : calcul",
    description:
      "Apprenez à calculer le temps de recharge d’une voiture électrique selon l’énergie à récupérer, la borne, le véhicule et les pertes réelles.",
    excerpt:
      "La formule utile, des exemples lisibles et les limites à connaître pour estimer une recharge sans confondre capacité de batterie et puissance.",
    category: "Recharge",
    readingTime: 8,
    datePublished: publicationDate,
    dateModified: publicationDate,
    image: "/images/blog/temps-recharge-voiture-electrique.jpg",
    imageAlt:
      "Illustration d’une voiture électrique branchée avec un repère visuel évoquant le temps de recharge",
    keywords: [
      "temps recharge voiture électrique",
      "calcul temps de recharge",
      "combien de temps recharge voiture",
      "simulateur recharge électrique",
    ],
    intro: [
      "Le temps de recharge dépend de l’énergie réellement à ajouter, pas uniquement de la taille totale de la batterie. Repasser de 40 à 80 % n’a pas le même coût en temps qu’une recharge de 10 à 100 %.",
      "Une estimation fiable utilise ensuite la puissance effective, c’est-à-dire la plus faible valeur entre la borne, le véhicule et l’installation. Les pertes et certaines conditions de fonctionnement expliquent l’écart entre le calcul théorique et le temps observé.",
    ],
    quickAnswer:
      "Temps théorique = énergie à récupérer en kWh ÷ puissance effective en kW. Pour obtenir une estimation réaliste, utilisez la plus faible puissance entre la borne et le véhicule, puis prévoyez une marge pour les pertes et les conditions de recharge.",
    sections: [
      {
        id: "formule",
        title: "La formule de base en trois étapes",
        paragraphs: [
          "Commencez par calculer l’énergie à ajouter. Pour une batterie utile de 60 kWh passant de 20 à 80 %, l’écart représente 60 % de la capacité, soit 36 kWh. Divisez ensuite cette énergie par la puissance que le système peut réellement maintenir.",
          "Le résultat obtenu est théorique. Le réseau, l’électronique de conversion et la batterie entraînent des pertes ; la puissance peut aussi être ajustée par le véhicule ou par une gestion dynamique du bâtiment.",
        ],
        listTitle: "Calcul rapide",
        ordered: true,
        bullets: [
          "Énergie à ajouter = capacité utile × différence de pourcentage",
          "Puissance effective = valeur la plus basse entre borne, voiture et site",
          "Temps théorique = énergie à ajouter ÷ puissance effective, puis ajouter une marge réaliste",
        ],
      },
      {
        id: "limites",
        title: "Les quatre limites qui changent le résultat",
        paragraphs: [
          "Une borne peut afficher 22 kW alors que la voiture n’accepte que 11 kW en AC. De la même manière, une borne configurée à une puissance inférieure pour préserver le bâtiment ne fournira pas sa capacité nominale.",
        ],
        table: {
          caption: "Les limites à vérifier avant le calcul",
          headers: ["Élément", "Rôle", "Information utile"],
          rows: [
            ["Batterie", "Détermine l’énergie à ajouter", "Capacité utile et niveau de départ"],
            ["Véhicule", "Limite la recharge AC", "Puissance du chargeur embarqué"],
            ["Borne", "Fournit une puissance maximale", "Puissance nominale et réglage"],
            ["Bâtiment", "Alimente la borne", "Puissance disponible et pilotage"],
          ],
        },
      },
      {
        id: "exemples",
        title: "Exemple : récupérer 36 kWh à plusieurs puissances",
        paragraphs: [
          "Le tableau compare des durées purement théoriques pour la même quantité d’énergie. Il sert à visualiser les écarts ; il ne tient pas compte des pertes, des variations de puissance ni d’une éventuelle limite du véhicule.",
        ],
        table: {
          caption: "Temps théorique pour ajouter 36 kWh",
          headers: ["Puissance effective", "Temps théorique approximatif", "Condition essentielle"],
          rows: [
            ["3,7 kW", "9 h 45", "Puissance maintenue pendant toute la session"],
            ["7,4 kW", "4 h 52", "Véhicule compatible 7,4 kW AC"],
            ["11 kW", "3 h 16", "Véhicule et site compatibles en triphasé"],
            ["22 kW", "1 h 38", "Véhicule acceptant réellement 22 kW AC"],
          ],
        },
        note: {
          title: "Ne lisez pas ce tableau comme une promesse",
          text: "Les pertes allongent le temps réel. Une voiture limitée à 11 kW ne réduira pas ce temps en étant branchée sur une borne AC 22 kW.",
        },
      },
      {
        id: "ac-dc",
        title: "Recharge AC à domicile et recharge rapide : deux usages",
        paragraphs: [
          "À domicile, la recharge AC valorise le temps de stationnement. Elle vise la disponibilité du véhicule au prochain départ plutôt qu’un remplissage le plus rapide possible. La recharge rapide DC répond davantage à un besoin ponctuel de mobilité ou de trajet.",
          "Les puissances DC très élevées vues sur certaines bornes publiques ne sont donc pas directement comparables aux valeurs AC d’une wallbox. Elles contournent le chargeur embarqué, et leur puissance varie davantage au cours de la session.",
        ],
      },
      {
        id: "reduire-temps",
        title: "Réduire le temps sans surdimensionner",
        paragraphs: [
          "La première amélioration consiste souvent à brancher le véhicule pendant toute sa période de stationnement et à programmer une plage adaptée. Il peut aussi être plus efficace de récupérer régulièrement l’usage quotidien que d’attendre une batterie très basse.",
          "Si le temps reste insuffisant, il faut identifier la limite réelle avant de changer la borne. Une augmentation de puissance n’aidera que si le véhicule et l’installation peuvent l’exploiter.",
        ],
        listTitle: "Ordre de vérification",
        bullets: [
          "Énergie réellement nécessaire avant le prochain départ",
          "Durée pendant laquelle la voiture peut rester branchée",
          "Limite AC du véhicule",
          "Réglage de la borne et pilotage éventuel",
          "Capacité disponible sur le site",
        ],
      },
      {
        id: "simulateur",
        title: "Les données à entrer dans un simulateur",
        paragraphs: [
          "Un bon simulateur distingue la capacité totale de la batterie de l’énergie à récupérer. Il doit aussi empêcher qu’une puissance de borne supérieure à la limite du véhicule produise un résultat artificiellement rapide.",
          "Le résultat reste une estimation, mais il permet de comparer des scénarios identiques et de voir si une recharge nocturne couvre l’usage prévu avant de lancer l’étude du site.",
        ],
        listTitle: "Préparez ces quatre valeurs",
        bullets: [
          "Capacité utile de la batterie",
          "Niveau de départ et niveau souhaité",
          "Puissance AC maximale du véhicule",
          "Puissance envisagée pour la borne",
        ],
      },
    ],
    faq: [
      {
        question: "Pourquoi le temps affiché par la voiture change-t-il pendant la recharge ?",
        answer:
          "Le véhicule met à jour son estimation selon la puissance observée, les besoins de la batterie et les conditions de la session. Le premier chiffre n’est donc pas toujours définitif.",
      },
      {
        question: "Dois-je utiliser la capacité totale ou utile de la batterie ?",
        answer:
          "Utilisez de préférence la capacité utile lorsqu’elle est connue, car c’est celle effectivement accessible au conducteur. À défaut, le résultat reste un ordre de grandeur.",
      },
      {
        question: "Une borne plus puissante réduit-elle toujours le temps ?",
        answer:
          "Seulement si le véhicule accepte cette puissance et si l’installation peut la fournir. Sinon, la vitesse reste limitée par l’élément le moins puissant.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-7-11-22-kw",
      "borne-recharge-maroc-guide",
      "recharge-hybride-rechargeable-maroc",
    ],
  },
  {
    slug: "borne-recharge-entreprise-copropriete-maroc",
    title: "Bornes de recharge en entreprise et copropriété au Maroc",
    seoTitle: "Bornes de recharge en entreprise au Maroc",
    description:
      "Structurez un projet de recharge en entreprise ou copropriété au Maroc : usages, puissance partagée, accès, déploiement progressif et maintenance.",
    excerpt:
      "Une méthode de projet centrée sur les usages, l’évolutivité et le pilotage global plutôt que sur l’addition de bornes indépendantes.",
    category: "Professionnels",
    readingTime: 10,
    datePublished: publicationDate,
    dateModified: publicationDate,
    image: "/images/blog/borne-recharge-entreprise-copropriete-maroc.jpg",
    imageAlt:
      "Illustration d’un parking moderne au Maroc équipé de plusieurs bornes de recharge",
    keywords: [
      "borne recharge entreprise Maroc",
      "borne recharge copropriété Maroc",
      "parking électrique entreprise",
      "gestion puissance bornes",
    ],
    intro: [
      "Dès que plusieurs conducteurs partagent un parking, le projet ne se résume plus à choisir une borne. Il faut organiser les usages, la puissance disponible, les accès et l’évolution du nombre de places.",
      "Une entreprise, une résidence et un site recevant du public n’ont pas les mêmes priorités. Ce guide propose une méthode commune pour cadrer le besoin, puis identifier les décisions qui doivent être validées avec les responsables du site et les professionnels compétents.",
    ],
    quickAnswer:
      "Commencez par cartographier les véhicules, leurs durées de stationnement et les utilisateurs. Dimensionnez ensuite l’infrastructure globale, prévoyez le partage de puissance et les règles d’accès, puis déployez par phases lorsque la demande future reste incertaine.",
    sections: [
      {
        id: "objectifs",
        title: "Définir le service attendu avant le nombre de bornes",
        paragraphs: [
          "Un parking de collaborateurs cherche souvent à récupérer l’énergie pendant une journée complète. Une flotte opérationnelle peut avoir des fenêtres de recharge plus courtes. Une résidence doit organiser des usages individuels sur une infrastructure collective. Ces différences orientent la puissance, les accès et le suivi.",
          "Le premier livrable utile est une liste d’objectifs classés : disponibilité des véhicules, confort des utilisateurs, attribution des sessions, capacité d’évolution et simplicité d’exploitation.",
        ],
        table: {
          caption: "Priorités selon le contexte",
          headers: ["Contexte", "Question principale", "Fonction souvent utile"],
          rows: [
            ["Entreprise", "Qui peut recharger et pendant combien de temps ?", "Accès identifié et suivi des sessions"],
            ["Flotte", "Quels véhicules doivent repartir en premier ?", "Priorités et pilotage de puissance"],
            ["Copropriété", "Comment faire évoluer le nombre d’utilisateurs ?", "Architecture progressive et attribution"],
            ["Accueil visiteurs", "Comment proposer un usage simple et contrôlé ?", "Parcours d’accès clairement signalé"],
          ],
        },
      },
      {
        id: "inventaire",
        title: "Cartographier les usages et les périodes de présence",
        paragraphs: [
          "Le nombre de places ne suffit pas à dimensionner le système. Il faut connaître le nombre de véhicules présents simultanément, l’énergie moyenne à récupérer et les départs prioritaires. Les données peuvent être recueillies par entretien, questionnaire ou observation des usages actuels.",
          "L’objectif n’est pas de prédire parfaitement plusieurs années, mais d’identifier un scénario de départ et un scénario de croissance. L’infrastructure peut alors réserver les passages, les emplacements ou la capacité nécessaires à une extension.",
        ],
        listTitle: "Données de cadrage",
        bullets: [
          "Nombre de véhicules actuels et attendus",
          "Heures d’arrivée, de départ et durée de stationnement",
          "Kilométrage ou énergie à récupérer",
          "Véhicules prioritaires pour l’activité",
          "Places destinées aux collaborateurs, résidents, visiteurs ou flotte",
        ],
      },
      {
        id: "puissance-partagee",
        title: "Raisonner en puissance partagée",
        paragraphs: [
          "Installer plusieurs bornes à leur puissance maximale sans coordination peut créer un besoin important rarement utilisé en continu. Un système de gestion répartit la capacité disponible entre les véhicules branchés et peut tenir compte de la consommation du bâtiment.",
          "Cette approche permet de servir davantage de places avec une enveloppe maîtrisée, à condition que les règles de répartition correspondent aux départs réels. Une flotte peut prioriser certains véhicules ; un parking de longue durée peut répartir plus uniformément.",
        ],
        note: {
          title: "Concevoir le système, pas une collection de bornes",
          text: "La compatibilité entre les équipements, la supervision et la stratégie de puissance doit être étudiée avant d’acheter les premières unités.",
        },
      },
      {
        id: "acces-suivi",
        title: "Organiser les accès et les informations utiles",
        paragraphs: [
          "Un accès libre peut convenir à un usage privé très limité. Dès que plusieurs groupes utilisent le parking, une identification par badge, compte ou autre mécanisme facilite l’attribution des sessions et l’assistance.",
          "Le niveau de suivi doit rester proportionné au besoin. Certains sites ont uniquement besoin de savoir quelle borne est disponible ; d’autres doivent associer les consommations à un véhicule ou à un utilisateur. Les règles de traitement et de conservation des données doivent être définies par l’organisation responsable.",
        ],
        listTitle: "Décisions d’exploitation",
        bullets: [
          "Groupes autorisés et procédure d’inscription",
          "Mode d’identification et gestion des badges ou comptes",
          "Informations consultées par l’exploitant",
          "Contact en cas de borne occupée ou indisponible",
          "Règles internes de stationnement après la fin d’une session",
        ],
      },
      {
        id: "deploiement",
        title: "Déployer par phases sans fermer la porte à la croissance",
        paragraphs: [
          "Un premier lot peut valider les usages avant une extension. Pour que cette progression reste économique, la conception initiale doit anticiper les emplacements, le cheminement principal, la communication entre équipements et la capacité du système de gestion.",
          "Chaque phase doit avoir un critère de déclenchement mesurable : nombre de demandes, taux d’occupation, énergie délivrée ou arrivée de nouveaux véhicules. Cela évite d’étendre uniquement sur la base d’une impression ponctuelle.",
        ],
        listTitle: "Exemple de progression",
        ordered: true,
        bullets: [
          "Pilote sur quelques places représentatives",
          "Mesure des sessions et retours d’usage",
          "Ajustement des règles de puissance et d’accès",
          "Extension lorsque le seuil défini est atteint",
          "Réévaluation régulière de la capacité globale",
        ],
      },
      {
        id: "gouvernance-maintenance",
        title: "Valider la gouvernance, les autorisations et la maintenance",
        paragraphs: [
          "Dans un site partagé, les responsabilités doivent être explicites : décision d’investissement, autorisation des travaux, exploitation, support et évolution. Les règles applicables dépendent du statut du site et du projet ; elles doivent être vérifiées auprès des parties concernées et de professionnels compétents avant engagement.",
          "La maintenance commence par une documentation accessible : plan des équipements, références, réglages, contacts et historique des interventions. Une procédure simple pour signaler un défaut réduit l’indisponibilité et évite les manipulations improvisées.",
        ],
        listTitle: "Dossier à conserver",
        bullets: [
          "Plan des places, équipements et cheminements",
          "Configuration de puissance et règles de priorité",
          "Liste des responsables et contacts d’assistance",
          "Procédure d’ajout d’un utilisateur ou d’une borne",
          "Historique des contrôles et interventions",
        ],
      },
    ],
    faq: [
      {
        question: "Faut-il équiper toutes les places dès le départ ?",
        answer:
          "Pas nécessairement. Un déploiement progressif peut être pertinent si l’infrastructure initiale anticipe correctement les passages, la communication et la puissance nécessaires à l’extension.",
      },
      {
        question: "Comment éviter que toutes les bornes chargent au maximum en même temps ?",
        answer:
          "Une gestion de puissance compatible peut répartir une enveloppe entre les points de charge et, selon la configuration, tenir compte de la consommation du bâtiment.",
      },
      {
        question: "Les règles sont-elles identiques en entreprise et en copropriété ?",
        answer:
          "Non. Les responsabilités, autorisations et usages diffèrent selon le site. Le projet doit être validé avec les parties responsables et les professionnels compétents, sans appliquer une procédure générique.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-maroc-guide",
      "borne-recharge-7-11-22-kw",
      "borne-recharge-hotel-riad-maroc",
    ],
  },
  {
    slug: "autel-maxicharger-22kw-maroc",
    title: "Autel MaxiCharger 22 kW au Maroc : le guide complet",
    seoTitle: "Autel MaxiCharger 22 kW au Maroc : guide",
    description:
      "Puissance, application, connectivité et installation : découvrez si l’Autel MaxiCharger 22 kW correspond à votre véhicule et à votre usage au Maroc.",
    excerpt:
      "Un décryptage concret de la MaxiCharger : puissance réellement utile, fonctions connectées, pose et critères à vérifier avant de choisir.",
    category: "Produit",
    readingTime: 9,
    datePublished: newPublicationDate,
    dateModified: newPublicationDate,
    image: "/images/blog/autel-maxicharger-22kw-maroc.jpg",
    imageAlt:
      "Autel MaxiCharger installée sur le mur d’une villa contemporaine au Maroc près d’un véhicule électrique",
    keywords: [
      "Autel MaxiCharger Maroc",
      "Autel MaxiCharger 22 kW",
      "borne Autel Maroc",
      "wallbox Autel",
      "Autel Charge App",
    ],
    intro: [
      "L’Autel MaxiCharger AC Wallbox réunit une puissance pouvant atteindre 22 kW, un connecteur Type 2 et plusieurs fonctions de pilotage. Ces caractéristiques sont attractives, mais leur valeur dépend toujours du véhicule, de l’alimentation électrique et de la manière dont la borne sera utilisée.",
      "Ce guide présente les éléments utiles pour évaluer la MaxiCharger dans un projet résidentiel ou professionnel au Maroc. L’objectif est de distinguer les capacités du produit de la puissance qui sera réellement disponible une fois la borne installée.",
    ],
    quickAnswer:
      "L’Autel MaxiCharger convient aux véhicules compatibles Type 2 et peut délivrer jusqu’à 22 kW en configuration adaptée. La vitesse réelle reste limitée par le chargeur embarqué du véhicule et l’installation. Son intérêt tient aussi à l’application Autel Charge, à la programmation, au suivi, au RFID et aux options de connectivité.",
    sections: [
      {
        id: "profil-maxicharger",
        title: "À quel type de projet correspond la MaxiCharger ?",
        paragraphs: [
          "La MaxiCharger peut répondre à une recharge quotidienne à domicile comme à un besoin d’accès contrôlé sur un site professionnel. Son format compact permet une pose murale ; une installation sur pied peut être étudiée lorsque la place de stationnement n’est pas adossée à un support adapté.",
          "Le produit ne doit cependant pas être choisi uniquement pour sa puissance maximale. Le bon projet commence par le temps de stationnement, l’énergie à récupérer, la limite AC de la voiture et la puissance que le bâtiment peut consacrer à la recharge.",
        ],
        listTitle: "Les profils qui peuvent y trouver un intérêt",
        bullets: [
          "Conducteur souhaitant programmer et suivre ses sessions depuis une application",
          "Foyer recherchant une borne évolutive pour un futur véhicule",
          "Entreprise ayant besoin d’identifier les utilisateurs avec un badge RFID",
          "Stationnement nécessitant une pose murale ou une implantation sur pied",
        ],
      },
      {
        id: "puissance-reelle",
        title: "Jusqu’à 22 kW : comprendre la puissance réellement obtenue",
        paragraphs: [
          "La borne peut atteindre 22 kW avec une alimentation triphasée compatible. Cette valeur ne signifie pas que chaque voiture chargera à 22 kW. Le chargeur embarqué du véhicule peut accepter une puissance AC inférieure, et l’installation peut être configurée à un niveau adapté à sa capacité.",
          "Une MaxiCharger réglée à 7,4 ou 11 kW peut donc être parfaitement cohérente. Le produit conserve ses fonctions connectées tout en respectant la limite du site. Le dimensionnement évite de renforcer inutilement une installation pour une puissance que le véhicule ne saurait pas utiliser.",
        ],
        table: {
          caption: "Les trois limites qui déterminent la recharge",
          headers: ["Élément", "Rôle", "Vérification utile"],
          rows: [
            ["Véhicule", "Fixe la puissance AC maximale acceptée", "Fiche technique ou simulateur"],
            ["Installation", "Détermine la capacité disponible", "Étude du tableau et de l’alimentation"],
            ["Borne", "Fournit la puissance configurée", "Réglage lors de la mise en service"],
          ],
        },
      },
      {
        id: "application-connectivite",
        title: "Autel Charge App, RFID et connectivité au quotidien",
        paragraphs: [
          "L’application Autel Charge permet notamment de démarrer ou arrêter une session, programmer des horaires, consulter l’historique, suivre la consommation et recevoir des notifications. Ces fonctions deviennent utiles lorsque la recharge doit s’adapter au rythme du foyer ou être surveillée à distance.",
          "La borne prend en charge le Wi-Fi, le Bluetooth et l’Ethernet, avec une option 4G selon la configuration. Le RFID apporte un contrôle d’accès simple lorsqu’un point de charge se trouve dans un parking partagé ou accessible à plusieurs personnes.",
        ],
        listTitle: "Fonctions à configurer dès la mise en service",
        bullets: [
          "Association de la borne au compte et au réseau disponible",
          "Plage horaire correspondant au stationnement habituel",
          "Niveau de puissance retenu après l’étude électrique",
          "Badges et règles d’accès pour les utilisateurs autorisés",
          "Notifications réellement utiles pour éviter les alertes superflues",
        ],
        note: {
          title: "Une borne connectée doit rester simple",
          text: "Le réglage initial doit se limiter aux fonctions utiles. Une interface riche n’oblige pas à activer chaque option dès le premier jour.",
        },
      },
      {
        id: "installation-protection",
        title: "Installation, protection et emplacement",
        paragraphs: [
          "La MaxiCharger affiche un indice IP54 et une résistance IK08, avec une plage de fonctionnement annoncée de -40 °C à +55 °C. Ces caractéristiques n’annulent pas la nécessité de choisir un emplacement raisonnable, une fixation stable et un cheminement de câble protégé.",
          "L’installation doit réunir le circuit, les protections électriques, la mise à la terre, le support et la configuration de puissance. EVAtlas analyse également la longueur du câble, proposée en 5 m ou 7,5 m, afin que le connecteur rejoigne naturellement le port du véhicule.",
        ],
        listTitle: "Points contrôlés avant la pose",
        ordered: true,
        bullets: [
          "Position du port de charge lorsque la voiture est garée",
          "Distance et cheminement depuis le tableau électrique",
          "Support disponible pour une pose murale ou sur pied",
          "Exposition, circulation et rangement du câble",
          "Connexion réseau nécessaire aux fonctions retenues",
        ],
      },
      {
        id: "choisir-maxicharger",
        title: "La grille de décision avant de choisir",
        paragraphs: [
          "La MaxiCharger est pertinente lorsque ses fonctions répondent à un usage réel et que son installation est dimensionnée sur des données vérifiées. Une recommandation claire doit indiquer le véhicule, la puissance configurée, le type de pose, la longueur du câble et les options de contrôle.",
          "Le simulateur EVAtlas fournit un premier ordre de grandeur du temps de charge. Une étude reprend ensuite le tableau électrique et l’emplacement pour transformer cette estimation en configuration installable.",
        ],
        table: {
          caption: "Décision rapide autour de la MaxiCharger",
          headers: ["Question", "Si la réponse est oui"],
          rows: [
            ["Le véhicule utilise-t-il le Type 2 en AC ?", "La compatibilité de connecteur est cohérente"],
            ["L’application ou le RFID sont-ils utiles ?", "Les fonctions connectées apportent une valeur concrète"],
            ["Le site a-t-il été vérifié ?", "La puissance peut être configurée sans hypothèse"],
            ["L’emplacement est-il pratique ?", "La recharge restera simple au quotidien"],
          ],
        },
      },
    ],
    faq: [
      {
        question: "La MaxiCharger délivre-t-elle toujours 22 kW ?",
        answer:
          "Non. Elle peut atteindre 22 kW, mais la puissance réelle dépend de la configuration électrique et de la limite AC du véhicule.",
      },
      {
        question: "L’application Autel Charge est-elle obligatoire ?",
        answer:
          "La borne peut être configurée selon l’usage retenu. L’application apporte la programmation, le suivi et la gestion à distance, mais les fonctions à utiliser dépendent du projet.",
      },
      {
        question: "La borne peut-elle être posée sans mur à proximité ?",
        answer:
          "Oui, une pose sur pied peut être étudiée. Le support, le cheminement électrique et la protection de l’emplacement doivent alors être intégrés au projet.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-7-11-22-kw",
      "installer-borne-recharge-maison-maroc",
      "borne-recharge-intelligente-delestage",
    ],
    productCta: {
      eyebrow: "Voir le produit en détail",
      title: "Explorez la MaxiCharger sous tous les angles.",
      text: "Puissance, architecture, application, pose murale ou sur pied : retrouvez la présentation complète avant de configurer votre projet.",
      label: "Découvrir l’Autel MaxiCharger",
    },
  },
  {
    slug: "recharge-voiture-electrique-solaire-maroc",
    title: "Recharger une voiture électrique au solaire au Maroc",
    seoTitle: "Recharge solaire d’une voiture électrique au Maroc",
    description:
      "Découvrez comment coordonner panneaux solaires, consommation de la maison et borne pour mieux valoriser une recharge photovoltaïque au Maroc.",
    excerpt:
      "Production solaire, horaires, puissance et pilotage : les décisions qui permettent de rapprocher la recharge du moment où l’énergie est disponible.",
    category: "Énergie solaire",
    readingTime: 10,
    datePublished: newPublicationDate,
    dateModified: newPublicationDate,
    image: "/images/blog/recharge-voiture-electrique-solaire-maroc.jpg",
    imageAlt:
      "Voiture électrique en recharge devant une villa marocaine équipée de panneaux solaires",
    keywords: [
      "recharge voiture électrique solaire Maroc",
      "panneaux solaires borne recharge",
      "photovoltaïque voiture électrique",
      "autoconsommation recharge véhicule",
      "borne intelligente solaire",
    ],
    intro: [
      "Le Maroc bénéficie d’un ensoleillement qui rend naturelle la question suivante : peut-on utiliser une partie de la production photovoltaïque pour recharger sa voiture ? Techniquement, l’objectif n’est pas de relier directement des panneaux à la voiture, mais de coordonner la production, les usages du bâtiment et la borne.",
      "La réussite dépend surtout du moment où le véhicule est présent, de la puissance photovoltaïque réellement disponible et de la capacité de la borne à être programmée ou pilotée. Une installation cohérente privilégie les données mesurées plutôt qu’une promesse d’autonomie solaire totale.",
    ],
    quickAnswer:
      "Une voiture peut être rechargée pendant les heures de production photovoltaïque lorsque l’installation du bâtiment, la borne et le pilotage sont conçus ensemble. La part solaire dépend de la production instantanée, des autres consommations, de la puissance de charge et du temps de présence du véhicule.",
    sections: [
      {
        id: "principe-recharge-solaire",
        title: "Comprendre le trajet réel de l’énergie",
        paragraphs: [
          "Les panneaux alimentent l’installation électrique du bâtiment selon l’architecture retenue. La voiture devient l’un des usages de cette installation, au même titre que les équipements du logement. La production disponible est donc partagée entre les besoins présents au même moment.",
          "Parler de recharge solaire est pertinent lorsque la session coïncide avec la production et que la puissance est ajustée en conséquence. Si la voiture charge la nuit sans stockage adapté, l’énergie consommée à cet instant ne provient pas directement des panneaux de la journée.",
        ],
        note: {
          title: "Éviter une confusion fréquente",
          text: "La puissance installée en panneaux n’est pas disponible en permanence. La météo, l’heure, la saison et les autres usages modifient la production réellement affectable à la voiture.",
        },
      },
      {
        id: "presence-vehicule",
        title: "Le meilleur levier : faire coïncider présence et production",
        paragraphs: [
          "Un véhicule stationné à domicile pendant la journée peut absorber une partie de la production au fil des heures. Lorsque la voiture n’est présente que le soir, la programmation seule ne suffit pas à déplacer l’énergie solaire ; le projet doit alors étudier d’autres stratégies de consommation ou de stockage.",
          "Le télétravail, les véhicules de flotte présents entre deux missions ou un second véhicule stationné en journée créent des profils particulièrement intéressants. L’analyse porte sur une semaine réelle, pas uniquement sur une journée idéale.",
        ],
        table: {
          caption: "Impact du profil de stationnement",
          headers: ["Profil", "Possibilité de recharge solaire directe", "Approche utile"],
          rows: [
            ["Présent en journée", "Élevée selon la production", "Programmer et ajuster la puissance"],
            ["Présent seulement le soir", "Faible sans stockage", "Étudier le bilan global et les horaires"],
            ["Flotte avec retours fréquents", "Variable mais exploitable", "Prioriser les véhicules présents"],
          ],
        },
      },
      {
        id: "puissance-ajustee",
        title: "Pourquoi une puissance modulée vaut mieux qu’un maximum fixe",
        paragraphs: [
          "Une borne réglée à forte puissance peut demander davantage que le surplus photovoltaïque disponible. Le réseau ou l’installation complète alors la différence. Une recharge modulée peut au contraire suivre une enveloppe plus raisonnable et augmenter la part de production locale utilisée.",
          "Le niveau minimal et les possibilités de pilotage dépendent de la borne, du véhicule et de l’architecture électrique. Il faut vérifier leur compatibilité avant de promettre un suivi automatique du surplus.",
        ],
        listTitle: "Données nécessaires au réglage",
        bullets: [
          "Courbe de production photovoltaïque sur plusieurs périodes",
          "Consommation de base du bâtiment pendant la journée",
          "Énergie moyenne à récupérer dans le véhicule",
          "Durée de présence et heure de départ souhaitée",
          "Capacité de mesure et de pilotage de la solution retenue",
        ],
      },
      {
        id: "borne-connectee-solaire",
        title: "Le rôle de la borne connectée",
        paragraphs: [
          "Une application permet au minimum de programmer les sessions et d’observer l’énergie délivrée. Une gestion plus avancée peut exploiter une mesure de puissance pour adapter la recharge, à condition que tous les composants communiquent correctement.",
          "La connectivité ne produit pas d’énergie supplémentaire. Elle sert à mieux synchroniser la demande avec la production et les contraintes du bâtiment. Le projet doit prévoir le réseau, l’emplacement des mesures et le comportement attendu en cas de perte de connexion.",
        ],
        listTitle: "Fonctions particulièrement utiles",
        bullets: [
          "Programmation sur les heures de production habituelles",
          "Historique des sessions pour comparer les périodes",
          "Limitation de puissance afin de préserver les autres usages",
          "Notifications de début, de fin ou d’interruption",
        ],
      },
      {
        id: "etude-solaire",
        title: "Construire un scénario mesurable avant d’investir",
        paragraphs: [
          "Une étude utile rapproche trois séries de données : production, consommation du bâtiment et besoin de mobilité. Elle peut alors estimer la quantité d’énergie transférable à la voiture et identifier les contraintes qui limitent le résultat.",
          "Commencez par un scénario simple : une plage horaire, une puissance cible et une énergie quotidienne. Après quelques semaines, l’historique réel permet d’ajuster la stratégie sans surdimensionner automatiquement les panneaux, la borne ou le stockage.",
        ],
        listTitle: "Plan de départ",
        ordered: true,
        bullets: [
          "Mesurer ou estimer la production et la consommation diurnes",
          "Décrire les heures de présence du véhicule",
          "Définir l’énergie à récupérer avant le prochain départ",
          "Vérifier les fonctions de programmation et de pilotage",
          "Comparer le scénario prévu aux sessions réellement observées",
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on brancher directement une voiture sur des panneaux solaires ?",
        answer:
          "Dans un projet résidentiel courant, la recharge s’intègre à l’installation électrique du bâtiment. L’architecture complète doit être conçue et vérifiée par des professionnels compétents.",
      },
      {
        question: "Une borne de 22 kW exige-t-elle 22 kW de panneaux ?",
        answer:
          "Non. La borne peut être configurée ou pilotée à une puissance inférieure. Le dimensionnement doit partir de la production disponible, du véhicule et du besoin réel.",
      },
      {
        question: "Une batterie domestique est-elle indispensable ?",
        answer:
          "Pas si le véhicule peut charger pendant les heures de production. Si la recharge a lieu uniquement le soir, le stockage peut faire partie des scénarios à étudier, avec son propre coût et ses contraintes.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-intelligente-delestage",
      "temps-recharge-voiture-electrique",
      "installer-borne-recharge-maison-maroc",
    ],
    productCta: {
      eyebrow: "Piloter la recharge",
      title: "Une borne connectée pour choisir le bon moment.",
      text: "Découvrez les fonctions de programmation, de suivi et de gestion de puissance proposées par l’Autel MaxiCharger.",
      label: "Voir la MaxiCharger connectée",
    },
  },
  {
    slug: "borne-recharge-intelligente-delestage",
    title: "Borne intelligente et délestage : recharger sans dépasser",
    seoTitle: "Borne intelligente et délestage : le guide",
    description:
      "Comprenez le délestage, la gestion dynamique de puissance, la programmation et le suivi pour intégrer une borne intelligente à votre installation.",
    excerpt:
      "Une borne connectée ne sert pas seulement à lancer la recharge : elle peut aider à répartir la puissance et à préserver les usages du bâtiment.",
    category: "Technologie",
    readingTime: 9,
    datePublished: newPublicationDate,
    dateModified: newPublicationDate,
    image: "/images/blog/borne-recharge-intelligente-delestage.jpg",
    imageAlt:
      "Borne de recharge intelligente reliée visuellement au tableau électrique, au véhicule et à une application mobile",
    keywords: [
      "borne recharge intelligente",
      "délestage borne recharge",
      "gestion dynamique puissance",
      "wallbox connectée Maroc",
      "pilotage recharge voiture électrique",
    ],
    intro: [
      "Une borne dite intelligente ajoute du pilotage à la fourniture d’énergie. Elle peut programmer les sessions, identifier des utilisateurs, enregistrer l’historique et, selon le système installé, adapter la puissance pour tenir compte des autres consommations du bâtiment.",
      "Le délestage et la gestion dynamique sont souvent présentés comme une seule fonction. Ils recouvrent pourtant des architectures et des niveaux de contrôle différents. Les comprendre permet de choisir les équipements compatibles et de définir le comportement attendu avant l’installation.",
    ],
    quickAnswer:
      "Une borne intelligente peut ajuster ou limiter la recharge afin de respecter une enveloppe de puissance. La programmation agit selon l’heure ; la gestion dynamique réagit à une mesure de consommation. La solution exige des équipements compatibles, un réglage initial et une stratégie claire en cas de forte demande.",
    sections: [
      {
        id: "borne-intelligente-definition",
        title: "Ce qui rend réellement une borne intelligente",
        paragraphs: [
          "La connectivité seule ne suffit pas. Une borne devient utilement intelligente lorsqu’elle transforme des informations en actions : différer une session, appliquer une limite, reconnaître un badge, enregistrer l’énergie délivrée ou répartir une capacité entre plusieurs points.",
          "Chaque fonction répond à une question d’usage. La programmation convient à un rythme prévisible ; le contrôle d’accès protège un parking partagé ; la gestion dynamique devient pertinente lorsque la consommation du bâtiment varie fortement.",
        ],
        table: {
          caption: "Fonctions et problèmes résolus",
          headers: ["Fonction", "Information utilisée", "Objectif"],
          rows: [
            ["Programmation", "Heure et calendrier", "Décaler la recharge"],
            ["Limite fixe", "Puissance configurée", "Respecter une enveloppe connue"],
            ["Gestion dynamique", "Consommation mesurée", "Adapter la recharge en temps réel"],
            ["RFID", "Identité du badge", "Contrôler les utilisateurs"],
          ],
        },
      },
      {
        id: "delestage-dynamique",
        title: "Délestage et gestion dynamique : la différence utile",
        paragraphs: [
          "Un mécanisme de délestage peut réduire ou interrompre un usage lorsque la puissance disponible devient insuffisante. Une gestion dynamique de recharge ajuste plus finement la puissance de la borne selon une mesure et des règles compatibles avec l’installation.",
          "Le résultat recherché est le même : éviter que la recharge compromette les autres usages. Mais les capteurs, la communication, le temps de réaction et les possibilités de réglage doivent être vérifiés pour la solution précise, sans supposer qu’une application mobile assure à elle seule cette fonction.",
        ],
        note: {
          title: "Le point de compatibilité",
          text: "La borne, le dispositif de mesure et l’architecture de commande doivent être conçus comme un système. Deux appareils connectés ne sont pas automatiquement capables de travailler ensemble.",
        },
      },
      {
        id: "scenarios-maison",
        title: "Trois scénarios concrets à domicile",
        paragraphs: [
          "Dans un logement, les pointes peuvent provenir de plusieurs équipements utilisés simultanément. La recharge peut être déplacée vers une période calme, limitée à une puissance stable ou ajustée selon la consommation instantanée.",
          "Le choix dépend de la régularité des habitudes. Une simple plage nocturne peut suffire à certains foyers. D’autres préfèrent une adaptation automatique pour conserver de la souplesse sans surveiller chaque appareil.",
        ],
        listTitle: "Du plus simple au plus réactif",
        ordered: true,
        bullets: [
          "Programmer la recharge lorsque la maison consomme peu",
          "Configurer une limite fixe compatible avec la marge disponible",
          "Mesurer la consommation et moduler la borne en temps réel",
        ],
      },
      {
        id: "entreprise-multi-bornes",
        title: "Répartir la puissance entre plusieurs véhicules",
        paragraphs: [
          "Sur un site équipé de plusieurs points de charge, la puissance totale importe davantage que le maximum d’une seule borne. Un système compatible peut répartir l’enveloppe entre les véhicules branchés et appliquer des priorités liées aux départs.",
          "La règle doit rester compréhensible pour les utilisateurs : partage égal, priorité à une flotte ou rotation selon l’état de charge. Une stratégie opaque crée des attentes impossibles à tenir, même si la technologie fonctionne correctement.",
        ],
        listTitle: "Éléments à cadrer",
        bullets: [
          "Puissance globale réservée à la recharge",
          "Nombre de véhicules simultanés et heures de départ",
          "Priorités métiers ou groupes d’utilisateurs",
          "Comportement en cas de perte du réseau ou de la supervision",
          "Données nécessaires au suivi et à l’assistance",
        ],
      },
      {
        id: "choix-installation-intelligente",
        title: "Préparer une installation intelligente sans complexité inutile",
        paragraphs: [
          "La bonne solution est celle que l’utilisateur peut expliquer en quelques phrases : quand la voiture charge, quelle puissance elle peut recevoir et ce qui se passe lorsque le bâtiment consomme davantage. Cette règle opérationnelle doit être définie avant le choix final des équipements.",
          "L’étude vérifie ensuite la mesure, la communication, le câblage et les réglages. La mise en service doit inclure un test en situation et une explication du mode de secours, pas seulement la création d’un compte dans l’application.",
        ],
        listTitle: "Questions à poser au devis",
        bullets: [
          "La puissance est-elle fixe, programmée ou réellement dynamique ?",
          "Quel équipement mesure la consommation du bâtiment ?",
          "Que se passe-t-il lorsque la connexion est indisponible ?",
          "Qui peut modifier les limites et consulter l’historique ?",
          "Comment le système pourra-t-il évoluer avec un second véhicule ?",
        ],
      },
    ],
    faq: [
      {
        question: "Le délestage ralentit-il toujours la recharge ?",
        answer:
          "Il ne réduit la puissance que lorsque la règle ou la consommation du bâtiment l’exige. Le reste du temps, la borne peut utiliser la capacité autorisée.",
      },
      {
        question: "Une application mobile suffit-elle pour gérer dynamiquement la puissance ?",
        answer:
          "Non. Une gestion dynamique nécessite généralement une mesure et une communication compatibles avec la borne. L’application sert surtout à configurer ou consulter le système.",
      },
      {
        question: "Le pilotage est-il utile avec une seule voiture ?",
        answer:
          "Oui lorsque la marge électrique varie, que la recharge doit être programmée ou que l’utilisateur souhaite suivre ses sessions. Une limite fixe peut toutefois suffire dans un site stable.",
      },
    ],
    relatedSlugs: [
      "autel-maxicharger-22kw-maroc",
      "recharge-voiture-electrique-solaire-maroc",
      "deux-voitures-electriques-maison-une-ou-deux-bornes",
    ],
    productCta: {
      eyebrow: "Contrôle connecté",
      title: "Pilotez la recharge depuis Autel Charge.",
      text: "Programmation, suivi, historique, gestion de puissance et accès RFID : découvrez l’écosystème de la MaxiCharger.",
      label: "Explorer les fonctions connectées",
    },
  },
  {
    slug: "borne-recharge-tesla-type-2-maroc",
    title: "Quelle borne de recharge pour une Tesla au Maroc ?",
    seoTitle: "Quelle borne pour une Tesla au Maroc ?",
    description:
      "Type 2, puissance AC, câble et installation : les critères pour choisir une borne à domicile compatible avec votre Tesla au Maroc.",
    excerpt:
      "Le connecteur ne fait pas toute la vitesse : vérifiez la limite AC de votre véhicule, votre installation et vos habitudes avant de choisir.",
    category: "Compatibilité",
    readingTime: 8,
    datePublished: newPublicationDate,
    dateModified: newPublicationDate,
    image: "/images/blog/borne-recharge-tesla-type-2-maroc.jpg",
    imageAlt:
      "Berline électrique blanche compatible Type 2 branchée à une borne murale dans une résidence à Casablanca",
    keywords: [
      "borne recharge Tesla Maroc",
      "wallbox Tesla Maroc",
      "chargeur Type 2 Tesla",
      "recharge Tesla maison",
      "borne compatible Tesla",
    ],
    intro: [
      "Une Tesla peut être rechargée sur une borne AC compatible Type 2, mais la vitesse dépend du modèle, de sa configuration et de l’installation électrique. Choisir uniquement à partir du logo de la voiture conduit souvent à ignorer le temps de stationnement et la puissance réellement disponible.",
      "Ce guide propose une méthode valable pour préparer une recharge à domicile au Maroc : vérifier la prise AC du véhicule, sa limite de charge, le câble, le tableau et les fonctions de pilotage souhaitées.",
    ],
    quickAnswer:
      "Pour une Tesla équipée pour la recharge AC Type 2, une borne Type 2 correctement installée peut convenir. La puissance utile doit être choisie selon la limite AC exacte du véhicule, l’alimentation du logement et l’énergie à récupérer. Une borne 22 kW ne garantit pas une recharge à 22 kW.",
    sections: [
      {
        id: "compatibilite-type-2",
        title: "Type 2 : la première compatibilité à confirmer",
        paragraphs: [
          "Le Type 2 est un connecteur courant pour la recharge AC de véhicules électriques en Europe et sur de nombreux modèles commercialisés au Maroc. La présence du port adapté permet la connexion physique, mais elle ne détermine pas à elle seule la puissance de la session.",
          "Le manuel et l’interface du véhicule restent les sources prioritaires pour confirmer la puissance AC acceptée. Cette valeur peut varier selon le modèle, l’année ou la configuration ; il faut donc éviter d’appliquer une donnée générique à toutes les Tesla.",
        ],
        listTitle: "Informations à relever sur le véhicule",
        bullets: [
          "Modèle, version et année",
          "Puissance maximale acceptée en courant alternatif",
          "Emplacement du port lorsque la voiture est stationnée",
          "Recommandations de niveau de charge affichées par le véhicule",
        ],
      },
      {
        id: "puissance-tesla",
        title: "7,4, 11 ou 22 kW : raisonner depuis la limite AC",
        paragraphs: [
          "La puissance maximale de la borne n’accélère la recharge que si la voiture et le site peuvent l’utiliser. Si le chargeur embarqué accepte une valeur inférieure, le véhicule limite automatiquement l’énergie reçue.",
          "Le besoin quotidien est souvent plus instructif. Une voiture stationnée toute la nuit peut récupérer une quantité importante d’énergie avec une puissance modérée. L’objectif consiste à retrouver le niveau nécessaire avant le départ, pas à atteindre systématiquement le maximum technique.",
        ],
        table: {
          caption: "Méthode de choix de la puissance",
          headers: ["Question", "Conséquence"],
          rows: [
            ["Quelle est la limite AC du véhicule ?", "Écarte la puissance inutilisable"],
            ["Combien d’énergie faut-il récupérer ?", "Définit le besoin de la session"],
            ["Combien d’heures la voiture stationne-t-elle ?", "Donne la puissance moyenne nécessaire"],
            ["Quelle marge offre le tableau ?", "Fixe la configuration réalisable"],
          ],
        },
      },
      {
        id: "cable-emplacement",
        title: "Le câble et l’emplacement font la différence au quotidien",
        paragraphs: [
          "Le port de charge doit pouvoir être atteint sans tendre le câble ni traverser un passage. La position habituelle de la voiture, marche avant ou arrière, doit être reproduite pendant l’étude. Une longueur de câble adaptée évite de déplacer le véhicule à chaque session.",
          "Une pose murale est compacte lorsque le support est bien placé. Un pied peut être plus naturel dans une allée ouverte ou entre plusieurs places. Dans les deux cas, le câble doit être rangé à l’écart des roues et des zones de circulation.",
        ],
        listTitle: "Test simple sur l’emplacement",
        ordered: true,
        bullets: [
          "Garer la voiture dans son sens habituel",
          "Repérer le port de charge ouvert",
          "Tracer un trajet de câble sans obstacle",
          "Vérifier le rangement et l’accès à la borne",
        ],
      },
      {
        id: "fonctions-connectees-tesla",
        title: "Application du véhicule et application de la borne",
        paragraphs: [
          "La voiture possède ses propres réglages, tandis qu’une borne connectée peut ajouter un historique, des règles d’accès, une programmation ou une limitation au niveau du point de charge. Les deux interfaces ne remplissent pas toujours le même rôle.",
          "Pour un foyer avec un seul véhicule, une configuration simple peut suffire. Avec plusieurs utilisateurs ou une place accessible, le RFID et la gestion des comptes deviennent plus intéressants. Il faut définir quelle application sera la référence pour éviter des programmations contradictoires.",
        ],
        note: {
          title: "Une seule règle de programmation",
          text: "Programmer simultanément la voiture et la borne peut compliquer le diagnostic d’une session qui ne démarre pas. Choisissez une logique principale et documentez-la.",
        },
      },
      {
        id: "installation-tesla-maroc",
        title: "Préparer l’installation au Maroc",
        paragraphs: [
          "Le professionnel vérifie l’alimentation, le tableau, la terre, le cheminement et les protections correspondant à la borne. Les conditions de chaleur, d’exposition et de circulation autour de la place sont intégrées au choix de l’emplacement.",
          "Une demande bien préparée rassemble le modèle exact du véhicule, des photos du tableau et de la place, la distance approximative et les fonctions souhaitées. Le simulateur permet ensuite de comparer différents niveaux de puissance avant la validation technique.",
        ],
        listTitle: "Dossier à transmettre",
        bullets: [
          "Modèle et année du véhicule",
          "Photos du tableau électrique",
          "Vue large de la place de stationnement",
          "Distance et obstacles jusqu’à l’emplacement envisagé",
          "Besoin de programmation, RFID ou suivi des sessions",
        ],
      },
    ],
    faq: [
      {
        question: "Une Tesla peut-elle utiliser une borne Autel Type 2 ?",
        answer:
          "Si le véhicule est compatible Type 2 en recharge AC, la connexion est cohérente. EVAtlas vérifie le modèle exact et la puissance acceptée avant l’installation.",
      },
      {
        question: "Faut-il obligatoirement une borne de 22 kW ?",
        answer:
          "Non. La puissance utile dépend de la limite AC du véhicule, du temps de stationnement et de l’installation. Une borne configurée à 7,4 ou 11 kW peut répondre au besoin.",
      },
      {
        question: "Peut-on charger deux voitures avec la même borne ?",
        answer:
          "Elles peuvent utiliser le point à tour de rôle si elles sont compatibles. Pour des recharges simultanées, il faut étudier plusieurs points et la gestion de la puissance.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-7-11-22-kw",
      "connecteur-type-2-ccs2-recharge-maroc",
      "autel-maxicharger-22kw-maroc",
    ],
    productCta: {
      eyebrow: "Compatibilité Type 2",
      title: "Découvrez la MaxiCharger pour votre véhicule.",
      text: "Jusqu’à 22 kW, câble de 5 m ou 7,5 m, application connectée et configuration adaptée à la puissance réellement acceptée.",
      label: "Voir la borne compatible Type 2",
    },
  },
  {
    slug: "voyage-voiture-electrique-maroc",
    title: "Voyager en voiture électrique au Maroc : bien préparer le trajet",
    seoTitle: "Voyager en voiture électrique au Maroc : guide",
    description:
      "Autonomie, recharge, étapes et départ à domicile : préparez un long trajet en voiture électrique au Maroc avec une marge réaliste.",
    excerpt:
      "Un parcours serein commence avant la route : niveau de départ, consommation réelle, solutions de recharge vérifiées et plan de secours.",
    category: "Mobilité",
    readingTime: 9,
    datePublished: newPublicationDate,
    dateModified: newPublicationDate,
    image: "/images/blog/voyage-voiture-electrique-maroc.jpg",
    imageAlt:
      "Véhicule électrique chargé devant une maison avant un trajet vers les montagnes de l’Atlas",
    keywords: [
      "voyage voiture électrique Maroc",
      "recharge trajet Maroc",
      "autonomie voiture électrique autoroute",
      "préparer trajet véhicule électrique",
      "borne recharge domicile départ voyage",
    ],
    intro: [
      "Un long trajet en voiture électrique se prépare avec davantage d’informations qu’un plein traditionnel, mais il ne doit pas devenir une suite de calculs anxieux. Une bonne préparation combine un départ chargé, une estimation réaliste de la consommation et des solutions de recharge vérifiées près de l’itinéraire.",
      "Les disponibilités du réseau public, les conditions routières et les services peuvent évoluer. Ce guide ne fournit donc pas une carte figée : il propose une méthode à actualiser avant chaque départ et un plan de secours pour conserver une marge.",
    ],
    quickAnswer:
      "Partez avec un niveau adapté depuis une recharge à domicile, estimez la consommation selon la vitesse, le relief et la météo, puis vérifiez juste avant le départ chaque étape de recharge dans une source à jour. Prévoyez une alternative et arrivez avec une réserve plutôt qu’avec une estimation au pourcent près.",
    sections: [
      {
        id: "depart-domicile",
        title: "La première étape se joue à domicile",
        paragraphs: [
          "Une borne à domicile permet de préparer le niveau de départ sans détour. La session peut être programmée pour se terminer avant l’heure prévue, en respectant les recommandations de charge du constructeur et la puissance configurée sur le site.",
          "Avant un trajet inhabituel, vérifiez que la session a effectivement démarré et que le câble est correctement connecté. Une notification ou l’historique de la borne peut confirmer l’énergie délivrée sans attendre le matin.",
        ],
        listTitle: "La veille du départ",
        bullets: [
          "Définir l’heure de départ et le niveau visé",
          "Vérifier la programmation et la connexion",
          "Contrôler la pression des pneus selon les recommandations du véhicule",
          "Préparer les applications ou moyens d’accès nécessaires sur le trajet",
        ],
      },
      {
        id: "autonomie-reelle",
        title: "Calculer avec une consommation réaliste",
        paragraphs: [
          "L’autonomie affichée évolue avec la vitesse, le relief, la température, le vent, la climatisation et la charge transportée. Une route de montagne vers l’Atlas ne produit pas le même profil qu’une circulation urbaine régulière.",
          "Utilisez la consommation récente du véhicule et conservez une marge. Le but n’est pas d’exploiter chaque kilowattheure, mais d’atteindre une étape avec suffisamment de liberté pour changer de borne ou poursuivre vers une alternative.",
        ],
        table: {
          caption: "Facteurs qui modifient la consommation",
          headers: ["Facteur", "Effet possible", "Réponse pratique"],
          rows: [
            ["Vitesse soutenue", "Consommation plus élevée", "Réduire l’allure si la marge baisse"],
            ["Relief", "Effort accru en montée", "Prévoir une réserve avant le col"],
            ["Température et climatisation", "Énergie auxiliaire", "Intégrer l’usage au calcul"],
            ["Charge et vent", "Résistance supplémentaire", "Éviter une estimation trop optimiste"],
          ],
        },
      },
      {
        id: "etapes-recharge",
        title: "Choisir des étapes vérifiées, pas seulement proches",
        paragraphs: [
          "Une borne bien située n’est utile que si sa puissance, son accès et son état correspondent au besoin. Vérifiez la localisation exacte, les horaires du site, le moyen d’activation et les informations les plus récentes disponibles.",
          "Prévoyez une seconde option raisonnable autour de chaque zone critique. Les réseaux et applications évoluent : une liste imprimée plusieurs mois auparavant ne remplace pas une vérification effectuée à proximité du départ.",
        ],
        listTitle: "Informations à confirmer",
        bullets: [
          "Type de connecteur et puissance proposée",
          "Compatibilité avec le véhicule",
          "Accès, horaires et moyen de paiement ou d’activation",
          "Retours récents ou état indiqué par l’opérateur",
          "Alternative accessible avec la réserve prévue",
        ],
        note: {
          title: "Information évolutive",
          text: "EVAtlas recommande de vérifier les bornes publiques auprès de sources et opérateurs à jour avant le trajet. La disponibilité ne peut pas être garantie par un guide statique.",
        },
      },
      {
        id: "temps-pause",
        title: "Transformer la recharge en pause utile",
        paragraphs: [
          "Le meilleur arrêt n’est pas toujours celui qui affiche la puissance la plus élevée. Une recharge située près d’un lieu sûr, de sanitaires ou d’une restauration peut mieux s’intégrer au voyage, surtout si la voiture n’a pas besoin d’une longue session.",
          "Définissez l’énergie nécessaire pour rejoindre l’étape suivante avec une marge, plutôt qu’un objectif automatique de 100 %. Selon le véhicule, la puissance de recharge peut diminuer lorsque la batterie approche d’un niveau élevé.",
        ],
        listTitle: "Une pause bien préparée",
        ordered: true,
        bullets: [
          "Brancher et confirmer le démarrage de la session",
          "Estimer le niveau nécessaire pour l’étape suivante",
          "Profiter de la pause sans quitter le suivi trop longtemps",
          "Libérer la place lorsque l’objectif est atteint",
        ],
      },
      {
        id: "plan-secours",
        title: "Construire un plan de secours simple",
        paragraphs: [
          "Un plan de secours ne consiste pas à multiplier les détours. Il identifie les points où la marge devient faible, une alternative par zone et la conduite à adopter si la consommation réelle dépasse l’estimation.",
          "Réduire modérément la vitesse, limiter une charge inutile et rejoindre une borne alternative suffisamment tôt sont des décisions plus efficaces que d’attendre une alerte critique. À l’arrivée, une recharge fiable à domicile ou sur le lieu de séjour simplifie également le trajet retour.",
        ],
        listTitle: "Les quatre sécurités du parcours",
        bullets: [
          "Réserve minimale décidée avant le départ",
          "Alternative vérifiée autour des étapes principales",
          "Câbles ou accessoires recommandés par le constructeur",
          "Coordonnées d’assistance du véhicule et des opérateurs utilisés",
        ],
      },
    ],
    faq: [
      {
        question: "À quel niveau faut-il arriver à une borne publique ?",
        answer:
          "Il n’existe pas un pourcentage universel. Conservez une réserve adaptée à l’itinéraire, au relief, aux alternatives et aux recommandations du véhicule.",
      },
      {
        question: "Faut-il charger jusqu’à 100 % à chaque étape ?",
        answer:
          "Pas nécessairement. Chargez l’énergie utile pour atteindre la prochaine étape avec une marge. Les recommandations propres à la batterie et au véhicule restent prioritaires.",
      },
      {
        question: "Comment vérifier les bornes disponibles au Maroc ?",
        answer:
          "Consultez avant le départ les informations récentes des opérateurs et applications utilisés, puis confirmez le connecteur, l’accès et une alternative. Un article statique ne peut pas garantir leur disponibilité.",
      },
    ],
    relatedSlugs: [
      "temps-recharge-voiture-electrique",
      "borne-recharge-maroc-guide",
      "borne-recharge-tesla-type-2-maroc",
    ],
    productCta: {
      eyebrow: "Partir avec confiance",
      title: "Préparez votre niveau de départ depuis chez vous.",
      text: "Programmez la recharge, suivez la session et retrouvez un véhicule prêt au moment de prendre la route.",
      label: "Découvrir la recharge à domicile",
    },
  },
  {
    slug: "borne-recharge-hotel-riad-maroc",
    title: "Borne de recharge pour hôtel et riad au Maroc : le guide",
    seoTitle: "Borne de recharge pour hôtel et riad au Maroc",
    description:
      "Comment équiper un hôtel, un riad ou une maison d’hôtes au Maroc : puissance, accès, emplacement, pilotage et parcours client.",
    excerpt:
      "Une méthode concrète pour transformer la recharge à destination en service simple, fiable et cohérent avec l’expérience de votre établissement.",
    category: "Hôtellerie",
    readingTime: 11,
    datePublished: latestPublicationDate,
    dateModified: latestPublicationDate,
    image: "/images/blog/borne-recharge-hotel-riad-maroc.jpg",
    imageAlt:
      "Voiture électrique branchée à une borne dans la cour d’un hôtel contemporain d’inspiration marocaine",
    keywords: [
      "borne recharge hôtel Maroc",
      "borne recharge riad",
      "recharge voiture électrique hôtel",
      "borne électrique maison d’hôtes",
      "recharge à destination Maroc",
    ],
    intro: [
      "Pour un hôtel, un riad ou une maison d’hôtes, la recharge ne se résume pas à ajouter un équipement dans le parking. Elle devient une partie du séjour : le client doit comprendre où se garer, comment démarrer la session et à quel moment son véhicule sera prêt, sans multiplier les demandes à la réception.",
      "Une installation réussie associe le rythme naturel de l’établissement à une puissance réaliste, un accès maîtrisé et un emplacement confortable. Ce guide aide les exploitants marocains à cadrer le projet avant le devis, depuis l’analyse des nuitées jusqu’à la mise en service.",
    ],
    quickAnswer:
      "Pour un hôtel ou un riad, une borne AC bien dimensionnée est généralement pensée pour la durée de stationnement des clients plutôt que pour une recharge la plus rapide possible. Il faut vérifier la puissance du site, organiser l’accès, choisir un emplacement visible et prévoir une procédure simple pour la réception et la maintenance.",
    sections: [
      {
        id: "usage-hotelier",
        title: "Commencer par le parcours réel du client",
        paragraphs: [
          "Un voyageur qui arrive en fin de journée laisse souvent son véhicule plusieurs heures. Cette durée disponible favorise la recharge à destination : l’objectif est de restituer une autonomie utile avant le départ, avec une expérience aussi naturelle que le stationnement lui-même.",
          "Avant de choisir la borne, observez les arrivées, les départs, la durée moyenne de stationnement et la manière dont les places sont attribuées. Un riad avec quelques places privées n’a pas le même fonctionnement qu’un hôtel disposant d’un grand parking et d’équipes présentes en continu.",
        ],
        listTitle: "Les questions à poser à l’exploitation",
        bullets: [
          "Combien de véhicules électriques peuvent être accueillis simultanément ?",
          "Les clients restent-ils une nuit, plusieurs nuits ou seulement quelques heures ?",
          "La place peut-elle être réservée avant l’arrivée ?",
          "Qui explique l’accès et intervient si une session ne démarre pas ?",
          "Le service est-il réservé aux résidents ou ouvert aux visiteurs ?",
        ],
      },
      {
        id: "puissance-destination",
        title: "Dimensionner la puissance selon le temps de stationnement",
        paragraphs: [
          "La puissance nominale la plus élevée n’est pas automatiquement la plus pertinente. La voiture limite elle-même la puissance AC qu’elle accepte, tandis que la durée de la nuit laisse souvent suffisamment de temps pour récupérer l’énergie nécessaire.",
          "Le dimensionnement doit également préserver les usages prioritaires de l’établissement : cuisine, climatisation, buanderie, production d’eau chaude ou équipements événementiels. Un pilotage de puissance peut adapter la recharge lorsque la consommation du bâtiment augmente.",
        ],
        table: {
          caption: "Repères pour cadrer une recharge à destination",
          headers: ["Situation", "Priorité de conception", "Point à vérifier"],
          rows: [
            ["Une ou deux places", "Simplicité d’accès et emplacement", "Puissance réellement disponible"],
            ["Plusieurs bornes", "Répartition dynamique de la puissance", "Capacité globale et simultanéité"],
            ["Forte rotation", "Énergie récupérée entre deux départs", "Puissance AC des véhicules accueillis"],
          ],
        },
        note: {
          title: "Éviter le surdimensionnement",
          text: "Une borne 22 kW ne délivre 22 kW que si le véhicule et l’installation le permettent. Une étude du site reste nécessaire avant de retenir la puissance.",
        },
      },
      {
        id: "emplacement-signalisation",
        title: "Créer une place facile à trouver et à utiliser",
        paragraphs: [
          "La place doit être identifiable dès l’arrivée sans dégrader l’esthétique du site. Une signalétique sobre, une information dans la confirmation de réservation et une consigne donnée à la réception évitent qu’un véhicule thermique occupe l’emplacement ou que le client cherche la borne dans le parking.",
          "Le câble ne doit pas traverser un chemin piéton, rester tendu ni gêner les manœuvres. La position des ports de charge varie selon les véhicules : un espace suffisant autour de la place rend l’installation compatible avec davantage de configurations.",
        ],
        listTitle: "Une implantation professionnelle",
        bullets: [
          "Borne visible depuis la place sans nuire à l’architecture",
          "Éclairage suffisant pour une arrivée nocturne",
          "Cheminement du câble protégé et sans risque de chute",
          "Accès possible avec des véhicules aux ports de charge différents",
          "Consigne claire en français et, si utile, dans les langues des visiteurs",
        ],
      },
      {
        id: "acces-pilotage",
        title: "Choisir un accès que l’équipe peut réellement gérer",
        paragraphs: [
          "Application, carte RFID ou activation contrôlée : la meilleure méthode est celle que l’établissement peut expliquer en quelques secondes. Une procédure trop technique augmente la charge de la réception et fragilise l’expérience du client.",
          "Le suivi connecté peut aider à confirmer qu’une session a démarré, consulter l’énergie délivrée et limiter les accès. Les responsabilités doivent rester lisibles : qui possède les identifiants, qui reçoit une alerte et quelle procédure appliquer en dehors des horaires habituels.",
        ],
        listTitle: "Le protocole à remettre aux équipes",
        ordered: true,
        bullets: [
          "Identifier le client et la place attribuée",
          "Présenter la méthode d’activation en une phrase",
          "Vérifier que la charge a effectivement commencé",
          "Communiquer la règle de libération de la place",
          "Savoir qui contacter en cas d’anomalie",
        ],
      },
      {
        id: "service-tarification",
        title: "Définir le service avant de communiquer",
        paragraphs: [
          "L’établissement doit décider si la recharge est incluse dans le séjour, proposée selon une règle interne ou organisée autrement. Cette décision influence l’accès, le suivi et l’information donnée au client. Toute facturation éventuelle doit être cadrée avec les obligations applicables et les outils réellement disponibles.",
          "La communication doit rester précise : nombre de places, réservation nécessaire, disponibilité non garantie tant que la place n’est pas confirmée et puissance indicative. Une promesse mesurée protège mieux l’expérience qu’un message commercial imprécis.",
        ],
        table: {
          caption: "Informations utiles avant l’arrivée",
          headers: ["Information", "Pourquoi la préciser"],
          rows: [
            ["Nombre de places équipées", "Évite de confondre présence et disponibilité"],
            ["Réservation ou attribution", "Organise les arrivées"],
            ["Type de connecteur", "Permet au client de vérifier sa compatibilité"],
            ["Conditions d’accès", "Évite une surprise à la réception"],
          ],
        },
      },
      {
        id: "deploiement-hotel",
        title: "Passer d’une première borne à un équipement évolutif",
        paragraphs: [
          "Un premier point de charge peut servir à mesurer la demande réelle, mais l’alimentation et l’implantation doivent anticiper une extension raisonnable. Prévoir le cheminement futur ou la répartition de puissance coûte souvent moins cher que reprendre entièrement le parking plus tard.",
          "Le dossier de départ doit réunir le plan des places, les distances, les photos du tableau, les consommations importantes et le parcours client souhaité. EVAtlas peut ensuite proposer une configuration Autel MaxiCharger adaptée au site et préciser ce qui doit être validé lors de l’étude technique.",
        ],
        listTitle: "Préparer une demande de devis exploitable",
        bullets: [
          "Adresse et type d’établissement",
          "Nombre de places actuelles et futures",
          "Photos du parking et du tableau électrique",
          "Distance approximative jusqu’aux places",
          "Horaires, durée de stationnement et méthode d’accès souhaitée",
        ],
      },
    ],
    faq: [
      {
        question: "Quelle puissance choisir pour une borne d’hôtel au Maroc ?",
        answer:
          "Elle dépend du temps de stationnement, des véhicules accueillis et de la capacité électrique du site. Une étude permet de comparer 7,4, 11 et 22 kW sans perturber les autres usages de l’établissement.",
      },
      {
        question: "Peut-on réserver une borne pour un client avant son arrivée ?",
        answer:
          "L’établissement peut organiser l’attribution d’une place dans son propre parcours de réservation. Il doit toutefois distinguer la réservation de la place de la garantie d’une quantité d’énergie ou d’un temps de charge précis.",
      },
      {
        question: "Faut-il une application pour utiliser la borne ?",
        answer:
          "Pas nécessairement. Selon la configuration, l’accès peut être organisé par application, RFID ou procédure contrôlée. Le choix doit rester simple pour le client et l’équipe.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-entreprise-copropriete-maroc",
      "borne-recharge-exterieure-maroc",
      "autel-maxicharger-22kw-maroc",
    ],
    productCta: {
      eyebrow: "Recharge à destination",
      title: "Transformez une place de parking en service client maîtrisé.",
      text: "Découvrez une borne connectée, pilotable et configurable pour les usages de votre établissement.",
      label: "Voir l’Autel MaxiCharger",
    },
  },
  {
    slug: "recharge-hybride-rechargeable-maroc",
    title: "Recharger une voiture hybride rechargeable au Maroc",
    seoTitle: "Recharge hybride rechargeable au Maroc : guide",
    description:
      "Prise ou borne, puissance AC, temps de charge et bonnes habitudes : tout comprendre pour recharger une hybride rechargeable au Maroc.",
    excerpt:
      "Les repères pratiques pour exploiter la batterie d’une hybride rechargeable sans surdimensionner la borne ni compliquer le quotidien.",
    category: "Hybride rechargeable",
    readingTime: 10,
    datePublished: latestPublicationDate,
    dateModified: latestPublicationDate,
    image: "/images/blog/recharge-hybride-rechargeable-maroc.jpg",
    imageAlt:
      "Berline hybride rechargeable branchée à une borne murale dans une villa contemporaine à Casablanca",
    keywords: [
      "recharge hybride rechargeable Maroc",
      "borne voiture hybride rechargeable",
      "wallbox PHEV Maroc",
      "temps recharge hybride rechargeable",
      "prise Type 2 hybride",
    ],
    intro: [
      "Une hybride rechargeable associe un moteur thermique à une batterie qui peut être rechargée sur une source externe. Pour profiter régulièrement de son mode électrique, la recharge doit s’intégrer au stationnement quotidien plutôt que dépendre d’occasions ponctuelles.",
      "Sa batterie est généralement plus petite que celle d’une voiture entièrement électrique, mais cela ne signifie pas que toutes les solutions se valent. La puissance AC acceptée, le câble, la durée disponible et l’installation du logement déterminent la configuration utile.",
    ],
    quickAnswer:
      "Une hybride rechargeable peut être rechargée sur une solution compatible avec son connecteur et les prescriptions du constructeur. Une wallbox apporte un point dédié, une utilisation régulière et des fonctions de programmation ; sa puissance doit être choisie selon la limite AC du véhicule et la capacité électrique du site.",
    sections: [
      {
        id: "fonctionnement-phev",
        title: "Comprendre ce que la voiture peut réellement accepter",
        paragraphs: [
          "La borne fournit du courant alternatif, puis le chargeur embarqué du véhicule le convertit pour la batterie. La puissance utilisée est donc limitée par le véhicule, même lorsque la borne peut délivrer davantage.",
          "Deux hybrides rechargeables de capacité proche peuvent accepter des puissances AC différentes. La fiche technique du modèle et son manuel restent les sources prioritaires pour identifier le connecteur, la puissance et les recommandations de charge.",
        ],
        listTitle: "Les informations à relever",
        bullets: [
          "Modèle, année et version exacte du véhicule",
          "Capacité utile ou nominale indiquée par le constructeur",
          "Puissance maximale de recharge en courant alternatif",
          "Type de connecteur et câble fourni",
          "Recommandations du constructeur pour la batterie",
        ],
      },
      {
        id: "prise-ou-wallbox",
        title: "Prise ou wallbox : comparer l’usage, pas seulement la vitesse",
        paragraphs: [
          "Une solution occasionnelle et une borne dédiée ne répondent pas au même usage. La wallbox est conçue pour la recharge répétée, avec une puissance paramétrée pour le circuit, un accès plus pratique et, selon le modèle, une programmation et un suivi dans l’application.",
          "La décision doit partir de la fréquence de branchement. Si le véhicule est rechargé presque chaque jour, un emplacement fixe et un câble bien rangé peuvent compter davantage que le gain de temps théorique.",
        ],
        table: {
          caption: "Comparer les deux approches",
          headers: ["Critère", "Recharge occasionnelle", "Wallbox dédiée"],
          rows: [
            ["Fréquence", "Usage ponctuel selon les prescriptions", "Usage régulier et organisé"],
            ["Puissance", "Limitée par la solution utilisée", "Réglée selon le véhicule et le site"],
            ["Pilotage", "Dépend du véhicule", "Programmation et suivi possibles selon la borne"],
            ["Installation", "Circuit à faire vérifier", "Étude, protections et circuit adaptés"],
          ],
        },
      },
      {
        id: "calcul-temps",
        title: "Estimer le temps de charge sans promettre un chiffre universel",
        paragraphs: [
          "Un premier calcul consiste à diviser l’énergie à récupérer par la puissance réellement utilisée. Par exemple, récupérer 10 kWh à une puissance stable de 3,7 kW demande théoriquement environ 2 h 40, avant de tenir compte des pertes et des variations de charge.",
          "Le bon calcul utilise l’énergie manquante, pas forcément toute la capacité de la batterie. Le temps réel dépend ensuite du véhicule, de la température, du rendement et de la puissance effectivement disponible.",
        ],
        note: {
          title: "Utilisez le modèle exact",
          text: "Le simulateur EVAtlas reprend les caractéristiques de recharge du véhicule sélectionné. La documentation du constructeur reste prioritaire en cas d’écart.",
        },
      },
      {
        id: "choisir-puissance-phev",
        title: "Choisir une puissance cohérente pour aujourd’hui et demain",
        paragraphs: [
          "Installer une borne plus puissante que la limite actuelle du véhicule n’accélère pas sa recharge. Cette marge peut toutefois être pertinente si l’installation le permet et qu’un véhicule 100 % électrique est envisagé à moyen terme.",
          "Le choix final équilibre le besoin actuel, la capacité du tableau et une évolution réaliste. Il ne faut pas augmenter la puissance uniquement pour anticiper un scénario incertain, surtout si cela complexifie le raccordement.",
        ],
        table: {
          caption: "Logique de dimensionnement",
          headers: ["Question", "Décision associée"],
          rows: [
            ["Quelle puissance AC accepte le PHEV ?", "Fixe la vitesse maximale actuelle"],
            ["Combien d’heures stationne-t-il ?", "Détermine la puissance réellement nécessaire"],
            ["Un véhicule électrique est-il prévu ?", "Peut justifier une marge raisonnable"],
            ["Quelle puissance reste disponible ?", "Cadre la configuration du site"],
          ],
        },
      },
      {
        id: "routine-recharge",
        title: "Construire une routine qui favorise les trajets électriques",
        paragraphs: [
          "Une hybride rechargeable est plus simple à exploiter lorsque le branchement devient un geste naturel à l’arrivée. La programmation peut aligner la session sur les horaires souhaités, tandis que l’application permet de vérifier son état sans retourner au véhicule.",
          "Les objectifs de niveau de batterie et les périodes de stockage doivent suivre les recommandations du constructeur. La borne facilite la routine, mais elle ne remplace pas les réglages et limites prévus par le véhicule.",
        ],
        listTitle: "Une routine en quatre gestes",
        ordered: true,
        bullets: [
          "Stationner sans tendre le câble",
          "Brancher et vérifier le démarrage",
          "Programmer la session si cela correspond à l’usage",
          "Ranger le câble avant le départ",
        ],
      },
      {
        id: "preparer-installation-phev",
        title: "Préparer une installation adaptée au véhicule et au logement",
        paragraphs: [
          "Le professionnel vérifie le tableau, l’alimentation, la terre, le cheminement et l’emplacement avant de retenir la puissance et les protections. La pose murale convient lorsque le stationnement longe un support adapté ; une pose sur pied peut être étudiée si la place est éloignée.",
          "Pour obtenir une recommandation précise, transmettez le modèle exact, des photos du tableau et de la place, la distance approximative et vos habitudes. Le devis EVAtlas peut ainsi distinguer le besoin immédiat de l’évolution éventuelle vers un véhicule entièrement électrique.",
        ],
        listTitle: "Votre dossier de départ",
        bullets: [
          "Carte grise ou désignation exacte du véhicule",
          "Photos du tableau électrique",
          "Vue large de la place de stationnement",
          "Distance et obstacles jusqu’à l’emplacement",
          "Fréquence de recharge et prochain véhicule envisagé",
        ],
      },
    ],
    faq: [
      {
        question: "Une borne de 22 kW recharge-t-elle plus vite une hybride rechargeable ?",
        answer:
          "Uniquement si le véhicule accepte cette puissance en AC et si l’installation peut la fournir. Beaucoup de modèles utilisent une puissance inférieure : il faut vérifier la fiche technique exacte.",
      },
      {
        question: "Faut-il recharger une hybride rechargeable tous les jours ?",
        answer:
          "Cela dépend des trajets et des recommandations du constructeur. Une recharge régulière permet généralement d’exploiter davantage le mode électrique lorsque la voiture est utilisée quotidiennement.",
      },
      {
        question: "La prise Type 2 suffit-elle à garantir la compatibilité ?",
        answer:
          "Non. Le connecteur est un premier critère, mais il faut aussi vérifier la puissance AC acceptée, le câble, les paramètres du véhicule et la configuration électrique du site.",
      },
    ],
    relatedSlugs: [
      "temps-recharge-voiture-electrique",
      "borne-recharge-7-11-22-kw",
      "borne-recharge-maroc-guide",
    ],
    productCta: {
      eyebrow: "Recharge quotidienne",
      title: "Une borne dimensionnée pour votre hybride et votre prochain véhicule.",
      text: "La MaxiCharger ajuste la puissance, programme les sessions et accompagne une installation pensée pour évoluer.",
      label: "Explorer l’Autel MaxiCharger",
    },
  },
  {
    slug: "borne-recharge-exterieure-maroc",
    title: "Installer une borne de recharge extérieure au Maroc",
    seoTitle: "Borne de recharge extérieure au Maroc : guide",
    description:
      "Chaleur, soleil, pluie et poussière : les critères pour choisir l’emplacement et installer durablement une borne extérieure au Maroc.",
    excerpt:
      "Indices de protection, ombrage, câbles et entretien : les décisions qui rendent une installation extérieure sûre, pratique et durable.",
    category: "Installation extérieure",
    readingTime: 11,
    datePublished: latestPublicationDate,
    dateModified: latestPublicationDate,
    image: "/images/blog/borne-recharge-exterieure-maroc.jpg",
    imageAlt:
      "Borne de recharge extérieure avec gouttes de pluie reliée à une voiture électrique devant une villa marocaine",
    keywords: [
      "borne recharge extérieure Maroc",
      "wallbox extérieur pluie chaleur",
      "indice IP borne recharge",
      "installation borne parking extérieur",
      "protection borne voiture électrique",
    ],
    intro: [
      "Une borne extérieure peut fonctionner durablement au Maroc à condition que le matériel, son emplacement et sa pose soient cohérents avec l’exposition réelle. Le soleil direct, la poussière, les épisodes de pluie, les chocs et les écarts de température ne se traitent pas avec un seul accessoire.",
      "L’indice de protection du produit est important, mais il ne remplace ni les prescriptions du fabricant ni une installation professionnelle. Le support, l’étanchéité des entrées de câble, le drainage et le confort d’usage forment un ensemble.",
    ],
    quickAnswer:
      "Pour installer une borne à l’extérieur au Maroc, choisissez une version explicitement prévue pour cet usage, respectez sa plage de température et ses indices de protection, puis faites étudier le support, l’alimentation, les entrées de câble et l’écoulement de l’eau. Un ombrage architectural bien ventilé peut améliorer le confort sans enfermer la borne.",
    sections: [
      {
        id: "exposition-site",
        title: "Lire l’exposition réelle avant de choisir l’emplacement",
        paragraphs: [
          "Deux places situées dans le même parking peuvent subir des contraintes très différentes. Une façade orientée à l’ouest reçoit un fort soleil en fin de journée ; une zone basse peut accumuler l’eau ; un passage étroit augmente le risque de choc.",
          "L’étude doit observer plusieurs situations : véhicule présent ou absent, pluie avec vent, lavage du sol, circulation des personnes et rayon de manœuvre. L’emplacement le plus court à câbler n’est pas toujours le plus durable.",
        ],
        listTitle: "Les contraintes à relever",
        bullets: [
          "Durée et orientation de l’exposition solaire",
          "Ruissellement, projections et eau stagnante",
          "Poussière, sable et fréquence de nettoyage",
          "Risques de choc lors des manœuvres",
          "Distance jusqu’au tableau et cheminement de l’alimentation",
        ],
      },
      {
        id: "indices-ip-ik",
        title: "Comprendre les indices IP et IK sans les surinterpréter",
        paragraphs: [
          "L’indice IP décrit un niveau de protection de l’enveloppe contre la pénétration de corps solides et d’eau dans des conditions définies. L’indice IK, lorsqu’il est communiqué, concerne la résistance mécanique aux impacts. Ces indices permettent de comparer des versions, mais ne rendent pas une installation invulnérable.",
          "La MaxiCharger AC Wallbox existe selon les marchés et configurations avec des caractéristiques qui peuvent varier, notamment entre version avec câble et version avec prise. La fiche technique correspondant exactement à la référence installée doit être vérifiée.",
        ],
        table: {
          caption: "Ce que les indices disent — et ne disent pas",
          headers: ["Repère", "Ce qu’il aide à évaluer", "Ce qu’il ne remplace pas"],
          rows: [
            ["Indice IP", "Protection de l’enveloppe contre solides et eau", "Qualité des raccordements et respect de la pose"],
            ["Indice IK", "Résistance de l’enveloppe à certains impacts", "Protection contre une collision de véhicule"],
            ["Plage thermique", "Températures prévues par le fabricant", "Étude de l’exposition et ventilation"],
          ],
        },
        note: {
          title: "Vérifier la référence exacte",
          text: "Les caractéristiques d’une gamme ne doivent pas être appliquées automatiquement à toutes ses variantes. Utilisez la fiche technique et la notice du produit livré.",
        },
      },
      {
        id: "soleil-chaleur",
        title: "Gérer le soleil et la chaleur sans bloquer la ventilation",
        paragraphs: [
          "Un emplacement ombragé ou un auvent peut limiter l’échauffement de surface et améliorer le confort lorsque l’utilisateur manipule le câble. La protection ne doit toutefois pas enfermer la borne ni empêcher la dissipation prévue par le fabricant.",
          "Il faut conserver les dégagements exigés, éviter les coffrages improvisés et respecter la plage de fonctionnement. Une teinte de mur très exposée, un volume fermé ou une proximité avec une source de chaleur peuvent modifier les conditions autour de l’équipement.",
        ],
        listTitle: "Bonnes décisions d’implantation",
        bullets: [
          "Privilégier une ombre architecturale lorsque le site le permet",
          "Respecter les dégagements et l’orientation de la notice",
          "Éviter un boîtier secondaire non prévu par le fabricant",
          "Maintenir les voyants et commandes facilement visibles",
          "Conserver un accès simple pour l’inspection et la maintenance",
        ],
      },
      {
        id: "pluie-drainage",
        title: "Traiter la pluie au niveau de toute l’installation",
        paragraphs: [
          "La protection de l’enveloppe ne suffit pas si l’entrée de câble, le support ou le cheminement créent une faiblesse. Les presse-étoupes, conduits, fixations et pénétrations dans le mur doivent être réalisés selon les prescriptions du produit et les conditions du site.",
          "Le câble de recharge doit être rangé hors des zones d’eau stagnante et ne pas traverser une évacuation. Une pente de sol, un nettoyage fréquent ou un arrosage automatique peuvent exposer l’installation même lorsqu’elle se trouve sous un auvent.",
        ],
        listTitle: "Points à contrôler lors de la pose",
        ordered: true,
        bullets: [
          "Stabilité et état du support",
          "Étanchéité des entrées et cheminements",
          "Absence d’accumulation d’eau autour de la borne",
          "Rangement du câble et protection du connecteur",
          "Essais et inspection après la mise en service",
        ],
      },
      {
        id: "poussiere-entretien",
        title: "Prévoir un entretien simple face à la poussière",
        paragraphs: [
          "La poussière extérieure ne justifie pas un nettoyage agressif. Une inspection visuelle régulière permet de repérer un câble marqué, un connecteur sale, une fixation desserrée ou une obstruction autour de l’appareil.",
          "Le nettoyage doit suivre la notice, avec la borne hors utilisation et sans produit abrasif ni jet non autorisé. Toute anomalie électrique, surchauffe, fissure ou défaut répété doit être confié à un professionnel plutôt que masqué par une remise en route systématique.",
        ],
        table: {
          caption: "Routine d’inspection indicative",
          headers: ["Élément", "Observation utile", "Réaction"],
          rows: [
            ["Câble et connecteur", "Coupure, écrasement, saleté", "Cesser l’usage si endommagé"],
            ["Boîtier et fixation", "Fissure, jeu ou choc", "Faire contrôler"],
            ["Zone au sol", "Eau, obstacle ou passage gêné", "Libérer et corriger la cause"],
            ["Application et voyants", "Défaut récurrent", "Consulter la notice et le support"],
          ],
        },
      },
      {
        id: "devis-exterieur",
        title: "Documenter le site pour obtenir un devis précis",
        paragraphs: [
          "Des photos prises à différents angles permettent de comprendre le mur, le sol, le stationnement et l’exposition. Ajoutez la distance jusqu’au tableau, les zones de passage et, si possible, une indication de l’orientation et des moments où la place reçoit le soleil.",
          "EVAtlas peut alors étudier une pose murale ou sur pied, le cheminement, la puissance et les protections autour d’une Autel MaxiCharger. La configuration finale reste confirmée à partir de la référence produit et des conditions observées sur place.",
        ],
        listTitle: "Les éléments à transmettre",
        bullets: [
          "Vue générale de la place et du bâtiment",
          "Photo rapprochée du support envisagé",
          "Photos du tableau et de son environnement",
          "Distance approximative et obstacles",
          "Informations sur le véhicule et la puissance souhaitée",
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on laisser une borne de recharge sous la pluie ?",
        answer:
          "Uniquement si la version exacte est prévue pour l’extérieur et installée conformément à sa notice. L’indice IP, les raccordements, le support et le drainage doivent tous être adaptés.",
      },
      {
        question: "Faut-il obligatoirement installer un auvent au-dessus de la borne ?",
        answer:
          "Pas systématiquement. Cela dépend du produit et du site. Un ombrage peut améliorer le confort et limiter l’exposition directe, mais il ne doit pas gêner la ventilation ni contredire les prescriptions du fabricant.",
      },
      {
        question: "Comment protéger une borne extérieure contre les chocs ?",
        answer:
          "Choisissez une position hors de la trajectoire des véhicules et étudiez, si nécessaire, une protection physique adaptée au parking. L’indice IK ne remplace pas une implantation sûre.",
      },
    ],
    relatedSlugs: [
      "installer-borne-recharge-maison-maroc",
      "entretien-borne-recharge-maintenance",
      "autel-maxicharger-22kw-maroc",
    ],
    productCta: {
      eyebrow: "Installation extérieure",
      title: "Une borne conçue pour le site, pas seulement posée dehors.",
      text: "Découvrez les caractéristiques de la MaxiCharger et faites valider la version, l’emplacement et la puissance pour votre parking.",
      label: "Découvrir la MaxiCharger",
    },
  },
  {
    slug: "deux-voitures-electriques-maison-une-ou-deux-bornes",
    title: "Deux voitures électriques à la maison : une ou deux bornes ?",
    seoTitle: "Deux voitures électriques : une ou deux bornes ?",
    description:
      "Un ou deux points de charge, puissance partagée et stationnement : concevez une recharge simple pour deux voitures électriques à la maison.",
    excerpt:
      "Deux véhicules ne signifient pas automatiquement deux installations surdimensionnées. Voici comment arbitrer entre un point partagé et deux bornes pilotées.",
    category: "Foyer multi-véhicules",
    readingTime: 11,
    datePublished: augustPublicationDate,
    dateModified: augustPublicationDate,
    image: "/images/blog/deux-voitures-electriques-maison.jpg",
    imageAlt:
      "Deux voitures électriques branchées à deux bornes murales devant une villa contemporaine au Maroc",
    keywords: [
      "deux voitures électriques maison",
      "une borne pour deux voitures",
      "deux bornes recharge domicile",
      "partage puissance borne recharge",
      "recharge simultanée voitures électriques",
      "borne recharge Maroc maison",
    ],
    intro: [
      "Lorsqu’un foyer accueille deux véhicules électriques, la question n’est plus seulement de savoir à quelle vitesse une voiture peut charger. Il faut organiser deux besoins, parfois au même moment, sans dépasser la puissance disponible ni transformer le parking en parcours de câbles.",
      "Une seule borne peut suffire si les horaires et les distances quotidiennes sont compatibles. Deux points de charge deviennent plus confortables lorsque les départs sont proches, que les véhicules roulent beaucoup ou que les prises de charge sont éloignées. La bonne décision part donc des usages avant de partir du nombre de kilowatts.",
    ],
    quickAnswer:
      "Pour deux voitures électriques, commencez par comparer l’énergie quotidienne à récupérer et les heures de départ. Une borne partagée convient lorsque les véhicules peuvent alterner. Deux points pilotés sont plus confortables pour une recharge simultanée, à condition de répartir dynamiquement la puissance disponible et de faire valider l’installation.",
    sections: [
      {
        id: "profils-deux-vehicules",
        title: "Additionner les besoins réels, pas les puissances maximales",
        paragraphs: [
          "Le premier véhicule peut effectuer 35 kilomètres par jour et rester garé douze heures, tandis que le second parcourt davantage avec un départ matinal. Installer deux bornes de puissance maximale sans regarder ces rythmes peut augmenter le coût sans améliorer l’expérience.",
          "Pour chaque voiture, notez la distance d’une journée exigeante, la consommation moyenne, l’heure d’arrivée, l’heure de départ et la fréquence des longs trajets. Cette photographie des usages indique l’énergie à restituer pendant la fenêtre de stationnement.",
        ],
        listTitle: "La fiche à préparer pour chaque véhicule",
        bullets: [
          "Modèle exact et puissance maximale acceptée en courant alternatif",
          "Kilométrage quotidien habituel et journée la plus exigeante",
          "Heure d’arrivée et heure de départ",
          "Emplacement du port de charge une fois le véhicule garé",
          "Évolution prévue : remplacement du véhicule ou troisième place",
        ],
      },
      {
        id: "une-ou-deux-bornes",
        title: "Une borne partagée ou deux points de charge ?",
        paragraphs: [
          "Une borne unique demande d’alterner les véhicules. Cette solution reste pertinente lorsqu’une voiture roule peu, que les horaires sont décalés ou qu’un branchement tous les deux ou trois jours suffit. Son principal coût caché est l’organisation : déplacer le câble ou permuter les voitures doit rester simple dans la durée.",
          "Deux points de charge évitent cette manipulation et permettent de brancher chaque voiture dès son arrivée. Ils ne doivent pas être interprétés comme deux appels permanents à pleine puissance. Avec une gestion adaptée, la puissance disponible peut être répartie entre les deux sessions selon les limites du site et la configuration retenue.",
        ],
        table: {
          caption: "Choisir selon le fonctionnement du foyer",
          headers: ["Configuration", "Quand elle est cohérente", "Point à surveiller"],
          rows: [
            ["Une borne", "Horaires décalés ou faibles kilométrages", "Alternance et accessibilité du câble"],
            ["Deux points", "Départs proches ou recharge simultanée fréquente", "Puissance totale disponible"],
            ["Pré-équipement", "Second véhicule prévu plus tard", "Cheminements et réserve à anticiper"],
          ],
        },
        note: {
          title: "Le confort compte",
          text: "Une configuration théoriquement suffisante peut devenir contraignante si elle impose de déplacer une voiture chaque soir. Testez le geste réel sur le parking avant de décider.",
        },
      },
      {
        id: "recharge-simultanee",
        title: "Comprendre la recharge simultanée et le partage de puissance",
        paragraphs: [
          "Lorsque deux voitures chargent ensemble, la puissance totale ne doit pas être supposée illimitée. Le dimensionnement tient compte de l’alimentation du bâtiment, des autres équipements en service et des protections prévues. Une stratégie de partage peut attribuer davantage de puissance à un véhicule, répartir équitablement ou réduire la recharge lorsque la maison consomme davantage.",
          "Le comportement exact dépend des bornes, de leur architecture de communication et de la solution de gestion retenue. La compatibilité entre les équipements et la méthode de pilotage doit être confirmée avant l’achat ; elle ne se déduit pas uniquement de la présence d’une application mobile.",
        ],
        table: {
          caption: "Exemple de répartition à interpréter avec l’installateur",
          headers: ["Situation", "Logique possible", "Objectif"],
          rows: [
            ["Une seule voiture branchée", "Puissance autorisée pour ce point", "Profiter de la capacité disponible"],
            ["Deux voitures branchées", "Répartition ou priorité configurée", "Rester sous la limite du site"],
            ["Maison fortement sollicitée", "Réduction temporaire de la recharge", "Préserver les autres usages"],
          ],
        },
      },
      {
        id: "puissance-installation",
        title: "Faire valider l’installation électrique comme un système",
        paragraphs: [
          "Deux points de charge impliquent d’étudier le tableau, l’alimentation, les protections, le cheminement et la gestion de puissance comme un ensemble. Additionner simplement deux puissances nominales ne suffit ni pour garantir la disponibilité ni pour définir les composants électriques.",
          "L’étude professionnelle vérifie également ce qui se passe en cas de perte de communication, de défaut sur un point ou de modification ultérieure. Les prescriptions du fabricant et les caractéristiques de la référence livrée restent prioritaires.",
        ],
        listTitle: "Ce que l’étude doit préciser",
        ordered: true,
        bullets: [
          "Puissance disponible et usages simultanés du logement",
          "Limite AC de chacun des deux véhicules",
          "Architecture d’un ou deux circuits et protections associées",
          "Mode de pilotage ou de partage de puissance compatible",
          "Essais, priorités et comportement attendu après la mise en service",
        ],
      },
      {
        id: "implantation-parking",
        title: "Dessiner le parking avant de choisir les câbles",
        paragraphs: [
          "La position des ports de charge varie selon les modèles. Une borne centrale peut sembler idéale sur un plan, puis imposer un câble tendu derrière un véhicule. Photographiez les deux voitures garées dans leur sens habituel et mesurez le trajet réel entre le mur, le pied éventuel et chaque connecteur.",
          "Le câble ne doit pas traverser une zone de marche, frotter sur une carrosserie ou gêner l’ouverture d’une porte. Pour deux places, une implantation symétrique n’est pas toujours la plus pratique : la priorité est un branchement naturel et un rangement propre après usage.",
        ],
        listTitle: "Repères d’implantation",
        bullets: [
          "Côté du port de charge pour chaque voiture",
          "Longueur utile sans tension sur le connecteur",
          "Circulation des personnes et ouverture des portes",
          "Protection contre les manœuvres et les chocs",
          "Accès futur à une troisième place ou à un nouveau modèle",
        ],
      },
      {
        id: "preparer-devis-deux-voitures",
        title: "Obtenir une recommandation claire pour les deux véhicules",
        paragraphs: [
          "Un devis utile doit comparer les scénarios qui changent réellement l’usage : un point partagé, deux points pilotés ou une première installation pré-équipée pour évoluer. Pour chacun, demandez la puissance disponible, les limites, le cheminement et le résultat attendu pendant une recharge simultanée.",
          "EVAtlas peut reprendre les caractéristiques des deux voitures et les contraintes du parking pour proposer une configuration autour de la MaxiCharger. Le choix final est confirmé après analyse du site et de la compatibilité des fonctions nécessaires.",
        ],
        listTitle: "Les pièces qui accélèrent l’étude",
        bullets: [
          "Modèle et année des deux véhicules",
          "Photos des deux places avec les voitures garées",
          "Photos du tableau et de son environnement",
          "Distance approximative jusqu’à chaque emplacement",
          "Horaires de départ et priorités entre les véhicules",
        ],
      },
    ],
    faq: [
      {
        question: "Une seule borne peut-elle recharger deux voitures électriques ?",
        answer:
          "Oui, en alternant les branchements si les besoins et les horaires le permettent. Une borne ne recharge toutefois qu’un véhicule à la fois lorsqu’elle ne possède qu’un seul point de connexion.",
      },
      {
        question: "Deux bornes de 22 kW demandent-elles forcément 44 kW ?",
        answer:
          "Pas nécessairement. Une gestion compatible peut répartir une puissance totale définie entre les points. L’architecture, les limites et le comportement exact doivent être validés par l’étude électrique et les documentations des équipements.",
      },
      {
        question: "Faut-il installer la deuxième borne immédiatement ?",
        answer:
          "Non. Si le second véhicule arrive plus tard, il peut être pertinent d’anticiper le cheminement, l’emplacement et l’évolution du tableau, puis d’installer le second point au moment utile.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-intelligente-delestage",
      "borne-recharge-7-11-22-kw",
      "installer-borne-recharge-maison-maroc",
    ],
    productCta: {
      eyebrow: "Deux véhicules, un projet",
      title: "Configurez une recharge qui partage intelligemment la puissance.",
      text: "Découvrez la MaxiCharger et faites étudier un ou deux points de charge selon vos véhicules, vos horaires et votre parking.",
      label: "Voir l’Autel MaxiCharger",
    },
  },
  {
    slug: "entretien-borne-recharge-maintenance",
    title: "Entretien d’une borne de recharge : le guide pratique",
    seoTitle: "Entretien d’une borne de recharge : guide pratique",
    description:
      "Inspection, nettoyage, câble et défauts : les bons gestes pour entretenir une borne de recharge et savoir quand appeler un professionnel.",
    excerpt:
      "Une routine courte suffit à repérer la plupart des anomalies visibles. Découvrez ce que l’utilisateur peut contrôler et ce qui relève d’un technicien.",
    category: "Entretien et sécurité",
    readingTime: 10,
    datePublished: augustPublicationDate,
    dateModified: augustPublicationDate,
    image: "/images/blog/entretien-borne-recharge-maintenance.jpg",
    imageAlt:
      "Technicien contrôlant une borne de recharge et son câble avec une tablette dans une maison marocaine",
    keywords: [
      "entretien borne de recharge",
      "maintenance wallbox",
      "nettoyer borne voiture électrique",
      "câble recharge endommagé",
      "dépannage borne recharge",
      "maintenance borne Maroc",
    ],
    intro: [
      "Une borne de recharge ne demande pas les mêmes gestes qu’un moteur, mais elle mérite une surveillance régulière. Le câble est manipulé, le connecteur peut subir des chocs et une installation extérieure rencontre poussière, soleil ou humidité.",
      "L’objectif n’est pas d’ouvrir l’appareil ni d’improviser une réparation. Une bonne maintenance distingue l’inspection simple accessible à l’utilisateur du diagnostic électrique réservé à un professionnel qualifié. La notice de la référence installée reste toujours la règle principale.",
    ],
    quickAnswer:
      "Inspectez régulièrement le boîtier, la fixation, le câble, le connecteur et la zone autour de la borne. Nettoyez uniquement selon la notice, sans jet ni produit agressif. En cas de fissure, échauffement, câble abîmé, odeur, bruit inhabituel ou défaut répété, cessez l’utilisation et faites contrôler l’équipement par un professionnel.",
    sections: [
      {
        id: "entretien-preventif",
        title: "Ce que l’entretien préventif doit réellement accomplir",
        paragraphs: [
          "L’entretien préventif vise à repérer une dégradation avant qu’elle ne gêne la recharge ou ne présente un risque. Il porte sur l’état visible de l’équipement, son environnement et les signaux de fonctionnement. Il ne suppose pas de démonter le capot ni de toucher aux protections du tableau.",
          "La fréquence dépend de l’usage et de l’exposition. Une borne utilisée chaque jour dans un parking ouvert mérite des regards plus fréquents qu’un équipement intérieur peu sollicité. Après un choc, une inondation, des travaux ou un incident électrique, une vérification spécifique est préférable à l’attente de la prochaine routine.",
        ],
        listTitle: "Les cinq zones à surveiller",
        bullets: [
          "Enveloppe, écran ou voyants et fixation",
          "Câble sur toute sa longueur",
          "Connecteur, capuchon et support de rangement",
          "Cheminement électrique visible et protections accessibles",
          "Sol, ventilation et espace autour de la borne",
        ],
      },
      {
        id: "inspection-utilisateur",
        title: "Adopter une inspection visuelle simple et régulière",
        paragraphs: [
          "Avant de brancher, un regard rapide permet de détecter un câble écrasé, une gaine entaillée, une prise sale ou une fixation qui a bougé. Les contacts du connecteur ne doivent pas être touchés avec un objet ni redressés par l’utilisateur.",
          "Vérifiez aussi le geste de rangement. Un câble enroulé trop serré, coincé sous un pneu ou laissé dans une flaque vieillit inutilement. Après usage, replacez-le sur le support prévu sans créer de torsion près de la poignée.",
        ],
        table: {
          caption: "Contrôle visuel et réaction adaptée",
          headers: ["Observation", "Action immédiate", "Suite recommandée"],
          rows: [
            ["Poussière légère", "Ne pas utiliser de jet", "Nettoyer selon la notice"],
            ["Gaine marquée ou coupée", "Ne pas rebrancher", "Faire contrôler ou remplacer"],
            ["Boîtier fissuré ou mobile", "Cesser l’usage", "Contacter l’installateur"],
            ["Défaut récurrent", "Noter le code et l’heure", "Transmettre au support"],
          ],
        },
        note: {
          title: "Ne pas ouvrir la borne",
          text: "L’absence de charge ne signifie pas que l’intérieur peut être manipulé sans danger. Le diagnostic et toute intervention électrique relèvent d’un professionnel autorisé.",
        },
      },
      {
        id: "nettoyage-borne",
        title: "Nettoyer sans endommager les surfaces ni les joints",
        paragraphs: [
          "Le nettoyage doit être réalisé lorsque la borne n’est pas en cours d’utilisation, avec les précautions indiquées dans sa documentation. Un chiffon doux légèrement humide peut être autorisé sur certaines surfaces, tandis que les solvants, abrasifs et jets à pression sont généralement à éviter. La notice exacte tranche.",
          "Ne pulvérisez pas de produit dans le connecteur, les ouvertures ou autour des raccordements. Si de l’eau, du sable ou un corps étranger semble avoir pénétré dans une partie fonctionnelle, ne cherchez pas à l’extraire avec un outil métallique.",
        ],
        listTitle: "Une méthode prudente",
        ordered: true,
        bullets: [
          "Arrêter la session et ranger le véhicule à distance du câble",
          "Consulter les consignes de nettoyage de la référence installée",
          "Retirer la poussière superficielle avec le moyen autorisé",
          "Sécher les surfaces et inspecter le connecteur",
          "Attendre les conditions prévues avant la prochaine utilisation",
        ],
      },
      {
        id: "cable-connecteur",
        title: "Protéger le câble et le connecteur, les pièces les plus manipulées",
        paragraphs: [
          "La majorité des gestes quotidiens se concentre sur la poignée et les premiers centimètres de câble. Évitez de tirer sur la gaine pour débrancher, de faire tomber le connecteur et de forcer son insertion. Un verrouillage difficile peut venir de la voiture, du câble ou d’un mauvais alignement : insister n’identifie pas la cause.",
          "Une chaleur anormale, une odeur, une coloration, des broches endommagées ou des coupures de charge répétées justifient l’arrêt de l’utilisation. Photographiez l’anomalie sans toucher les contacts et transmettez les informations à l’installateur ou au support.",
        ],
        listTitle: "Signaux qui exigent un contrôle",
        bullets: [
          "Connecteur qui chauffe anormalement ou dégage une odeur",
          "Gaine coupée, écrasée ou déformée",
          "Broche ou logement visiblement altéré",
          "Charge interrompue à chaque mouvement du câble",
          "Traces d’impact, d’humidité interne ou de brûlure",
        ],
      },
      {
        id: "application-diagnostic",
        title: "Utiliser l’application comme indice, pas comme réparation",
        paragraphs: [
          "Une borne connectée peut afficher l’état des sessions, l’heure d’un défaut ou des événements récurrents. Ces données aident à décrire le problème, mais elles ne remplacent pas une inspection physique lorsque le câble, le boîtier ou l’installation semble endommagé.",
          "Avant de contacter l’assistance, relevez le message exact, l’heure, le véhicule concerné et les conditions de survenue. Une capture d’écran et une photo de l’installation raccourcissent le diagnostic. Évitez les réinitialisations répétées qui effacent le contexte sans corriger la cause.",
        ],
        table: {
          caption: "Informations utiles au support",
          headers: ["Information", "Pourquoi elle aide", "Exemple"],
          rows: [
            ["Code ou message", "Identifie la famille de défaut", "Capture de l’application"],
            ["Moment du défaut", "Relie l’incident aux usages", "Pendant la charge nocturne"],
            ["Véhicule et câble", "Isole une compatibilité possible", "Modèle, année, câble utilisé"],
            ["Contexte du site", "Repère un événement extérieur", "Pluie, travaux, coupure réseau"],
          ],
        },
      },
      {
        id: "maintenance-professionnelle",
        title: "Savoir quand demander une maintenance professionnelle",
        paragraphs: [
          "Une vérification professionnelle devient nécessaire lorsqu’une anomalie touche l’intégrité de la borne, le câble, les protections ou la qualité de la recharge. Elle peut également être planifiée selon les recommandations du fabricant, l’intensité d’usage et les exigences du site.",
          "Pour une installation EVAtlas, conservez la référence du produit, les documents de mise en service et les coordonnées de l’installateur. Si vous envisagez une MaxiCharger, un devis peut intégrer dès le départ l’emplacement, le rangement du câble et l’accessibilité nécessaires à un entretien simple.",
        ],
        listTitle: "Préparer la demande d’intervention",
        bullets: [
          "Référence et numéro de série sans les publier en ligne",
          "Date d’installation et historique récent",
          "Photos du boîtier, du câble et du connecteur",
          "Codes défaut et captures d’écran",
          "Description de tout choc, coupure ou changement sur le site",
        ],
      },
    ],
    faq: [
      {
        question: "À quelle fréquence faut-il entretenir une borne de recharge ?",
        answer:
          "La fréquence exacte dépend de la notice, de l’exposition et de l’intensité d’usage. Une inspection visuelle régulière et après tout événement inhabituel complète les contrôles professionnels recommandés pour l’installation.",
      },
      {
        question: "Peut-on nettoyer une borne de recharge au jet d’eau ?",
        answer:
          "N’utilisez pas de jet sauf indication explicite de la notice, et jamais pendant une session. Les indices de protection ne remplacent pas les consignes de nettoyage du fabricant.",
      },
      {
        question: "Que faire si le câble de recharge est endommagé ?",
        answer:
          "Cessez de l’utiliser, évitez de toucher les contacts et faites-le contrôler par un professionnel. Un ruban adhésif ou une réparation improvisée ne constitue pas une remise en état sûre.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-exterieure-maroc",
      "autel-maxicharger-22kw-maroc",
      "installer-borne-recharge-maison-maroc",
    ],
    productCta: {
      eyebrow: "Fiabilité au quotidien",
      title: "Choisissez une installation pensée pour être simple à utiliser et à suivre.",
      text: "Explorez la MaxiCharger et confiez à EVAtlas l’étude de son emplacement, de sa protection et de sa mise en service.",
      label: "Découvrir la MaxiCharger",
    },
  },
  {
    slug: "connecteur-type-2-ccs2-recharge-maroc",
    title: "Type 2 ou CCS2 au Maroc : quel connecteur choisir ?",
    seoTitle: "Type 2 ou CCS2 au Maroc : quel connecteur ?",
    description:
      "Type 2 pour la recharge AC, CCS2 pour la recharge rapide DC : comprenez les connecteurs et vérifiez la compatibilité de votre voiture au Maroc.",
    excerpt:
      "Deux formes proches, deux usages différents. Ce guide sépare clairement connecteur, courant et puissance pour éviter les erreurs de choix.",
    category: "Compatibilité véhicule",
    readingTime: 10,
    datePublished: augustPublicationDate,
    dateModified: augustPublicationDate,
    image: "/images/blog/connecteur-type-2-ccs2-maroc.jpg",
    imageAlt:
      "Connecteurs de recharge Type 2 et CCS Combo 2 présentés côte à côte sur un décor vert inspiré du Maroc",
    keywords: [
      "Type 2 CCS2 Maroc",
      "connecteur voiture électrique Maroc",
      "prise Type 2 borne recharge",
      "CCS Combo 2 recharge rapide",
      "compatibilité borne voiture électrique",
      "câble recharge Type 2",
    ],
    intro: [
      "Type 2 et CCS2 sont souvent cités dans la même fiche de véhicule, ce qui peut laisser penser qu’ils sont interchangeables. Ils décrivent pourtant deux modes de recharge distincts : le courant alternatif pour le Type 2 et la recharge rapide en courant continu pour le CCS Combo 2.",
      "Comprendre cette différence permet de choisir une borne à domicile, de lire correctement une carte de stations et de vérifier un véhicule importé. La forme de la prise n’indique pas à elle seule la puissance réellement acceptée.",
    ],
    quickAnswer:
      "Pour une borne AC à domicile ou au travail, le Type 2 est le connecteur de référence sur de nombreux véhicules du marché européen. Le CCS Combo 2 ajoute deux contacts de puissance pour la recharge rapide DC sur des stations dédiées. Vérifiez toujours le port du véhicule, sa puissance AC et sa puissance DC séparément.",
    sections: [
      {
        id: "connecteur-mode-puissance",
        title: "Séparer trois notions : connecteur, courant et puissance",
        paragraphs: [
          "Le connecteur décrit l’interface physique. Le mode de recharge précise notamment si l’énergie arrive en courant alternatif ou continu. La puissance exprime la vitesse maximale théorique, limitée par la borne, le véhicule, le câble et les conditions de la session.",
          "Deux voitures avec un port Type 2 peuvent accepter 7,4, 11 ou 22 kW en AC selon leur chargeur embarqué. De la même manière, la présence d’un port CCS2 ne garantit pas une valeur identique de recharge rapide entre deux modèles.",
        ],
        table: {
          caption: "Les trois informations à lire séparément",
          headers: ["Information", "Question à poser", "Où la vérifier"],
          rows: [
            ["Connecteur", "La prise est-elle compatible ?", "Port du véhicule et manuel"],
            ["Mode", "Recharge AC ou DC ?", "Documentation du véhicule et de la station"],
            ["Puissance", "Quelle limite réelle ?", "Fiche de la version exacte"],
          ],
        },
      },
      {
        id: "type-2-ac",
        title: "Type 2 : la recharge AC du quotidien",
        paragraphs: [
          "Le Type 2 est couramment utilisé pour la recharge en courant alternatif à domicile, au travail et sur de nombreuses bornes de destination. Dans ce cas, le chargeur embarqué dans la voiture transforme l’électricité AC pour la batterie, ce qui explique pourquoi sa limite influence directement la vitesse.",
          "Une Autel MaxiCharger AC Wallbox s’inscrit dans cet usage. Sa puissance nominale ne doit pas être confondue avec la puissance que chaque voiture acceptera. L’étude vérifie la version du véhicule, le réseau électrique et la configuration de la borne.",
        ],
        listTitle: "À confirmer pour une borne Type 2",
        bullets: [
          "Présence d’un port Type 2 compatible sur la version exacte",
          "Puissance maximale du chargeur embarqué AC",
          "Alimentation monophasée ou triphasée disponible",
          "Borne avec câble attaché ou prise selon la configuration",
          "Longueur et rangement du câble sur la place",
        ],
        note: {
          title: "Même prise, vitesse différente",
          text: "Le Type 2 confirme une interface de recharge AC, pas une puissance universelle. La limite du véhicule doit être lue dans sa documentation.",
        },
      },
      {
        id: "ccs2-dc",
        title: "CCS Combo 2 : la recharge rapide DC en déplacement",
        paragraphs: [
          "Le CCS Combo 2 reprend la partie supérieure du dessin Type 2 et ajoute deux grands contacts destinés au courant continu. Sur une station rapide compatible, l’électronique de puissance se trouve principalement côté station et fournit le courant continu à la batterie selon le dialogue avec le véhicule.",
          "Ce matériel, sa puissance, son coût et ses contraintes d’installation diffèrent d’une wallbox AC résidentielle. Un connecteur CCS2 est donc utile pour les arrêts rapides sur itinéraire, tandis que le Type 2 répond souvent à la recharge longue pendant le stationnement.",
        ],
        table: {
          caption: "Type 2 et CCS2 : usages complémentaires",
          headers: ["Critère", "Type 2", "CCS Combo 2"],
          rows: [
            ["Courant", "Alternatif AC", "Continu DC"],
            ["Usage courant", "Domicile, travail, destination", "Station rapide sur trajet"],
            ["Équipement", "Wallbox ou borne AC", "Chargeur rapide DC dédié"],
            ["Limite véhicule", "Chargeur embarqué AC", "Courbe et puissance DC acceptées"],
          ],
        },
      },
      {
        id: "combo-2-port-vehicule",
        title: "Pourquoi un même véhicule peut afficher Type 2 et CCS2",
        paragraphs: [
          "Sur un véhicule équipé d’une entrée Combo 2, la partie supérieure accueille généralement un connecteur Type 2 pour la recharge AC. Pour une session DC, le connecteur CCS2 utilise cette zone de communication et les deux contacts inférieurs de puissance.",
          "Cette compatibilité générale doit être vérifiée sur la version exacte, en particulier pour un véhicule importé ou décliné selon plusieurs marchés. La documentation du constructeur et l’observation du port valent mieux qu’une conclusion tirée du seul nom commercial.",
        ],
        listTitle: "Avant d’acheter un câble ou une borne",
        ordered: true,
        bullets: [
          "Identifier le marché et l’année de la voiture",
          "Photographier le port ouvert sans toucher les contacts",
          "Lire les limites AC et DC séparément",
          "Vérifier le câble fourni avec le véhicule",
          "Confirmer la compatibilité avec l’installateur ou le constructeur",
        ],
      },
      {
        id: "cable-attache-prise",
        title: "Choisir entre câble attaché et borne avec prise",
        paragraphs: [
          "Un câble attaché reste disponible sur la borne et simplifie le geste quotidien. Une borne avec prise permet d’utiliser un câble amovible compatible et peut alléger visuellement l’emplacement lorsque le câble est rangé ailleurs. Le meilleur choix dépend du parking, de l’exposition et du nombre de véhicules.",
          "Dans tous les cas, utilisez un câble certifié et dimensionné pour l’usage prévu. Les adaptateurs non validés, les rallonges improvisées et les câbles dont les caractéristiques sont inconnues peuvent annuler les hypothèses de compatibilité et de sécurité.",
        ],
        table: {
          caption: "Deux configurations de borne AC",
          headers: ["Option", "Avantage", "À anticiper"],
          rows: [
            ["Câble attaché", "Branchement rapide au quotidien", "Longueur, rangement et exposition"],
            ["Prise Type 2", "Câble amovible et remplaçable", "Transport et rangement du câble"],
          ],
        },
      },
      {
        id: "compatibilite-devis",
        title: "Rassembler les bonnes données pour éviter une erreur de configuration",
        paragraphs: [
          "Pour une borne à domicile au Maroc, transmettez le modèle, l’année, la version, une photo du port et la puissance AC annoncée. Ajoutez les caractéristiques du site : tableau, distance, emplacement et temps de stationnement. Ces éléments permettent de distinguer la compatibilité physique du dimensionnement électrique.",
          "Le simulateur EVAtlas fournit un premier repère de temps de charge. Le devis permet ensuite de confirmer une configuration MaxiCharger cohérente avec le véhicule et l’installation, sans choisir 22 kW uniquement parce que la voiture possède un port CCS2.",
        ],
        listTitle: "Le dossier de compatibilité",
        bullets: [
          "Marque, modèle, version, année et marché d’origine",
          "Photo nette du port de charge",
          "Puissance AC maximale indiquée par le constructeur",
          "Type de câble possédé ou souhaité",
          "Photos du tableau et de la place de stationnement",
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on brancher un câble Type 2 sur une voiture équipée CCS2 ?",
        answer:
          "Une entrée Combo 2 accepte généralement un connecteur Type 2 dans sa partie supérieure pour la recharge AC. Vérifiez néanmoins le manuel et la version exacte du véhicule avant tout achat.",
      },
      {
        question: "Une prise Type 2 signifie-t-elle que la voiture accepte 22 kW ?",
        answer:
          "Non. Le Type 2 décrit le connecteur. La puissance AC dépend du chargeur embarqué de la voiture et peut être inférieure à 22 kW.",
      },
      {
        question: "Peut-on installer une borne CCS2 rapide à la maison ?",
        answer:
          "La recharge CCS2 utilise un équipement DC dédié, très différent d’une wallbox AC résidentielle et soumis à d’autres contraintes. Pour la majorité des domiciles, une borne Type 2 AC dimensionnée selon l’usage est la solution étudiée.",
      },
    ],
    relatedSlugs: [
      "borne-recharge-tesla-type-2-maroc",
      "borne-recharge-7-11-22-kw",
      "autel-maxicharger-22kw-maroc",
    ],
    productCta: {
      eyebrow: "Compatibilité confirmée",
      title: "Reliez votre véhicule à une borne AC correctement dimensionnée.",
      text: "Découvrez la MaxiCharger Type 2 et obtenez une recommandation fondée sur la version exacte de votre voiture et votre installation.",
      label: "Explorer la MaxiCharger",
    },
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (post: BlogPost) =>
  post.relatedSlugs
    .map((slug) => getBlogPost(slug))
    .filter((related): related is BlogPost => Boolean(related));
