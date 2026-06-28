// src/app/discipline/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Somatic Habit Engineering & Discipline System | NomadLifeXP",
    description: "Eliminate decision fatigue through strict systemic execution. Deconstruct cognitive biases and establish non-negotiable physical and structural baselines.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline",
    },
    openGraph: {
        title: "Somatic Habit Engineering & Discipline System | NomadLifeXP",
        description: "Eliminate decision fatigue through strict systemic execution.",
        url: "https://nomadlifexp.com/discipline",
        type: "website",
    },
};

export default function DisciplinePage() {
    const coreProtocols = [
        {
            rule: "01 / Digital Deliberation & Attention Protection",
            desc: "Zero data ingestion before the morning somatic mobility sequence. High-leverage engineering blocks execute within a strict zero-notification chamber.",
            targetHref: "/mindset"
        },
        {
            rule: "02 / Structural Anchors & Metabolic Baselines",
            desc: "Daily functional thresholds are fixed structural components. Daily conditioning cycles do not negotiate with shifting schedules or environmental friction.",
            targetHref: "/fitness"
        },
        {
            rule: "03 / Evening Deceleration & Biofeedback Analysis",
            desc: "All dynamic displays drop to zero emission bounds by 21:30. Core cognitive performance logs finalize before initializing the neurological recovery window.",
            targetHref: "/yoga"
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Somatic Habit Engineering & Discipline System",
        "description": "A minimalist operational architecture built to replace emotional choice with strict physical structures.",
        "publisher": {
            "@type": "Organization",
            "name": "NomadLifeXP",
            "url": "https://nomadlifexp.com"
        }
    };

    return (
        <>
            {/* Structured Schema Validation Layer */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Mainframe Canvas */}
            <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">

                {/* Ambient Lighting Accents */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

                {/* Mainframe Technical Matrix Grid Background Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Content Area Matrix */}
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                    {/* Navigation Breadcrumb Node Block */}
                    <div className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
                            RETURN_TO_HOME
                        </Link>
                        <span className="text-neutral-800 font-mono text-xs">/</span>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-cyan-400 transition-colors duration-200 group"
                        >
                            RETURN_TO_DIRECTORY
                        </Link>
                    </div>

                    {/* Left-Aligned Technical Header Block */}
                    <header className="mb-16 max-w-5xl space-y-5">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">
                                NomadLifeXP // Somatic Life Architecture
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                            The Discipline System:<br />
                            <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                                Habit Engineering for High Output
                            </span>
                        </h1>
                        <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                            A rigid framework designed to remove decision fatigue. By automating daily physical and cognitive baselines, attention remains allocated strictly toward intentional, high-leverage execution.
                        </p>
                    </header>

                    {/* Three-Column System Grid Matrix Layout */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
                        {[
                            {
                                phase: "Phase I",
                                title: "Internal Integrity",
                                href: "/mindset",
                                label: "cognitive focus controls.",
                                body: "Fixing non-negotiable daily baselines to establish morning momentum. Read our analysis on isolating "
                            },
                            {
                                phase: "Phase II",
                                title: "Physical Anchor",
                                href: "/fitness",
                                label: "metabolic training configurations.",
                                body: "Integrating proactive kinetic sequences straight into neural networks. Review our active "
                            },
                            {
                                phase: "Phase III",
                                title: "Velocity Output",
                                href: "/yoga",
                                label: "somatic feedback loops.",
                                body: "Channeling pristine physiological alignment directly into complex technical execution via real-time "
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="border border-neutral-900 bg-neutral-950/20 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/30 rounded-none group"
                            >
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-xs font-mono font-bold uppercase tracking-widest">
                                        <span className="text-amber-500">{item.phase}</span>
                                        <span className="text-neutral-600">SYS_0{idx + 1}</span>
                                    </div>
                                    <h2 className="text-white text-lg font-bold uppercase tracking-tight transition-colors duration-200 group-hover:text-amber-500">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm font-light leading-relaxed text-neutral-400">
                                        {item.body}
                                        <Link href={item.href} className="text-cyan-400 underline underline-offset-4 hover:text-cyan-300 transition-colors inline font-normal">
                                            {item.label}
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Non-Negotiable Parameter Terminal Block Console */}
                    <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">

                        {/* Status Bar Section Header */}
                        <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Non-Negotiable Execution Parameters</span>
                            <div className="flex gap-1.5 items-center">
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-neutral-800" />
                                <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                            </div>
                        </div>

                        {/* Core Protocols Grid Matrix */}
                        <div className="space-y-8 divide-y divide-neutral-900 w-full">
                            {coreProtocols.map((protocol, index) => (
                                <div key={protocol.rule} className={`flex flex-col md:flex-row md:items-start md:justify-between gap-4 group ${index !== 0 ? 'pt-8' : ''}`}>
                                    <div className="space-y-2 max-w-2xl">
                                        <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
                                            {protocol.rule}
                                        </h3>
                                        <p className="text-sm font-light leading-relaxed text-neutral-400">
                                            {protocol.desc}
                                        </p>
                                    </div>
                                    <div className="pt-1 shrink-0">
                                        <Link
                                            href={protocol.targetHref}
                                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                                        >
                                            View Architecture Node
                                            <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform duration-200" aria-hidden="true">↗</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Terminal Split Actions Matrix Area */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">

                        {/* Conversion Element Panel Box (Spans 2 Columns) */}
                        <div className="md:col-span-2 border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between space-y-6">
                            <div className="space-y-3">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-amber-500 block">Collective Synchronization</span>
                                <h2 className="text-xl text-white font-black tracking-tight uppercase">Sync With the Execution Network</h2>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    We compile raw biometric structures, workflow optimization scripts, and somatic baseline reviews into periodic tactical logs. Join an elite pool of operators executing around the globe.
                                </p>
                            </div>
                            <div className="max-w-xs w-full pt-2">
                                <Link
                                    href="https://youtube.com/@nomadlifexp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full border border-neutral-800 bg-white text-black text-xs font-mono font-bold uppercase tracking-widest py-4 hover:bg-neutral-200 transition-all duration-200 text-center"
                                >
                                    Join the Execution Channel
                                </Link>
                            </div>
                        </div>

                        {/* Complete Data Directory Navigation Router Card (Spans 1 Column) */}
                        <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between group hover:border-cyan-500/30 transition-all duration-300">
                            <div className="space-y-3">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 block">System_Archives</span>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    Review detailed case studies on our complete database.
                                </p>
                            </div>
                            <Link
                                href="/blog"
                                className="w-full text-center py-3.5 text-xs font-mono font-bold uppercase tracking-widest border border-neutral-800 text-white group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-500 transition-all duration-200"
                            >
                                Read System Logs &rarr;
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}