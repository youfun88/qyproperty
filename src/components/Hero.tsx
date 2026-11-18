import Icon from "@/components/Icon";
import type { Lang } from "@/lib/site";

export default function Hero({ lang = "en" }: { lang?: Lang }) {
  const zh = lang === "zh";
  return (
    <section className="relative min-h-[795px] flex items-center overflow-hidden bg-primary px-6 md:px-16 py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, pre-sized WebP */}
        <img
          src="/img/hero-la-jolla.webp"
          alt={
            zh
              ? "聖地牙哥 La Jolla 面向太平洋的現代建築豪宅，暮色時分"
              : "Ultra-luxury modern architectural home in La Jolla San Diego overlooking the Pacific Ocean at twilight"
          }
          width={512}
          height={512}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative z-20 max-w-3xl">
        {zh ? (
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-6">
            投資加州房地產。
            <span className="text-secondary-fixed-dim">今天累積財富，</span>
            明天守護孩子的未來。
          </h1>
        ) : (
          <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-6">
            Invest in California Real Estate.{" "}
            <span className="text-secondary-fixed-dim">Build Wealth Today.</span>{" "}
            Secure Your Child&apos;s Future Tomorrow.
          </h1>
        )}
        <p className="text-surface-variant/80 text-xl mb-10 leading-relaxed max-w-2xl font-light">
          專為台灣投資者打造。從聖地牙哥到全美，為您的下一代奠定穩健的資產基礎與教育未來。
          {!zh && (
            <>
              <br />
              <span className="text-sm opacity-60" lang="en">
                Crafted for Taiwanese investors. From San Diego to the US, securing legacy and education.
              </span>
            </>
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#cta"
            className="bg-[#d6e3ff] text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-container transition-colors flex items-center justify-center gap-2"
          >
            {zh ? "立即開始" : "Get Started"} <Icon name="arrow_forward" />
          </a>
          <a
            href="#case-studies"
            className="border border-outline-variant/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-colors text-center"
          >
            {zh ? "查看投資實績" : "View Portfolio"}
          </a>
        </div>
      </div>
    </section>
  );
}
