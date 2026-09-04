import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Operational Directive // Mission & Foundation",
    description: "The core philosophy, underlying methodology, and existential directive of the NomadLifeXP platform.",
    alternates: {
        canonical: "https://www.nomadlifexp.com/about",
    },
    openGraph: {
        title: "Operational Directive // Mission & Core Foundation Blueprint",
        description: "The core philosophy, underlying methodology, and existential directive of the NomadLifeXP platform.",
        url: "https://www.nomadlifexp.com/about",
        type: "website",
    },
};

export default function AboutPage() {
    // ??? HARDENED STATIC SCHEMA GRAPH MATRIX (TYPE-SAFE & VALIDATED)
    const aboutSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.nomadlifexp.com/about/#webpage",
                "url": "https://www.nomadlifexp.com/about",
                "name": "About NomadLifeXP // Mission & Philosophy",
                "isPartOf": { "@id": "https://www.nomadlifexp.com/#website" },
                "description": "The mission, operational philosophy, human optimization methodology, and foundational origin of NomadLifeXP."
            },
            {
                "@type": "Person",
                "@id": "https://www.nomadlifexp.com/about/#subrata-roy",
                "name": "Subrata Roy",
                "jobTitle": "Founder & Creator of NomadLifeXP",
                "worksFor": {
                    "@id": "https://www.nomadlifexp.com/#organization"
                },
                "image": "https://www.nomadlifexp.com/images/about/subrata-roy-founder-nomadlifexp.jpg"
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
                {/* Navigation */}
                <nav
                    className="mb-12 flex flex-col gap-3"
                    aria-label="Page navigation"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.3em] text-white hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                            aria-hidden="true"
                        >
                            ←
                        </span>
                        <span>NOMADLIFEXP</span>
                    </Link>

                    <ol className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em]">
                        <li>
                            <Link
                                href="/"
                                className="text-white hover:text-cyan-400 transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>

                        <li aria-hidden="true" className="text-neutral-500">
                            /
                        </li>

                        <li className="text-cyan-400" aria-current="page">
                            About
                        </li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                            The Human Evolution System
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        Become Stronger. <br />
                        Build Discipline. <br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                            Evolve Every Day.
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-normal leading-relaxed max-w-3xl text-neutral-300 font-mono">
                        NomadLifeXP is a human evolution framework designed to help you rebuild your discipline, strengthen your body, sharpen your mind, and create lasting transformation through structured daily systems.
                    </p>
                    <div className="pt-2">
                        <div className="p-4 bg-neutral-900 border border-neutral-800 font-mono text-xs text-amber-400 uppercase tracking-widest inline-block">
                            Motivation fades. <br />
                            <strong className="text-white">Systems endure.</strong>
                        </div>
                    </div>
                    <div className="pt-4">
                        <Link
                            href="/start-here"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors duration-200"
                        >
                            Start Your Evolution &rarr;
                        </Link>
                    </div>
                    <div className="text-xs font-mono text-neutral-400 pt-2 flex flex-wrap gap-3">
                        <span>Evolve in Motion</span>
                        <span>&bull;</span>
                        <span>Discipline &bull; Fitness &bull; Yoga &bull; Mindset</span>
                    </div>
                </header>

                {/* Founder Origin Portrait & Identity Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 items-center border border-neutral-800 bg-neutral-950/40 p-6 md:p-10">
                    <div className="lg:col-span-5 relative group mx-auto w-full max-w-md lg:max-w-none">
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
                                    // SYSTEM ARCHITECT // NOMADLIFEXP
                                </span>
                                <span className="text-sm font-bold tracking-tight text-white uppercase font-mono">
                                    Subrata Roy
                                </span>
                                <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-mono">
                                    Founder & Creator
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4 font-mono text-xs md:text-sm text-neutral-300 leading-relaxed">
                        <div className="border-l-2 border-cyan-500 pl-4 py-1">
                            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400 mb-1">
                                // FOUNDER ORIGIN
                            </h2>
                            <p className="text-white font-bold text-base md:text-lg">
                                Founder & Creator &mdash; Subrata Roy
                            </p>
                        </div>
                        <p>
                            Before NomadLifeXP existed, I walked the exact same path of trial, error, and friction that you might be experiencing right now.
                        </p>
                        <p>
                            I built this platform not as a theoretical concept, but as a direct extraction of what it takes to break through personal limitations, eliminate destructive comfort, and anchor true discipline into daily life.
                        </p>
                    </div>
                </div>

                {/* Standalone Upgraded Founder Origin Narrative Section */}
                <section className="mb-16 border border-neutral-800 bg-neutral-950/60 p-6 md:p-12 font-mono space-y-8" aria-labelledby="founder-origin-heading">
                    <div className="border-b border-neutral-800 pb-4">
                        <h2 id="founder-origin-heading" className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-bold">
                            // THE JOURNEY BEHIND THE SYSTEM
                        </h2>
                    </div>

                    <div className="space-y-6 text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                        <p className="text-white font-normal">
                            Before NomadLifeXP existed, I was searching for the same answers many people search for:
                        </p>

                        <div className="pl-4 border-l border-neutral-700 space-y-1 text-neutral-200">
                            <p>&bull; How do I become more consistent?</p>
                            <p>&bull; How do I build discipline?</p>
                            <p>&bull; How do I create lasting change?</p>
                        </div>

                        <p>
                            I had goals. I had ambition. I wanted to improve. But I discovered that wanting transformation and creating transformation were two completely different things.
                        </p>

                        <p>
                            Like many people, I experienced the cycle of starting strong, building momentum, feeling motivated, and then losing consistency when life became difficult.
                        </p>

                        <div className="pl-4 border-l border-neutral-700 space-y-1 text-neutral-200">
                                    <p>&bull; I would set goals.</p>
                                    <p>&bull; I would create plans.</p>
                                    <p>&bull; I would commit to change.</p>
                        </div>

                        <p>
                            But without the right system, progress was temporary.
                        </p>

                        <p className="text-white font-semibold pt-2">
                            Eventually, I realized something important:
                        </p>

                        <div className="p-4 bg-black border border-neutral-800 space-y-1 text-amber-400">
                            <p>The problem was never a lack of desire.</p>
                            <p>The problem was relying on motivation as the foundation for growth.</p>
                        </div>

                        <p>
                            Motivation is powerful, but it is unpredictable. It appears when conditions are perfect and disappears when challenges arrive. Real transformation requires something stronger. It requires systems.
                        </p>

                        <div className="border-t border-neutral-800 pt-6 space-y-4">
                            <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                                THE TURNING POINT
                            </h3>
                            <p>
                                I began studying and applying the principles of discipline, physical training, yoga, and mindset development. Through this process, I discovered that lasting growth is not created through extreme short-term efforts.
                            </p>
                            <p>
                                It is created through small actions repeated consistently:
                            </p>
                            <div className="pl-4 border-l border-neutral-700 space-y-1 text-neutral-200">
                                <p>&bull; The workouts you complete.</p>
                                <p>&bull; The habits you maintain.</p>
                                <p>&bull; The decisions you make when nobody is watching.</p>
                            </div>
                            <p>
                                These moments shape your identity. They determine the person you become.
                            </p>
                        </div>

                        <div className="border-t border-neutral-800 pt-6 space-y-4">
                            <p>
                                That realization became the foundation of NomadLifeXP. Not another temporary motivation program. Not another promise of instant transformation. But a structured human evolution framework designed to help people rebuild discipline, strengthen their bodies, develop mental clarity, and create a life built on intentional action.
                            </p>
                            <div className="p-4 bg-neutral-900 border border-neutral-700 text-white font-bold uppercase tracking-wider space-y-2">
                                <p className="text-cyan-400 text-[11px]">// CORE PLATFORM DIRECTIVE</p>
                                <p>You do not become stronger by waiting for change.</p>
                                <p className="text-amber-400">You become stronger by building the systems that create change.</p>
                            </div>
                            <p className="text-neutral-300">
                                My mission is to help people evolve beyond their current limitations and become stronger versions of themselves — one disciplined action at a time.
                            </p>
                            <div className="pt-2 font-bold text-amber-400 tracking-wider">
                                <p>Motivation fades.</p>
                                <p className="text-white">Systems endure.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Environmental Reality Box Pipeline (The Purpose / Why NomadLifeXP Exists) */}
                <div className="flex flex-col gap-8 mb-16 bg-black border border-neutral-800 p-6 md:p-8 rounded-none relative">
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                        <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                            01 / THE PURPOSE // WHY NOMADLIFEXP EXISTS
                        </span>
                        <div className="flex gap-1.5 items-center" aria-hidden="true">
                            <span className="w-1.5 h-1.5 bg-neutral-600" />
                            <span className="w-1.5 h-1.5 bg-neutral-600" />
                            <span className="w-1.5 h-1.5 bg-amber-400 animate-pulse" />
                        </div>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 text-sm font-light leading-relaxed text-neutral-300 font-mono">
                        <div className="space-y-4 border border-neutral-800 bg-neutral-950/50 p-5">
                            <h2 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                Modern Distractions
                            </h2>
                            <p className="text-xs text-neutral-300 leading-relaxed">
                                Modern life is designed to steal your attention. Endless notifications. Constant distractions. Instant gratification. People are becoming disconnected from their bodies, their goals, and their potential.
                            </p>
                            <p className="text-xs text-neutral-300 leading-relaxed">
                                NomadLifeXP exists to reverse that.
                            </p>
                        </div>

                        <div className="space-y-4 border border-neutral-800 bg-neutral-950/50 p-5 flex flex-col justify-between">
                            <div className="space-y-3">
                                <h2 className="text-xs font-bold text-white uppercase tracking-wider text-cyan-400">
                                    Core Objectives
                                </h2>
                                <ul className="text-xs text-neutral-300 space-y-2">
                                    <li className="flex items-center gap-2">&#10003; Rebuild discipline</li>
                                    <li className="flex items-center gap-2">&#10003; Strengthen the body</li>
                                    <li className="flex items-center gap-2">&#10003; Improve mental clarity</li>
                                    <li className="flex items-center gap-2">&#10003; Develop control over your actions</li>
                                    <li className="flex items-center gap-2">&#10003; Create meaningful daily habits</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-neutral-800 mt-2">
                                <p className="text-[11px] text-amber-400 uppercase tracking-wider font-bold">
                                    This is not a quick fix. This is a lifelong evolution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Belief Section */}
                <div className="mb-16 border border-neutral-800 bg-neutral-950/30 p-8 text-center space-y-4 font-mono">
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 font-bold block">
                        // THE CORE BELIEF
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                        Transformation Is Built, Not Found
                    </h2>
                    <p className="text-xs md:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        You do not transform because you feel motivated. You transform because you build systems that support growth. Every workout. Every breath. Every decision. Every disciplined action creates the person you become.
                    </p>
                </div>

                {/* Core Pillars Mainframes Section */}
                <section className="space-y-8 mb-16" aria-labelledby="core-pillars-heading">
                    <div className="w-full border-b border-neutral-800 pb-4">
                        <h2 id="core-pillars-heading" className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 font-bold">
                            The NomadLifeXP Framework // Four Evolution Systems
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* System 01 */}
                        <div className="border border-neutral-800 bg-neutral-950/40 p-6 flex flex-col justify-between space-y-4 font-mono">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-400">
                                    <span className="text-cyan-400">SYSTEM 01 / DISCIPLINE</span>
                                    <span>FOUNDATION</span>
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                                    The Foundation Of Growth
                                </h3>
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    Discipline is the ability to act regardless of temporary emotions. It is the skill of keeping promises to yourself. Through structured habits and intentional routines, you develop consistency, self-control, focus, and personal responsibility.
                                </p>
                                <div className="text-xs text-neutral-400 pt-2">
                                    <strong className="text-white block uppercase mb-1">Evolution Outcome:</strong>
                                    Become someone who follows through.
                                </div>
                            </div>
                            <div className="pt-4 border-t border-neutral-800">
                                <Link
                                    href="/discipline"
                                    className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                                >
                                    Initialize Discipline &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* System 02 */}
                        <div className="border border-neutral-800 bg-neutral-950/40 p-6 flex flex-col justify-between space-y-4 font-mono">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-400">
                                    <span className="text-cyan-400">SYSTEM 02 / FITNESS</span>
                                    <span>PHYSICAL</span>
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                                    Build Your Physical Foundation
                                </h3>
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    Your body is the vehicle through which you experience life. Fitness develops strength, energy, mobility, endurance, and confidence. Training is not only about appearance. It is about becoming capable.
                                </p>
                                <div className="text-xs text-neutral-400 pt-2">
                                    <strong className="text-white block uppercase mb-1">Evolution Outcome:</strong>
                                    Build a stronger body and stronger life.
                                </div>
                            </div>
                            <div className="pt-4 border-t border-neutral-800">
                                <Link
                                    href="/fitness"
                                    className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                                >
                                    Initialize Fitness &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* System 03 */}
                        <div className="border border-neutral-800 bg-neutral-950/40 p-6 flex flex-col justify-between space-y-4 font-mono">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-400">
                                    <span className="text-cyan-400">SYSTEM 03 / YOGA</span>
                                    <span>RESPIRATION</span>
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                                    Control Breath. Control Awareness.
                                </h3>
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    Yoga connects movement, breathing, and consciousness. It develops mobility, balance, recovery, mental calm, and body awareness. The ability to control your breath is the ability to influence your state.
                                </p>
                                <div className="text-xs text-neutral-400 pt-2">
                                    <strong className="text-white block uppercase mb-1">Evolution Outcome:</strong>
                                    Develop control over your body and mind.
                                </div>
                            </div>
                            <div className="pt-4 border-t border-neutral-800">
                                <Link
                                    href="/yoga"
                                    className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                                >
                                    Initialize Yoga &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* System 04 */}
                        <div className="border border-neutral-800 bg-neutral-950/40 p-6 flex flex-col justify-between space-y-4 font-mono">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-400">
                                    <span className="text-cyan-400">SYSTEM 04 / MINDSET</span>
                                    <span>COGNITIVE</span>
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                                    Upgrade Your Internal Operating System
                                </h3>
                                <p className="text-xs text-neutral-300 leading-relaxed">
                                    Your thoughts influence your actions. Your actions shape your identity. Mindset development creates mental clarity, emotional resilience, better decision-making, and stronger self-belief.
                                </p>
                                <div className="text-xs text-neutral-400 pt-2">
                                    <strong className="text-white block uppercase mb-1">Evolution Outcome:</strong>
                                    Think clearly. Act intentionally.
                                </div>
                            </div>
                            <div className="pt-4 border-t border-neutral-800">
                                <Link
                                    href="/mindset"
                                    className="text-[11px] text-cyan-400 uppercase tracking-widest font-bold hover:text-white transition-colors duration-200 inline-flex items-center gap-1"
                                >
                                    Initialize Mindset &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principle Section */}
                <div className="mb-16 border-l-2 border-amber-400 pl-6 py-2 font-mono space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold block">
                        // THE NOMADLIFEXP PRINCIPLE
                    </span>
                    <h2 className="text-xl font-bold uppercase tracking-tight text-white">
                        Become The Person You Train Yourself To Be
                    </h2>
                    <p className="text-xs text-neutral-300 leading-relaxed max-w-3xl">
                        Your future is not created by one big decision. It is created by thousands of small choices repeated consistently. The person you become is built through your habits, your discipline, and your actions.
                    </p>
                </div>

                {/* Evolution Path Matrix */}
                <div className="mb-16 border border-neutral-800 bg-neutral-950/40 p-6 md:p-8 font-mono">
                    <div className="border-b border-neutral-800 pb-4 mb-6">
                        <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold block">
                            THE EVOLUTION PATH
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
                        <div className="border border-neutral-800 bg-black p-4 space-y-2">
                            <span className="text-neutral-500 font-bold">STAGE 01</span>
                            <h3 className="text-white font-bold uppercase">Awareness</h3>
                            <p className="text-neutral-400 text-[11px]">Recognize where you are. Understand your current habits, patterns, and limitations.</p>
                        </div>
                        <div className="border border-neutral-800 bg-black p-4 space-y-2">
                            <span className="text-neutral-500 font-bold">STAGE 02</span>
                            <h3 className="text-white font-bold uppercase">Discipline</h3>
                            <p className="text-neutral-400 text-[11px]">Create structure. Build consistency day in and day out.</p>
                        </div>
                        <div className="border border-neutral-800 bg-black p-4 space-y-2">
                            <span className="text-neutral-500 font-bold">STAGE 03</span>
                            <h3 className="text-white font-bold uppercase">Strength</h3>
                            <p className="text-neutral-400 text-[11px]">Develop your physical body and mental resilience capacity.</p>
                        </div>
                        <div className="border border-neutral-800 bg-black p-4 space-y-2">
                            <span className="text-neutral-500 font-bold">STAGE 04</span>
                            <h3 className="text-white font-bold uppercase">Evolution</h3>
                            <p className="text-neutral-400 text-[11px]">Live with greater control, purpose, and self-confidence.</p>
                        </div>
                    </div>
                </div>

                {/* Promise & Final CTA Block */}
                <div className="border border-neutral-800 bg-neutral-950 p-8 md:p-12 text-center space-y-6 font-mono">
                    <span className="text-xs uppercase tracking-[0.3em] text-amber-400 font-bold block">
                        // THE NOMADLIFEXP PROMISE
                    </span>
                    <p className="text-xs md:text-sm text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        We believe every person has the ability to evolve. Not through perfection. Not through temporary motivation. But through consistency, discipline, movement, and growth.
                    </p>
                    <div className="space-y-2 pt-2">
                        <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                            Your Next Version Is Built Daily.
                        </h2>
                        <p className="text-xs text-neutral-400 uppercase tracking-widest">
                            Discipline &bull; Fitness &bull; Yoga &bull; Mindset
                        </p>
                    </div>
                    <div className="pt-4">
                        <Link
                            href="/start-here"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-cyan-500 text-black font-mono font-bold text-xs uppercase tracking-widest hover:bg-cyan-400 transition-colors duration-200"
                        >
                            Start Your Journey &rarr;
                        </Link>
                    </div>
                </div>

                {/* Contact / Founder Email */}
                <section className="mt-8 mb-16 border border-neutral-800 bg-neutral-950/60 p-6 md:p-8 text-center font-mono" aria-labelledby="contact-heading">
                    <p id="contact-heading" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold mb-3">
                        // CONNECT WITH NOMADLIFEXP
                    </p>
                    <p className="text-xs text-neutral-400 mb-4">
                        Questions, feedback, collaborations, or simply want to connect?
                    </p>
                    <a
                        href="mailto:roy@nomadlifexp.com"
                        className="text-sm md:text-base text-white font-bold tracking-wider hover:text-cyan-400 transition-colors duration-200"
                    >
                        roy@nomadlifexp.com
                    </a>
                </section>

                {/* Runtime System Status Tracker Footer */}
                <section className="mt-24 border-t border-neutral-800 pt-16 text-center space-y-3 font-mono">
                    <p className="text-xs uppercase tracking-[0.25em] font-black text-amber-400">
                        NOMADLIFEXP // Built for people who choose growth over comfort.
                    </p>
                    <p className="text-neutral-400 text-[10px] uppercase tracking-[0.4em] font-semibold">
                        © NomadLifeXP • Evolve in Motion 🏃‍♂️
                    </p>
                </section>
            </div>

            {/* ??? SECURITY SCHEMA BLOCK INGESTION MATRIX */}
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








