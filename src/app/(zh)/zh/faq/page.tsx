import type { Metadata } from "next";
import FaqView from "@/views/FaqView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "zh", page: "faq", ...META.faq.zh });

export default function Page() {
  return <FaqView lang="zh" />;
}
