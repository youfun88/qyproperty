"use client";

import { useState } from "react";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { href, PAGE_NAMES, type Lang, type PageKey } from "@/lib/site";

const NAV: { key: PageKey; en: string; zh: string }[] = [
  { key: "services", en: "Services", zh: "服務項目" },
  { key: "insights", en: "Insights", zh: "市場洞察" },
];

const MOBILE_EXTRA: PageKey[] = ["team", "faq"];

export default function Header({ lang, page }: { lang: Lang; page: PageKey }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  // The home page keeps its original look (Services underlined).
  const active: PageKey | null =
    page === "home" || page === "services" ? "services" : page === "insights" || page === "buyFromTaiwan" ? "insights" : null;

  const activeCls =
    "text-on-surface border-b-2 border-gold pb-1 font-[family-name:var(--font-manrope)] font-semibold tracking-tight";
  const idleCls = "text-on-surface/60 font-medium hover:text-gold transition-all duration-300";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 glass-nav shadow-[0_20px_40px_rgba(11,28,48,0.06)]">
      <div className="flex justify-between items-center px-6 md:px-16 w-full h-20 max-w-[1920px] mx-auto">
        <Logo lang={lang} />

        <div className="hidden md:flex gap-8 items-center">
          {NAV.map((n) => (
            <a
              key={n.key}
              className={active === n.key ? activeCls : idleCls}
              href={href(lang, n.key)}
              aria-current={page === n.key ? "page" : undefined}
            >
              {n[lang]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-surface-container-highest/60 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide text-on-surface">
            <a
              href={href("en", page)}
              hrefLang="en"
              lang="en"
              aria-current={lang === "en" ? "true" : undefined}
              className={lang === "en" ? "" : "text-on-surface/70 hover:text-gold"}
            >
              EN
            </a>
            {" / "}
            <a
              href={href("zh", page)}
              hrefLang="zh-Hant"
              lang="zh-Hant"
              aria-current={lang === "zh" ? "true" : undefined}
              className={lang === "zh" ? "" : "hover:text-gold"}
            >
              繁中
            </a>
          </div>
          <button
            className="md:hidden text-on-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={lang === "zh" ? "開啟選單" : "Toggle menu"}
            aria-expanded={mobileOpen}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="flex flex-col gap-4 bg-white/95 glass-nav px-6 py-6 md:hidden">
          {[...NAV.map((n) => n.key), ...MOBILE_EXTRA].map((k) => (
            <a
              key={k}
              href={href(lang, k)}
              onClick={() => setMobileOpen(false)}
              className={page === k ? "text-on-surface font-semibold" : "text-on-surface/60"}
            >
              {PAGE_NAMES[k][lang]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
