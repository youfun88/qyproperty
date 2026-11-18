import type { Metadata } from "next";
import InsightsView from "@/views/InsightsView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "insights", ...META.insights.en });

export default function Page() {
  return <InsightsView lang="en" />;
}
