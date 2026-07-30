// src/app/robots.ts

import type { MetadataRoute } from 'next';

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://nomadlifexp.com").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // 🛡️ Search Engine Crawlers & AI Assistants
                userAgent: '*',
                allow: [
                    '/',
                    '/_next/image*',  // Explicitly allow Next.js Image Optimization route
                    '/_next/static*', // Explicitly allow Next.js JS/CSS asset bundles
                ],
                disallow: [
                    '/api/',       // Protect backend API routes
                    '/admin/',     // Prevent administrative panel indexing
                    '/private/',   // Protect internal private assets
                ],
            },
            {
                // 🛡️ Dedicated AI Crawlers
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'Anthropic-AI',
                    'Claude-Web',
                    'PerplexityBot',
                    'Applebot-Extended',
                ],
                allow: [
                    '/',
                    '/_next/image*',
                    '/_next/static*',
                ],
                disallow: ['/api/'],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}