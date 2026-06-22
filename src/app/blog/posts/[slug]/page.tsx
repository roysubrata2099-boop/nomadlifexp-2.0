// src/app/blog/posts/[slug]/page.tsx

import { posts } from "@/lib/posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const formattedHtml = await marked(post.content);

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
            <main className="max-w-2xl mx-auto px-6 py-16">

                {/* Breadcrumbs */}
                <div className="mb-10 text-sm font-medium text-gray-400">
                    <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
                    <span className="mx-2">/</span>
                    <span className="capitalize text-gray-800 font-semibold">{post.category} System</span>
                </div>

                {/* Post Core Body */}
                <article className="prose prose-lg max-w-none">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div
                        dangerouslySetInnerHTML={{ __html: formattedHtml }}
                        className="space-y-6 text-gray-800 text-lg leading-relaxed
                       [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-950 [&_h2]:pt-6 [&_h2]:tracking-tight
                       [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-gray-900 [&_h3]:italic
                       [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3
                       [&_li]:text-gray-700 [&_hr]:border-gray-200 [&_hr]:my-10"
                    />
                </article>

                {/* Footer Related Hub Matrix */}
                <div className="mt-20 pt-8 border-t border-gray-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                        Related Articles
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-blue-600">
                        <Link href="/blog/posts/mental-clarity-guide" className="hover:underline">
                            → Mental Clarity Guide
                        </Link>
                        <Link href="/blog/posts/attention-span-guide" className="hover:underline">
                            → Attention Span Guide
                        </Link>
                        <Link href="/blog/posts/stop-procrastination" className="hover:underline">
                            → Stop Procrastination
                        </Link>
                        <Link href="/blog/posts/discipline-creates-freedom" className="hover:underline">
                            → Discipline Creates Freedom
                        </Link>
                    </div>

                    <div className="mt-16 text-center text-xs text-gray-400">
                        © 2026 Nomad Life XP | Discipline • Focus • Growth
                    </div>
                </div>

            </main>
        </div>
    );
}