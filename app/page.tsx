import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BrandProductSection from "@/components/home/BrandProductSection";
import HomeHero from "@/components/home/HomeHero";
import {
  HomeFuturisticConnected,
  HomeFuturisticConversion,
  HomeFuturisticProcess,
  HomeFuturisticSolutions,
} from "@/components/home/HomeFuturisticSections";
import HomeReviewsCarousel from "@/components/home/HomeReviewsCarousel";
import { evatlasBusinessSchema } from "@/data/business-schema";
import {
  faqSchema,
  homePageSchema,
  websiteSchema,
} from "@/data/schema";
import {
  SITE_DESCRIPTION,
  SITE_HOME_TITLE_WITH_BRAND,
  SITE_NAME,
  SITE_SOCIAL_IMAGE,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Bornes de recharge au Maroc | Installation EVAtlas" },
  description:
    "EVAtlas propose des bornes de recharge pour voitures électriques au Maroc : conseil, installation professionnelle, solutions jusqu’à 22 kW et accompagnement local.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: SITE_NAME,
    title: SITE_HOME_TITLE_WITH_BRAND,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{
      url: SITE_SOCIAL_IMAGE,
      width: 1280,
      height: 720,
      alt: "Autel MaxiCharger, borne de recharge connectée proposée par EVAtlas au Maroc",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_HOME_TITLE_WITH_BRAND,
    description: SITE_DESCRIPTION,
    images: [SITE_SOCIAL_IMAGE],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HomeHero />
        <BrandProductSection />
        <HomeFuturisticSolutions />
        <HomeFuturisticProcess />
        <HomeFuturisticConnected />
        <HomeFuturisticConversion />
        <HomeReviewsCarousel />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            evatlasBusinessSchema,
            websiteSchema,
            homePageSchema,
            faqSchema,
          ]),
        }}
      />
    </>
  );
}
