const pillars = [
  {
    icon: "public",
    title: "Cross-Border Expertise",
    zh: "跨國法律與稅務專家團隊，消除您的投資隔閡。",
    en: "Seamless navigation through international legal and tax complexities.",
    highlight: false,
  },
  {
    icon: "analytics",
    title: "Data-Driven",
    zh: "利用專利數據分析，精確鎖定高增長地段。",
    en: "Leveraging proprietary analytics for high-yield property selection.",
    highlight: false,
  },
  {
    icon: "all_inclusive",
    title: "End-to-End",
    zh: "從選址、翻修到物業管理，全程一站式服務。",
    en: "Complete lifecycle management from acquisition to daily operations.",
    highlight: false,
  },
  {
    icon: "flag",
    title: "Built for Taiwan",
    zh: "深入了解台灣投資者的財務結構與遺產規劃需求。",
    en: "Tailored specifically for Taiwanese wealth structures.",
    highlight: true,
  },
];

export default function TrustPillars() {
  return (
    <section className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={`bg-surface-container-low p-8 rounded-xl transition-transform hover:-translate-y-1 ${
                p.highlight ? "border-2 border-secondary/20" : ""
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">
                {p.icon}
              </span>
              <h3 className="text-xl font-bold mb-3 text-primary">{p.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {p.zh}
                <br />
                <span className="opacity-70">{p.en}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
