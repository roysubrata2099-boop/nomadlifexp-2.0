// src/app/sitemap.ts

import type { MetadataRoute } from "next";

import {
    getAllMDXPosts,
} from "@/lib/mdx";


const SITE_URL =
    "https://nomadlifexp.com";


const DEPLOYMENT_DATE =
    new Date("2026-07-12T00:00:00Z");



function safeSlug(
    value: unknown
): string {

    if (
        typeof value !== "string"
    ) {
        return "";
    }


    return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

}



export default function sitemap()
    : MetadataRoute.Sitemap {


    const staticRoutes = [

        "",
        "/about",
        "/blog",
        "/fitness",
        "/mindset",
        "/yoga",
        "/discipline",
        "/discipline-system",
        "/knowledge-index",
        "/start-here",

    ];



    const staticNodes:
        MetadataRoute.Sitemap =
        staticRoutes.map(
            (route) => ({

                url:
                    `${SITE_URL}${route}`,

                lastModified:
                    DEPLOYMENT_DATE,

                changeFrequency:
                    route === ""
                        ? "daily"
                        : "weekly",

                priority:
                    route === ""
                        ? 1.0
                        : 0.8,

            })
        );



    let posts:
        ReturnType<typeof getAllMDXPosts> = [];



    try {

        posts =
            getAllMDXPosts();

    } catch {

        posts = [];

    }




    const dynamicNodes:
        MetadataRoute.Sitemap =
        posts
            .map(
                (post) => {

                    const slug =
                        safeSlug(
                            post.slug
                        );


                    if (!slug) {

                        return null;

                    }



                    return {

                        url:
                            `${SITE_URL}/blog/posts/${slug}`,

                        lastModified:
                            DEPLOYMENT_DATE,

                        changeFrequency:
                            "monthly" as const,

                        priority:
                            0.6,

                    };

                }
            )
            .filter(Boolean) as MetadataRoute.Sitemap;



    return [

        ...staticNodes,

        ...dynamicNodes,

    ];

}
