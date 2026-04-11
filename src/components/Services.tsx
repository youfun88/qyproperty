import Image from "next/image";

const services = [
  { num: "01", title: "Strategy 投資策略", zh: "客製化資產配置建議，平衡風險與回報。", en: "Portfolio optimization for peak performance." },
  { num: "02", title: "Sourcing 精選房源", zh: "獨家離岸房源，鎖定聖地牙哥優質學區。", en: "Off-market access to premium coastal properties." },
  { num: "03", title: "Advisory 專業顧問", zh: "跨國遺產稅務諮詢，傳承家族財富。", en: "Cross-border tax and legacy planning." },
  { num: "04", title: "Renovation 增值翻修", zh: "專業設計與工程，提升房產轉售價值。", en: "Strategic upgrades to maximize property value." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-3xl font-extrabold text-primary mb-6 tracking-tight">
            Our Curated Services
            <br />
            <span className="text-secondary">核心服務範圍</span>
          </h2>
          <p className="text-on-surface-variant leading-loose mb-8">
            We don&apos;t just sell property; we curate investment portfolios that reflect
            your life&apos;s quality and future ambitions.
          </p>
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfG-FziJtUL9oJNG5aS7LB8v7VY-O9g6IqxiilUVtq6YNiA8LVqJ8VqkdyYUde2aSGA66NdZ_Hc97KxLShA1po437EbI9fAl1WpeWZbsd7R6yCs6lGE-erC69EJBihvov1ueMgEVjvppxx-1Ui7MwH6L8FCc4j27T_tysyzDMBQ1cReboNUbDKeRA6hHBRqSzq9RxhWV5Z0ZqMVACnxzMoqnCoINCV0YapaaqB4P7BH2O86s4TWZ_SqfvuIVL4qP4zn6UPMO1v3Xg"
            alt="Refined interior of a high-end office"
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
              <h4 className="text-xl font-bold mb-2">{s.title}</h4>
              <p className="text-on-surface-variant text-sm">
                {s.zh}
                <br />
                {s.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
