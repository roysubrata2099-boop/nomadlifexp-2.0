import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";

/**
 * Hardened Production SEO Metadata Block (Optimized for Self-Discipline System)
 */
export const metadata: Metadata = {
    title: "Discipline System | Build Self-Discipline & Transform Your Habits | NomadLifeXP",
    description:
        "The Discipline System by NomadLifeXP is a structured self-discipline framework designed to build lasting habits, improve consistency, strengthen focus, and create sustainable personal transformation.",
    keywords: [
        "Discipline System",
        "Self Discipline System",
        "Build Self Discipline",
        "Self Discipline Training",
        "Habit Building Framework",
        "Build Better Habits",
        "Daily Discipline",
        "Consistency Training",
        "Identity Based Habits",
        "Personal Growth System",
        "Behaviour Change Framework",
        "Mental Discipline",
        "Focus Improvement",
        "High Performance Habits",
        "Self Improvement Framework",
        "Lifestyle Transformation",
        "Personal Development",
        "Human Optimization",
        "Human Evolution System",
        "NomadLifeXP"
    ],
    alternates: {
        canonical: `${SITE_URL}/self-discipline-system`,
    },
    openGraph: {
        title: "Discipline System | Build Self-Discipline & Transform Your Habits",
        description:
            "Develop discipline, build powerful habits, improve focus, and create lasting behavioural change through the NomadLifeXP Discipline System.",
        url: `${SITE_URL}/self-discipline-system`,
        siteName: "NomadLifeXP",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Discipline System | Build Self-Discipline & Transform Your Habits",
        description:
            "A structured framework to develop discipline, habits, focus, and sustainable personal growth.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

/**
 * Strict Route Isolation Constraints for Next.js App Router
 */
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

interface PageProps {
    params?: Promise<Record<string, string | string[] | undefined>>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

// Multi-layered JSON-LD Schema Markup for Search Engines
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
            "name": "Discipline System | Build Self-Discipline & Transform Your Habits | NomadLifeXP",
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
            "description": "The Discipline System is the first foundation layer of NomadLifeXP, designed to build habits, discipline, and consistent execution."
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/self-discipline-system#faq`,
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the Discipline System?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The Discipline System is the first foundation layer of NomadLifeXP, designed to build habits, discipline, and consistent execution."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I build self-discipline?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I create lasting habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Lasting habits are built by anchoring actions to environmental cues, starting small, maintaining daily consistency, and aligning behavior with your target identity."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I improve consistency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Consistency improves when you remove decision fatigue through pre-planned daily routines and eliminate emotional reliance on temporary motivation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are identity-based habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Identity-based habits focus on becoming the type of person who naturally performs desired behaviours rather than focusing purely on external goals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does discipline improve personal growth?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Discipline creates the foundational stability and self-trust required to execute advanced strategies across fitness, mindset, and long-term personal evolution."
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

            <div className="bg-[#050505] text-white min-h-screen font-sans antialiased selection:bg-[#D6A500] selection:text-black overflow-x-hidden">
                <div className="max-w-[1200px] w-[92%] mx-auto relative z-10">

                    {/* Navigation Breadcrumb Node Block */}
                    <nav
                        className="py-10 border-b border-[#222] flex items-center gap-5 text-[#777] uppercase text-[13px] tracking-[2px]"
                        aria-label="Breadcrumb"
                    >
                        <Link
                            href="/"
                            className="text-[#999] hover:text-[#D6A500] no-underline transition-colors duration-200"
                        >
                            ← Return Home
                        </Link>
                        <span>/</span>
                        <span className="text-[#D6A500]">
                            Discipline System
                        </span>
                    </nav>

                    {/* Hero Layout Frame */}
                    <header className="py-16 md:py-20 max-w-5xl">
                        <p className="text-[#D6A500] text-[12px] tracking-[4px] uppercase mb-5 font-mono">
                            NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                        </p>

                        <h1 className="text-4xl md:text-[56px] lg:text-[60px] font-black leading-tight mb-7 tracking-tight uppercase">
                            The Discipline System™:<br />
                            <span className="text-[#D6A500]">Build Self-Discipline.<br />Create Lasting Change.</span>
                        </h1>

                        <p className="text-[#aaa] max-w-[800px] text-lg md:text-xl font-light leading-relaxed mb-6 uppercase tracking-wide">
                            Evolve In Motion.
                        </p>

                        <div className="bg-[#101010] border-l-2 border-[#D6A500] p-6 md:p-8 max-w-[850px] my-8">
                            <p className="text-[#ccc] text-base md:text-lg leading-relaxed font-light mb-4">
                                The foundation framework of NomadLifeXP designed to build discipline, strong habits, focused execution, and personal evolution.
                            </p>
                            <p className="text-[#D6A500] font-mono uppercase text-sm tracking-widest font-bold">
                                Build the systems that shape your identity.
                            </p>
                        </div>

                        {/* Core Pillars List */}
                        <div className="flex flex-wrap items-center gap-3 text-sm font-mono text-[#aaa] uppercase tracking-wider mb-8">
                            <span className="text-white font-bold">Core Pillars:</span>
                            <span className="text-[#D6A500]">Discipline</span>
                            <span>•</span>
                            <span>Fitness</span>
                            <span>•</span>
                            <span>Yoga</span>
                            <span>•</span>
                            <span>Mindset</span>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="#discipline-program"
                                className="inline-block bg-[#D6A500] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                            >
                                Explore Phase I →
                            </Link>
                        </div>
                    </header>

                    {/* Natural Page Keywords Section */}
                    <section className="mb-20 space-y-4 border border-[#222] bg-[#101010] p-8 md:p-10" aria-label="Build Discipline Overview">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                            Build Discipline Through Structured Habits
                        </h2>
                        <p className="text-[#aaa] text-base md:text-lg font-light leading-relaxed">
                            The Discipline System helps individuals develop self-control, daily consistency, focused routines, identity-based habits, and behavioural systems that support long-term growth.
                        </p>
                    </section>

                    {/* The Foundation Layer */}
                    <section className="mb-20 space-y-8" aria-label="Evolution Framework">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            The Foundation Layer: Discipline Creates The Base
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6 border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-xl font-bold uppercase text-[#D6A500]">
                                    Discipline Supports Everything Else
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Before performance, strength, recovery, or growth can happen, discipline creates the structure that supports everything else.
                                </p>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    The Discipline System develops:
                                </p>
                                <ul className="space-y-2 text-xs md:text-sm text-[#ccc] font-light">
                                    <li className="flex items-center gap-2"><span className="text-[#D6A500]">✓</span> Consistent habits</li>
                                    <li className="flex items-center gap-2"><span className="text-[#D6A500]">✓</span> Structured routines</li>
                                    <li className="flex items-center gap-2"><span className="text-[#D6A500]">✓</span> Focus control</li>
                                    <li className="flex items-center gap-2"><span className="text-[#D6A500]">✓</span> Identity alignment</li>
                                    <li className="flex items-center gap-2"><span className="text-[#D6A500]">✓</span> Sustainable execution</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-8 text-center font-mono space-y-3">
                                <div className="text-xs text-[#555] uppercase tracking-widest">// Framework Architecture</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#222] text-[#D6A500] font-bold text-sm uppercase">NOMADLIFEXP</div>
                                <div className="text-[#777]">↓</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white text-sm uppercase">Human Evolution System</div>
                                <div className="text-[#777]">↓</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#D6A500] text-black font-bold text-sm uppercase bg-[#D6A500]">Discipline System (Foundation Layer)</div>
                                <div className="text-[#777]">↓</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white text-sm uppercase">Fitness • Yoga • Mindset</div>
                                <div className="text-[#777]">↓</div>
                                <div className="text-xs text-[#aaa] pt-2 tracking-wide">Human Optimization</div>
                            </div>
                        </div>
                    </section>

                    {/* Discipline Architecture */}
                    <section className="mb-20 space-y-8" aria-label="Discipline Architecture">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            Discipline Architecture: Build Your Operating System
                        </h2>
                        <p className="text-[#aaa] text-base font-light">
                            The Discipline Architecture combines psychology, physiology, and structured execution to create sustainable discipline.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#D6A500] font-mono text-xs mb-2 font-bold tracking-widest">DAILY STRUCTURE</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Remove Decision Fatigue</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Create routines that remove friction.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#D6A500] font-mono text-xs mb-2 font-bold tracking-widest">IDENTITY ALIGNMENT</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Shape Your Core Identity</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Become the person who executes consistently.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#D6A500] font-mono text-xs mb-2 font-bold tracking-widest">ATTENTION PROTECTION</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Protect Focus</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Control inputs and protect focus.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#D6A500] font-mono text-xs mb-2 font-bold tracking-widest">PHYSICAL FOUNDATIONS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Support Your Biology</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Support energy and performance.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#D6A500] font-mono text-xs mb-2 font-bold tracking-widest">INTENTIONAL EXECUTION</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Turn Goals Into Action</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Convert goals into action.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#D6A500] font-mono text-xs mb-2 font-bold tracking-widest">LIFESTYLE DESIGN</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Optimize Environment</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Create an environment that supports growth.</p>
                            </div>
                        </div>
                    </section>

                    {/* 30 Day Discipline Program */}
                    <section id="discipline-program" className="mb-20 space-y-8" aria-label="30 Day Discipline Program">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            30 Day Discipline Program
                        </h2>
                        <p className="text-[#aaa] text-base font-light">
                            A structured habit formation framework designed to create discipline through progressive execution across 3 distinct phases.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Phase I */}
                            <div className="border border-[#222] bg-[#101010] p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#D6A500] text-[12px] font-mono mb-2 tracking-wider">Phase I</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">Awareness & Control</h3>
                                    <p className="text-xs font-mono text-[#777] uppercase mb-3">Build your foundation:</p>
                                    <ul className="space-y-2 text-xs text-[#aaa] font-light">
                                        <li>✓ Wake consistency</li>
                                        <li>✓ Morning activation</li>
                                        <li>✓ Hydration</li>
                                        <li>✓ Movement</li>
                                        <li>✓ Planning</li>
                                        <li>✓ Attention control</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase II */}
                            <div className="border border-[#222] bg-[#101010] p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#D6A500] text-[12px] font-mono mb-2 tracking-wider">Phase II</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">Strength & Energy</h3>
                                    <p className="text-xs font-mono text-[#777] uppercase mb-3">Develop your physical base:</p>
                                    <ul className="space-y-2 text-xs text-[#aaa] font-light">
                                        <li>✓ Training</li>
                                        <li>✓ Mobility</li>
                                        <li>✓ Nutrition</li>
                                        <li>✓ Recovery</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase III */}
                            <div className="border border-[#222] bg-[#101010] p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#D6A500] text-[12px] font-mono mb-2 tracking-wider">Phase III</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">Execution & Growth</h3>
                                    <p className="text-xs font-mono text-[#777] uppercase mb-3">Transform discipline into performance:</p>
                                    <ul className="space-y-2 text-xs text-[#aaa] font-light">
                                        <li>✓ Deep work</li>
                                        <li>✓ Focus systems</li>
                                        <li>✓ Goal execution</li>
                                        <li>✓ Consistency</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* System Integration */}
                    <section className="border border-[#222] bg-[#101010] p-8 md:p-12 mb-20 space-y-6 text-center" aria-label="System Integration">
                        <h2 className="text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                            System Integration
                        </h2>
                        <p className="text-[#aaa] text-sm font-light">
                            The Discipline System is the first layer of evolution.
                        </p>
                        <div className="max-w-xs mx-auto space-y-2 font-mono text-sm">
                            <div className="p-3 bg-[#0d0d0d] border border-[#D6A500] text-[#D6A500] font-bold uppercase">DISCIPLINE</div>
                            <div className="text-[#555]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white uppercase">FITNESS</div>
                            <div className="text-[#555]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white uppercase">YOGA</div>
                            <div className="text-[#555]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white uppercase">MINDSET</div>
                            <div className="text-[#555]">↓</div>
                            <div className="p-3 bg-[#0d0d0d] border border-[#222] text-[#D6A500] font-bold uppercase">HUMAN EVOLUTION</div>
                        </div>
                    </section>

                    {/* Frequently Asked Questions */}
                    <section className="mb-20 space-y-8" aria-label="Frequently Asked Questions">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-6">
                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    What is the Discipline System?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    The Discipline System is the first foundation layer of NomadLifeXP, designed to build habits, discipline, and consistent execution.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How do I build self-discipline?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How do I create lasting habits?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Lasting habits are built by anchoring actions to environmental cues, starting small, maintaining daily consistency, and aligning behavior with your target identity.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How can I improve consistency?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Consistency improves when you remove decision fatigue through pre-planned daily routines and eliminate emotional reliance on temporary motivation.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    What are identity-based habits?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Identity-based habits focus on becoming the type of person who naturally performs desired behaviours rather than focusing purely on external goals.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How does discipline improve personal growth?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Discipline creates the foundational stability and self-trust required to execute advanced strategies across fitness, mindset, and long-term personal evolution.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Terminal Block */}
                    <section className="border border-[#222] bg-[#0d0d0d] p-10 md:p-16 text-center mb-20 relative overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-white">
                            Your Evolution Begins
                        </h2>
                        <p className="text-xs font-mono text-[#D6A500] uppercase tracking-widest mb-4">
                            Build the foundation required for Human Optimization
                        </p>
                        <p className="text-[#aaa] text-sm md:text-base max-w-[700px] mx-auto leading-relaxed font-light mb-8">
                            Create the habits. Build the discipline. Evolve in motion.
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-[#D6A500] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                        >
                            Start Your Journey →
                        </Link>
                    </section>

                </div>
            </div>
        </>
    );
}