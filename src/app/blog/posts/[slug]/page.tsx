import { notFound } from 'next/navigation';
import { posts } from '@/lib/posts';
import ReactMarkdown from 'react-markdown'; // Ensure this package is installed via 'npm i react-markdown'

interface PageProps {
    params: any;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: String(post.slug),
    }));
}

export default async function BlogPostPage({ params }: PageProps) {
    const resolvedParams = params && typeof params.then === 'function'
        ? await params
        : params;

    const slug = resolvedParams?.slug;
    const post = posts.find((p) => String(p.slug) === slug);

    if (!post) {
        notFound();
    }

    const fullBodyText = post.content || post.description || '';

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 transition-colors duration-200">
            <article className="max-w-3xl mx-auto px-6">

                {/* Header Section */}
                <header className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <div className="text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-3">
                        {post.category} • {post.updatedDate || post.date}
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
                        {post.title}
                    </h1>
                    {post.description && (
                        <p className="text-lg text-zinc-600 dark:text-zinc-400 italic font-normal leading-relaxed">
                            {post.description}
                        </p>
                    )}
                </header>

                {/* Content Section: Uses react-markdown to safely parse headings, bolding, and lists */}
                <div className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed prose prose-zinc dark:prose-invert max-w-none
          prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100
          prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
          prose-ul:list-disc prose-ul:pl-5 prose-li:mb-1">
                    <ReactMarkdown>{fullBodyText}</ReactMarkdown>
                </div>

            </article>
        </div>
    );
}