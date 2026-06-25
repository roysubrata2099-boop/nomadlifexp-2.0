import { notFound } from 'next/navigation';
import { posts } from '@/lib/posts';

// This dynamic type handles both Next.js 14 (object) and Next.js 15+ (Promise) seamlessly
interface PageProps {
    params: any;
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: String(post.slug),
    }));
}

export default async function BlogPostPage({ params }: PageProps) {
    // Safe extraction helper: handles both synchronous objects and unresolved promises
    const resolvedParams = params && typeof params.then === 'function'
        ? await params
        : params;

    const slug = resolvedParams?.slug;

    // Locate the post match
    const post = posts.find((p) => String(p.slug) === slug);

    if (!post) {
        notFound();
    }

    // Fallback structural rendering check
    const fullBodyText = post.content || post.body || post.description || '';

    return (
        <article className="max-w-3xl mx-auto px-4 py-12 prose prose-neutral dark:prose-invert">
            <header className="mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <div className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                    {post.category} • {post.updatedDate || post.date}
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                    {post.title}
                </h1>
                {post.description && (
                    <p className="text-xl text-zinc-600 dark:text-zinc-400 italic font-normal">
                        {post.description}
                    </p>
                )}
            </header>

            <div className="mt-8 text-base leading-relaxed text-zinc-800 dark:text-zinc-300 whitespace-pre-wrap">
                {fullBodyText}
            </div>
        </article>
    );
}