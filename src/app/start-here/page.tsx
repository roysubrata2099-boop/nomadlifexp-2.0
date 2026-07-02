import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "System Initialization | NomadLifeXP",
    description: "Initialize the NomadLifeXP architecture. Map deliberate execution parameters to clean physical output.",
    alternates: {
        canonical: "https://nomadlifexp.com/start-here",
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
        <div className="min-h-screen bg-white text-black antialiased font-sans selection:bg-black selection:text-white">
            <main className="max-w-5xl mx-auto px-6 pt-36 pb-32">

                {/* Structural Navigation Breadcrumbs */}
                <nav className="mb-16 flex flex-wrap items-center gap-4 border-b border-zinc-100 pb-6 text-xs font-mono uppercase tracking-widest text-zinc-400">
                    <Link href="/" className="hover:text-black transition-colors">
                        &larr; RETURN_TO_HOME
                    </Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-black transition-colors">
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Core Header Initialization Sequence */}
                <header className="mb-16 space-y-6 max-w-3xl">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-zinc-500">
                            NomadLifeXP // Core Initialization Sequence
                        </p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-zinc-950">
                        Evolve In<br />
                        <span className="text-zinc-400">Constant Motion</span>
                    </h1>
                    <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed pt-2">
                        The NomadLifeXP configuration maps deliberate execution parameters to clean physical output.
                        It is engineered to establish strict cognitive clarity and daily consistency through
                        non-negotiable micro-structures.
                    </p>
                </header>

                {/* Action Frame Simulation */}
                <div className="border border-zinc-200 bg-zinc-50 p-6 font-mono text-xs text-zinc-500 flex flex-wrap gap-6 mb-16">
                    <div className="flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> INITIALIZE_SYSTEM_SUCCESS
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-emerald-600">✓</span> READ_DATABASE_LOGS_OK
                    </div>
                </div>

                {/* System Baseline Framework Description */}
                <section className="mb-20 grid md:grid-cols-3 gap-8 items-start border-t border-zinc-200 pt-12">
                    <div className="space-y-1 md:col-span-1">
                        <p className="font-mono text-xs tracking-wider text-zinc-400 uppercase">// Axiomatic Rule Baseline</p>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Core Operational Premise</h2>
                    </div>
                    <div className="md:col-span-2 text-zinc-700 text-sm md:text-base leading-relaxed font-light">
                        This is not a temporary motivational blueprint. It is a highly integrated somatic and
                        behavioral system architecture designed to systematically replace fleeting emotional choice
                        with absolute structure.
                    </div>
                </section>

                {/* Framework Grid System Matrix */}
                <section className="space-y-6">
                    <header className="border-b border-zinc-900 pb-2">
                        <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                            // System Progression Sequence Layout (Click to Deploy Lookup)
                        </p>
                    </header>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {deploymentSteps.map((step) => (
                            <Link
                                key={step.id}
                                href={step.route}
                                className="group block border border-zinc-200 p-8 hover:border-black transition-all duration-300 relative bg-white"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="font-mono text-xs tracking-widest text-zinc-400 bg-zinc-50 border border-zinc-100 px-2 py-0.5">
                                        {step.id}
                                    </span>
                                    <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 group-hover:text-black transition-colors flex items-center gap-1">
                                        [DEPLOY_ROUTING <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>]
                                    </span>
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tight text-zinc-900 group-hover:underline mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-zinc-500 font-light leading-relaxed group-hover:text-zinc-800 transition-colors">
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