import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

/* ----------------- EXACT NEXT.JS 15 ENGINE SIGNATURES ----------------- */
interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

/* ----------------- SAFE FRONTMATTER & CONTENT EXTRACTOR ----------------- */
interface ExtractedPost {
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
    keywords: string[];
    content: string;
}

function getPostFromFile(slug: string): ExtractedPost | null {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        const filePath = path.join(targetDir, `${slug}.md`);

        if (!fs.existsSync(filePath)) return null;

        const fileContent = fs.readFileSync(filePath, "utf8");

        // Split frontmatter block out cleanly
        const parts = fileContent.split("---");
        if (parts.length < 3) {
            return {
                title: slug,
                description: "",
                date: "",
                category: "general",
                image: "",
                keywords: [],
                content: fileContent
            };
        }

        const frontmatterLines = parts[1].split("\n");
        const bodyContent = parts.slice(2).join("---");

        const data: any = {
            title: "",
            description: "",
            date: "",
            category: "general",
            image: "",
            keywords: []
        };

        // Parse key-value frontmatter lines manually without external dependencies
        frontmatterLines.forEach(line => {
            const separatorIndex = line.indexOf(":");
            if (separatorIndex !== -1) {
                const key = line.slice(0, separatorIndex).trim();
                let val = line.slice(separatorIndex + 1).trim();

                // Clean quotes if present
                if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                    val = val.slice(1, -1);
                }

                if (key === "keywords" || key === "tags") {
                    try {
                        // Handle array brackets if format is ["A", "B"]
                        if (val.startsWith("[") && val.endsWith("]")) {
                            data.keywords = val.slice(1, -1).split(",").map(s => s.trim().replace(/['"']/g, ""));
                        } else {
                            data.keywords = val.split(",").map(s => s.trim());
                        }
                    } catch {
                        data.keywords = [];
                    }
                } else {
                    data[key] = val;
                }
            }
        });

        return {
            title: data.title || slug,
            description: data.description || "",
            date: data.date || "",
            category: data.category || "general",
            image: data.image || "",
            keywords: data.keywords,
            content: bodyContent
        };
    } catch (error) {
        console.error("Error reading post file:", error);
        return null;
    }
}

/* ----------------- CLEAN SMART PARSER ----------------- */
function parseMarkdownToHtml(markdownString: string): string {
    if (!markdownString) return "";

    const lines = markdownString.split("\n");
    const htmlElements: string[] = [];
    let paragraphBuffer: string[] = [];

    const flushParagraph = () => {
        if (paragraphBuffer.length > 0) {
            let textContent = paragraphBuffer.join(" ");

            if (textContent.trim().startsWith("![") && textContent.includes("](")) {
                const imgMatch = textContent.match(/!\[(.*?)\]\((.*?)\)/);
                if (imgMatch) {
                    const alt = imgMatch[1];
                    let src = imgMatch[2];
                    // Strip /public from string safely if accidentially passed
                    if (src.startsWith("/public")) src = src.replace("/public", "");
                    htmlElements.push(`<div class="my-8 overflow-hidden rounded-xl border border-white/5 shadow-lg"><img src="${src}" alt="${alt}" class="w-full h-auto object-cover opacity-90" /></div>`);
                    paragraphBuffer = [];
                    return;
                }
            }

            htmlElements.push(`<p class="font-light leading-relaxed text-base sm:text-lg my-6" style="color: var(--text-muted, #94a3b8);">${textContent}</p>`);
            paragraphBuffer = [];
        }
    };

    for (const line of lines) {
        const trimmed = line.trim();

        if (trimmed.startsWith("# ")) {
            flushParagraph();
            htmlElements.push(`<h1 class="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-10 mb-4 border-b border-white/5 pb-2">${trimmed.slice(2)}</h1>`);
        } else if (trimmed.startsWith("## ")) {
            flushParagraph();
            htmlElements.push(`<h2 class="text-xl sm:text-2xl font-bold uppercase text-neutral-100 mt-8 mb-3">${trimmed.slice(3)}</h2>`);
        } else if (trimmed.startsWith("### ")) {
            flushParagraph();
            htmlElements.push(`<h3 class="text-lg sm:text-xl font-bold uppercase text-neutral-200 mt-6 mb-2">${trimmed.slice(4)}</h3>`);
        } else if (trimmed.startsWith("- ")) {
            flushParagraph();
            htmlElements.push(`<li class="ml-5 list-disc font-light my-2" style="color: var(--text-muted, #94a3b8);">${trimmed.slice(2)}</li>`);
        } else if (trimmed.startsWith("* ")) {
            flushParagraph();
            htmlElements.push(`<li class="ml-5 list-disc font-light my-2" style="color: var(--text-muted, #94a3b8);">${trimmed.slice(2)}</li>`);
        } else if (trimmed.startsWith("![") && trimmed.includes("](")) {
            flushParagraph();
            const imgMatch = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
            if (imgMatch) {
                const alt = imgMatch[1];
                let src = imgMatch[2];
                if (src.startsWith("/public")) src = src.replace("/public", "");
                htmlElements.push(`<div class="my-8 overflow-hidden rounded-xl border border-white/5 shadow-lg"><img src="${src}" alt="${alt}" class="w-full h-auto object-cover opacity-90" /></div>`);
            }
        } else if (trimmed === "") {
            flushParagraph();
        } else {
            paragraphBuffer.push(trimmed);
        }
    }

    flushParagraph();
    return htmlElements.join("");
}

/* ----------------- DYNAMIC SEO METADATA ----------------- */
export async function generateMetadata(props: PageProps): Promise<Metadata> {
    try {
        const resolvedParams = await props.params;
        const slug = resolvedParams?.slug;
        if (!slug) return { title: "Post Not Found" };

        const decodedSlug = decodeURIComponent(slug);
        const post = getPostFromFile(decodedSlug);

        if (!post) return { title: "Post Not Found" };

        return {
            title: `${post.title} | NomadLifeXP`,
            description: post.description,
            keywords: post.keywords,
        };
    } catch {
        return { title: "Blog Post | NomadLifeXP" };
    }
}

/* ----------------- STATIC GENERATION ROUTER ----------------- */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        if (!fs.existsSync(targetDir)) return [];

        const files = fs.readdirSync(targetDir);
        return files
            .filter(file => file.endsWith(".md"))
            .map(file => ({
                slug: file.replace(".md", ""),
            }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

/* ----------------- MAIN BLOG POST PAGE ----------------- */
export default async function BlogPostPage(props: PageProps) {
    const resolvedParams = await props.params;
    const rawSlug = resolvedParams?.slug;

    if (!rawSlug) notFound();

    const slug = decodeURIComponent(rawSlug);
    const post = getPostFromFile(slug);

    if (!post) notFound();

    // Dynamically look for related posts inside the filesystem directory
    let related: any[] = [];
    try {
        const targetDir = path.join(process.cwd(), "src", "content", "posts");
        const files = fs.readdirSync(targetDir);

        related = files
            .filter(file => file.endsWith(".md") && file !== `${slug}.md`)
            .map(file => getPostFromFile(file.replace(".md", "")))
            .filter((p): p is ExtractedPost => p !== null && p.category.toLowerCase() === post.category.toLowerCase())
            .map(p => ({ slug: p.title.toLowerCase().replace(/ /g, "-"), title: p.title, category: p.category })) // generic structured backup map
            .slice(0, 3);
    } catch {
        related = [];
    }

    // Dynamic clean image fallback logic
    let postImage = post.image;
    if (postImage.startsWith("/public")) {
        postImage = postImage.replace("/public", "");
    }

    return (
        <main className="min-h-screen bg-[#060b18] text-white px-6 pt-32 pb-24 antialiased">

            {/* NAVIGATION BAR */}
            <div className="max-w-3xl mx-auto mb-8">
                <Link
                    href="/blog"
                    className="text-xs font-mono tracking-widest hover:text-white uppercase transition-colors"
                    style={{ color: 'var(--text-muted, #94a3b8)' }}
                >
                    ← Back to Articles
                </Link>
            </div>

            {/* HEADER */}
            <header className="max-w-3xl mx-auto mb-12 space-y-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                    // {post.category || "general"}
                </span>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight">
                    {post.title}
                </h1>
                <div className="text-[11px] font-mono uppercase tracking-wider pt-4 border-t border-white/5 flex justify-between items-center" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    <span>Published: {post.date}</span>
                    <span className="normal-case">Written by: NomadLifeXP</span>
                </div>
            </header>

            {/* COVER IMAGE */}
            {postImage && (
                <div className="max-w-3xl mx-auto mb-12 h-64 sm:h-96 w-full bg-[#0b132b]/20 border border-white/5 overflow-hidden relative rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                    <img
                        src={postImage}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-80 relative z-10"
                    />
                </div>
            )}

            {/* ARTICLE CONTENT */}
            <article className="max-w-3xl mx-auto">
                <div
                    className="block prose-neutral prose-invert"
                    dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(post.content || "") }}
                />
            </article>

            {/* RECOMMENDED READING */}
            <section className="max-w-3xl mx-auto mt-24 border-t border-white/5 pt-12">
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] mb-6" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    Recommended Reading
                </h2>

                {related.length === 0 ? (
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                        No related articles found.
                    </p>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-3">
                        {related.map((r: any) => {
                            return (
                                <div
                                    key={r.slug}
                                    className="p-5 border border-white/5 bg-[#0b132b]/40 rounded-xl hover:border-cyan-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-sm transition-all flex flex-col justify-between space-y-4 group"
                                >
                                    <div className="space-y-2 block">
                                        <span className="text-[9px] font-mono uppercase tracking-widest block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                                            // {r.category}
                                        </span>
                                        <h3 className="font-bold text-sm text-neutral-200 group-hover:text-cyan-400 transition-colors line-clamp-2 overflow-hidden">
                                            {r.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </main>
    );
}