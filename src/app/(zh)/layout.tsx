import type { Metadata } from "next";
import RootHtml from "@/components/RootHtml";
import { baseMetadata } from "@/lib/baseMetadata";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootHtml lang="zh">{children}</RootHtml>;
}
