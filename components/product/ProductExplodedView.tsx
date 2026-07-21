"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import product from "@/data/autel-maxicharger.json";

const frames = [
  "/images/product/autel-maxicharger/exploded-sequence/step-01-closed.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-02-open.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-03-port.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-04-enclosure.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-05-board.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-06-components.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-07-architecture.png",
  "/images/product/autel-maxicharger/exploded-sequence/step-08-full.png"
];

const sequenceFrameIndexes = [0, 1, 3, 5, 7];
const sequenceItems = product.sequence.map((item, index) => ({ item, index }));
const frameTransitionDuration = 170;

export default function ProductExplodedView() {
  const sectionRef = useRef<HTMLElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [previousFrame, setPreviousFrame] = useState<number | null>(null);
  const frameIndexRef = useRef(0);
  const transitionTimerRef = useRef<number | null>(null);
  const preloadedFramesRef = useRef<HTMLImageElement[]>([]);
  const active = useMemo(() => {
    return sequenceFrameIndexes.reduce((closest, sequenceFrameIndex, index) => Math.abs(sequenceFrameIndex - frameIndex) < Math.abs(sequenceFrameIndexes[closest] - frameIndex) ? index : closest, 0);
  }, [frameIndex]);
  const activeItem = product.sequence[active];

  const activateFrame = useCallback((nextFrame: number) => {
    const boundedFrame = Math.max(0, Math.min(frames.length - 1, nextFrame));
    if (boundedFrame === frameIndexRef.current) return;
    setPreviousFrame(frameIndexRef.current);
    frameIndexRef.current = boundedFrame;
    setFrameIndex(boundedFrame);
    if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = window.setTimeout(() => setPreviousFrame(null), frameTransitionDuration + 40);
  }, []);

  const seekTo = (index: number) => {
    const targetFrame = sequenceFrameIndexes[index];
    activateFrame(targetFrame);
    const section = sectionRef.current;
    if (!section) return;
    const scrollDistance = Math.max(0, section.offsetHeight - window.innerHeight);
    const target = window.scrollY + section.getBoundingClientRect().top + (targetFrame / (frames.length - 1)) * scrollDistance;
    window.scrollTo({ top: target, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  };

  useEffect(() => {
    preloadedFramesRef.current = frames.map((src) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      image.decode().catch(() => undefined);
      return image;
    });
    return () => {
      preloadedFramesRef.current = [];
      if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let sentStart = false;
    let sentComplete = false;
    const sync = () => {
      const bounds = section.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      const nextProgress = Math.max(0, Math.min(1, -bounds.top / distance));
      const nextFrame = Math.round(nextProgress * (frames.length - 1));
      activateFrame(nextFrame);
      if (nextProgress > .02 && !sentStart) { window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "view_3d_sequence" } })); sentStart = true; }
      if (nextProgress > .94 && !sentComplete) { window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "complete_3d_sequence" } })); sentComplete = true; }
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); };
    window.addEventListener("scroll", onScroll, { passive: true });
    sync();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, [activateFrame]);

  return (
    <section id="charger-architecture" ref={sectionRef} className="product-exploded" aria-labelledby="exploded-title">
      <div className="product-exploded-sticky">
        <div className="product-object-scene">
          <header className="product-object-intro">
            <p className="eyebrow">Architecture MaxiCharger</p>
            <h2 id="exploded-title">La borne, révélée étape par étape.</h2>
            <p>Faites défiler ou sélectionnez un point technique pour explorer l’ouverture de la MaxiCharger.</p>
          </header>
          <div className="product-object-stage" role="img" aria-label="Séquence d’ouverture de l’Autel MaxiCharger">
            <div className="product-frame-stack" aria-hidden="true">
              {previousFrame !== null && previousFrame !== frameIndex && <img className="product-object-frame is-previous" key={`previous-${previousFrame}-${frameIndex}`} src={frames[previousFrame]} alt="" decoding="async" />}
              <img className="product-object-frame is-current" key={`current-${frameIndex}`} src={frames[frameIndex]} alt="" loading="eager" decoding="async" />
            </div>
          </div>
          <ol className="product-sequence product-sequence-controls product-sequence-left" aria-label="Spécifications à gauche">
            {sequenceItems.filter(({ index }) => index % 2 === 0).map(({ item, index }) => {
              return <li className={active === index ? "is-active" : ""} key={item.step}><button type="button" aria-pressed={active === index} onClick={() => seekTo(index)}><span>{item.step}</span><div><b>{item.title}</b><p>{item.copy}</p></div><i aria-hidden="true" /></button></li>;
            })}
          </ol>
          <ol className="product-sequence product-sequence-controls product-sequence-right" aria-label="Spécifications à droite">
            {sequenceItems.filter(({ index }) => index % 2 !== 0).map(({ item, index }) => {
              return <li className={active === index ? "is-active" : ""} key={item.step}><button type="button" aria-pressed={active === index} onClick={() => seekTo(index)}><span>{item.step}</span><div><b>{item.title}</b><p>{item.copy}</p></div><i aria-hidden="true" /></button></li>;
            })}
          </ol>
          <div className="product-mobile-step" aria-live="polite">
            <div className="product-mobile-step-heading"><span>{activeItem.step}</span><b>{activeItem.title}</b><small>{String(active + 1).padStart(2, "0")} / {String(product.sequence.length).padStart(2, "0")}</small></div>
            <p>{activeItem.copy}</p>
            <div className="product-mobile-progress" aria-label="Étapes techniques">
              {product.sequence.map((item, index) => <button key={item.step} type="button" className={active === index ? "is-active" : ""} aria-label={`Afficher l’étape ${item.step} : ${item.title}`} aria-pressed={active === index} onClick={() => seekTo(index)}><span /></button>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
