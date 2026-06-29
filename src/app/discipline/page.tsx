// src/app/discipline/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Discipline & Autonomy Architecture | NomadLifeXP",
    description: "Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline",
    },
    openGraph: {
        title: "Discipline & Autonomy Architecture | NomadLifeXP",
        description: "Discipline is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.",
        url: "https://nomadlifexp.com/discipline",
        type: "website",
    },
};

export default function DisciplinePage() {
    const theoreticalFoundations = [
        {
            rule: "01 / Structural Trajectory Definition",
            desc: "Acting strictly based on macro-level system setups instead of navigating via fluctuating, short-term neurological emotion."
        },
        {
            rule: "02 / Volatile Variable Mitigation",
            desc: "Overcoming transient mental motivation by implementing structural environmental control patterns, friction elimination, and rapid identity evolution."
        },
        {
            rule: "03 / Systematic Kinetic Execution",
            desc: "Constructing reliable behavioral loops using micro-repetition metrics, spatial structure safety designs, and extreme physical space alignments."
        }
    ];

    const knowledgeModules = [
        {
            title: "Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life",
            desc: "Discipline begins with attention. Learn how to rebuild self-control and consistency.",
            href: "/blog/self-discipline-guide"
        },
        {
            title: "Why You Procrastinate and How to Stop It",
            desc: "Break procrastination cycles permanently.",
            href: "/blog/stop-procrastinating"
        }
    ];

    const crossConnectNodes = [
        { name: "fitness", href: "/fitness" },
        { name: "yoga", href: "/yoga" },
        { name: "mindset", href: "/mindset" }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Discipline & Autonomy Architecture | NomadLifeXP",
        "description": "Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.",
        "url": "https://nomadlifexp.com/discipline",
        "publisher": {
            "@type": "Organization",
            "name": "NomadLifeXP",
            "url": "https://nomadlifexp.com"
        },
        "hasPart": knowledgeModules.map(module => ({
            "@type": "WebPage",
            "name": module.title,
            "description": module.desc,
            "url": `https://nomadlifexp.com${module.href}`
        }))
    };

    return (
        <>
            {/* Structured Schema Validation Layer - Protected Against Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData).replace(/</g, '\\u003c')
                }}
            />

            {/* Mainframe Canvas */}
            <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

                {/* Ambient Lighting Accents */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

                {/* Technical Matrix Grid Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Content Area Matrix */}
                <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                    {/* Navigation Breadcrumb Node Block */}
                    <nav className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6" aria-label="Breadcrumb">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                            RETURN_TO_HOME
                        </Link>
                        <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                            RETURN_TO_DIRECTORY
                        </Link>
                    </nav>

                    {/* Left-Aligned Technical Header Block */}
                    <header className="mb-16 max-w-5xl space-y-5">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">
                                NomadLifeXP // Operational Execution Layer
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            The Discipline<br />
                            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                                System Matrix
                            </span>
                        </h1>
                        <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                            Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.
                        </p>
                    </header>

                    {/* Theoretical Foundations Terminal Block Console */}
                    <section className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">

                        {/* Status Bar Section Header */}
                        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                            <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Theoretical Foundations Grid</h2>
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                            </div>
                        </div>

                        {/* Foundations Grid Matrix */}
                        <div className="space-y-8 divide-y divide-neutral-900 w-full">
                            {theoreticalFoundations.map((foundation, index) => (
                                <div key={foundation.rule} className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 group ${index !== 0 ? 'pt-8' : ''}`}>
                                    <div className="space-y-2 max-w-3xl">
                                        <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
                                            {foundation.rule}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                                            {foundation.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Active Database Knowledge Modules (Two-Column Layout) */}
                    <section className="mb-16 space-y-6">
                        <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                            <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Active Database Knowledge Modules</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {knowledgeModules.map((module, idx) => (
                                <article
                                    key={idx}
                                    className="border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/30 rounded-none group"
                                >
                                    <div className="space-y-4 mb-6">
                                        <h3 className="text-white text-lg font-bold uppercase tracking-tight transition-colors duration-200 group-hover:text-amber-500">
                                            {module.title}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                                            {module.desc}
                                        </p>
                                    </div>
                                    <Link href={module.href} className="inline-flex items-center gap-1 text-cyan-400 font-mono text-xs uppercase tracking-wider hover:text-cyan-300 transition-colors">
                                        Read Article <span aria-hidden="true">→</span>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* Cross-Connect Alternative Nodes Matrix Area */}
                    <nav className="space-y-4" aria-label="Related Pillars">
                        <div className="flex items-center justify-between border-b border-neutral-900 pb-4">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Cross-Connect Alternative Nodes</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            {crossConnectNodes.map((node) => (
                                <Link
                                    key={node.name}
                                    href={node.href}
                                    className="border border-neutral-900 p-6 bg-neutral-950/20 backdrop-blur-sm flex items-center justify-between group hover:border-cyan-500/30 transition-all duration-300 font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white"
                                >
                                    <span>{node.name}</span>
                                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 text-cyan-400" aria-hidden="true">→</span>
                                </Link>
                            ))}
                        </div>
                    </nav>

                </main>
            </div>
        </>
    );
}