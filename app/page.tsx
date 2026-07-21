import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BrandProductSection from "@/components/home/BrandProductSection";
import HomeHero from "@/components/home/HomeHero";
import {
  HomeConnectedSection,
  HomeConversionSection,
  HomeProcessSection,
  HomeSolutionsSection,
} from "@/components/home/HomePageSections";
import HomeReviewsCarousel from "@/components/home/HomeReviewsCarousel";
import { organizationSchema, faqSchema, localBusinessSchema, websiteSchema } from "@/data/schema";

export const metadata: Metadata = {
  title: "Bornes de recharge pour véhicules électriques au Maroc",
  description: "EVAtlas vous accompagne dans le choix, l’installation et le pilotage d’une borne de recharge connectée au Maroc.",
  keywords: ["borne de recharge Maroc", "installation wallbox Maroc", "borne électrique Casablanca", "recharge véhicule électrique Maroc"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_MA", siteName: "EVAtlas", title: "EVAtlas — La recharge électrique, pensée pour le Maroc", description: "Bornes connectées, installation professionnelle et accompagnement local.", url: "/", images: [{ url: "/images/evatlas-home-hero-poster.png", width: 1280, height: 720, alt: "Véhicule électrique en recharge avec EVAtlas" }] },
  twitter: { card: "summary_large_image", images: ["/images/evatlas-home-hero-poster.png"] },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HomeHero />
        <BrandProductSection />
        <HomeSolutionsSection />
        <HomeProcessSection />
        <HomeConnectedSection />
        <HomeConversionSection />
        <HomeReviewsCarousel />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, localBusinessSchema, websiteSchema, faqSchema]),
        }}
      />
    </>
  );
}
