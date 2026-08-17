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
