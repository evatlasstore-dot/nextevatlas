"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import product from "@/data/autel-maxicharger.json";

const frames = [
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-01-closed.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-02-open.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-03-port.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-04-enclosure.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-05-board.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-06-components.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-07-architecture.png",
  "/images/product/autel-maxicharger/exploded-sequence-cutout/step-08-full.png"
];

const sequenceFrameIndexes = [0, 2, 4, 6, 7];
const sequenceItems = product.sequence.map((item, index) => ({ item, index }));
const frameTransitionDuration = 260;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ProductExplodedView() {
  const sectionRef = useRef<HTMLElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [previousFrame, setPreviousFrame] = useState<number | null>(null);
  const frameIndexRef = useRef(0);
  const sequenceMetricsRef = useRef({ top: 0, travel: 1 });
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

  const measureSequence = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return null;
    const metrics = {
      top: window.scrollY + section.getBoundingClientRect().top,
      travel: Math.max(section.offsetHeight - window.innerHeight, 1)
    };
    sequenceMetricsRef.current = metrics;
    return metrics;
  }, []);

  const seekTo = useCallback((index: number) => {
    const targetFrame = sequenceFrameIndexes[index];
    const metrics = measureSequence();
    if (!metrics || targetFrame === undefined) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      activateFrame(targetFrame);
      return;
    }

    const target = metrics.top + (targetFrame / (frames.length - 1)) * metrics.travel;
    window.scrollTo({ top: target, behavior: "smooth" });
  }, [activateFrame, measureSequence]);

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    const nextSequenceIndex = clamp(active + (event.key === "ArrowDown" ? 1 : -1), 0, sequenceFrameIndexes.length - 1);
    if (nextSequenceIndex === active) return;
    event.preventDefault();
    seekTo(nextSequenceIndex);
  }, [active, seekTo]);

  useEffect(() => {
    let preloadTimer: number | null = null;
    let isDisposed = false;
    const remainingFrames = [...frames.slice(1)];
    const preloadFrame = (src: string) => {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      image.decode().catch(() => undefined);
      preloadedFramesRef.current.push(image);
    };
    const preloadNextFrame = () => {
      if (isDisposed) return;
      const src = remainingFrames.shift();
      if (!src) return;
      preloadFrame(src);
      // Spread decoding across idle moments so the initial page and touch scroll stay responsive.
      preloadTimer = window.setTimeout(preloadNextFrame, 90);
    };

    // Frame 01 is already eagerly rendered. The remaining layers are warmed up progressively.
    preloadTimer = window.setTimeout(preloadNextFrame, 140);
    return () => {
      isDisposed = true;
      if (preloadTimer) window.clearTimeout(preloadTimer);
      preloadedFramesRef.current = [];
      if (transitionTimerRef.current) window.clearTimeout(transitionTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let animationFrame = 0;
    let hasStarted = false;
    let hasCompleted = false;
    const syncSequence = () => {
      animationFrame = 0;
      const { top, travel } = sequenceMetricsRef.current;
      const progress = clamp((window.scrollY - top) / travel, 0, 1);
      activateFrame(Math.round(progress * (frames.length - 1)));
      if (progress > .02 && !hasStarted) {
        window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "view_3d_sequence" } }));
        hasStarted = true;
      }
      if (progress > .94 && !hasCompleted) {
        window.dispatchEvent(new CustomEvent("evatlas:tracking", { detail: { event: "complete_3d_sequence" } }));
        hasCompleted = true;
      }
    };
    const scheduleSync = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(syncSequence);
    };
    const refreshMetrics = () => {
      measureSequence();
      scheduleSync();
    };
    const resizeObserver = new ResizeObserver(refreshMetrics);
    resizeObserver.observe(section);
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", refreshMetrics, { passive: true });
    measureSequence();
    syncSequence();
    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", refreshMetrics);
    };
  }, [activateFrame, measureSequence]);

  return (
    <section id="charger-architecture" ref={sectionRef} className="product-exploded" aria-labelledby="exploded-title">
      <div className="product-exploded-sticky">
        <div className="product-object-scene">
          <header className="product-object-intro">
            <p className="eyebrow">Architecture MaxiCharger</p>
            <h2 id="exploded-title">La borne, révélée étape par étape.</h2>
            <p>Faites défiler pour ouvrir la borne en douceur, ou sélectionnez un point technique pour rejoindre une étape précise.</p>
          </header>
          <div className="product-object-stage" role="img" tabIndex={0} onKeyDown={handleKeyDown} aria-label="Séquence d’ouverture de l’Autel MaxiCharger. Utilisez les flèches haut et bas pour changer d’étape.">
            <div className="product-frame-stack" aria-hidden="true">
              {previousFrame !== null && previousFrame !== frameIndex && <img className="product-object-frame is-previous" key={`previous-${previousFrame}-${frameIndex}`} src={frames[previousFrame]} alt="" decoding="async" />}
              <img className="product-object-frame is-current" key={`current-${frameIndex}`} src={frames[frameIndex]} alt="" loading="eager" decoding="async" />
            </div>
          </div>
          <ol className="product-sequence product-sequence-controls product-sequence-left" aria-label="Spécifications de la MaxiCharger">
            {sequenceItems.filter(({ index }) => index % 2 === 0).map(({ item, index }) => {
              return <li className={active === index ? "is-active" : ""} key={item.step}><button type="button" aria-pressed={active === index} onClick={() => seekTo(index)}><span>{item.step}</span><div><b>{item.title}</b><p>{item.copy}</p></div><i aria-hidden="true" /></button></li>;
            })}
          </ol>
          <ol className="product-sequence product-sequence-controls product-sequence-right" aria-label="Spécifications de la MaxiCharger">
            {sequenceItems.filter(({ index }) => index % 2 !== 0).map(({ item, index }) => {
              return <li className={active === index ? "is-active" : ""} key={item.step}><button type="button" aria-pressed={active === index} onClick={() => seekTo(index)}><span>{item.step}</span><div><b>{item.title}</b><p>{item.copy}</p></div><i aria-hidden="true" /></button></li>;
            })}
          </ol>
          <div className="product-mobile-step" aria-live="polite">
            <div className="product-mobile-step-heading"><span>{activeItem.step}</span><b>{activeItem.title}</b><small>{String(active + 1).padStart(2, "0")} / {String(product.sequence.length).padStart(2, "0")}</small></div>
            <p>{activeItem.copy}</p>
            <div className="product-mobile-progress" role="group" aria-label="Étapes techniques">
              {product.sequence.map((item, index) => <button key={item.step} type="button" className={active === index ? "is-active" : ""} aria-label={`Aller à l’étape ${item.step} : ${item.title}`} aria-pressed={active === index} onClick={() => seekTo(index)}><span>{item.step}</span></button>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
