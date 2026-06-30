// src/app/join/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Network Synchronization // Evolve in Motion | NomadLifeXP",
    description: "Establish encrypted node link. Access raw biometric structures, workflow optimization scripts, and somatic baseline logs alongside global operators.",
    alternates: {
        canonical: "https://nomadlifexp.com/join",
    },
    openGraph: {
        title: "Network Synchronization // Evolve in Motion | NomadLifeXP",
        description: "Establish encrypted node link. Access raw biometric structures, workflow optimization scripts, and somatic baseline logs alongside global operators.",
        url: "https://nomadlifexp.com/join",
        type: "website",
    },
};

export default function JoinNetworkPage() {
    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-amber-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Technical Matrix Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

            <main className="max-w-4xl mx-auto px-6 pt-36 pb-32 relative z-10 flex flex-col justify-center min-h-[85vh]">

                {/* Navigation Breadcrumb Array */}
                <nav className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_HOME
                    </Link>
                    <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                    <Link
                        href="/discipline-system"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-400 transition-colors duration-200"
                    >
                        SYS_DISCIPLINE_RETURN
                    </Link>
                </nav>

                {/* Console System Header */}
                <header className="space-y-4 mb-12 max-w-2xl">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">
                            NomadLifeXP // Evolve in Motion
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none text-white">
                        Sync With the <br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-amber-500 bg-clip-text text-transparent">
                            Execution Network
                        </span>
                    </h1>
                    <p className="text-sm font-light text-neutral-400 font-mono leading-relaxed">
                        Continuous state optimization. Biometric script repositories, structural workflow logs, and uncompromised somatic telemetry compiled periodically for elite operators executing globally.
                    </p>
                </header>

                {/* Secure Intake Console Array (Form) */}
                <form className="space-y-6 border border-neutral-900 bg-neutral-950/20 backdrop-blur-md p-6 md:p-10 rounded-none relative w-full">
                    <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-black px-2 text-[9px] font-mono tracking-widest text-neutral-600 uppercase">
                        [ Network_Ingress_Port_09 ]
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Parameter 01: Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="operator-id" className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                                01 / Operator Email Identity
                            </label>
                            <input
                                type="email"
                                id="operator-id"
                                required
                                placeholder="name@domain.com"
                                className="w-full bg-black border border-neutral-800 text-white font-mono text-sm px-4 py-3 rounded-none focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200 placeholder-neutral-700"
                            />
                        </div>

                        {/* Parameter 02: Dropdown Selector */}
                        <div className="space-y-2">
                            <label htmlFor="operator-focus" className="block font-mono text-xs uppercase tracking-wider text-neutral-400">
                                02 / Primary Core Architecture Focus
                            </label>
                            <select
                                id="operator-focus"
                                className="w-full bg-black border border-neutral-800 text-neutral-400 font-mono text-xs px-4 py-3 rounded-none focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200 uppercase tracking-wide cursor-pointer"
                            >
                                <option value="cognitive">SYS_01 // Cognitive Focus Controls</option>
                                <option value="kinetic">SYS_02 // Proactive Kinetic Sequences</option>
                                <option value="velocity">SYS_03 // Complex Technical Execution</option>
                                <option value="evolution">EVOLVE_IN_MOTION // Continuous Optimization</option>
                            </select>
                        </div>
                    </div>

                    {/* Console Action Panel */}
                    <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div className="space-y-1">
                            <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                                // System Parameters Confirmed
                            </p>
                            <p className="text-xs text-neutral-400 font-light max-w-sm">
                                Initializing link authorizes raw telemetry streams direct to your designated node. Zero noise pipeline.
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-black text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black font-black transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                            Initialize Connection Sequence &rarr;
                        </button>
                    </div>
                </form>

                {/* System Telemetry Security Footnote */}
                <footer className="mt-8 flex justify-between text-[10px] font-mono text-neutral-700 uppercase tracking-[0.2em]">
                    <span>STATUS: READY_TO_LINK</span>
                    <span>FRAMEWORK: EVOLVE_IN_MOTION</span>
                    <span>ENCRYPTION: SHIELDED</span>
                </footer>

            </main>
        </div>
    );
}