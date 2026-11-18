import PageShell, { PageHero } from "@/components/PageShell";
import JsonLd, { faqLd } from "@/components/JsonLd";
import { FAQList } from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import type { Lang } from "@/lib/site";

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
      <FinalCTA lang={lang} />
    </PageShell>
  );
}
