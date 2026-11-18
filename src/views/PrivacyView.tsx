import PageShell, { PageHero } from "@/components/PageShell";
import type { Lang } from "@/lib/site";

const LAST_UPDATED = { en: "May 31, 2026", zh: "2026 年 5 月 31 日" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-extrabold text-primary mb-4">{title}</h2>
      <div className="space-y-4 text-on-surface-variant leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

const B = ({ children }: { children: React.ReactNode }) => (
  <span className="font-semibold text-primary">{children}</span>
);

function Contact() {
  return (
    <address className="not-italic leading-relaxed">
      QY LLC
      <br />
      3600 Torrey View Ct, San Diego, CA 92130
      <br />
      <a
        href="mailto:yufan@qyproperty.com"
        className="text-secondary font-semibold hover:text-gold transition-colors"
      >
        yufan@qyproperty.com
      </a>
    </address>
  );
}

function PrivacyEn() {
  return (
    <>
      <p className="text-on-surface-variant leading-relaxed text-[15px]">
        QY LLC (&ldquo;QY,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operating under
        the brand <B>Quality Life, Yours</B> and the QY Property advisory service, respects your privacy.
        This policy explains what personal information we collect, how we use and share it, and the
        choices you have. It applies to this website (qyproperty.com) and to the QY LLC software products
        described below.
      </p>

      <Section title="Information We Collect">
        <p>We collect information you choose to provide and information collected automatically:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <B>Contact &amp; consultation details</B> — your name, email, phone number, and any message you
            send when you book a consultation, email us, or schedule a meeting (for example, through our
            Calendly scheduling link).
          </li>
          <li>
            <B>Property &amp; investment information</B> — details you share with us about your investment
            goals, budget, or the properties you own or wish to acquire.
          </li>
          <li>
            <B>Usage &amp; device data</B> — IP address, browser type, pages viewed, and similar analytics
            data collected automatically through cookies and similar technologies.
          </li>
        </ul>
      </Section>

      <Section title="How We Use Your Information">
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to inquiries and schedule and deliver advisory consultations.</li>
          <li>To provide, maintain, and improve our services, website, and apps.</li>
          <li>To send you information you request and, where permitted, relevant updates.</li>
          <li>To comply with legal, tax, and regulatory obligations.</li>
        </ul>
      </Section>

      <Section title="QY LLC Apps for Landlords">
        <p>
          QY LLC is expanding beyond advisory services with a new product line of software designed to
          help landlords and property owners manage their properties more easily &mdash; covering tasks
          such as tracking tenants and leases, organizing rent and expenses, scheduling maintenance, and
          keeping documents in one place.
        </p>
        <p>
          When you use one of these apps, we may process the information you enter to operate the app for
          you, including property, tenant, financial, and maintenance records. We treat that information as
          confidential, use it only to provide and improve the app, and do not sell it. Each app may have
          additional, product-specific privacy terms presented at sign-up; where those terms differ from
          this policy, the product-specific terms govern that app.
        </p>
      </Section>

      <Section title="How We Share Information">
        <p>We do not sell your personal information. We share it only with:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <B>Service providers</B> who help us operate (for example, scheduling via Calendly, analytics,
            hosting, and email delivery), bound by confidentiality obligations.
          </li>
          <li>
            <B>Professional partners</B> — such as licensed real estate, legal, and tax professionals
            &mdash; only as needed to deliver a service you have requested.
          </li>
          <li>
            <B>Authorities</B> when required by law or to protect our legal rights.
          </li>
        </ul>
      </Section>

      <Section title="Cookies & Analytics">
        <p>
          We use cookies and similar technologies to operate the site and understand how it is used. You
          can control cookies through your browser settings; disabling them may affect some features.
          Third-party tools we use (such as scheduling and analytics providers) have their own privacy
          practices.
        </p>
      </Section>

      <Section title="Data Retention & Security">
        <p>
          We retain personal information only as long as needed for the purposes described here or as
          required by law, and we use reasonable administrative, technical, and physical safeguards to
          protect it. No method of transmission or storage is completely secure.
        </p>
      </Section>

      <Section title="Your Privacy Rights">
        <p>
          Depending on where you live, you may have rights to access, correct, delete, or restrict the use
          of your personal information, and to opt out of certain processing.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <B>California (CCPA/CPRA)</B> — the right to know, delete, and correct your personal
            information, and to opt out of its &ldquo;sale&rdquo; or &ldquo;sharing.&rdquo; We do not sell
            your personal information.
          </li>
          <li>
            <B>EEA/UK (GDPR)</B> — the rights to access, rectification, erasure, restriction, portability,
            and objection.
          </li>
        </ul>
        <p>To exercise any of these rights, contact us using the details below.</p>
      </Section>

      <Section title="Children’s Privacy">
        <p>
          Our services are intended for adults. We do not knowingly collect personal information from
          children under 13 (or the applicable age in your jurisdiction).
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this policy from time to time. We will revise the &ldquo;Last updated&rdquo; date
          above and, where appropriate, provide additional notice.
        </p>
      </Section>

      <Section title="How can you contact us about your privacy?">
        <p>
          If you have questions about this policy or your personal information, contact us at:
        </p>
        <Contact />
      </Section>
    </>
  );
}

function PrivacyZh() {
  return (
    <>
      <p className="text-on-surface-variant leading-relaxed text-[15px]">
        QY LLC（以下稱「QY」或「我們」）以 <B>Quality Life, Yours</B> 品牌及 QY Property
        顧問服務營運，並尊重您的隱私。本政策說明我們蒐集哪些個人資料、如何使用與分享，以及您享有的選擇。本政策適用於本網站（qyproperty.com）以及下文所述的
        QY LLC 軟體產品。
      </p>

      <Section title="我們蒐集的資料">
        <p>我們蒐集您主動提供的資料，以及自動蒐集的資料：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <B>聯絡與諮詢資料</B>：您預約諮詢、寄送電子郵件或安排會議時（例如透過我們的 Calendly
            預約連結）提供的姓名、電子郵件、電話號碼及任何訊息。
          </li>
          <li>
            <B>房產與投資資訊</B>：您與我們分享的投資目標、預算，或您持有、想要購入的房產等資訊。
          </li>
          <li>
            <B>使用與裝置資料</B>：透過 Cookie 及類似技術自動蒐集的 IP
            位址、瀏覽器類型、瀏覽頁面及類似的分析資料。
          </li>
        </ul>
      </Section>

      <Section title="我們如何使用您的資料">
        <ul className="list-disc pl-6 space-y-2">
          <li>回覆您的詢問，並安排及提供顧問諮詢。</li>
          <li>提供、維護及改善我們的服務、網站與 App。</li>
          <li>寄送您所要求的資訊，並在法律允許的範圍內提供相關更新。</li>
          <li>遵循法律、稅務及法規義務。</li>
        </ul>
      </Section>

      <Section title="QY LLC 房東 App">
        <p>
          QY LLC 正在顧問服務之外，推出一系列協助房東與屋主更輕鬆管理房產的軟體，涵蓋追蹤房客與租約、整理租金與支出、安排維修，以及集中保存文件等工作。
        </p>
        <p>
          當您使用這些 App 時，我們可能會處理您輸入的資料（包括房產、房客、財務及維修紀錄），以便為您運作該
          App。我們將這些資料視為機密，僅用於提供及改善 App，且不會出售。各 App
          可能在註冊時另有專屬的隱私條款；若該條款與本政策不同，該 App 以其專屬條款為準。
        </p>
      </Section>

      <Section title="我們如何分享資料">
        <p>我們不會出售您的個人資料，僅會與下列對象分享：</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <B>服務供應商</B>：協助我們營運的廠商（例如 Calendly 預約、網站分析、主機代管及電子郵件寄送），並受保密義務約束。
          </li>
          <li>
            <B>專業合作夥伴</B>：例如持有執照的房地產、法律及稅務專業人士，僅在提供您所要求的服務時必要分享。
          </li>
          <li>
            <B>主管機關</B>：依法要求或為保護我們的合法權利時。
          </li>
        </ul>
      </Section>

      <Section title="Cookie 與網站分析">
        <p>
          我們使用 Cookie 及類似技術來運作網站並了解網站的使用情形。您可以透過瀏覽器設定管理
          Cookie；停用 Cookie 可能影響部分功能。我們使用的第三方工具（例如預約及分析服務）有其各自的隱私做法。
        </p>
      </Section>

      <Section title="資料保存與安全">
        <p>
          我們只在達成本政策所述目的或法律要求的期間內保存個人資料，並採取合理的管理、技術及實體安全措施加以保護。任何傳輸或儲存方式都無法保證百分之百安全。
        </p>
      </Section>

      <Section title="您的隱私權利">
        <p>
          依您所在地區不同，您可能有權存取、更正、刪除或限制使用您的個人資料，並可選擇退出特定的資料處理。
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <B>美國加州（CCPA/CPRA）</B>：知悉、刪除及更正個人資料的權利，以及選擇退出個人資料「出售」或「分享」的權利。我們不會出售您的個人資料。
          </li>
          <li>
            <B>歐洲經濟區／英國（GDPR）</B>：存取、更正、刪除、限制處理、資料可攜及反對處理的權利。
          </li>
        </ul>
        <p>如欲行使上述任何權利，請透過下方聯絡方式與我們聯繫。</p>
      </Section>

      <Section title="兒童隱私">
        <p>
          我們的服務以成年人為對象。我們不會在知情的情況下蒐集未滿 13 歲（或您所在地區適用年齡）兒童的個人資料。
        </p>
      </Section>

      <Section title="本政策的變更">
        <p>我們可能不定期更新本政策，屆時將修改上方的「最後更新」日期，並在適當情況下另行通知。</p>
      </Section>

      <Section title="如何就隱私問題聯絡我們？">
        <p>如果您對本政策或您的個人資料有任何疑問，請與我們聯繫：</p>
        <Contact />
      </Section>
    </>
  );
}

export default function PrivacyView({ lang }: { lang: Lang }) {
  const zh = lang === "zh";
  return (
    <PageShell lang={lang} page="privacy">
      <PageHero
        lang={lang}
        page="privacy"
        title={zh ? "隱私權政策" : "Privacy Policy"}
        intro={
          <span className="text-sm">
            {zh ? "最後更新：" : "Last updated: "}
            {LAST_UPDATED[lang]}
          </span>
        }
      />
      <div className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">{zh ? <PrivacyZh /> : <PrivacyEn />}</div>
      </div>
    </PageShell>
  );
}
