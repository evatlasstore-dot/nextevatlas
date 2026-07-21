import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Icon from "@/components/ui/Icon";
import TrackedLink from "@/components/ui/TrackedLink";
import {
  blogPosts,
  getBlogPost,
  getRelatedPosts,
  type BlogSection,
} from "@/data/blog";

const siteUrl = "https://evatlas.ma";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const path = `/blog/${post.slug}`;

  return {
    title: post.seoTitle,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Équipe EVAtlas", url: "/a-propos" }],
    category: post.category,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      locale: "fr_MA",
      url: path,
      title: `${post.seoTitle} | EVAtlas`,
      description: post.description,
      siteName: "EVAtlas",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Équipe EVAtlas"],
      section: post.category,
      tags: post.keywords,
      images: [
        {
          url: post.image,
          width: 1600,
          height: 900,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.seoTitle} | EVAtlas`,
      description: post.description,
      images: [post.image],
    },
  };
}

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("fr-MA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T12:00:00Z`));

function ArticleSectionContent({ section }: { section: BlogSection }) {
  const List = section.ordered ? "ol" : "ul";

  return (
    <section
      id={section.id}
      className="article-section"
      aria-labelledby={`${section.id}-title`}
    >
      <h2 id={`${section.id}-title`}>{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets && (
        <div className="article-list-block">
          {section.listTitle && <h3>{section.listTitle}</h3>}
          <List>
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </List>
        </div>
      )}
      {section.table && (
        <div className="article-table-wrap" tabIndex={0}>
          <table>
            <caption>{section.table.caption}</caption>
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th scope="col" key={header}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("-")}>
                  {row.map((cell, index) =>
                    index === 0 ? (
                      <th scope="row" key={cell}>
                        {cell}
                      </th>
                    ) : (
                      <td key={cell}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.note && (
        <aside className="article-note" aria-label={section.note.title}>
          <span aria-hidden="true">
            <Icon name="bolt" size={18} />
          </span>
          <div>
            <h3>{section.note.title}</h3>
            <p>{section.note.text}</p>
          </div>
        </aside>
      )}
    </section>
  );
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const articleSchema = {
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
        "@type": "BlogPosting",
        "@id": `${articleUrl}/#article`,
        url: articleUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${articleUrl}/#webpage`,
        },
        headline: post.title,
        description: post.description,
        image: {
          "@type": "ImageObject",
          url: `${siteUrl}${post.image}`,
          width: 1600,
          height: 900,
          caption: post.imageAlt,
        },
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: "fr-MA",
        articleSection: post.category,
        keywords: post.keywords.join(", "),
        author: {
          "@type": "Organization",
          name: "Équipe EVAtlas",
          url: `${siteUrl}/a-propos`,
        },
        publisher: { "@id": `${siteUrl}/#organization` },
        isPartOf: { "@id": `${siteUrl}/blog/#blog` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${articleUrl}/#breadcrumb`,
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
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: articleUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${articleUrl}/#faq`,
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content" className="article-page">
        <article>
          <header className="article-hero">
            <div className="container article-hero-inner">
              <nav className="article-breadcrumb" aria-label="Fil d’Ariane">
                <ol>
                  <li>
                    <TrackedLink href="/">Accueil</TrackedLink>
                  </li>
                  <li>
                    <TrackedLink href="/blog">Guides</TrackedLink>
                  </li>
                  <li aria-current="page">{post.category}</li>
                </ol>
              </nav>
              <div className="article-hero-copy">
                <p className="eyebrow">{post.category}</p>
                <h1>{post.title}</h1>
                <p className="article-deck">{post.description}</p>
                <div className="article-meta">
                  <span>Par l’équipe EVAtlas</span>
                  <span aria-hidden="true">•</span>
                  <time dateTime={post.datePublished}>
                    Publié le {formatDate(post.datePublished)}
                  </time>
                  <span aria-hidden="true">•</span>
                  <span>{post.readingTime} min de lecture</span>
                </div>
              </div>
            </div>
            <div className="container article-hero-media">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={1600}
                height={900}
                priority
                sizes="(max-width: 900px) 100vw, 1200px"
              />
              <p>Illustration éditoriale EVAtlas</p>
            </div>
          </header>

          <div className="container article-layout">
            <aside className="article-sidebar">
              <nav className="article-toc" aria-label="Sommaire de l’article">
                <p>Dans ce guide</p>
                <ol>
                  {post.sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#questions-frequentes">
                      <span>{String(post.sections.length + 1).padStart(2, "0")}</span>
                      Questions fréquentes
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="article-sidebar-cta">
                <p>Besoin d’un premier repère&nbsp;?</p>
                <TrackedLink
                  href="/simulateur"
                  className="text-link"
                  eventName="click_article_simulator"
                >
                  Ouvrir le simulateur <Icon name="arrow" size={15} />
                </TrackedLink>
              </div>
            </aside>

            <div className="article-content">
              <div className="article-introduction">
                {post.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <aside className="article-answer" aria-label="Réponse rapide">
                <p>La réponse courte</p>
                <strong>{post.quickAnswer}</strong>
              </aside>

              {post.sections.map((section) => (
                <ArticleSectionContent section={section} key={section.id} />
              ))}

              <section
                id="questions-frequentes"
                className="article-faq"
                aria-labelledby="article-faq-title"
              >
                <p className="eyebrow">Questions fréquentes</p>
                <h2 id="article-faq-title">Les réponses à retenir.</h2>
                <div className="article-faq-list">
                  {post.faq.map((item, index) => (
                    <details key={item.question} open={index === 0}>
                      <summary>
                        <span>{item.question}</span>
                        <Icon name="chevron" size={18} />
                      </summary>
                      <p>{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <aside className="article-editorial-note">
                <p>
                  <strong>Note éditoriale.</strong> Ce guide fournit des repères
                  généraux. Les caractéristiques du véhicule, les prescriptions du
                  fabricant et les conditions observées sur le site doivent être
                  vérifiées avant toute installation.
                </p>
                <time dateTime={post.dateModified}>
                  Dernière mise à jour : {formatDate(post.dateModified)}
                </time>
              </aside>
            </div>
          </div>
        </article>

        <section className="article-next-step section" aria-labelledby="next-step-title">
          <div className="container article-next-step-inner">
            <div>
              <p className="eyebrow">Votre prochaine étape</p>
              <h2 id="next-step-title">Transformez ces repères en configuration.</h2>
              <p>
                Comparez un premier scénario ou demandez à l’équipe EVAtlas de
                reprendre votre véhicule et les contraintes de votre site.
              </p>
            </div>
            <div className="article-next-step-actions">
              <TrackedLink
                href="/simulateur"
                className="button button-outline"
                eventName="click_article_simulator"
              >
                Simuler ma recharge <Icon name="arrow" size={17} />
              </TrackedLink>
              <TrackedLink
                href="/devis"
                className="button"
                eventName="click_article_quote"
              >
                Demander une étude <Icon name="arrow" size={17} />
              </TrackedLink>
              <TrackedLink
                href="/nos-produits/autel-maxicharger"
                className="text-link"
                eventName="click_article_product"
              >
                Découvrir l’Autel MaxiCharger <Icon name="arrow" size={15} />
              </TrackedLink>
            </div>
          </div>
        </section>

        <section className="article-related section" aria-labelledby="related-title">
          <div className="container">
            <div className="article-related-heading">
              <div>
                <p className="eyebrow">Continuer à explorer</p>
                <h2 id="related-title">Guides associés.</h2>
              </div>
              <TrackedLink href="/blog" className="text-link">
                Tous les guides <Icon name="arrow" size={15} />
              </TrackedLink>
            </div>
            <div className="article-related-grid">
              {relatedPosts.map((related) => (
                <article className="article-related-card" key={related.slug}>
                  <TrackedLink
                    href={`/blog/${related.slug}`}
                    className="article-related-media"
                    eventName="click_related_article"
                    aria-label={`Lire : ${related.title}`}
                  >
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      width={1600}
                      height={900}
                      loading="lazy"
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                  </TrackedLink>
                  <div>
                    <p>{related.category}</p>
                    <h3>
                      <TrackedLink
                        href={`/blog/${related.slug}`}
                        eventName="click_related_article"
                      >
                        {related.title}
                      </TrackedLink>
                    </h3>
                    <span>{related.readingTime} min de lecture</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
