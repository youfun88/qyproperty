import type { Metadata } from "next";

export type Lang = "en" | "zh";

export const SITE_URL = "https://qyproperty.com";
export const CALENDLY_URL = "https://calendly.com/yufansapp/30min";
export const OG_IMAGE = `${SITE_URL}/img/og-qyproperty.jpg`;

export type PageKey = "home" | "services" | "insights" | "team" | "faq" | "privacy";

/** Path of each page in English. The Traditional Chinese twin lives under /zh. */
export const PATHS: Record<PageKey, string> = {
  home: "/",
  services: "/services/",
  insights: "/insights/",
  team: "/team/",
  faq: "/faq/",
  privacy: "/privacy/",
};

export const PAGE_KEYS = Object.keys(PATHS) as PageKey[];

export function href(lang: Lang, key: PageKey): string {
  return lang === "zh" ? `/zh${PATHS[key]}` : PATHS[key];
}

export function absUrl(lang: Lang, key: PageKey): string {
  return `${SITE_URL}${href(lang, key)}`;
}

/** Breadcrumb label for each page. */
export const PAGE_NAMES: Record<PageKey, Record<Lang, string>> = {
  home: { en: "Home", zh: "首頁" },
  services: { en: "Services", zh: "服務項目" },
  insights: { en: "Insights", zh: "市場洞察" },
  team: { en: "Team", zh: "專家團隊" },
  faq: { en: "FAQ", zh: "常見問題" },
  privacy: { en: "Privacy Policy", zh: "隱私權政策" },
};

/**
 * Per-page metadata: title, description, canonical, hreflang trio
 * (en / zh-Hant / x-default), Open Graph and Twitter tags.
 */
export function pageMetadata({
  lang,
  page,
  title,
  description,
}: {
  lang: Lang;
  page: PageKey;
  title: string;
  description: string;
}): Metadata {
  const url = absUrl(lang, page);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: absUrl("en", page),
        "zh-Hant": absUrl("zh", page),
        "x-default": absUrl("en", page),
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "QY Property",
      locale: lang === "zh" ? "zh_TW" : "en_US",
      alternateLocale: lang === "zh" ? ["en_US"] : ["zh_TW"],
      images: [{ url: OG_IMAGE, width: 512, height: 512, alt: "QY Property" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function breadcrumbLd(lang: Lang, page: PageKey) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: PAGE_NAMES.home[lang],
        item: absUrl(lang, "home"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: PAGE_NAMES[page][lang],
        item: absUrl(lang, page),
      },
    ],
  };
}
