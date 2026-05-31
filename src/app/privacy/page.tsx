import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | QY LLC — Quality Life, Yours",
  description:
    "How QY LLC collects, uses, and protects your personal information across the QY Property advisory website and our landlord property-management apps.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | QY LLC",
    description:
      "How QY LLC collects, uses, and protects your personal information across our website and apps.",
    type: "website",
    url: "https://qyproperty.com/privacy",
  },
};

const LAST_UPDATED = "May 31, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-extrabold text-primary mb-4">{title}</h2>
      <div className="space-y-4 text-on-surface-variant leading-relaxed text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero band */}
        <div className="bg-primary py-20 px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              Privacy Policy
            </h1>
            <p className="text-surface-variant/70 text-sm">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="bg-white py-20 px-6 md:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-on-surface-variant leading-relaxed text-[15px]">
              QY LLC (&ldquo;QY,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), operating under the brand{" "}
              <span className="font-semibold text-primary">Quality Life, Yours</span>{" "}
              and the QY Property advisory service, respects your privacy. This
              policy explains what personal information we collect, how we use and
              share it, and the choices you have. It applies to this website
              (qyproperty.com) and to the QY LLC software products described below.
            </p>

            <Section title="Information We Collect">
              <p>We collect information you choose to provide and information collected automatically:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-primary">Contact &amp; consultation details</span> —
                  your name, email, phone number, and any message you send when you
                  book a consultation, email us, or schedule a meeting (for example,
                  through our Calendly scheduling link).
                </li>
                <li>
                  <span className="font-semibold text-primary">Property &amp; investment information</span> —
                  details you share with us about your investment goals, budget, or
                  the properties you own or wish to acquire.
                </li>
                <li>
                  <span className="font-semibold text-primary">Usage &amp; device data</span> —
                  IP address, browser type, pages viewed, and similar analytics data
                  collected automatically through cookies and similar technologies.
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
                QY LLC is expanding beyond advisory services with a new product line
                of software designed to help landlords and property owners manage
                their properties more easily &mdash; covering tasks such as tracking
                tenants and leases, organizing rent and expenses, scheduling
                maintenance, and keeping documents in one place.
              </p>
              <p>
                When you use one of these apps, we may process the information you
                enter to operate the app for you, including property, tenant,
                financial, and maintenance records. We treat that information as
                confidential, use it only to provide and improve the app, and do not
                sell it. Each app may have additional, product-specific privacy terms
                presented at sign-up; where those terms differ from this policy, the
                product-specific terms govern that app.
              </p>
            </Section>

            <Section title="How We Share Information">
              <p>
                We do not sell your personal information. We share it only with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-primary">Service providers</span> who
                  help us operate (for example, scheduling via Calendly, analytics, hosting,
                  and email delivery), bound by confidentiality obligations.
                </li>
                <li>
                  <span className="font-semibold text-primary">Professional partners</span> —
                  such as licensed real estate, legal, and tax professionals &mdash; only
                  as needed to deliver a service you have requested.
                </li>
                <li>
                  <span className="font-semibold text-primary">Authorities</span> when
                  required by law or to protect our legal rights.
                </li>
              </ul>
            </Section>

            <Section title="Cookies &amp; Analytics">
              <p>
                We use cookies and similar technologies to operate the site and
                understand how it is used. You can control cookies through your browser
                settings; disabling them may affect some features. Third-party tools we
                use (such as scheduling and analytics providers) have their own privacy
                practices.
              </p>
            </Section>

            <Section title="Data Retention &amp; Security">
              <p>
                We retain personal information only as long as needed for the purposes
                described here or as required by law, and we use reasonable
                administrative, technical, and physical safeguards to protect it. No
                method of transmission or storage is completely secure.
              </p>
            </Section>

            <Section title="Your Privacy Rights">
              <p>
                Depending on where you live, you may have rights to access, correct,
                delete, or restrict the use of your personal information, and to opt out
                of certain processing.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold text-primary">California (CCPA/CPRA)</span> —
                  the right to know, delete, and correct your personal information, and to
                  opt out of its &ldquo;sale&rdquo; or &ldquo;sharing.&rdquo; We do not sell
                  your personal information.
                </li>
                <li>
                  <span className="font-semibold text-primary">EEA/UK (GDPR)</span> —
                  the rights to access, rectification, erasure, restriction, portability,
                  and objection.
                </li>
              </ul>
              <p>To exercise any of these rights, contact us using the details below.</p>
            </Section>

            <Section title="Children&rsquo;s Privacy">
              <p>
                Our services are intended for adults. We do not knowingly collect
                personal information from children under 13 (or the applicable age in
                your jurisdiction).
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this policy from time to time. We will revise the
                &ldquo;Last updated&rdquo; date above and, where appropriate, provide
                additional notice.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions about this policy or your personal information,
                contact us at:
              </p>
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
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
