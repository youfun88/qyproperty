import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/** Site-wide defaults; each page adds its own title, description, canonical and hreflang. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "QY Property",
  authors: [{ name: "QY Property" }],
  creator: "QY Property",
  publisher: "QY LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
