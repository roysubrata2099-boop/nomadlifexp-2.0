import fs from "fs";
import path from "path";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

interface FrontmatterData {
    title?: string;
    description?: string;
    pillar?: string;
    category?: string;
    [key: string]: string | undefined;
}

// 1. Static Generation Matrix (Pre-compiles all 14 articles at build time)
export async function generateStaticParams() {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);
        return files
            .filter((file) => file.endsWith(".md") && file !== ".md")
            .map((file) => ({
                slug: file.replace(".md", "").trim(),
            }));
    } catch (e) {
        return [];
    }
}

// 2. Main Server-Side Content Loader & Parser
export default async function PostPage({ params }: PostPageProps) {
    const resolvedParams = await params;
    const cleanSlug = String(resolvedParams.slug || "").trim();

    const targetDir = path.join(process.cwd(), "src", "content", "posts");
    const filePath = path.join(targetDir, `${cleanSlug}.md`);

    // Guard configuration: Triggers Next.js native 404 page if slug isn't found
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    let fileContent = "";
    try {
        fileContent = fs.readFileSync(filePath, "utf8");
    } catch (e) {
        notFound();
    }

    // Process frontmatter and payload content stream split
    const parts = fileContent.split("---");
    const data: FrontmatterData = {
        title: cleanSlug.replace(/-/g, " "),
        description: "",
        pillar: "protocol",
        category: "general"
    };

    let rawMarkdownBody = fileContent;

    if (parts.length >= 3) {
        rawMarkdownBody = parts.slice(2).join("---").trim();
        const lines = parts[1].split("\n");
        lines.forEach((line) => {
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

    // Defensive simple formatter to render body text line breaks and images cleanly without extra libraries
    const renderedParagraphs = rawMarkdownBody.split("\n\n").map((para, index) => {
        const cleanPara = para.trim();
        if (!cleanPara) return null;

        // Inline Image Parsing Support Strategy (![alt](src))
        if (cleanPara.startsWith("![") && cleanPara.includes("](")) {
            const altMatch = cleanPara.match(/!\[(.*?)\]/);
            const srcMatch = cleanPara.match(/\((.*?)\)/);
            if (srcMatch) {
                const alt = altMatch ? altMatch[1] : "Matrix Media Asset";
                const src = srcMatch[1];
                return (
                    <div key={index} className="my-8 border border-neutral-900 bg-neutral-950 p-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={src} alt={alt} className="w-full h-auto object-cover border border-neutral-800" />
                        <span className="block mt-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest text-center">Asset Log // {alt}</span>
                    </div>
                );
            }
        }

        // Subheading parsing formatting layer (### heading)
        if (cleanPara.startsWith("###")) {
            return <h3 key={index} className="text-xl font-bold text-cyan-400 font-mono pt-6 pb-2 uppercase tracking-wide">{cleanPara.replace(/###/g, "").trim()}</h3>;
        }
        if (cleanPara.startsWith("##")) {
            return <h2 key={index} className="text-2xl font-black text-white font-mono pt-8 pb-3 uppercase tracking-tight border-b border-neutral-900">{cleanPara.replace(/##/g, "").trim()}</h2>;
        }

        return <p key={index} className="text-neutral-300 font-light text-base md:text-lg leading-relaxed mb-6 font-sans">{cleanPara}</p>;
    });

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 pt-36 pb-32 relative z-10">
                {/* Protocol Directory Backlink */}
                <div className="mb-12">
                    <Link href="/blog" className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        BACK_TO_MATRIX_INDEX
                    </Link>
                </div>

                {/* Article Protocol Header Meta */}
                <header className="mb-12 space-y-4 pb-8 border-b border-neutral-900">
                    <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                        <span>{data.pillar || "System"}</span>
                        <span className="text-neutral-800">/</span>
                        <span className="text-neutral-500">{data.category || "Protocol"}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                        {data.title || cleanSlug.replace(/-/g, " ")}
                    </h1>
                    {data.description && (
                        <p className="text-sm md:text-base font-light font-mono text-neutral-400 pt-2 max-w-2xl leading-relaxed">
                            {data.description}
                        </p>
                    )}
                </header>

                {/* Main Rendered Content Block */}
                <article className="space-y-2">
                    {renderedParagraphs}
                </article>

                {/* Back to Top / Exit Protocols Footer Row */}
                <footer className="mt-16 pt-8 border-t border-neutral-900 flex justify-between items-center font-mono text-xs text-neutral-500">
                    <span>SYS_STATUS // STREAM_COMPLETE</span>
                    <Link href="/blog" className="text-cyan-400 hover:underline tracking-wider uppercase">
                        [ Terminate Study Session ]
                    </Link>
                </footer>
            </div>
        </div>
    );
}