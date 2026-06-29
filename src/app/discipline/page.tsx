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
        description: "Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.",
        url: "https://nomadlifexp.com/discipline",
        type: "website",
    },
};

export default function DisciplineCategoryPage() {
    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[140px] pointer-events-none" />

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
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200"
                    >
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Left-Aligned Category Header Block */}
                <header className="mb-20 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Operational Execution Layer
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        The Discipline<br />
                        <span className="bg-gradient-to-r from-white via-neutral-300 to-cyan-400 bg-clip-text text-transparent">
                            System Matrix
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        Discipline is not an emotional state or a temporary motivational spark. It is a strictly engineered execution architecture explicitly deployed to construct true long-term autonomy.
                    </p>
                </header>

                {/* Theoretical Foundations Custom Grid Layout */}
                <section className="space-y-6 mb-24" aria-label="Theoretical Foundations Grid">
                    <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-4">// Theoretical Foundations Grid</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300">
                            <div className="space-y-4">
                                <div className="font-mono text-xs text-cyan-400 tracking-wider">01 // Structural Trajectory Definition</div>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    Acting strictly based on macro-level system setups instead of navigating via fluctuating, short-term neurological emotion.
                                </p>
                            </div>
                        </div>

                        <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300">
                            <div className="space-y-4">
                                <div className="font-mono text-xs text-cyan-400 tracking-wider">02 // Volatile Variable Mitigation</div>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    Overcoming transient mental motivation by implementing structural environmental control patterns, friction elimination, and rapid identity evolution.
                                </p>
                            </div>
                        </div>

                        <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-300">
                            <div className="space-y-4">
                                <div className="font-mono text-xs text-cyan-400 tracking-wider">03 // Systematic Kinetic Execution</div>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    Constructing reliable behavioral loops using micro-repetition metrics, spatial structure safety designs, and extreme physical space alignments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Active Database Knowledge Modules (Articles) */}
                <section className="space-y-6 mb-24" aria-label="Knowledge Modules">
                    <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">// Active Database Knowledge Modules</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Article Card 01 - FIX APPLIED: Mapped to verified comprehensive slug */}
                        <div className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between group hover:border-neutral-800 transition-colors duration-300">
                            <div className="space-y-3 mb-6">
                                <h3 className="text-white text-lg font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                                    Self Discipline Guide: Reclaim Your Attention, Rebuild Your Life
                                </h3>
                                <p className="text-sm font-light text-neutral-400 leading-relaxed">
                                    Discipline begins with attention. Learn how to rebuild self-control and consistency.
                                </p>
                            </div>
                            <Link href="/blog/posts/self-discipline-comprehensive-guide" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                                Read Article <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>

                        {/* Article Card 02 - VERIFIED WORKING */}
                        <div className="border border-neutral-900 bg-neutral-950/40 p-8 flex flex-col justify-between group hover:border-neutral-800 transition-colors duration-300">
                            <div className="space-y-3 mb-6">
                                <h3 className="text-white text-lg font-bold uppercase tracking-tight group-hover:text-cyan-400 transition-colors duration-200">
                                    Why You Procrastinate and How to Stop It
                                </h3>
                                <p className="text-sm font-light text-neutral-400 leading-relaxed">
                                    Break procrastination cycles permanently.
                                </p>
                            </div>
                            <Link href="/blog/posts/why-you-procrastinate-how-to-stop" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                                Read Article <span className="transition-transform duration-200 group-hover/link:translate-x-1" aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Cross-Connect Alternative Nodes Footer Matrix */}
                <footer className="pt-8 border-t border-neutral-900">
                    <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block mb-6">// Cross-Connect Alternative Nodes</h2>

                    <div className="flex flex-wrap items-center gap-y-4 gap-x-8 text-xs font-mono uppercase tracking-widest">
                        <Link href="/fitness" className="text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
                            fitness <span className="text-neutral-700" aria-hidden="true">&rarr;</span>
                        </Link>
                        <Link href="/yoga" className="text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
                            yoga <span className="text-neutral-700" aria-hidden="true">&rarr;</span>
                        </Link>
                        <Link href="/mindset" className="text-neutral-400 hover:text-white flex items-center gap-2 transition-colors">
                            mindset <span className="text-neutral-700" aria-hidden="true">&rarr;</span>
                        </Link>
                    </div>
                </footer>

            </main>
        </div>
    );
}