"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

const quoteHref = "/devis?product=autel-maxicharger#quote-form";
const simulatorHref = "/simulateur?product=autel-maxicharger";

export default function ProductHero({ breadcrumb }: { breadcrumb?: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "view_autel_product" } }));
    const video = videoRef.current;
    if (!video || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.pause();
  }, []);

  return (
    <section className="product-hero" aria-labelledby="product-hero-title">
      <div className="product-hero-media">
        <Image
          className="product-hero-poster"
          src="/images/product/autel-maxicharger/hero-poster.png"
          alt="Autel MaxiCharger 22 kW proposée par EVAtlas au Maroc"
          width={1280}
          height={720}
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" aria-hidden="true" onPlay={() => window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "play_product_hero" } }))}>
          <source src="/videos/autel-product-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="product-hero-overlay" />
      <div className="container product-hero-content">
        {breadcrumb}
        <p className="eyebrow product-hero-eyebrow">Autel MaxiCharger AC · EVAtlas Maroc</p>
        <h1 id="product-hero-title">Autel MaxiCharger 22 kW : borne de recharge connectée au Maroc</h1>
        <p className="product-hero-slogan">L’excellence de la recharge, directement chez vous.</p>
        <p className="product-hero-description">Une borne connectée jusqu’à 22 kW, installée et configurée par EVAtlas.</p>
        <div className="product-hero-actions">
          <TrackedLink href={quoteHref} className="button" eventName="click_product_quote">Demander un devis pour la MaxiCharger <Icon name="arrow" size={17} /></TrackedLink>
          <TrackedLink href={simulatorHref} className="button button-outline" eventName="click_product_simulator">Simuler le temps de recharge de mon véhicule <Icon name="arrow" size={17} /></TrackedLink>
        </div>
        <ul className="product-hero-points" aria-label="Points clés">
          <li>Jusqu’à 22 kW</li><li>Installation professionnelle</li><li>Application connectée</li><li>Garantie 24 mois</li>
        </ul>
      </div>
    </section>
  );
}
