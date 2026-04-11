import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[795px] flex items-center overflow-hidden bg-primary px-6 md:px-16 py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10" />
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIpNOZmzReNB0o9yWENLdSWCCiR3-CNaMbdn1RXa5FA1XU0HZiTqk706-xPPUE4mhKQjTTPegmPokiEs4N0sMw6RpVCGM-wF0Gzapkxtkqptdop1pNTPfuNhhEYmr_TL81w_0Io5MgbtL-B9Mvhgky5u7vVpBLKhvwehcmKnr1adXla5_8Tprz3eIdzKFFqYasgP1AvI7cumScEFQhUFEIwicgpSC5hg7zovhonhpHHPgW5P5Reo_FuOV39325Umn9rdfALb-tJ0E"
          alt="Ultra-luxury modern architectural home in La Jolla San Diego overlooking the Pacific Ocean at twilight"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative z-20 max-w-3xl">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter mb-6">
          Invest in California Real Estate.{" "}
          <span className="text-secondary-fixed-dim">Build Wealth Today.</span>{" "}
          Secure Your Child&apos;s Future Tomorrow.
        </h1>
        <p className="text-surface-variant/80 text-xl mb-10 leading-relaxed max-w-2xl font-light">
          專為台灣投資者打造。從聖地牙哥到全美，為您的下一代奠定穩健的資產基礎與教育未來。
          <br />
          <span className="text-sm opacity-60">
            Crafted for Taiwanese investors. From San Diego to the US, securing legacy and education.
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#cta"
            className="bg-[#d6e3ff] text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary-container transition-colors flex items-center justify-center gap-2"
          >
            Get Started <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a
            href="#case-studies"
            className="border border-outline-variant/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-colors text-center"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
