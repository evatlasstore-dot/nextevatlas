export type DemoStory = {
  id: string;
  name: string;
  city: string;
  vehicle: string;
  installation: string;
  rating: 5;
  quote: string;
};

// Contenus provisoires uniquement : ces scénarios ne doivent pas être présentés
// comme des avis publiés ou vérifiés. À remplacer par des témoignages autorisés.
export const demoStories: DemoStory[] = [
  {
    id: "yasmine-casablanca",
    name: "Yasmine El Mansouri",
    city: "Casablanca",
    vehicle: "SUV électrique",
    installation: "Maison · pose murale",
    rating: 5,
    quote: "Les conseils reçus ont permis de choisir une puissance adaptée à la maison et à notre usage quotidien.",
  },
  {
    id: "hamza-rabat",
    name: "Hamza Benjelloun",
    city: "Rabat",
    vehicle: "Citadine électrique",
    installation: "Villa · recharge nocturne",
    rating: 5,
    quote: "L’installation à domicile a été bien préparée et l’application est très simple à utiliser.",
  },
  {
    id: "salma-marrakech",
    name: "Salma Alaoui",
    city: "Marrakech",
    vehicle: "Berline hybride rechargeable",
    installation: "Résidence · place privative",
    rating: 5,
    quote: "La configuration de la borne et la programmation des horaires ont été clairement expliquées.",
  },
  {
    id: "nabil-tanger",
    name: "Nabil Amrani",
    city: "Tanger",
    vehicle: "Crossover électrique",
    installation: "Entreprise · accès RFID",
    rating: 5,
    quote: "L’équipe a proposé une organisation claire des accès pour les différents utilisateurs de l’entreprise.",
  },
  {
    id: "kenza-casablanca",
    name: "Kenza Berrada",
    city: "Casablanca",
    vehicle: "Compacte électrique",
    installation: "Maison · câble 5 m",
    rating: 5,
    quote: "La prise en charge a été rapide, du premier échange jusqu’à la mise en service de la borne.",
  },
  {
    id: "othmane-agadir",
    name: "Othmane Chraïbi",
    city: "Agadir",
    vehicle: "SUV électrique",
    installation: "Hôtel · pose sur pied",
    rating: 5,
    quote: "Une solution discrète et facile d’accès pour les clients de l’hôtel, avec un accompagnement professionnel.",
  },
  {
    id: "imane-rabat",
    name: "Imane Tazi",
    city: "Rabat",
    vehicle: "SUV hybride rechargeable",
    installation: "Résidence · parking commun",
    rating: 5,
    quote: "Les contraintes du parking ont été prises en compte avant de recommander l’emplacement et le raccordement.",
  },
  {
    id: "karim-mohammedia",
    name: "Karim Lahlou",
    city: "Mohammedia",
    vehicle: "Berline électrique",
    installation: "Bureaux · parking privé",
    rating: 5,
    quote: "Le suivi après installation a été rassurant et nos questions ont reçu des réponses précises.",
  },
  {
    id: "nadia-casablanca",
    name: "Nadia Bennani",
    city: "Casablanca",
    vehicle: "Citadine électrique",
    installation: "Maison · garage privé",
    rating: 5,
    quote: "La borne s’intègre bien au garage et toute la famille a rapidement compris son fonctionnement.",
  },
];
