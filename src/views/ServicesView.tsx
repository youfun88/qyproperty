import PageShell, { PageHero } from "@/components/PageShell";
import JsonLd, { servicesLd } from "@/components/JsonLd";
import Services from "@/components/Services";
import TrustPillars from "@/components/TrustPillars";
import Process from "@/components/Process";
import PricingTiers from "@/components/PricingTiers";
import FinalCTA from "@/components/FinalCTA";
import type { Lang } from "@/lib/site";

export default function ServicesView({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return (
    <PageShell lang={lang} page="services">
      <JsonLd data={servicesLd(lang)} />
      <PageHero
        lang={lang}
        page="services"
        title={zh ? "跨境房地產投資顧問服務" : "Cross-Border Real Estate Advisory Services"}
        intro={
          zh
            ? "從投資策略、精選房源、購置過戶、增值翻修到物業管理，為投資聖地牙哥住宅的台灣家庭提供一站式服務。"
            : "End-to-end support for Taiwanese families investing in San Diego residential property: investment strategy, property sourcing, acquisition, renovation and property management."
        }
      />
      <Services
        lang={lang}
        title={zh ? "QY Property 提供哪些服務？" : "What services does QY Property offer?"}
        subtitle="核心服務範圍"
      />
      <TrustPillars lang={lang} title={zh ? "為什麼選擇 QY Property？" : "Why work with QY Property?"} />
      <Process lang={lang} title={zh ? "投資流程如何進行？" : "How does the investment process work?"} />
      <PricingTiers lang={lang} title={zh ? "哪一種方案適合您？" : "Which investment tier fits you?"} />
      <FinalCTA lang={lang} />
    </PageShell>
  );
}
