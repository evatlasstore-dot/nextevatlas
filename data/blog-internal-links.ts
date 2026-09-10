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
  "reglementation-trottinette-electrique-maroc-2026": [
    { sectionIndex: 0, lead: "Pour replacer cette actualité dans la transformation des transports, consultez", href: "/blog/mobilite-durable-maroc-2026-transport-electrique/", label: "le dossier sur la mobilité durable au Maroc" },
    { sectionIndex: 2, lead: "Pour les batteries amovibles de deux-roues, lisez aussi", href: "/blog/scooter-moto-electrique-maroc-recharge-securite/", label: "le guide de recharge des scooters électriques" },
    { sectionIndex: 4, lead: "Si votre projet concerne une voiture rechargeable, découvrez", href: "/nos-produits/", label: "les solutions automobiles EVAtlas" },
  ],
  "borne-recharge-aeroport-maroc-stationnement-longue-duree": [
    { sectionIndex: 0, lead: "Pour convertir l’énergie du trajet retour en durée, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par véhicule" },
    { sectionIndex: 2, lead: "Pour préparer les applications, tarifs et moyens d’accès, consultez", href: "/blog/prix-paiement-roaming-borne-recharge-publique/", label: "le guide de la recharge publique" },
    { sectionIndex: 3, lead: "Pour partir avec une solution principale à domicile, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
  ],
  "ferry-maroc-europe-voiture-electrique-preparation": [
    { sectionIndex: 0, lead: "Pour construire l’ensemble de l’itinéraire avant et après la traversée, consultez", href: "/blog/voyage-voiture-electrique-maroc/", label: "le guide du voyage électrique au Maroc" },
    { sectionIndex: 4, lead: "Pour vérifier l’énergie nécessaire avant le port, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge" },
    { sectionIndex: 4, lead: "Pour organiser cette recharge sur votre stationnement, demandez", href: "/devis/#quote-form", label: "une étude personnalisée EVAtlas" },
  ],
  "remorque-caravane-voiture-electrique-maroc-autonomie-recharge": [
    { sectionIndex: 1, lead: "Pour distinguer valeur d’homologation et consommation réelle, lisez", href: "/blog/autonomie-wltp-reelle-voiture-electrique-maroc/", label: "le guide de l’autonomie WLTP" },
    { sectionIndex: 2, lead: "Pour intégrer également le relief marocain, consultez", href: "/blog/voiture-electrique-montagne-maroc-autonomie/", label: "le dossier de la conduite en montagne" },
    { sectionIndex: 4, lead: "Pour transformer vos kWh en durée de charge, ouvrez", href: "/simulateur/", label: "le simulateur EVAtlas" },
  ],
  "accident-voiture-electrique-remorquage-securite-maroc": [
    { sectionIndex: 1, lead: "Pour anticiper aussi la déclaration et les garanties, consultez", href: "/blog/assurance-voiture-electrique-maroc-2026/", label: "le guide de l’assurance automobile électrique" },
    { sectionIndex: 3, lead: "Si le véhicule a été exposé à l’eau, lisez", href: "/blog/voiture-electrique-inondation-maroc-securite/", label: "les précautions après une inondation" },
    { sectionIndex: 4, lead: "Pour une installation sans dommage et correctement dimensionnée, demandez", href: "/devis/#quote-form", label: "une étude technique EVAtlas" },
  ],
  "borne-recharge-bord-mer-maroc-corrosion-embruns": [
    { sectionIndex: 1, lead: "Pour approfondir les indices et l’exposition climatique, consultez", href: "/blog/borne-recharge-exterieure-maroc/", label: "le guide de la borne extérieure" },
    { sectionIndex: 4, lead: "Pour organiser les contrôles après la pose, lisez", href: "/blog/entretien-borne-recharge-maintenance/", label: "le guide d’entretien de la borne" },
    { sectionIndex: 4, lead: "Pour faire documenter votre site côtier, demandez", href: "/devis/#quote-form", label: "un devis d’installation personnalisé" },
  ],
  "maison-secondaire-maroc-borne-recharge-gestion-distance": [
    { sectionIndex: 1, lead: "Pour comprendre la modulation de puissance entre les appareils, consultez", href: "/blog/borne-recharge-intelligente-delestage/", label: "le guide du délestage intelligent" },
    { sectionIndex: 2, lead: "Pour protéger comptes, accès et mises à jour, lisez", href: "/blog/cybersecurite-borne-recharge-connectee-maroc/", label: "les bonnes pratiques de cybersécurité" },
    { sectionIndex: 4, lead: "Pour configurer une solution selon votre résidence, demandez", href: "/devis/#quote-form", label: "une étude EVAtlas" },
  ],
  "cable-borne-recharge-longueur-rangement-securite": [
    { sectionIndex: 0, lead: "Pour inclure aussi le cheminement électrique depuis le tableau, consultez", href: "/blog/distance-tableau-borne-recharge-maroc/", label: "le guide de la distance tableau-borne" },
    { sectionIndex: 2, lead: "Pour préserver un passage utilisable par tous, lisez", href: "/blog/borne-recharge-accessible-pmr-parking-maroc/", label: "le guide d’accessibilité du parking" },
    { sectionIndex: 4, lead: "Pour positionner la borne autour de votre véhicule, demandez", href: "/devis/#quote-form", label: "une étude d’implantation EVAtlas" },
  ],
  "voiture-electrique-coffre-toit-porte-velos-autonomie": [
    { sectionIndex: 0, lead: "Pour comprendre l’écart entre homologation et route réelle, consultez", href: "/blog/autonomie-wltp-reelle-voiture-electrique-maroc/", label: "le guide de l’autonomie WLTP" },
    { sectionIndex: 3, lead: "Pour planifier aussi les arrêts et alternatives, lisez", href: "/blog/voyage-voiture-electrique-maroc/", label: "la méthode du voyage électrique au Maroc" },
    { sectionIndex: 4, lead: "Pour estimer votre recharge avant le départ, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas" },
  ],
  "recharge-automatique-sous-vehicule-iec-61851-26-2026": [
    { sectionIndex: 0, lead: "Pour comparer avec une technologie réellement sans contact, consultez", href: "/blog/recharge-sans-fil-voiture-electrique-maroc/", label: "le dossier de la recharge par induction" },
    { sectionIndex: 1, lead: "Pour suivre le cadre national en construction, lisez", href: "/blog/normes-marocaines-bornes-recharge-2026/", label: "l’analyse des normes marocaines" },
    { sectionIndex: 4, lead: "Pour une solution AC disponible aujourd’hui, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée par EVAtlas" },
  ],
  "importer-voiture-electrique-maroc-compatibilite-recharge": [
    { sectionIndex: 0, lead: "Pour intégrer les taxes et formalités au budget global, consultez", href: "/blog/fiscalite-voiture-electrique-maroc-2026/", label: "le guide de la fiscalité automobile au Maroc" },
    { sectionIndex: 2, lead: "Pour identifier les standards de prise avant l’achat, lisez", href: "/blog/connecteur-type-2-ccs2-recharge-maroc/", label: "le comparatif Type 2 et CCS2" },
    { sectionIndex: 4, lead: "Pour vérifier votre stationnement et votre tableau avant l’arrivée du véhicule, demandez", href: "/devis/#quote-form", label: "une étude de recharge EVAtlas" },
  ],
  "batterie-lfp-nmc-voiture-electrique-maroc": [
    { sectionIndex: 1, lead: "Pour distinguer capacité annoncée, capacité utile et état de santé, consultez", href: "/blog/capacite-brute-utile-soc-soh-batterie/", label: "le lexique pratique de la batterie" },
    { sectionIndex: 3, lead: "Pour adopter une routine adaptée sans règles absolues, lisez", href: "/blog/preserver-batterie-voiture-electrique-maroc/", label: "les conseils de préservation de la batterie" },
    { sectionIndex: 4, lead: "Pour relier la capacité utile de votre modèle à une durée réaliste, utilisez", href: "/simulateur/", label: "le simulateur de recharge EVAtlas" },
  ],
  "voiture-electrique-inondation-maroc-securite": [
    { sectionIndex: 0, lead: "Pour distinguer pluie normale et exposition à une inondation, consultez", href: "/blog/recharger-voiture-electrique-sous-la-pluie-maroc/", label: "le guide de recharge sous la pluie" },
    { sectionIndex: 2, lead: "Pour préparer aussi la circulation et les équipements d’un sous-sol, lisez", href: "/blog/borne-recharge-parking-souterrain-maroc/", label: "le guide du parking souterrain" },
    { sectionIndex: 4, lead: "Après contrôle du véhicule, faites également examiner votre point de charge avec", href: "/devis/#quote-form", label: "une étude technique EVAtlas" },
  ],
  "borne-recharge-locataire-immeuble-maroc": [
    { sectionIndex: 0, lead: "Pour replacer la demande dans l’organisation d’un immeuble, consultez", href: "/blog/borne-recharge-entreprise-copropriete-maroc/", label: "le guide de la recharge en copropriété" },
    { sectionIndex: 1, lead: "Pour comprendre l’impact du cheminement sur le projet, lisez", href: "/blog/distance-tableau-borne-recharge-maroc/", label: "le dossier sur la distance tableau-borne" },
    { sectionIndex: 4, lead: "Pour documenter votre place et obtenir un scénario adapté, demandez", href: "/devis/#quote-form", label: "un devis de borne de recharge" },
  ],
  "entretien-voiture-electrique-maroc-couts-controles": [
    { sectionIndex: 1, lead: "Pour comprendre l’influence des pneumatiques sur consommation et sécurité, consultez", href: "/blog/pneus-voiture-electrique-autonomie-maroc/", label: "le guide des pneus pour véhicule électrique" },
    { sectionIndex: 2, lead: "Pour reconnaître une panne souvent confondue avec la batterie de traction, lisez", href: "/blog/batterie-12v-voiture-electrique-panne/", label: "le dossier sur la batterie 12 V" },
    { sectionIndex: 4, lead: "Pour compléter l’entretien du véhicule par une recharge régulière à domicile, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée par EVAtlas" },
  ],
  "etiquette-borne-recharge-publique-maroc": [
    { sectionIndex: 0, lead: "Pour anticiper tarifs, applications et moyens de paiement, consultez", href: "/blog/prix-paiement-roaming-borne-recharge-publique/", label: "le guide de la recharge publique" },
    { sectionIndex: 2, lead: "Pour comprendre pourquoi les derniers pourcents prennent davantage de temps, lisez", href: "/blog/courbe-recharge-rapide-10-80-pourcent/", label: "l’explication de la courbe 10–80 %" },
    { sectionIndex: 4, lead: "Pour partir avec l’énergie nécessaire avant un long trajet, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge" },
  ],
  "recharge-sans-fil-voiture-electrique-maroc": [
    { sectionIndex: 2, lead: "Pour suivre les référentiels étudiés au Maroc, consultez", href: "/blog/normes-marocaines-bornes-recharge-2026/", label: "le point sur la normalisation de la recharge" },
    { sectionIndex: 3, lead: "Pour concevoir un emplacement utilisable par davantage de conducteurs, lisez", href: "/blog/borne-recharge-accessible-pmr-parking-maroc/", label: "le guide d’accessibilité des places de recharge" },
    { sectionIndex: 4, lead: "Pour une solution filaire AC disponible et installée aujourd’hui, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
  ],
  "echange-batterie-swap-maroc": [
    { sectionIndex: 1, lead: "Pour approfondir la recharge des deux-roues et leurs batteries, consultez", href: "/blog/scooter-moto-electrique-maroc-recharge-securite/", label: "le guide du scooter électrique au Maroc" },
    { sectionIndex: 2, lead: "Pour structurer les rotations d’un parc urbain, lisez", href: "/blog/flotte-electrique-dernier-kilometre-maroc/", label: "la méthode du dernier kilomètre électrique" },
    { sectionIndex: 4, lead: "Si votre parc comprend aussi des voitures ou utilitaires rechargeables, explorez", href: "/nos-produits/", label: "les solutions de recharge EVAtlas" },
  ],
  "camion-electrique-maroc-recharge-depot-megawatt": [
    { sectionIndex: 0, lead: "Pour cadrer les coûts d’une transition de parc, consultez", href: "/blog/tco-flotte-voitures-electriques-maroc/", label: "la méthode TCO pour flotte électrique" },
    { sectionIndex: 2, lead: "Pour comparer avec un autre usage lourd organisé au dépôt, lisez", href: "/blog/bus-electrique-maroc-recharge-depot-opportunite/", label: "le dossier sur la recharge des bus électriques" },
    { sectionIndex: 4, lead: "Pour vos voitures et utilitaires légers, vous pouvez demander", href: "/devis/#quote-form", label: "une étude de recharge professionnelle EVAtlas" },
  ],
  "voiture-electrique-autonomie-prolongee-erev-maroc": [
    { sectionIndex: 0, lead: "Pour situer cette architecture parmi les autres motorisations, consultez", href: "/blog/hev-phev-bev-maroc-differences-recharge/", label: "le comparatif HEV, PHEV et BEV" },
    { sectionIndex: 2, lead: "Pour comprendre la limite qui encadre sa recharge AC, lisez", href: "/blog/chargeur-embarque-voiture-electrique-22-kw/", label: "le guide du chargeur embarqué" },
    { sectionIndex: 4, lead: "Pour estimer une durée selon le modèle et la puissance disponible, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas" },
  ],
  "neo-motors-dial-e-voiture-electrique-marocaine": [
    { sectionIndex: 1, lead: "Pour transformer l’autonomie annoncée en durée de charge, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par modèle" },
    { sectionIndex: 2, lead: "Pour comprendre pourquoi la limite AC du véhicule est déterminante, consultez", href: "/blog/chargeur-embarque-voiture-electrique-22-kw/", label: "le guide du chargeur embarqué" },
    { sectionIndex: 4, lead: "Lorsque la fiche technique exacte est disponible, vous pouvez", href: "/devis/#quote-form", label: "faire étudier votre installation à domicile" },
  ],
  "dacia-hybrid-155-maroc-recharge-ou-non": [
    { sectionIndex: 0, lead: "Pour comparer clairement full hybrid, PHEV et 100 % électrique, lisez", href: "/blog/hev-phev-bev-maroc-differences-recharge/", label: "le guide des motorisations électrifiées" },
    { sectionIndex: 1, lead: "Si votre véhicule possède réellement une prise, estimez sa durée avec", href: "/simulateur/", label: "le simulateur de recharge par véhicule" },
    { sectionIndex: 4, lead: "Pour préparer un futur PHEV ou véhicule électrique sans surdimensionner, demandez", href: "/devis/#quote-form", label: "une étude préalable de votre stationnement" },
  ],
  "bus-electrique-maroc-recharge-depot-opportunite": [
    { sectionIndex: 1, lead: "Pour approfondir le calcul économique d’un parc de véhicules, consultez", href: "/blog/tco-flotte-voitures-electriques-maroc/", label: "la méthode TCO pour flotte électrique" },
    { sectionIndex: 2, lead: "Pour comprendre la coordination logicielle de plusieurs points, découvrez", href: "/blog/ocpp-borne-recharge-entreprise-maroc/", label: "le rôle d’OCPP dans un site professionnel" },
    { sectionIndex: 4, lead: "Pour dimensionner une flotte légère à partir de ses horaires, demandez", href: "/devis/#quote-form", label: "une étude professionnelle EVAtlas" },
  ],
  "taxi-electrique-maroc-recharge-flotte": [
    { sectionIndex: 0, lead: "Pour convertir les kilomètres quotidiens en besoin énergétique, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas" },
    { sectionIndex: 2, lead: "Pour préparer les compléments sur les grands axes, consultez", href: "/blog/autoroutes-maroc-bornes-recharge-strategie-adm/", label: "le point sur la recharge autoroutière au Maroc" },
    { sectionIndex: 4, lead: "Pour confronter vos rotations à la puissance du dépôt, demandez", href: "/devis/#quote-form", label: "une étude de flotte personnalisée" },
  ],
  "borne-recharge-accessible-pmr-parking-maroc": [
    { sectionIndex: 0, lead: "Pour intégrer aussi la circulation et la sécurité d’un sous-sol, consultez", href: "/blog/borne-recharge-parking-souterrain-maroc/", label: "le guide du parking souterrain" },
    { sectionIndex: 2, lead: "Pour examiner une borne AC connectée et ses modes d’accès, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée par EVAtlas" },
    { sectionIndex: 4, lead: "Pour documenter votre place et son cheminement avant les travaux, demandez", href: "/devis/#quote-form", label: "une étude d’implantation" },
  ],
  "recharge-ultra-rapide-150-250-350-kw-maroc": [
    { sectionIndex: 0, lead: "Pour comprendre la baisse de puissance pendant la session, lisez", href: "/blog/courbe-recharge-rapide-10-80-pourcent/", label: "le guide de la courbe 10–80 %" },
    { sectionIndex: 2, lead: "Pour préparer la batterie avant un arrêt rapide, consultez", href: "/blog/preconditionnement-batterie-recharge-rapide/", label: "les principes du préconditionnement" },
    { sectionIndex: 4, lead: "Pour réduire les arrêts en partant avec le bon niveau, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la recharge AC connectée à domicile" },
  ],
  "recharge-ac-dc-difference-voiture-electrique": [
    { sectionIndex: 1, lead: "Pour vérifier la puissance AC du modèle que vous conduisez, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par véhicule" },
    { sectionIndex: 2, lead: "Pour distinguer aussi Type 2 et CCS2, consultez", href: "/blog/connecteur-type-2-ccs2-recharge-maroc/", label: "le guide des connecteurs de recharge" },
    { sectionIndex: 4, lead: "Pour faire correspondre cette limite AC à votre tableau, demandez", href: "/devis/#quote-form", label: "un dimensionnement de votre installation" },
  ],
  "prix-paiement-roaming-borne-recharge-publique": [
    { sectionIndex: 0, lead: "Pour comparer ces tarifs au coût d’une session à domicile, consultez", href: "/blog/cout-recharge-voiture-electrique-maroc/", label: "le guide du coût de recharge au Maroc" },
    { sectionIndex: 3, lead: "Pour estimer l’énergie et le temps nécessaires avant de payer, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas" },
    { sectionIndex: 4, lead: "Pour disposer d’une solution principale sur votre stationnement, découvrez", href: "/nos-produits/autel-maxicharger/", label: "la borne connectée Autel MaxiCharger" },
  ],
  "protections-electriques-borne-recharge-differentiel-parafoudre": [
    { sectionIndex: 0, lead: "Pour replacer ces protections dans un chantier complet, consultez", href: "/blog/installer-borne-recharge-maison-maroc/", label: "les étapes d’une installation à domicile" },
    { sectionIndex: 2, lead: "Pour voir les caractéristiques visibles de l’équipement proposé, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 4, lead: "Pour faire analyser le tableau, la terre et le cheminement, demandez", href: "/devis/#quote-form", label: "une étude technique EVAtlas" },
  ],
  "scooter-moto-electrique-maroc-recharge-securite": [
    { sectionIndex: 0, lead: "Pour lire aussi l’actualité du trois-roues fabriqué au Maroc, consultez", href: "/blog/fiat-tris-electrique-maroc-professionnels/", label: "le dossier consacré au Fiat Tris" },
    { sectionIndex: 2, lead: "Pour comprendre les précautions communes face à la chaleur, lisez", href: "/blog/recharge-voiture-electrique-forte-chaleur-maroc/", label: "le guide de recharge par forte température" },
    { sectionIndex: 4, lead: "Si votre projet concerne désormais une voiture rechargeable, explorez", href: "/nos-produits/", label: "les solutions de recharge automobile EVAtlas" },
  ],
  "recharge-intelligente-heures-pointe-maroc": [
    { sectionIndex: 0, lead: "Pour approfondir la limitation dynamique dans le bâtiment, consultez", href: "/blog/borne-recharge-intelligente-delestage/", label: "le guide du délestage pour borne de recharge" },
    { sectionIndex: 2, lead: "Pour estimer l’énergie à récupérer avant le départ, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par véhicule" },
    { sectionIndex: 4, lead: "Pour faire vérifier le tableau et programmer une solution adaptée, demandez", href: "/devis/#quote-form", label: "une étude de recharge intelligente" },
  ],
  "certificats-origine-electricite-recharge-maroc": [
    { sectionIndex: 2, lead: "Pour distinguer ces certificats d’une production réellement située sur place, lisez", href: "/blog/recharge-voiture-electrique-solaire-maroc/", label: "le guide de la recharge solaire au Maroc" },
    { sectionIndex: 3, lead: "Pour structurer les sessions de plusieurs véhicules, découvrez", href: "/blog/ocpp-borne-recharge-entreprise-maroc/", label: "le rôle d’OCPP dans une infrastructure professionnelle" },
    { sectionIndex: 4, lead: "Pour présenter le périmètre énergétique de votre site, demandez", href: "/devis/#quote-form", label: "une étude EVAtlas personnalisée" },
  ],
  "fiscalite-voiture-electrique-maroc-2026": [
    { sectionIndex: 1, lead: "Pour compléter le budget d’acquisition avec les coûts d’usage, consultez", href: "/blog/cout-recharge-voiture-electrique-maroc/", label: "le guide du coût de recharge au Maroc" },
    { sectionIndex: 2, lead: "Avant d’acheter un véhicule déjà immatriculé, parcourez", href: "/blog/acheter-voiture-electrique-occasion-maroc/", label: "la check-list de la voiture électrique d’occasion" },
    { sectionIndex: 4, lead: "Pour ajouter un chiffrage d’installation à votre dossier, vous pouvez", href: "/devis/#quote-form", label: "demander un devis de borne de recharge" },
  ],
  "batterie-12v-voiture-electrique-panne": [
    { sectionIndex: 1, lead: "Pour distinguer cette panne d’une batterie de traction vide, lisez", href: "/blog/batterie-faible-panne-voiture-electrique-maroc/", label: "les réflexes en cas d’autonomie épuisée" },
    { sectionIndex: 4, lead: "Pour diagnostiquer plutôt une session qui refuse de démarrer, consultez", href: "/blog/recharge-ne-demarre-pas-cable-bloque/", label: "le guide de dépannage du câble et de la borne" },
    { sectionIndex: 4, lead: "Pour disposer d’une installation testée et expliquée, demandez", href: "/devis/#quote-form", label: "une étude de recharge EVAtlas" },
  ],
  "cable-recharge-mode-2-mode-3-maroc": [
    { sectionIndex: 0, lead: "Pour différencier aussi Type 2 et CCS2, consultez", href: "/blog/connecteur-type-2-ccs2-recharge-maroc/", label: "le guide des connecteurs de recharge" },
    { sectionIndex: 2, lead: "Pour voir une borne AC Type 2 proposée au Maroc, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger jusqu’à 22 kW" },
    { sectionIndex: 4, lead: "Pour valider câble, phases et circuit dédié, demandez", href: "/devis/#quote-form", label: "une configuration adaptée à votre véhicule" },
  ],
  "mise-a-jour-logicielle-ota-voiture-electrique": [
    { sectionIndex: 1, lead: "Pour comprendre les limites physiques derrière le logiciel, lisez", href: "/blog/chargeur-embarque-voiture-electrique-22-kw/", label: "le guide du chargeur embarqué AC" },
    { sectionIndex: 4, lead: "Pour protéger également le compte et la borne, consultez", href: "/blog/cybersecurite-borne-recharge-connectee-maroc/", label: "les bonnes pratiques de cybersécurité" },
    { sectionIndex: 4, lead: "Pour découvrir une borne connectée configurée localement, explorez", href: "/nos-produits/autel-maxicharger/", label: "la page de l’Autel MaxiCharger" },
  ],
  "borne-recharge-centre-commercial-restaurant-maroc": [
    { sectionIndex: 0, lead: "Pour comparer ce service avec la recharge de nuit à destination, consultez", href: "/blog/borne-recharge-hotel-riad-maroc/", label: "le guide pour hôtels et riads" },
    { sectionIndex: 1, lead: "Pour vérifier le temps de recharge de plusieurs modèles, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas" },
    { sectionIndex: 4, lead: "Pour dimensionner parking, rotation et puissance, demandez", href: "/devis/#quote-form", label: "une étude dédiée à votre commerce" },
  ],
  "tco-flotte-voitures-electriques-maroc": [
    { sectionIndex: 1, lead: "Pour construire les hypothèses d’une flotte urbaine, lisez", href: "/blog/flotte-electrique-dernier-kilometre-maroc/", label: "le guide du dernier kilomètre électrique" },
    { sectionIndex: 2, lead: "Pour examiner une borne AC connectée destinée aux sites professionnels, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger proposée par EVAtlas" },
    { sectionIndex: 4, lead: "Pour remplacer les hypothèses d’infrastructure par une étude de site, demandez", href: "/devis/#quote-form", label: "un dimensionnement de flotte" },
  ],
  "mobilite-durable-maroc-2026-transport-electrique": [
    { sectionIndex: 1, lead: "Pour suivre la complémentarité avec les bornes publiques, consultez", href: "/blog/reseau-bornes-publiques-maroc-lecons-2026/", label: "l’état des lieux de la recharge publique au Maroc" },
    { sectionIndex: 3, lead: "Pour estimer une recharge pendant les heures de stationnement, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge" },
    { sectionIndex: 4, lead: "Pour traduire vos trajets en équipement concret, demandez", href: "/devis/#quote-form", label: "une étude EVAtlas au Maroc" },
  ],
  "emplois-competences-vehicule-electrique-maroc-2026": [
    { sectionIndex: 0, lead: "Pour comprendre le contexte industriel complet, consultez", href: "/blog/maroc-hub-industrie-vehicule-electrique-2026/", label: "l’analyse du hub électrique marocain" },
    { sectionIndex: 3, lead: "Pour voir un exemple concret de borne connectée et de ses usages, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger AC Wallbox" },
    { sectionIndex: 4, lead: "Pour comprendre le parcours d’un projet client réel, explorez", href: "/devis/#quote-form", label: "les informations demandées pour une étude EVAtlas" },
  ],
  "courbe-recharge-rapide-10-80-pourcent": [
    { sectionIndex: 1, lead: "Pour préparer la température avant une station rapide, consultez", href: "/blog/preconditionnement-batterie-recharge-rapide/", label: "le guide du préconditionnement de batterie" },
    { sectionIndex: 2, lead: "Pour estimer plutôt votre recharge régulière en AC, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas par véhicule" },
    { sectionIndex: 4, lead: "Pour organiser cette recharge à votre stationnement, découvrez", href: "/nos-produits/autel-maxicharger/", label: "l’Autel MaxiCharger connectée" },
  ],
  "recharger-batterie-80-ou-100-pourcent": [
    { sectionIndex: 0, lead: "Pour replacer la limite dans une routine complète, lisez", href: "/blog/preserver-batterie-voiture-electrique-maroc/", label: "les conseils de préservation de la batterie" },
    { sectionIndex: 3, lead: "Pour voir les fonctions de programmation disponibles, consultez", href: "/nos-produits/autel-maxicharger/", label: "la borne connectée Autel MaxiCharger" },
    { sectionIndex: 4, lead: "Pour calculer la durée entre deux niveaux de charge, lancez", href: "/simulateur/", label: "une simulation avec votre modèle" },
  ],
  "capacite-brute-utile-soc-soh-batterie": [
    { sectionIndex: 1, lead: "Pour convertir une capacité utile en durée estimée, utilisez", href: "/simulateur/", label: "le calculateur de recharge EVAtlas" },
    { sectionIndex: 2, lead: "Avant l’achat d’un véhicule déjà immatriculé, consultez", href: "/blog/acheter-voiture-electrique-occasion-maroc/", label: "la check-list de l’électrique d’occasion" },
    { sectionIndex: 4, lead: "Pour faire correspondre la batterie au circuit disponible, demandez", href: "/devis/#quote-form", label: "une étude personnalisée de l’installation" },
  ],
  "freinage-regeneratif-one-pedal-maroc": [
    { sectionIndex: 2, lead: "Pour comprendre aussi l’effet d’une batterie presque pleine, lisez", href: "/blog/recharger-batterie-80-ou-100-pourcent/", label: "le guide des limites de recharge" },
    { sectionIndex: 3, lead: "Pour préparer vos trajets avec du relief, consultez", href: "/blog/voiture-electrique-montagne-maroc-autonomie/", label: "le guide de l’autonomie en montagne" },
    { sectionIndex: 4, lead: "Pour récupérer à domicile l’énergie nette consommée, utilisez", href: "/simulateur/", label: "le simulateur de temps de recharge" },
  ],
  "pompe-a-chaleur-voiture-electrique-maroc": [
    { sectionIndex: 1, lead: "Pour lire l’autonomie annoncée avec davantage de recul, consultez", href: "/blog/autonomie-wltp-reelle-voiture-electrique-maroc/", label: "le guide WLTP et autonomie réelle" },
    { sectionIndex: 3, lead: "Pour estimer une récupération d’énergie avant le départ, utilisez", href: "/simulateur/", label: "le simulateur EVAtlas" },
    { sectionIndex: 4, lead: "Pour programmer une recharge adaptée à votre stationnement, demandez", href: "/devis/#quote-form", label: "une étude de borne au Maroc" },
  ],
  "v2l-voiture-electrique-alimenter-appareils": [
    { sectionIndex: 0, lead: "Pour distinguer les fonctions liées au bâtiment et au réseau, consultez", href: "/blog/v2g-v2h-recharge-bidirectionnelle-maroc/", label: "le guide V2H et V2G" },
    { sectionIndex: 2, lead: "Pour replacer l’énergie consommée dans la capacité disponible, lisez", href: "/blog/capacite-brute-utile-soc-soh-batterie/", label: "les repères SoC, SoH et capacité utile" },
    { sectionIndex: 4, lead: "Pour récupérer ensuite cette énergie sur une borne AC, calculez", href: "/simulateur/", label: "votre scénario de recharge" },
  ],
  "architecture-400-800-volts-voiture-electrique": [
    { sectionIndex: 1, lead: "Pour comparer correctement le pic et la durée réelle, découvrez", href: "/blog/courbe-recharge-rapide-10-80-pourcent/", label: "le guide de la courbe 10–80 %" },
    { sectionIndex: 3, lead: "Pour connaître la limite AC de votre modèle, utilisez", href: "/simulateur/", label: "le simulateur par marque et véhicule" },
    { sectionIndex: 4, lead: "Pour voir une borne AC configurable selon le site, consultez", href: "/nos-produits/autel-maxicharger/", label: "la MaxiCharger jusqu’à 22 kW" },
  ],
  "recharge-ne-demarre-pas-cable-bloque": [
    { sectionIndex: 0, lead: "Pour les précautions spécifiques à l’humidité, lisez", href: "/blog/recharger-voiture-electrique-sous-la-pluie-maroc/", label: "le guide de recharge sous la pluie" },
    { sectionIndex: 3, lead: "Pour planifier l’entretien préventif de l’équipement, consultez", href: "/blog/entretien-borne-recharge-maintenance/", label: "le calendrier de maintenance d’une borne" },
    { sectionIndex: 4, lead: "Pour bénéficier d’une installation configurée et expliquée, demandez", href: "/devis/#quote-form", label: "une étude EVAtlas" },
  ],
  "borne-recharge-salaries-entreprise-maroc": [
    { sectionIndex: 1, lead: "Pour comparer la recharge d’une journée de travail selon les modèles, utilisez", href: "/simulateur/", label: "le simulateur de recharge EVAtlas" },
    { sectionIndex: 3, lead: "Pour approfondir la supervision de plusieurs points, consultez", href: "/blog/ocpp-borne-recharge-entreprise-maroc/", label: "le guide OCPP pour les entreprises" },
    { sectionIndex: 4, lead: "Pour dimensionner votre parking et son évolution, demandez", href: "/devis/#quote-form", label: "une étude de recharge pour collaborateurs" },
  ],
  "location-voiture-electrique-tourisme-maroc": [
    { sectionIndex: 1, lead: "Pour remettre au voyageur un parcours cohérent, complétez avec", href: "/blog/voyage-voiture-electrique-maroc/", label: "le guide du voyage électrique au Maroc" },
    { sectionIndex: 2, lead: "Pour équiper aussi les nuits à destination, consultez", href: "/blog/borne-recharge-hotel-riad-maroc/", label: "le guide des bornes pour hôtels et riads" },
    { sectionIndex: 3, lead: "Pour étudier les rotations et la puissance de votre dépôt, demandez", href: "/devis/#quote-form", label: "une configuration professionnelle EVAtlas" },
  ],
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
