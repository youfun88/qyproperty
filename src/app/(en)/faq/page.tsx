import type { Metadata } from "next";
import FaqView from "@/views/FaqView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "faq", ...META.faq.en });

export default function Page() {
  return <FaqView lang="en" />;
}
