import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      // "beforeFiles" forces Next.js to match these URLs before checking file structures
      beforeFiles: [
        {
          source: "/discipline",
          destination: "/blog/category/discipline",
        },
        {
          source: "/fitness",
          destination: "/blog/category/fitness",
        },
        {
          source: "/yoga",
          destination: "/blog/category/yoga",
        },
        {
          source: "/mindset",
          destination: "/blog/category/mindset",
        },
      ],
    };
  },
};

export default nextConfig;