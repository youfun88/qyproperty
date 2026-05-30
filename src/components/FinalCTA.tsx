import Image from "next/image";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-24 px-6 md:px-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWimjGQ-miQVOyWlSMhWXJ0XYXFt0hbiNXm2CpAERWC2kbIwVCAJS3HLWNdLvnRvI82LnjlW8T0Fr-ymzYv5Qk4nFn0EIVwtGR3KIcOQWOKhZH_ePGubAL2opmYo0AoV_uwbY96jsIs3gb5C6bmHi5PoE7jRe4NMNMTUbzvYSwzJsKHn-gxtSmenskUs9oSFTkKi_FWRpWQCUn1cKit4pUmdCA9FNGlRg_Jj0GdDUNgyCuXyVPJJm8owW__xTLoza9squzlcK0L8k"
          alt="Aerial view of San Diego skyline and bay"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Start Your U.S. Real Estate Investment Journey Today.
        </h2>
        <p className="text-surface-variant/80 text-xl mb-12">
          今天就與專家聯繫，為您的家庭財富與下一代的未來開啟新篇章。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:yufan@qyproperty.com"
            className="bg-secondary text-primary px-10 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-transform inline-block"
          >
            Schedule Free Consultation
          </a>
        </div>
        <p className="mt-12 text-surface-variant/40 text-sm">
          No commitment required. Expert advice only.
        </p>
      </div>
    </section>
  );
}
