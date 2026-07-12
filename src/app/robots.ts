import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://nomadlifexp.com";

    return {
        rules: [
            {
                // 🛡️ UNIVERSAL ENGINE TARGETING
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
                // 🛡️ CONTENT SCRAPER AND AI RECONNAISSANCE BLOCK MATRIX
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Google-Extended',
                    'Anthropic-AI',
                    'Claude-Web',
                    'CCBot',
                    'Omgilibot'
                ],
                disallow: '/', // Fully locks data matrix away from LLM model harvesting engines
            }
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}