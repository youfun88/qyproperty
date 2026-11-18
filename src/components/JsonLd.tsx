import { SITE_URL, absUrl, type Lang } from "@/lib/site";
import { faqs } from "@/content/faq";

/** Renders one JSON-LD block. */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Organization + ProfessionalService, home pages only. Facts stated on the site only. */
export function organizationLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: "QY Property",
    legalName: "QY LLC",
    alternateName: ["Quality Life, Yours", "QY LLC"],
    slogan: "Quality Life, Yours.",
    description:
      lang === "zh"
        ? "QY Property 協助台灣家庭投資美國加州聖地牙哥的住宅房地產，提供投資策略、精選房源、購置、翻修與物業管理的一站式跨境服務，以英文與繁體中文服務。"
        : "Cross-border real estate investment advisory helping Taiwanese families invest in San Diego, California residential properties: investment strategy, property sourcing, acquisition, renovation and property management, in English and Traditional Chinese.",
    url: absUrl(lang, "home"),
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/apple-icon.png`,
    email: "yufan@qyproperty.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3600 Torrey View Ct",
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92130",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "San Diego",
      containedInPlace: { "@type": "State", name: "California" },
    },
    knowsLanguage: ["en", "zh-Hant"],
    knowsAbout: [
      "Cross-border real estate investment",
      "San Diego residential real estate",
      "Taiwan to United States property investment",
      "Rental property management",
    ],
  };
}

export function websiteLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "QY Property — Quality Life, Yours",
    url: absUrl(lang, "home"),
    inLanguage: lang === "zh" ? "zh-Hant" : "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** FAQPage, only on the /faq/ pages where every Q&A below is shown in full. */
export function faqLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang === "zh" ? "zh-Hant" : "en",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: lang === "zh" ? f.qZh : f.q,
      acceptedAnswer: { "@type": "Answer", text: lang === "zh" ? f.aZh : f.a },
    })),
  };
}

/** Service description for the /services/ pages, built from the services shown there. */
export function servicesLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: lang === "zh" ? "跨境房地產投資顧問" : "Cross-Border Real Estate Investment Advisory",
    serviceType: "Real Estate Investment Advisory",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "San Diego, California, USA",
    audience: {
      "@type": "Audience",
      audienceType: lang === "zh" ? "台灣房地產投資者" : "Taiwanese real estate investors",
    },
    availableLanguage: ["English", "Traditional Chinese"],
    url: absUrl(lang, "services"),
  };
}
