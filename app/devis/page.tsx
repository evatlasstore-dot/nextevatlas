import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/forms/QuoteForm";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ReviewsSection from "@/components/shared/ReviewsSection";

export const metadata: Metadata = {
  title: "Demander un devis pour une borne de recharge au Maroc",
  description: "Présentez votre véhicule et votre projet à EVAtlas pour préparer une recommandation de borne de recharge et d’installation adaptée au Maroc.",
  keywords: ["Devis borne de recharge Maroc", "Installation wallbox Casablanca", "Devis Autel MaxiCharger", "Installateur borne électrique Maroc"],
  alternates: { canonical: "/devis" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    title: "Préparez votre projet de recharge avec EVAtlas",
    description: "Une demande guidée pour cadrer votre borne, votre véhicule et votre installation.",
    images: [{ url: "/images/evatlas-maxicharger-garage-poster.png", width: 1280, height: 720, alt: "Projet d’installation d’une borne de recharge EVAtlas" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/evatlas-maxicharger-garage-poster.png"] },
};

export default function QuotePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="quote-page">
        <section className="quote-hero" aria-labelledby="quote-page-title">
          <div className="quote-hero-shell">
            <div className="quote-breadcrumb"><TrackedLink href="/">Accueil</TrackedLink><span aria-hidden="true">/</span><span>Demander un devis</span></div>
            <div className="quote-hero-layout">
              <div className="quote-hero-copy">
                <p className="quote-hero-eyebrow">Conseil et installation EVAtlas</p>
                <h1 id="quote-page-title">Votre projet mérite une réponse précise.</h1>
                <p>Partagez l’essentiel de votre besoin. Notre équipe pourra reprendre votre contexte, vérifier la faisabilité et vous orienter vers une solution cohérente.</p>
              </div>
              <aside className="quote-hero-proof" aria-label="Les engagements de la demande">
                <div><Icon name="shield" size={20} /><p><b>Demande transparente</b><span>Aucun faux envoi&nbsp;: vous finalisez directement dans WhatsApp.</span></p></div>
                <div><Icon name="pin" size={20} /><p><b>Regard local</b><span>Une étude adaptée au véhicule, au lieu et à l’installation.</span></p></div>
                <div><Icon name="phone" size={20} /><p><b>Échange humain</b><span>Un interlocuteur reprend votre projet avec vous.</span></p></div>
              </aside>
            </div>
          </div>
        </section>
        <QuoteForm />
        <ReviewsSection title="Chaque projet commence par une réalité différente." ids={["yasmine-casablanca", "salma-marrakech", "othmane-agadir"]} />
      </main>
      <Footer />
    </>
  );
}
