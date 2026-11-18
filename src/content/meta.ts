import type { Lang, PageKey } from "@/lib/site";

/** Title (≤60 characters) and meta description for every page, both languages. */
export const META: Record<PageKey, Record<Lang, { title: string; description: string }>> = {
  home: {
    en: {
      title: "San Diego Real Estate for Taiwanese Investors | QY Property",
      description:
        "QY Property helps Taiwanese families invest in San Diego homes: investment strategy, property sourcing, acquisition, renovation and property management, in English and 繁體中文.",
    },
    zh: {
      title: "QY Property｜台灣家庭投資聖地牙哥房地產的跨境顧問",
      description:
        "QY Property 專為台灣投資者打造，協助您投資美國加州聖地牙哥住宅：投資策略、精選房源、購置過戶、增值翻修到物業管理，一站式中英文服務。",
    },
  },
  services: {
    en: {
      title: "Cross-Border Real Estate Advisory Services | QY Property",
      description:
        "What QY Property does for Taiwanese investors in San Diego: strategy, off-market sourcing, cross-border tax and legacy planning, renovation, acquisition and management.",
    },
    zh: {
      title: "服務項目｜聖地牙哥房地產跨境投資顧問｜QY Property",
      description:
        "QY Property 為台灣投資者提供的聖地牙哥置產服務：投資策略、非公開房源、跨國稅務與傳承規劃、增值翻修、購置過戶與物業管理，以及三種服務方案。",
    },
  },
  insights: {
    en: {
      title: "San Diego Real Estate Market Insights | QY Property",
      description:
        "Why San Diego for Taiwanese investors: UCSD, the biotech sector and the climate, rental demand, housing near top universities for your children, and a client result.",
    },
    zh: {
      title: "聖地牙哥房市洞察｜QY Property",
      description:
        "為什麼台灣家庭選擇聖地牙哥：UCSD 等頂尖大學、生技產業與宜人氣候，租屋需求旺盛，還能在名校附近為孩子置產。附成交實績。",
    },
  },
  team: {
    en: {
      title: "Our Team: Your Professional Council | QY Property",
      description:
        "Meet the QY Property council: Yufan Chen (investment strategy), Queenie Wu (compliance & tax), Daniel Lu CPA (financial planning) and Jean Riley (real estate).",
    },
    zh: {
      title: "專家團隊｜一站式專家顧問團｜QY Property",
      description:
        "認識 QY Property 的專家顧問團：Yufan Chen（資產配置）、Queenie Wu（跨國法律顧問）、Daniel Lu CPA（註冊會計師）與 Jean Riley（當地資深經紀人）。",
    },
  },
  faq: {
    en: {
      title: "FAQ: Buying San Diego Property from Taiwan | QY Property",
      description:
        "How Taiwanese investors buy U.S. property, San Diego rental yields, buying for a child studying in the U.S., buying without visiting, and taxes on rental income.",
    },
    zh: {
      title: "常見問題｜台灣人如何購買聖地牙哥房產｜QY Property",
      description:
        "台灣投資者如何在美國買房、聖地牙哥租金投報率、為留學的孩子置產、不必親自赴美也能購屋，以及美國租金收入的稅務問題。",
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy | QY Property",
      description:
        "How QY LLC collects, uses, and protects your personal information across the QY Property advisory website and our landlord property-management apps.",
    },
    zh: {
      title: "隱私權政策｜QY Property",
      description:
        "QY LLC 如何在 QY Property 顧問網站及房東物業管理 App 中蒐集、使用與保護您的個人資料。",
    },
  },
};
