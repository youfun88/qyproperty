"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How can Taiwanese investors buy property in the United States?",
    qZh: "台灣投資者如何在美國購買房產？",
    a: "Taiwanese investors can purchase U.S. real estate through proper entity structuring (typically an LLC or Trust), obtaining an ITIN (Individual Taxpayer Identification Number), and working with cross-border advisors. QY Property provides end-to-end support including legal entity setup, FIRPTA compliance, and remote transaction management — all in Mandarin and English.",
  },
  {
    q: "What is the average rental yield for San Diego residential properties?",
    qZh: "聖地牙哥住宅的平均租金投報率是多少？",
    a: "San Diego residential properties typically yield 5.8% or higher in net rental income, depending on the neighborhood and property type. Areas near UCSD and the biotech corridor (La Jolla, University City, Carmel Valley) tend to perform especially well due to consistent demand from students, researchers, and professionals.",
  },
  {
    q: "Can I buy a property for my child who will study in the U.S.?",
    qZh: "我可以為將來在美國留學的孩子購買房產嗎？",
    a: "Yes — this is one of the most popular strategies among our Taiwanese clients. Parents purchase a property near their child's university, rent it out for income until the child enrolls, and then provide housing during their studies. This approach generates rental income, builds equity through appreciation, and eliminates dormitory or apartment costs.",
  },
  {
    q: "Do I need to visit San Diego to purchase a property?",
    qZh: "我需要親自去聖地牙哥才能購買房產嗎？",
    a: "No. QY Property manages the entire process remotely, including virtual property tours, remote closing via notarized documents, and ongoing property management. Many of our clients complete their entire investment without traveling to the U.S.",
  },
  {
    q: "What taxes do Taiwanese investors pay on U.S. rental income?",
    qZh: "台灣投資者需要為美國租金收入繳納哪些稅？",
    a: "Taiwanese investors are subject to U.S. federal and California state income tax on rental income. However, with proper entity structuring and tax planning, effective tax rates can be significantly optimized. Key considerations include FIRPTA withholding on sale, depreciation benefits, and U.S.-Taiwan tax treaty implications.",
  },
  {
    q: "Why is San Diego a good market for real estate investment?",
    qZh: "為什麼聖地牙哥是好的房地產投資市場？",
    a: "San Diego offers a unique combination: top-tier universities (UCSD), a booming biotech and defense sector, year-round mild climate, constrained housing supply, and strong population growth. These factors drive consistent property appreciation (~7.2% annually) and extremely high rental demand.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-primary mb-4">
            Frequently Asked Questions{" "}
            <span className="text-secondary">| 常見問題</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            投資美國房地產前，您最想知道的問題。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface-container-low rounded-xl overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-start gap-4 p-6 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div>
                  <h3 className="font-bold text-primary">{faq.q}</h3>
                  <p className="text-sm text-on-surface-variant mt-1">{faq.qZh}</p>
                </div>
                <span
                  className={`material-symbols-outlined text-secondary shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
