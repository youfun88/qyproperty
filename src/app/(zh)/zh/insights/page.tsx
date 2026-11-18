import type { Metadata } from "next";
import InsightsView from "@/views/InsightsView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "zh", page: "insights", ...META.insights.zh });

export default function Page() {
  return <InsightsView lang="zh" />;
}
