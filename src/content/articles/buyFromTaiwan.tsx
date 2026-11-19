import type { Lang } from "@/lib/site";
import { href } from "@/lib/site";
import type { Article } from "@/views/ArticleView";

const ext = { target: "_blank", rel: "noopener" } as const;
const DRE_LOOKUP = "https://www2.dre.ca.gov/publicasp/pplinfo.asp";
const DRE_JEAN = "https://www2.dre.ca.gov/publicasp/pplinfo.asp?License_id=02004228";
const IRS_ITIN = "https://www.irs.gov/individuals/individual-taxpayer-identification-number";
const IRS_FIRPTA = "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding";
const IRS_FIRPTA_EX = "https://www.irs.gov/individuals/international-taxpayers/exceptions-from-firpta-withholding";

/**
 * "Buying a San Diego home from Taiwan". Approved by the owner on 2026-11-20
 * (board item 747). Rules checked on irs.gov (FIRPTA, ITIN) and dre.ca.gov.
 */
export const buyFromTaiwan: Record<Lang, Article> = {
  zh: {
    headline: "人在台灣，怎麼遠端買聖地牙哥的房子？流程與分工一次看懂",
    published: "2026-11-20",
    modified: "2026-11-20",
    updatedLabel: "更新日期：2026 年 11 月 20 日 · QY Property",
    image: {
      src: "/img/insights-san-diego-downtown.webp",
      srcSm: "/img/insights-san-diego-downtown-sm.webp",
      width: 1600,
      height: 717,
      alt: "夜晚的聖地牙哥市中心天際線倒映在水池中",
      credit: "照片：Rufustelestrat, CC BY 2.5, via Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:San_Diego_Reflecting_Pond.jpg",
    },
    about: ["FIRPTA", "ITIN", "San Diego real estate"],
    lead: (
      <>
        可以。人在台灣也能買聖地牙哥的房子：看房可以用視訊，文件可以在台灣簽署、公證後寄回，很多步驟都不必親自飛到美國。但每一步都要交給對應的專業人士：代表買方出價和簽約的是
        <strong>加州持照房地產經紀人</strong>，資金與過戶通常由 <strong>escrow（第三方履約保管）公司</strong>
        處理，稅務問題找 <strong>CPA（美國會計師）</strong>，持有方式找<strong>律師</strong>。QY Property
        用中文和英文陪您規劃，並協調這些專業人士。
      </>
    ),
    body: (
      <>
        <h2>人不在美國，可以買聖地牙哥的房子嗎？</h2>
        <p>
          可以。不住在美國，一樣可以在聖地牙哥買房。真正要準備的是：資金怎麼從台灣匯過去、用誰的名義或什麼架構持有、以後出租或出售時怎麼報稅。這些問題最好在看房之前就先想清楚，因為持有方式一旦決定，之後要改通常比較麻煩。
        </p>
        <h2>遠端買房大概有哪些步驟？</h2>
        <ol>
          <li>
            <strong>先確定目的和預算。</strong>是長期出租、留給家人以後住，還是兩者都有？目的會影響地點、房型，也會影響持有方式。
          </li>
          <li>
            <strong>和 CPA、律師討論持有方式。</strong>用個人名義、LLC 或信託持有，在報稅、責任和傳承上各有不同，適合哪一種要依您家庭的狀況由專業人士建議。
          </li>
          <li>
            <strong>找一位加州持照的房地產經紀人。</strong>簽約前先到加州不動產局（DRE）的
            <a href={DRE_LOOKUP} {...ext}>公開執照查詢</a>確認執照有效。
          </li>
          <li>
            <strong>視訊看房、委託驗屋。</strong>經紀人可以帶您線上看房；出價後通常會請專業驗屋師檢查房屋狀況，報告可以用電子檔寄給您。
          </li>
          <li>
            <strong>出價、簽約。</strong>由您的經紀人代表您出價和協商，合約可以用電子簽名。
          </li>
          <li>
            <strong>Escrow 期間：匯款與簽署文件。</strong>頭期款和尾款匯到 escrow 公司的帳戶。人在台灣簽的文件需要公證，請事先問 escrow 或產權公司接受哪一種公證方式。匯款前，一定要用您已知的電話號碼打給 escrow 公司確認匯款資訊，不要只相信電子郵件裡的帳號。
          </li>
          <li>
            <strong>過戶之後。</strong>安排房屋保險、物業管理和每年的報稅。
          </li>
        </ol>
        <h2>需要哪些持照的專業人士？</h2>
        <table>
          <thead>
            <tr>
              <th>角色</th>
              <th>負責什麼</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>加州持照房地產經紀人</td><td>代表買方找房、出價、協商與簽約。</td></tr>
            <tr><td>Escrow 與產權保險公司</td><td>保管資金、處理過戶文件、確認產權。</td></tr>
            <tr><td>驗屋師</td><td>檢查房屋結構、管線、屋頂等狀況。</td></tr>
            <tr><td>CPA（美國會計師）</td><td>報稅、ITIN 申請，以及出售時的稅務。</td></tr>
            <tr><td>律師</td><td>持有架構（LLC、信託）與合約法律問題。</td></tr>
            <tr><td>物業管理公司</td><td>出租、收租、維修，讓您人在台灣也能管理房子。</td></tr>
          </tbody>
        </table>
        <p>
          QY Property 本身不是房地產經紀公司、律師事務所或會計師事務所。我們的角色是用中文和您溝通、協助規劃，並和這些持照專業人士一起合作。與我們合作的專業人士，例如當地房地產經紀人 Jean Riley（加州 DRE 執照{" "}
          <a href={DRE_JEAN} {...ext}>#02004228</a>）和 Daniel Lu CPA，請見<a href={href("zh", "team")}>專家團隊</a>。
        </p>
        <h2>外國人在美國買房需要 ITIN 嗎？</h2>
        <p>
          ITIN（個人報稅識別號碼）是美國國稅局（IRS）發給需要報稅、但沒有資格申請社會安全號碼（SSN）的人的 9 位數號碼，只用在聯邦稅務上。買房本身不一定要先有 ITIN，但如果之後要申報美國的租金收入，或出售房子時要報稅，通常就會需要。申請方式是填寫 Form W-7，詳見{" "}
          <a href={IRS_ITIN} {...ext}>IRS 的 ITIN 說明</a>。什麼時候申請最合適，請和您的 CPA 討論。
        </p>
        <h2>以後賣房時，FIRPTA 是什麼？</h2>
        <p>
          FIRPTA 是美國針對外國人出售美國不動產的預扣稅規定。依 <a href={IRS_FIRPTA} {...ext}>IRS 的說明</a>
          ，外國人出售美國房地產時，買方一般要從成交金額中預扣 15% 繳給 IRS。這不是最終的稅額：賣方之後報稅時再結算，多扣的部分可以申請退回，也可以事先向 IRS 申請預扣證明來降低預扣金額。
        </p>
        <p>
          有些情況可以不用預扣，例如買方買來自住、成交價不超過 30 萬美元，並且符合居住天數的條件（見{" "}
          <a href={IRS_FIRPTA_EX} {...ext}>IRS 的 FIRPTA 例外規定</a>
          ）。買房的時候就先了解 FIRPTA，以後出售時比較不會措手不及。實際適用哪些規定，請向 CPA 確認。
        </p>
        <h2>QY Property 可以怎麼協助？</h2>
        <p>
          我們用中文和英文陪您從規劃走到過戶之後：釐清您的目的和預算、整理要問專業人士的問題、協調經紀人、escrow、CPA 和物業管理之間的溝通，並在您人在台灣的時候，讓您清楚每一步進行到哪裡。我們提供的服務請見
          <a href={href("zh", "services")}>服務項目</a>，其他常見問題請見<a href={href("zh", "faq")}>常見問題</a>。
        </p>
      </>
    ),
    faqTitle: "常見問題",
    faqs: [
      {
        q: "買聖地牙哥的房子，一定要親自飛去美國嗎？",
        a: "不一定。看房可以用視訊，驗屋報告和合約可以用電子檔處理，需要公證的文件也可以在台灣簽署後寄回。是否需要親自到場，請事先和您的經紀人及 escrow 公司確認。",
      },
      {
        q: "怎麼確認房地產經紀人有加州執照？",
        a: "到加州不動產局（DRE）網站的公開執照查詢，輸入姓名或執照號碼，就能看到執照狀態、到期日和所屬的經紀公司。",
      },
      {
        q: "買房一定要成立 LLC 嗎？",
        a: "不一定。用個人名義、LLC 或信託持有各有優缺點，和報稅、責任與傳承有關，適合哪一種請由律師和 CPA 依您的狀況建議。",
      },
      {
        q: "出售時被預扣的 15% 就是最後要繳的稅嗎？",
        a: "不是。FIRPTA 的 15% 是預扣，不是最終稅額。賣方報稅時會依實際的獲利結算，多扣的部分可以申請退回。",
      },
    ],
    disclaimer:
      "本文是一般資訊，不是法律、稅務或投資建議。每個家庭的狀況不同，請在做決定之前，向加州持照房地產經紀人、律師和 CPA 確認。",
    cta: (
      <>
        <strong>想從台灣開始規劃？</strong>
        <br />
        寫信給我們：<a href="mailto:yufan@qyproperty.com">yufan@qyproperty.com</a>，用中文說明您的想法即可。
      </>
    ),
  },
  en: {
    headline: "Buying a San Diego Home While You Live in Taiwan: Steps and Who Does What",
    published: "2026-11-20",
    modified: "2026-11-20",
    updatedLabel: "Updated November 20, 2026 · QY Property",
    image: {
      src: "/img/insights-san-diego-downtown.webp",
      srcSm: "/img/insights-san-diego-downtown-sm.webp",
      width: 1600,
      height: 717,
      alt: "San Diego's downtown skyline at night, reflected in a pond",
      credit: "Photo: Rufustelestrat, CC BY 2.5, via Wikimedia Commons",
      creditUrl: "https://commons.wikimedia.org/wiki/File:San_Diego_Reflecting_Pond.jpg",
    },
    about: ["FIRPTA", "ITIN", "San Diego real estate"],
    lead: (
      <>
        Yes. You can buy a San Diego home while living in Taiwan: tours can be done by video, and documents can be signed and
        notarized in Taiwan and sent back, so many steps don&apos;t need a trip to the U.S. Each step still belongs to the right
        professional: a <strong>California-licensed real estate agent</strong> represents you in the offer and contract, an{" "}
        <strong>escrow company</strong> usually holds the funds and handles the closing, a <strong>CPA</strong> handles U.S. tax
        questions, and an <strong>attorney</strong> advises on how to hold the property. QY Property helps you plan in Mandarin
        and English and coordinates these professionals.
      </>
    ),
    body: (
      <>
        <h2>Can you buy a San Diego home if you don&apos;t live in the U.S.?</h2>
        <p>
          Yes. You don&apos;t have to live in the U.S. to buy a home in San Diego. What you do need to work out is how the money
          moves from Taiwan, whose name or which structure the home is held in, and how you will file taxes if you rent it out or
          sell it later. It is best to settle these questions before you start looking, because changing how a property is held
          afterwards is usually harder.
        </p>
        <h2>What are the steps to buy remotely?</h2>
        <ol>
          <li>
            <strong>Set the goal and budget.</strong> Long-term rental, a future home for family, or both? The goal shapes the
            location, the type of home and how you hold it.
          </li>
          <li>
            <strong>Talk to a CPA and an attorney about how to hold it.</strong> Holding in your own name, through an LLC or in a
            trust differs for tax, liability and estate planning; which fits depends on your family and is for those
            professionals to advise on.
          </li>
          <li>
            <strong>Choose a California-licensed real estate agent.</strong> Before signing, confirm the licence on the California
            Department of Real Estate (DRE) <a href={DRE_LOOKUP} {...ext}>public licence lookup</a>.
          </li>
          <li>
            <strong>Tour by video and get an inspection.</strong> Your agent can show homes online; after an offer, a professional
            inspector usually checks the home and the report can be emailed to you.
          </li>
          <li>
            <strong>Make an offer and sign.</strong> Your agent represents you in the offer and negotiation; contracts can be
            signed electronically.
          </li>
          <li>
            <strong>During escrow: funds and documents.</strong> The deposit and the balance are wired to the escrow company.
            Documents you sign in Taiwan need to be notarized, so ask the escrow or title company in advance which notarization
            they accept. Before any wire, call the escrow company on a phone number you already know to confirm the wiring
            details; never rely on account details in an email alone.
          </li>
          <li>
            <strong>After closing.</strong> Arrange insurance, property management and yearly tax filing.
          </li>
        </ol>
        <h2>Which licensed professionals do you need?</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>What they do</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>California-licensed real estate agent</td><td>Represents the buyer: search, offer, negotiation and contract.</td></tr>
            <tr><td>Escrow and title insurance company</td><td>Holds the funds, handles closing documents, confirms title.</td></tr>
            <tr><td>Home inspector</td><td>Checks the structure, plumbing, roof and other systems.</td></tr>
            <tr><td>CPA</td><td>Tax filing, ITIN applications and tax on a later sale.</td></tr>
            <tr><td>Attorney</td><td>Holding structure (LLC, trust) and legal questions on contracts.</td></tr>
            <tr><td>Property manager</td><td>Tenants, rent collection and repairs while you are in Taiwan.</td></tr>
          </tbody>
        </table>
        <p>
          QY Property is not a real estate brokerage, law firm or CPA firm. Our role is to talk with you in Mandarin, help you
          plan, and work alongside these licensed professionals. The professionals we work with, such as local real estate agent
          Jean Riley (California DRE licence <a href={DRE_JEAN} {...ext}>#02004228</a>) and Daniel Lu CPA, are on our{" "}
          <a href={href("en", "team")}>team page</a>.
        </p>
        <h2>Do foreign buyers need an ITIN?</h2>
        <p>
          An ITIN (Individual Taxpayer Identification Number) is a 9-digit number the IRS issues to people who need a U.S.
          taxpayer number for federal tax purposes but aren&apos;t eligible for a Social Security number. Buying a home
          doesn&apos;t always require one first, but you will usually need one to report U.S. rental income or to file when you
          sell. You apply with Form W-7; see the <a href={IRS_ITIN} {...ext}>IRS ITIN page</a>. Ask your CPA when to apply.
        </p>
        <h2>What is FIRPTA when you sell later?</h2>
        <p>
          FIRPTA is the U.S. withholding rule for foreign persons who sell U.S. real property. According to the{" "}
          <a href={IRS_FIRPTA} {...ext}>IRS</a>, when a foreign person sells, the buyer generally must withhold 15% of the amount
          realized and pay it to the IRS. That is not the final tax: the seller settles it on their tax return and can claim back
          any excess, and can apply to the IRS in advance for a withholding certificate to reduce the amount withheld.
        </p>
        <p>
          Some sales are exempt, for example when the buyer buys the home to live in, the price is not more than $300,000, and
          the residence conditions are met (see the <a href={IRS_FIRPTA_EX} {...ext}>IRS FIRPTA exceptions</a>). Knowing about
          FIRPTA when you buy avoids surprises when you sell. Confirm which rules apply to you with a CPA.
        </p>
        <h2>How can QY Property help?</h2>
        <p>
          We work with you in Mandarin and English from planning through to after closing: clarifying your goal and budget,
          preparing the questions to ask each professional, coordinating between the agent, escrow, CPA and property manager, and
          keeping you informed of where each step stands while you are in Taiwan. See our{" "}
          <a href={href("en", "services")}>services</a> and the <a href={href("en", "faq")}>FAQ</a>.
        </p>
      </>
    ),
    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Do I have to fly to the U.S. to buy a San Diego home?",
        a: "Not necessarily. Tours can be done by video, inspection reports and contracts can be handled electronically, and documents that need notarizing can be signed in Taiwan and sent back. Confirm with your agent and escrow company whether anything needs you in person.",
      },
      {
        q: "How do I check that an agent is licensed in California?",
        a: "Use the public licence lookup on the California Department of Real Estate (DRE) website. Enter the name or licence number to see the status, expiry date and the responsible broker.",
      },
      {
        q: "Do I have to set up an LLC to buy?",
        a: "No. Holding in your own name, through an LLC or in a trust each has trade-offs for tax, liability and estate planning; an attorney and a CPA can advise which fits your situation.",
      },
      {
        q: "Is the 15% FIRPTA withholding the final tax on a sale?",
        a: "No. The 15% is withheld in advance, not the final tax. The seller settles the actual tax on their return and can claim back any excess.",
      },
    ],
    disclaimer:
      "This article is general information, not legal, tax or investment advice. Every family's situation is different; check with a California-licensed real estate agent, an attorney and a CPA before you decide.",
    cta: (
      <>
        <strong>Planning from Taiwan?</strong>
        <br />
        Email us at <a href="mailto:yufan@qyproperty.com">yufan@qyproperty.com</a> and tell us what you have in mind, in Mandarin
        or English.
      </>
    ),
  },
};
