import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Somatic Habit Engineering & Discipline System | NomadLifeXP",
    description: "Eliminate decision fatigue through strict systemic execution. Deconstruct cognitive biases and establish non-negotiable physical and structural baselines.",
    alternates: {
        canonical: "https://nomadlifexp.com/discipline-system",
    },
    openGraph: {
        title: "Somatic Habit Engineering & Discipline System | | NomadLifeXP",
        description: "Eliminate decision fatigue through strict systemic execution.",
        url: "https://nomadlifexp.com/discipline-system",
        type: "website",
    },
};

export default function DisciplineSystemPage() {
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="w-full max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-16 bg-[#060b18] text-white antialiased flex flex-col items-center justify-start">

                {/* TOPICAL AUTHORITY HEADER */}
                <header className="space-y-4 w-full text-center flex flex-col items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.25em] font-medium block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                        Somatic Life Architecture
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight fiery-glow-text">
                        The Discipline System: <br />
                        <span className="opacity-60 text-sm md:text-2xl font-light tracking-widest block mt-2" style={{ color: 'var(--text-muted, #94a3b8)' }}>Habit Engineering for High Output</span>
                    </h1>
                    <p className="font-light text-sm sm:text-base max-w-2xl leading-relaxed mx-auto text-center" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        A rigid framework designed to remove decision fatigue. By automating daily physical and cognitive baselines, attention remains allocated strictly toward intentional, high-leverage execution.
                    </p>
                </header>

                <div className="w-full border-b border-white/5" />

                {/* THREE-COLUMN SYSTEM MATRIX (Text-Centered Alignment) */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                        { phase: "Phase I", title: "Internal Integrity", href: "/mindset", label: "cognitive focus controls", body: "Fixing non-negotiable daily baselines to establish morning momentum. Read our analysis on isolating " },
                        { phase: "Phase II", title: "Physical Anchor", href: "/fitness", label: "metabolic training configurations", body: "Integrating proactive kinetic sequences straight into neural networks. Review our active " },
                        { phase: "Phase III", title: "Velocity Output", href: "/yoga", label: "somatic feedback loops", body: "Channeling pristine physiological alignment directly into complex technical execution via real-time " }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="border border-white/5 bg-[#0b132b]/40 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center justify-start space-y-3 transition-all duration-300 hover:border-cyan-500/20 shadow-[0_4px_25px_rgba(0,0,0,0.3)] text-center"
                        >
                            <span className="text-xs uppercase tracking-widest font-bold block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>{item.phase}</span>
                            <h2 className="text-white text-base font-bold tracking-tight">{item.title}</h2>
                            <p className="text-sm font-light leading-relaxed text-center" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                {item.body}
                                <Link href={item.href} className="underline underline-offset-4 transition-colors text-white hover:text-cyan-400">
                                    {item.label}
                                </Link>.
                            </p>
                        </div>
                    ))}
                </section>

                {/* CORE PROTOCOL LIST WITH DEEP SILO LINKING (Text-Centered Alignment) */}
                <section className="w-full border border-white/5 bg-[#0b132b]/40 backdrop-blur-sm p-8 space-y-8 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-center flex flex-col items-center">
                    <span className="text-xs uppercase tracking-[0.25em] font-bold block text-center" style={{ color: 'var(--glow-amber, #f59e0b)' }}>
                        // Non-Negotiable Execution Parameters
                    </span>
                    <div className="space-y-8 divide-y divide-white/5 w-full">
                        {coreProtocols.map((protocol, index) => (
                            <div key={protocol.rule} className={`space-y-3 group text-center flex flex-col items-center ${index !== 0 ? 'pt-6' : ''}`}>
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:text-cyan-400 transition-colors duration-300 w-full text-center">
                                    {protocol.rule}
                                </h3>
                                <p className="text-sm font-light leading-relaxed max-w-3xl text-center" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                                    {protocol.desc}{" "}
                                    <Link href={protocol.targetHref} className="text-xs tracking-wider inline-flex items-center justify-center gap-1 transition-all ml-1 font-medium hover:text-white" style={{ color: 'var(--glow-cyan, #06b6d4)' }}>
                                        View Architecture Node <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">↗</span>
                                    </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* TRUST SIGNALS & COMMUNITY CONVERSION ENGINE */}
                <section className="w-full border border-white/5 p-8 space-y-6 bg-[#0b132b]/20 rounded-xl backdrop-blur-sm text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                    <div className="space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black block" style={{ color: 'var(--glow-amber, #f59e0b)' }}>Collective Synchronization</span>
                        <h2 className="text-lg text-white font-bold tracking-tight uppercase">Sync With the Execution Network</h2>
                        <p className="text-sm font-light leading-relaxed max-w-xl mx-auto text-center" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                            We compile raw biometric structures, workflow optimization scripts, and somatic baseline reviews into periodic tactical logs. Join an elite pool of operators executing around the globe.
                        </p>
                    </div>

                    <div className="pt-2 w-full max-w-xs">
                        <Link
                            href="https://youtube.com/@nomadlifexp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-neutral-200 transition-colors text-center"
                        >
                            Join the Execution Channel
                        </Link>
                    </div>
                </section>

                {/* LINEAR DIRECTORY LINKAGE FOOTER */}
                <footer className="w-full flex flex-col sm:flex-row gap-6 items-center justify-between pt-8 border-t border-white/5 text-center sm:text-left">
                    <span className="text-sm font-light" style={{ color: 'var(--text-muted, #94a3b8)' }}>
                        Review detailed case studies on our complete database.
                    </span>
                    <Link href="/blog" className="text-xs uppercase tracking-widest transition-colors font-bold hover:text-cyan-400" style={{ color: 'var(--glow-cyan, #06b6d4)' }}>
                        Read System Logs →
                    </Link>
                </footer>

            </div>
        </>
    );
}