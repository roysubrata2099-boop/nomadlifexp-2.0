// next.config.ts

import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {

  /* ==========================================================================
     🛡️ BUILD SAFETY
     ========================================================================== */
  eslint: {
    ignoreDuringBuilds: true,
  },


  /* ==========================================================================
     🔒 SECURITY / STABILITY DEFAULTS
     ========================================================================== */
  poweredByHeader: false,


  /* ==========================================================================
     🚀 IMAGE SAFETY
     ========================================================================== */
  images: {
    unoptimized: false,
  },


  /* ==========================================================================
     ⚡ STRICT TYPESCRIPT HANDLING
     ========================================================================== */
  typescript: {
    ignoreBuildErrors: false,
  },


  /* ==========================================================================
     📝 MDX SUPPORT
     ========================================================================== */
  pageExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "md",
    "mdx",
  ],


  /* ==========================================================================
     🔁 SEO PRESERVATION REDIRECTS
     ========================================================================== */
  async redirects() {
    return [
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/fitness-consistency.html",
        destination: "/blog/posts/passive-fitness-consumption-trap",
        permanent: true,
      },
    ];
  },

};

export default withMDX(nextConfig);