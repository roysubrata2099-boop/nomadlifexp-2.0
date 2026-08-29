// src/app/digital-nomads/page.tsx

import Link from 'next/link';

export default function DigitalNomadsPage() {
    return (
        <main className="min-h-screen bg-[#050816] text-white selection:bg-cyan-500/30 selection:text-cyan-300 font-sans">

            {/* HERO */}
            <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
                <div className="inline-block font-mono text-xs uppercase tracking-[0.25em] px-4 py-2 border border-cyan-500/30 bg-[#03050c] text-cyan-400 mb-8">
                    NOMADLIFEXP // DIGITAL NOMADS
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none max-w-4xl mx-auto">
                    EVOLVE IN MOTION.
                </h1>

                <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto mt-7">
                    Build the habits, physical capacity, awareness, and discipline
                    required to thrive while living and working anywhere.
                </p>

                <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
                    Digital nomad life gives you freedom, but freedom also removes
                    many of the structures that make consistency easy. NomadLifeXP
                    brings together four foundational systems for life in motion:
                    Discipline, Fitness, Yoga, and Mindset.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-3 font-mono text-xs tracking-widest text-cyan-400">
                    <span>DISCIPLINE</span>
                    <span>·</span>
                    <span>FITNESS</span>
                    <span>·</span>
                    <span>YOGA</span>
                    <span>·</span>
                    <span>MINDSET</span>
                </div>
            </section>


            {/* INTRO */}
            <section className="border-y border-white/10 bg-[#03050c]">
                <div className="max-w-5xl mx-auto px-6 py-16">
                    <div className="max-w-3xl">
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                            DIGITAL NOMAD FIELD GUIDE
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold mt-3">
                            Four pillars for life in motion.
                        </h2>

                        <p className="text-zinc-400 mt-5 leading-relaxed">
                            Location changes. Time zones change. Work environments change.
                            Your training, habits, and mental framework need to adapt with
                            them. Explore the four NomadLifeXP pillars designed specifically
                            for digital nomads and location-independent living.
                        </p>
                    </div>
                </div>
            </section>


            {/* FOUR PILLARS */}
            <section className="max-w-5xl mx-auto px-6 py-24">

                <div className="grid md:grid-cols-2 gap-6">

                    {/* DISCIPLINE */}
                    <article className="border border-white/10 bg-[#03050c] p-8 hover:border-cyan-400/50 transition">
                        <span className="font-mono text-xs text-cyan-400">
                            PILLAR // 01
                        </span>

                        <h2 className="text-2xl font-bold mt-3">
                            DISCIPLINE
                        </h2>

                        <h3 className="text-lg text-zinc-200 mt-2">
                            Self-Discipline While Traveling
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                            Learn how to maintain structure, habits, focus, and personal
                            standards when your location, schedule, and surroundings are
                            constantly changing.
                        </p>

                        <Link
                            href="https://www.nomadlifexp.com/blog/category/discipline"
                            className="inline-block mt-6 font-mono text-xs text-cyan-400 hover:text-white transition"
                        >
                            EXPLORE DISCIPLINE →
                        </Link>
                    </article>


                    {/* FITNESS */}
                    <article className="border border-white/10 bg-[#03050c] p-8 hover:border-cyan-400/50 transition">
                        <span className="font-mono text-xs text-cyan-400">
                            PILLAR // 02
                        </span>

                        <h2 className="text-2xl font-bold mt-3">
                            FITNESS
                        </h2>

                        <h3 className="text-lg text-zinc-200 mt-2">
                            Fitness for Digital Nomads
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                            Build strength, conditioning, mobility, and physical capability
                            without relying on a permanent gym or predictable training
                            environment.
                        </p>

                        <Link
                            href="https://www.nomadlifexp.com/blog/category/fitness"
                            className="inline-block mt-6 font-mono text-xs text-cyan-400 hover:text-white transition"
                        >
                            EXPLORE NOMAD FITNESS →
                        </Link>
                    </article>


                    {/* YOGA */}
                    <article className="border border-white/10 bg-[#03050c] p-8 hover:border-cyan-400/50 transition">
                        <span className="font-mono text-xs text-cyan-400">
                            PILLAR // 03
                        </span>

                        <h2 className="text-2xl font-bold mt-3">
                            YOGA
                        </h2>

                        <h3 className="text-lg text-zinc-200 mt-2">
                            Yoga for Digital Nomads
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                            Use movement, breath, mobility, and awareness to support recovery
                            and maintain physical balance while traveling.
                        </p>

                        <Link
                            href="https://www.nomadlifexp.com/blog/category/yoga"
                            className="inline-block mt-6 font-mono text-xs text-cyan-400 hover:text-white transition"
                        >
                            EXPLORE NOMAD YOGA →
                        </Link>
                    </article>


                    {/* MINDSET */}
                    <article className="border border-white/10 bg-[#03050c] p-8 hover:border-cyan-400/50 transition">
                        <span className="font-mono text-xs text-cyan-400">
                            PILLAR // 04
                        </span>

                        <h2 className="text-2xl font-bold mt-3">
                            MINDSET
                        </h2>

                        <h3 className="text-lg text-zinc-200 mt-2">
                            Mental Clarity for Digital Nomads
                        </h3>

                        <p className="text-zinc-400 text-sm leading-relaxed mt-4">
                            Develop focus, adaptability, perspective, and mental clarity
                            while navigating unfamiliar environments and constant change.
                        </p>

                        <Link
                            href="https://www.nomadlifexp.com/blog/category/mindset"
                            className="inline-block mt-6 font-mono text-xs text-cyan-400 hover:text-white transition"
                        >
                            EXPLORE NOMAD MINDSET →
                        </Link>
                    </article>

                </div>
            </section>


            {/* WHY THIS MATTERS */}
            <section className="border-y border-white/10 bg-[#03050c]">
                <div className="max-w-4xl mx-auto px-6 py-20 text-center">

                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                        LIFE IN MOTION
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-4">
                        Your environment changes.
                        <br />
                        Your foundation travels with you.
                    </h2>

                    <p className="text-zinc-400 max-w-2xl mx-auto mt-6 leading-relaxed">
                        The goal isn't to create a perfect routine that only works in one
                        city. It's to develop systems that remain useful when the city,
                        schedule, workspace, gym, climate, and culture change.
                    </p>

                </div>
            </section>


            {/* FEATURED NOMAD ARTICLES */}
            <section className="max-w-5xl mx-auto px-6 py-24">

                <div className="mb-10">
                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                        FROM THE FIELD MANUAL
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold mt-3">
                        Digital Nomad Guides
                    </h2>

                    <p className="text-zinc-400 mt-4 max-w-2xl">
                        Practical guides for maintaining your physical and mental
                        foundation while working and traveling around the world.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">

                    <Link
                        href="/discipline/self-discipline-while-traveling/"
                        className="border border-white/10 p-6 bg-[#03050c] hover:border-cyan-400/50 transition"
                    >
                        <span className="font-mono text-xs text-cyan-400">
                            DISCIPLINE
                        </span>

                        <h3 className="text-xl font-bold mt-2">
                            Self-Discipline While Traveling
                        </h3>

                        <p className="text-sm text-zinc-400 mt-3">
                            How to maintain structure and consistency when your environment
                            constantly changes.
                        </p>

                        <span className="block mt-5 font-mono text-xs text-cyan-400">
                            READ →
                        </span>
                    </Link>


                    <Link
                        href="/fitness/fitness-for-digital-nomads/"
                        className="border border-white/10 p-6 bg-[#03050c] hover:border-cyan-400/50 transition"
                    >
                        <span className="font-mono text-xs text-cyan-400">
                            FITNESS
                        </span>

                        <h3 className="text-xl font-bold mt-2">
                            Fitness for Digital Nomads
                        </h3>

                        <p className="text-sm text-zinc-400 mt-3">
                            Build a portable approach to strength, conditioning, and
                            movement while traveling.
                        </p>

                        <span className="block mt-5 font-mono text-xs text-cyan-400">
                            READ →
                        </span>
                    </Link>


                    <Link
                        href="/yoga/yoga-for-digital-nomads/"
                        className="border border-white/10 p-6 bg-[#03050c] hover:border-cyan-400/50 transition"
                    >
                        <span className="font-mono text-xs text-cyan-400">
                            YOGA
                        </span>

                        <h3 className="text-xl font-bold mt-2">
                            Yoga for Digital Nomads
                        </h3>

                        <p className="text-sm text-zinc-400 mt-3">
                            Movement, mobility, breath, and recovery practices for life on
                            the road.
                        </p>

                        <span className="block mt-5 font-mono text-xs text-cyan-400">
                            READ →
                        </span>
                    </Link>


                    <Link
                        href="/mindset/mental-clarity-for-digital-nomads/"
                        className="border border-white/10 p-6 bg-[#03050c] hover:border-cyan-400/50 transition"
                    >
                        <span className="font-mono text-xs text-cyan-400">
                            MINDSET
                        </span>

                        <h3 className="text-xl font-bold mt-2">
                            Mental Clarity for Digital Nomads
                        </h3>

                        <p className="text-sm text-zinc-400 mt-3">
                            Build focus, adaptability, and mental clarity while living in
                            constantly changing environments.
                        </p>

                        <span className="block mt-5 font-mono text-xs text-cyan-400">
                            READ →
                        </span>
                    </Link>

                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/blog"
                        className="font-mono text-xs text-cyan-400 uppercase tracking-widest hover:text-white transition"
                    >
                        EXPLORE THE NOMAD BLOG →
                    </Link>
                </div>

            </section>


            {/* CONTENT CLUSTER */}
            <section className="border-t border-white/10">
                <div className="max-w-5xl mx-auto px-6 py-20">

                    <div className="max-w-2xl mb-10">
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                            DIGITAL NOMAD RESOURCES
                        </span>

                        <h2 className="text-3xl font-bold mt-3">
                            Explore the problems that matter.
                        </h2>

                        <p className="text-zinc-400 mt-4">
                            Future guides will explore the practical challenges of building
                            a healthy, disciplined, capable life while traveling.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        <div className="border border-white/10 p-5 bg-[#03050c]">
                            <span className="font-mono text-xs text-cyan-400">
                                DISCIPLINE
                            </span>

                            <p className="text-sm text-zinc-400 mt-3">
                                Routines, habits, consistency, focus, and structure while
                                traveling.
                            </p>
                        </div>

                        <div className="border border-white/10 p-5 bg-[#03050c]">
                            <span className="font-mono text-xs text-cyan-400">
                                FITNESS
                            </span>

                            <p className="text-sm text-zinc-400 mt-3">
                                Training, bodyweight workouts, mobility, strength, and travel
                                fitness.
                            </p>
                        </div>

                        <div className="border border-white/10 p-5 bg-[#03050c]">
                            <span className="font-mono text-xs text-cyan-400">
                                YOGA
                            </span>

                            <p className="text-sm text-zinc-400 mt-3">
                                Breath, mobility, recovery, flexibility, and body awareness
                                on the road.
                            </p>
                        </div>

                        <div className="border border-white/10 p-5 bg-[#03050c]">
                            <span className="font-mono text-xs text-cyan-400">
                                MINDSET
                            </span>

                            <p className="text-sm text-zinc-400 mt-3">
                                Mental clarity, adaptability, resilience, focus, and
                                navigating uncertainty.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* MAIN SYSTEM CONNECTION */}
            <section className="max-w-4xl mx-auto px-6 py-24 text-center">

                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                    PART OF NOMADLIFEXP
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    Digital nomad life is one environment.
                    <br />
                    Human performance is the system.
                </h2>

                <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
                    Explore the broader NomadLifeXP system and discover how Discipline,
                    Fitness, Yoga, and Mindset work together beyond the digital nomad
                    lifestyle.
                </p>

                <Link
                    href="/"
                    className="inline-block mt-8 bg-cyan-500 text-black font-semibold px-8 py-4 font-mono text-xs tracking-wider hover:bg-cyan-400 transition"
                >
                    EXPLORE NOMADLIFEXP →
                </Link>

            </section>


            {/* FINAL BRAND */}
            <section className="border-t border-white/10 bg-[#03050c]">
                <div className="max-w-4xl mx-auto px-6 py-16 text-center">

                    <h2 className="text-2xl md:text-3xl font-bold">
                        EVOLVE IN MOTION.
                    </h2>

                    <p className="font-mono text-xs text-zinc-500 mt-4 tracking-widest">
                        LIVE ANYWHERE. BUILD EVERYWHERE. EVOLVE ALWAYS.
                    </p>

                </div>
            </section>

        </main>
    );
}