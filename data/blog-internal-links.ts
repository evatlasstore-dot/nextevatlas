export type BlogInternalLink = {
  sectionIndex: number;
  lead: string;
  href: string;
  label: string;
};

/**
 * Liens éditoriaux placés dans les sections des guides. Ils sont sélectionnés
 * par sujet afin de garder une destination utile et des ancres naturelles.
 */
export const blogInternalLinks: Record<string, readonly BlogInternalLink[]> = {
  "normes-marocaines-bornes-recharge-2026": [
    { sectionIndex: 1, lead: "Pour relier ces exigences à un équipement concret, consultez", href: "/nos-produits/autel-maxicharger/", label: "les caractéristiques visibles de l’Autel MaxiCharger" },
    { sectionIndex: 2, lead: "Pour comprendre le rôle du véhicule dans la puissance obtenue, utilisez", href: "/simulateur/", label: "le simulateur de recharge par modèle" },
    { sectionIndex: 4, lead: "Pour faire vérifier le circuit et l’emplacement de votre projet, vous pouvez", href: "/devis/#quote-form", label: "demander une étude EVAtlas au Maroc" },
  ],
  "flotte-electrique-dernier-kilometre-maroc": [
    { sectionIndex: 1, lead: "Pour comparer le temps disponible aux besoins de chaque véhicule, commencez par", href: "/simulateur/", label: "simuler plusieurs scénarios de recharge" },
    { sectionIndex: 2, lead: "Pour découvrir les solutions adaptées aux sites professionnels, parcourez", href: "/nos-produits/", label: "les bornes de recharge EVAtlas" },
    { sectionIndex: 4, lead: "Pour établir un pilote à partir de vos tournées et de votre puissance disponible, demandez", href: "/devis/#quote-form", label: "une étude de flotte personnalisée" },
  ],
  "ocpp-borne-recharge-entreprise-maroc": [
    { sectionIndex: 1, lead: "Pour replacer le protocole dans l’évolution des normes au Maroc, lisez", href: "/blog/normes-marocaines-bornes-recharge-2026/", label: "le point EVAtlas sur les projets IMANOR 2026" },
    { sectionIndex: 2, lead: "Pour examiner une borne connectée proposée aux particuliers et professionnels, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 4, lead: "Pour cadrer la supervision, les accès et le pilotage de votre site, vous pouvez", href: "/devis/#quote-form", label: "présenter votre projet à EVAtlas" },
  ],
  "chargeur-embarque-voiture-electrique-22-kw": [
    { sectionIndex: 0, lead: "Pour vérifier la limite du modèle que vous conduisez, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par marque et véhicule" },
    { sectionIndex: 2, lead: "Pour approfondir la différence entre les alimentations, consultez", href: "/blog/borne-recharge-monophase-triphase-maroc/", label: "le guide monophasé et triphasé" },
    { sectionIndex: 4, lead: "Pour confronter la puissance du véhicule à votre tableau, demandez", href: "/devis/#quote-form", label: "un dimensionnement personnalisé de l’installation" },
  ],
  "pertes-recharge-voiture-electrique-kwh": [
    { sectionIndex: 1, lead: "Pour replacer les kWh mesurés dans votre budget, consultez", href: "/blog/cout-recharge-voiture-electrique-maroc/", label: "le guide du coût de recharge au Maroc" },
    { sectionIndex: 3, lead: "Pour comparer plusieurs puissances sur votre véhicule, utilisez", href: "/simulateur/", label: "le calculateur de temps de recharge EVAtlas" },
    { sectionIndex: 4, lead: "Pour découvrir le suivi connecté des sessions, explorez", href: "/nos-produits/autel-maxicharger/", label: "la borne Autel MaxiCharger" },
  ],
  "autonomie-wltp-reelle-voiture-electrique-maroc": [
    { sectionIndex: 1, lead: "Pour préparer aussi les variations liées au relief, lisez", href: "/blog/voiture-electrique-montagne-maroc-autonomie/", label: "le guide de conduite électrique en montagne" },
    { sectionIndex: 3, lead: "Pour estimer l’énergie récupérée avant votre prochain trajet, utilisez", href: "/simulateur/", label: "le simulateur de recharge EVAtlas" },
    { sectionIndex: 4, lead: "Pour partir régulièrement avec un niveau adapté depuis la maison, demandez", href: "/devis/#quote-form", label: "une étude de recharge à domicile" },
  ],
  "preconditionnement-batterie-recharge-rapide": [
    { sectionIndex: 1, lead: "Pour préparer l’ensemble du parcours et ses arrêts, consultez", href: "/blog/voyage-voiture-electrique-maroc/", label: "le guide du voyage électrique au Maroc" },
    { sectionIndex: 3, lead: "Pour calculer votre recharge AC avant le départ, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par véhicule" },
    { sectionIndex: 4, lead: "Pour programmer la recharge pendant le stationnement, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger connectée" },
  ],
  "voiture-electrique-immobilisee-longue-duree": [
    { sectionIndex: 1, lead: "Pour compléter les précautions liées à la batterie de traction, consultez", href: "/blog/preserver-batterie-voiture-electrique-maroc/", label: "les conseils EVAtlas pour préserver la batterie" },
    { sectionIndex: 3, lead: "Pour vérifier les fonctions de programmation disponibles, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la MaxiCharger et son application" },
    { sectionIndex: 4, lead: "Pour faire contrôler la recharge avant une longue absence, vous pouvez", href: "/devis/#quote-form", label: "demander une étude de votre installation" },
  ],
  "recharger-voiture-electrique-sous-la-pluie-maroc": [
    { sectionIndex: 1, lead: "Pour approfondir le choix du matériel exposé, lisez", href: "/blog/borne-recharge-exterieure-maroc/", label: "le guide de la borne extérieure au Maroc" },
    { sectionIndex: 3, lead: "Pour consulter la configuration et les protections annoncées du produit, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée par EVAtlas" },
    { sectionIndex: 4, lead: "Pour faire analyser l’écoulement, la fixation et le cheminement, demandez", href: "/devis/#quote-form", label: "une étude de votre emplacement extérieur" },
  ],
  "hev-phev-bev-maroc-differences-recharge": [
    { sectionIndex: 1, lead: "Pour approfondir l’usage d’un modèle rechargeable, consultez", href: "/blog/recharge-hybride-rechargeable-maroc/", label: "le guide EVAtlas consacré aux PHEV" },
    { sectionIndex: 2, lead: "Pour comparer la batterie et la puissance du modèle exact, utilisez", href: "/simulateur/", label: "le simulateur de recharge par véhicule" },
    { sectionIndex: 4, lead: "Lorsque votre choix est arrêté, faites", href: "/devis/#quote-form", label: "étudier la recharge de votre place de stationnement" },
  ],
  "ventes-voitures-electriques-maroc-2025": [
    { sectionIndex: 1, lead: "Pour confronter les modèles disponibles à vos habitudes, utilisez", href: "/simulateur/", label: "le simulateur de recharge EVAtlas" },
    { sectionIndex: 2, lead: "Pour découvrir une solution résidentielle connectée, consultez", href: "/nos-produits/autel-maxicharger/", label: "la borne Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 4, lead: "Pour transformer votre choix de véhicule en projet concret, vous pouvez", href: "/devis/#quote-form", label: "demander une étude d’installation au Maroc" },
  ],
  "autoroutes-maroc-bornes-recharge-strategie-adm": [
    { sectionIndex: 2, lead: "Avant une longue étape, vous pouvez", href: "/simulateur/", label: "estimer l’énergie à récupérer pour votre véhicule" },
    { sectionIndex: 3, lead: "Pour compléter les bornes rapides par une recharge régulière, découvrez", href: "/nos-produits/", label: "les solutions de recharge EVAtlas" },
    { sectionIndex: 4, lead: "Pour partir avec une recharge adaptée depuis votre domicile, faites", href: "/devis/#quote-form", label: "étudier votre installation par EVAtlas" },
  ],
  "assurance-voiture-electrique-maroc-2026": [
    { sectionIndex: 1, lead: "Avant d’assurer un véhicule d’occasion, consultez également", href: "/blog/acheter-voiture-electrique-occasion-maroc/", label: "les contrôles utiles sur la batterie et la recharge" },
    { sectionIndex: 2, lead: "Pour examiner l’équipement et ses données techniques visibles, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la MaxiCharger proposée par EVAtlas" },
    { sectionIndex: 4, lead: "Pour obtenir un projet documenté et adapté au bâtiment, demandez", href: "/devis/#quote-form", label: "votre devis d’installation personnalisé" },
  ],
  "cybersecurite-borne-recharge-connectee-maroc": [
    { sectionIndex: 1, lead: "Pour visualiser les fonctions connectées disponibles, consultez", href: "/nos-produits/autel-maxicharger/", label: "la page de l’Autel MaxiCharger" },
    { sectionIndex: 2, lead: "Pour replacer la connectivité parmi les autres critères, parcourez", href: "/nos-produits/", label: "les solutions de recharge EVAtlas" },
    { sectionIndex: 4, lead: "Pour prévoir la configuration et la mise en service de votre site, vous pouvez", href: "/devis/#quote-form", label: "présenter votre projet à un conseiller" },
  ],
  "plug-and-charge-iso-15118-maroc": [
    { sectionIndex: 1, lead: "Pour distinguer cette communication de la recharge bidirectionnelle, lisez", href: "/blog/v2g-v2h-recharge-bidirectionnelle-maroc/", label: "le guide EVAtlas sur le V2G et le V2H" },
    { sectionIndex: 3, lead: "Pour comparer ces innovations aux fonctions actuelles, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger connectée" },
    { sectionIndex: 4, lead: "Pour vérifier d’abord le temps de recharge de votre voiture, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par modèle" },
  ],
  "distance-tableau-borne-recharge-maroc": [
    { sectionIndex: 1, lead: "Pour comprendre les autres paramètres électriques du site, consultez", href: "/blog/borne-recharge-monophase-triphase-maroc/", label: "le guide monophasé ou triphasé" },
    { sectionIndex: 2, lead: "Pour relier la puissance au véhicule, commencez par", href: "/simulateur/", label: "simuler plusieurs vitesses de recharge" },
    { sectionIndex: 4, lead: "Pour faire mesurer le trajet et comparer les emplacements, demandez", href: "/devis/#quote-form", label: "une étude EVAtlas de votre stationnement" },
  ],
  "pneus-voiture-electrique-autonomie-maroc": [
    { sectionIndex: 1, lead: "Pour compléter cette routine, retrouvez", href: "/blog/preserver-batterie-voiture-electrique-maroc/", label: "les conseils de préservation de la batterie" },
    { sectionIndex: 4, lead: "Pour adapter l’énergie récupérée à votre consommation réelle, utilisez", href: "/simulateur/", label: "le simulateur de recharge par véhicule" },
    { sectionIndex: 4, lead: "Pour découvrir une recharge programmée au domicile, consultez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée au Maroc" },
  ],
  "borne-recharge-parking-souterrain-maroc": [
    { sectionIndex: 0, lead: "Pour approfondir la gouvernance des espaces partagés, consultez", href: "/blog/borne-recharge-entreprise-copropriete-maroc/", label: "le guide entreprise et copropriété" },
    { sectionIndex: 3, lead: "Pour voir une borne configurable avec contrôle des accès, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la solution Autel MaxiCharger" },
    { sectionIndex: 4, lead: "Pour cadrer votre place et les parties communes, faites", href: "/devis/#quote-form", label: "étudier votre parking par EVAtlas" },
  ],
  "voiture-electrique-montagne-maroc-autonomie": [
    { sectionIndex: 2, lead: "Pour tenir compte aussi des températures élevées, lisez", href: "/blog/recharge-voiture-electrique-forte-chaleur-maroc/", label: "le guide de recharge par forte chaleur" },
    { sectionIndex: 3, lead: "Avant votre départ, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge" },
    { sectionIndex: 4, lead: "Pour préparer vos départs depuis la maison, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la borne connectée Autel MaxiCharger" },
  ],
  "batterie-faible-panne-voiture-electrique-maroc": [
    { sectionIndex: 1, lead: "Pour préparer plutôt que subir le prochain trajet, consultez", href: "/blog/voyage-voiture-electrique-maroc/", label: "le guide du voyage électrique au Maroc" },
    { sectionIndex: 2, lead: "Pour connaître votre durée de récupération à différents niveaux, utilisez", href: "/simulateur/", label: "le calculateur EVAtlas" },
    { sectionIndex: 4, lead: "Pour installer une recharge régulière à votre stationnement, demandez", href: "/devis/#quote-form", label: "une étude personnalisée de votre projet" },
  ],
  "gigafactory-batteries-maroc-2026": [
    { sectionIndex: 0, lead: "Pour relier cette évolution industrielle à un projet concret, parcourez", href: "/nos-produits/", label: "les solutions de recharge proposées par EVAtlas" },
    { sectionIndex: 1, lead: "La technologie de batterie influence les usages ; vous pouvez", href: "/simulateur/", label: "simuler la recharge de votre modèle électrique" },
    { sectionIndex: 3, lead: "Pour faire vérifier la puissance et le circuit disponibles,", href: "/devis/#quote-form", label: "demandez une étude d’installation au Maroc" },
  ],
  "stellantis-kenitra-production-bornes-recharge": [
    { sectionIndex: 0, lead: "Pour comprendre les critères qui comptent au-delà du lieu de fabrication, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la borne Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 2, lead: "Avant de retenir une puissance nominale,", href: "/simulateur/", label: "comparez les temps de recharge de votre véhicule" },
    { sectionIndex: 3, lead: "Chaque site restant différent, vous pouvez", href: "/devis/#quote-form", label: "faire dimensionner votre installation par EVAtlas" },
  ],
  "mobilize-duo-tanger-vehicule-electrique": [
    { sectionIndex: 1, lead: "Pour comparer un véhicule urbain avec les autres modèles de la base, utilisez", href: "/simulateur/", label: "le simulateur de recharge EVAtlas" },
    { sectionIndex: 2, lead: "Pour explorer les équipements disponibles selon la puissance du véhicule, consultez", href: "/nos-produits/", label: "les bornes de recharge EVAtlas" },
    { sectionIndex: 3, lead: "Pour organiser la recharge de plusieurs véhicules professionnels,", href: "/devis/#quote-form", label: "présentez votre flotte à un conseiller" },
  ],
  "fiat-tris-electrique-maroc-professionnels": [
    { sectionIndex: 0, lead: "Pour situer l’énergie à récupérer entre deux tournées, vous pouvez", href: "/simulateur/", label: "calculer un scénario de recharge par véhicule" },
    { sectionIndex: 2, lead: "Pour découvrir une borne connectée adaptée aux sites professionnels, consultez", href: "/nos-produits/autel-maxicharger/", label: "les caractéristiques de l’Autel MaxiCharger" },
    { sectionIndex: 3, lead: "Pour chiffrer le circuit et l’évolution de la flotte,", href: "/devis/#quote-form", label: "demandez une étude de recharge professionnelle" },
  ],
  "maroc-hub-industrie-vehicule-electrique-2026": [
    { sectionIndex: 1, lead: "Pour voir comment cette transition se traduit en équipement concret, découvrez", href: "/nos-produits/", label: "la sélection de bornes de recharge EVAtlas" },
    { sectionIndex: 3, lead: "Pour estimer la recharge d’un véhicule disponible au Maroc, lancez", href: "/simulateur/", label: "une simulation personnalisée" },
    { sectionIndex: 4, lead: "Si votre projet est déjà défini,", href: "/devis/#quote-form", label: "demandez un devis d’installation de borne" },
  ],
  "carbure-silicium-recharge-voiture-electrique": [
    { sectionIndex: 0, lead: "Pour appliquer la limite du chargeur embarqué à votre modèle, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge" },
    { sectionIndex: 2, lead: "Pour confronter ces notions à une borne AC actuelle, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger connectée" },
    { sectionIndex: 3, lead: "Pour valider la puissance que votre tableau peut fournir,", href: "/devis/#quote-form", label: "faites analyser votre installation électrique" },
  ],
  "passeport-batterie-2027-maroc": [
    { sectionIndex: 1, lead: "Une fois la batterie et sa capacité identifiées, vous pouvez", href: "/simulateur/", label: "estimer précisément sa durée de recharge" },
    { sectionIndex: 2, lead: "Pour anticiper l’équipement d’un véhicule d’occasion, parcourez", href: "/nos-produits/", label: "les solutions de recharge pour le domicile" },
    { sectionIndex: 4, lead: "Pour vérifier la compatibilité entre véhicule, stationnement et tableau,", href: "/devis/#quote-form", label: "demandez une recommandation EVAtlas" },
  ],
  "recyclage-seconde-vie-batteries-maroc": [
    { sectionIndex: 1, lead: "Pour découvrir comment une borne connectée accompagne une routine maîtrisée, consultez", href: "/nos-produits/autel-maxicharger/", label: "la présentation de l’Autel MaxiCharger" },
    { sectionIndex: 3, lead: "Pour adapter la recharge aux niveaux recommandés par votre véhicule, utilisez", href: "/simulateur/", label: "le calculateur EVAtlas" },
    { sectionIndex: 4, lead: "Pour sécuriser le circuit dédié et la configuration,", href: "/devis/#quote-form", label: "demandez une étude d’installation" },
  ],
  "v2g-v2h-recharge-bidirectionnelle-maroc": [
    { sectionIndex: 1, lead: "Pour distinguer ces fonctions de celles disponibles aujourd’hui, consultez", href: "/nos-produits/autel-maxicharger/", label: "les caractéristiques visibles de la MaxiCharger AC" },
    { sectionIndex: 2, lead: "Avant d’envisager une restitution d’énergie, commencez par", href: "/simulateur/", label: "mesurer le besoin de recharge du véhicule" },
    { sectionIndex: 3, lead: "Toute architecture énergétique avancée exige une étude :", href: "/devis/#quote-form", label: "présentez votre site et vos objectifs à EVAtlas" },
  ],
  "reseau-bornes-publiques-maroc-lecons-2026": [
    { sectionIndex: 0, lead: "Pour compléter le réseau public par une recharge habituelle, découvrez", href: "/nos-produits/", label: "les solutions EVAtlas pour domicile et entreprise" },
    { sectionIndex: 2, lead: "Pour savoir quelle puissance votre voiture peut réellement utiliser,", href: "/simulateur/", label: "comparez plusieurs scénarios de recharge" },
    { sectionIndex: 4, lead: "Pour installer un point privé adapté à votre stationnement,", href: "/devis/#quote-form", label: "demandez votre étude personnalisée" },
  ],
  "borne-recharge-maroc-guide": [
    { sectionIndex: 0, lead: "Pour comparer les solutions proposées au Maroc, consultez", href: "/nos-produits/", label: "les bornes de recharge sélectionnées par EVAtlas" },
    { sectionIndex: 1, lead: "Pour transformer ces repères en estimation concrète, vous pouvez", href: "/simulateur/", label: "simuler le temps de recharge de votre voiture" },
    { sectionIndex: 2, lead: "Si votre projet est déjà défini, l’étape suivante consiste à", href: "/devis/#quote-form", label: "demander une étude d’installation personnalisée" },
  ],
  "installer-borne-recharge-maison-maroc": [
    { sectionIndex: 0, lead: "Pour visualiser une solution résidentielle complète, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 1, lead: "Avant de dimensionner le circuit, commencez par", href: "/simulateur/", label: "estimer la recharge adaptée à votre véhicule" },
    { sectionIndex: 2, lead: "Une vérification du tableau et de l’emplacement reste indispensable :", href: "/devis/#quote-form", label: "présentez votre projet résidentiel à EVAtlas" },
  ],
  "prix-borne-recharge-installation-maroc": [
    { sectionIndex: 0, lead: "Pour comprendre ce que couvre une solution complète, parcourez", href: "/nos-produits/", label: "la gamme de bornes de recharge EVAtlas" },
    { sectionIndex: 1, lead: "Le véhicule influence directement le dimensionnement ; vous pouvez", href: "/simulateur/", label: "calculer un premier scénario de recharge" },
    { sectionIndex: 2, lead: "Pour obtenir un budget fondé sur votre site plutôt qu’un prix générique,", href: "/devis/#quote-form", label: "demandez votre devis de borne au Maroc" },
  ],
  "borne-recharge-7-11-22-kw": [
    { sectionIndex: 0, lead: "Pour comparer ces puissances avec la batterie de votre voiture, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge EVAtlas" },
    { sectionIndex: 1, lead: "La fiche produit détaille une borne réglable selon le projet :", href: "/nos-produits/autel-maxicharger/", label: "découvrir l’Autel MaxiCharger 22 kW" },
    { sectionIndex: 2, lead: "Le choix final dépend aussi du tableau électrique ; faites", href: "/devis/#quote-form", label: "étudier la puissance réellement disponible" },
  ],
  "temps-recharge-voiture-electrique": [
    { sectionIndex: 0, lead: "Pour appliquer directement la formule à un modèle précis,", href: "/simulateur/", label: "calculez son temps de recharge en ligne" },
    { sectionIndex: 1, lead: "Vous pouvez ensuite confronter le résultat aux caractéristiques de", href: "/nos-produits/autel-maxicharger/", label: "la borne connectée Autel MaxiCharger" },
    { sectionIndex: 2, lead: "Pour valider la puissance disponible à votre domicile ou sur votre site,", href: "/devis/#quote-form", label: "demandez une recommandation EVAtlas" },
  ],
  "borne-recharge-entreprise-copropriete-maroc": [
    { sectionIndex: 0, lead: "Pour identifier une solution adaptée aux accès partagés, consultez", href: "/nos-produits/", label: "les bornes proposées aux professionnels" },
    { sectionIndex: 1, lead: "Une première estimation des usages peut être obtenue avec", href: "/simulateur/", label: "le calculateur de recharge par véhicule" },
    { sectionIndex: 2, lead: "Pour cadrer les places, la puissance et la gestion des utilisateurs,", href: "/devis/#quote-form", label: "demandez une étude pour votre entreprise ou copropriété" },
  ],
  "autel-maxicharger-22kw-maroc": [
    { sectionIndex: 0, lead: "Pour consulter les visuels, fonctions et données techniques visibles, accédez à", href: "/nos-produits/autel-maxicharger/", label: "la page officielle de l’Autel MaxiCharger EVAtlas" },
    { sectionIndex: 1, lead: "Pour vérifier ce que cette puissance change sur votre véhicule,", href: "/simulateur/", label: "simulez votre durée de recharge" },
    { sectionIndex: 2, lead: "La configuration finale dépendant du site, vous pouvez", href: "/devis/#quote-form", label: "demander un devis d’installation de la MaxiCharger" },
  ],
  "recharge-voiture-electrique-solaire-maroc": [
    { sectionIndex: 0, lead: "Pour estimer d’abord le besoin énergétique du véhicule, lancez", href: "/simulateur/", label: "une simulation de recharge personnalisée" },
    { sectionIndex: 1, lead: "Pour explorer une borne connectée intégrable à un projet résidentiel, consultez", href: "/nos-produits/autel-maxicharger/", label: "les caractéristiques de l’Autel MaxiCharger" },
    { sectionIndex: 2, lead: "L’association solaire, tableau et borne doit être étudiée sur place :", href: "/devis/#quote-form", label: "soumettez votre configuration à EVAtlas" },
  ],
  "borne-recharge-intelligente-delestage": [
    { sectionIndex: 0, lead: "Pour voir comment la connectivité s’intègre dans une borne actuelle, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la solution Autel MaxiCharger proposée au Maroc" },
    { sectionIndex: 1, lead: "Le besoin de puissance peut être approché avec", href: "/simulateur/", label: "une simulation fondée sur votre voiture" },
    { sectionIndex: 2, lead: "Pour vérifier la gestion de puissance compatible avec votre installation,", href: "/devis/#quote-form", label: "faites analyser votre projet de recharge" },
  ],
  "borne-recharge-tesla-type-2-maroc": [
    { sectionIndex: 0, lead: "Sélectionnez votre Tesla dans", href: "/simulateur/", label: "le simulateur EVAtlas pour estimer sa recharge" },
    { sectionIndex: 1, lead: "Pour examiner une borne Type 2 connectée, consultez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger compatible avec ce standard" },
    { sectionIndex: 2, lead: "Pour confirmer le câble, la puissance et la pose selon votre site,", href: "/devis/#quote-form", label: "demandez une étude dédiée à votre Tesla" },
  ],
  "voyage-voiture-electrique-maroc": [
    { sectionIndex: 0, lead: "Avant le départ, utilisez", href: "/simulateur/", label: "le simulateur pour anticiper une recharge complète ou partielle" },
    { sectionIndex: 1, lead: "Pour préparer aussi la recharge quotidienne à votre retour, explorez", href: "/nos-produits/", label: "les solutions de recharge EVAtlas" },
    { sectionIndex: 2, lead: "Si vous souhaitez équiper votre point de départ habituel,", href: "/devis/#quote-form", label: "demandez une étude de borne à domicile" },
  ],
  "borne-recharge-hotel-riad-maroc": [
    { sectionIndex: 0, lead: "Pour découvrir une borne connectée adaptée à une gestion professionnelle, consultez", href: "/nos-produits/autel-maxicharger/", label: "la présentation de l’Autel MaxiCharger" },
    { sectionIndex: 1, lead: "Les véhicules accueillis étant variés,", href: "/simulateur/", label: "comparez plusieurs scénarios de temps de recharge" },
    { sectionIndex: 2, lead: "Pour dimensionner le nombre de points et les usages de votre établissement,", href: "/devis/#quote-form", label: "demandez une étude pour votre hôtel ou riad" },
  ],
  "recharge-hybride-rechargeable-maroc": [
    { sectionIndex: 0, lead: "Pour obtenir un résultat fondé sur le modèle et sa batterie,", href: "/simulateur/", label: "sélectionnez votre hybride rechargeable dans le simulateur" },
    { sectionIndex: 1, lead: "Pour comparer les équipements disponibles, parcourez", href: "/nos-produits/", label: "les solutions de recharge EVAtlas" },
    { sectionIndex: 2, lead: "Pour confirmer qu’une borne correspond à votre usage quotidien,", href: "/devis/#quote-form", label: "demandez un dimensionnement personnalisé" },
  ],
  "borne-recharge-exterieure-maroc": [
    { sectionIndex: 0, lead: "Pour voir les configurations murale et sur pied, consultez", href: "/nos-produits/autel-maxicharger/", label: "la page de l’Autel MaxiCharger" },
    { sectionIndex: 1, lead: "Avant de retenir une puissance,", href: "/simulateur/", label: "estimez le temps de recharge de votre véhicule" },
    { sectionIndex: 2, lead: "L’exposition, le cheminement et les protections exigent une vérification :", href: "/devis/#quote-form", label: "faites étudier votre installation extérieure" },
  ],
  "deux-voitures-electriques-maison-une-ou-deux-bornes": [
    { sectionIndex: 0, lead: "Pour comparer les besoins des deux véhicules, réalisez", href: "/simulateur/", label: "une simulation de recharge pour chaque modèle" },
    { sectionIndex: 1, lead: "Pour explorer une borne connectée adaptée à différents usages, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger AC Wallbox" },
    { sectionIndex: 2, lead: "Pour arbitrer entre une ou deux bornes selon votre tableau,", href: "/devis/#quote-form", label: "demandez une étude multi-véhicules" },
  ],
  "entretien-borne-recharge-maintenance": [
    { sectionIndex: 0, lead: "Pour retrouver les caractéristiques et usages de la borne proposée, consultez", href: "/nos-produits/autel-maxicharger/", label: "la fiche de l’Autel MaxiCharger EVAtlas" },
    { sectionIndex: 1, lead: "Si vous préparez une nouvelle installation, parcourez", href: "/nos-produits/", label: "les solutions de recharge disponibles" },
    { sectionIndex: 2, lead: "Pour faire vérifier un projet avant sa mise en service,", href: "/devis/#quote-form", label: "transmettez les informations de votre installation" },
  ],
  "connecteur-type-2-ccs2-recharge-maroc": [
    { sectionIndex: 0, lead: "Pour relier le connecteur au modèle exact de votre voiture, utilisez", href: "/simulateur/", label: "la base véhicules du simulateur EVAtlas" },
    { sectionIndex: 1, lead: "Pour voir un exemple de borne AC Type 2, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 2, lead: "Pour confirmer le standard et la puissance adaptés à votre emplacement,", href: "/devis/#quote-form", label: "demandez une recommandation d’installation" },
  ],
  "cout-recharge-voiture-electrique-maroc": [
    { sectionIndex: 0, lead: "Pour partir d’une durée et d’une puissance réalistes, commencez par", href: "/simulateur/", label: "simuler la recharge de votre véhicule" },
    { sectionIndex: 1, lead: "Pour comprendre l’équipement associé à la recharge à domicile, consultez", href: "/nos-produits/autel-maxicharger/", label: "la borne connectée Autel MaxiCharger" },
    { sectionIndex: 2, lead: "Pour chiffrer l’installation en fonction de votre tableau et du cheminement,", href: "/devis/#quote-form", label: "obtenez une étude EVAtlas personnalisée" },
  ],
  "acheter-voiture-electrique-occasion-maroc": [
    { sectionIndex: 0, lead: "Après avoir identifié la batterie utile,", href: "/simulateur/", label: "estimez le temps de recharge du modèle d’occasion" },
    { sectionIndex: 1, lead: "Pour anticiper son équipement à domicile, explorez", href: "/nos-produits/", label: "les bornes de recharge proposées par EVAtlas" },
    { sectionIndex: 2, lead: "Une fois le véhicule choisi,", href: "/devis/#quote-form", label: "demandez une étude adaptée à votre stationnement" },
  ],
  "recharge-voiture-electrique-forte-chaleur-maroc": [
    { sectionIndex: 0, lead: "Pour comparer la durée théorique avec votre usage estival,", href: "/simulateur/", label: "calculez un scénario pour votre véhicule" },
    { sectionIndex: 1, lead: "Pour consulter une solution de recharge connectée, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée par EVAtlas" },
    { sectionIndex: 2, lead: "Pour vérifier l’emplacement, l’exposition et le circuit,", href: "/devis/#quote-form", label: "faites étudier votre installation au Maroc" },
  ],
  "recharge-voiture-electrique-prise-domestique-maroc": [
    { sectionIndex: 0, lead: "Pour comparer la prise domestique avec différentes puissances, utilisez", href: "/simulateur/", label: "le simulateur de recharge de voiture électrique" },
    { sectionIndex: 1, lead: "Pour découvrir une alternative dédiée et connectée, consultez", href: "/nos-produits/autel-maxicharger/", label: "la borne Autel MaxiCharger AC" },
    { sectionIndex: 2, lead: "Pour contrôler le circuit et définir une solution adaptée,", href: "/devis/#quote-form", label: "demandez une étude de votre installation" },
  ],
  "borne-recharge-monophase-triphase-maroc": [
    { sectionIndex: 0, lead: "Pour mesurer l’effet de la puissance sur votre voiture,", href: "/simulateur/", label: "comparez les temps de recharge possibles" },
    { sectionIndex: 1, lead: "Pour voir une borne configurable jusqu’à 22 kW, consultez", href: "/nos-produits/autel-maxicharger/", label: "les caractéristiques de l’Autel MaxiCharger" },
    { sectionIndex: 2, lead: "Le choix mono ou triphasé dépend du site :", href: "/devis/#quote-form", label: "faites vérifier votre alimentation électrique" },
  ],
  "preserver-batterie-voiture-electrique-maroc": [
    { sectionIndex: 0, lead: "Pour adapter la durée aux niveaux de départ et d’arrivée souhaités, utilisez", href: "/simulateur/", label: "le simulateur de recharge EVAtlas" },
    { sectionIndex: 1, lead: "Pour découvrir les fonctions de programmation d’une borne connectée, consultez", href: "/nos-produits/autel-maxicharger/", label: "la présentation de l’Autel MaxiCharger" },
    { sectionIndex: 2, lead: "Pour faire correspondre habitudes, véhicule et puissance disponible,", href: "/devis/#quote-form", label: "demandez une configuration personnalisée" },
  ],
};

export function getBlogInternalLinks(slug: string, sectionIndex: number) {
  return (blogInternalLinks[slug] ?? []).filter(
    (link) => link.sectionIndex === sectionIndex,
  );
}
