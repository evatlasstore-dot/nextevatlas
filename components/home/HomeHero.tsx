"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
        <Image
          className="hero-poster"
          src="/images/evatlas-home-hero-poster.png"
          alt=""
          width={1280}
          height={720}
          priority
          fetchPriority="high"
          sizes="100vw"
        />
        {videoAvailable && (
          <video className="watermark-crop" ref={videoRef} autoPlay muted loop playsInline preload="metadata" onError={() => setVideoAvailable(false)}>
            <source src="/videos/evatlas-home-hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow">La mobilité électrique, ancrée au Maroc</p>
        <h1 id="hero-title">Bornes de recharge pour voitures électriques au Maroc</h1>
        <p className="hero-description">La recharge intelligente, pensée pour votre quotidien.</p>
        <p className="hero-description hero-description-detail">Jusqu’à 22 kW, installation professionnelle, pilotage connecté et accompagnement local.</p>
        <div className="hero-actions">
          <TrackedLink href="/devis#quote-form" className="button" eventName="click_hero_quote">Demander un devis d’installation <Icon name="arrow" size={17} /></TrackedLink>
          <ProductRouteLink className="button button-outline" eventName="click_hero_product">Découvrir l’Autel MaxiCharger 22 kW <Icon name="arrow" size={17} /></ProductRouteLink>
        </div>
        <ul className="hero-reassurance" aria-label="Les engagements EVAtlas">
          <li>Jusqu’à 22 kW</li><li>Installation pro</li><li>Application connectée</li><li>SAV local</li>
        </ul>
      </div>
      <a className="hero-scroll" href="#evatlas-borne" aria-label="Découvrir EVAtlas et la borne"><span>Défiler</span><b /></a>
    </section>
  );
}
