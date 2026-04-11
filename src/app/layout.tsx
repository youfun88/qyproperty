import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
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
  title: "Quality Life, Yours | Cross-Border Real Estate Investment Advisory — San Diego",
  description:
    "QY Property helps Taiwanese families invest in San Diego residential real estate. End-to-end cross-border advisory: investment strategy, property sourcing, legal & tax structuring, acquisition, renovation, and property management. Bilingual service in English and Traditional Chinese.",
  keywords: [
    "San Diego real estate investment",
    "cross-border real estate advisory",
    "Taiwan property investment USA",
    "California real estate for Taiwanese investors",
    "San Diego rental income",
    "UCSD student housing investment",
    "La Jolla real estate",
    "overseas property investment",
    "跨境房地產投資",
    "聖地牙哥房地產",
    "台灣投資者美國置產",
    "美國租金收入",
    "留學生住房投資",
  ],
  authors: [{ name: "QY Property" }],
  creator: "QY Property",
  publisher: "QY Property",
  metadataBase: new URL("https://qyproperty.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Quality Life, Yours | Cross-Border Real Estate Investment Advisory",
    description:
      "Helping Taiwanese families invest in San Diego residential properties. Strategy, sourcing, legal & tax advisory, acquisition, renovation, and management.",
    type: "website",
    locale: "en_US",
    siteName: "QY Property",
    url: "https://qyproperty.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "QY Property — Cross-Border Real Estate Investment Advisory",
    description:
      "Invest in San Diego real estate. Bilingual advisory for Taiwanese investors. Quality Life, Yours.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <JsonLd />
      </head>
      <body>{children}</body>
    </html>
  );
}
