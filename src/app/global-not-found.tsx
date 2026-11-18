import type { Metadata } from "next";
import RootHtml from "@/components/RootHtml";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | QY Property",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootHtml lang="en">
      <Header lang="en" page="home" />
      <main className="pt-20">
        <div className="bg-primary py-24 px-6 md:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">Page not found</h1>
            <p className="text-surface-variant/80 text-lg mb-10" lang="zh-Hant">
              找不到這個頁面。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/" className="bg-[#d6e3ff] text-primary px-8 py-4 rounded-lg font-bold text-lg">
                Back to home
              </Link>
              <a
                href="/zh/"
                lang="zh-Hant"
                className="border border-outline-variant/30 text-white px-8 py-4 rounded-lg font-semibold text-lg"
              >
                回到中文首頁
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </RootHtml>
  );
}
