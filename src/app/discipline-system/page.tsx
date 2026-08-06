import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";

/**
 * Hardened Production SEO Metadata Block (Optimized for Self-Discipline System)
 */
export const metadata: Metadata = {
    title: "The Discipline System | Build Self-Discipline & Lasting Habits",
    description:
        "Build self-discipline, build lasting habits, and transform your identity with the NomadLifeXP Discipline System. A Human Optimization foundation system designed for focus, consistency, and sustainable behaviour change.",
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
    ],
    alternates: {
        canonical: `${SITE_URL}/self-discipline-system`,
    },
    openGraph: {
        title: "The Discipline System | Build Self-Discipline & Lasting Habits",
        description:
            "Build self-discipline, build lasting habits, and transform your identity with the NomadLifeXP Discipline System. A Human Optimization foundation system designed for focus, consistency, and sustainable behaviour change.",
        url: `${SITE_URL}/self-discipline-system`,
        siteName: "NomadLifeXP",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Discipline System | Build Self-Discipline & Lasting Habits",
        description:
            "Build self-discipline, build lasting habits, and transform your identity with the NomadLifeXP Discipline System.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
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
            "name": "The Discipline System | Build Self-Discipline & Lasting Habits",
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
            "description": "The Discipline System is the foundation system of the NomadLifeXP Human Optimization System, designed to build self-discipline, lasting habits, and structured daily routines."
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
                        "text": "The Discipline System is the foundation system of the NomadLifeXP Human Optimization System, designed to build self-discipline, lasting habits, and structured daily routines."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do you build self-discipline?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to build lasting habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Habit formation depends on behaviour, environment, and consistency. Sustainable change comes through repeated intentional action.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How can I stop relying on motivation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Motivation changes. Systems create consistency by making important behaviours easier to execute.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What are identity-based habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Identity-based habits focus on becoming the type of person who naturally performs desired behaviours.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What is Somatic Habit Engineering?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Somatic Habit Engineering connects physical and physiological triggers with repeatable behaviours to strengthen habit consistency.",
                    },
                },
            ],
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
                    "@id": `${SITE_URL}/systems#listItem`,
                    "position": 2,
                    "name": "Systems",
                    "item": `${SITE_URL}/systems`,
                },
                {
                    "@type": "ListItem",
                    "@id": `${SITE_URL}/self-discipline-system#listItem`,
                    "position": 3,
                    "name": "Discipline System",
                    "item": `${SITE_URL}/self-discipline-system`,
                },
            ],
        },
    ],
};

export default async function DisciplineSystemPage(props: PageProps) {
    // Bullet-proof async resolution guarding against undefined props during build or runtime execution
    if (props?.params) {
        await props.params;
    }
    if (props?.searchParams) {
        await props.searchParams;
    }

    return (
        <>
            {/* Structured JSON-LD Data Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
            />

            <div className="bg-[#050505] text-white min-h-screen font-sans antialiased selection:bg-amber-500 selection:text-black overflow-x-hidden">
                <div className="max-w-[1200px] w-[92%] mx-auto relative z-10">

                    {/* Navigation Breadcrumb Node Block */}
                    <nav
                        className="py-10 border-b border-[#222] flex flex-wrap items-center gap-5 text-[#777] uppercase text-[13px] tracking-[2px]"
                        aria-label="System Directory Breadcrumbs"
                    >
                        <Link
                            href="/"
                            className="text-[#999] hover:text-[#ffb400] no-underline transition-colors duration-200"
                        >
                            {"\u2190 Return Home"}
                        </Link>
                        <span className="select-none" aria-hidden="true">/</span>
                        <Link
                            href="/systems"
                            className="text-[#999] hover:text-[#ffb400] no-underline transition-colors duration-200"
                        >
                            Systems
                        </Link>
                        <span className="select-none" aria-hidden="true">/</span>
                        <Link
                            href="/self-discipline-system"
                            className="text-[#ffb400] no-underline transition-colors duration-200"
                        >
                            Discipline System
                        </Link>
                    </nav>

                    {/* Hero Layout Frame */}
                    <header className="py-16 md:py-20 max-w-5xl">
                        <p className="text-[#ffb400] text-[12px] tracking-[4px] uppercase mb-5 font-mono">
                            NOMADLIFEXP // HUMAN EVOLUTION SYSTEM
                        </p>

                        <h1 className="text-4xl md:text-[56px] lg:text-[60px] font-black leading-tight mb-7 tracking-tight uppercase">
                            The Discipline System™:<br />
                            <span className="text-[#ffb400]">Self-Discipline System for Human Optimization</span>
                        </h1>

                        <p className="text-[#aaa] max-w-[800px] text-lg md:text-xl font-light leading-relaxed mb-6 uppercase tracking-wide">
                            The Foundation System of Human Optimization
                        </p>

                        <div className="bg-[#101010] border-l-2 border-[#ffb400] p-6 md:p-8 max-w-[850px] my-8">
                            <p className="text-[#ccc] text-base md:text-lg leading-relaxed font-light mb-4">
                                The Discipline System is the foundation system of the NomadLifeXP Human Optimization System — a self-discipline framework designed to build lasting habits, structured routines, and behavioural systems that create sustainable transformation.
                            </p>
                            <p className="text-[#ffb400] font-mono uppercase text-sm tracking-widest font-bold">
                                Stop relying on motivation. Motivation fades. Systems endure. Build the systems that make disciplined action your natural operating state.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="#thirty-day-system"
                                className="inline-block bg-[#ffb400] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                            >
                                Begin Your Discipline System →
                            </Link>
                        </div>
                    </header>

                    {/* What Is The Discipline System? */}
                    <section className="mb-20 space-y-6" aria-label="Overview of The Discipline System">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            What Is The Discipline System?
                        </h2>
                        <div className="border border-[#222] bg-[#101010] p-8 md:p-10 space-y-6">
                            <p className="text-[#aaa] text-base md:text-lg leading-relaxed font-light">
                                The Discipline System is a structured self-discipline framework designed to help you develop consistency, improve focus, and create lasting behavioural change through structured execution.
                            </p>
                            <p className="text-white font-mono text-sm tracking-wider uppercase">The framework combines:</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {[
                                    "Identity-based habits",
                                    "Habit building systems",
                                    "Daily discipline routines",
                                    "Environmental design",
                                    "Somatic anchors",
                                    "Attention protection",
                                    "Behaviour change principles",
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-[#222] bg-[#0d0d0d] p-4 flex items-center gap-3">
                                        <span className="text-[#ffb400]">✓</span>
                                        <span className="text-sm text-[#ccc] font-light">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-[#aaa] text-base md:text-lg leading-relaxed font-light pt-4 border-t border-[#222]">
                                Transformation is not created through temporary motivation. Transformation is created through systems that reshape your actions, reinforce your identity, and improve your ability to execute.
                            </p>
                        </div>
                    </section>

                    {/* The Foundation System of Human Optimization */}
                    <section className="mb-20 space-y-8" aria-label="Human Optimization Hierarchy">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            The Foundation System of Human Optimization
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-6 border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-xl font-bold uppercase text-[#ffb400]">
                                    Discipline Is The First Layer Of Evolution
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Human optimization begins with control over daily behaviour. Before developing physical performance, strength, fitness, mobility, recovery, mental performance, or personal growth, you must build the foundation that controls your actions.
                                </p>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    The Discipline System creates the behavioural foundation for the complete NomadLifeXP Human Optimization System.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-8 text-center font-mono space-y-3">
                                <div className="text-xs text-[#555] uppercase tracking-widest">// System Hierarchy</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#222] text-[#ffb400] font-bold text-sm uppercase">HUMAN EVOLUTION</div>
                                <div className="text-[#777]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white text-sm uppercase">HUMAN OPTIMIZATION SYSTEM</div>
                                <div className="text-[#777]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#222] text-white text-sm uppercase">FOUNDATION SYSTEM</div>
                                <div className="text-[#777]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#ffb400] text-black font-bold text-sm uppercase bg-[#ffb400]">DISCIPLINE SYSTEM</div>
                                <div className="text-[#777]">↑</div>
                                <div className="text-xs text-[#aaa] pt-2 tracking-wide">Identity → Habits → Actions → Results</div>
                            </div>
                        </div>
                    </section>

                    {/* The Discipline Architecture™ */}
                    <section className="mb-20 space-y-8" aria-label="The Discipline Architecture Framework">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            The Discipline Architecture™: A Complete Self-Discipline Framework
                        </h2>
                        <p className="text-[#aaa] text-base font-light">
                            The Discipline Architecture combines psychology, physiology, and structured execution to create sustainable discipline.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">D — DAILY STRUCTURE</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Remove Decision Fatigue</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light mb-3">Create routines that eliminate mental friction.</p>
                                <ul className="space-y-1.5 text-xs text-[#ccc] font-light">
                                    <li>✓ Morning routines</li>
                                    <li>✓ Daily planning systems</li>
                                    <li>✓ Evening reset protocols</li>
                                    <li>✓ Consistent execution patterns</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">I — IDENTITY ALIGNMENT</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Shape Your Core Identity</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light mb-3">Your repeated actions become evidence of who you are becoming.</p>
                                <p className="text-xs text-[#ccc] font-light">Build the identity of a disciplined person through consistent daily behavior.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">S — SOMATIC ANCHORS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Use Physical Triggers</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light mb-3">Ground habits in physiological state changes.</p>
                                <ul className="space-y-1.5 text-xs text-[#ccc] font-light">
                                    <li>✓ Movement</li>
                                    <li>✓ Hydration</li>
                                    <li>✓ Sunlight exposure</li>
                                    <li>✓ Breath control</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">C — COGNITIVE CONTROL</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Protect Mental Energy</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light mb-3">Shield executive functions from depletion.</p>
                                <ul className="space-y-1.5 text-xs text-[#ccc] font-light">
                                    <li>✓ Digital distractions reduction</li>
                                    <li>✓ Reactive inputs filtering</li>
                                    <li>✓ Unnecessary decisions elimination</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">I — INTENTIONAL EXECUTION</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Turn Goals Into Action</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light mb-3">Translate abstract targets into concrete steps.</p>
                                <ul className="space-y-1.5 text-xs text-[#ccc] font-light">
                                    <li>✓ Deep work habits</li>
                                    <li>✓ Focus systems</li>
                                    <li>✓ Priority execution</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">P — PHYSICAL FOUNDATIONS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Support Your Biology</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light mb-3">Fuel discipline through optimal physical vitality.</p>
                                <ul className="space-y-1.5 text-xs text-[#ccc] font-light">
                                    <li>✓ Exercise routines</li>
                                    <li>✓ Nutrition guidelines</li>
                                    <li>✓ Recovery protocols</li>
                                    <li>✓ Energy management</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">L — LIFESTYLE DESIGN</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Optimize Environment</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Create an ambient environment that fully supports your desired identity and actions.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">I — INTERNAL INTEGRITY</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Build Self-Trust</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Develop unshakeable personal accountability by consistently keeping commitments made to yourself.</p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <div className="text-[#ffb400] font-mono text-xs mb-2 font-bold tracking-widest">N — NEURAL REINFORCEMENT & E — EVOLUTION</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Compound & Evolve</h3>
                                <p className="text-xs md:text-sm text-[#aaa] font-light">Repeated behaviors strengthen neural pathways, compounding performance through continuous lifelong development.</p>
                            </div>
                        </div>
                    </section>

                    {/* The 30-Day Discipline System™ */}
                    <section id="thirty-day-system" className="mb-20 space-y-8" aria-label="The 30-Day Discipline System Phases">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            The 30-Day Discipline System™: Build Your New Operating System
                        </h2>
                        <p className="text-[#aaa] text-base font-light">
                            A structured habit formation system designed to create discipline through progressive execution across 3 distinct phases.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Phase I */}
                            <div className="border border-[#222] bg-[#101010] p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#ffb400] text-[12px] font-mono mb-2 tracking-wider">Phase I // Days 1–10</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">Internal Integrity: Build Control</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-mono text-[#777] uppercase mb-2">Focus Protocols:</p>
                                            <ul className="space-y-1.5 text-xs text-[#aaa] font-light">
                                                <li>✓ Consistent wake time</li>
                                                <li>✓ Hydration routine</li>
                                                <li>✓ Morning sunlight</li>
                                                <li>✓ Movement practice</li>
                                                <li>✓ Planning system</li>
                                                <li>✓ Attention protection</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#222]">
                                    <span className="text-xs font-mono text-[#ffb400]">Outcome: Develop control over your environment, focus, and daily actions.</span>
                                </div>
                            </div>

                            {/* Phase II */}
                            <div className="border border-[#222] bg-[#101010] p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#ffb400] text-[12px] font-mono mb-2 tracking-wider">Phase II // Days 11–20</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">Physical Baselines: Build Energy</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-mono text-[#777] uppercase mb-2">Focus Protocols:</p>
                                            <ul className="space-y-1.5 text-xs text-[#aaa] font-light">
                                                <li>✓ Strength training</li>
                                                <li>✓ Mobility practice</li>
                                                <li>✓ Nutrition structure</li>
                                                <li>✓ Recovery habits</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#222]">
                                    <span className="text-xs font-mono text-[#ffb400]">Outcome: Create the physical foundation required for long-term performance.</span>
                                </div>
                            </div>

                            {/* Phase III */}
                            <div className="border border-[#222] bg-[#101010] p-8 flex flex-col justify-between">
                                <div>
                                    <div className="text-[#ffb400] text-[12px] font-mono mb-2 tracking-wider">Phase III // Days 21–30</div>
                                    <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-white">Velocity Output: Build Performance</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs font-mono text-[#777] uppercase mb-2">Focus Protocols:</p>
                                            <ul className="space-y-1.5 text-xs text-[#aaa] font-light">
                                                <li>✓ Deep work execution</li>
                                                <li>✓ Productivity systems</li>
                                                <li>✓ Focus protection</li>
                                                <li>✓ Execution consistency</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-[#222]">
                                    <span className="text-xs font-mono text-[#ffb400]">Outcome: Transform discipline into measurable real-world performance.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Daily Discipline Routine™ */}
                    <section className="mb-20 space-y-8" aria-label="Daily Discipline Routine">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            Daily Discipline Routine™
                        </h2>
                        <p className="text-[#aaa] text-base font-light">
                            A structured daily template designed to maintain momentum and eliminate guesswork from execution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-lg font-bold uppercase text-[#ffb400] mb-2 font-mono">Morning Activation</h3>
                                <p className="text-xs text-[#777] uppercase mb-4">Create a strong start.</p>
                                <ul className="space-y-2.5 text-sm text-[#aaa] font-light">
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Hydration</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Sunlight exposure</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Movement</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Breath activation</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Planning</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Focus preparation</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-lg font-bold uppercase text-[#ffb400] mb-2 font-mono">Daily Execution</h3>
                                <p className="text-xs text-[#777] uppercase mb-4">Protect your progress.</p>
                                <ul className="space-y-2.5 text-sm text-[#aaa] font-light">
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Deep work</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Exercise</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Nutrition</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Habit completion</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Attention management</li>
                                </ul>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-lg font-bold uppercase text-[#ffb400] mb-2 font-mono">Evening Reset</h3>
                                <p className="text-xs text-[#777] uppercase mb-4">Prepare for recovery.</p>
                                <ul className="space-y-2.5 text-sm text-[#aaa] font-light">
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Digital shutdown</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Reflection</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Recovery preparation</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Sleep optimisation</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Attention Protection System & Somatic Engineering */}
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" aria-label="Advanced Systems">
                        <div className="border border-[#222] bg-[#101010] p-8 space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-3 font-mono text-[#ffb400]">
                                Attention Protection System™
                            </h2>
                            <p className="text-xs text-[#777] uppercase tracking-wider">Control Your Inputs</p>
                            <p className="text-sm text-[#aaa] font-light leading-relaxed">
                                Your attention determines your direction. The Discipline System protects focus by reducing reactive inputs before completing your core identity actions.
                            </p>
                            <ul className="space-y-2 text-sm text-[#ccc] font-light pt-2">
                                <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Protect Focus</li>
                                <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Protect Energy</li>
                                <li className="flex items-center gap-2"><span className="text-[#ffb400]">✓</span> Protect Mental Clarity</li>
                            </ul>
                        </div>

                        <div className="border border-[#222] bg-[#101010] p-8 space-y-4">
                            <h2 className="text-xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-3 font-mono text-[#ffb400]">
                                Somatic Habit Engineering™
                            </h2>
                            <p className="text-xs text-[#777] uppercase tracking-wider">Discipline Through The Body</p>
                            <p className="text-sm text-[#aaa] font-light leading-relaxed">
                                Discipline is not built through willpower alone. Physical anchors create reliable behaviour triggers.
                            </p>
                            <div className="space-y-1.5 text-xs text-[#ccc] font-mono">
                                <div>• Movement creates activation.</div>
                                <div>• Sunlight creates rhythm.</div>
                                <div>• Breathing creates regulation.</div>
                                <div>• Hydration creates awareness.</div>
                            </div>
                            <p className="text-xs text-[#ffb400] font-light pt-1">Your body becomes part of your discipline system.</p>
                        </div>
                    </section>

                    {/* Comparison Data Matrix */}
                    <section className="mb-20 space-y-6" aria-label="System Comparison Matrix">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            Motivation-Based Effort vs. Identity-Based Systems
                        </h2>
                        <div className="overflow-x-auto border border-[#222]">
                            <table className="w-full text-left font-mono text-xs md:text-sm">
                                <thead className="bg-[#101010] text-[#ffb400] uppercase border-b border-[#222]">
                                    <tr>
                                        <th className="p-4">Execution Vector</th>
                                        <th className="p-4">Motivation-Based Effort</th>
                                        <th className="p-4">Identity-Based System</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#222] text-[#aaa]">
                                    <tr>
                                        <td className="p-4 font-bold text-white">Driver</td>
                                        <td className="p-4 text-[#666]">Temporary Feelings</td>
                                        <td className="p-4 text-[#ffb400]">Structured Behaviours</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-white">Consistency</td>
                                        <td className="p-4 text-[#666]">Unpredictable</td>
                                        <td className="p-4 text-[#ffb400]">Repeatable</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-white">Decision Energy</td>
                                        <td className="p-4 text-[#666]">High (Causes Burnout)</td>
                                        <td className="p-4 text-[#ffb400]">Reduced (Automated)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-white">Outcome</td>
                                        <td className="p-4 text-[#666]">Short-term Bursts</td>
                                        <td className="p-4 text-[#ffb400]">Sustainable Transformation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Benefits Section */}
                    <section className="mb-20 space-y-8" aria-label="Benefits of The Discipline System">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            Benefits Of The Discipline System™
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Build self-discipline",
                                "Build lasting habits",
                                "Improve focus",
                                "Reduce procrastination",
                                "Increase productivity",
                                "Develop accountability",
                                "Strengthen confidence",
                                "Create sustainable routines",
                                "Support human optimization",
                            ].map((benefit, idx) => (
                                <div key={idx} className="border border-[#222] bg-[#101010] p-5 flex items-start gap-3">
                                    <span className="text-[#ffb400] font-bold">✓</span>
                                    <span className="text-sm text-[#ccc] font-light">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Integration Hierarchy Connection */}
                    <section className="border border-[#222] bg-[#101010] p-8 md:p-12 mb-20 space-y-6 text-center" aria-label="System Integration">
                        <h2 className="text-xl md:text-2xl font-bold uppercase text-white tracking-wide">
                            The Discipline System Within Human Optimization
                        </h2>
                        <div className="max-w-2xl mx-auto space-y-4 text-sm text-[#aaa] font-light">
                            <p className="p-3 bg-[#0d0d0d] border border-[#222] text-[#ffb400] font-bold">
                                The Discipline System creates the foundation.
                            </p>
                            <div className="text-[#555]">↓</div>
                            <p className="p-3 bg-[#0d0d0d] border border-[#222]">
                                The Fitness System develops physical capability.
                            </p>
                            <div className="text-[#555]">↓</div>
                            <p className="p-3 bg-[#0d0d0d] border border-[#222]">
                                The Yoga System improves mobility, awareness, and recovery.
                            </p>
                            <div className="text-[#555]">↓</div>
                            <p className="p-3 bg-[#0d0d0d] border border-[#222]">
                                The Mindset System develops resilience and mental performance.
                            </p>
                        </div>
                        <p className="text-white font-mono text-xs uppercase tracking-widest pt-4">
                            Together, they create the NomadLifeXP Human Optimization System.
                        </p>
                    </section>

                    {/* Expanded Frequently Asked Questions */}
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
                                    The Discipline System is the foundation system of the NomadLifeXP Human Optimization System, designed to build self-discipline, lasting habits, and structured daily routines.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How do you build self-discipline?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How long does it take to build lasting habits?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Habit formation depends on behaviour, environment, and consistency. Sustainable change comes through repeated intentional action.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How can I stop relying on motivation?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Motivation changes. Systems create consistency by making important behaviours easier to execute. Motivation fades. Systems endure.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    What are identity-based habits?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Identity-based habits focus on becoming the type of person who naturally performs desired behaviours.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    What is Somatic Habit Engineering?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Somatic Habit Engineering connects physical and physiological triggers with repeatable behaviours to strengthen habit consistency.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Terminal Block */}
                    <section className="border border-[#222] bg-[#0d0d0d] p-10 md:p-16 text-center mb-20 relative overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight text-white">
                            Start Your Evolution
                        </h2>
                        <p className="text-xs font-mono text-[#ffb400] uppercase tracking-widest mb-4">
                            Begin The Discipline System™
                        </p>
                        <p className="text-[#aaa] text-sm md:text-base max-w-[700px] mx-auto leading-relaxed font-light mb-8">
                            Build the foundation required for your Human Optimization journey. Create the systems. Build the habits. Transform your identity.
                        </p>
                        <Link
                            href="#thirty-day-system"
                            className="inline-block bg-[#ffb400] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                        >
                            Begin Phase I →
                        </Link>
                    </section>

                </div>
            </div>
        </>
    );
}