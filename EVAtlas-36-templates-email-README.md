# EVAtlas — 36 modèles d’e-mails commerciaux

Ce paquet contient les 36 modèles d’e-mails EVAtlas, leur design HTML responsive et les références nécessaires à leur rendu.

## Fichiers

- `lib/commercial-email-templates.ts` : contenu, objets, champs variables, pièces jointes et actions attendues des 36 e-mails.
- `lib/email-design.ts` : design HTML EVAtlas partagé avec les e-mails automatiques du site.
- `lib/site.ts` : URL et identité du site utilisées par le design.
- `data/contact.ts` : liens de contact et WhatsApp utilisés par certains boutons.

## Prompt conseillé pour ChatGPT

Téléversez l’archive puis utilisez ce prompt :

> Analyse tous les fichiers de cette archive. Les 36 modèles se trouvent dans `lib/commercial-email-templates.ts` et leur design se trouve dans `lib/email-design.ts`. Crée une prévisualisation fidèle de chaque modèle en respectant exactement le HTML, les couleurs, le logo, les boutons et la mise en page responsive EVAtlas. Conserve les champs entre crochets lorsqu’aucune valeur n’est fournie. Commence par afficher un sommaire numéroté des 36 modèles, puis demande-moi quel numéro je souhaite prévisualiser. Pour le modèle choisi, présente l’objet, le rendu visuel HTML, les champs à compléter, les pièces jointes et l’action attendue du client. N’invente aucun prix, délai, disponibilité ou condition.

## Règles importantes

- Les champs comme `[Prénom]`, `[Montant]` ou `[Référence du devis]` doivent être remplacés avant l’envoi.
- Les pièces jointes mentionnées ne sont pas intégrées automatiquement au modèle.
- Les frais de déplacement sont indiqués à `3 DH par kilomètre` sans préciser HT/TTC ni trajet simple/aller-retour.
- La puissance maximale annoncée de l’Autel MaxiCharger est de 22 kW, mais la puissance réelle dépend du véhicule et de l’installation.
- Les travaux et équipements supplémentaires restent facturés séparément après étude.

## Utilisation dans le code

La fonction `renderCommercialEmailTemplate(idOrSlug, variables)` produit :

- `subject` : l’objet personnalisé ;
- `text` : la version texte brut ;
- `html` : la version HTML responsive EVAtlas ;
- `template` : toutes les informations du modèle.

Exemple conceptuel :

```ts
const email = renderCommercialEmailTemplate(4, {
  Prénom: "Sara",
  "Référence du devis": "DEV-2026-001",
  "Rappel du projet": "installation d’une borne à Casablanca",
  "Solution retenue": "Autel MaxiCharger AC Wallbox",
  "Montant HT": "18 499 DH HT",
  "Montant TTC": "22 198,80 DH TTC",
  "Date de validité": "[À compléter]",
});
```
