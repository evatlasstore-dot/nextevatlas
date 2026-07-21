# EVAtlas

Site vitrine Next.js d’EVAtlas pour la présentation, la comparaison et l’installation de bornes de recharge au Maroc.

## Démarrage local

```bash
npm install
npm run dev
```

Le site complet est ensuite accessible sur une seule adresse : `http://localhost:3000`.

## Version statique déployable

Le projet est configuré pour exporter toutes les pages, les scripts, les styles,
les images et les vidéos dans un seul dossier : `out/`.

```bash
npm run build
python3 -m http.server 3000 --directory out
```

La version statique est alors disponible sur `http://localhost:3000`. Pour la
mise en ligne, publier le contenu complet du dossier `out/` à la racine de
l’hébergement. Le site doit être servi par HTTP(S), et non ouvert directement
avec un double-clic sur `index.html`.

## Pages disponibles

- `/` — accueil
- `/nos-produits` — catalogue et aide au choix
- `/nos-produits/autel-maxicharger` — expérience produit Autel MaxiCharger
- `/simulateur` — estimation interactive du temps de recharge
- `/devis` — demande guidée en trois étapes, finalisée par l’utilisateur dans WhatsApp
- `/a-propos` — présentation d’EVAtlas et de sa méthode
- `/faq` — questions fréquentes
- `/blog` — centre de conseils et six guides complets
- `/mentions-legales`, `/politique-de-confidentialite`, `/cookies`, `/conditions-generales`

## Contenu et expérience

- Interface responsive pour mobile, tablette et ordinateur
- Navigation accessible au clavier, lien d’évitement et états de focus
- Expérience produit vidéo et vue éclatée adaptée au tactile
- Formulaire de devis avec validation et récapitulatif transparent
- Simulateur de recharge avec passage des résultats vers le devis
- Avis de démonstration explicitement signalés comme fictifs
- Six illustrations éditoriales originales générées pour le blog
- Métadonnées, données structurées, sitemap, robots et manifeste
- Pages d’erreur et page 404 cohérentes avec le design du site

## Blog

Les contenus détaillés sont centralisés dans `data/blog.ts`. Chaque article dispose d’une URL dédiée, d’un sommaire, de sections structurées, d’une FAQ, de recommandations connexes et de données structurées adaptées.

## Vérifications

```bash
npm run build
npx tsc --noEmit --incremental false
```

Avant une mise en ligne publique, compléter les mentions relatives à l’identité juridique et à l’hébergeur, confirmer les coordonnées de contact, puis remplacer les avis de démonstration par des témoignages réels et autorisés.
