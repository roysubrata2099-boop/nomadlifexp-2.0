import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

// Enforce strict runtime fallback behavior for dynamic parameter generation
export const dynamicParams = true;

interface PageProps {
    params: Promise<{ category: string }>;
}

interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
}

/**
 * Robust Protected Content Scanner Engine
 */
function getScannedBlogs(): PostItem[] {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);

        return files
            .filter((file) => {
                const norm = file.trim().toLowerCase();
                return norm.endsWith(".md") && norm !== ".md" && !norm.startsWith(".");
            })
            .map((file): PostItem | null => {
                try {
                    const slug = file.replace(/\.md$/i, "").trim();
                    const filePath = path.join(targetDir, file);
                    const fileContent = fs.readFileSync(filePath, "utf8") || "";
                    const lines = fileContent.split("\n");

                    // 1. Unified Keyword Engine Scanning
                    const contentLower = fileContent.toLowerCase();
                    let inferredCategory = "general";
                    let displayPillar = "GENERAL";

                    if (contentLower.includes("#yoga") || contentLower.includes("yoga")) {
                        inferredCategory = "yoga";
                        displayPillar = "YOGA";
                    } else if (contentLower.includes("#fitness") || contentLower.includes("fitness") || contentLower.includes("workout")) {
                        inferredCategory = "fitness";
                        displayPillar = "FITNESS";
                    } else if (contentLower.includes("#mindset") || contentLower.includes("mindset") || contentLower.includes("overthinking")) {
                        inferredCategory = "mindset";
                        displayPillar = "MINDSET";
                    } else if (contentLower.includes("#discipline") || contentLower.includes("discipline")) {
                        inferredCategory = "discipline";
                        displayPillar = "DISCIPLINE";
                    } else if (contentLower.includes("#travel") || contentLower.includes("travel") || contentLower.includes("nomad")) {
                        inferredCategory = "travel";
                        displayPillar = "TRAVEL";
                    }

                    // 2. Structural Title Processing With Fallbacks
                    let title = "";
                    const h1Line = lines.find(l => l.trim().startsWith("# "));
                    if (h1Line) {
                        title = h1Line.replace("# ", "").trim();
                    } else {
                        const cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0);
                        title = cleanLines.find(l => l.length > 20 && !l.startsWith("/") && !l.startsWith("#")) || slug.replace(/-/g, " ");
                    }

                    // 3. Structural Description Processing With Fallbacks
                    let description = "Protocol data log.";
                    const cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0);
                    const descriptiveLine = cleanLines.find(l => l.length > 40 && !l.startsWith("#") && !l.startsWith("/") && l.trim() !== title.trim());
                    if (descriptiveLine) {
                        description = descriptiveLine;
                    }

                    return {
                        slug: String(slug),
                        title: String(title || slug.replace(/-/g, " ")),
                        description: String(description),
                        category: String(inferredCategory),
                        displayPillar: String(displayPillar)
                    };
                } catch (singleFileError) {
                    console.error(`Skipping broken category data parsing candidate: ${file}`, singleFileError);
                    return null;
                }
            })
            .filter((p): p is PostItem => p !== null);
    } catch (e) {
        console.error("Global directory exception caught inside category builder framework:", e);
        return [];
    }
}

/**
 * Pre-Compile Router Engine Generation Node
 * Whitelists foundational system routes to eliminate compilation delays
 */
export async function generateStaticParams() {
    return [
        { category: "all" },
        { category: "mindset" },
        { category: "discipline" },
        { category: "fitness" },
        { category: "yoga" },
        { category: "travel" }
    ];
}

/**
 * Operational Category Page Controller Component
 */
export default async function CategoryPage({ params }: PageProps) {
    // Unwrapping promise structures safely with catch preservation layers
    const resolvedParams = await params.catch(() => null);
    const category = decodeURIComponent(resolvedParams?.category || "")
        .toLowerCase()
        .trim();

    if (!category) {
        notFound();
    }

    const allPosts = getScannedBlogs();

    // Core logical filtering block
    const filtered = allPosts.filter(p => p.category === category);

    // If the folder query produces zero results, and it isn't the fallback "all" macro view, exit cleanly via 404 handler
    if (filtered.length === 0 && category !== "all") {
        notFound();
    }

    const postsToDisplay = category === "all" ? allPosts : filtered;

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-cyan-500 selection:text-black overflow-hidden relative">

            {/* Structural Ambience Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Back to Core Database Node Directory Link */}
                <div className="mb-12">
                    <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors group">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> BACK_TO_MATRIX_INDEX
                    </Link>
                </div>

                {/* Sub-Section Index Node Header */}
                <header className="mb-16 border-b border-neutral-900 pb-8 space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-neutral-500">NomadLifeXP // Dynamic Pillar Node</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
                        Pillar: <span className="text-cyan-400">{category}</span>
                    </h1>
                    <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                        {postsToDisplay.length} {postsToDisplay.length === 1 ? "ACTIVE_PROTOCOL" : "ACTIVE_PROTOCOLS"} LINKED SUCCESSFULLY
                    </p>
                </header>

                {/* Secure Functional Posts List Grid mapping output directly via /blog/[slug] */}
                <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {postsToDisplay.map((post, idx) => (
                        <div
                            key={`scanned-category-node-${post.slug}-${idx}`}
                            className="border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 group relative"
                        >
                            <div className="space-y-4">
                                <div className="flex justify-between items-center font-mono text-xs">
                                    <span className="text-cyan-400 uppercase tracking-widest">{post.displayPillar}</span>
                                    <span className="text-neutral-600">LOG_0{idx + 1}</span>
                                </div>
                                <h2 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-cyan-400 transition-colors duration-200 line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm font-light text-neutral-400 leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-neutral-900/60">
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-block text-xs font-mono text-neutral-500 hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Launch Study Protocol &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}