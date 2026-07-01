import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true;

interface PageProps {
    params: Promise<{ category: string }>;
}

interface PostItem {
    slug: string;
    title: string;
    description: string;
    pillar: string;
    category: string;
}

// 1. Intelligent Content-Scanning Parser (No longer relies on strict '---')
function getMarkdownBlogs(): PostItem[] {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);

        return files
            .filter((file) => {
                const normalizedFile = file.trim();
                return normalizedFile.toLowerCase().endsWith(".md") && normalizedFile !== ".md" && !normalizedFile.startsWith(".");
            })
            .map((file): PostItem | null => {
                try {
                    const slug = file.replace(/\.md$/i, "").trim();
                    const filePath = path.join(targetDir, file);
                    const fileContent = fs.readFileSync(filePath, "utf8");

                    // Step A: Search for explicit key-value pairings anywhere in the document text
                    let explicitCategory = "";
                    let explicitPillar = "";
                    let explicitTitle = "";
                    let explicitDesc = "";

                    const lines = fileContent.split("\n");
                    lines.forEach((line) => {
                        const lowerLine = line.toLowerCase();
                        if (lowerLine.includes("category:") || lowerLine.includes("pillar:")) {
                            const sep = line.indexOf(":");
                            const val = line.slice(sep + 1).replace(/['"]/g, "").trim().toLowerCase();
                            if (lowerLine.includes("category:")) explicitCategory = val;
                            if (lowerLine.includes("pillar:")) explicitPillar = val;
                        }
                        if (lowerLine.includes("title:")) {
                            const sep = line.indexOf(":");
                            explicitTitle = line.slice(sep + 1).replace(/['"]/g, "").trim();
                        }
                        if (lowerLine.includes("description:")) {
                            const sep = line.indexOf(":");
                            explicitDesc = line.slice(sep + 1).replace(/['"]/g, "").trim();
                        }
                    });

                    // Step B: Smart Keyword Fallback Strategy (Failsafe for loose file formats)
                    // If no category was explicitly declared, scan the slug and body text for topics
                    let finalCategory = explicitCategory || explicitPillar || "general";

                    if (finalCategory === "general") {
                        const scanningTarget = (slug + " " + fileContent).toLowerCase();
                        if (scanningTarget.includes("yoga")) {
                            finalCategory = "yoga";
                        } else if (scanningTarget.includes("fitness") || scanningTarget.includes("workout") || scanningTarget.includes("body")) {
                            finalCategory = "fitness";
                        } else if (scanningTarget.includes("mindset") || scanningTarget.includes("calm") || scanningTarget.includes("mental")) {
                            finalCategory = "mindset";
                        } else if (scanningTarget.includes("discipline") || scanningTarget.includes("consistency")) {
                            finalCategory = "discipline";
                        }
                    }

                    // Step C: Try to extract title from markdown H1 headers if metadata title is missing
                    let finalTitle = explicitTitle;
                    if (!finalTitle) {
                        const h1Line = lines.find(l => l.trim().startsWith("# "));
                        if (h1Line) {
                            finalTitle = h1Line.replace("# ", "").trim();
                        } else {
                            finalTitle = slug.replace(/-/g, " ");
                        }
                    }

                    return {
                        slug,
                        title: finalTitle,
                        description: explicitDesc || "System protocol data log entry.",
                        pillar: finalCategory,
                        category: finalCategory
                    };
                } catch (singleFileError) {
                    return null;
                }
            })
            .filter((post): post is PostItem => post !== null);
    } catch (e) {
        return [];
    }
}

// 2. Build-time route compiler
export async function generateStaticParams() {
    try {
        const posts = getMarkdownBlogs();
        const parameterRoutes = new Set<string>();

        posts.forEach(p => {
            if (p.category) parameterRoutes.add(p.category.toLowerCase().trim());
        });

        return Array.from(parameterRoutes).map(cat => ({
            category: encodeURIComponent(cat)
        }));
    } catch (e) {
        return [];
    }
}

// 3. Page Renderer
export default async function CategoryPage({ params }: PageProps) {
    const resolvedParams = await params.catch(() => null);
    const category = decodeURIComponent(resolvedParams?.category || "")
        .toLowerCase()
        .trim();

    if (!category) {
        notFound();
    }

    const allPosts = getMarkdownBlogs();

    // Cross-match check against matched category keywords
    const filtered = allPosts.filter(
        (p) => p.category === category || p.pillar === category
    );

    if (filtered.length === 0) {
        notFound();
    }

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <div className="mb-12">
                    <Link href="/blog" className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                        BACK_TO_MATRIX_INDEX
                    </Link>
                </div>

                <header className="mb-16 max-w-5xl space-y-4 border-b border-neutral-900 pb-8">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-neutral-500">NomadLifeXP // Dynamic Pillar Node</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        Pillar: <span className="text-cyan-400">{category}</span>
                    </h1>
                    <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                        {filtered.length} {filtered.length === 1 ? "ACTIVE_PROTOCOL" : "ACTIVE_PROTOCOLS"} LINKED SUCCESSFULLY
                    </p>
                </header>

                <section>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {filtered.map((post, idx) => (
                            <Link
                                key={`scanned-node-${post.slug}-${idx}`}
                                href={`/blog/posts/${post.slug}`}
                                className="group border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm rounded-none p-8 hover:border-cyan-500 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest text-neutral-500">
                                        <span className="text-cyan-400/80">{post.category}</span>
                                        <span>LOG_0{idx + 1}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 uppercase tracking-wide leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm font-light text-neutral-400 leading-relaxed line-clamp-3">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="pt-8 mt-4 border-t border-neutral-900/60 flex items-center justify-between">
                                    <span className="text-xs font-mono text-neutral-600 group-hover:text-white transition-colors duration-200 uppercase tracking-widest">
                                        Launch Study Protocol &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}