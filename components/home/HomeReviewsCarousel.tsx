"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import { demoStories } from "@/data/reviews";
import styles from "./HomePageSections.module.css";

type HomeReviewsCarouselProps = {
  eyebrow?: string;
  title?: string;
  id?: string;
};

function getItemsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(max-width: 680px)").matches) return 1;
  if (window.matchMedia("(max-width: 1020px)").matches) return 2;
  return 3;
}

export default function HomeReviewsCarousel({
  eyebrow = "Retours d’expérience",
  title = "Des projets proches du vôtre.",
  id = "home-reviews-title",
}: HomeReviewsCarouselProps) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [page, setPage] = useState(0);
  const touchStart = useRef<number | null>(null);
  const pages = Math.ceil(demoStories.length / itemsPerView);
  const reviewGroups = useMemo(
    () => [demoStories.slice(0, 3), demoStories.slice(3, 6), demoStories.slice(6, 9)],
    [],
  );
  const stories = useMemo(() => reviewGroups.flat(), [reviewGroups]);

  useEffect(() => {
    const update = () => setItemsPerView(getItemsPerView());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setPage((current) => Math.min(current, pages - 1));
  }, [pages]);

  const move = useCallback((direction: number) => {
    setPage((current) => (current + direction + pages) % pages);
  }, [pages]);

  const visibleStart = page * itemsPerView + 1;
  const visibleEnd = Math.min(visibleStart + itemsPerView - 1, stories.length);

  return (
    <section className={`${styles.reviewsSection} section`} aria-labelledby={id}>
      <div className="container">
        <header className={styles.reviewsHeader}>
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 id={id}>{title}</h2>
          </div>
        </header>

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="carrousel"
          aria-label="Avis clients"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") move(-1);
            if (event.key === "ArrowRight") move(1);
          }}
          onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const distance = (event.changedTouches[0]?.clientX ?? touchStart.current) - touchStart.current;
            if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1);
            touchStart.current = null;
          }}
        >
          <div className={styles.carouselViewport}>
            <div
              className={styles.carouselTrack}
              style={{
                "--reviews-per-view": itemsPerView,
                transform: `translateX(calc(${page * -100}% - ${page * 16}px))`,
              } as React.CSSProperties}
            >
              {stories.map((story, index) => {
                const isVisible = index >= page * itemsPerView && index < page * itemsPerView + itemsPerView;
                return (
                  <article
                    className={styles.reviewCard}
                    key={story.id}
                    aria-hidden={!isVisible}
                  >
                    <div className={styles.reviewMeta}>
                      <span aria-label={`${story.rating} étoiles sur 5`}>{"★".repeat(story.rating)}</span>
                    </div>
                    <blockquote>“{story.quote}”</blockquote>
                    <footer>
                      <span aria-hidden="true">{story.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                      <p><b>{story.name}</b><small>{story.city} · {story.vehicle}</small><em>{story.installation}</em></p>
                    </footer>
                  </article>
                );
              })}
            </div>
          </div>

          <div className={styles.carouselControls}>
            <button type="button" onClick={() => move(-1)} aria-label="Afficher les avis précédents"><Icon name="arrow" size={19} /></button>
            <div className={styles.carouselDots} aria-label="Progression du carrousel">
              {Array.from({ length: pages }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  className={index === page ? styles.activeDot : ""}
                  aria-label={`Afficher la page ${index + 1} sur ${pages}`}
                  aria-current={index === page ? "true" : undefined}
                  onClick={() => setPage(index)}
                />
              ))}
            </div>
            <p aria-live="polite"><span>{String(visibleStart).padStart(2, "0")}–{String(visibleEnd).padStart(2, "0")}</span> / 09</p>
            <button type="button" onClick={() => move(1)} aria-label="Afficher les avis suivants"><Icon name="arrow" size={19} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
