"use client";

import { useEffect, useRef } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";

const quoteHref = "/devis?product=autel-maxicharger";
const simulatorHref = "/simulateur?product=autel-maxicharger";

export default function ProductHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "view_autel_product" } }));
    const video = videoRef.current;
    if (!video || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.pause();
  }, []);

  return (
    <section className="product-hero" aria-labelledby="product-hero-title">
      <div className="product-hero-media" aria-hidden="true">
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/images/product/autel-maxicharger/hero-poster.png" onPlay={() => window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "play_product_hero" } }))}>
          <source src="/videos/autel-product-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="product-hero-overlay" />
      <div className="container product-hero-content">
        <p className="eyebrow product-hero-eyebrow">Autel MaxiCharger AC · EVAtlas Maroc</p>
        <h1 id="product-hero-title">L’excellence de la recharge, directement chez vous.</h1>
        <p>Une borne connectée jusqu’à 22 kW, installée et configurée par EVAtlas.</p>
        <div className="product-hero-actions">
          <TrackedLink href={quoteHref} className="button" eventName="click_product_quote">Demander un devis <Icon name="arrow" size={17} /></TrackedLink>
          <TrackedLink href={simulatorHref} className="button button-outline" eventName="click_product_simulator">Simuler mon temps de recharge <Icon name="arrow" size={17} /></TrackedLink>
        </div>
        <ul className="product-hero-points" aria-label="Points clés">
          <li>Jusqu’à 22 kW</li><li>Installation professionnelle</li><li>Application connectée</li><li>Garantie 24 mois</li>
        </ul>
      </div>
    </section>
  );
}
