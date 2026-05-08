import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/tmp/jeanriley", destination: "/tmp/jeanriley/index.html" },
    ];
  },
};

export default nextConfig;
