import Icon from "@/components/Icon";
import { faqs } from "@/content/faq";
import { href, type Lang } from "@/lib/site";

/**
 * Home-page FAQ accordion. Native <details>, so every answer is in the HTML
 * (crawlable) and no JavaScript is needed to open it.
 */
export default function FAQ({ lang = "en" }: { lang?: Lang }) {
  const zh = lang === "zh";
  return (
    <section className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary mb-4">
            {zh ? "常見問題" : "Frequently Asked Questions"}{" "}
            <span className="text-secondary">{zh ? "| FAQ" : "| 常見問題"}</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            <a href={href(lang, "faq")} className="hover:text-secondary">
              投資美國房地產前，您最想知道的問題。
            </a>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-surface-container-low rounded-xl overflow-hidden transition-all"
            >
              <summary className="w-full flex justify-between items-start gap-4 p-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div>
                  <h3 className="font-bold text-primary">{zh ? faq.qZh : faq.q}</h3>
                  {!zh && <p className="text-sm text-on-surface-variant mt-1">{faq.qZh}</p>}
                </div>
                <Icon
                  name="expand_more"
                  className="text-secondary shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-6 pb-6">
                <p className="text-on-surface-variant text-sm leading-relaxed">{zh ? faq.aZh : faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Full FAQ for the /faq/ pages: every question is an H2 with its answer shown. */
export function FAQList({ lang = "en" }: { lang?: Lang }) {
  const zh = lang === "zh";
  return (
    <section className="py-20 px-6 md:px-16 bg-surface">
      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq) => (
          <article key={faq.q} className="bg-surface-container-low rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary">{zh ? faq.qZh : faq.q}</h2>
            {!zh && (
              <p className="text-sm text-on-surface-variant mt-1" lang="zh-Hant">
                {faq.qZh}
              </p>
            )}
            <p className="text-on-surface-variant leading-relaxed mt-4">{zh ? faq.aZh : faq.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
