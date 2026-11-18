import Icon from "@/components/Icon";
import { CALENDLY_URL, type Lang } from "@/lib/site";

const tiers = [
  {
    name: "First-Time Investor",
    nameZh: "首次投資者",
    level: "Entry Level",
    levelZh: "入門方案",
    features: ["Property Sourcing", "Basic Tax Intro", "Standard Mgmt"],
    featuresZh: ["房源搜尋", "稅務基礎說明", "標準物業管理"],
    cta: "Enquire",
    ctaZh: "洽詢",
    featured: false,
  },
  {
    name: "High-Net-Worth",
    nameZh: "高資產人士",
    level: "Portfolio Growth",
    levelZh: "資產組合成長",
    features: ["Off-Market Deals", "Full Legacy Planning", "Renovation Strategy"],
    featuresZh: ["非公開物件", "完整傳承規劃", "翻修增值策略"],
    cta: "Start Consultation",
    ctaZh: "預約諮詢",
    featured: true,
  },
  {
    name: "Institutional",
    nameZh: "機構投資者",
    level: "Custom Scale",
    levelZh: "客製規模",
    features: ["Multi-Unit Sourcing", "Advanced Commercial", "Corporate Structures"],
    featuresZh: ["多戶型物件搜尋", "進階商業配置", "企業持有架構"],
    cta: "Contact Expert",
    ctaZh: "聯繫專家",
    featured: false,
  },
];

export default function PricingTiers({ lang = "en", title }: { lang?: Lang; title?: string }) {
  const zh = lang === "zh";
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">
            {title ?? (zh ? "服務方案" : "Investment Tiers")}{" "}
            <span className="text-secondary">{zh ? "| 投資方案" : "| 服務方案"}</span>
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
                  {zh ? "推薦" : "Recommended"}
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{zh ? t.nameZh : t.name}</h3>
              <p
                className={`font-extrabold text-3xl mb-6 ${
                  t.featured ? "text-secondary-fixed-dim" : "text-secondary"
                }`}
              >
                {zh ? t.levelZh : t.level}
              </p>
              <ul className={`space-y-4 text-sm mb-8 ${t.featured ? "text-surface-variant/80" : "text-on-surface-variant"}`}>
                {(zh ? t.featuresZh : t.features).map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Icon
                      name="check_circle"
                      className={`text-sm ${t.featured ? "text-secondary" : "text-green-600"}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 font-bold rounded-lg transition-colors text-center ${
                  t.featured
                    ? "bg-secondary text-primary hover:bg-white"
                    : "border border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {zh ? t.ctaZh : t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
