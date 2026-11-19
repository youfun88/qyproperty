import type { Metadata } from "next";
import ArticleView from "@/views/ArticleView";
import { buyFromTaiwan } from "@/content/articles/buyFromTaiwan";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "zh", page: "buyFromTaiwan", ...META.buyFromTaiwan.zh });

export default function Page() {
  return <ArticleView lang="zh" page="buyFromTaiwan" article={buyFromTaiwan.zh} />;
}
