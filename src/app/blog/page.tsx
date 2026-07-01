import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";

// Structural data definitions for protected compilation matrix
interface PostItem {
    slug: string;
    title: string;
    description: string;
    category: string;
    displayPillar: string;
}

/**
 * Robust Markdown File Scanner Engine
 * Designed with nested block safeguards to prevent structural crashes 
 * even if Markdown files are malformed, unreadable, or missing values.
 */
function getScannedBlogs(): PostItem[] {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");

        // Return blank matrix safely if directory structure doesn't exist yet
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);

        return files
            .filter((file) => {
                const norm = file.trim().toLowerCase();
                return norm.endsWith(".md") && norm !== ".md" && !norm.startsWith(".");
            })
            .map((file): PostItem | null => {
                // Isolated sub-block prevents single broken file from crashing the entire index loop
                try {
                    const slug = file.replace(/\.md$/i, "").trim();
                    const filePath = path.join(targetDir, file);
                    const fileContent = fs.readFileSync(filePath, "utf8") || "";
                    const lines = fileContent.split("\n");

                    // 1. Content Scanner Engine Matrix
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

                    // 2. Strict Protected Title Parsing Sequence
                    let title = "";
                    const h1Line = lines.find(l => l.trim().startsWith("# "));
                    if (h1Line) {
                        title = h1Line.replace("# ", "").trim();
                    } else {
                        const cleanLines = lines.map(l => l.trim()).filter(l => l.length > 0);
                        title = cleanLines.find(l => l.length > 20 && !l.startsWith("/") && !l.startsWith("#")) || slug.replace(/-/g, " ");
                    }

                    // 3. Strict Protected Description Parsing Sequence
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
                    console.error(`Skipping broken parsing candidate asset: ${file}`, singleFileError);
                    return null;
                }
            })
            .filter((p): p is PostItem => p !== null);
    } catch (e) {
        console.error("Global markdown directory read exception intercepted successfully:", e);
        return [];
    }
}

export default async function BlogIndexPage() {
    // Acquire completely validated log items array safely
    const posts = getScannedBlogs();

    // Dynamically calculate accurate matching counts across real data lookups
    const totalAll = posts.length;
    const totalMindset = posts.filter(p => p.category === "mindset").length;
    const totalDiscipline = posts.filter(p => p.category === "discipline").length;
    const totalFitness = posts.filter(p => p.category === "fitness").length;
    const totalYoga = posts.filter(p => p.category === "yoga").length;
    const totalTravel = posts.filter(p => p.category === "travel").length;

    const categoriesList = [
        { name: "all", count: totalAll, path: "/blog" },
        { name: "mindset", count: totalMindset, path: "/blog/category/mindset" },
        { name: "discipline", count: totalDiscipline, path: "/blog/category/discipline" },
        { name: "fitness", count: totalFitness, path: "/blog/category/fitness" },
        { name: "yoga", count: totalYoga, path: "/blog/category/yoga" },
        { name: "travel", count: totalTravel, path: "/blog/category/travel" },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-cyan-500 selection:text-black overflow-hidden relative">

            {/* Ambient Interface Graphics */}
            <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Return Home Route Gateway */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors group">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> RETURN_TO_HOME
                    </Link>
                </div>

                {/* Dashboard Title Metrics Header */}
                <header className="mb-16 border-b border-neutral-900 pb-8 space-y-2">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-neutral-500">NomadLifeXP // Pure Server Engine</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight">Matrix Index</h1>
                    <p className="text-sm font-light text-neutral-400 max-w-2xl">
                        Deploying tactical workflows across psychological protocols, bio-mechanics, routine optimization frameworks, and nomadic system architectures.
                    </p>
                </header>

                {/* Live System Directories Counter Tabs Row */}
                <section className="space-y-4 mb-12">
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">System_Directories ({totalAll})</h3>
                    <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider">
                        {categoriesList.map((cat) => (
                            <Link
                                key={`nav-pill-${cat.name}`}
                                href={cat.path}
                                className="border border-neutral-900 bg-neutral-950/40 px-4 py-2.5 hover:border-cyan-500 hover:text-cyan-400 transition-all duration-200"
                            >
                                {cat.name} ({cat.count})
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Secure Functional Posts Output Layout Matrix */}
                {posts.length === 0 ? (
                    <div className="border border-dashed border-neutral-800 p-12 text-center font-mono text-xs uppercase tracking-widest text-neutral-600">
                        No active database records found in file node sector.
                    </div>
                ) : (
                    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {posts.map((post, idx) => (
                            <div
                                key={`post-block-index-${post.slug}-${idx}`}
                                className="border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-neutral-700 group relative"
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center font-mono text-xs">
                                        <span className="text-cyan-400/80 uppercase tracking-widest">{post.displayPillar}</span>
                                        <span className="text-neutral-600">ID: 0{idx + 1}</span>
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
                                        Launch Protocol Study &rarr;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </section>
                )}
            </main>
        </div>
    );
}