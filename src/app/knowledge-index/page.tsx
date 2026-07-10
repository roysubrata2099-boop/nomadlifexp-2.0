// src/app/knowledge-index/page.tsx

import { getAllPosts } from "@/lib/markdown";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Human Optimization Masterclass Library | Discipline, Fitness, Mindset & Yoga | NomadLifeXP",
    description: "Explore the NomadLifeXP Human Optimization Masterclass Library. Learn self discipline, mental clarity, fitness consistency, yoga practices, habit systems, and personal development frameworks.",
    alternates: {
        canonical: "https://nomadlifexp.com/knowledge-index",
    },
    openGraph: {
        title: "Human Optimization Masterclass Library | NomadLifeXP",
        description: "A structured learning system covering discipline, mindset, fitness, yoga, focus, habits, and human optimization.",
        url: "https://nomadlifexp.com/knowledge-index",
        type: "website",
        siteName: "NomadLifeXP",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};

// FIXED: Cleaned up Next.js 15 page props. Because this is a static index page, 
// we only need searchParams declared as a Promise.
interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function normalize(value: unknown): string {
    if (Array.isArray(value)) {
        value = value[0];
    }
    if (typeof value !== "string") return "";
    return value.toLowerCase().trim();
}

export default async function KnowledgeIndexPage(props: PageProps) {
    // FIXED: Correctly awaiting the searchParams promise from props
    const resolvedSearchParams = await props.searchParams;
    const query = normalize(resolvedSearchParams?.q);
    const category = normalize(resolvedSearchParams?.cat) || "all";

    const rawPosts = getAllPosts();

    // FIXED: Simplified the type assertion to an array of objects to fix the parser break
    const posts = Array.isArray(rawPosts)
        ? (rawPosts as Record<string, any>[]).map((post) => ({
            slug: typeof post.slug === "string" ? post.slug : "",
            title: typeof post.title === "string" ? post.title : "Untitled Knowledge Node",
            description: typeof post.description === "string" ? post.description : "Explore this NomadLifeXP knowledge framework.",
            category: typeof post.category === "string" ? post.category.toLowerCase() : "mindset",
            displayPillar: typeof post.displayPillar === "string" ? post.displayPillar : "KNOWLEDGE",
        }))
        : [];

    const categories = ["all", ...Array.from(new Set(posts.map((post) => post.category)))];

    const filteredPosts = posts.filter((post) => {
        const matchesCategory = category === "all" || post.category === category;
        const searchable = `${post.title} ${post.description} ${post.category} ${post.displayPillar}`.toLowerCase();
        const matchesQuery = !query || searchable.includes(query);
        return matchesCategory && matchesQuery;
    });

    const categoryCount = posts.reduce<Record<string, number>>((acc, post) => {
        acc[post.category] = (acc[post.category] || 0) + 1;
        return acc;
    }, {});

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://nomadlifexp.com/knowledge-index",
        "name": "NomadLifeXP Human Optimization Masterclass Library",
        "description": "A structured educational collection covering discipline, mindset, fitness, yoga and personal development.",
        "url": "https://nomadlifexp.com/knowledge-index",
        "about": ["Self Discipline", "Mental Clarity", "Fitness", "Yoga", "Personal Development", "Human Optimization"],
        "publisher": {
            "@type": "Organization",
            "name": "NomadLifeXP",
            "url": "https://nomadlifexp.com",
        },
    };

    return (
        <div className="relative min-h-screen bg-[#03060f] text-[#E2E8F0] antialiased overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-cyan-500/[0.04] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />

            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                <nav className="mb-12 flex items-center border-b border-neutral-900/60 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors"
                    >
                        ← SYSTEM_CORE_HOME
                    </Link>
                </nav>

                <header className="mb-20 space-y-8">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">
                            NomadLifeXP // Human Optimization Masterclass
                        </p>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
                        Human Optimization
                        <br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-cyan-400 bg-clip-text text-transparent">
                            Masterclass Library
                        </span>
                    </h1>

                    <p className="max-w-4xl text-sm md:text-lg text-neutral-400 leading-relaxed">
                        A structured knowledge system designed to improve discipline, mental clarity, physical consistency,
                        focus, and personal development through practical frameworks.
                    </p>

                    <div className="grid md:grid-cols-4 gap-4 pt-6">
                        <div className="border border-neutral-900 bg-neutral-950 p-5">
                            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">MODULE_01</p>
                            <h2 className="mt-3 text-white font-bold uppercase">Mindset Foundation</h2>
                            <p className="mt-2 text-xs text-neutral-500">Build clarity, attention control, and awareness.</p>
                        </div>
                        <div className="border border-neutral-900 bg-neutral-950 p-5">
                            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">MODULE_02</p>
                            <h2 className="mt-3 text-white font-bold uppercase">Discipline Engineering</h2>
                            <p className="mt-2 text-xs text-neutral-500">Create systems that operate beyond motivation.</p>
                        </div>
                        <div className="border border-neutral-900 bg-neutral-950 p-5">
                            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">MODULE_03</p>
                            <h2 className="mt-3 text-white font-bold uppercase">Physical Optimization</h2>
                            <p className="mt-2 text-xs text-neutral-500">Build fitness consistency through repetition.</p>
                        </div>
                        <div className="border border-neutral-900 bg-neutral-950 p-5">
                            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">MODULE_04</p>
                            <h2 className="mt-3 text-white font-bold uppercase">Somatic Regulation</h2>
                            <p className="mt-2 text-xs text-neutral-500">Use movement and yoga for stability.</p>
                        </div>
                    </div>
                </header>

                <section className="mb-20 border border-neutral-900 bg-neutral-950/40 p-8 md:p-12">
                    <div className="mb-10">
                        <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400">Learning Architecture</p>
                        <h2 className="mt-4 text-2xl md:text-3xl font-black uppercase text-white">The NomadLifeXP Transformation Path</h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { number: "01", title: "MINDSET", text: "Control attention and rebuild clarity." },
                            { number: "02", title: "DISCIPLINE", text: "Convert intention into consistent action." },
                            { number: "03", title: "FITNESS", text: "Create physical proof through repetition." },
                            { number: "04", title: "YOGA", text: "Stabilize the nervous system." }
                        ].map((item) => (
                            <div key={item.number} className="border border-neutral-900 p-6">
                                <span className="font-mono text-xs text-cyan-400">{item.number}</span>
                                <h3 className="mt-4 text-white font-bold uppercase">{item.title}</h3>
                                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <form method="GET" action="/knowledge-index" className="space-y-6">
                        <input
                            name="q"
                            defaultValue={query}
                            placeholder="SEARCH MASTERCLASS TOPICS (DISCIPLINE, FOCUS, FITNESS...)"
                            className="w-full bg-neutral-950 border border-neutral-900 px-6 py-5 font-mono text-xs uppercase tracking-widest text-white placeholder-neutral-600 focus:border-cyan-400 outline-none"
                        />
                        <input type="hidden" name="cat" value={category} />
                    </form>

                    <div className="flex flex-wrap gap-3 mt-6">
                        {categories.map((cat) => (
                            <Link
                                key={cat}
                                href={`/knowledge-index?cat=${cat}`}
                                className={`px-4 py-2 border text-xs font-mono uppercase tracking-widest transition ${category === cat
                                        ? "bg-cyan-400 text-black border-cyan-400"
                                        : "border-neutral-900 text-neutral-500 hover:text-white"
                                    }`}
                            >
                                {cat}
                                <span className="ml-2 text-[10px]">
                                    {cat === "all" ? posts.length : categoryCount[cat] || 0}
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="border border-neutral-900 bg-neutral-950/20 divide-y divide-neutral-900" aria-label="Knowledge Masterclass Nodes">
                    <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 bg-neutral-950 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                        <div className="col-span-2">Masterclass Pillar</div>
                        <div className="col-span-7">Knowledge Node</div>
                        <div className="col-span-3 text-right">Access Module</div>
                    </div>

                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <article key={post.slug || index} className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center px-6 py-6 hover:bg-neutral-950/70 transition-colors group">
                                <div className="lg:col-span-2">
                                    <span className="inline-flex px-3 py-1 border border-cyan-900/40 bg-cyan-950/20 text-cyan-400 text-[10px] uppercase font-mono tracking-widest">
                                        {post.displayPillar}
                                    </span>
                                </div>
                                <div className="lg:col-span-7">
                                    <h2 className="text-white font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                                <div className="lg:col-span-3 text-left lg:text-right">
                                    <Link
                                        href={`/blog/posts/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-400 hover:text-cyan-400 transition-colors"
                                    >
                                        ENTER_MODULE <span>→</span>
                                    </Link>
                                </div>
                            </article>
                        ))
                    ) : (
                        <div className="p-16 text-center">
                            <p className="text-xs font-mono uppercase tracking-widest text-neutral-600">NO KNOWLEDGE MODULES FOUND</p>
                            <Link href="/knowledge-index" className="inline-block mt-5 text-xs font-mono uppercase tracking-widest text-cyan-400">
                                RESET SEARCH
                            </Link>
                        </div>
                    )}
                </section>

                <section className="mt-20 grid md:grid-cols-3 gap-6">
                    <Link href="/blog" className="border border-neutral-900 p-8 hover:border-cyan-400 transition-colors">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">RESOURCE_LAYER</p>
                        <h3 className="mt-4 text-white font-bold uppercase">Explore System Blog</h3>
                        <p className="mt-3 text-sm text-neutral-500">Read deeper articles explaining the NomadLifeXP framework.</p>
                    </Link>
                    <Link href="/blog/category/discipline" className="border border-neutral-900 p-8 hover:border-cyan-400 transition-colors">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">PILLAR_LAYER</p>
                        <h3 className="mt-4 text-white font-bold uppercase">Discipline System</h3>
                        <p className="mt-3 text-sm text-neutral-500">Build habits, consistency, and execution systems.</p>
                    </Link>
                    <Link href="/blog/category/mindset" className="border border-neutral-900 p-8 hover:border-cyan-400 transition-colors">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">PILLAR_LAYER</p>
                        <h3 className="mt-4 text-white font-bold uppercase">Mindset System</h3>
                        <p className="mt-3 text-sm text-neutral-500">Improve focus, awareness, and mental clarity.</p>
                    </Link>
                </section>

                <footer className="mt-24 border-t border-neutral-900 pt-8">
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-600">
                        NOMADLIFEXP // HUMAN OPTIMIZATION MASTERCLASS LIBRARY
                    </p>
                    <p className="mt-4 max-w-3xl text-sm text-neutral-500 leading-relaxed">
                        A structured learning ecosystem connecting mindset, discipline, fitness, and yoga into a practical self-development framework.
                    </p>
                </footer>
            </main>
        </div>
    );
}