import type { MetadataRoute } from "next";
import { absUrl, PAGE_KEYS, type PageKey } from "@/lib/site";

// Pre-render at build time so it works with `output: "export"` (GitHub Pages).
export const dynamic = "force-static";

const SETTINGS: Record<PageKey, { changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }> = {
  home: { changeFrequency: "weekly", priority: 1 },
  services: { changeFrequency: "monthly", priority: 0.9 },
  insights: { changeFrequency: "monthly", priority: 0.8 },
  team: { changeFrequency: "monthly", priority: 0.7 },
  faq: { changeFrequency: "monthly", priority: 0.8 },
  privacy: { changeFrequency: "yearly", priority: 0.3 },
  buyFromTaiwan: { changeFrequency: "monthly", priority: 0.7 },
};

/** Every public page in both languages, each with en / zh-Hant / x-default alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return PAGE_KEYS.flatMap((page) => {
    const languages = {
      en: absUrl("en", page),
      "zh-Hant": absUrl("zh", page),
      "x-default": absUrl("en", page),
    };
    return (["en", "zh"] as const).map((lang) => ({
      url: absUrl(lang, page),
      lastModified,
      ...SETTINGS[page],
      alternates: { languages },
    }));
  });
}
