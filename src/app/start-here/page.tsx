import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "System Initialization | NomadLifeXP",
    description: "Initialize the NomadLifeXP architecture. Map deliberate execution parameters to clean physical output.",
    alternates: {
        canonical: "https://nomadlifexp.com/start-here",
    },
    openGraph: {
        title: "System Initialization | NomadLifeXP",
        description: "Initialize the NomadLifeXP architecture. Map deliberate execution parameters to clean physical output.",
        url: "https://nomadlifexp.com/start-here",
        type: "website",
    },
};

export default function StartHerePage() {
    const deploymentSteps = [
        {
            id: "STEP_01",
            title: "Discipline",
            description: "Engineer and stabilize the foundational consistency loop.",
            route: "/blog/category/discipline",
        },
        {
            id: "STEP_02",
            title: "Fitness",
            description: "Optimize cell mitochondria, metabolic thresholds, and pure energy output.",
            route: "/blog/category/fitness",
        },
        {
            id: "STEP_03",
            title: "Yoga",
            description: "Refine somatic biofeedback mechanisms and isolate internal attention controls.",
            route: "/blog/category/yoga",
        },
        {
            id: "STEP_04",
            title: "Mindset",
            description: "Isolate cognitive distortions, deconstruct bias states, and lock in high focus clarity.",
            route: "/blog/category/mindset",
        },
    ];

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Ambient Background Grid and Radial Glow Systems */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-5xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Structural Navigation Breadcrumbs */}
                <nav className="mb-16 flex flex-wrap items-center gap-4 border-b border-neutral-900/60 pb-6 text-xs font-mono uppercase tracking-widest text-neutral-500">
                    <Link href="/" className="hover:text-cyan-400 transition-colors duration-200 group">
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">&larr;</span> RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800">/</span>
                    <Link href="/blog" className="hover:text-cyan-400 transition-colors duration-200">
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Core Header Initialization Sequence */}
                <header className="mb-16 space-y-6 max-w-3xl">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            NomadLifeXP // Core Initialization Sequence
                        </p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
                        Evolve In<br />
                        <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                            Constant Motion
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-neutral-400 font-light leading-relaxed pt-2">
                        The NomadLifeXP configuration maps deliberate execution parameters to clean physical output.
                        It is engineered to establish strict cognitive clarity and daily consistency through
                        non-negotiable micro-structures.
                    </p>
                </header>

                {/* Action Frame Simulation */}
                <div className="border border-neutral-900 bg-neutral-950/60 p-6 font-mono text-xs text-neutral-500 flex flex-wrap gap-6 mb-16 rounded-none backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">✓</span> INITIALIZE_SYSTEM_SUCCESS
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">✓</span> READ_DATABASE_LOGS_OK
                    </div>
                </div>

                {/* System Baseline Framework Description */}
                <section className="mb-20 grid md:grid-cols-3 gap-8 items-start border-t border-neutral-900/60 pt-12">
                    <div className="space-y-1 md:col-span-1">
                        <p className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">// Axiomatic Rule Baseline</p>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-white">Core Operational Premise</h2>
                    </div>
                    <div className="md:col-span-2 text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                        This is not a temporary motivational blueprint. It is a highly integrated somatic and
                        behavioral system architecture designed to systematically replace fleeting emotional choice
                        with absolute structure.
                    </div>
                </section>

                {/* Framework Grid System Matrix */}
                <section className="space-y-6">
                    <header className="border-b border-neutral-900 pb-3">
                        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                            // System Progression Sequence Layout (Click to Deploy Lookup)
                        </p>
                    </header>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {deploymentSteps.map((step) => (
                            <Link
                                key={step.id}
                                href={step.route}
                                className="group block border border-neutral-900 p-8 hover:border-cyan-500/40 transition-all duration-300 relative bg-neutral-950/40 rounded-none"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-[10px] tracking-widest text-cyan-400 bg-cyan-950/30 border border-cyan-900/40 px-2 py-0.5 uppercase">
                                        {step.id}
                                    </span>
                                    <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-600 group-hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1">
                                        [DEPLOY_ROUTING <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>]
                                    </span>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                                    {step.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </section>

            </main>
        </div>
    );
}