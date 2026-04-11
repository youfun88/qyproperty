import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Quality Life, Yours | Cross-Border Real Estate Investment Advisory",
  description:
    "Helping Taiwanese families invest in San Diego residential properties. End-to-end advisory: strategy, acquisition, renovation, and property management. Quality Life, Yours.",
  keywords: [
    "San Diego real estate",
    "cross-border investment",
    "Taiwan property investment",
    "California real estate",
    "rental income USA",
    "overseas property investment",
    "聖地牙哥房地產",
    "跨境投資",
    "美國置產",
  ],
  openGraph: {
    title: "Quality Life, Yours | Cross-Border Real Estate Investment Advisory",
    description:
      "Invest in California. Build your family's future. End-to-end real estate advisory for Taiwanese investors.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
