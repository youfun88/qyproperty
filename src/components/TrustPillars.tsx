import Icon, { type IconName } from "@/components/Icon";
import type { Lang } from "@/lib/site";

const pillars: {
  icon: IconName;
  title: string;
  titleZh: string;
  zh: string;
  en: string;
  highlight: boolean;
}[] = [
  {
    icon: "public",
    title: "Cross-Border Expertise",
    titleZh: "跨境專業",
    zh: "跨國法律與稅務專家團隊，消除您的投資隔閡。",
    en: "Seamless navigation through international legal and tax complexities.",
    highlight: false,
  },
  {
    icon: "analytics",
    title: "Data-Driven",
    titleZh: "數據導向",
    zh: "利用自有數據分析，精確鎖定高增長地段。",
    en: "Leveraging proprietary analytics for high-yield property selection.",
    highlight: false,
  },
  {
    icon: "all_inclusive",
    title: "End-to-End",
    titleZh: "一站式服務",
    zh: "從選址、翻修到物業管理，全程一站式服務。",
    en: "Complete lifecycle management from acquisition to daily operations.",
    highlight: false,
  },
  {
    icon: "flag",
    title: "Built for Taiwan",
    titleZh: "專為台灣打造",
    zh: "深入了解台灣投資者的財務結構與遺產規劃需求。",
    en: "Tailored specifically for Taiwanese wealth structures.",
    highlight: true,
  },
];

export default function TrustPillars({
  lang = "en",
  title,
}: {
  lang?: Lang;
  /** Visible heading (sub-pages). On the home page the heading is screen-reader only. */
  title?: string;
}) {
  const zh = lang === "zh";
  const heading = zh ? "為什麼選擇 QY Property？" : "Why choose QY Property?";
  return (
    <section className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        {title ? (
          <h2 className="text-3xl font-extrabold text-primary mb-12 text-center">{title}</h2>
        ) : (
          <h2 className="sr-only">{heading}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`bg-surface-container-low p-8 rounded-xl transition-transform hover:-translate-y-1 ${
                p.highlight ? "border-2 border-secondary/20" : ""
              }`}
            >
              <Icon name={p.icon} className="text-secondary text-4xl mb-4 block" />
              <h3 className="text-xl font-bold mb-3 text-primary">{zh ? p.titleZh : p.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {p.zh}
                {!zh && (
                  <>
                    <br />
                    <span className="opacity-80">{p.en}</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
