import type { Metadata } from "next";
import TeamView from "@/views/TeamView";
import { META } from "@/content/meta";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ lang: "en", page: "team", ...META.team.en });

export default function Page() {
  return <TeamView lang="en" />;
}
