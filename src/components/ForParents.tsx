import Image from "next/image";
import Icon from "@/components/Icon";
import type { Lang } from "@/lib/site";

export default function ForParents({ lang = "en", title }: { lang?: Lang; title?: string }) {
  const zh = lang === "zh";
  return (
    <section className="py-24 px-6 md:px-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="inline-block px-4 py-1 rounded-full border border-secondary text-secondary-fixed-dim text-xs font-bold mb-6 tracking-widest uppercase">
            {zh ? "傳承基石" : "The Legacy Foundation"}
          </div>
          <h2 className="text-4xl font-extrabold mb-8 leading-tight">
            {title ?? (zh ? "為您的下一代鋪路。" : "Securing the Future of Your Children.")}
            {!zh && !title && (
              <>
                <br />
                <span className="text-secondary-fixed-dim">為您的下一代鋪路。</span>
              </>
            )}
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <Icon name="school" className="text-secondary" />
              <div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-body)]">
                  {zh ? "鄰近頂尖名校" : "Top-Tier School Access"}
                </h3>
                <p className="text-surface-variant/80 text-sm">
                  選購 UC San Diego 等名校圈內的優質地產。
                  {!zh && (
                    <>
                      <br />
                      Housing located in the heart of elite educational hubs.
                    </>
                  )}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon name="home_pin" className="text-secondary" />
              <div>
                <h3 className="font-bold text-lg font-[family-name:var(--font-body)]">
                  {zh ? "穩健的避險資產" : "Safe Haven Assets"}
                </h3>
                <p className="text-surface-variant/80 text-sm">
                  在穩定的加州市場，為孩子準備第一份海外資產。
                  {!zh && (
                    <>
                      <br />
                      Stable asset appreciation for the next generation.
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <Image
            src="/img/campus-library.webp"
            alt={zh ? "知名大學校園圖書館" : "Prestigious university campus library"}
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl w-full"
          />
          <div className="absolute -bottom-8 -left-8 bg-secondary p-8 rounded-xl hidden md:block">
            <p className="text-primary font-bold text-2xl italic">
              {zh ? "「教育是最好的傳承。」" : "“Education is the best legacy.”"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
