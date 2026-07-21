import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FaqExplorer from "@/components/content/FaqExplorer";
import { faqEntries } from "@/data/faq";
import styles from "@/components/content/ContentPages.module.css";

export const metadata: Metadata = {
  title: "FAQ : bornes de recharge et installation au Maroc",
  description:
    "Retrouvez les réponses EVAtlas sur la puissance, la compatibilité, l’installation, l’application et l’accompagnement des projets de recharge au Maroc.",
  alternates: { canonical: "/faq" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    title: "Questions fréquentes sur la recharge électrique | EVAtlas",
    description: "Des réponses claires pour choisir, installer et utiliser une borne de recharge.",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content" className={styles["faq-page"]}>
        <section className={styles["faq-page-hero"]} aria-labelledby="faq-page-title">
          <div className={`${styles["faq-page-shell"]} ${styles["faq-page-hero-copy"]}`}>
            <p className={styles["faq-page-eyebrow"]}>Centre d’aide EVAtlas</p>
            <h1 id="faq-page-title">Une réponse claire avant chaque décision.</h1>
            <p>Recherchez par mot-clé ou parcourez les sujets essentiels autour du choix, de l’installation et de l’utilisation de votre borne.</p>
          </div>
        </section>
        <section className={styles["faq-page-main"]} aria-label="Questions fréquentes">
          <div className={styles["faq-page-shell"]}><FaqExplorer /></div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
