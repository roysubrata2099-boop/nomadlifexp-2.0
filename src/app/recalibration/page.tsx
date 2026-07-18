// src/app/recalibration/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Somatic Recalibration System // Phase III Network | NomadLifeXP",
    description: "The operational override mechanism designed to reset neural baselines, clear cognitive accumulation, and restore optimal physiological alignment for high-velocity output.",
    alternates: {
        canonical: "https://nomadlifexp.com/recalibration",
    },
    openGraph: {
        title: "Phase III Network Overview // Somatic Recalibration Protocol | NomadLifeXP",
        description: "The operational override mechanism designed to reset neural baselines, clear cognitive accumulation, and restore optimal physiological alignment for high-velocity output.",
        url: "https://nomadlifexp.com/recalibration",
        type: "website",
    },
};

export default function RecalibrationPage() {
    return (
        <div className="relative min-h-screen bg-black text-white antialiased font-sans selection:bg-amber-500 selection:text-black overflow-hidden">

            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-neutral-500/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Technical Matrix Grid Background Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Content Area Matrix */}
            <main className="max-w-7xl mx-auto px-6 pt-36 pb-32 relative z-10">

                {/* Navigation Breadcrumb Node Block */}
                <nav className="mb-12 flex flex-wrap items-center gap-6 border-b border-neutral-900 pb-6" aria-label="Breadcrumb">
                    <Link
                        href="/discipline-system"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-400 transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">&larr;</span>
                        RETURN_TO_DISCIPLINE_SYSTEM
                    </Link>
                    <span className="text-neutral-800 font-mono text-xs" aria-hidden="true">/</span>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-amber-400 transition-colors duration-200"
                    >
                        SYS_HOME
                    </Link>
                </nav>

                {/* Left-Aligned Technical Header Block */}
                <header className="mb-16 max-w-5xl space-y-5">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                        <p className="text-xs uppercase tracking-[0.4em] font-mono text-amber-500">
                            System Module // SYS_03_RECALIBRATION
                        </p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                        Somatic Recalibration:<br />
                        <span className="bg-gradient-to-r from-white via-neutral-200 to-amber-500 bg-clip-text text-transparent">
                            Real Time Feedback Systems
                        </span>
                    </h1>
                    <p className="text-base md:text-lg font-light leading-relaxed max-w-3xl text-neutral-400 font-mono">
                        The real-time mitigation matrix. When high-velocity cognitive input slips into physiological decay, these intervention logs execute immediately to reset the physical processing core.
                    </p>
                </header>

                {/* Recalibration Protocol Matrix Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16" aria-label="Recalibration Protocols">

                    {/* Protocol 01 */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Protocol // 01_AUTONOMIC_RESET</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">The Physiological Sigh</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Instantly down-regulate autonomic arousal. Execute two rapid, sequential inhalations via the nasal passage followed by an extended, fully passive exhalation through the mouth. Repeat for three cycles to re-stabilize the heart rate variability baseline.
                            </p>
                        </div>
                    </div>

                    {/* Protocol 02 */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Protocol // 02_VISUAL_DECOMPRESSION</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">Optokinetic Horizon Reset</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Disengage focal vision lock. Transition your ocular lens system from a near-distance display screen to a wide-angle panoramic horizon. Allow peripheral awareness to expand intentionally for sixty seconds to instantly lower central nervous system stress flags.
                            </p>
                        </div>
                    </div>

                    {/* Protocol 03 */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Protocol // 03_KINETIC_REALIGNMENT</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">Structural Decompression</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Neutralize the forward head and slouched posture signature. Drive the shoulder blades into retraction, align the pelvis to absolute vertical, and perform a deep cervical chin tuck. Hold for ten seconds to restore spinal integrity.
                            </p>
                        </div>
                    </div>

                    {/* Protocol 04 */}
                    <div className="border border-neutral-900 p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="font-mono text-xs text-amber-500 tracking-wider">Protocol // 04_COGNITIVE_PURGE</div>
                            <h3 className="text-white text-lg font-bold uppercase tracking-tight">Zero State Buffer Clearance</h3>
                            <p className="text-sm font-light leading-relaxed text-neutral-400">
                                Disconnect completely from all active loops. Close all terminal instances and code threads for five minutes. Do not ingest secondary data fields or metrics. Sit in complete sensory silence until physical and cognitive baselines fully clear.
                            </p>
                        </div>
                    </div>
                </section>

                {/* System Feedback Metrics Console */}
                <section className="flex flex-col gap-8 mb-16 bg-black border border-neutral-900 p-6 md:p-8 rounded-none relative">
                    <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
                        <h2 className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Somatic Feedback Telemetry Loops</h2>
                        <div className="flex gap-1.5 items-center">
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-neutral-800" />
                            <span className="w-1.5 h-1.5 bg-amber-500 animate-pulse" />
                        </div>
                    </div>

                    <div className="space-y-8 divide-y divide-neutral-900 w-full">
                        <div className="group pt-2">
                            <div className="space-y-2 max-w-5xl">
                                <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-300">
                                    01 / Heart Rate Variability Modulation
                                </h3>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    Monitoring systemic resilience values directly through autonomic responses. Drastic drops in variability parameters serve as an automated trigger for protocol isolation sequences.
                                </p>
                            </div>
                        </div>

                        <div className="group pt-8">
                            <div className="space-y-2 max-w-5xl">
                                <h3 className="text-white text-sm font-mono font-bold uppercase tracking-wider group-hover:text-amber-500 transition-colors duration-300">
                                    02 / Neuromuscular Fatigue Limits
                                </h3>
                                <p className="text-sm font-light leading-relaxed text-neutral-400">
                                    Tracking macro physical tension signatures across structural centers. Automated intervention prevents processing blocks from initiating under high micro-stress configurations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}