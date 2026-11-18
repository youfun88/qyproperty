import type { Metadata } from "next";
import ServicesView from "@/views/ServicesView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "zh", page: "services", ...META.services.zh });

export default function Page() {
  return <ServicesView lang="zh" />;
}
