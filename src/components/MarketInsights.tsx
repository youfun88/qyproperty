import Image from "next/image";

const stats = [
  { label: "Average Yield 租金投報率", value: "5.8% +" },
  { label: "Annual Appreciation 年均增值", value: "7.2%" },
  { label: "Rental Demand 租屋需求", value: "Extremely High" },
];

export default function MarketInsights() {
  return (
    <section id="insights" className="py-24 px-6 md:px-16 bg-surface-container-low">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold text-primary mb-6">
            San Diego Market Trends
            <br />
            <span className="text-secondary">聖地牙哥市場洞察</span>
          </h2>
          <div className="space-y-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white p-6 rounded-lg flex justify-between items-center shadow-sm"
              >
                <span className="font-semibold">{s.label}</span>
                <span className="text-secondary font-bold text-xl">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-primary p-8 rounded-2xl text-white">
            <h4 className="text-xl font-bold mb-4">Why San Diego?</h4>
            <p className="text-surface-variant/80 text-sm leading-loose mb-6">
              聖地牙哥擁有頂尖大學(UCSD)、蓬勃發展的高科技生醫產業以及無與倫比的氣候，是資產穩定增值的首選。
              <br />
              <span className="italic">
                San Diego offers top-tier universities, a booming biotech sector, and an
                unmatched climate — ideal for asset stability.
              </span>
            </p>
            <div className="h-48 bg-surface-container-highest/10 rounded-lg overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkY0arooBG1BCChLA0WL6hA7jUaC37jad9PwX41N83IN4MRWf-Ch-Cgxwh48c1K6z2rdhRDQSBYbvFFirNNyS2GMY_BODB0SXJom_9iuEkzJtvKS5JTubONIXPuUV-xFIxXg23ie2pS5I9ZE3gToQQRSur8NYrDLpcZk90OxqYwchG4Komncu7oWfhuXloVERQcz7NlnC9u9K1u7eEAHCm-q6JZenljuksEbTzfKGE16CseX-f31BW6ZtidwM3XT0gRvz4BWyhL5Y"
                alt="Real estate growth trends dashboard"
                width={500}
                height={200}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
