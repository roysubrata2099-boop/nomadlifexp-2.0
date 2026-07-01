import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";

interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
}

/**
 * 100% Safety Matrix Mapping System
 */
function getTargetCategoryFromSlug(slug: string): { cat: string; display: string } {
    const s = String(slug || "").toLowerCase().trim();

    // 🧠 Mindset (4)
    if (s.includes("attention-span") || s.includes("attention") || s.includes("cant-focus") || s.includes("focus") || s.includes("overthinking") || s.includes("mental-clarity") || s.includes("not-stuck") || s.includes("comfortable")) {
        return { cat: "mindset", display: "MINDSET" };
    }

    // 🎯 Discipline (3)
    if (s.includes("self-discipline") || s.includes("comprehensive-guide") || s.includes("procrastinate") || s.includes("procrastination") || s.includes("daily-habits") || s.includes("habits") || s.includes("self-discipline-why-you-lack") || s.includes("lack-it")) {
        return { cat: "discipline", display: "DISCIPLINE" };
    }

    // 💪 Fitness (4)
    if (s.includes("workout-videos") || s.includes("never-actually-exercise") || s.includes("fitness-consistency") || s.includes("discipline-that-lasts") || s.includes("not-about-time") || s.includes("time-mindset") || s.includes("workout-habit") || s.includes("outlasts-your-motivation")) {
        return { cat: "fitness", display: "FITNESS" };
    }

    // 🧘 Yoga (3)
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
                    // Normalize slug generation to handle whitespaces, extensions, and hidden anomalies safely
                    const rawSlug = file.replace(/\.md$/i, "").trim();

                    // 100% Protection: Force strict routing URI-compatible slugs
                    const cleanSlug = encodeURIComponent(rawSlug.toLowerCase())
                        .replace(/%20/g, "-")
                        .replace(/[^a-zA-Z0-9-_]/g, "");

                    const filePath = path.join(targetDir, file);
                    const fileContent = fs.readFileSync(filePath, "utf8") || "";
                    const lines = fileContent.split("\n");

                    const rule = getTargetCategoryFromSlug(rawSlug);

                    let title = "";
                    const h1Line = lines.find(l => l.trim().startsWith("# "));
                    if (h1Line) {
                        title = h1Line.replace("# ", "").trim();
                    } else {
                        const cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0);
                        title = cleanLines.find(l => l.length > 20 && !l.startsWith("/") && !l.startsWith("#")) || rawSlug.replace(/-/g, " ");
                    }

                    let description = "Protocol data log.";
                    const cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0);
                    const descriptiveLine = cleanLines.find(l => l.length > 40 && !l.startsWith("#") && !l.startsWith("/") && l.trim() !== title.trim());
                    if (descriptiveLine) {
                        description = descriptiveLine;
                    }

                    return {
                        slug: String(cleanSlug || rawSlug),
                        title: String(title || rawSlug.replace(/-/g, " ")),
                        description: String(description),
                        category: rule.cat,
                        displayPillar: rule.display
                    };
                } catch (err) {
                    return null; // Isolate faulty files instantly
                }
            })
            .filter((p): p is PostItem => p !== null);
    } catch (e) {
        return [];
    }
}

export default async function BlogIndexPage() {
    const posts = getScannedBlogs() || [];

    const totalAll = posts.length;
    const totalMindset = posts.filter(p => p.category === "mindset").length;
    const totalDiscipline = posts.filter(p => p.category === "discipline").length;
    const totalFitness = posts.filter(p => p.category === "fitness").length;
    const totalYoga = posts.filter(p => p.category === "yoga").length;

    const categoriesList = [
        { name: "all", count: totalAll, path: "/blog" },
        { name: "mindset", count: totalMindset, path: "/blog/category/mindset" },
        { name: "discipline", count: totalDiscipline, path: "/blog/category/discipline" },
        { name: "fitness", count: totalFitness, path: "/blog/category/fitness" },
        { name: "yoga", count: totalYoga, path: "/blog/category/yoga" }
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased relative overflow-hidden">
            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <header className="mb-16 border-b border-neutral-900 pb-8 space-y-2">
                    <p className="text-xs uppercase tracking-[0.4em] font-mono text-neutral-500">NomadLifeXP // Pure Server Engine</p>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Matrix Index</h1>
                </header>

                <section className="space-y-4 mb-12">
                    <h3 className="text-xs font-mono uppercase text-neutral-500">System_Directories ({totalAll})</h3>
                    <div className="flex flex-wrap gap-3 font-mono text-xs uppercase">
                        {categoriesList.map((cat) => (
                            <Link key={`cat-list-${cat.name}`} href={cat.path} className="border border-neutral-900 bg-neutral-950/40 px-4 py-2.5 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                                {cat.name} ({cat.count})
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    {posts.map((post, idx) => (
                        <div key={`idx-post-${post.slug}-${idx}`} className="border border-neutral-900 bg-neutral-950/20 p-8 flex flex-col justify-between transition-all hover:border-neutral-700 group">
                            <div className="space-y-4">
                                <div className="flex justify-between font-mono text-xs">
                                    <span className="text-cyan-400">{post.displayPillar}</span>
                                    <span className="text-neutral-600">ID: 0{idx + 1}</span>
                                </div>
                                {/* Clean URL wrapper redirection path logic mapping */}
                                <h2 className="text-xl font-bold uppercase tracking-wide group-hover:text-cyan-400 transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-sm font-light text-neutral-400 line-clamp-3">{post.description}</p>
                            </div>
                            <div className="pt-6 mt-6 border-t border-neutral-900/60">
                                <Link href={`/blog/${post.slug}`} className="text-xs font-mono text-neutral-500 hover:text-white transition-colors">
                                    Launch Protocol Study &rarr;
                                </Link>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
}