import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://nomadlifexp.com";

    return {
        rules: [
            {
                // 🛡️ UNIVERSAL ENGINE ACCESSIBILITY (Classic Search & AI Web Search)
                userAgent: '*',
                allow: [
                    '/',
                    '/_next/static/css/', // Safely allows bots to fetch core style sheets
                    '/_next/static/chunks/' // Safely allows bots to fetch layout fragments
                ],
                disallow: [
                    '/_next/',       // Keeps core internal JS engines closed
                    '/api/',         // Insulates internal backend routing pipelines
                    '/*?*',          // Defends index against query string duplicate parameter pollution
                    '/static/',      // Prevents listing raw resource directories
                ],
            },
            {
                // 🛡️ PERMISSIVE MATRIX FOR AI SEARCH & KNOWLEDGE GENERATION
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'Anthropic-AI',
                    'Claude-Web',
                    'PerplexityBot',
                    'Applebot-Extended'
                ],
                allow: [
                    '/',
                    '/blog/',
                    '/blog/posts/',
                    '/_next/static/css/',
                    '/_next/static/chunks/'
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