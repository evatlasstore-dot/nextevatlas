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
};

export default function LegalPage({ eyebrow, title, introduction, sections, note }: LegalPageProps) {
  return (
    <>
      <Header />
      <main id="main-content" className={styles["legal-page"]}>
        <header className={styles["legal-header"]}>
          <div className={styles["legal-shell"]}>
            <p className={styles["legal-eyebrow"]}>{eyebrow}</p>
            <h1>{title}</h1>
            <p>{introduction}</p>
            <span className={styles["legal-updated"]}>Mise à jour&nbsp;: 17 juillet 2026</span>
          </div>
        </header>

        <div className={styles["legal-main"]}>
          <div className={`${styles["legal-shell"]} ${styles["legal-layout"]}`}>
            <aside className={styles["legal-toc"]}>
              <p>Dans cette page</p>
              <nav aria-label={`Sommaire — ${title}`}>
                {sections.map((section) => (
                  <a href={`#${section.id}`} key={section.id}>{section.title}</a>
                ))}
                <a href="#contact-legal">Contact</a>
              </nav>
            </aside>

            <div className={styles["legal-content"]}>
              {sections.map((section) => (
                <section id={section.id} className={styles["legal-section"]} key={section.id}>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              {note && <p className={styles["legal-note"]}>{note}</p>}

              <section id="contact-legal" className={styles["legal-contact"]}>
                <h2>Contact</h2>
                <address>
                  <span>EVAtlas</span>
                  <span>12 Rue Mustapha Manfalouti, Gauthier – RDC, Casablanca 20053</span>
                  <a href="mailto:evatlas.store@gmail.com">evatlas.store@gmail.com</a>
                  <a href="tel:+212694592374">+212 6 94 59 23 74</a>
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
