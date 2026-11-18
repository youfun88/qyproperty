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
