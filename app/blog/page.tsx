import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import ProductRouteLink from "@/components/ui/ProductRouteLink";
import TrackedLink from "@/components/ui/TrackedLink";
import { blogPosts } from "@/data/blog";

const siteUrl = "https://evatlas.store";
const blogUrl = `${siteUrl}/blog`;

export const metadata: Metadata = {
  title: "Guides sur la recharge électrique au Maroc",
  description:
    "Guides EVAtlas sur la recharge électrique au Maroc : installation, entretien, connecteurs, foyer multi-véhicules, puissance et MaxiCharger.",
  alternates: { canonical: "/blog" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "/blog",
    title: "Guides sur la recharge électrique au Maroc | EVAtlas",
    description:
      "Des réponses pratiques sur les bornes, leur entretien, les connecteurs Type 2 et CCS2 et la recharge de plusieurs véhicules au Maroc.",
    siteName: "EVAtlas",
    images: [
      {
        url: blogPosts[0].image,
        width: 1600,
        height: 900,
        alt: blogPosts[0].imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guides sur la recharge électrique au Maroc | EVAtlas",
    description:
      "Choix de la puissance, installation, budget et temps de recharge expliqués clairement.",
    images: [blogPosts[0].image],
  },
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("fr-MA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "EVAtlas",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/evatlas-logo.png`,
        width: 1421,
        height: 215,
      },
    },
    {
      "@type": "Blog",
      "@id": `${blogUrl}/#blog`,
      url: blogUrl,
      name: "Guides EVAtlas sur la recharge électrique",
      description:
        "Guides pratiques pour choisir, installer et utiliser une borne de recharge au Maroc.",
      inLanguage: "fr-MA",
      publisher: { "@id": `${siteUrl}/#organization` },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        "@id": `${blogUrl}/${post.slug}/#article`,
        url: `${blogUrl}/${post.slug}`,
        headline: post.title,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        image: `${siteUrl}${post.image}`,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${blogUrl}/#articles`,
      name: "Articles EVAtlas",
      numberOfItems: blogPosts.length,
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `${blogUrl}/${post.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${blogUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Guides",
          item: blogUrl,
        },
      ],
    },
  ],
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const articles = blogPosts
    .slice(1)
    .sort((first, second) => second.datePublished.localeCompare(first.datePublished));

  return (
    <>
      <Header />
      <main id="main-content" className="blog-page">
        <section className="blog-hero" aria-labelledby="blog-title">
          <div className="container blog-hero-inner">
            <p className="eyebrow">Guides EVAtlas</p>
            <h1 id="blog-title">Comprendre la recharge. Décider simplement.</h1>
            <p className="blog-hero-lead">
              Des explications pratiques, conçues pour le contexte marocain et
              écrites pour transformer une question technique en décision claire.
            </p>
            <div className="blog-hero-actions">
              <a className="button" href="#articles">
                Explorer les guides <Icon name="arrow" size={17} />
              </a>
              <TrackedLink
                className="button button-outline"
                href="/simulateur"
                eventName="click_blog_simulator"
              >
                Simuler ma recharge <Icon name="arrow" size={17} />
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="blog-featured section" aria-labelledby="featured-title">
          <div className="container">
            <div className="blog-section-heading">
              <p className="eyebrow">Commencer ici</p>
              <h2 id="featured-title">Le guide qui pose toutes les bases.</h2>
            </div>
            <article className="blog-featured-card">
              <TrackedLink
                href={`/blog/${featured.slug}`}
                className="blog-featured-media"
                eventName="click_blog_article"
                aria-label={`Lire : ${featured.title}`}
              >
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  width={1600}
                  height={900}
                  priority
                  sizes="(max-width: 800px) 100vw, 58vw"
                />
              </TrackedLink>
              <div className="blog-featured-copy">
                <div className="blog-card-meta">
                  <span>{featured.category}</span>
                  <time dateTime={featured.datePublished}>
                    {formatDate(featured.datePublished)}
                  </time>
                  <span>{featured.readingTime} min</span>
                </div>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <TrackedLink
                  href={`/blog/${featured.slug}`}
                  className="text-link"
                  eventName="click_blog_article"
                >
                  Lire le guide complet <Icon name="arrow" size={16} />
                </TrackedLink>
              </div>
            </article>
          </div>
        </section>

        <section
          id="articles"
          className="blog-library section"
          aria-labelledby="articles-title"
        >
          <div className="container">
            <div className="blog-section-heading blog-section-heading-split">
              <div>
                <p className="eyebrow">Bibliothèque</p>
                <h2 id="articles-title">Approfondir chaque décision.</h2>
              </div>
              <p>
                Installation, hôtellerie, hybride rechargeable, puissance et
                mobilité : choisissez le sujet qui correspond à votre projet.
              </p>
            </div>
            <div className="blog-grid">
              {articles.map((post) => (
                <article className="blog-card" key={post.slug}>
                  <TrackedLink
                    href={`/blog/${post.slug}`}
                    className="blog-card-media"
                    eventName="click_blog_article"
                    aria-label={`Lire : ${post.title}`}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    />
                  </TrackedLink>
                  <div className="blog-card-body">
                    <div className="blog-card-meta">
                      <span>{post.category}</span>
                      <span>{post.readingTime} min</span>
                    </div>
                    <h3>
                      <TrackedLink
                        href={`/blog/${post.slug}`}
                        eventName="click_blog_article"
                      >
                        {post.title}
                      </TrackedLink>
                    </h3>
                    <p>{post.excerpt}</p>
                    <TrackedLink
                      href={`/blog/${post.slug}`}
                      className="blog-card-arrow"
                      eventName="click_blog_article"
                      aria-label={`Ouvrir le guide : ${post.title}`}
                    >
                      <Icon name="arrow" size={18} />
                    </TrackedLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-cta section" aria-labelledby="blog-cta-title">
          <div className="container blog-cta-inner">
            <div>
              <p className="eyebrow">Passer de la lecture au projet</p>
              <h2 id="blog-cta-title">Votre configuration peut commencer ici.</h2>
              <p>
                Estimez votre temps de recharge ou partagez les informations de
                votre installation avec l’équipe EVAtlas.
              </p>
            </div>
            <div className="blog-cta-actions">
              <ProductRouteLink
                className="button button-outline"
                eventName="click_blog_product"
              >
                Voir la MaxiCharger <Icon name="arrow" size={17} />
              </ProductRouteLink>
              <TrackedLink
                href="/simulateur"
                className="button button-outline"
                eventName="click_blog_simulator"
              >
                Ouvrir le simulateur <Icon name="arrow" size={17} />
              </TrackedLink>
              <TrackedLink
                href="/devis?product=autel-maxicharger#quote-form"
                className="button"
                eventName="click_blog_quote"
              >
                Recevoir mon devis personnalisé <Icon name="arrow" size={17} />
              </TrackedLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
