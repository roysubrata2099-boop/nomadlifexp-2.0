import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";
const PAGE_URL = `${SITE_URL}/discipline-system`;

/**
 * Production SEO Metadata Block (Optimized for Search Intent & Branding)
 */
export const metadata: Metadata = {
    title: "The Discipline System | Build Self-Discipline & Lasting Habits",
    description:
        "Build self-discipline, lasting habits, focus, and consistent routines with the NomadLifeXP Discipline System—a structured framework for behaviour change and human optimization.",
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
        "NomadLifeXP"
    ],
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "The Discipline System | Build Self-Discipline & Lasting Habits",
        description:
            "A structured framework for behaviour change, habit formation, and human optimization.",
        url: PAGE_URL,
        siteName: "NomadLifeXP",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Discipline System | Build Self-Discipline & Lasting Habits",
        description:
            "A foundation system for human optimization through structured routines, focus, and behaviour change.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

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
            "@id": `${PAGE_URL}#webpage`,
            "url": PAGE_URL,
            "name": "The Discipline System | Build Self-Discipline & Lasting Habits",
            "inLanguage": "en-US",
            "isPartOf": {
                "@id": `${SITE_URL}/#website`
            }
        },
        {
            "@type": "Service",
            "@id": `${PAGE_URL}#service`,
            "name": "The Discipline System",
            "provider": {
                "@id": `${SITE_URL}/#organization`
            },
            "description": "The foundation system of the NomadLifeXP Human Optimization System — a framework designed to build lasting habits, structured routines, and behavioural patterns."
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
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
                        "text": "Habit formation depends on behaviour, environment, and consistency. Sustainable change comes through repeated intentional action rather than fixed day counts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I stop relying on motivation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Motivation changes constantly. Systems create consistency by making important behaviours easier to execute. Motivation fades; systems endure."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What are identity-based habits?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Identity-based habits focus on becoming the type of person who naturally performs desired behaviours through repeated evidence."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is Somatic Habit Engineering?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "NomadLifeXP's framework for connecting physical and physiological triggers—such as movement and breath control—with repeatable behaviours to anchor habit consistency."
                    }
                }
            ]
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${PAGE_URL}#breadcrumb`,
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
                    "@id": `${SITE_URL}/#listItem`,
                    "position": 2,
                    "name": "Discipline System",
                    "item": PAGE_URL,
                }
            ]
        }
    ]
};

export default function DisciplineSystemPage() {
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

                        <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black leading-[1.05] tracking-tight uppercase mb-7">
                            The Discipline System™:<br />
                            <span className="text-[#ffb700]">The Foundation System of Human Optimization</span>
                        </h1>

                        <p className="text-[#a7f3d0] max-w-[800px] text-lg md:text-xl font-light leading-relaxed mb-6 uppercase tracking-wide">
                            Build Self-Discipline. Build Lasting Habits. Transform Your Identity.
                        </p>

                        <div className="bg-[#0f172a] border-l-2 border-[#ffb700] p-6 md:p-8 max-w-[850px] my-8 space-y-4">
                            <p className="text-[#dbeafe] text-base md:text-lg leading-relaxed font-light">
                                The Discipline System is a structured framework for developing consistency, improving focus, and creating lasting behavioural change as the core foundation of the NomadLifeXP Human Optimization System.
                            </p>
                            <p className="text-white font-semibold italic text-sm md:text-base border-l border-[#ffb700] pl-4 py-1">
                                Stop relying on motivation. Motivation fades. Systems endure.
                            </p>
                            <p className="text-[#ffb700] font-mono uppercase text-sm tracking-widest font-bold pt-2">
                                Build the operational systems that make disciplined action your natural state.
                            </p>
                        </div>

                        <div className="mt-8">
                            <Link
                                href="#thirty-day-system"
                                className="inline-block bg-[#ffb700] text-black font-mono font-bold uppercase text-sm tracking-wider px-8 py-4 hover:bg-white transition-colors duration-200"
                            >
                                Explore The Implementation Protocol →
                            </Link>
                        </div>
                    </header>

                    {/* What Is The Discipline System? */}
                    <section className="mb-20 space-y-6 border border-[#1e293b] bg-[#0f172a] p-8 md:p-12" aria-label="What Is The Discipline System">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                            What Is The Discipline System?
                        </h2>
                        <p className="text-[#a7f3d0] text-base md:text-lg font-light leading-relaxed">
                            It is a dedicated framework built to help you master consistency, eliminate friction, and reshape your behavioral architecture through structured daily execution.
                        </p>
                        <p className="text-sm font-mono text-[#94a3b8] uppercase tracking-wider">The framework integrates:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-[#dbeafe] font-light">
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Identity-based habit design</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Systematic environmental setup</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Daily execution routines</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Somatic habit engineering</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Attention protection layers</li>
                            <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Progressive behaviour protocols</li>
                        </ul>
                        <div className="pt-4 border-t border-[#1e293b] space-y-2">
                            <p className="text-white font-medium text-sm md:text-base">Real transformation is never created through temporary emotional surges.</p>
                            <p className="text-[#ffb700] text-sm md:text-base font-light">It is achieved through systems that reshape actions, anchor identity, and expand execution bandwidth.</p>
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
                                    Human optimization begins with absolute control over daily behaviour. Before targeting physical conditioning, recovery, mental performance, or complex growth metrics, you must lock down the baseline framework controlling your everyday actions.
                                </p>
                                <p className="text-xs font-mono text-[#94a3b8] uppercase">Before scaling:</p>
                                <ul className="space-y-2 text-xs md:text-sm text-[#dbeafe] font-light">
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Physical performance & strength</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Cellular and systemic recovery</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Advanced cognitive output</li>
                                    <li className="flex items-center gap-2"><span className="text-[#ffb700]">✓</span> Long-term lifestyle scaling</li>
                                </ul>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 text-center font-mono space-y-3">
                                <div className="text-xs text-[#64748b] uppercase tracking-widest">// System Hierarchy</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white text-sm uppercase">HUMAN EVOLUTION</div>
                                <div className="text-[#94a3b8]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#1e293b] text-white text-sm uppercase">HUMAN OPTIMIZATION SYSTEM</div>
                                <div className="text-[#94a3b8]">↑</div>
                                <div className="p-3 bg-[#0d0d0d] border border-[#ffb700] text-black font-bold text-sm uppercase bg-[#ffb700]">DISCIPLINE SYSTEM (FOUNDATION)</div>
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
                            <p className="text-sm font-mono text-[#ffb700] uppercase tracking-widest mt-1">The Interconnected Operating Model</p>
                        </div>
                        <p className="text-[#a7f3d0] text-base font-light">
                            DISCIPLINE operates as an integrated architecture: each layer reinforces the next, seamlessly moving from routine design and identity mapping to physiological triggers, environmental layout, and long-term evolution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">D — DAILY STRUCTURE</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Eradicate Fatigue</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Build rigid morning routines, planning blocks, and evening reset checklists to eliminate decision fatigue.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">I — IDENTITY ALIGNMENT</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Shape Core Persona</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Let repeated daily actions serve as literal empirical evidence of the person you are actively choosing to become.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">S — SOMATIC ANCHORS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Physiological Cues</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">NomadLifeXP calls this Somatic Habit Engineering: utilizing movement, hydration, and environmental exposure as physical anchors for habit execution.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">C — COGNITIVE CONTROL</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Protect Attention</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Aggressively shield mental energy by minimizing digital distractions, reactive inputs, and unnecessary micro-choices.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">I — INTENTIONAL EXECUTION</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Velocity Output</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Translate high-level targets into strict, uncompromising deep-work blocks and focus schedules.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">P — PHYSICAL FOUNDATIONS</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Cellular Support</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Back your behavioural discipline with structured physical movement, targeted nutrition, and rigorous recovery cycles.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">L — LIFESTYLE DESIGN</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Environment Architecture</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Modify your physical and digital surroundings so that desired actions take minimal activation energy.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">I — INTERNAL INTEGRITY</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Unyielding Self-Trust</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Build compounding self-respect by strictly keeping minor, non-negotiable commitments made to yourself.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">N — NEURAL REINFORCEMENT</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Wiring Pathways</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Strengthen neuro-pathways through mechanical consistency, making positive habits automated over time.</p>
                            </div>

                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 md:col-span-3">
                                <div className="text-[#ffb700] font-mono text-xs mb-2 font-bold tracking-widest">E — EVOLUTION PROTOCOL</div>
                                <h3 className="text-lg font-bold uppercase text-white mb-2">Recursive Scaling</h3>
                                <p className="text-xs md:text-sm text-[#a7f3d0] font-light">Continuously review, audit, and optimize your systems for lifelong human development and upward progression.</p>
                            </div>
                        </div>
                    </section>

                    {/* The 30-Day Implementation Protocol */}
                    <section id="thirty-day-system" className="mb-20 space-y-8" aria-label="30-Day Implementation Protocol">
                        <div className="border-b border-[#1e293b] pb-4">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                                The 30-Day Implementation Protocol
                            </h2>
                            <p className="text-sm font-mono text-[#ffb700] uppercase tracking-widest mt-1">A Structured System Deployment Sequence</p>
                        </div>
                        <p className="text-[#a7f3d0] text-base font-light">
                            This 30-day block serves as an intensive onboarding phase to install the system components. It is an implementation structure—not a guarantee of overnight transformation.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Phase I */}
                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[#ffb700] text-[12px] font-mono mb-1 tracking-wider">Phase I // Internal Integrity</div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Establish Control</h3>
                                    <p className="text-xs font-mono text-[#94a3b8] uppercase mb-4">Days 1–10</p>
                                    <p className="text-xs font-mono text-[#a7f3d0] uppercase mb-2">Core Focus:</p>
                                    <ul className="space-y-2 text-xs text-[#dbeafe] font-light mb-6">
                                        <li>✓ Non-negotiable wake times</li>
                                        <li>✓ Immediate morning hydration</li>
                                        <li>✓ Natural sunlight synchronization</li>
                                        <li>✓ Somatic anchor introduction</li>
                                        <li>✓ Daily planning systems</li>
                                    </ul>
                                </div>
                                <div className="border-t border-[#1e293b] pt-4">
                                    <p className="text-[11px] font-mono text-[#ffb700] uppercase mb-1">Milestone Outcome:</p>
                                    <p className="text-xs text-[#a7f3d0] font-light">Mastery over morning friction, basic inputs, and self-trust anchors.</p>
                                </div>
                            </div>

                            {/* Phase II */}
                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[#ffb700] text-[12px] font-mono mb-1 tracking-wider">Phase II // Physical Baselines</div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Optimize Energy</h3>
                                    <p className="text-xs font-mono text-[#94a3b8] uppercase mb-4">Days 11–20</p>
                                    <p className="text-xs font-mono text-[#a7f3d0] uppercase mb-2">Core Focus:</p>
                                    <ul className="space-y-2 text-xs text-[#dbeafe] font-light mb-6">
                                        <li>✓ Resistance training consistency</li>
                                        <li>✓ Mobility & movement routines</li>
                                        <li>✓ Targeted nutritional structures</li>
                                        <li>✓ Sleep hygiene optimization</li>
                                    </ul>
                                </div>
                                <div className="border-t border-[#1e293b] pt-4">
                                    <p className="text-[11px] font-mono text-[#ffb700] uppercase mb-1">Milestone Outcome:</p>
                                    <p className="text-xs text-[#a7f3d0] font-light">Robust biological stamina required to power high-output execution.</p>
                                </div>
                            </div>

                            {/* Phase III */}
                            <div className="border border-[#1e293b] bg-[#0f172a] p-8 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="text-[#ffb700] text-[12px] font-mono mb-1 tracking-wider">Phase III // Velocity Output</div>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">Scale Performance</h3>
                                    <p className="text-xs font-mono text-[#94a3b8] uppercase mb-4">Days 21–30</p>
                                    <p className="text-xs font-mono text-[#a7f3d0] uppercase mb-2">Core Focus:</p>
                                    <ul className="space-y-2 text-xs text-[#dbeafe] font-light mb-6">
                                        <li>✓ Deep work blocks</li>
                                        <li>✓ Output tracking systems</li>
                                        <li>✓ Focus-shielding rules</li>
                                        <li>✓ Uninterrupted workflow execution</li>
                                    </ul>
                                </div>
                                <div className="border-t border-[#1e293b] pt-4">
                                    <p className="text-[11px] font-mono text-[#ffb700] uppercase mb-1">Milestone Outcome:</p>
                                    <p className="text-xs text-[#a7f3d0] font-light">Converting structured discipline into tangible, high-leverage work output.</p>
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
                            <p className="text-sm font-mono text-[#ffb700] uppercase tracking-widest mt-1">The Mechanical Daily Anchors</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-3">
                                <h3 className="text-lg font-bold uppercase text-[#ff0055]">Morning Activation (06:00 – 09:00)</h3>
                                <ul className="space-y-2 text-xs md:text-sm text-[#dbeafe] font-light">
                                    <li>✓ Immediate physical get-up with zero snooze</li>
                                    <li>✓ 10-minute natural outdoor light exposure</li>
                                    <li>✓ Somatic movement & breath activation</li>
                                    <li>✓ Uninterrupted deep work execution block</li>
                                </ul>
                            </div>
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-3">
                                <h3 className="text-lg font-bold uppercase text-[#00f0ff]">Evening Reset (20:00 – 22:00)</h3>
                                <ul className="space-y-2 text-xs md:text-sm text-[#dbeafe] font-light">
                                    <li>✓ Digital sunset & communication blackout</li>
                                    <li>✓ Pre-layout of physical workspace for tomorrow</li>
                                    <li>✓ Self-integrity audit against daily commitments</li>
                                    <li>✓ Complete neurological cool-down for rest</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Core FAQ Section */}
                    <section className="mb-20 space-y-8" aria-label="FAQ">
                        <div className="border-b border-[#1e293b] pb-4">
                            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="space-y-4">
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-base font-bold text-white uppercase">How do you build self-discipline?</h3>
                                <p className="text-sm text-[#a7f3d0] font-light">Self-discipline develops through structured routines, repeated actions, reduced distractions, and systems that reinforce identity.</p>
                            </div>
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-base font-bold text-white uppercase">How long does it take to build lasting habits?</h3>
                                <p className="text-sm text-[#a7f3d0] font-light">Habit formation depends on behaviour, environment, and consistency. Sustainable change comes through repeated intentional action rather than fixed day counts.</p>
                            </div>
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-base font-bold text-white uppercase">How can I stop relying on motivation?</h3>
                                <p className="text-sm text-[#a7f3d0] font-light">Motivation changes constantly. Systems create consistency by making important behaviours easier to execute. Motivation fades; systems endure.</p>
                            </div>
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-base font-bold text-white uppercase">What are identity-based habits?</h3>
                                <p className="text-sm text-[#a7f3d0] font-light">Identity-based habits focus on becoming the type of person who naturally performs desired behaviours through repeated evidence.</p>
                            </div>
                            <div className="border border-[#1e293b] bg-[#0f172a] p-6 space-y-2">
                                <h3 className="text-base font-bold text-white uppercase">What is Somatic Habit Engineering?</h3>
                                <p className="text-sm text-[#a7f3d0] font-light">NomadLifeXP's framework for connecting physical and physiological triggers—such as movement and breath control—with repeatable behaviours to anchor habit consistency.</p>
                            </div>
                        </div>
                    </section>

                    {/* Footer CTA */}
                    <footer className="py-12 border-t border-[#1e293b] text-center space-y-4 mb-10">
                        <p className="text-xs font-mono text-[#94a3b8] uppercase tracking-widest">NomadLifeXP Human Optimization Engine</p>
                        <p className="text-sm text-[#a7f3d0]">Ready to deploy your optimization framework?</p>
                        <div>
                            <Link
                                href="/"
                                className="inline-block text-[#ffb700] hover:text-white font-mono text-sm uppercase tracking-wider transition-colors duration-200"
                            >
                                ← Return to System Dashboard
                            </Link>
                        </div>
                    </footer>

                </div>
            </div>
        </>
    );
}

