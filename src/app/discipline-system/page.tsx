// src/app/discipline-system/page.tsx

import Link from "next/link";
import type { Metadata } from "next";

// Force static compile optimization for maximum Core Web Vitals delivery
export const dynamic = "force-static";

// 1. Enterprise SEO & Meta Engine Architecture
export const metadata: Metadata = {
    title: "OPERATIONAL PROTOCOL // DISCIPLINE SYSTEM",
    description: "The complete system blueprint for structural daily execution, routine control modules, and focus engineering frameworks.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline-system",
    },
    openGraph: {
        title: "OPERATIONAL PROTOCOL // DISCIPLINE SYSTEM",
        description: "The complete system blueprint for structural daily execution, routine control modules, and focus engineering frameworks.",
        url: "https://nomadlifexp.com/discipline-system",
        type: "website",
        siteName: "NomadLifeXP",
    },
    twitter: {
        card: "summary_large_image",
        title: "OPERATIONAL PROTOCOL // DISCIPLINE SYSTEM",
        description: "The complete system blueprint for structural daily execution, routine control modules, and focus engineering frameworks.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

// Type definition enforcing clean structural typing interfaces
interface SystemModule {
    id: string;
    title: string;
    description: string;
    href: string;
    status: "OPERATIONAL" | "ONLINE" | "MAINTENANCE";
    color: string;
}

export default function DisciplineSystemPage() {
    // 2. Fault-Tolerant Native Application Data Schema
    const SYSTEM_MODULES: SystemModule[] = [
        {
            id: "SYS-MOD-01",
            title: "ROUTINE // EXECUTION ENGINE",
            description: "Blueprints for morning and evening locking cycles. Eradicate choice fatigue at startup.",
            href: "/blog/posts/morning-execution-protocol",
            status: "OPERATIONAL",
            color: "border-red-500/30 text-red-400"
        },
        {
            id: "SYS-MOD-02",
            title: "FOCUS // ENVIRONMENTAL ISOLATION",
            description: "Digital declutter strategies, device blocking configurations, and deep-work chamber assembly.",
            href: "/blog/posts/deep-work-isolation",
            status: "OPERATIONAL",
            color: "border-amber-500/30 text-amber-400"
        },
        {
            id: "SYS-MOD-03",
            title: "METRIC // ACCOUNTABILITY TRACE",
            description: "System log templates for continuous execution tracking and weekly retrospective algorithms.",
            href: "/knowledge-index",
            status: "ONLINE",
            color: "border-cyan-500/30 text-cyan-400"
        }
    ];

    // 3. Deep Rich Snippet Injection (JSON-LD WebSite/Manual Schema Engine)
    const structuredSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://nomadlifexp.com/discipline-system#webpage",
        "url": "https://nomadlifexp.com/discipline-system",
        "name": "Discipline System Protocol Index",
        "description": "The complete system blueprint for structural daily execution, routine control modules, and focus engineering frameworks.",
        "isPartOf": {
            "@type": "WebSite",
            "@id": "https://nomadlifexp.com/#website",
            "url": "https://nomadlifexp.com/",
            "name": "NomadLifeXP"
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://nomadlifexp.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Discipline System",
                    "item": "https://nomadlifexp.com/discipline-system"
                }
            ]
        }
    };

    return (
        <div className="relative min-h-screen bg-black text-white font-mono selection:bg-red-500 selection:text-black antialiased overflow-hidden">
            {/* Inject Crawlable SEO Schema Matrix */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
            />

            {/* Structural Vector Graphic Grid and Layer Blurs */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/5 blur-[160px] rounded-full pointer-events-none" />

            <main className="relative z-10 max-w-6xl mx-auto px-6 py-32">

                {/* Section Navigation Header */}
                <header className="border-b border-neutral-900 pb-12 mb-16">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-xs tracking-widest text-neutral-500 uppercase mb-6">
                        <Link href="/blog" className="hover:text-red-400 transition-colors">CORE_ARCHIVE</Link>
                        <span>/</span>
                        <Link href="/start-here" className="hover:text-red-400 transition-colors">START_HERE</Link>
                        <span>/</span>
                        <span className="text-red-500" aria-current="page">DISCIPLINE_SYSTEM_MAP</span>
                    </nav>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter mb-4">
                                DISCIPLINE_SYSTEM
                            </h1>
                            <p className="text-neutral-400 text-lg max-w-2xl font-sans leading-relaxed">
                                This is not a collection of articles. This is a deliberate, end-to-end framework designed to engineer unshakeable reliability, eliminate reliance on motivation, and institutionalize consistency.
                            </p>
                        </div>
                        <div className="border border-neutral-800 bg-neutral-950 p-4 text-xs shrink-0">
                            <div className="text-neutral-600 mb-1">SYSTEM_INTEGRITY</div>
                            <div className="text-red-500 font-bold flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                                OPTIMAL_COHERENCE
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Node Mapping Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

                    {/* Primary Dashboard Stream Modules */}
                    <section className="lg:col-span-2 space-y-6" aria-label="Core Execution Engine System Modules">
                        <h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                            CORE_EXECUTION_MODULES
                        </h2>

                        <div className="space-y-4">
                            {SYSTEM_MODULES.map((mod) => (
                                <Link
                                    key={mod.id}
                                    href={mod.href}
                                    className={`group block border ${mod.color} bg-neutral-950/40 p-6 hover:bg-neutral-950 hover:border-neutral-700 transition-all duration-200`}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-xs text-neutral-600 font-bold tracking-wider">{mod.id}</span>
                                        <span className="text-[10px] px-2 py-0.5 border border-neutral-800 text-neutral-500 uppercase bg-black">
                                            {mod.status}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold text-neutral-200 group-hover:text-white mb-2 transition-colors">
                                        {mod.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 font-sans leading-relaxed group-hover:text-neutral-400 transition-colors">
                                        {mod.description}
                                    </p>
                                    <div className="mt-4 text-xs text-neutral-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                        ACCESS_MODULE <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Secondary Navigation Linking Column */}
                    <aside className="space-y-6" aria-label="System Deep Cross-Linking Nodes">
                        <h2 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                            CROSS_SYSTEM_LINKS
                        </h2>

                        <div className="border border-neutral-900 bg-neutral-950/60 p-6 space-y-6">
                            <div>
                                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-2">// ASSOCIATED ARCHIVES</h3>
                                <p className="text-xs text-neutral-500 font-sans mb-3 leading-relaxed">
                                    Review raw categorized entry logs sorted within the taxonomy layer database.
                                </p>
                                <Link
                                    href="/discipline"
                                    className="text-xs text-red-400 hover:text-red-300 underline underline-offset-4"
                                >
                                    VIEW_ALL_DISCIPLINE_POSTS
                                </Link>
                            </div>

                            <hr className="border-neutral-900" />

                            <div>
                                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-2">// KNOWLEDGE SECTOR</h3>
                                <p className="text-xs text-neutral-500 font-sans mb-3 leading-relaxed">
                                    Analyze cross-functional metrics linking physical fitness maps directly to discipline systems.
                                </p>
                                <Link
                                    href="/knowledge-index"
                                    className="text-xs text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                                >
                                    OPEN_KNOWLEDGE_INDEX
                                </Link>
                            </div>

                            <hr className="border-neutral-900" />

                            <div>
                                <h3 className="text-xs font-bold uppercase text-neutral-400 mb-2">// PRIMARY ROADMAP</h3>
                                <p className="text-xs text-neutral-500 font-sans mb-3 leading-relaxed">
                                    New to the site? Access the comprehensive overview onboarding path.
                                </p>
                                <Link
                                    href="/start-here"
                                    className="text-xs text-amber-400 hover:text-amber-300 underline underline-offset-4"
                                >
                                    INITIATE_ONBOARDING
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* System Application Base Analytics Block */}
                <footer className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
                    <div>SYS_VERSION: 2.1.0_PROD</div>
                    <div>© 2026 NOMADLIFEXP // DISCIPLINE FRAMEWORK</div>
                </footer>
            </main>
        </div>
    );
}