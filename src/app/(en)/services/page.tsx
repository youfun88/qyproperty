import type { Metadata } from "next";
import ServicesView from "@/views/ServicesView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "services", ...META.services.en });

export default function Page() {
  return <ServicesView lang="en" />;
}
