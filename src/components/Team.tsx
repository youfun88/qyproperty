import Image from "next/image";
import type { Lang } from "@/lib/site";

type Member = {
  img: string;
  name: string;
  role: string;
  zh: string;
  imgClassName?: string;
  dre?: string;
  phone?: string;
  office?: string;
};

// Bios exactly as on the original site.
const team: Member[] = [
  {
    img: "/img/team-yufan-chen-face-v3.webp",
    name: "Yufan Chen",
    role: "Investment Strategy",
    zh: "資產配置專家",
  },
  {
    img: "/img/team-queenie-wu.webp",
    name: "Queenie Wu",
    role: "Compliance & Tax",
    zh: "跨國法律顧問",
  },
  {
    img: "/img/team-daniel-lu-cpa.webp",
    name: "Daniel Lu CPA",
    role: "Financial Planning",
    zh: "註冊會計師",
  },
  {
    img: "/img/team-jean-riley.webp",
    name: "Jean Riley",
    role: "Professional Real Estate Consultant",
    zh: "當地資深經紀人",
    dre: "DRE #02004228 · Jeanify, Inc. (DRE #02414799)",
    phone: "(858) 598-3888",
    office: "9888 Carroll Centre Rd, Ste 200, San Diego, CA 92126",
  },
];

export default function Team({ lang = "en", title }: { lang?: Lang; title?: string }) {
  const zh = lang === "zh";
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-extrabold text-primary mb-4">
          {title ?? (zh ? "一站式專家顧問團" : "Your Professional Council")}
          <br />
          <span className="text-secondary font-medium text-xl">
            {zh ? "Your Professional Council" : "一站式專家顧問團"}
          </span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          我們與頂尖的法律、財務及地產專家緊密合作，確保您的投資每一步都穩健無虞。
        </p>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((m) => (
          <li key={m.name} className="text-center group">
            <div className="w-32 h-32 mx-auto rounded-full bg-surface-container overflow-hidden mb-4 border-2 border-transparent group-hover:border-secondary transition-all">
              <Image
                src={m.img}
                alt={m.name}
                width={128}
                height={128}
                className={`w-full h-full object-cover ${m.imgClassName ?? ""}`}
              />
            </div>
            <h3 className="font-bold text-primary font-[family-name:var(--font-body)]">{m.name}</h3>
            <p className="text-xs text-secondary font-bold mb-1">{m.role}</p>
            <p className="text-xs text-on-surface-variant">{m.zh}</p>
            {m.dre && m.phone && (
              <div className="mt-2 space-y-0.5 text-[11px] text-on-surface-variant">
                <p>{m.dre}</p>
                <p>
                  <a href={`tel:${m.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-secondary">
                    {m.phone}
                  </a>
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
