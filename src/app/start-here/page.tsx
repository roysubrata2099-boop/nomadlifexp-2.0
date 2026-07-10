import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "System Initialization Protocol | NomadLifeXP",
    description: "Initialize the NomadLifeXP personal operating system. Build self-discipline, functional fitness strength, mobility, and razor-sharp focus through structured daily execution protocols.",
    keywords: "daily discipline system, practical fitness habits, core stability training, mental focus framework, behavioral habits engine, functional mobility routines, digital distraction immunity",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://nomadlifexp.com/start-here",
    },
    openGraph: {
        title: "System Initialization Protocol | NomadLifeXP",
        description: "Initialize the NomadLifeXP personal operating system. Build self-discipline, functional fitness strength, mobility, and razor-sharp focus through structured daily execution protocols.",
        url: "https://nomadlifexp.com/start-here",
        type: "website",
        siteName: "NomadLifeXP",
        images: [
            {
                url: "https://nomadlifexp.com/og-main.jpg",
                width: 1200,
                height: 630,
                alt: "NomadLifeXP Human Optimization System Engine Architecture",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "System Initialization Protocol | NomadLifeXP",
        description: "Build self-discipline, functional fitness strength, mobility, and razor-sharp focus through structured daily execution protocols.",
        images: ["https://nomadlifexp.com/og-main.jpg"],
    },
};

interface DeploymentStep {
    id: string;
    systemCode: string;
    title: string;
    description: string;
    route: string;
    linkTitle: string; // Dynamic anchor text target for algorithmic crawling engines
    input: string;
    output: string[];
}

// Optimized framework layout pointing directly to foundational target URLs for clean juice flow
const DEPLOYMENT_STEPS: readonly DeploymentStep[] = [
    {
        id: "STEP_01",
        systemCode: "MODULE_01 // DISCIPLINE ENGINE",
        title: "Discipline",
        description: "Build strong foundational habits that survive when temporary motivation runs out.",
        route: "/blog/building-daily-discipline-habits-framework",
        linkTitle: "Read the foundational guide on building daily discipline protocols",
        input: "Simple, daily non-negotiable tasks",
        output: ["Unshakable consistency", "Elimination of procrastination", "Reliable daily execution"]
    },
    {
        id: "STEP_02",
        systemCode: "MODULE_02 // PHYSICAL OUTPUT ENGINE",
        title: "Fitness",
        description: "Optimize your training, movement patterns, and nutrition for maximum daily physical energy.",
        route: "/blog/functional-fitness-strength-training-routines",
        linkTitle: "Deploy the absolute functional fitness and strength training protocol",
        input: "Structured strength and conditioning training",
        output: ["High physical energy levels", "Better body composition", "Long-term metabolic health"]
    },
    {
        id: "STEP_03",
        systemCode: "MODULE_03 // SOMATIC REGULATION ENGINE",
        title: "Yoga",
        description: "Improve physical mobility, release core tension, and learn to lower stress on command.",
        route: "/blog/functional-yoga-mobility-routines-for-performance",
        linkTitle: "Access the systematic functional yoga mobility routine blueprint",
        input: "Targeted flexibility work and deep breathing control",
        output: ["Fluid physical mobility", "Lower daily stress levels", "Faster nervous system recovery"]
    },
    {
        id: "STEP_04",
        systemCode: "MODULE_04 // COGNITIVE CONTROL ENGINE",
        title: "Mindset",
        description: "Cut through digital distraction, overcome self-doubt, and lock in focus on what matters.",
        route: "/blog/building-mental-focus-digital-distraction-immunity",
        linkTitle: "Initialize the guide on mental focus tracking and digital distraction immunity",
        input: "Daily focus tracking and mental auditing",
        output: ["Immunity to digital distraction", "Clear thinking under pressure", "Decisive action parameters"]
    },
] as const;

export default function StartHerePage() {
    const graphSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://nomadlifexp.com/start-here",
                "url": "https://nomadlifexp.com/start-here",
                "name": "System Initialization Protocol | NomadLifeXP",
                "description": "A practical personal operating system designed to build daily discipline, high physical energy, and mental focus through clear, actionable life protocols.",
                "isPartOf": { "@type": "WebSite", "@id": "https://nomadlifexp.com/#website" },
                "isBasedOn": [
                    "https://en.wikipedia.org/wiki/Behavioral_psychology",
                    "https://en.wikipedia.org/wiki/Habit"
                ]
            },
            {
                "@type": "Organization",
                "@id": "https://nomadlifexp.com/#organization",
                "name": "NomadLifeXP",
                "url": "https://nomadlifexp.com",
                "logo": "https://nomadlifexp.com/favicon.ico"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://nomadlifexp.com/start-here/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "System Home", "item": "https://nomadlifexp.com" },
                    { "@type": "ListItem", "position": 2, "name": "Start Here Sequence", "item": "https://nomadlifexp.com/start-here" }
                ]
            }
        ]
    };

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden motion-reduce:transition-none">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
            />

            {/* Ambient Interface Grids */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none transition-opacity duration-1000 motion-reduce:hidden" aria-hidden="true" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" aria-hidden="true" />

            <main className="max-w-5xl mx-auto px-6 pt-24 md:pt-36 pb-32 relative z-10 animate-[fadeIn_0.5s_ease-out] motion-reduce:animate-none">

                {/* Directory Navigation */}
                <nav className="mb-12 flex flex-wrap items-center gap-4 border-b border-neutral-900/60 pb-6 text-xs font-mono uppercase tracking-widest text-neutral-500" aria-label="System Directory Navigation">
                    <Link href="/" className="hover:text-cyan-400 transition-colors duration-200 group focus:outline-none focus:ring-1 focus:ring-cyan-500 px-1 py-0.5">
                        <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transform-none" aria-hidden="true">&larr;</span> SYSTEM_CORE_HOME
                    </Link>
                    <span className="text-neutral-800" aria-hidden="true">/</span>
                    <Link href="/blog" className="hover:text-cyan-400 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-cyan-500 px-1 py-0.5">
                        RETURN_TO_DIRECTORY
                    </Link>
                </nav>

                {/* Primary Section Layout */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start mb-16">

                    <header className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-[pulse_2s_infinite] motion-reduce:animate-none" aria-hidden="true" />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                                NomadLifeXP // System Setup
                            </p>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
                            Evolve In<br />
                            <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent pb-1 block md:inline">
                                Constant Motion
                            </span>
                        </h1>
                        <div className="space-y-4">
                            <p className="text-base sm:text-lg md:text-xl text-neutral-200 font-normal leading-relaxed tracking-tight border-l-2 border-cyan-500/30 pl-4 py-1">
                                A personal operating system designed to build predictable habits, physical strength, and mental focus through simple, structured daily protocols.
                            </p>
                            <p className="text-xs sm:text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                                True progress isn&apos;t built on temporary emotional motivation. NomadLifeXP takes the guesswork out of self-improvement by replacing erratic choices with non-negotiable micro-routines that automate your growth.
                            </p>
                            <p className="font-mono text-xs text-cyan-400/80 italic tracking-wider pt-1">
                                &ldquo;Evolution requires execution.&rdquo;
                            </p>
                        </div>
                    </header>

                    {/* Matrix Status Readout Block */}
                    <aside className="w-full border border-neutral-800 bg-neutral-950/80 p-6 font-mono text-xs rounded-none backdrop-blur-sm space-y-6 md:animate-[fadeIn_0.7s_ease-out] motion-reduce:animate-none">
                        <div>
                            <p className="text-neutral-600 uppercase tracking-widest text-[10px] mb-2 font-bold">// USER STATUS MATRIX</p>
                            <div className="space-y-1.5 text-neutral-400">
                                <div className="flex justify-between border-b border-neutral-900/60 pb-1">
                                    <span>PROFILE:</span>
                                    <span className="text-white font-bold">NOMAD</span>
                                </div>
                                <div className="flex justify-between border-b border-neutral-900/60 pb-1">
                                    <span>SYSTEM:</span>
                                    <span className="text-emerald-400 font-bold tracking-widest animate-pulse motion-reduce:animate-none">ONLINE</span>
                                </div>
                                <div className="flex justify-between border-b border-neutral-900/60 pb-1">
                                    <span>CORE STABILITY:</span>
                                    <span className="text-neutral-200 font-bold">100%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>MODULES ONLINE:</span>
                                    <span className="text-cyan-400 font-bold">4/4 MODULES</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-neutral-600 uppercase tracking-widest text-[10px] mb-2 font-bold">// PROGRESSION LOG</p>
                            <div className="space-y-1 text-[11px] text-neutral-500">
                                <div className="flex items-center gap-2"><span className="text-neutral-700">[01]</span> Discipline</div>
                                <div className="flex items-center gap-2"><span className="text-neutral-700">[02]</span> Fitness</div>
                                <div className="flex items-center gap-2"><span className="text-neutral-700">[03]</span> Yoga</div>
                                <div className="flex items-center gap-2"><span className="text-neutral-700">[04]</span> Mindset</div>
                            </div>
                            <div className="mt-3 pt-2 border-t border-neutral-900 flex justify-between text-[10px] uppercase font-bold text-cyan-500/90 tracking-wider">
                                <span>CURRENT STATUS:</span>
                                <span>0/4 INITIALIZED</span>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Diagnostic Trace Line */}
                <section className="border border-neutral-900 bg-neutral-950/40 p-4 sm:p-5 font-mono text-xs text-neutral-500 flex flex-wrap gap-x-6 gap-y-2 mb-16 rounded-none backdrop-blur-sm" aria-label="System Diagnostics Output">
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span> INITIALIZE_SYSTEM_SUCCESS
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span> CORE_OPERATIONAL_PARAMETERS_LOADED
                    </div>
                    <div className="flex items-center gap-2 sm:ml-auto text-neutral-600 text-[10px]">
                        <span>SYSTEM CLOCK: 21:23:20 UTC</span>
                    </div>
                </section>

                {/* Origin Narrative Layer */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 border-t border-b border-neutral-900/60 py-12">
                    <section className="space-y-4" aria-labelledby="origin-heading">
                        <div className="space-y-1">
                            <p className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">// Why This Was Built</p>
                            <h2 id="origin-heading" className="text-xs font-bold uppercase tracking-widest text-white">System Origin</h2>
                        </div>
                        <div className="text-neutral-400 text-sm md:text-base leading-relaxed font-light space-y-3">
                            <p>
                                Created from the reality that useful information on fitness and mental focus is everywhere, but actual, daily execution is rare.
                            </p>
                            <p className="font-normal text-neutral-300">
                                NomadLifeXP cuts through the overwhelming wellness noise to give you direct, no-nonsense frameworks that change how you look, move, and think.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4" aria-labelledby="validation-heading">
                        <div className="space-y-1">
                            <p className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">// Core Framework Pillars</p>
                            <h2 id="validation-heading" className="text-xs font-bold uppercase tracking-widest text-white">System Foundation</h2>
                        </div>
                        <ul className="grid grid-cols-1 gap-2 font-mono text-xs text-neutral-400">
                            <li className="flex items-center gap-3 border border-neutral-900 bg-neutral-950/40 p-3">
                                <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span> Clear, actionable physical training advice
                            </li>
                            <li className="flex items-center gap-3 border border-neutral-900 bg-neutral-950/40 p-3">
                                <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span> Habits engineered for simple, consistent repetition
                            </li>
                            <li className="flex items-center gap-3 border border-neutral-900 bg-neutral-950/40 p-3">
                                <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span> Practical mindsets built for intense daily focus
                            </li>
                            <li className="flex items-center gap-3 border border-neutral-900 bg-neutral-950/40 p-3">
                                <span className="text-cyan-400 font-bold" aria-hidden="true">✓</span> Zero guesswork, zero tracking over-complexity
                            </li>
                        </ul>
                    </section>
                </div>

                {/* Progress Tracking Cards */}
                <section className="space-y-6 mb-20" aria-label="System Framework Progression Tracks">
                    <header className="border-b border-neutral-900 pb-3">
                        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                            // Select a module path to initialize deployment
                        </p>
                    </header>

                    <div className="grid grid-cols-1 gap-4">
                        {DEPLOYMENT_STEPS.map((step) => (
                            <Link
                                key={step.id}
                                href={step.route}
                                title={step.linkTitle}
                                className="group block border border-neutral-900 p-6 md:p-8 hover:border-cyan-500/40 hover:bg-neutral-950/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.02)] transition-all duration-300 relative bg-neutral-950/20 rounded-none focus:outline-none focus:ring-1 focus:ring-cyan-500 motion-reduce:transition-none"
                            >
                                <div className="grid md:grid-cols-12 gap-6 items-start">

                                    <div className="md:col-span-5 space-y-3">
                                        <div className="space-y-1">
                                            <p className="font-mono text-[9px] text-neutral-600 group-hover:text-cyan-500/60 transition-colors duration-200">
                                                {step.systemCode}
                                            </p>
                                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-neutral-900 pt-4 md:pt-0 md:pl-6 space-y-2 font-mono text-[11px]">
                                        <div className="text-neutral-600 uppercase tracking-wider text-[9px]">// EXPECTED RUNTIME LOGS</div>
                                        <div>
                                            <span className="text-neutral-500 font-bold">DAILY INPUT:</span> <span className="text-neutral-300 font-light">{step.input}</span>
                                        </div>
                                        <div className="space-y-0.5">
                                            <span className="text-neutral-500 font-bold block">TARGET OUTCOME:</span>
                                            {step.output.map((out, idx) => (
                                                <span key={idx} className="block text-neutral-400 pl-2 font-light">
                                                    + {out}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 text-left md:text-right flex md:flex-col justify-between items-start md:items-end h-full pt-2 md:pt-0">
                                        <span className="font-mono text-[9px] text-emerald-400/90 bg-emerald-950/20 border border-emerald-900/50 px-2 py-0.5 uppercase tracking-widest font-bold">
                                            READY
                                        </span>
                                        <span className="hidden md:inline font-mono text-[10px] uppercase tracking-wider text-neutral-600 group-hover:text-cyan-400 transition-colors duration-200">
                                            OPEN MODULE <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                                        </span>
                                    </div>

                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Final Execution CTA */}
                <section className="border border-neutral-900 bg-neutral-950/80 p-8 md:p-12 text-center space-y-6 relative rounded-none backdrop-blur-sm overflow-hidden" aria-label="Active System Trigger Deployment">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" aria-hidden="true" />
                    <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 font-bold">SYSTEM READY</p>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">BEGIN YOUR FIRST PROTOCOL</h2>
                    </div>
                    <p className="max-w-xl mx-auto text-sm text-neutral-400 font-light">
                        Real change is built on immediate, decisive execution. Eliminate choices and deploy Module 01 to start building your baseline habits today.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/blog/building-daily-discipline-habits-framework"
                            title="Deploy your first discipline module entry step"
                            className="inline-block border border-cyan-500/50 bg-cyan-950/20 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] font-mono text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-none font-bold"
                        >
                            [ DEPLOY DISCIPLINE MODULE &rarr; ]
                        </Link>
                    </div>
                </section>

            </main>
        </div>
    );
}