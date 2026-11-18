import Logo from "@/components/Logo";
import { href, type Lang } from "@/lib/site";

const T = {
  en: {
    tagline: "Architectural Investment Advisory for the modern Taiwanese global citizen.",
    quick: "Quick Links",
    company: "Company",
    office: "San Diego Office",
    services: "Advisory Services",
    insights: "Insights",
    team: "Our Team",
    faq: "FAQ",
    privacy: "Privacy Policy",
    other: "繁體中文",
    copyright: "QY LLC. Quality Life, Yours is a brand of QY LLC.",
  },
  zh: {
    tagline: "為放眼世界的新一代台灣家庭，提供精緻的房地產投資顧問服務。",
    quick: "快速連結",
    company: "關於我們",
    office: "聖地牙哥辦公室",
    services: "顧問服務",
    insights: "市場洞察",
    team: "專家團隊",
    faq: "常見問題",
    privacy: "隱私權政策",
    other: "English",
    copyright: "QY LLC。Quality Life, Yours 為 QY LLC 旗下品牌。",
  },
};

const linkCls = "hover:text-gold transition-colors duration-200";

export default function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = T[lang];
  return (
    <footer className="w-full py-16 bg-[#F8FAFC] text-on-surface">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-8 md:px-16 max-w-7xl mx-auto">
        <div>
          <Logo className="mb-6" lang={lang} />
          <p className="text-slate-500 text-sm leading-loose">{t.tagline}</p>
        </div>
        <div>
          <p className="font-bold mb-4">{t.quick}</p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a className={linkCls} href={href(lang, "services")}>{t.services}</a></li>
            <li><a className={linkCls} href={href(lang, "insights")}>{t.insights}</a></li>
            <li><a className={linkCls} href={href(lang, "faq")}>{t.faq}</a></li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">{t.company}</p>
          <ul className="space-y-3 text-sm text-slate-500">
            <li><a className={linkCls} href={href(lang, "team")}>{t.team}</a></li>
            <li><a className={linkCls} href={href(lang, "privacy")}>{t.privacy}</a></li>
            <li>
              <a
                className={linkCls}
                href={href(lang === "en" ? "zh" : "en", "home")}
                hrefLang={lang === "en" ? "zh-Hant" : "en"}
                lang={lang === "en" ? "zh-Hant" : "en"}
              >
                {t.other}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">{t.office}</p>
          <address className="not-italic text-sm text-slate-500 leading-relaxed">
            3600 Torrey View Ct
            <br />
            San Diego, CA 92130
            <br />
            <a className={linkCls} href="mailto:yufan@qyproperty.com">
              yufan@qyproperty.com
            </a>
          </address>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-outline-variant/10 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} {t.copyright}
      </div>
    </footer>
  );
}
