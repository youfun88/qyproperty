import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static export → deployable as plain files on GitHub Pages (free).
  output: "export",
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Required for static export: serve images as-is (no server optimizer).
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  // (rewrites for /tmp/jeanriley and /shx removed — both migrated to their own
  //  repos, and rewrites aren't supported with output: "export".)
};

export default nextConfig;
