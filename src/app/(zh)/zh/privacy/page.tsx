import type { Metadata } from "next";
import PrivacyView from "@/views/PrivacyView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "zh", page: "privacy", ...META.privacy.zh });

export default function Page() {
  return <PrivacyView lang="zh" />;
}
