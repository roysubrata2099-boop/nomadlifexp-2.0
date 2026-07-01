import Link from "next/link";
import { Metadata } from "next";
import React from "react";

/* ---------------- 100% PROTECTED PRODUCTION SEO METADATA ---------------- */
export async function generateMetadata(): Promise<Metadata> {
    try {
        const baseTitle = "System Entry Framework | Start Here | NomadLifeXP";
        const baseDesc = "Begin your journey. Deconstruct the global system architecture, progression flows, and execution operational nodes.";
        const baseCanvasUrl = "https://nomadlifexp.com/start-here";

        return {
            title: String(baseTitle),
            description: String(baseDesc),
            alternates: {
                canonical: String(baseCanvasUrl),
            },
            openGraph: {
                title: String(baseTitle),
                description: String(baseDesc),
                url: String(baseCanvasUrl),
                type: "website",
            },
        };
    } catch (error) {
        // Absolute defensive fallback prevents misconfigured environmental params from breaking static page compilation
        return {
            title: "System Entry Framework Matrix",
            description: "NomadLifeXP Operational Entry Gateway."
        };
    }
}

interface SystemNode {
    step: string;
    category: string;
    detail: string;
    targetHref: string;
}

/* ---------------- OPERATIONAL ENTRY GATEWAY ---------------- */
export default function StartHere() {
    // Structural mapping synchronized exactly with the new dynamic hashtag scanner patterns
    const systemSteps: SystemNode[] = [
        {
            step: "1",
            category: "Discipline",
            detail: "Engineer and stabilize the foundational consistency loop.",
            targetHref: "/blog/category/discipline"
        },
        {
            step: "2",
            category: "Fitness",
            detail: "Optimize cell mitochondria, metabolic thresholds, and pure energy output.",
            targetHref: "/blog/category/fitness"
        },
        {
            step: "3",
            category: "Yoga",
            detail: "Refine somatic biofeedback mechanisms and isolate internal attention controls.",
            targetHref: "/blog/category/yoga"
        },
        {
            step: "4",
            category: "Mindset",
            detail: "Isolate cognitive distortions, deconstruct bias states, and lock in high focus clarity.",
            targetHref: "/blog/category/mindset"
        }
    ];

    // Defensive Verification Layer: If array is missing items or corrupted, instantiate array protection instantly
    const secureSteps = Array.isArray(systemSteps) ? systemSteps : [];

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-amber-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Mainframe Technical Matrix Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Content Area Matrix */}
            <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Navigation Breadcrumb Node Block */}
                <nav className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-500 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-500 transition-colors duration-200"
                    >
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Left-Aligned Technical Header Block */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">
                            NomadLifeXP // Core Initialization Sequence
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        Evolve In<br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                            Constant Motion
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        The NomadLifeXP configuration maps deliberate execution parameters to clean physical output. It is engineered to establish strict cognitive clarity and daily consistency through non-negotiable micro-structures.
                    </p>

                    {/* Interactive Navigation Launch Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full max-w-md">
                        <Link
                            href="/blog"
                            className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-widest border transition-all duration-300 font-mono font-bold text-center border-amber-500/40 bg-amber-500/5 text-amber-500 hover:bg-amber-500/20 hover:border-amber-500"
                        >
                            Initialize System
                        </Link>

                        <Link
                            href="/blog"
                            className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-widest bg-white text-black hover:bg-neutral-200 transition-colors font-mono font-bold text-center"
                        >
                            Read Database Logs
                        </Link>
                    </div>
                </header>

                {/* Strategic Core Premise Frame */}
                <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Axiomatic Rule Baseline</span>
                        <div className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                        </div>
                    </div>

                    <div className="space-y-2 max-w-4xl">
                        <h3 className="text-amber-500 text-xs font-mono font-bold uppercase tracking-widest">
                            // Core Operational Premise
                        </h3>
                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                            This is not a temporary motivational blueprint. It is a highly integrated somatic and behavioral system architecture designed to systematically replace fleeting emotional choice with absolute structure.
                        </p>
                    </div>
                </div>

                {/* CORE PROCEDURAL SEQUENCE FLOW */}
                <section className="mb-16 space-y-6">
                    <div className="border-b border-neutral-900 pb-4">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-mono font-bold">
                            // System Progression Sequence Layout (Click to Deploy Lookup)
                        </h2>
                    </div>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {secureSteps.map((node, idx) => (
                            <Link
                                key={`framework-step-${node.step || idx}`}
                                href={String(node.targetHref || "/blog")}
                                className="p-8 border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm rounded-none hover:border-amber-500 transition-all duration-300 group flex flex-col justify-between space-y-6 cursor-pointer"
                            >
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 group-hover:text-amber-500 transition-colors">
                                            STEP_0{node.step}
                                        </span>
                                        <span className="text-[10px] font-mono text-neutral-700 group-hover:text-amber-500 transition-colors">
                                            [DEPLOY_ROUTING &rarr;]
                                        </span>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-base font-bold text-white uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                                            {node.category}
                                        </h3>
                                        <p className="text-sm text-neutral-400 font-light leading-relaxed">
                                            {node.detail}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Cross-System Connection Router Node Links */}
                <footer className="max-w-3xl mx-auto border-t border-neutral-900 pt-16 text-center space-y-6">
                    <p className="text-neutral-700 font-mono text-[10px] uppercase tracking-[0.3em] select-none">
                        Discipline / Fitness / Yoga / Mindset
                    </p>
                </footer>

            </div>
        </div>
    );
}