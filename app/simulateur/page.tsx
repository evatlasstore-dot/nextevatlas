import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChargingSimulator from "@/components/forms/ChargingSimulator";
import Icon from "@/components/ui/Icon";
import HomeReviewsCarousel from "@/components/home/HomeReviewsCarousel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import styles from "./SimulatorPage.module.css";

export const metadata: Metadata = {
  title: { absolute: "Simulateur temps de recharge voiture électrique | EVAtlas" },
  description:
    "Calculez le temps de recharge de votre voiture électrique selon la batterie, le niveau de charge et la puissance disponible : de 2,3 à 22 kW.",
  alternates: { canonical: "/simulateur/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/simulateur/",
    title: "Estimez votre temps de recharge avec EVAtlas",
    description: "Un calcul simple et transparent selon votre batterie et la puissance disponible.",
    images: [{ url: "/images/simulator/simulator-hero-morocco.png", width: 1672, height: 941, alt: "Véhicule électrique en recharge devant une maison contemporaine au Maroc" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/simulator/simulator-hero-morocco.png"] },
};

export default function SimulatorPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="sim-page-title">
          <Image
            className={styles.heroImage}
            src="/images/simulator/simulator-hero-morocco.png"
            alt="Voiture électrique en recharge devant une maison contemporaine au Maroc"
            width={1672}
            height={941}
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className={styles.heroShell}>
            <Breadcrumbs
              tone="inverse"
              className={styles.breadcrumb}
              items={[
                { name: "Accueil", href: "/" },
                { name: "Simulateur", href: "/simulateur/" },
              ]}
            />
            <div className={styles.heroLayout}>
              <div className={styles.heroCopy}>
                <p className={styles.heroEyebrow}>Comprendre avant de choisir</p>
                <h1 id="sim-page-title">Simulateur de temps de recharge pour voiture électrique</h1>
                <p>Visualisez l’effet de la capacité, du niveau de batterie et de la puissance disponible avant de préparer votre installation.</p>
              </div>
              <aside className={styles.heroCard} aria-label="Principes du simulateur">
                <p><span>6</span>données utiles</p>
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
        <HomeReviewsCarousel
          id="simulator-reviews-title"
          eyebrow="Retours d’expérience"
          title="Des projets proches du vôtre."
        />
      </main>
      <Footer />
    </>
  );
}
