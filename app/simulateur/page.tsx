import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChargingSimulator from "@/components/forms/ChargingSimulator";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ReviewsSection from "@/components/shared/ReviewsSection";

export const metadata: Metadata = {
  title: "Simulateur de temps de recharge pour voiture électrique",
  description: "Estimez le temps de recharge de votre véhicule électrique selon la capacité de sa batterie, son niveau de charge et la puissance de la borne.",
  keywords: ["Simulateur recharge voiture électrique", "Temps de recharge borne 7 kW", "Recharge 11 kW 22 kW", "Borne électrique Maroc"],
  alternates: { canonical: "/simulateur" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    title: "Estimez votre temps de recharge avec EVAtlas",
    description: "Un calcul simple et transparent selon votre batterie et la puissance disponible.",
    images: [{ url: "/images/product/autel-maxicharger/hero-poster.png", width: 1280, height: 720, alt: "Simulation du temps de recharge avec une Autel MaxiCharger" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/product/autel-maxicharger/hero-poster.png"] },
};

export default function SimulatorPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="sim-page">
        <section className="sim-hero" aria-labelledby="sim-page-title">
          <div className="sim-hero-shell">
            <div className="sim-breadcrumb"><TrackedLink href="/">Accueil</TrackedLink><span aria-hidden="true">/</span><span>Simulateur</span></div>
            <div className="sim-hero-layout">
              <div className="sim-hero-copy">
                <p className="sim-hero-eyebrow">Comprendre avant de choisir</p>
                <h1 id="sim-page-title">Votre recharge, traduite en temps réel.</h1>
                <p>Visualisez l’effet de la capacité, du niveau de batterie et de la puissance disponible avant de préparer votre installation.</p>
              </div>
              <aside className="sim-hero-card" aria-label="Principes du simulateur">
                <p><span>4</span>données seulement</p>
                <ul>
                  <li><Icon name="check" size={15} /> Résultat immédiat</li>
                  <li><Icon name="check" size={15} /> Hypothèse expliquée</li>
                  <li><Icon name="check" size={15} /> Simulation conservée pour le devis</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>
        <ChargingSimulator />
        <ReviewsSection title="Des usages différents, une estimation lisible." ids={["kenza-casablanca", "hamza-rabat", "nabil-tanger"]} />
      </main>
      <Footer />
    </>
  );
}
