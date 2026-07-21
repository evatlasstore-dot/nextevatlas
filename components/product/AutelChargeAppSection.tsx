"use client";

import { useEffect, useRef, useState } from "react";
import product from "@/data/autel-maxicharger.json";

const workflows = [
  { step: "01", title: "Piloter", features: [product.appFeatures[0], product.appFeatures[1], product.appFeatures[4]] },
  { step: "02", title: "Comprendre", features: [product.appFeatures[2], product.appFeatures[3]] },
  { step: "03", title: "Sécuriser", features: [product.appFeatures[5], product.appFeatures[6]] }
];

export default function AutelChargeAppSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section) return;
    if (video && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      setIsPlaying(false);
    }
    let tracked = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !tracked) {
        window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "interact_autel_app" } }));
        tracked = true;
      }
    }, { threshold: .55 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={sectionRef} className="charge-app section" aria-labelledby="app-title">
      <div className="container charge-app-shell">
        <header className="charge-app-heading">
          <div><p className="eyebrow">Autel Charge App</p><h2 id="app-title">Votre borne dans votre poche.</h2></div>
          <p>Une interface claire pour agir immédiatement, comprendre chaque recharge et garder le contrôle des accès.</p>
        </header>
        <div className="charge-app-console">
          <figure className="charge-app-video">
            <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster="/images/app/autel-charge-app/app-poster.png" onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}><source src="/videos/autel-charge-app.mp4" type="video/mp4" /></video>
            <span className="charge-app-status"><i aria-hidden="true" />Application connectée</span>
            <button className="charge-app-playback" type="button" aria-label={isPlaying ? "Mettre la vidéo en pause" : "Lire la vidéo"} onClick={togglePlayback}><span aria-hidden="true">{isPlaying ? "Ⅱ" : "▶"}</span>{isPlaying ? "Pause" : "Lecture"}</button>
            <figcaption><b>Autel Charge App</b><span>Pilotage, suivi et contrôle depuis votre téléphone.</span></figcaption>
          </figure>
          <div className="charge-app-workflows">
            <div className="charge-app-panel-heading"><p>Fonctions essentielles</p><span>07 outils</span></div>
            {workflows.map((workflow) => <article className="charge-app-workflow" key={workflow.step}>
              <div><span>{workflow.step}</span><h3>{workflow.title}</h3></div>
              <ul>{workflow.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
