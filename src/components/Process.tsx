const steps = [
  { icon: "chat_bubble", title: "Consultation", zh: "初步諮詢與需求評估", en: "Initial strategy alignment.", highlight: false },
  { icon: "map", title: "Custom Plan", zh: "量身打造投資組合", en: "Tailored portfolio design.", highlight: false },
  { icon: "key", title: "Acquisition", zh: "專業代購與過戶手續", en: "Sourcing & transaction support.", highlight: true },
  { icon: "real_estate_agent", title: "Management", zh: "租賃管理與定期維護", en: "Endless property oversight.", highlight: false },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold text-primary mb-4">
          A Seamless Journey <span className="text-secondary">| 投資流程</span>
        </h2>
        <div className="h-1 w-20 bg-secondary mx-auto" />
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 -z-10" />
        {steps.map((s) => (
          <div key={s.title} className="flex flex-col items-center text-center p-6">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-surface shadow-lg mb-6 ${
                s.highlight ? "bg-secondary" : "bg-white"
              }`}
            >
              <span className={`material-symbols-outlined ${s.highlight ? "text-white" : "text-primary"}`}>
                {s.icon}
              </span>
            </div>
            <h4 className="font-bold mb-2">{s.title}</h4>
            <p className="text-xs text-on-surface-variant">
              {s.zh}
              <br />
              {s.en}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
