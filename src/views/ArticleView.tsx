import PageShell, { PageHero } from "@/components/PageShell";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, absUrl, type Lang, type PageKey } from "@/lib/site";

export type Article = {
  headline: string;
  published: string;
  modified: string;
  updatedLabel: string;
  image: {
    src: string;
    srcSm: string;
    width: number;
    height: number;
    alt: string;
    credit: string;
    creditUrl: string;
  };
  about: string[];
  lead: React.ReactNode;
  body: React.ReactNode;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  disclaimer: string;
  cta: React.ReactNode;
};

/** One Insights article: title band with breadcrumb, header photo, body, FAQ, note and contact box. */
export default function ArticleView({ lang, page, article: a }: { lang: Lang; page: PageKey; article: Article }) {
  const inLanguage = lang === "zh" ? "zh-Hant" : "en";
  const url = absUrl(lang, page);
  return (
    <PageShell lang={lang} page={page}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.headline,
          inLanguage,
          datePublished: a.published,
          dateModified: a.modified,
          mainEntityOfPage: url,
          url,
          image: `${SITE_URL}${a.image.src}`,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          about: a.about,
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage,
          mainEntity: a.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <PageHero lang={lang} page={page} title={a.headline} />
      <article className="article max-w-3xl mx-auto px-6 py-12 text-on-surface leading-relaxed">
        <p className="text-sm text-on-surface-variant mb-6">{a.updatedLabel}</p>
        <figure className="mb-8">
          <img
            src={a.image.src}
            srcSet={`${a.image.srcSm} 800w, ${a.image.src} 1600w`}
            sizes="(max-width: 768px) 100vw, 720px"
            alt={a.image.alt}
            width={a.image.width}
            height={a.image.height}
            fetchPriority="high"
            className="w-full h-auto rounded-xl"
          />
          <figcaption className="text-xs text-on-surface-variant mt-2">
            <a href={a.image.creditUrl} target="_blank" rel="noopener">
              {a.image.credit}
            </a>
          </figcaption>
        </figure>
        <p className="text-lg bg-surface-container-lowest border-l-4 border-secondary rounded-md p-5 mb-4">{a.lead}</p>
        {a.body}
        <h2>{a.faqTitle}</h2>
        <div className="space-y-4">
          {a.faqs.map((f) => (
            <div key={f.q} className="bg-surface-container-low rounded-xl p-5">
              <h3 className="!mt-0">{f.q}</h3>
              <p className="!mb-0 text-on-surface-variant">{f.a}</p>
            </div>
          ))}
        </div>
        <p className="text-sm bg-surface-container-low rounded-lg p-4 mt-10">{a.disclaimer}</p>
        <div className="bg-primary-container text-white rounded-xl p-6 mt-8 [&_a]:text-secondary-container">{a.cta}</div>
      </article>
    </PageShell>
  );
}
