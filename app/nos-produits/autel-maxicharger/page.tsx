import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductHero from "@/components/product/ProductHero";
import ProductExplodedView from "@/components/product/ProductExplodedView";
import AutelChargeAppSection from "@/components/product/AutelChargeAppSection";
import InstallationCompatibility from "@/components/product/InstallationCompatibility";
import TechnicalSpecifications from "@/components/product/TechnicalSpecifications";
import ProductFinalCTA from "@/components/product/ProductFinalCTA";
import ProductNavigationSection from "@/components/product/ProductNavigationSection";
import HomeReviewsCarousel from "@/components/home/HomeReviewsCarousel";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { autelProductSchema } from "@/data/autel-schema";

export const metadata: Metadata = {
  title: { absolute: "Autel MaxiCharger 22 kW au Maroc | EVAtlas" },
  description:
    "Découvrez l’Autel MaxiCharger AC au Maroc : borne Type 2 connectée jusqu’à 22 kW, Wi-Fi, Bluetooth, RFID et installation professionnelle par EVAtlas.",
  alternates: { canonical: "/nos-produits/autel-maxicharger/" },
  openGraph: { type: "website", locale: "fr_MA", url: "/nos-produits/autel-maxicharger/", title: "Autel MaxiCharger 22 kW Maroc | EVAtlas", description: "Borne de recharge AC connectée avec installation professionnelle au Maroc.", images: [{ url: "/images/product/autel-maxicharger/hero-poster.png", width: 1280, height: 720, alt: "Autel MaxiCharger" }] },
  twitter: { card: "summary_large_image", images: ["/images/product/autel-maxicharger/hero-poster.png"] }
};

export default function AutelMaxiChargerPage() {
  return (
    <>
      <Header productMode />
      <main className="autel-product-page">
        <ProductHero
          breadcrumb={(
            <Breadcrumbs
              tone="inverse"
              className="product-hero-breadcrumb"
              items={[
                { name: "Accueil", href: "/" },
                { name: "Bornes de recharge", href: "/nos-produits/" },
                { name: "Autel MaxiCharger", href: "/nos-produits/autel-maxicharger/" },
              ]}
            />
          )}
        />
        <ProductExplodedView />
        <TechnicalSpecifications />
        <AutelChargeAppSection />
        <InstallationCompatibility />
        <ProductFinalCTA />
        <ProductNavigationSection />
        <HomeReviewsCarousel />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autelProductSchema).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
