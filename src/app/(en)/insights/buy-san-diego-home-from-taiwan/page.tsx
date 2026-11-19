import type { Metadata } from "next";
import ArticleView from "@/views/ArticleView";
import { buyFromTaiwan } from "@/content/articles/buyFromTaiwan";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "buyFromTaiwan", ...META.buyFromTaiwan.en });

export default function Page() {
  return <ArticleView lang="en" page="buyFromTaiwan" article={buyFromTaiwan.en} />;
}
