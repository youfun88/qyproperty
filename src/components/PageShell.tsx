import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { breadcrumbLd, href, PAGE_NAMES, type Lang, type PageKey } from "@/lib/site";

/** Header + main + footer. Sub-pages also get a BreadcrumbList. */
export default function PageShell({
  lang,
  page,
  children,
}: {
  lang: Lang;
  page: PageKey;
  children: React.ReactNode;
}) {
  return (
    <>
      {page !== "home" && <JsonLd data={breadcrumbLd(lang, page)} />}
      <Header lang={lang} page={page} />
      <main className="pt-20">{children}</main>
      <Footer lang={lang} />
    </>
  );
}

/** Dark title band used at the top of every sub-page, with a visible breadcrumb. */
export function PageHero({
  lang,
  page,
  title,
  intro,
}: {
  lang: Lang;
  page: PageKey;
  title: string;
  intro?: React.ReactNode;
}) {
  return (
    <div className="bg-primary py-20 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <nav aria-label={lang === "zh" ? "麵包屑導覽" : "Breadcrumb"} className="mb-6">
          <ol className="flex justify-center gap-2 text-sm text-surface-variant/80">
            <li>
              <a href={href(lang, "home")} className="hover:text-secondary-fixed-dim">
                {PAGE_NAMES.home[lang]}
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">
              {PAGE_NAMES[page][lang]}
            </li>
          </ol>
        </nav>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
        {intro && <p className="text-surface-variant/80 text-lg leading-relaxed">{intro}</p>}
      </div>
    </div>
  );
}
