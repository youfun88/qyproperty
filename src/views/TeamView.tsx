import PageShell, { PageHero } from "@/components/PageShell";
import Team from "@/components/Team";
import JsonLd, { teamLd } from "@/components/JsonLd";
import FinalCTA from "@/components/FinalCTA";
import type { Lang } from "@/lib/site";

export default function TeamView({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return (
    <PageShell lang={lang} page="team">
      <JsonLd data={teamLd(lang)} />
      <PageHero
        lang={lang}
        page="team"
        title={zh ? "一站式專家顧問團" : "Your Professional Council"}
        intro={
          zh
            ? "我們與頂尖的法律、財務及地產專家緊密合作，確保您的投資每一步都穩健無虞。"
            : "We work closely with leading legal, financial and real estate professionals so that every step of your investment is sound."
        }
      />
      <Team lang={lang} title={zh ? "誰會協助您完成投資？" : "Who will guide your investment?"} />
      <FinalCTA lang={lang} />
    </PageShell>
  );
}
