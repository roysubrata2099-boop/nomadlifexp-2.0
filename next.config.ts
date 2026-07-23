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
     🚀 IMAGE CONFIGURATION
     ========================================================================== */
  images: {
    unoptimized: false,
  },


  /* ==========================================================================
     ⚡ TYPESCRIPT SAFETY
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
     🔁 LEGACY URL SEO REDIRECTS
     ========================================================================== */
  async redirects() {
    return [

      // Old blog index
      {
        source: "/blog.html",
        destination: "/blog",
        permanent: true,
      },


      // Confirmed moved article
      {
        source: "/fitness-consistency.html",
        destination: "/blog/posts/passive-fitness-consumption-trap",
        permanent: true,
      },


      // Legacy HTML articles
      {
        source: "/attention-span.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/cant-focus.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/discipline-blog.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/discipline-creates-freedom.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/fitness-is-not-about-time.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/forearm-stand.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/forward-bending.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/headstand.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/mental-clarity.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/self-discipline-guide.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/stop-procrastination.html",
        destination: "/blog",
        permanent: true,
      },

      {
        source: "/stuck-in-life.html",
        destination: "/blog",
        permanent: true,
      },

    ];
  },

};

export default withMDX(nextConfig);