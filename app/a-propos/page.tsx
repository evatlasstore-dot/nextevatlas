import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { evatlasBusinessSchema } from "@/data/business-schema";
import styles from "@/components/content/ContentPages.module.css";

export const metadata: Metadata = {
  title: { absolute: "EVAtlas Maroc | Bornes de recharge à Casablanca" },
  description:
    "Découvrez EVAtlas, spécialiste des solutions de recharge pour véhicules électriques basé à Casablanca et intervenant sur des projets au Maroc.",
  alternates: { canonical: "/a-propos/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/a-propos/",
    title: "À propos d’EVAtlas",
    description: "Une approche locale et structurée de la recharge électrique au Maroc.",
    images: [{ url: "/images/evatlas-team.jpg", width: 1232, height: 822, alt: "L’équipe EVAtlas réunie" }],
  },
};

const principles = [
  {
    icon: "pin" as const,
    title: "Comprendre le terrain",
    copy: "Le stationnement, le tableau électrique et les habitudes de recharge orientent la solution autant que le véhicule.",
  },
  {
    icon: "shield" as const,
    title: "Expliquer chaque choix",
    copy: "Puissance, protections, raccordement et mode de pose sont présentés dans un parcours compréhensible.",
  },
  {
    icon: "phone" as const,
    title: "Rester accessible",
    copy: "L’accompagnement ne s’arrête pas au matériel : configuration, prise en main et contact local font partie du projet.",
  },
];

const process = [
  ["01", "Écouter", "Le véhicule, les usages et les contraintes du lieu."],
  ["02", "Vérifier", "La faisabilité électrique et l’emplacement envisagé."],
  ["03", "Installer", "Une pose adaptée, avec les protections nécessaires."],
  ["04", "Mettre en service", "La configuration de la borne et sa prise en main."],
];

const audiences = [
  ["01", "Particuliers", "Une solution pensée autour du domicile, du véhicule et du rythme quotidien."],
  ["02", "Entreprises et hôtels", "Une recharge cadrée selon les utilisateurs, les accès et la puissance du site."],
  ["03", "Résidences et parkings", "Une étude tenant compte des espaces partagés et des contraintes d’implantation."],
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles["about-page"]}>
        <section className={styles["about-hero"]} aria-labelledby="about-title">
          <Image
            className={styles["about-hero-image"]}
            src="/images/evatlas-team.jpg"
            alt="L’équipe EVAtlas réunie à Casablanca"
            width={1232}
            height={822}
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <div className={`${styles["about-shell"]} ${styles["about-hero-grid"]}`}>
            <div className={styles["about-hero-copy"]}>
              <Breadcrumbs
                tone="inverse"
                items={[
                  { name: "Accueil", href: "/" },
                  { name: "À propos", href: "/a-propos/" },
                ]}
              />
              <p className={styles["about-eyebrow"]}>À propos d’EVAtlas</p>
              <h1 id="about-title">EVAtlas, spécialiste de la recharge électrique au Maroc</h1>
              <p>EVAtlas accompagne les projets de recharge électrique depuis Casablanca, avec une approche centrée sur le véhicule, le lieu et l’usage réel au Maroc.</p>
              <div className={styles["about-hero-actions"]}>
                <TrackedLink href="/devis#quote-form" className="button" eventName="click_about_quote">Parler de mon projet <Icon name="arrow" size={17} /></TrackedLink>
                <TrackedLink href="/nos-produits" className={styles["about-secondary-link"]}>Voir les solutions <Icon name="arrow" size={16} /></TrackedLink>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles["about-section"]} ${styles["about-section-light"]}`} aria-labelledby="about-principles-title">
          <div className={styles["about-shell"]}>
            <header className={styles["about-section-heading"]}>
              <p className={styles["about-eyebrow"]}>Notre rôle</p>
              <h2 id="about-principles-title">Transformer une question technique en parcours clair.</h2>
              <p>Notre approche relie le choix du produit, l’étude du site et la mise en service afin d’éviter les décisions isolées.</p>
            </header>
            <div className={styles["about-principles"]}>
              {principles.map((principle) => (
                <article className={styles["about-principle"]} key={principle.title}>
                  <span><Icon name={principle.icon} size={21} /></span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles["about-section"]} ${styles["about-process"]}`} aria-labelledby="about-process-title">
          <div className={styles["about-shell"]}>
            <header className={styles["about-section-heading"]}>
              <p className={styles["about-eyebrow"]}>La méthode</p>
              <h2 id="about-process-title">Quatre moments, un seul fil conducteur.</h2>
              <p>Chaque étape prépare la suivante, de la compréhension du besoin jusqu’au premier branchement.</p>
            </header>
            <div className={styles["about-process-list"]}>
              {process.map(([number, title, copy]) => (
                <article className={styles["about-process-step"]} key={number}>
                  <span>{number}</span><h3>{title}</h3><p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles["about-section"]} aria-labelledby="about-audiences-title">
          <div className={`${styles["about-shell"]} ${styles["about-audiences"]}`}>
            <div className={styles["about-audience-copy"]}>
              <p className={styles["about-eyebrow"]}>Projets accompagnés</p>
              <h2 id="about-audiences-title">Une lecture adaptée à chaque contexte.</h2>
              <p>EVAtlas est basé à Casablanca et étudie des projets au Maroc selon leur localisation et leurs contraintes techniques.</p>
            </div>
            <div className={styles["about-audience-list"]}>
              {audiences.map(([number, title, copy]) => (
                <article className={styles["about-audience"]} key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles["about-section"]} ${styles["about-team"]}`} aria-labelledby="about-team-title">
          <div className={`${styles["about-shell"]} ${styles["about-team-layout"]}`}>
            <header className={styles["about-team-heading"]}>
              <p className={styles["about-eyebrow"]}>L’équipe EVAtlas</p>
              <h2 id="about-team-title">Un accompagnement humain, du premier échange à la mise en service.</h2>
            </header>
            <div className={styles["about-team-content"]}>
              <p>Notre rôle est de rendre chaque décision plus simple et plus sûre. Nous prenons le temps de comprendre le véhicule, le bâtiment et l’usage attendu avant de recommander une solution.</p>
              <dl className={styles["about-team-commitments"]}>
                <div><dt>01</dt><dd><b>Conseil local</b><span>Un échange ancré dans les réalités du terrain marocain.</span></dd></div>
                <div><dt>02</dt><dd><b>Décisions expliquées</b><span>Des choix techniques présentés clairement, sans complexité inutile.</span></dd></div>
                <div><dt>03</dt><dd><b>Suivi dans la durée</b><span>Une équipe disponible pour la configuration et l’accompagnement.</span></dd></div>
              </dl>
            </div>
          </div>
        </section>
        <section className={styles["about-cta"]} aria-labelledby="about-cta-title">
          <div className={`${styles["about-shell"]} ${styles["about-cta-inner"]}`}>
            <div><p className={styles["about-eyebrow"]}>Votre prochaine étape</p><h2 id="about-cta-title">Commençons par comprendre votre besoin.</h2></div>
            <div className={styles["about-cta-actions"]}>
              <TrackedLink href="/devis#quote-form" className="button" eventName="click_about_final_quote">Demander une étude <Icon name="arrow" size={17} /></TrackedLink>
              <TrackedLink href="/faq" className={styles["about-secondary-link"]}>Consulter la FAQ <Icon name="arrow" size={16} /></TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(evatlasBusinessSchema) }}
      />
    </>
  );
}
