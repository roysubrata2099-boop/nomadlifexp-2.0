import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";

/**
 * Hardened Production SEO Metadata Block (Optimized for Self-Discipline System)
 */
export const metadata: Metadata = {
    title: "The Discipline System | Self-Discipline System for Human Optimization",
    description:
        "Build self-discipline, create lasting habits, and transform your identity with the NomadLifeXP Discipline System. A foundation system for human optimization through structured routines, focus, and behaviour change.",
    keywords: [
        "Self-Discipline System",
        "Discipline System",
        "Human Optimization System",
        "Habit Building System",
        "Identity-Based Habits",
        "Build Lasting Habits",
        "Daily Discipline Routine",
        "Personal Development System",
        "Behaviour Change System",
        "Productivity System",
        "Focus Improvement System",
        "Morning Routine System",
        "Self Improvement Framework",
        "High Performance Habits",
        "Lifestyle Optimization",
        "NomadLifeXP"
    ],
    alternates: {
        canonical: `${SITE_URL}/self-discipline-system`,
    },
    openGraph: {
        title: "The Discipline System | Self-Discipline System for Human Optimization",
        description:
            "Build self-discipline, create lasting habits, and transform your identity with the NomadLifeXP Discipline System.",
        url: `${SITE_URL}/self-discipline-system`,
        siteName: "NomadLifeXP",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Discipline System | Self-Discipline System for Human Optimization",
        description:
            "A foundation system for human optimization through structured routines, focus, and behaviour change.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

interface PageProps {
    params?: Promise<Record<string, string | string[] | undefined>>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            "url": SITE_URL,
            "name": "NomadLifeXP"
        },
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            "name": "NomadLifeXP",
            "url": SITE_URL,
            "logo": `${SITE_URL}/logo.png`,
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/self-discipline-system#webpage`,
            "url": `${SITE_URL}/self-discipline-system`,
            "name": "The Discipline System | Self-Discipline System for Human Optimization",
            "inLanguage": "en-US",
            "isPartOf": {
                "@id": `${SITE_URL}/#website`
            }
        },
        {
            "@type": "Service",
            "@id": `${SITE_URL}/self-discipline-system#service`,
            "name": "The Discipline System",
            "provider": {
                "@type": "Organization",
                "name": "NomadLifeXP"
            },
            "description": "The foundation system of the NomadLifeXP Human Optimization System — a self-discipline framework designed to build lasting habits, structured routines, and behavioural systems."
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/self-discipline-system#faq`,
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do you build self-discipline?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to build lasting habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Habit formation depends on behaviour, environment, and consistency. Sustainable change comes through repeated intentional action."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I stop relying on motivation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Motivation changes. Systems create consistency by making important behaviours easier to execute. Motivation fades. Systems endure."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are identity-based habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Identity-based habits focus on becoming the type of person who naturally performs desired behaviours."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Somatic Habit Engineering?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Somatic Habit Engineering connects physical and physiological triggers with repeatable behaviours to strengthen habit consistency."
                    }
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${SITE_URL}/self-discipline-system#breadcrumb`,
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "@id": `${SITE_URL}/#listItem`,
                    "position": 1,
                    "name": "Home",
                    "item": SITE_URL,
                },
                {
                    "@type": "ListItem",
                    "@id": `${SITE_URL}/self-discipline-system#listItem`,
                    "position": 2,
                    "name": "Discipline System",
                    "item": `${SITE_URL}/self-discipline-system`,
                }
            ]
        }
    ]
};

export default async function DisciplineSystemPage(props: PageProps) {
    if (props?.params) {
        await props.params;
    }
    if (props?.searchParams) {
        await props.searchParams;
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />

            <div className="bg-[#050914] text-white min-h-screen font-sans antialiased selection:bg-[#ffb700] selection:text-black overflow-x-hidden">
                <div className="max-w-[1200px] w-[92%] mx-auto relative z-10">

                    {/* Navigation Breadcrumb */}
                    <nav
                        className="py-10 border-b border-[#1e293b] flex items-center gap-5 text-[#94a3b8] uppercase text-[13px] tracking-[2px]"
                        aria-label="Breadcrumb"
                    >
                        <Link
                            href="/"
                            className="text-[#999] hover:text-[#ffb700] no-underline transition-colors duration-200"
                        >
                            ← Return Home
                        </Link>
                        <span>/</span>
                        <span className="text-[#ffb700]">
                            Discipline System
                        </span>
                    </nav>

                    {/* Hero Layout Frame */}
                    <header className="py-16 md:py-20 max-w-5xl">
                        <p className="text-[#ffb700] text-[12px] tracking-[4px] uppercase mb-5 font-mono">
                            NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                        </p>

                        <h1 className="text-4xl md:text-[56px] lg:text-[60px] font-black leading-tight mb-7 tracking-tight uppercase">
                            The Discipline System™:<br />
                            <span className="text-[#ffb700]">The Foundation System of Human Optimization</span>
                        </h1>

                        <p className="text-[#a7f3d0] max-w-[800px] text-lg md:text-xl font-light leading-relaxed mb-6 uppercase tracking-wide">
                            Build Self-Discipline. Build Lasting Habits. Transform Your Identity.
                        </p>

                        <div className="bg-[#0f172a] border-l-2 border-[#ffb700] p-6 md:p-8 max-w-[850px] my-8 space-y-4">
                            <p className="text-[#dbeafe] text-base md:text-lg leading-relaxed font-light">
                                The Discipline System is the foundation system of the NomadLifeXP Human Optimization System — a self-discipline framework designed to build lasting habits, structured routines, and behavioural systems that create sustainable transformation.
                            </p>
                            <p className="text-white font-semibold italic text-sm md:text-base border-l border-[#ffb700] pl-4 py-1">
                                Stop relying on motivation. Motivation fades. Systems endure.
                            </p>
                            <p className="text-[#ffb700] font-mono uppercase text-sm tracking-widest font-bold pt-2">
                                Build the systems that make disciplined action your natural operating state.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="#thirty-day-system"
                                className="inline-block bg-[#ffb700] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                            >
                                Begin Your Discipline System →
                            </Link>
                        </div>
                    </header>

                    {/* What Is The Discipline System? */}
                    <section className="mb-20 space-y-6 border border-[#1e293b] bg-[#0f172a] p-8 md:p-12" aria-label="What Is The Discipline System">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                            What Is The Discipline System?
                        </h2>
                        <p className="text-[#a7f3d0] text-base md:text-lg font-light leading-relaxed">
                            The Discipline System is a self-discipline system designed to help you develop consistency, improve focus, and create lasting behavioural change through structured execution.
                        </p>
                        <p className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">The framework combines:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#dbeafe] font-light">
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Identity-based habits</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Habit building systems</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Daily discipline routines</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Environmental design</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Somatic anchors</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Attention protection</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Behaviour change principles</li>
                        </ul>
                        <div className="pt-4 border-t border-[#1e293b] space-y-2">
                            <p className="text-white font-medium text-sm md:text-base">Transformation is not created through temporary motivation.</p>
                            <p className="text-[#ffb700] text-sm md:text-base font-light">Transformation is created through systems that reshape your actions, reinforce your identity, and improve your ability to execute.</p>
                        </div>
                    </section>

                    {/* The Foundation System of Human Optimization */}
                    <section className="mb-20 space-y-8" aria-label="Evolution Framework">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#1e293b] pb-4">
                            The Foundation System of Human Optimization
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6 border border-[#1e293b] bg-[#0f172a] p-8">
                                <h3 className="text-xl font-bold uppercase text-[#ffb700]">
                                    Discipline Is The First Layer Of Evolution
                                </h3>
                                <p className="text-[#a7f3d0] text-sm md:text-base leading-relaxed font-light">
                                    Human optimization begins with control over daily behaviour. Before developing physical performance, strength, fitness, mobility, recovery, mental performance, or personal growth, you must build the foundation that controls your actions.
                                </p>
                                <p className="text-xs font-mono text-[#94a3b8] uppercase">Before developing:</p>
                                <ul className="space-y-2 text-xs md:text-sm text-[#dbeafe] font-light">
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Physical performance</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Strength and fitness</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Mobility and recovery</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Mental performance</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Personal growth</li>
                                </ul>
                                <p className="text-[#a7f3d0] text-sm md:text-base leading-relaxed font-light">
                                    The Discipline System creates the behavioural foundation for the complete NomadLifeXP Human Optimization System.
                                </p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 text-center font-mono space-y-3">
                                <div className="text-xs text-[#64748b] uppercase tracking-widest">// System Hierarchy</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white text-sm uppercase">HUMAN EVOLUTION</div>
                                <div className="text-[#94a3b8]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white text-sm uppercase">HUMAN OPTIMIZATION SYSTEM</div>
                                <div className="text-[#94a3b8]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white text-sm uppercase">FOUNDATION SYSTEM</div>
                                <div className="text-[#94a3b8]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#ffb700] text-black font-bold text-sm uppercase bg-[#ffb700]">DISCIPLINE SYSTEM</div>
                                <div className="text-[#94a3b8]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-[#ffb700] text-xs uppercase font-bold">Identity → Habits → Actions → Results</div>
                            </div>
                        </div>
                    </section>

                    {/* The Discipline Architecture™ */}
                    <section className="mb-20 space-y-8" aria-label="Discipline Architecture">
                        <div className="border-b border-[#1e293b] pb-4">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                                The Discipline Architecture™
                            </h2>
                            <p className="text-sm font-mono text-[#ffb700] uppercase tracking-widest mt-1">A Complete Self-Discipline Framework</p>
                        </div>
                        <p className="text-[#a7f3d0] text-base font-light">
                            The Discipline Architecture combines psychology, physiology, and structured execution to create sustainable discipline.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">D — DAILY STRUCTURE</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Remove Decision Fatigue</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light mb-3">Create routines that remove decision fatigue.</p>
                                <p className="text-[11px] font-mono text-[#94a3b8] uppercase mb-1">Build:</p>
                                <ul className="space-y-1 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Morning routines</li>
                                    <li>✓ Daily planning systems</li>
                                    <li>✓ Evening reset protocols</li>
                                    <li>✓ Consistent execution patterns</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">I — IDENTITY ALIGNMENT</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Shape Your Core Identity</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Your repeated actions become evidence of who you are becoming. Build the identity of a disciplined person through consistent behaviour.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">S — SOMATIC ANCHORS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Use Physical Triggers</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light mb-3">Use physical triggers to reinforce habits. Your body becomes an anchor for disciplined action.</p>
                                <p className="text-[11px] font-mono text-[#94a3b8] uppercase mb-1">Examples:</p>
                                <ul className="space-y-1 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Movement</li>
                                    <li>✓ Hydration</li>
                                    <li>✓ Sunlight exposure</li>
                                    <li>✓ Breath control</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">C — COGNITIVE CONTROL</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Protect Attention</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light mb-3">Protect attention and mental energy.</p>
                                <p className="text-[11px] font-mono text-[#94a3b8] uppercase mb-1">Reduce:</p>
                                <ul className="space-y-1 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Digital distractions</li>
                                    <li>✓ Reactive inputs</li>
                                    <li>✓ Unnecessary decisions</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">I — INTENTIONAL EXECUTION</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Turn Goals Into Action</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light mb-3">Turn goals into consistent action.</p>
                                <p className="text-[11px] font-mono text-[#94a3b8] uppercase mb-1">Develop:</p>
                                <ul className="space-y-1 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Deep work habits</li>
                                    <li>✓ Focus systems</li>
                                    <li>✓ Priority execution</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">P — PHYSICAL FOUNDATIONS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Support Biology</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light mb-3">Support discipline through:</p>
                                <ul className="space-y-1 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Exercise</li>
                                    <li>✓ Nutrition</li>
                                    <li>✓ Recovery</li>
                                    <li>✓ Energy management</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">L — LIFESTYLE DESIGN</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Optimize Environment</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Create an environment that supports your desired identity.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">I — INTERNAL INTEGRITY</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Build Self-Trust</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Develop self-trust through keeping commitments to yourself.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">N — NEURAL REINFORCEMENT</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Strengthen Pathways</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Repeated behaviours become stronger through consistent repetition.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 md:col-span-3">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">E — EVOLUTION PROTOCOL</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Lifelong Development</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Continue improving through lifelong development.</p>
                            </div>
                        </div>
                    </section>

                    {/* The 30-Day Discipline System™ */}
                    <section id="thirty-day-system" className="mb-20 space-y-8" aria-label="30-Day Discipline System">
                        <div className="border-b border-[#1e293b] pb-4">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                                The 30-Day Discipline System™
                            </h2>
                            <p className="text-sm font-mono text-[#ffb700] uppercase tracking-widest mt-1">Build Your New Operating System</p>
                        </div>
                        <p className="text-[#a7f3d0] text-base font-light">
                            A structured habit formation system designed to create discipline through progressive execution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Phase I */}
                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[#ffb700] text-[12px] font-mono mb-1 tracking-wider">Phase I // Internal Integrity</div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Build Control</h3>
                                    <p className="text-xs font-mono text-[#94a3b8] uppercase mb-4">Days 1–10</p>
                                    <p className="text-xs font-mono text-[#a7f3d0] uppercase mb-2">Focus:</p>
                                    <ul className="space-y-2 text-xs text-[#dbeafe] font-light mb-6">
                                        <li>✓ Consistent wake time</li>
                                        <li>✓ Hydration routine</li>
                                        <li>✓ Morning sunlight</li>
                                        <li>✓ Movement practice</li>
                                        <li>✓ Planning system</li>
                                        <li>✓ Attention protection</li>
                                    </ul>
                                </div>
                                <div className="border-t border-[#1e293b] pt-4">
                                    <p className="text-[11px] font-mono text-[#ffb700] uppercase mb-1">Outcome:</p>
                                    <p className="text-xs text-[#a7f3d0] font-light">Develop control over your environment, focus, and daily actions.</p>
                                </div>
                            </div>

                            {/* Phase II */}
                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[#ffb700] text-[12px] font-mono mb-1 tracking-wider">Phase II // Physical Baselines</div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Build Energy</h3>
                                    <p className="text-xs font-mono text-[#94a3b8] uppercase mb-4">Days 11–20</p>
                                    <p className="text-xs font-mono text-[#a7f3d0] uppercase mb-2">Focus:</p>
                                    <ul className="space-y-2 text-xs text-[#dbeafe] font-light mb-6">
                                        <li>✓ Strength training</li>
                                        <li>✓ Mobility practice</li>
                                        <li>✓ Nutrition structure</li>
                                        <li>✓ Recovery habits</li>
                                    </ul>
                                </div>
                                <div className="border-t border-[#1e293b] pt-4">
                                    <p className="text-[11px] font-mono text-[#ffb700] uppercase mb-1">Outcome:</p>
                                    <p className="text-xs text-[#a7f3d0] font-light">Create the physical foundation required for performance.</p>
                                </div>
                            </div>

                            {/* Phase III */}
                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[#ffb700] text-[12px] font-mono mb-1 tracking-wider">Phase III // Velocity Output</div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Build Performance</h3>
                                    <p className="text-xs font-mono text-[#94a3b8] uppercase mb-4">Days 21–30</p>
                                    <p className="text-xs font-mono text-[#a7f3d0] uppercase mb-2">Focus:</p>
                                    <ul className="space-y-2 text-xs text-[#dbeafe] font-light mb-6">
                                        <li>✓ Deep work</li>
                                        <li>✓ Productivity systems</li>
                                        <li>✓ Focus protection</li>
                                        <li>✓ Execution consistency</li>
                                    </ul>
                                </div>
                                <div className="border-t border-[#1e293b] pt-4">
                                    <p className="text-[11px] font-mono text-[#ffb700] uppercase mb-1">Outcome:</p>
                                    <p className="text-xs text-[#a7f3d0] font-light">Transform discipline into measurable performance.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Daily Discipline Routine™ */}
                    <section className="mb-20 space-y-8" aria-label="Daily Discipline Routine">
                        <div className="border-b border-[#1e293b] pb-4">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                                Daily Discipline Routine™
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-3">
                                <h3 className="text-lg font-bold uppercase text-[#ffb700]">Morning Activation</h3>
                                <p className="text-xs text-[#a7f3d0] font-light">Create a strong start.</p>
                                <ul className="space-y-1.5 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Hydration</li>
                                    <li>✓ Sunlight exposure</li>
                                    <li>✓ Movement</li>
                                    <li>✓ Breath activation</li>
                                    <li>✓ Planning</li>
                                    <li>✓ Focus preparation</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-3">
                                <h3 className="text-lg font-bold uppercase text-[#ffb700]">Daily Execution</h3>
                                <p className="text-xs text-[#a7f3d0] font-light">Protect your progress.</p>
                                <ul className="space-y-1.5 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Deep work</li>
                                    <li>✓ Exercise</li>
                                    <li>✓ Nutrition</li>
                                    <li>✓ Habit completion</li>
                                    <li>✓ Attention management</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-3">
                                <h3 className="text-lg font-bold uppercase text-[#ffb700]">Evening Reset</h3>
                                <p className="text-xs text-[#a7f3d0] font-light">Prepare for recovery.</p>
                                <ul className="space-y-1.5 text-xs text-[#dbeafe] font-light">
                                    <li>✓ Digital shutdown</li>
                                    <li>✓ Reflection</li>
                                    <li>✓ Recovery preparation</li>
                                    <li>✓ Sleep optimisation</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Attention Protection System™ & Somatic Habit Engineering™ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        <section className="border border-[#1e293b] bg-[#0f172a] p-8 space-y-4" aria-label="Attention Protection System">
                            <h2 className="text-xl font-bold uppercase text-white">
                                Attention Protection System™
                            </h2>
                            <p className="text-xs font-mono text-[#ffb700] uppercase tracking-wider">Control Your Inputs</p>
                            <p className="text-sm text-[#a7f3d0] font-light leading-relaxed">
                                Your attention determines your direction. The Discipline System protects focus by reducing reactive inputs before completing your core identity actions.
                            </p>
                            <p className="text-xs font-mono text-[#94a3b8] uppercase">Protect:</p>
                            <ul className="space-y-1 text-xs text-[#dbeafe] font-light">
                                <li>✓ Focus</li>
                                <li>✓ Energy</li>
                                <li>✓ Mental clarity</li>
                            </ul>
                        </section>

                        <section className="border border-[#1e293b] bg-[#0f172a] p-8 space-y-4" aria-label="Somatic Habit Engineering">
                            <h2 className="text-xl font-bold uppercase text-white">
                                Somatic Habit Engineering™
                            </h2>
                            <p className="text-xs font-mono text-[#ffb700] uppercase tracking-wider">Discipline Through The Body</p>
                            <p className="text-sm text-[#a7f3d0] font-light leading-relaxed">
                                Discipline is not built through willpower alone. Physical anchors create reliable behaviour triggers.
                            </p>
                            <ul className="space-y-2 text-xs text-[#dbeafe] font-light pt-2">
                                <li><strong className="text-white">Movement</strong> creates activation.</li>
                                <li><strong className="text-white">Sunlight</strong> creates rhythm.</li>
                                <li><strong className="text-white">Breathing</strong> creates regulation.</li>
                                <li><strong className="text-white">Hydration</strong> creates awareness.</li>
                            </ul>
                            <p className="text-xs text-[#ffb700] font-mono pt-2">Your body becomes part of your discipline system.</p>
                        </section>
                    </div>

                    {/* Motivation-Based Effort vs Identity-Based Systems Comparison */}
                    <section className="mb-20 space-y-6" aria-label="Comparison Table">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#1e293b] pb-4">
                            Motivation-Based Effort vs Identity-Based Systems
                        </h2>

                        <div className="overflow-x-auto border border-[#1e293b]">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#1e293b] bg-[#0f172a] text-xs font-mono uppercase text-[#ffb700]">
                                        <th className="p-4 border-r border-[#1e293b]">Metric</th>
                                        <th className="p-4 border-r border-[#1e293b]">Motivation-Based Effort</th>
                                        <th className="p-4">Identity-Based System</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs md:text-sm text-[#dbeafe] font-light divide-y divide-[#1e293b]">
                                    <tr className="bg-[#0b0b0b]">
                                        <td className="p-4 font-mono text-[#a7f3d0] border-r border-[#1e293b]">Driver</td>
                                        <td className="p-4 border-r border-[#1e293b]">Temporary feelings</td>
                                        <td className="p-4 text-white font-medium">Structured behaviours</td>
                                    </tr>
                                    <tr className="bg-[#0f172a]">
                                        <td className="p-4 font-mono text-[#a7f3d0] border-r border-[#1e293b]">Consistency</td>
                                        <td className="p-4 border-r border-[#1e293b]">Unpredictable</td>
                                        <td className="p-4 text-white font-medium">Repeatable</td>
                                    </tr>
                                    <tr className="bg-[#0b0b0b]">
                                        <td className="p-4 font-mono text-[#a7f3d0] border-r border-[#1e293b]">Decision Energy</td>
                                        <td className="p-4 border-r border-[#1e293b]">High</td>
                                        <td className="p-4 text-white font-medium">Reduced</td>
                                    </tr>
                                    <tr className="bg-[#0f172a]">
                                        <td className="p-4 font-mono text-[#a7f3d0] border-r border-[#1e293b]">Outcome</td>
                                        <td className="p-4 border-r border-[#1e293b]">Short-term bursts</td>
                                        <td className="p-4 text-white font-medium">Sustainable transformation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Benefits Of The Discipline System™ */}
                    <section className="mb-20 space-y-6 border border-[#1e293b] bg-[#0f172a] p-8 md:p-12" aria-label="Benefits">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                            Benefits Of The Discipline System™
                        </h2>
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-[#dbeafe] font-light pt-2">
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Build self-discipline</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Build lasting habits</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Improve focus</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Reduce procrastination</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Increase productivity</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Develop accountability</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Strengthen confidence</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Create sustainable routines</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Support human optimization</li>
                        </ul>
                    </section>

                    {/* The Discipline System Within Human Optimization */}
                    <section className="border border-[#1e293b] bg-[#0f172a] p-8 md:p-12 mb-20 space-y-6 text-center" aria-label="System Integration">
                        <h2 className="text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                            The Discipline System Within Human Optimization
                        </h2>
                        <div className="max-w-md mx-auto space-y-3 font-mono text-sm">
                            <div className="p-3 bg-[#0d0d0d] border border-[#ffb700] text-[#ffb700] font-bold uppercase">The Discipline System creates the foundation.</div>
                            <div className="text-[#64748b]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white uppercase">The Fitness System develops physical capability.</div>
                            <div className="text-[#64748b]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white uppercase">The Yoga System improves mobility, awareness, and recovery.</div>
                            <div className="text-[#64748b]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white uppercase">The Mindset System develops resilience and mental performance.</div>
                        </div>
                        <p className="text-sm text-[#a7f3d0] font-light pt-2">
                            Together, they create the NomadLifeXP Human Optimization System.
                        </p>
                    </section>

                    {/* Frequently Asked Questions */}
                    <section className="mb-20 space-y-8" aria-label="Frequently Asked Questions">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#1e293b] pb-4">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase">
                                    How do you build self-discipline?
                                </h3>
                                <p className="text-sm md:text-base text-[#a7f3d0] font-light leading-relaxed">
                                    Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity.
                                </p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase">
                                    How long does it take to build lasting habits?
                                </h3>
                                <p className="text-sm md:text-base text-[#a7f3d0] font-light leading-relaxed">
                                    Habit formation depends on behaviour, environment, and consistency. Sustainable change comes through repeated intentional action.
                                </p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase">
                                    How can I stop relying on motivation?
                                </h3>
                                <p className="text-sm md:text-base text-[#a7f3d0] font-light leading-relaxed">
                                    Motivation changes. Systems create consistency by making important behaviours easier to execute. Motivation fades. Systems endure.
                                </p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase">
                                    What are identity-based habits?
                                </h3>
                                <p className="text-sm md:text-base text-[#a7f3d0] font-light leading-relaxed">
                                    Identity-based habits focus on becoming the type of person who naturally performs desired behaviours.
                                </p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-lg font-bold text-white uppercase">
                                    What is Somatic Habit Engineering?
                                </h3>
                                <p className="text-sm md:text-base text-[#a7f3d0] font-light leading-relaxed">
                                    Somatic Habit Engineering connects physical and physiological triggers with repeatable behaviours to strengthen habit consistency.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Terminal Block */}
                    <section className="border border-[#1e293b] bg-[#071428] p-10 md:p-16 text-center mb-20 relative overflow-hidden space-y-4">
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
                            Start Your Evolution
                        </h2>
                        <p className="text-sm font-mono text-[#ffb700] uppercase tracking-widest">
                            Begin The Discipline System™
                        </p>
                        <p className="text-[#a7f3d0] text-sm md:text-base max-w-[700px] mx-auto leading-relaxed font-light">
                            Build the foundation required for your Human Optimization journey.
                        </p>
                        <div className="text-xs font-mono text-[#94a3b8] uppercase space-y-1 py-2">
                            <p>Create the systems.</p>
                            <p>Build the habits.</p>
                            <p>Transform your identity.</p>
                        </div>
                        <div className="pt-4">
                            <Link
                                href="#thirty-day-system"
                                className="inline-block bg-[#ffb700] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                            >
                                Begin Phase I →
                            </Link>
                        </div>
                    </section>

                    {/* Footer Branding Note */}
                    <footer className="py-10 border-t border-[#1e293b] text-center font-mono text-xs text-[#94a3b8] uppercase space-y-2 mb-10">
                        <p className="text-white font-bold tracking-wider">NOMADLIFEXP</p>
                        <p>Human Optimization System</p>
                        <p className="text-[#ffb700]">Evolve in Motion.</p>
                    </footer>

                </div>
            </div>
        </>
    );
}