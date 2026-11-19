import PageShell, { PageHero } from "@/components/PageShell";
import JsonLd, { faqLd } from "@/components/JsonLd";
import { FAQList } from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { href, type Lang } from "@/lib/site";

export default function FaqView({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return (
    <PageShell lang={lang} page="faq">
      <JsonLd data={faqLd(lang)} />
      <PageHero
        lang={lang}
        page="faq"
        title={zh ? "常見問題" : "Frequently Asked Questions"}
        intro={
          zh
            ? "投資美國房地產前，您最想知道的問題。"
            : "The questions Taiwanese families ask most before investing in U.S. real estate."
        }
      />
      <FAQList lang={lang} />
      <section className="px-6 md:px-16 pb-16 bg-surface">
        <div className="max-w-3xl mx-auto bg-surface-container-low rounded-xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-primary mb-2">{zh ? "延伸閱讀" : "Further reading"}</h2>
          <a href={href(lang, "buyFromTaiwan")} className="text-secondary font-semibold underline">
            {zh
              ? "人在台灣，怎麼遠端買聖地牙哥的房子？流程與分工"
              : "Buying a San Diego home from Taiwan: steps and who does what"}
          </a>
        </div>
      </section>
      <FinalCTA lang={lang} />
    </PageShell>
  );
}
