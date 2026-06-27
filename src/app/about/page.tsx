import { Metadata } from "next";
import Link from "next/link";

/* ---------------- PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "System Core Architecture | About NomadLifeXP",
        description: "Deconstruct the execution framework engineered to bypass motivation, establish structural autonomy, and counter modern environmental distraction.",
        alternates: {
            canonical: "/about",
        },
    };
}

/* ---------------- OPERATIONAL ABOUT CORE ---------------- */
export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#060b18] text-white px-6 pt-32 pb-24 antialiased flex flex-col items-center justify-start">

            {/* HERO HEADING NODE */}
            <section className="max-w-3xl w-full text-center flex flex-col items-center justify-center space-y-6 mb-20">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] px-4 py-1.5 border border-white/5 bg-[#0b132b]/60 inline-block rounded-none" style={{ color: 'var(--glow-cyan, #06b6d4)' }}>
                    System Manifest // Blueprint
                </span>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight fiery-glow-text">
                    About NomadLifeXP
                </h1>
                <p className="font-light max-w-2xl mx-auto leading-relaxed text-sm sm:text-base" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    NomadLifeXP is an integrated behavioral development architecture engineered to substitute fragile emotional motivation with absolute structural design. It serves operators combating progressive cognitive decline and fragmented execution loops within high-friction environments.
                </p>
            </section>

            {/* PLATFORM MOTIVATION CONTEXT */}
            <section className="max-w-3xl w-full flex flex-col items-center justify-center space-y-12 mb-20 text-center">
                <p className="font-light leading-relaxed max-w-2xl mx-auto text-sm sm:text-base" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    Most modern performers possess no knowledge deficiency. The systemic bottleneck resides strictly within the <strong className="font-bold text-white uppercase tracking-wide">execution matrix</strong>. Lacking structured feedback loops and ambient guardrails, even optimized intent collapses under acute dopamine exposure, baseline friction, and chaotic variance.
                </p>

                <div className="w-full border border-white/5 bg-[#0b132b]/40 backdrop-blur-sm p-8 space-y-4 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-center flex flex-col items-center justify-center max-w-2xl">
                    <h2 className="text-xs font-mono uppercase tracking-[0.15em]" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
            // Environmental Reality // Why This System Exists
                    </h2>
                    <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        Modern computational lifestyle infrastructures are designed explicitly to commodify your attention. Hyper-compressed media networks and perpetual push configurations are eroding deep-focus states while destabilizing voluntary persistence. This system provides a defensive perimeter, systematically constructing consistent execution routines through strict automation instead of raw willpower.
                    </p>
                </div>
            </section>

            {/* META PHILOSOPHY MATRIX */}
            <section className="max-w-3xl w-full flex flex-col items-center justify-center space-y-8 mb-24 text-center">
                <div className="w-full border-b border-white/5 pb-4">
                    <h2 className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        Operational Philosophy
                    </h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 text-sm font-light leading-relaxed text-center max-w-2xl" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                    <p>
                        Human development is fundamentally structural, not emotional. Identity thresholds are never determined by cognitive preference; they are forged explicitly through the mechanical repetition of verified operational routines.
                    </p>
                    <p>
                        Atomic habits executed on rigid temporal schedules compounding over extended horizons comfortably outperform sporadic, high-intensity creative bursts. Over deep timelines, discipline shifts to a baseline background function, terminating the need for internal cognitive negotiations.
                    </p>
                </div>
            </section>

            {/* THE CORE PILLARS COMPONENT */}
            <section className="max-w-4xl w-full flex flex-col items-center justify-center mb-24 space-y-10 text-center">
                <div className="w-full border-b border-white/5 pb-4">
                    <h2 className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        The Core Pillars
                    </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 w-full">
                    {[
                        { name: "Discipline", slug: "/discipline", metric: "Consistency Under Acute Friction" },
                        { name: "Fitness", slug: "/fitness", metric: "Mitochondrial Energy & Somatic Control" },
                        { name: "Yoga", slug: "/yoga", metric: "Attention Control via Controlled Respiration" },
                        { name: "Mindset", slug: "/mindset", metric: "Cognitive Parsing Optimization & Clarity" }
                    ].map((pillar, idx) => (
                        <Link
                            key={idx}
                            href={pillar.slug}
                            className="border border-white/5 bg-[#0b132b]/40 backdrop-blur-sm p-6 rounded-xl flex flex-col justify-between items-center text-center min-h-[160px] shadow-[0_4px_25px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#0b132b]/70 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-500/30 group cursor-pointer"
                        >
                            <span className="text-[10px] font-mono text-neutral-500 tracking-wider block mb-3 group-hover:text-cyan-400 transition-colors">
                                PILLAR_0{idx + 1}
                            </span>
                            <div className="space-y-2 flex flex-col items-center justify-center">
                                <span className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-cyan-300 transition-colors block">
                                    {pillar.name}
                                </span>
                                <p className="text-xs font-light leading-snug" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                    {pillar.metric}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* RUNTIME SYSTEM STATUS TRACKER */}
            <section className="max-w-3xl w-full border-t border-white/5 pt-16 text-center flex flex-col items-center justify-center space-y-3">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] font-black" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                    Evolve in Motion
                </h4>
                <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-[0.4em]">
                    Discipline // Fitness // Yoga // Mindset
                </p>
            </section>

        </main>
    );
}