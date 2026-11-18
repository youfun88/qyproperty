import Image from "next/image";
import type { Lang } from "@/lib/site";

const services = [
  { num: "01", title: "Strategy 投資策略", titleZh: "投資策略", zh: "客製化資產配置建議，平衡風險與回報。", en: "Portfolio optimization for peak performance." },
  { num: "02", title: "Sourcing 精選房源", titleZh: "精選房源", zh: "獨家非公開房源，鎖定聖地牙哥優質學區。", en: "Off-market access to premium coastal properties." },
  { num: "03", title: "Advisory 專業顧問", titleZh: "專業顧問", zh: "跨國遺產稅務諮詢，傳承家族財富。", en: "Cross-border tax and legacy planning." },
  { num: "04", title: "Renovation 增值翻修", titleZh: "增值翻修", zh: "專業設計與工程，提升房產轉售價值。", en: "Strategic upgrades to maximize property value." },
];

export default function Services({
  lang = "en",
  title,
  subtitle,
}: {
  lang?: Lang;
  title?: string;
  subtitle?: string;
}) {
  const zh = lang === "zh";
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">
            {title ?? (zh ? "核心服務範圍" : "Our Curated Services")}
            <br />
            <span className="text-secondary">
              {subtitle ?? (zh ? "我們提供哪些服務？" : "核心服務範圍")}
            </span>
          </h2>
          <p className="text-on-surface-variant leading-loose mb-8">
            {zh
              ? "我們不只是賣房子，而是為您打造能反映生活品質與未來抱負的投資組合。"
              : "We don’t just sell property; we curate investment portfolios that reflect your life’s quality and future ambitions."}
          </p>
          <Image
            src="/img/office-interior.webp"
            alt={zh ? "高級辦公室的精緻室內空間" : "Refined interior of a high-end office"}
            width={400}
            height={300}
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl w-full"
          />
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.num}
              className="group p-8 border-b border-outline-variant/30 hover:bg-surface-container-low transition-all"
            >
              <span className="text-secondary font-bold text-lg mb-2 block">{s.num}</span>
              <h3 className="text-xl font-bold mb-2 font-[family-name:var(--font-body)]">
                {zh ? s.titleZh : s.title}
              </h3>
              <p className="text-on-surface-variant text-sm">
                {s.zh}
                {!zh && (
                  <>
                    <br />
                    {s.en}
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
