import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import styles from "@/components/content/ContentPages.module.css";
import ReviewsSection from "@/components/shared/ReviewsSection";

export const metadata: Metadata = {
  title: "Bornes de recharge au Maroc : nos solutions",
  description:
    "Découvrez les solutions de recharge EVAtlas pour la maison, l’entreprise et les parkings partagés, avec accompagnement et installation au Maroc.",
  alternates: { canonical: "/nos-produits" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    title: "Bornes de recharge au Maroc | EVAtlas",
    description: "Une solution de recharge choisie selon votre véhicule, votre site et vos usages.",
    images: [{
      url: "/images/product/autel-maxicharger/hero-poster.png",
      width: 1280,
      height: 720,
      alt: "Borne de recharge Autel MaxiCharger proposée par EVAtlas",
    }],
  },
};

const usages = [
  {
    number: "01",
    title: "Maison",
    copy: "Une recharge accessible depuis votre stationnement, dimensionnée selon votre véhicule et votre installation électrique.",
  },
  {
    number: "02",
    title: "Entreprises et hôtels",
    copy: "Une configuration étudiée selon les utilisateurs, les horaires, les accès et la puissance disponible sur le site.",
  },
  {
    number: "03",
    title: "Résidences et parkings",
    copy: "Une approche adaptée aux espaces partagés, au cheminement électrique et aux contraintes propres à chaque lieu.",
  },
];

const method = [
  ["01", "Comprendre", "Votre véhicule, votre rythme de recharge et votre emplacement."],
  ["02", "Vérifier", "La puissance disponible, le raccordement et les protections nécessaires."],
  ["03", "Configurer", "La borne, sa puissance, son câble et son mode de pose."],
  ["04", "Installer", "Une pose soignée, suivie de la configuration et de la prise en main."],
];

export default function ProductsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Solutions de recharge EVAtlas",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      url: "https://evatlas.ma/nos-produits/autel-maxicharger",
      name: "Autel MaxiCharger AC Wallbox",
    }],
  };

  return (
    <>
      <Header />
      <main id="main-content" className={styles["catalog-page"]}>
        <section className={styles["catalog-hero"]} aria-labelledby="catalog-title">
          <div className={`${styles["catalog-shell"]} ${styles["catalog-hero-grid"]}`}>
            <div className={styles["catalog-hero-copy"]}>
              <p className={styles["catalog-eyebrow"]}>Solutions de recharge</p>
              <h1 id="catalog-title">La bonne borne commence par le bon usage.</h1>
              <p>EVAtlas met le véhicule, le lieu et vos habitudes au centre de la recommandation. Une approche simple pour choisir une recharge cohérente aujourd’hui et durable demain.</p>
              <div className={styles["catalog-hero-actions"]}>
                <TrackedLink href="/devis" className="button" eventName="click_catalog_quote">
                  Étudier mon projet <Icon name="arrow" size={17} />
                </TrackedLink>
                <TrackedLink href="/simulateur" className={styles["catalog-secondary-link"]} eventName="click_catalog_simulator">
                  Estimer ma recharge <Icon name="arrow" size={16} />
                </TrackedLink>
              </div>
            </div>
            <div className={styles["catalog-hero-visual"]}>
              <img
                src="/images/product/autel-maxicharger/installation/wall-mounted.png"
                width="1024"
                height="1536"
                alt="Autel MaxiCharger, borne de recharge murale disponible chez EVAtlas"
              />
              <div className={styles["catalog-visual-note"]}>
                <span><b>Autel MaxiCharger</b><small>Murale ou sur pied</small></span>
                <strong>Jusqu’à 22 kW</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["catalog-section"]} ${styles["catalog-section-light"]}`} aria-labelledby="catalog-usages-title">
          <div className={styles["catalog-shell"]}>
            <header className={styles["catalog-section-heading"]}>
              <p className={styles["catalog-eyebrow"]}>Votre contexte</p>
              <h2 id="catalog-usages-title">Une solution différente pour chaque lieu de recharge.</h2>
              <p>La technologie compte. L’usage réel compte davantage. Nous cadrons d’abord l’environnement dans lequel la borne devra fonctionner.</p>
            </header>
            <div className={styles["catalog-usage-grid"]}>
              {usages.map((usage) => (
                <article className={styles["catalog-usage"]} key={usage.number}>
                  <span>{usage.number}</span>
                  <h3>{usage.title}</h3>
                  <p>{usage.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["catalog-section"]} aria-labelledby="catalog-product-title">
          <div className={styles["catalog-shell"]}>
            <header className={styles["catalog-section-heading"]}>
              <p className={styles["catalog-eyebrow"]}>Produit disponible</p>
              <h2 id="catalog-product-title">Une borne connectée, dans une configuration lisible.</h2>
              <p>Découvrez les caractéristiques de la MaxiCharger et laissez l’étude du site déterminer la puissance réellement adaptée.</p>
            </header>
            <article className={styles["catalog-product-card"]}>
              <div className={styles["catalog-product-media"]}>
                <span className={styles["catalog-product-status"]}><i aria-hidden="true" /> Disponible à l’étude</span>
                <img
                  src="/images/product/autel-maxicharger/installation/wall-mounted.png"
                  width="1024"
                  height="1536"
                  loading="lazy"
                  alt="Vue détourée de l’Autel MaxiCharger avec câble Type 2"
                />
              </div>
              <div className={styles["catalog-product-copy"]}>
                <p>Autel · MaxiCharger AC Wallbox</p>
                <h3>La recharge connectée, jusqu’à 22 kW.</h3>
                <p>Une borne Type 2 avec application, gestion des accès et connectivité complète, proposée avec vérification et installation EVAtlas.</p>
                <ul className={styles["catalog-product-specs"]} aria-label="Caractéristiques principales">
                  <li>Jusqu’à 22 kW</li>
                  <li>Type 2 · Mode 3</li>
                  <li>Wi‑Fi · Bluetooth · Ethernet</li>
                  <li>RFID</li>
                  <li>Garantie indiquée 24 mois</li>
                </ul>
                <div className={styles["catalog-product-actions"]}>
                  <ProductRouteLink className="button" eventName="click_catalog_product">
                    Découvrir la MaxiCharger <Icon name="arrow" size={17} />
                  </ProductRouteLink>
                  <TrackedLink href="/devis?product=autel-maxicharger" className={styles["catalog-secondary-link"]} eventName="click_catalog_product_quote">
                    Demander une étude <Icon name="arrow" size={16} />
                  </TrackedLink>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={`${styles["catalog-section"]} ${styles["catalog-section-light"]}`} aria-labelledby="catalog-method-title">
          <div className={`${styles["catalog-shell"]} ${styles["catalog-method"]}`}>
            <div className={styles["catalog-method-copy"]}>
              <p className={styles["catalog-eyebrow"]}>Méthode EVAtlas</p>
              <h2 id="catalog-method-title">Du besoin à la mise en service.</h2>
              <p>Une borne ne se choisit pas sur une puissance affichée uniquement. Chaque décision est reliée à votre véhicule et aux possibilités du site.</p>
            </div>
            <ol className={styles["catalog-method-list"]}>
              {method.map(([number, title, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><b>{title}</b><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ReviewsSection title="Une solution se juge dans son usage quotidien." ids={["hamza-rabat", "nabil-tanger", "salma-marrakech"]} />
        <section className={styles["catalog-cta"]} aria-labelledby="catalog-cta-title">
          <div className={`${styles["catalog-shell"]} ${styles["catalog-cta-inner"]}`}>
            <div>
              <p className={styles["catalog-eyebrow"]}>Votre projet</p>
              <h2 id="catalog-cta-title">Faisons correspondre la borne à votre réalité.</h2>
            </div>
            <div className={styles["catalog-cta-actions"]}>
              <TrackedLink href="/devis" className="button" eventName="click_catalog_final_quote">Demander un devis <Icon name="arrow" size={17} /></TrackedLink>
              <TrackedLink href="/faq" className={styles["catalog-secondary-link"]}>Consulter la FAQ <Icon name="arrow" size={16} /></TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
    </>
  );
}
