import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Operational Directive // Mission & Foundation | NomadLifeXP",
    description: "The core philosophy, underlying methodology, and existential directive of the NomadLifeXP platform.",
    alternates: {
        canonical: "https://nomadlifexp.com/about",
    },
    openGraph: {
        title: "Operational Directive // Mission & Core Foundation Blueprint",
        description: "The core philosophy, underlying methodology, and existential directive of the NomadLifeXP platform.",
        url: "https://nomadlifexp.com/about",
        type: "website",
    },
};

export default function AboutPage() {
    // 🛡️ HARDENED STATIC SCHEMA GRAPH MATRIX (TYPE-SAFE & VALIDATED)
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
            },
            {
                "@type": "Person",
                "@id": "https://nomadlifexp.com/about/#subrata-roy",
                "name": "Subrata Roy",
                "jobTitle": "Founder & Creator of NomadLifeXP",
                "worksFor": {
                    "@id": "https://nomadlifexp.com/#organization"
                },
                "image": "https://nomadlifexp.com/images/about/subrata-roy-founder-nomadlifexp.jpg"
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
        <main className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            {/* Ambient Lighting Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" aria-hidden="true" />

            {/* High-Fi Background Mainframe Construction Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden="true" />

            <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Back to Main Directory Navigation Protocol Link */}
                <nav className="mb-12" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                </nav>

                {/* Header Block Section */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            The NomadLifeXP Framework
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        About <br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                            NomadLifeXP
                        </span>
                    </h1>
                    <div className="text-base md:text-lg font-bold leading-relaxed max-w-3xl text-neutral-200 font-mono space-y-1">
                        <p>Founder & Creator of NomadLifeXP</p>
                        <p>Human Evolution System | Evolve in Motion 🏃‍♂️</p>
                        <p>Discipline • Fitness • Yoga • Mindset</p>
                    </div>
                </header>

                {/* Founder Narrative & Portrait Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center border border-neutral-800 bg-neutral-950/40 p-6 md:p-10">
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-none blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" aria-hidden="true" />
                        <div className="relative aspect-[4/5] w-full overflow-hidden border border-neutral-700 bg-black">
                            <Image
                                src="/images/about/subrata-roy-founder-nomadlifexp.jpg"
                                alt="Subrata Roy, Founder and Creator of NomadLifeXP"
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block">
                                    // FOUNDER_ARCHITECT
                                </span>
                                <span className="text-sm font-bold tracking-tight text-white uppercase font-mono">
                                    Subrata Roy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6 font-mono text-xs md:text-sm text-neutral-200 leading-relaxed font-light">
                        <div className="space-y-2 border-l border-cyan-500 pl-4 py-1">
                            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400">
                                // SYSTEM ORIGIN NARRATIVE
                            </h2>
                            <p className="text-neutral-300">
                                Like many people, I spent years chasing motivation, experiencing burnout, and struggling to build habits that lasted. Eventually, I realized motivation fades—but systems endure.
                            </p>
                        </div>
                        <p className="text-neutral-300">
                            Through my own journey of building discipline, training my body, and developing a stronger mindset, I discovered that lasting change comes from systems—not short bursts of motivation.
                        </p>
                        <p className="text-neutral-300">
                            I created NomadLifeXP to help people build lasting transformation through structured habits, physical training, yoga, and personal growth.
                        </p>
                        <div className="p-4 bg-neutral-900 border border-neutral-700 text-amber-400 tracking-wider font-semibold uppercase">
                            Transformation is not about perfection. It is about becoming stronger through consistent action.
                        </div>
                    </div>
                </div>

                {/* System Control Console Block */}
                <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-800 p-6 md:p-8 rounded-none relative">

                    {/* Console Header Status Bar */}
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase font-semibold">
                            EXECUTION_MATRIX_DIAGNOSTICS
                        </span>
                        <div className="flex gap-1.5 items-center" aria-hidden="true">
                            <span className="w-1.5 h-1.5 bg-neutral-600" />
                            <span className="w-1.5 h-1.5 bg-neutral-600" />
                            <span className="w-1.5 h-1.5 bg-amber-400 animate-pulse" />
                        </div>
                    </div>

                    {/* Core Framework Requirements Module */}
                    <div className="grid gap-8 md:grid-cols-2 text-sm font-light leading-relaxed text-neutral-300 font-mono">
                        {/* 1. Foundation */}
                        <div className="space-y-2 border border-neutral-800 bg-neutral-950/50 p-5">
                            <h2 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                01 / FOUNDATION
                            </h2>
                            <p className="text-xs text-neutral-300 leading-relaxed">
                                Built on proven principles from behavioural science, physical training, movement, and mindset development. NomadLifeXP helps people turn intentions into consistent daily habits by creating simple systems that support long-term transformation.
                            </p>
                        </div>

                        {/* 2. Our Mission */}
                        <div className="space-y-2 border border-neutral-800 bg-neutral-950/50 p-5 flex flex-col justify-between">
                            <div className="space-y-2">
                                <h2 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                    02 / OUR MISSION
                                </h2>
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    To help people reduce distractions, rebuild focus, strengthen their bodies, and develop the discipline needed to create a more intentional life.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-neutral-800 mt-2">
                                <Link
                                    href="/start-here"
                                    className="text-[11px] text-amber-400 uppercase tracking-wider font-bold hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                                >
                                    Start Your Journey &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* 3. Our Philosophy */}
                        <div className="space-y-2 border border-neutral-800 bg-neutral-950/50 p-5">
                            <h2 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                03 / OUR PHILOSOPHY
                            </h2>
                            <p className="text-xs text-neutral-300 leading-relaxed">
                                Real transformation does not come from temporary motivation. It comes from building the right systems, creating consistent habits, and taking intentional action every day.
                            </p>
                        </div>

                        {/* 4. Our Approach */}
                        <div className="space-y-2 border border-neutral-800 bg-neutral-950/50 p-5 flex flex-col justify-between">
                            <div className="space-y-2">
                                <h2 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                    04 / OUR APPROACH
                                </h2>
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    Combining strength training, movement practices, breathwork, and mindset development to improve physical capability, mental clarity, and personal growth.
                                </p>
                            </div>
                            <div className="pt-4 border-t border-neutral-800 mt-2">
                                <Link
                                    href="/knowledge-index"
                                    className="text-[11px] text-cyan-400 uppercase tracking-wider font-bold hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                                >
                                    Explore Our Systems &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Environmental Reality Box Pipeline (5. Why NomadLifeXP Exists) */}
                    <div className="w-full max-w-full space-y-2 border border-neutral-800 bg-neutral-950/60 p-6 rounded-none">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-[10px] uppercase tracking-widest text-amber-400 font-mono font-bold">
                                05 / WHY NOMADLIFEXP EXISTS
                            </h2>
                        </div>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-neutral-300 font-mono mb-3">
                            Modern life is designed to compete for your attention. Constant notifications, endless content, and digital distractions make it harder to focus, build habits, and follow through on meaningful goals.
                        </p>
                        <p className="text-xs md:text-sm font-light leading-relaxed text-neutral-300 font-mono">
                            NomadLifeXP exists to help people regain control of their attention, build stronger systems, and create lasting transformation through discipline and consistency.
                        </p>
                    </div>
                </div>

                {/* Core Pillars Mainframes Section */}
                <section className="space-y-8" aria-labelledby="core-pillars-heading">
                    <div className="w-full border-b border-neutral-800 pb-4">
                        <h2 id="core-pillars-heading" className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 font-bold">
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
                                className="border border-neutral-800 bg-neutral-950/40 backdrop-blur-sm p-6 rounded-none flex flex-col justify-between transition-all duration-300 relative overflow-hidden group hover:border-cyan-500 hover:bg-neutral-900/60"
                                style={{ minHeight: "180px" }}
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                                        <span className="text-neutral-400 group-hover:text-cyan-400 transition-colors">
                                            PILLAR_0{idx + 1}
                                        </span>
                                        <span className="text-neutral-400 font-mono font-semibold">
                                            SYS_0{idx + 1}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold tracking-tight uppercase transition-colors duration-200 text-white group-hover:text-cyan-400">
                                        {pillar.name}
                                    </h3>

                                    <p className="text-xs font-light leading-normal text-neutral-300">
                                        {pillar.metric}
                                    </p>
                                </div>

                                <div className="mt-4 w-full text-center py-2 text-[10px] font-mono font-bold uppercase tracking-widest border border-neutral-700 bg-neutral-900/80 text-neutral-200 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-200">
                                    Initialize &rarr;
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Runtime System Status Tracker */}
                <footer className="mt-24 border-t border-neutral-800 pt-16 text-center space-y-3">
                    <p className="text-xs font-mono uppercase tracking-[0.25em] font-black text-amber-400">
                        Evolve in Motion
                    </p>
                    <p className="text-neutral-300 font-mono text-[10px] uppercase tracking-[0.4em] font-semibold">
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
        </main>
    );
}