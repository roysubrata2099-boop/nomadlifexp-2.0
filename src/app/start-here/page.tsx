import Link from "next/link";
import { Metadata } from "next";

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "System Entry Framework | Start Here | NomadLifeXP",
        description: "Begin your journey. Deconstruct the global system architecture, progression flows, and execution operational nodes.",
        alternates: {
            canonical: "/start-here",
        },
    };
}

/* ---------------- OPERATIONAL ENTRY GATEWAY ---------------- */
export default function StartHere() {
    return (
        <main className="min-h-screen bg-[#060b18] text-white px-6 pt-32 pb-24 antialiased flex flex-col items-center justify-start">

            {/* HERO MODULE */}
            <header className="max-w-3xl w-full text-center flex flex-col items-center justify-center space-y-6 mb-20">
                <p className="text-xs uppercase tracking-[0.25em] font-medium" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                    Discipline / Fitness / Yoga / Mindset
                </p>

                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight fiery-glow-text">
                    Evolve in Motion
                </h1>

                <p className="font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    The NomadLifeXP configuration maps deliberate execution parameters to clean physical output. It is engineered to establish strict cognitive clarity and daily consistency through non-negotiable micro-structures.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 w-full max-w-md">
                    <Link
                        href="/discipline-system"
                        className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest border transition-all duration-200 font-medium text-center"
                        style={{
                            borderColor: 'var(--glow-cyan, #06b6d4)',
                            backgroundColor: 'rgba(6,182,212,0.05)',
                            color: 'var(--glow-cyan, #06b6d4)',
                            boxShadow: '0 0 15px rgba(6,182,212,0.1)'
                        }}
                    >
                        Initialize System
                    </Link>

                    <Link
                        href="/blog"
                        className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest bg-white text-black hover:bg-neutral-200 transition-colors font-bold text-center"
                    >
                        Read Database Logs
                    </Link>
                </div>
            </header>

            {/* STRATEGIC CONTEXT FRAMEWORK */}
            <section className="max-w-3xl w-full flex flex-col items-center justify-center mb-20 text-center">
                <div className="w-full border border-white/5 bg-[#0b132b]/40 backdrop-blur-sm p-8 space-y-3 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] max-w-2xl">
                    <h2 className="text-xs uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
            // Core Premise //
                    </h2>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        This is not a temporary motivational blueprint. It is a highly integrated somatic and behavioral system architecture designed to systematically replace fleeting emotional choice with absolute structure.
                    </p>
                </div>
            </section>

            {/* CORE PROCEDURAL SEQUENCE FLOW */}
            <section className="max-w-3xl w-full flex flex-col items-center justify-center mb-24 space-y-10 text-center">
                <div className="w-full border-b border-white/5 pb-4">
                    <h2 className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        System Progression Sequence
                    </h2>
                </div>

                <div className="space-y-8 w-full max-w-2xl text-left">
                    {[
                        { step: "1", category: "Discipline", detail: "Engineer and stabilize the foundational consistency loop." },
                        { step: "2", category: "Fitness", detail: "Optimize cell mitochondria, metabolic thresholds, and pure energy output." },
                        { step: "3", category: "Yoga", detail: "Refine somatic biofeedback mechanisms and isolate internal attention controls." },
                        { step: "4", category: "Mindset", detail: "Isolate cognitive distortions, deconstruct bias states, and lock in high focus clarity." }
                    ].map((node) => (
                        <div
                            key={node.step}
                            className="flex flex-col sm:flex-row sm:items-start text-sm font-light border-l-2 pl-6 py-2 gap-2 sm:gap-8 transition-all duration-300 group"
                            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                        >
                            <span className="text-xs font-mono font-bold tracking-widest min-w-[70px] group-hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                STEP_0{node.step}
                            </span>
                            <div className="space-y-1.5 flex-grow">
                                <span className="font-black text-white uppercase tracking-wider block text-xs">
                                    {node.category}
                                </span>
                                <p className="font-light leading-relaxed text-sm" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                    {node.detail}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER MATRIX META */}
            <footer className="w-full max-w-3xl border-t border-white/5 pt-16 text-center text-neutral-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                Active Execution Sequence
            </footer>

        </main>
    );
}