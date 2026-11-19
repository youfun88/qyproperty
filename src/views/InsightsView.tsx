import PageShell, { PageHero } from "@/components/PageShell";
import MarketInsights from "@/components/MarketInsights";
import ForParents from "@/components/ForParents";
import CaseStudies from "@/components/CaseStudies";
import FinalCTA from "@/components/FinalCTA";
import { href, type Lang } from "@/lib/site";
import { META } from "@/content/meta";
import { buyFromTaiwan } from "@/content/articles/buyFromTaiwan";

export default function InsightsView({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return (
    <PageShell lang={lang} page="insights">
      <PageHero
        lang={lang}
        page="insights"
        title={zh ? "聖地牙哥房地產市場洞察" : "San Diego Real Estate Market Insights"}
        intro={
          zh
            ? "聖地牙哥擁有頂尖大學（UCSD）、蓬勃發展的高科技生醫產業以及無與倫比的氣候，是資產穩定增值的首選。"
            : "San Diego offers top-tier universities, a booming biotech sector, and an unmatched climate — ideal for asset stability."
        }
      />
      <section className="py-16 px-6 md:px-16 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-primary mb-6">{zh ? "文章" : "Articles"}</h2>
          <a
            href={href(lang, "buyFromTaiwan")}
            className="block bg-surface-container-low rounded-xl p-6 hover:bg-surface-container transition-colors"
          >
            <h3 className="font-bold text-primary text-lg mb-2">{buyFromTaiwan[lang].headline}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{META.buyFromTaiwan[lang].description}</p>
          </a>
        </div>
      </section>
      <MarketInsights lang={lang} title={zh ? "聖地牙哥房市趨勢如何？" : "What are San Diego's market trends?"} />
      <ForParents
        lang={lang}
        title={zh ? "可以在孩子的大學附近置產嗎？" : "Can you buy a home near your child's university?"}
      />
      <CaseStudies lang={lang} />
      <FinalCTA lang={lang} />
    </PageShell>
  );
}
