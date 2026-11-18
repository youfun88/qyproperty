import type { Metadata } from "next";
import PrivacyView from "@/views/PrivacyView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "privacy", ...META.privacy.en });

export default function Page() {
  return <PrivacyView lang="en" />;
}
