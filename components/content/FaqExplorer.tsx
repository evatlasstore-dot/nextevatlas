"use client";

import { useMemo, useState } from "react";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import { faqCategories, faqEntries, type FaqCategory } from "@/data/faq";
import styles from "./ContentPages.module.css";

type CategoryFilter = "Toutes" | FaqCategory;

const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("fr");

export default function FaqExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("Toutes");
  const [openId, setOpenId] = useState<string | null>(faqEntries[0]?.id ?? null);

  const filteredEntries = useMemo(() => {
    const term = normalize(query.trim());
    return faqEntries.filter((entry) => {
      const matchesCategory = category === "Toutes" || entry.category === category;
      const haystack = normalize(`${entry.question} ${entry.answer} ${entry.category}`);
      return matchesCategory && (!term || haystack.includes(term));
    });
  }, [category, query]);

  const chooseCategory = (nextCategory: CategoryFilter) => {
    setCategory(nextCategory);
    setOpenId(null);
  };

  const resetFilters = () => {
    setQuery("");
    setCategory("Toutes");
    setOpenId(faqEntries[0]?.id ?? null);
  };

  return (
    <div className={styles["faq-page-explorer"]}>
      <aside className={styles["faq-page-sidebar"]} aria-label="Filtres de la FAQ">
        <div className={styles["faq-page-search"]}>
          <label htmlFor="faq-search">Rechercher une question</label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Puissance, installation…"
            autoComplete="off"
          />
        </div>
        <div className={styles["faq-page-categories"]} aria-label="Catégories">
          <p>Filtrer par sujet</p>
          {(["Toutes", ...faqCategories] as CategoryFilter[]).map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={category === item}
              onClick={() => chooseCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={styles["faq-page-support"]}>
          <p>Votre situation demande une vérification précise&nbsp;?</p>
          <TrackedLink href="/devis" eventName="click_faq_quote">
            Parler de mon projet <Icon name="arrow" size={15} />
          </TrackedLink>
        </div>
      </aside>

      <section className={styles["faq-page-results"]} aria-labelledby="faq-results-title">
        <header className={styles["faq-page-results-header"]}>
          <h2 id="faq-results-title">
            {category === "Toutes" ? "Toutes les réponses" : category}
          </h2>
          <p aria-live="polite">
            {filteredEntries.length} {filteredEntries.length > 1 ? "réponses" : "réponse"}
          </p>
        </header>

        {filteredEntries.length > 0 ? (
          <div className={styles["faq-page-list"]}>
            {filteredEntries.map((entry) => {
              const isOpen = openId === entry.id;
              const buttonId = `faq-question-${entry.id}`;
              const panelId = `faq-answer-${entry.id}`;
              return (
                <article className={styles["faq-page-item"]} key={entry.id}>
                  <h3 className={styles["faq-page-question"]}>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? null : entry.id)}
                    >
                      <span>{entry.question}</span>
                      <span aria-hidden="true"><Icon name="chevron" size={18} /></span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    className={styles["faq-page-answer"]}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                  >
                    <p>{entry.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className={styles["faq-page-empty"]} role="status">
            <h3>Aucune réponse ne correspond.</h3>
            <p>Essayez un terme plus court ou affichez de nouveau toutes les catégories.</p>
            <button type="button" onClick={resetFilters}>Réinitialiser la recherche</button>
          </div>
        )}
      </section>
    </div>
  );
}
