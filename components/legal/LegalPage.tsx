import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import styles from "@/components/content/ContentPages.module.css";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  sections: LegalSection[];
  note?: string;
  updatedAt?: {
    dateTime: string;
    label: string;
  };
};

export default function LegalPage({
  eyebrow,
  title,
  introduction,
  sections,
  note,
  updatedAt = { dateTime: "2026-07-22", label: "22 juillet 2026" },
}: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content" className={styles["legal-page"]}>
        <header className={styles["legal-header"]}>
          <div className={styles["legal-shell"]}>
            <div className={styles["legal-header-copy"]}>
              <p className={styles["legal-eyebrow"]}>{eyebrow}</p>
              <h1>{title}</h1>
              <p className={styles["legal-introduction"]}>{introduction}</p>
              <div className={styles["legal-meta"]} aria-label="Informations sur ce document">
                <span>{sections.length} rubriques</span>
                <time className={styles["legal-updated"]} dateTime={updatedAt.dateTime}>Mise à jour&nbsp;: {updatedAt.label}</time>
              </div>
            </div>
          </div>
        </header>

        <div className={styles["legal-main"]}>
          <div className={`${styles["legal-shell"]} ${styles["legal-layout"]}`}>
            <aside className={styles["legal-toc"]}>
              <p id="legal-toc-title">Dans cette page</p>
              <nav aria-labelledby="legal-toc-title">
                <ol>
                  {sections.map((section) => (
                    <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>
                  ))}
                  <li><a href="#contact-legal">Contact</a></li>
                </ol>
              </nav>
            </aside>

            <div className={styles["legal-content"]} aria-label={`Contenu — ${title}`}>
              {sections.map((section) => (
                <section id={section.id} className={styles["legal-section"]} key={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  {section.paragraphs.map((paragraph, index) => <p key={`${section.id}-${index}`}>{paragraph}</p>)}
                  {section.items && (
                    <ul>
                      {section.items.map((item, index) => <li key={`${section.id}-item-${index}`}>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              {note && <p className={styles["legal-note"]}>{note}</p>}

              <section id="contact-legal" className={styles["legal-contact"]} aria-labelledby="contact-legal-title">
                <h2 id="contact-legal-title">Contact</h2>
                <address>
                  <span>EVAtlas</span>
                  <span>12 Rue Mustapha Manfalouti, Gauthier – RDC, Casablanca 20053</span>
                  <a href="mailto:evatlas.store@gmail.com">evatlas.store@gmail.com</a>
                  <a href="tel:+212712833284">+212 7 12 83 32 84</a>
                </address>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
