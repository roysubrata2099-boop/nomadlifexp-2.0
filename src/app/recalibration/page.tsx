// src/app/recalibration/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Somatic Recalibration, Yoga & Recovery | NomadLifeXP",
    description:
        "A practical somatic recalibration system using breath, mindful movement, visual rest, awareness and yoga-based recovery to help reset after cognitive and physical overload.",
    alternates: {
        canonical: "https://www.nomadlifexp.com/recalibration",
    },
    openGraph: {
        title: "Somatic Recalibration, Yoga & Recovery | NomadLifeXP",
        description:
            "A practical somatic recalibration system using breath, mindful movement, visual rest, awareness and yoga-based recovery to help reset after cognitive and physical overload.",
        url: "https://www.nomadlifexp.com/recalibration",
        type: "website",
    },
};

const protocols = [
    {
        number: "01",
        code: "BREATH_RESET",
        title: "Physiological Sigh",
        description:
            "Use a simple breathing reset when you feel tense, overstimulated, or caught in sustained cognitive effort. Take two gentle sequential inhales followed by a longer, relaxed exhale. Repeat for several comfortable cycles while keeping your attention on the breath.",
        tags: ["BREATH", "AWARENESS", "REGULATION"],
    },
    {
        number: "02",
        code: "VISUAL_RESET",
        title: "Horizon Reset",
        description:
            "Interrupt prolonged near-focus from screens and close work. Shift your gaze toward a distant point or open environment and allow your peripheral field of view to widen naturally for approximately sixty seconds.",
        tags: ["VISION", "AWARENESS", "RECOVERY"],
    },
    {
        number: "03",
        code: "MOVEMENT_RESET",
        title: "Structural Decompression",
        description:
            "Break prolonged static positioning with gentle movement. Stand, lengthen through the spine, relax the shoulders, move the neck comfortably, and reconnect with a natural standing position. Do not force a range of motion or hold through pain.",
        tags: ["MOVEMENT", "MOBILITY", "POSTURE"],
    },
    {
        number: "04",
        code: "COGNITIVE_RESET",
        title: "Zero State Buffer",
        description:
            "Create a short period without incoming information. Step away from active work, close unnecessary screens, put the phone aside, and spend several quiet minutes noticing your breathing, body, and surroundings.",
        tags: ["STILLNESS", "ATTENTION", "CLARITY"],
    },
];

const resetSequence = [
    {
        number: "01",
        title: "STOP",
        description: "Step away from the current task.",
    },
    {
        number: "02",
        title: "BREATHE",
        description: "Take several slow, comfortable breaths.",
    },
    {
        number: "03",
        title: "MOVE",
        description: "Stand and gently move your body.",
    },
    {
        number: "04",
        title: "LOOK",
        description: "Rest your eyes on a distant environment.",
    },
    {
        number: "05",
        title: "RETURN",
        description: "Resume when you feel ready.",
    },
];

const feedbackLoops = [
    {
        number: "01",
        title: "Autonomic Awareness",
        description:
            "Notice changes in breathing, tension, restlessness, and general arousal before they become overwhelming. Awareness comes before intervention.",
    },
    {
        number: "02",
        title: "Neuromuscular Awareness",
        description:
            "Pay attention to accumulated tension from prolonged sitting, repetitive movement, and screen-based work. Gentle movement can provide a useful transition out of static positions.",
    },
    {
        number: "03",
        title: "Attention Recovery",
        description:
            "Reduce unnecessary inputs and return attention to one physical signal at a time: breathing, movement, visual awareness, or stillness.",
    },
];

export default function RecalibrationPage() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#050914] font-sans text-white antialiased selection:bg-[#FFB700] selection:text-black">

            {/* =========================================================
                AMBIENT SYSTEM LIGHTING
            ========================================================== */}

            <div className="pointer-events-none absolute left-1/4 top-0 h-[520px] w-[520px] rounded-full bg-[#38BDF8]/[0.055] blur-[150px]" />

            <div className="pointer-events-none absolute right-1/4 top-[35%] h-[500px] w-[500px] rounded-full bg-[#FFB700]/[0.035] blur-[150px]" />

            <div className="pointer-events-none absolute bottom-0 right-1/3 h-[500px] w-[500px] rounded-full bg-[#60A5FA]/[0.035] blur-[150px]" />

            {/* =========================================================
                TECHNICAL GRID
            ========================================================== */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#38BDF808_1px,transparent_1px),linear-gradient(to_bottom,#38BDF808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_65%,transparent_100%)]" />

            {/* =========================================================
                MAIN CONTENT
            ========================================================== */}

            <main className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-36">

                {/* =====================================================
                    NAVIGATION
                ====================================================== */}

                <nav
                    className="mb-16 flex flex-col gap-4 border-b border-[#16304F] pb-6"
                    aria-label="Breadcrumb navigation"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#EDF6FF] transition-colors duration-200 hover:text-[#38BDF8]"
                    >
                        <span
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                            aria-hidden="true"
                        >
                            ←
                        </span>
                        <span>NOMADLIFEXP</span>
                    </Link>

                    <ol className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.25em]">
                        <li>
                            <Link
                                href="/"
                                className="text-[#A7B8CC] transition-colors hover:text-[#38BDF8]"
                            >
                                Home
                            </Link>
                        </li>

                        <li
                            aria-hidden="true"
                            className="text-[#31506F]"
                        >
                            /
                        </li>

                        <li
                            className="text-[#38BDF8]"
                            aria-current="page"
                        >
                            Recalibration
                        </li>
                    </ol>
                </nav>

                {/* =====================================================
                    HERO
                ====================================================== */}

                <header className="mb-24 max-w-6xl">

                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#38BDF8] shadow-[0_0_12px_#38BDF8]" />

                        <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#38BDF8]">
                            System Module // SYS_03_RECALIBRATION
                        </p>
                    </div>

                    <h1 className="text-4xl font-black uppercase leading-[0.94] tracking-tight text-white md:text-6xl lg:text-7xl">
                        Somatic Recalibration:
                        <br />
                        <span className="bg-gradient-to-r from-[#FFFFFF] via-[#7DD3FC] to-[#FFB700] bg-clip-text text-transparent">
                            Real-Time Systems for Breath,
                            <br className="hidden md:block" />
                            Movement &amp; Recovery
                        </span>
                    </h1>

                    <p className="mt-8 max-w-3xl font-mono text-base font-light leading-relaxed text-[#A7B8CC] md:text-lg">
                        A practical reset system for moments when prolonged screen
                        time, cognitive overload, inactivity, or accumulated tension
                        begin to affect how you feel, focus, and function.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {[
                            "BREATH",
                            "MOVEMENT",
                            "AWARENESS",
                            "RECOVERY",
                        ].map((item) => (
                            <span
                                key={item}
                                className="border border-[#214363] bg-[#071428]/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#7DD3FC]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-[#526B84]">
                        <span className="h-px w-10 bg-[#38BDF8]/40" />
                        INTERRUPT THE LOAD // RECONNECT WITH THE BODY
                    </div>
                </header>

                {/* =====================================================
                    WHY RECALIBRATION
                ====================================================== */}

                <section
                    className="mb-24 max-w-5xl"
                    aria-labelledby="why-recalibration"
                >
                    <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">
                        // WHY_RECALIBRATION
                    </div>

                    <h2
                        id="why-recalibration"
                        className="mb-7 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                    >
                        High output requires the ability to reset.
                    </h2>

                    <div className="space-y-5 text-sm font-light leading-8 text-[#A7B8CC] md:text-base">
                        <p>
                            Modern work can keep the mind engaged long after the body
                            has accumulated physical and sensory load. Hours of screen
                            exposure, prolonged sitting, repetitive positions,
                            constant notifications, and uninterrupted cognitive demand
                            can make it harder to notice when attention and physical
                            comfort begin to decline.
                        </p>

                        <p>
                            Recalibration is the interruption layer. It creates a
                            deliberate pause that reconnects attention with breath,
                            movement, posture, vision, and the surrounding environment.
                        </p>

                        <p>
                            This system complements the NomadLifeXP approach to{" "}
                            <Link
                                href="/yoga"
                                className="font-medium text-[#38BDF8] underline decoration-[#38BDF8]/30 underline-offset-4 transition-colors hover:text-[#7DD3FC]"
                            >
                                yoga, movement, breath, mobility, awareness, and recovery
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                {/* =====================================================
                    SYSTEM MODEL
                ====================================================== */}

                <section
                    className="mb-24 border-y border-[#16304F] py-10"
                    aria-labelledby="system-model"
                >
                    <div className="mb-8">
                        <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">
                            // SYSTEM_MODEL
                        </div>

                        <h2
                            id="system-model"
                            className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                        >
                            The recalibration loop
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-5">
                        {[
                            ["01", "LOAD", "Work. Screens. Travel. Stimulation."],
                            ["02", "NOTICE", "Recognize changes in body and attention."],
                            ["03", "INTERRUPT", "Create space before pushing further."],
                            ["04", "RESET", "Use breath, movement, awareness, or stillness."],
                            ["05", "RETURN", "Resume with greater awareness."],
                        ].map(([number, title, description]) => (
                            <div key={number}>
                                <div className="mb-4 font-mono text-xs text-[#FFB700]">
                                    {number}
                                </div>

                                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-white">
                                    {title}
                                </h3>

                                <p className="text-xs leading-6 text-[#60758B]">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    PROTOCOL MATRIX
                ====================================================== */}

                <section
                    className="mb-24"
                    aria-labelledby="protocol-matrix"
                >
                    <div className="mb-8 flex flex-col justify-between gap-5 border-b border-[#16304F] pb-5 md:flex-row md:items-end">
                        <div>
                            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">
                                // ACTIVE_PROTOCOLS
                            </div>

                            <h2
                                id="protocol-matrix"
                                className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                            >
                                Four ways to reset
                            </h2>
                        </div>

                        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#526B84]">
                            BREATH / VISION / MOVEMENT / STILLNESS
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {protocols.map((protocol) => (
                            <article
                                key={protocol.number}
                                className="group flex min-h-[330px] flex-col justify-between border border-[#16304F] bg-[#071428]/65 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#38BDF8]/40 hover:bg-[#0A1A33]/75"
                            >
                                <div>
                                    <div className="mb-6 flex items-center justify-between gap-4">
                                        <span className="font-mono text-[10px] tracking-[0.15em] text-[#38BDF8]">
                                            PROTOCOL // {protocol.number}_{protocol.code}
                                        </span>

                                        <span className="font-mono text-xs text-[#31506F]">
                                            0{protocol.number}
                                        </span>
                                    </div>

                                    <h3 className="mb-5 text-xl font-bold uppercase tracking-tight text-white">
                                        {protocol.title}
                                    </h3>

                                    <p className="text-sm font-light leading-7 text-[#A7B8CC]">
                                        {protocol.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3 border-t border-[#16304F] pt-5">
                                    {protocol.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#60758B] transition-colors group-hover:text-[#7DD3FC]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    YOGA CONNECTION
                ====================================================== */}

                <section
                    className="mb-24 overflow-hidden border border-[#38BDF8]/20 bg-gradient-to-br from-[#071428] via-[#08182D] to-[#0A1A33] p-8 md:p-12"
                    aria-labelledby="yoga-connection"
                >
                    <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">

                        <div className="max-w-3xl">

                            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">
                                // SYSTEM_CONNECTION
                            </div>

                            <h2
                                id="yoga-connection"
                                className="mb-5 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                            >
                                Recalibration begins with the body.
                            </h2>

                            <p className="text-sm font-light leading-8 text-[#A7B8CC] md:text-base">
                                Yoga gives the recalibration system a physical practice:
                                controlled movement, breath awareness, mobility, balance,
                                stillness, and attention. The objective is not simply
                                flexibility. It is developing a more conscious
                                relationship between body, breath, movement, and mind.
                            </p>

                            <p className="mt-5 text-sm font-light leading-8 text-[#A7B8CC] md:text-base">
                                Build the underlying practice through the NomadLifeXP{" "}
                                <Link
                                    href="/yoga"
                                    className="font-medium text-[#7DD3FC] underline decoration-[#38BDF8]/30 underline-offset-4 transition-colors hover:text-white"
                                >
                                    Yoga System
                                </Link>
                                .
                            </p>
                        </div>

                        <Link
                            href="/yoga"
                            className="group inline-flex shrink-0 items-center justify-center gap-3 border border-[#FFB700] bg-[#FFB700]/[0.04] px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[#FFB700] transition-all duration-200 hover:bg-[#FFB700] hover:text-black"
                        >
                            Explore Yoga
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </section>

                {/* =====================================================
                    FEEDBACK LOOPS
                ====================================================== */}

                <section
                    className="mb-24 border border-[#16304F] bg-[#050914] p-6 md:p-8"
                    aria-labelledby="feedback-loops"
                >
                    <div className="mb-8 flex items-center justify-between border-b border-[#16304F] pb-5">

                        <div>
                            <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#38BDF8]">
                                SYSTEM_LAYER // 03
                            </div>

                            <h2
                                id="feedback-loops"
                                className="font-mono text-sm uppercase tracking-widest text-[#EDF6FF]"
                            >
                                Somatic Feedback Loops
                            </h2>
                        </div>

                        <div
                            className="flex items-center gap-1.5"
                            aria-hidden="true"
                        >
                            <span className="h-1.5 w-1.5 bg-[#17304D]" />
                            <span className="h-1.5 w-1.5 bg-[#17304D]" />
                            <span className="h-1.5 w-1.5 animate-pulse bg-[#FFB700] shadow-[0_0_8px_#FFB700]" />
                        </div>
                    </div>

                    <div className="divide-y divide-[#16304F]">
                        {feedbackLoops.map((loop) => (
                            <article
                                key={loop.number}
                                className="py-7 first:pt-0 last:pb-0"
                            >
                                <div className="mb-3 flex items-center gap-3">
                                    <span className="font-mono text-xs text-[#FFB700]">
                                        {loop.number}
                                    </span>

                                    <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-white">
                                        {loop.title}
                                    </h3>
                                </div>

                                <p className="max-w-4xl text-sm font-light leading-7 text-[#8297AC]">
                                    {loop.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                {/* =====================================================
                    FIVE MINUTE RESET
                ====================================================== */}

                <section
                    className="mb-24 max-w-6xl"
                    aria-labelledby="five-minute-reset"
                >
                    <div className="mb-8">
                        <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">
                            // FIVE_MINUTE_RESET
                        </div>

                        <h2
                            id="five-minute-reset"
                            className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                        >
                            A simple recalibration sequence
                        </h2>
                    </div>

                    <ol className="grid gap-4 md:grid-cols-5">
                        {resetSequence.map((step) => (
                            <li
                                key={step.number}
                                className="border border-[#16304F] bg-[#071428]/45 p-5 transition-colors hover:border-[#38BDF8]/30"
                            >
                                <div className="mb-6 font-mono text-xs text-[#FFB700]">
                                    {step.number}
                                </div>

                                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-white">
                                    {step.title}
                                </h3>

                                <p className="text-xs leading-6 text-[#60758B]">
                                    {step.description}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* =====================================================
                    CORE PHILOSOPHY
                ====================================================== */}

                <section
                    className="mb-24 border-t border-[#16304F] pt-12"
                    aria-labelledby="recalibration-philosophy"
                >
                    <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">

                        <div>
                            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#38BDF8]">
                                // NOMADLIFEXP_PRINCIPLE
                            </div>

                            <h2
                                id="recalibration-philosophy"
                                className="text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                            >
                                Recalibration is not failure.
                                <br />
                                It is part of performance.
                            </h2>
                        </div>

                        <div className="space-y-5 text-sm font-light leading-8 text-[#8297AC] md:text-base">
                            <p>
                                Sustainable performance is not continuous output.
                                It is the ability to recognize load, respond to it,
                                and return with greater awareness.
                            </p>

                            <p>
                                The goal is not to eliminate effort, ambition, or
                                challenge. It is to develop enough awareness to know
                                when to push, when to pause, and when to reconnect
                                with the body.
                            </p>

                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#7DD3FC]">
                                LOAD → NOTICE → INTERRUPT → RECALIBRATE → RETURN
                            </p>
                        </div>

                    </div>
                </section>

                {/* =====================================================
                    FINAL YOGA CTA
                ====================================================== */}

                <section
                    className="border border-[#214363] bg-[#071428]/70 p-8 md:p-12"
                    aria-labelledby="next-system"
                >
                    <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

                        <div className="max-w-2xl">

                            <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-[#526B84]">
                                NEXT_SYSTEM // YOGA
                            </div>

                            <h2
                                id="next-system"
                                className="mb-5 text-2xl font-bold uppercase tracking-tight text-white md:text-3xl"
                            >
                                Build the practice behind the reset.
                            </h2>

                            <p className="text-sm font-light leading-7 text-[#8297AC]">
                                Recalibration is the interruption. Yoga is the
                                ongoing practice of movement, breath, awareness,
                                mobility, balance, and recovery.
                            </p>

                        </div>

                        <Link
                            href="/yoga"
                            className="group inline-flex shrink-0 items-center gap-4 border border-[#38BDF8] px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-[#38BDF8] transition-all duration-200 hover:bg-[#38BDF8] hover:text-black"
                        >
                            Enter Yoga System

                            <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </Link>

                    </div>
                </section>

                {/* =====================================================
                    GENERAL INFORMATION
                ====================================================== */}

                <aside className="mt-16 border-t border-[#0C1A2C] pt-6">
                    <p className="max-w-5xl font-mono text-[10px] uppercase leading-6 tracking-wider text-[#405268]">
                        General information only. These practices are not medical
                        treatment and are not intended to diagnose, treat, or prevent
                        any condition. Stop any breathing, movement, or yoga practice
                        that causes pain, dizziness, discomfort, or unusual symptoms.
                        Seek appropriate professional guidance when needed.
                    </p>
                </aside>

            </main>
        </div>
    );
}
