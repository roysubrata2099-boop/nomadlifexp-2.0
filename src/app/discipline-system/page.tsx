"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DisciplineSystemPage() {
    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-amber-500 selection:text-black overflow-hidden">
            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Technical Matrix Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Content Area Matrix */}
            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">
                {/* Navigation Breadcrumb Node Block */}
                <nav className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6" aria-label="Breadcrumb">
                    <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-400 transition-colors duration-200 group">
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                    <Link href="/knowledge-index" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-400 transition-colors duration-200">
                        Return to Knowledge index
                    </Link>
                </nav>

                {/* Left-Aligned Technical Header Block */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">NomadLifeXP // Somatic Life Architecture</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        The Discipline System:<br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-amber-500 bg-clip-text text-transparent">Habit Engineering for High Output</span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        A rigid framework designed to remove decision fatigue. By automating daily physical and cognitive baselines, attention remains allocated strictly toward intentional, high-leverage execution.
                    </p>
                </header>

                {/* Phase Blocks Layout Wrapper */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" aria-label="System Phases">
                    {/* Phase I */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Phase I // SYS_01</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">Internal Integrity</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Fixing non-negotiable daily baselines to establish morning momentum. Read our analysis on isolating cognitive{" "}
                                <Link href="/mindset" className="text-amber-500 hover:underline font-normal">focus controls and mindset configurations</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Phase II */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Phase II // SYS_02</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">Physical Anchor</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Integrating proactive kinetic sequences straight into neural networks. Review our active{" "}
                                <Link href="/fitness" className="text-amber-500 hover:underline font-normal">metabolic fitness architectures</Link>.
                            </p>
                        </div>
                    </div>

                    {/* Phase III */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Phase III // SYS_03</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">Velocity Output</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Channeling pristine physiological alignment directly into complex technical execution via real-time somatic feedback loops managed by the{" "}
                                <Link href="/recalibration" className="text-amber-500 hover:underline font-normal">recalibration system</Link>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Non-Negotiable Execution Parameters Console Matrix */}
                <section className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                        <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Non-Negotiable Execution Parameters</h2>
                        <div className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                        </div>
                    </div>
                    <div className="space-y-8 divide-y divide-neutral-900 w-full">
                        <div className="group pt-2">
                            <div className="space-y-2 max-w-5xl">
                                <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-300">01 / Digital Deliberation & Attention Protection</h3>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">Zero data ingestion before the morning somatic mobility sequence. High-leverage engineering blocks execute within a strict zero-notification chamber.</p>
                            </div>
                        </div>
                        <div className="group pt-8">
                            <div className="space-y-2 max-w-5xl">
                                <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-300">02 / Structural Anchors & Metabolic Baselines</h3>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">Daily functional thresholds are fixed structural components. Daily conditioning cycles do not negotiate with shifting schedules or environmental friction.</p>
                            </div>
                        </div>
                        <div className="group pt-8">
                            <div className="space-y-2 max-w-5xl">
                                <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-300">03 / Evening Deceleration & Biofeedback Analysis</h3>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">All dynamic displays drop to zero emission bounds by 21:30. Core cognitive performance logs finalize before initializing the neurological recovery window.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
