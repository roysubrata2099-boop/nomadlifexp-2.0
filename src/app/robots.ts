import type { MetadataRoute } from "next";

const BASE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://nomadlifexp.com"
).replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/api/",
                "/admin/",
                "/private/",
            ],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
