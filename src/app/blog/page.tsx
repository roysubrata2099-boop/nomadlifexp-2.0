import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";

interface PostItem {
    slug: string;
    title: string;
    desc: string;
    description: string;
    pillar: string;
    category: string;
    keywords: string[];
}

interface FrontmatterData {
    title?: string;
    description?: string;
    pillar?: string;
    category?: string;
    tags?: string | string[];
    keywords?: string | string[];
    [key: string]: string | string[] | undefined;
}

function getMarkdownBlogs(): PostItem[] {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);

        return files
            .filter((file: string) => {
                const cleanName = file.trim();
                return cleanName.endsWith(".md") && cleanName !== ".md" && !cleanName.startsWith(".");
            })
            .map((file: string): PostItem => {
                const slug = file.replace(".md", "").trim();
                const filePath = path.join(targetDir, file);
                const fileContent = fs.readFileSync(filePath, "utf8");

                const parts = fileContent.split("---");
                const data: FrontmatterData = {
                    title: slug.replace(/-/g, " "),
                    description: "Protocol data log.",
                    pillar: "general",
                    category: "general"
                };

                if (parts.length >= 3 && parts[1]) {
                    const lines = parts[1].split("\n");
                    lines.forEach((line: string) => {
                        const sep = line.indexOf(":");
                        if (sep !== -1) {
                            const key = line.slice(0, sep).trim();
                            let val = line.slice(sep + 1).trim();
                            if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                                val = val.slice(1, -1);
                            }
                            data[key] = val;
                        }
                    });
                }

                let rawKeywords: string[] = [];
                const targetTags = data.tags || data.keywords;

                if (targetTags) {
                    if (typeof targetTags === "string") {
                        if (targetTags.startsWith("[") && targetTags.endsWith("]")) {
                            rawKeywords = targetTags.slice(1, -1).split(",").map((s: string) => s.trim().replace(/['"']/g, ""));
                        } else {
                            rawKeywords = targetTags.split(",").map((s: string) => s.trim());
                        }
                    } else if (Array.isArray(targetTags)) {
                        rawKeywords = targetTags.map((s: unknown) => String(s || "").trim());
                    }
                }

                return {
                    slug,
                    title: String(data.title || slug.replace(/-/g, " ")),
                    desc: String(data.description || ""),
                    description: String(data.description || ""),
                    pillar: String(data.pillar || data.category || "general"),
                    category: String(data.category || "general"),
                    keywords: rawKeywords
                };
            })
            .filter((post: PostItem) => post.slug.length > 0);
    } catch (e) {
        return [];
    }
}

// 100% compliant Next.js server component parameter contract
export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const activePillar = typeof resolvedParams?.pillar === "string" ? resolvedParams.pillar.toLowerCase().trim() : "all";
    const searchQuery = typeof resolvedParams?.query === "string" ? resolvedParams.query.toLowerCase().trim() : "";

    const rawPosts = getMarkdownBlogs();
    const fixedPillars: string[] = ["all", "mindset", "discipline", "fitness", "yoga", "travel"];

    const filteredPosts = rawPosts.filter((post) => {
        let matchesPillar = false;
        if (activePillar === "all") {
            matchesPillar = true;
        } else {
            const pField = String(post.pillar || "").toLowerCase().trim();
            const cField = String(post.category || "").toLowerCase().trim();
            matchesPillar = pField === activePillar || cField === activePillar;
        }

        if (!matchesPillar) return false;

        if (!searchQuery) return true;
        const sTitle = String(post.title || "").toLowerCase();
        const sDesc = String(post.desc || post.description || "").toLowerCase();
        const sKeywords = post.keywords.map(k => k.toLowerCase());

        return sTitle.includes(searchQuery) || sDesc.includes(searchQuery) || sKeywords.some(k => k.includes(searchQuery));
    });

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        RETURN_TO_HOME
                    </Link>
                </div>

                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">NomadLifeXP // Pure Server Engine</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        Human Transformation <br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">Matrix Index</span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        Deploying tactical workflows across psychological protocols, bio-mechanics, routine optimization frameworks, and nomadic system architectures.
                    </p>
                </header>

                <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">System_Directories ({filteredPosts.length})</span>
                        <div className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-cyan-500 animate-pulse" />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {fixedPillars.map((p) => {
                            const pKey = p.toLowerCase().trim();
                            const isActive = activePillar === pKey;
                            const postCount = pKey === "all"
                                ? rawPosts.length
                                : rawPosts.filter(post => String(post.pillar || "").toLowerCase() === pKey || String(post.category || "").toLowerCase() === pKey).length;

                            const targetHref = pKey === "all" ? "/blog" : `/blog?pillar=${pKey}${searchQuery ? `&query=${searchQuery}` : ""}`;

                            return (
                                <Link
                                    key={p}
                                    href={targetHref}
                                    className="px-5 py-2.5 text-xs font-mono uppercase tracking-widest border transition-all duration-150 rounded-none block text-center"
                                    style={{
                                        backgroundColor: isActive ? 'rgba(6,182,212,0.08)' : 'transparent',
                                        color: isActive ? "#22d3ee" : "#a3a3a3",
                                        borderColor: isActive ? '#06b6d4' : '#262626',
                                    }}
                                >
                                    <span className="font-bold">
                                        {p} ({postCount})
                                    </span>
                                </Link>
                            );
                        })}
                    </div>

                    <form method="GET" action="/blog" className="w-full max-w-xl space-y-2">
                        {activePillar !== "all" && <input type="hidden" name="pillar" value={activePillar} />}
                        <div className="flex justify-between items-center">
                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono block">Query Stream Pipeline_</label>
                            {searchQuery && (
                                <Link href={activePillar !== "all" ? `/blog?pillar=${activePillar}` : "/blog"} className="text-[9px] font-mono text-rose-400 uppercase tracking-wider underline">Clear_Filter</Link>
                            )}
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                name="query"
                                defaultValue={searchQuery}
                                placeholder="Press ENTER to execute string lookup..."
                                className="p-4 w-full rounded-none border outline-none font-mono text-sm tracking-wider transition-all duration-200 bg-neutral-950/40 border-neutral-800 text-white focus:border-cyan-500 placeholder:text-neutral-700"
                            />
                            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-cyan-400 font-mono text-xs">[RUN]</button>
                        </div>
                    </form>
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredPosts.map((post, idx) => {
                            const cleanSlug = String(post.slug || "").trim();

                            return (
                                <Link
                                    key={cleanSlug || idx}
                                    href={`/blog/posts/${cleanSlug}`}
                                    className="border border-neutral-900 hover:border-cyan-500 rounded-none p-8 flex flex-col justify-between transition-all duration-300 bg-neutral-950/20 backdrop-blur-sm group relative overflow-hidden"
                                >
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-cyan-400">{post.pillar}</span>
                                                <span className="text-neutral-800">/</span>
                                                <span className="text-neutral-500">{String(post.category).toUpperCase().replace(/-/g, "_")}</span>
                                            </div>
                                            <span className="text-neutral-600 font-normal">ID: {idx < 9 ? `0${idx + 1}` : idx + 1}</span>
                                        </div>

                                        <h3 className="text-xl font-bold tracking-tight leading-snug uppercase text-white group-hover:text-cyan-400 transition-colors duration-200">
                                            {post.title}
                                        </h3>

                                        <p className="text-sm font-light leading-relaxed text-neutral-400 pb-2">
                                            {post.desc || post.description || "No summary found."}
                                        </p>
                                    </div>

                                    <div className="mt-6 space-y-5">
                                        <div className="flex flex-wrap gap-1.5">
                                            {post.keywords.map((kw, kwIdx) => (
                                                <span key={kwIdx} className="text-[11px] font-mono bg-neutral-900/40 border border-neutral-800 px-2 py-0.5 text-neutral-400">
                                                    #{kw}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="w-full text-center py-3 text-xs font-mono font-bold uppercase tracking-widest border border-neutral-800 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-200">
                                            Launch Protocol Study &rarr;
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24 border border-dashed border-neutral-800 bg-neutral-950/40">
                        <p className="text-sm text-neutral-500 font-mono uppercase tracking-wider mb-4">No matching execution files found inside current parameters lookup.</p>
                        <Link href="/blog" className="font-bold text-xs font-mono uppercase tracking-widest underline text-cyan-400">
                            Reset Matrix Filters
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}