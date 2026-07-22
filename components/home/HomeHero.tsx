"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ProductRouteLink from "@/components/ui/ProductRouteLink";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAvailable, setVideoAvailable] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.pause();
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        {videoAvailable && (
          <video className="watermark-crop" ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/images/evatlas-home-hero-poster.png" onError={() => setVideoAvailable(false)}>
            <source src="/videos/evatlas-home-hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow">La mobilité électrique, ancrée au Maroc</p>
        <h1 id="hero-title">La recharge intelligente, pensée pour votre quotidien.</h1>
        <p className="hero-description">Jusqu’à 22 kW, installation professionnelle, pilotage connecté et accompagnement local.</p>
        <div className="hero-actions">
          <TrackedLink href="/devis" className="button" eventName="click_hero_quote">Demander un devis <Icon name="arrow" size={17} /></TrackedLink>
          <ProductRouteLink className="button button-outline" eventName="click_hero_product">Découvrir la borne <Icon name="arrow" size={17} /></ProductRouteLink>
        </div>
        <ul className="hero-reassurance" aria-label="Les engagements EVAtlas">
          <li>Jusqu’à 22 kW</li><li>Installation pro</li><li>Application connectée</li><li>SAV local</li>
        </ul>
      </div>
      <a className="hero-scroll" href="#evatlas-borne" aria-label="Découvrir EVAtlas et la borne"><span>Défiler</span><b /></a>
    </section>
  );
}
