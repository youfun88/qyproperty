import Image from "next/image";
import type { Lang } from "@/lib/site";

export default function CaseStudies({ lang = "en", title }: { lang?: Lang; title?: string }) {
  const zh = lang === "zh";
  const figures = zh
    ? [
        ["購入價格", "$850,000 美元", false],
        ["目前估值", "$1,050,000 美元", false],
        ["淨租金投報率", "每年 6.1%", true],
        ["持有期間", "24 個月", false],
      ]
    : [
        ["Acquisition Price", "$850,000 USD", false],
        ["Current Valuation", "$1,050,000 USD", false],
        ["Net Rental Yield", "6.1% p.a.", true],
        ["Hold Period", "24 Months", false],
      ];
  return (
    <section id="case-studies" className="py-24 px-6 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-extrabold text-primary">
            {title ?? (zh ? "成交實績" : "Proven Results")}
            {!zh && !title && (
              <>
                <br />
                <span className="text-secondary text-xl font-medium">成交實績</span>
              </>
            )}
          </h2>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 h-80 lg:h-auto relative">
            <Image
              src="/img/coastal-residence.webp"
              alt={
                zh
                  ? "聖地牙哥擁有落地窗的現代豪華公寓"
                  : "Modern luxury condo in San Diego with floor-to-ceiling windows"
              }
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-12 flex flex-col justify-center">
            <div className="text-secondary font-bold text-sm mb-4 uppercase tracking-widest">
              {zh ? "聖地牙哥投資組合 #082" : "San Diego Portfolio #082"}
            </div>
            <h3 className="text-3xl font-bold mb-6 text-primary">
              {zh ? "濱海精品住宅" : "Luxury Coastal Residence"}
            </h3>
            <dl className="grid grid-cols-2 gap-8 mb-8">
              {figures.map(([label, value, accent]) => (
                <div key={label as string}>
                  <dt className="text-on-surface-variant text-xs uppercase mb-1">{label}</dt>
                  <dd className={`text-2xl font-bold ${accent ? "text-secondary" : "text-primary"}`}>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-on-surface-variant italic leading-relaxed">
              &ldquo;Quality Life, Yours 幫我們在聖地牙哥優質地段找到這間房，從翻修到招租僅花了6週時間，完全不需要我們親自飛過去。&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
