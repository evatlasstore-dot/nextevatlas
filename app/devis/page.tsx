import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/forms/QuoteForm";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import HomeReviewsCarousel from "@/components/home/HomeReviewsCarousel";

export const metadata: Metadata = {
  title: "Demander un devis pour une borne de recharge au Maroc",
  description: "Présentez votre véhicule et votre projet à EVAtlas pour préparer une recommandation de borne de recharge et d’installation adaptée au Maroc.",
  keywords: ["Devis borne de recharge Maroc", "Installation wallbox Casablanca", "Devis Autel MaxiCharger", "Installateur borne électrique Maroc"],
  alternates: { canonical: "/devis/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/devis/",
    title: "Préparez votre projet de recharge avec EVAtlas",
    description: "Une demande guidée pour cadrer votre borne, votre véhicule et votre installation.",
    images: [{ url: "/images/quote/quote-hero-morocco.png", width: 1672, height: 941, alt: "Borne de recharge et véhicule électrique dans une résidence marocaine" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/quote/quote-hero-morocco.png"] },
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
                <div><Icon name="shield" size={20} /><p><b>Demande transparente</b><span>Vos informations sont transmises directement et de façon sécurisée à l’équipe EVAtlas.</span></p></div>
                <div><Icon name="pin" size={20} /><p><b>Regard local</b><span>Une étude adaptée au véhicule, au lieu et à l’installation.</span></p></div>
                <div><Icon name="phone" size={20} /><p><b>Échange humain</b><span>Un interlocuteur reprend votre projet avec vous.</span></p></div>
              </aside>
            </div>
          </div>
        </section>
        <QuoteForm />
        <HomeReviewsCarousel />
      </main>
      <Footer />
    </>
  );
}
