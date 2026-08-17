"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const gallery = [
  { src: "/images/product/autel-maxicharger/hero-poster.png", label: "Connecteur et anneau lumineux", video: "/videos/autel-product-hero.mp4" },
  { src: "/images/product/autel-maxicharger/exploded-poster.png", label: "Architecture interne de la borne", video: "/videos/autel-exploded-view.mp4" },
  { src: "/images/app/autel-charge-app/app-poster.png", label: "Autel Charge App", video: "/videos/autel-charge-app.mp4" }
];

export default function ProductGallery() {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "open_product_gallery" } }));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((current) => current === null ? 0 : (current + 1) % gallery.length);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? 0 : (current + gallery.length - 1) % gallery.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);
  return (
    <section className="product-gallery section" aria-labelledby="gallery-title">
      <div className="container"><div className="product-section-heading"><p className="eyebrow">Galerie produit</p><h2 id="gallery-title">Les visuels officiels disponibles.</h2><p>La galerie sera enrichie avec des photos d’installations EVAtlas dès qu’elles seront disponibles.</p></div>
        <div className="product-gallery-grid">{gallery.map((item, index) => <button type="button" key={item.src} onClick={() => setActive(index)} className={`gallery-item gallery-item-${index + 1}`}><Image src={item.src} alt={item.label} width={1280} height={720} loading="lazy" sizes="(max-width: 760px) 100vw, 33vw" /><span>{item.label}</span></button>)}</div>
        <p className="gallery-placeholder">Photos d’installations EVAtlas : à venir.</p>
      </div>
      {active !== null && <div className="gallery-dialog" role="dialog" aria-modal="true" aria-label={gallery[active].label} onClick={() => setActive(null)}><button className="gallery-close" type="button" aria-label="Fermer la galerie" onClick={() => setActive(null)}>×</button><video muted playsInline controls poster={gallery[active].src} onClick={(event) => event.stopPropagation()}><source src={gallery[active].video} type="video/mp4" /></video></div>}
    </section>
  );
}
