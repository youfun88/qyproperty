import PageShell from "@/components/PageShell";
import JsonLd, { organizationLd, websiteLd } from "@/components/JsonLd";
import Hero from "@/components/Hero";
import TrustPillars from "@/components/TrustPillars";
import Services from "@/components/Services";
import ForParents from "@/components/ForParents";
import Process from "@/components/Process";
import MarketInsights from "@/components/MarketInsights";
import PricingTiers from "@/components/PricingTiers";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { href, type Lang } from "@/lib/site";

export default function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <JsonLd data={organizationLd(lang)} />
      <JsonLd data={websiteLd(lang)} />
      <PageShell lang={lang} page="home">
        <Hero lang={lang} />
        <TrustPillars lang={lang} />
        <Services lang={lang} />
        <ForParents lang={lang} />
        <Process lang={lang} />
        <section className="px-6 md:px-16 pb-16 bg-surface">
          <div className="max-w-3xl mx-auto bg-surface-container-low rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-primary mb-2">{lang === "zh" ? "延伸閱讀" : "Further reading"}</h2>
            <a href={href(lang, "buyFromTaiwan")} className="text-secondary font-semibold underline">
              {lang === "zh"
                ? "人在台灣，怎麼遠端買聖地牙哥的房子？流程與分工"
                : "Buying a San Diego home from Taiwan: steps and who does what"}
            </a>
          </div>
        </section>
        <MarketInsights lang={lang} />
        <PricingTiers lang={lang} />
        <CaseStudies lang={lang} />
        <Team lang={lang} />
        <FAQ lang={lang} />
        <FinalCTA lang={lang} />
      </PageShell>
    </>
  );
}
