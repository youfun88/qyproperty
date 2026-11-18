import type { Metadata } from "next";
import HomeView from "@/views/HomeView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "home", ...META.home.en });

export default function Page() {
  return <HomeView lang="en" />;
}
