const tiers = [
  {
    name: "First-Time Investor",
    level: "Entry Level",
    features: ["Property Sourcing", "Basic Tax Intro", "Standard Mgmt"],
    cta: "Enquire",
    featured: false,
  },
  {
    name: "High-Net-Worth",
    level: "Portfolio Growth",
    features: ["Off-Market Deals", "Full Legacy Planning", "Renovation Strategy"],
    cta: "Start Consultation",
    featured: true,
  },
  {
    name: "Institutional",
    level: "Custom Scale",
    features: ["Multi-Unit Sourcing", "Advanced Commercial", "Corporate Structures"],
    cta: "Contact Expert",
    featured: false,
  },
];

export default function PricingTiers() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">
            Investment Tiers <span className="text-secondary">| 服務方案</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`p-8 rounded-xl transition-shadow ${
                t.featured
                  ? "bg-primary text-white shadow-2xl relative transform md:scale-105"
                  : "border border-outline-variant/30 hover:shadow-2xl"
              }`}
            >
              {t.featured && (
                <div className="absolute top-0 right-0 bg-secondary text-primary px-4 py-1 text-xs font-bold rounded-bl-xl uppercase tracking-tighter">
                  Recommended
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{t.name}</h3>
              <p
                className={`font-extrabold text-3xl mb-6 ${
                  t.featured ? "text-secondary-fixed-dim" : "text-secondary"
                }`}
              >
                {t.level}
              </p>
              <ul className={`space-y-4 text-sm mb-8 ${t.featured ? "text-surface-variant/80" : "text-on-surface-variant"}`}>
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span
                      className={`material-symbols-outlined text-sm ${
                        t.featured ? "text-secondary" : "text-green-600"
                      }`}
                    >
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/yufansapp/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 font-bold rounded-lg transition-colors text-center ${
                  t.featured
                    ? "bg-secondary text-primary hover:bg-white"
                    : "border border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
