// src/app/robots.ts

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://nomadlifexp.com";

    return {
        rules: [
            {
                // 🛡️ UNIVERSAL ENGINE ACCESSIBILITY (Classic Search & AI Web Search)
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/_next/',       // Blocks scrapers from parsing underlying client JS build assets
                    '/api/',         // Insulates internal backend routing pipelines
                    '/*?*',          // Defends index against query string duplicate parameter pollution
                    '/static/',      // Prevents listing raw resource directories
                ],
            },
            {
                // 🛡️ PERMISSIVE MATRIX FOR AI SEARCH & KNOWLEDGE GENERATION
                // Allowing these ensures your content is indexed by modern RAG architectures and AI search results.
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'Anthropic-AI',
                    'Claude-Web',
                    'PerplexityBot',  // Added explicitly for Perplexity discovery
                    'Applebot-Extended' // Added explicitly for Apple Intelligence discovery
                ],
                allow: [
                    '/',
                    '/blog/',
                    '/blog/posts/'
                ],
                disallow: [
                    '/_next/',
                    '/api/',
                    '/*?*'
                ]
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}