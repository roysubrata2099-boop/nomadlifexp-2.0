import type { Metadata } from "next";
import Link from "next/link";

/**
 * Hardened Production SEO Metadata Block
 */
export const metadata: Metadata = {
    title: "Somatic Habit Engineering & Discipline System | NomadLifeXP",
    description:
        "A rigid framework designed to remove decision fatigue by automating daily physical, mental, and behavioral systems.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline-system",
    },
    openGraph: {
        title: "Discipline System & Somatic Habit Engineering Protocol | NomadLifeXP",
        description:
            "A rigid framework designed to remove decision fatigue by automating daily physical, mental, and behavioral systems.",
        url: "https://nomadlifexp.com/discipline-system",
        type: "website",
    },
};

/**
 * Strict Route Isolation Constraints
 * Explicitly forces the Edge CDN layer to bypass sticky layout caches,
 * ensuring zero bleed over into the dynamic dynamic /blog/posts/[slug] paths.
 */
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

interface PageProps {
    params: Promise<Record<string, string | string[] | undefined>>;
    searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function DisciplineSystemPage(props: PageProps) {
    // Await structural route parameters to satisfy Next.js 15 asynchronous typings
    await props.params;
    await props.searchParams;

    return (
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
                    <h1 className="text-4xl md:text-[64px] font-black leading-none mb-7 tracking-tight uppercase">
                        The Discipline System<br />
                        <span className="text-[#ffb400]">Habit Engineering for High Output</span>
                    </h1>
                    <p className="text-[#aaa] max-w-[750px] text-lg md:text-xl font-light leading-relaxed">
                        A rigid framework designed to remove decision fatigue by automating daily physical, mental, and behavioral systems.
                    </p>
                </header>

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
                            <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Internal Integrity</h3>
                            <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                Morning habits establish cognitive stability and eliminate reactive behavior before the day begins.
                            </p>
                        </div>
                    </article>

                    {/* Phase II */}
                    <article className="border border-[#222] bg-[#101010] p-9 transition-all duration-200 hover:border-[#ffb400] hover:-translate-y-1.5 flex flex-col justify-between">
                        <div>
                            <div className="text-[#ffb400] text-[12px] font-mono mb-4 tracking-wider">
                                Phase II // SYS_02
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Physical Anchor</h3>
                            <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                Daily movement becomes a permanent structural baseline that supports energy and resilience.
                            </p>
                        </div>
                    </article>

                    {/* Phase III */}
                    <article className="border border-[#222] bg-[#101010] p-9 transition-all duration-200 hover:border-[#ffb400] hover:-translate-y-1.5 flex flex-col justify-between">
                        <div>
                            <div className="text-[#ffb400] text-[12px] font-mono mb-4 tracking-wider">
                                Phase III // SYS_03
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Velocity Output</h3>
                            <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                The combination of mental clarity and physical stability produces consistent high-value execution.
                            </p>
                        </div>
                    </article>
                </section>

                {/* Secure Parameter Console Module */}
                <section
                    className="border border-[#222] p-10 mb-20 bg-transparent relative"
                    aria-label="Execution Rules Matrix"
                >
                    <div className="text-[#777] font-mono mb-9 uppercase tracking-wider text-xs select-none">
                        {"// Non-Negotiable Execution Parameters"}
                    </div>

                    <div className="space-y-0 divide-y divide-[#222]">
                        {/* Parameter 01 */}
                        <div className="py-7 first:pt-0 border-t border-transparent">
                            <h3 className="text-white font-mono font-bold text-lg mb-2.5 uppercase tracking-wide">
                                01 / Attention Protection
                            </h3>
                            <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                No social media, news, or messaging before completing the morning protocol.
                            </p>
                        </div>

                        {/* Parameter 02 */}
                        <div className="py-7">
                            <h3 className="text-white font-mono font-bold text-lg mb-2.5 uppercase tracking-wide">
                                02 / Physical Baselines
                            </h3>
                            <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                Exercise, hydration, mobility, and nutrition become fixed daily anchors rather than optional tasks.
                            </p>
                        </div>

                        {/* Parameter 03 */}
                        <div className="py-7 last:pb-0">
                            <h3 className="text-white font-mono font-bold text-lg mb-2.5 uppercase tracking-wide">
                                03 / Evening Shutdown
                            </h3>
                            <p className="text-[#aaa] text-sm md:text-base leading-relaxed font-light">
                                Reduce digital stimulation and review the day before entering recovery and sleep.
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
                    {/* 🛡️ 100% FIXED: Placed valid target route destination framework linking to /start-here */}
                    <Link
                        href="/start-here"
                        className="inline-block mt-10 px-9 py-4 border border-[#ffb400] text-[#ffb400] uppercase text-sm tracking-[2px] no-underline font-semibold transition-all duration-200 hover:bg-[#ffb400] hover:text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        {"Initialize Discipline \u2192"}
                    </Link>
                </section>

            </div>
        </div>
    );
}