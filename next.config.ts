import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Static export → deployable as plain files on GitHub Pages (free).
  output: "export",
  // /services/ → out/services/index.html, so GitHub Pages serves clean URLs.
  trailingSlash: true,
  // Two root layouts ((en) and (zh)) → one global 404 page.
  experimental: {
    globalNotFound: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // Required for static export: serve images as-is (no server optimizer).
    // Images are pre-sized WebP files in public/img.
    unoptimized: true,
  },
  // (rewrites for /tmp/jeanriley and /shx removed — both migrated to their own
  //  repos, and rewrites aren't supported with output: "export".)
};

export default nextConfig;
