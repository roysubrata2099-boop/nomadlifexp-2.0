// src/app/robots.ts

import type { MetadataRoute } from 'next';

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://nomadlifexp.com").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                // 🛡️ Search Engine Crawlers & AI Assistants
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',       // Protect backend API routes
                    '/admin/',     // Prevent administrative panel indexing (if applicable)
                    '/private/',   // Protect internal private assets
                ],
            },
            {
                // 🛡️ Dedicated AI Crawlers (Explicit access permission for knowledge scrapers)
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'Anthropic-AI',
                    'Claude-Web',
                    'PerplexityBot',
                    'Applebot-Extended',
                ],
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}