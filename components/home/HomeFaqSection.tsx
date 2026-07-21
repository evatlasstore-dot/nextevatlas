"use client";

import { useState } from "react";
import homepage from "@/data/homepage.json";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import styles from "./HomePageSections.module.css";

export default function HomeFaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const questions = homepage.faq.slice(0, 4);

  return (
    <div className={`container ${styles.faqLayout}`}>
      <header className={styles.faqIntro}>
        <p className="eyebrow">Questions fréquentes</p>
        <h2>Les réponses utiles avant de commencer.</h2>
        <TrackedLink href="/faq" className={styles.inlineLink} eventName="click_faq">
          Consulter toute la FAQ <Icon name="arrow" size={16} />
        </TrackedLink>
      </header>
      <div className={styles.faqList}>
        {questions.map((item, index) => {
          const isOpen = openItem === index;
          return (
            <article className={styles.faqItem} key={item.question}>
              <h3>
                <button
                  type="button"
                  id={`home-faq-trigger-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-answer-${index}`}
                  onClick={() => setOpenItem(isOpen ? null : index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.question}
                  <Icon name="chevron" size={18} />
                </button>
              </h3>
              <div
                id={`home-faq-answer-${index}`}
                role="region"
                aria-labelledby={`home-faq-trigger-${index}`}
                hidden={!isOpen}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
