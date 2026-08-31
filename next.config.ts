// next.config.ts

import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  /* ==========================================================================
     BUILD SAFETY
     ========================================================================== */

  eslint: {
    ignoreDuringBuilds: true,
  },

  /* ==========================================================================
     SECURITY
     ========================================================================== */

  poweredByHeader: false,

  /* ==========================================================================
     IMAGE CONFIGURATION
     ========================================================================== */

  images: {
    unoptimized: false,
  },

  /* ==========================================================================
     TYPESCRIPT SAFETY
     ========================================================================== */

  typescript: {
    ignoreBuildErrors: false,
  },

  /* ==========================================================================
     MDX SUPPORT
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
     PERMANENT SEO REDIRECTS
     Old URLs → Current Next.js routes
     ========================================================================== */

  async redirects() {
    return [
      /* ----------------------------------------------------------------------
         MIGRATION FIXES
         ---------------------------------------------------------------------- */

      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },

      {
        source: "/blog/posts/stop-procrastination",
        destination: "/blog/posts/why-you-procrastinate-how-to-stop",
        permanent: true,
      },

      {
        source:
          "/blog/posts/mental-clarity-how-to-stop-overthinking-and-improve-focus",
        destination:
          "/blog/posts/mental-clarity-stop-overthinking-and-regain-focus",
        permanent: true,
      },

      {
        source:
          "/blog/posts/can-you-rebuild-your-attention-span-after-years-of-digital-distraction",
        destination: "/insights/rebuild-attention-span-digital-distraction",
        permanent: true,
      },

      {
        source:
          "/blog/posts/the-reason-you-cant-focus-even-when-you-try-hard",
        destination: "/insights/stop-procrastination-permanently",
        permanent: true,
      },

      /* ----------------------------------------------------------------------
         EXISTING REDIRECTS — UNCHANGED
         ---------------------------------------------------------------------- */

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
