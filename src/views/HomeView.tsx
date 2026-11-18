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
import type { Lang } from "@/lib/site";

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
