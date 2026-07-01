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
    category: string;
    displayPillar: string;
}

function getTargetCategoryFromSlug(slug: string): { cat: string; display: string } {
    const s = String(slug || "").toLowerCase().trim();

    if (s.includes("attention-span") || s.includes("attention") || s.includes("cant-focus") || s.includes("focus") || s.includes("overthinking") || s.includes("mental-clarity") || s.includes("not-stuck") || s.includes("comfortable")) {
        return { cat: "mindset", display: "MINDSET" };
    }

    if (s.includes("self-discipline") || s.includes("comprehensive-guide") || s.includes("procrastinate") || s.includes("procrastination") || s.includes("daily-habits") || s.includes("habits") || s.includes("self-discipline-why-you-lack") || s.includes("lack-it")) {
        return { cat: "discipline", display: "DISCIPLINE" };
    }

    if (s.includes("workout-videos") || s.includes("never-actually-exercise") || s.includes("fitness-consistency") || s.includes("discipline-that-lasts") || s.includes("not-about-time") || s.includes("time-mindset") || s.includes("workout-habit") || s.includes("outlasts-your-motivation")) {
        return { cat: "fitness", display: "FITNESS" };
    }

    if (s.includes("headstand") || s.includes("stillness") || s.includes("forearm-stand") || s.includes("pincha") || s.includes("forward-bending") || s.includes("bending-yoga")) {
        return { cat: "yoga", display: "YOGA" };
    }

    return { cat: "general", display: "GENERAL" };
}

function getScannedBlogs(): PostItem[] {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);

        return files
            .filter((file) => {
                const norm = String(file || "").trim().toLowerCase();
                return norm.endsWith(".md") && norm !== ".md" && !norm.startsWith(".");
            })
            .map((file): PostItem | null => {
                try {
                    const slug = file.replace(/\.md$/i, "").trim();
                    const filePath = path.join(targetDir, file);
                    const fileContent = fs.readFileSync(filePath, "utf8") || "";
                    const lines = fileContent.split("\n");

                    const rule = getTargetCategoryFromSlug(slug);

                    let title = "";
                    const h1Line = lines.find(l => l.trim().startsWith("# "));
                    if (h1Line) {
                        title = h1Line.replace("# ", "").trim();
                    } else {
                        const cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0);
                        title = cleanLines.find(l => l.length > 20 && !l.startsWith("/") && !l.startsWith("#")) || slug.replace(/-/g, " ");
                    }

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
                        category: rule.cat,
                        displayPillar: rule.display
                    };
                } catch (err) {
                    return null;
                }
            })
            .filter((p): p is PostItem => p !== null);
    } catch (e) {
        return [];
    }
}

export async function generateStaticParams() {
    return [
        { category: "all" },
        { category: "mindset" },
        { category: "discipline" },
        { category: "fitness" },
        { category: "yoga" }
    ];
}

export default async function CategoryPage({ params }: PageProps) {
    const resolvedParams = await params.catch(() => null);
    const category = decodeURIComponent(resolvedParams?.category || "").toLowerCase().trim();

    if (!category) notFound();

    const allPosts = getScannedBlogs() || [];
    const filtered = allPosts.filter(p => p.category === category);

    if (filtered.length === 0 && category !== "all") {
        notFound();
    }

    const postsToDisplay = category === "all" ? allPosts : filtered;

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <div className="mb-12">
                    <Link href="/blog" className="text-xs font-mono text-neutral-500 hover:text-cyan-400">
                        &larr; BACK_TO_MATRIX_INDEX
                    </Link>
                </div>

                <header className="mb-16 border-b border-neutral-900 pb-8 space-y-2">
                    <h1 className="text-4xl md:text-6xl font-black uppercase">
                        Pillar: <span className="text-cyan-400">{category}</span>
                    </h1>
                    <p className="font-mono text-xs text-neutral-400 uppercase">
                        {postsToDisplay.length} Protocols Linked Successfully
                    </p>
                </header>

                <section className="grid gap-6 md:grid-cols-2">
                    {postsToDisplay.map((post, idx) => (
                        <div key={`cat-post-${post.slug}-${idx}`} className="border border-neutral-900 bg-neutral-950/20 p-8 flex flex-col justify-between transition-all hover:border-neutral-700 group">
                            <div className="space-y-4">
                                <div className="flex justify-between font-mono text-xs">
                                    <span className="text-cyan-400">{post.displayPillar}</span>
                                    <span className="text-neutral-600">LOG_0{idx + 1}</span>
                                </div>
                                <h2 className="text-xl font-bold uppercase tracking-wide text-white group-hover:text-cyan-400 transition-colors line-clamp-2">{post.title}</h2>
                                <p className="text-sm font-light text-neutral-400 line-clamp-3">{post.description}</p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-neutral-900/60">
                                <Link href={`/blog/${post.slug}`} className="text-xs font-mono text-neutral-500 hover:text-white transition-colors">
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