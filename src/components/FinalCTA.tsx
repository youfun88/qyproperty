import Image from "next/image";
import { CALENDLY_URL, type Lang } from "@/lib/site";

export default function FinalCTA({ lang = "en" }: { lang?: Lang }) {
  const zh = lang === "zh";
  return (
    <section id="cta" className="py-24 px-6 md:px-16 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/img/san-diego-skyline.webp"
          alt={zh ? "聖地牙哥天際線與海灣空拍" : "Aerial view of San Diego skyline and bay"}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          {zh ? "今天就開始您的美國房地產投資之旅。" : "Start Your U.S. Real Estate Investment Journey Today."}
        </h2>
        <p className="text-surface-variant/80 text-xl mb-12">
          今天就與專家聯繫，為您的家庭財富與下一代的未來開啟新篇章。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-primary px-10 py-5 rounded-lg font-bold text-xl hover:scale-105 transition-transform inline-block"
          >
            {zh ? "預約免費諮詢" : "Schedule Free Consultation"}
          </a>
        </div>
        <p className="mt-12 text-surface-variant/70 text-sm">
          {zh ? "無需任何承諾，只提供專業建議。" : "No commitment required. Expert advice only."}
        </p>
      </div>
    </section>
  );
}
