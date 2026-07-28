import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";

/**
 * Hardened Production SEO Metadata Block
 */
export const metadata: Metadata = {
    title: "The Discipline System: Build Habits That Shape Your Identity | NomadLifeXP",
    description:
        "Transform your identity through embodied habits, structured routines, and practical systems that build lasting self-discipline and unlock your highest potential.",
    keywords: [
        "The Discipline System",
        "Build Habits That Shape Your Identity",
        "Somatic Habit Engineering",
        "Practical Systems Self Discipline",
        "Embodied Habits Framework",
        "Eliminate Decision Fatigue",
        "Cognitive Architecture",
        "NomadLifeXP Discipline",
    ],
    alternates: {
        canonical: `${SITE_URL}/discipline-system`,
    },
    openGraph: {
        title: "The Discipline System: Build the Habits That Shape Your Identity | NomadLifeXP",
        description:
            "Transform your identity through embodied habits, structured routines, and practical systems that build lasting self-discipline and unlock your highest potential.",
        url: `${SITE_URL}/discipline-system`,
        siteName: "NomadLifeXP",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Discipline System: Build the Habits That Shape Your Identity",
        description:
            "Transform your identity through embodied habits, structured routines, and practical systems that build lasting self-discipline.",
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
 * Strict Route Isolation Constraints
 * Explicitly forces the Edge CDN layer to bypass sticky layout caches,
 * ensuring zero bleed over into the dynamic /blog/posts/[slug] paths.
 */
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

interface PageProps {
    params: Promise<Record<string, string | string[] | undefined>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

// Multi-layered Schema Markup for Search Engines
const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${SITE_URL}/discipline-system#article`,
            "headline": "The Discipline System: Build the Habits That Shape Your Identity",
            "description":
                "Transform your identity through embodied habits, structured routines, and practical systems that build lasting self-discipline and unlock your highest potential.",
            "url": `${SITE_URL}/discipline-system`,
            "inLanguage": "en-US",
            "mainEntityOfPage": `${SITE_URL}/discipline-system`,
            "author": {
                "@type": "Organization",
                "name": "NomadLifeXP",
                "url": SITE_URL,
            },
            "publisher": {
                "@type": "Organization",
                "name": "NomadLifeXP",
                "url": SITE_URL,
            },
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/discipline-system#faq`,
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How do habits shape identity?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Every action you perform is a vote for the type of person you wish to become. By building structured routines and embodied habits, you solidify self-discipline at an identity level.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "What is Somatic Habit Engineering?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Somatic Habit Engineering grounds daily execution in physical, neurological, and physiological triggers rather than relying on volatile mental willpower or motivation.",
                    },
                },
                {
                    "@type": "Question",
                    "name": "How does Habit Engineering eliminate decision fatigue?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "By executing non-negotiable, pre-scripted physical baselines and time-blocked triggers, choice is removed from daily operations, preserving cognitive capacity for deep work.",
                    },
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SITE_URL,
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Index",
                    "item": `${SITE_URL}/blog`,
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Discipline System",
                    "item": `${SITE_URL}/discipline-system`,
                },
            ],
        },
    ],
};

export default async function DisciplineSystemPage(props: PageProps) {
    // Await structural route parameters to satisfy Next.js 15 asynchronous typings
    await props.params;
    await props.searchParams;

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
                            href="/blog"
                            className="text-[#999] hover:text-[#ffb400] no-underline transition-colors duration-200"
                        >
                            Index
                        </Link>
                    </nav>

                    {/* Hero Layout Frame */}
                    <header className="py-20 max-w-5xl">
                        <p className="text-[#ffb400] text-[12px] tracking-[4px] uppercase mb-5 font-mono">
                            NomadLifeXP // Somatic Life Architecture
                        </p>
                        <h1 className="text-4xl md:text-[60px] font-black leading-tight mb-7 tracking-tight uppercase">
                            The Discipline System:<br />
                            <span className="text-[#ffb400]">Build the Habits That Shape Your Identity</span>
                        </h1>
                        <p className="text-[#aaa] max-w-[800px] text-lg md:text-xl font-light leading-relaxed">
                            Transform your identity through embodied habits, structured routines, and practical systems that build lasting self-discipline and unlock your highest potential.
                        </p>
                    </header>

                    {/* Science & Theory Node */}
                    <section className="mb-20 space-y-8" aria-label="Identity and Habit Engineering Theory">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            How Systems Shift Your Core Identity
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-xl font-bold uppercase text-[#ffb400] mb-3">
                                    Identity-Based Habit Formation
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Lasting change does not stem from outcome goals; it stems from identity shifts. Every repeated system proves your capability to yourself, converting conscious effort into automated baseline discipline.
                                </p>
                            </div>
                            <div className="border border-[#222] bg-[#101010] p-8">
                                <h3 className="text-xl font-bold uppercase text-[#ffb400] mb-3">
                                    Somatic Anchor Mechanics
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Habit Engineering links your desired mental state to physical anchors—movement, hydration, breath, and light exposure—eliminating decision friction and preserving daily executive energy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* System Phase Matrix Layout */}
                    <section
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20"
                        aria-label="Operational Phase Protocols"
                    >
                        {/* Phase I */}
                        <article className="border border-[#222] bg-[#101010] p-9 transition-all duration-200 hover:border-[#ffb400] hover:-translate-y-1.5 flex flex-col justify-between">
                            <div>
                                <div className="text-[#ffb400] text-[12px] font-mono mb-4 tracking-wider">
                                    Phase I // SYS_01
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                                    Internal Integrity
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Establish morning grounding protocols that eliminate early-day cognitive friction and anchor mental clarity.
                                </p>
                            </div>
                        </article>

                        {/* Phase II */}
                        <article className="border border-[#222] bg-[#101010] p-9 transition-all duration-200 hover:border-[#ffb400] hover:-translate-y-1.5 flex flex-col justify-between">
                            <div>
                                <div className="text-[#ffb400] text-[12px] font-mono mb-4 tracking-wider">
                                    Phase II // SYS_02
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                                    Physical Baselines
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Convert physical health, daily movement, and energy management into non-negotiable structural routines.
                                </p>
                            </div>
                        </article>

                        {/* Phase III */}
                        <article className="border border-[#222] bg-[#101010] p-9 transition-all duration-200 hover:border-[#ffb400] hover:-translate-y-1.5 flex flex-col justify-between">
                            <div>
                                <div className="text-[#ffb400] text-[12px] font-mono mb-4 tracking-wider">
                                    Phase III // SYS_03
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">
                                    Velocity Output
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Synthesize mental stability and physical baseline habits to maintain long-term execution and high potential.
                                </p>
                            </div>
                        </article>
                    </section>

                    {/* Secure Parameter Console Module */}
                    <section
                        className="border border-[#222] p-10 mb-20 bg-transparent relative"
                        aria-label="Execution Rules Matrix"
                    >
                        <h2 className="text-[#777] font-mono mb-9 uppercase tracking-wider text-xs select-none">
                            {"// Non-Negotiable System Execution Parameters"}
                        </h2>

                        <div className="space-y-0 divide-y divide-[#222]">
                            {/* Parameter 01 */}
                            <div className="py-7 first:pt-0 border-t border-transparent">
                                <h3 className="text-white font-mono font-bold text-lg mb-2.5 uppercase tracking-wide">
                                    01 / Attention Protection
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Zero reactive inputs (social media, notifications, news) before completing your core morning identity habit.
                                </p>
                            </div>

                            {/* Parameter 02 */}
                            <div className="py-7">
                                <h3 className="text-white font-mono font-bold text-lg mb-2.5 uppercase tracking-wide">
                                    02 / Embodied Anchors
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Physical movement, hydration, and deliberate sunlight exposure act as fixed daily execution anchors.
                                </p>
                            </div>

                            {/* Parameter 03 */}
                            <div className="py-7 last:pb-0">
                                <h3 className="text-white font-mono font-bold text-lg mb-2.5 uppercase tracking-wide">
                                    03 / Cognitive Offload & Shutdown
                                </h3>
                                <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                    Formal digital disconnect and daily review protocol to optimize sleep recovery and cognitive reset.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Comparison Data Matrix for Featured Snippets */}
                    <section className="mb-20 space-y-6" aria-label="System Comparison Matrix">
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white border-b border-[#222] pb-4">
                            Motivation-Based Effort vs. Identity-Based Systems
                        </h2>
                        <div className="overflow-x-auto border border-[#222]">
                            <table className="w-full text-left font-mono text-xs md:text-sm">
                                <thead className="bg-[#101010] text-[#ffb400] uppercase border-b border-[#222]">
                                    <tr>
                                        <th className="p-4">Execution Vector</th>
                                        <th className="p-4">Traditional Motivation</th>
                                        <th className="p-4">Identity-Based Systems</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#222] text-[#aaa]">
                                    <tr>
                                        <td className="p-4 font-bold text-white">Driver</td>
                                        <td className="p-4 text-[#666]">Temporary Feelings & Mood</td>
                                        <td className="p-4 text-[#ffb400]">Pre-Scripted Habits & Identity</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-white">Decision Energy</td>
                                        <td className="p-4 text-[#666]">High (Causes Exhaustion)</td>
                                        <td className="p-4 text-[#ffb400]">Zero (Automated Baseline)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-bold text-white">Outcome</td>
                                        <td className="p-4 text-[#666]">Inconsistent Bursts</td>
                                        <td className="p-4 text-[#ffb400]">Sustained High Potential</td>
                                    </tr>
                                </tbody>
                            </table>
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
                                    How do habits shape your identity?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Habits provide physical proof of who you are. Repeating structured routines reinforces your self-belief, moving you from trying to be disciplined to operating as a disciplined person.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    What is Somatic Habit Engineering?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Somatic Habit Engineering grounds daily routines in physical and physiological triggers rather than relying on volatile mental willpower or changing motivation levels.
                                </p>
                            </div>

                            <div className="border border-[#222] bg-[#101010] p-6">
                                <h3 className="text-lg font-bold text-white uppercase mb-2">
                                    How fast can I unlock my potential with this system?
                                </h3>
                                <p className="text-sm md:text-base text-[#aaa] font-light leading-relaxed">
                                    Phase I (Internal Integrity) stabilizes within 24 to 48 hours. Full somatic habit automation across all 3 phases consolidates within 21 to 30 days of consistent execution.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Execution Network Sync Terminal Block */}
                    <section className="border border-[#222] bg-[#0d0d0d] p-10 md:p-16 text-center mb-20 relative overflow-hidden">
                        <h2 className="text-3xl md:text-4xl font-black mb-5 uppercase tracking-tight text-white">
                            Sync With the Execution Network
                        </h2>
                        <p className="text-[#aaa] text-sm md:text-base max-w-[700px] mx-auto leading-relaxed font-light">
                            Build discipline by creating repeatable systems instead of depending on motivation. Every protocol strengthens identity through consistent execution.
                        </p>
                        <Link
                            href="/start-here"
                            className="inline-block mt-10 px-9 py-4 border border-[#ffb400] text-[#ffb400] uppercase text-sm tracking-[2px] no-underline font-semibold transition-all duration-200 hover:bg-[#ffb400] hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                            {"Initialize Discipline \u2192"}
                        </Link>
                    </section>

                </div>
            </div>
        </>
    );
}