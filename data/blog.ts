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
};

const publicationDate = "2026-07-17";

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
      "borne-recharge-7-11-22-kw",
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
      "installer-borne-recharge-maison-maroc",
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
      "prix-borne-recharge-installation-maroc",
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getRelatedPosts = (post: BlogPost) =>
  post.relatedSlugs
    .map((slug) => getBlogPost(slug))
    .filter((related): related is BlogPost => Boolean(related));

