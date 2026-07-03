import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ==========================================================================
     🛡️ ESLINT BUILD DEPLOYMENT SHIELD
     ========================================================================== */
  eslint: {
    // Allows production builds to successfully complete even if external 
    // scripts have environment linting issues
    ignoreDuringBuilds: true,
  },

  /* ==========================================================================
     🔄 URL REWRITES UTILITY ENGINE
     ========================================================================== */
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