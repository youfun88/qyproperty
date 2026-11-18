import { Manrope, Inter } from "next/font/google";
import type { Lang } from "@/lib/site";
import "@/app/globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/** Shared <html> shell for the English and Traditional Chinese root layouts. */
export default function RootHtml({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang === "zh" ? "zh-Hant" : "en"} className={`${manrope.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics (G-H6HN19SCZL, Ship to Live GA account). gtag.js loads 1.5 s after the page, so it costs no speed. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-H6HN19SCZL');" +
              "addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id=G-H6HN19SCZL';document.head.appendChild(s);},1500);});",
          }}
        />
        <script
          src="https://admin.shiptolive.com/stl-track.js"
          data-site="qyproperty"
          data-leads="1"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
