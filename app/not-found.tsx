import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import styles from "@/components/content/ContentPages.module.css";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles["not-found-page"]}>
        <section className={styles["not-found-main"]} aria-labelledby="not-found-title">
          <div className={`${styles["not-found-shell"]} ${styles["not-found-layout"]}`}>
            <div className={styles["not-found-copy"]}>
              <p className={styles["not-found-eyebrow"]}>Page introuvable</p>
              <h1 id="not-found-title">Cette route ne mène pas encore à une borne.</h1>
              <p>Le lien a peut-être changé ou l’adresse contient une erreur. Revenez à l’accueil ou poursuivez vers nos solutions.</p>
              <div className={styles["not-found-actions"]}>
                <TrackedLink href="/" className="button">Retour à l’accueil <Icon name="arrow" size={17} /></TrackedLink>
                <TrackedLink href="/nos-produits" className={styles["not-found-secondary-link"]}>Voir les solutions <Icon name="arrow" size={16} /></TrackedLink>
              </div>
            </div>
            <div className={styles["not-found-code"]} aria-hidden="true"><span>404</span></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
