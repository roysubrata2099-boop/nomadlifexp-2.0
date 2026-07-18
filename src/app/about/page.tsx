// src/app/about/page.tsx

import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Operational Directive // Mission & Foundation",
    description: "The core philosophy, underlying methodology, and existential directive of the NomadLifeXP platform.",
    alternates: {
        canonical: "https://nomadlifexp.com/about",
    }
};

export default function AboutPage() {
    // 🛡️ HARDENED STATIC SCHEMA GRAPH MATRIX
    const aboutSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://nomadlifexp.com/about/#webpage",
                "url": "https://nomadlifexp.com/about",
                "name": "About NomadLifeXP // Mission & Philosophy",
                "isPartOf": { "@id": "https://nomadlifexp.com/#website" },
                "description": "The mission, operational philosophy, human optimization methodology, and foundational origin of NomadLifeXP."
            }
        ]
    };

    // Safe stringification layer to guarantee zero hydration anomalies or DOM element mismatches
    let serializedAboutSchema = "";
    try {
        serializedAboutSchema = JSON.stringify(aboutSchema);
    } catch (e) {
        console.error("About page schema exception bypassed safely:", e);
    }

    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Ambient Lighting Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* High-Fi Background Mainframe Construction Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Back to Main Directory Navigation Protocol Link */}
                <div className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                </div>

                {/* Header Block Section */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            System Manifest // Blueprint
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        About <br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                            NomadLifeXP
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        An integrated behavioral development architecture engineered to substitute fragile emotional motivation with absolute structural design.
                    </p>
                </header>

                {/* System Control Console Block */}
                <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">

                    {/* Console Header Status Bar */}
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                            EXECUTION_MATRIX_DIAGNOSTICS
                        </span>
                        <div className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                        </div>
                    </div>

                    {/* Core Framework Requirements Module */}
                    <div className="grid gap-8 md:grid-cols-2 text-sm font-light leading-relaxed text-neutral-400 font-mono">
                        {/* 1. Founder Assembly */}
                        <div className="space-y-2 border border-neutral-900 bg-neutral-950/20 p-5">
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                // 01 / FOUNDER ASSEMBLY
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Architected by a collective of technical optimization analysts, system engineers, and somatic practitioners. We specialize in isolating behavioral drift and converting fragmented biological intent into predictable algorithmic habits.
                            </p>
                        </div>

                        {/* 2. System Mission */}
                        <div className="space-y-2 border border-neutral-900 bg-neutral-950/20 p-5">
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                // 02 / SYSTEM MISSION
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                To engineer an open-source framework that strips out cognitive noise and reclaims deep focus, physical capacity, and self-directed sovereignty for high-performance individuals.
                            </p>
                        </div>

                        {/* 3. Operational Philosophy */}
                        <div className="space-y-2 border border-neutral-900 bg-neutral-950/20 p-5">
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                // 03 / OPERATIONAL PHILOSOPHY
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Human expansion follows architecture, not emotion. Intentional constraint, systematic daily parameters, and structural baseline habits will consistently outexecute unguided creative motivation over long-term timelines.
                            </p>
                        </div>

                        {/* 4. Biological Methodology */}
                        <div className="space-y-2 border border-neutral-900 bg-neutral-950/20 p-5">
                            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                // 04 / BIOLOGICAL METHODOLOGY
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                Integrating physiological resistance training, neuromuscular coordination, breath-driven focus control, and targeted mental frameworks to lower systematic friction and accelerate cognitive output.
                            </p>
                        </div>
                    </div>

                    {/* Environmental Reality Box Pipeline (5. Why This Exists) */}
                    <div className="w-full max-w-full space-y-2 border border-neutral-800 bg-neutral-950/40 p-6 rounded-none">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-[10px] uppercase tracking-widest text-amber-500 font-mono block">
                                // 05 / ENVIRONMENTAL REALITY // WHY THIS SYSTEM EXISTS
                            </label>
                        </div>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-neutral-400 font-mono">
                            Modern digital products are explicitly optimized to capture and monetize your attention. Hyper-stimulating data networks and algorithmic feeds create widespread cognitive fragmentation and voluntary exhaustion. NomadLifeXP acts as an operating framework designed to protect your attention budget and preserve execution capacity using reliable systems instead of unreliable willpower.
                        </p>
                    </div>
                </div>

                {/* Core Pillars Mainframes Section */}
                <section className="space-y-8">
                    <div className="w-full border-b border-neutral-900 pb-4">
                        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 font-bold">
                            The Core Pillars
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: "Discipline", slug: "/discipline", metric: "Consistency Under Acute Friction" },
                            { name: "Fitness", slug: "/fitness", metric: "Mitochondrial Energy & Somatic Control" },
                            { name: "Yoga", slug: "/yoga", metric: "Attention Control via Controlled Respiration" },
                            { name: "Mindset", slug: "/mindset", metric: "Cognitive Parsing Optimization & Clarity" }
                        ].map((pillar, idx) => (
                            <Link
                                key={idx}
                                href={pillar.slug}
                                className="border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm p-6 rounded-none flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:border-cyan-500"
                                style={{ minHeight: "180px" }}
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                                        <span className="text-neutral-600 group-hover:text-cyan-400 transition-colors">
                                            PILLAR_0{idx + 1}
                                        </span>
                                        <span className="text-neutral-700 font-normal">
                                            SYS_0{idx + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold tracking-tight uppercase transition-colors duration-200 text-white group-hover:text-cyan-400">
                                        {pillar.name}
                                    </h3>

                                    <p className="text-xs font-light leading-normal text-neutral-400">
                                        {pillar.metric}
                                    </p>
                                </div>

                                <div className="mt-4 w-full text-center py-2 text-[10px] font-mono font-bold uppercase tracking-widest border border-neutral-800 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-200">
                                    Initialize &rarr;
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Runtime System Status Tracker */}
                <footer className="mt-24 border-t border-neutral-900 pt-16 text-center space-y-3">
                    <h4 className="text-[10px] font-mono uppercase tracking-[0.25em] font-black text-amber-500">
                        Evolve in Motion
                    </h4>
                    <p className="text-neutral-600 font-mono text-[9px] uppercase tracking-[0.4em]">
                        Discipline // Fitness // Yoga // Mindset
                    </p>
                </footer>
            </div>

            {/* 🛡️ SECURITY SCHEMA BLOCK INGESTION MATRIX */}
            {serializedAboutSchema && (
                <script
                    id="schema-about-page"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: serializedAboutSchema }}
                />
            )}
        </div>
    );
}