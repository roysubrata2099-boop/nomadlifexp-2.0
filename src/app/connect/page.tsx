import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";

export const metadata: Metadata = {
    title: "Official NomadLifeXP Resources & Profiles",
    description:
        "Explore the official NomadLifeXP Human Evolution System, knowledge library, personal-development resources, and official external profiles.",
    alternates: {
        canonical: `${SITE_URL}/connect`,
    },
    openGraph: {
        title: "Official NomadLifeXP Resources & Profiles",
        description:
            "Explore the official NomadLifeXP Human Evolution System, knowledge systems, articles, and official external profiles.",
        url: `${SITE_URL}/connect`,
        siteName: "NomadLifeXP",
        type: "website",
    },
};

const systems = [
    {
        number: "01",
        name: "Mindset",
        href: "/blog/category/mindset",
        description:
            "Mental clarity, attention management, focus, awareness, resilience, and intentional thinking.",
    },
    {
        number: "02",
        name: "Discipline",
        href: "/blog/category/discipline",
        description:
            "Habit formation, consistency, execution, routines, focus, self-control, and personal responsibility.",
    },
    {
        number: "03",
        name: "Fitness",
        href: "/blog/category/fitness",
        description:
            "Strength, conditioning, mobility, physical capability, training consistency, and sustainable development.",
    },
    {
        number: "04",
        name: "Yoga",
        href: "/blog/category/yoga",
        description:
            "Movement, mobility, breathing, balance, body awareness, recovery, and mind-body connection.",
    },
    {
        number: "05",
        name: "Recalibration",
        href: "/discipline-system",
        description:
            "Recovery, reflection, energy management, nervous-system awareness, and sustainable progression.",
    },
];

const internalResources = [
    {
        name: "Homepage",
        href: "/",
        description:
            "The main NomadLifeXP entry point and Human Evolution System.",
    },
    {
        name: "About NomadLifeXP",
        href: "/about",
        description:
            "Learn about the origin, philosophy, founder, and purpose behind NomadLifeXP.",
    },
    {
        name: "Start Here",
        href: "/start-here",
        description:
            "A starting point for exploring the NomadLifeXP personal-development framework.",
    },
    {
        name: "Knowledge Index",
        href: "/knowledge-index",
        description:
            "Explore the connected NomadLifeXP knowledge architecture.",
    },
    {
        name: "Discipline System",
        href: "/discipline-system",
        description:
            "Explore the structured Discipline System and its execution framework.",
    },
    {
        name: "Blog",
        href: "/blog",
        description:
            "Read practical articles covering discipline, fitness, yoga, mindset, and personal growth.",
    },
];

const categories = [
    {
        name: "Discipline Articles",
        href: "/blog/category/discipline",
    },
    {
        name: "Fitness Articles",
        href: "/blog/category/fitness",
    },
    {
        name: "Yoga Articles",
        href: "/blog/category/yoga",
    },
    {
        name: "Mindset Articles",
        href: "/blog/category/mindset",
    },
];

const externalProfiles = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/nomadlifexp",
        description: "Official NomadLifeXP company presence on LinkedIn.",
    },
    {
        name: "Medium",
        href: "https://medium.com/@roy.subrata2099",
        description:
            "NomadLifeXP and Subrata Roy's publishing presence on Medium.",
    },
    {
        name: "Quora",
        href: "https://www.quora.com/profile/NomadLifeXP",
        description:
            "Official NomadLifeXP profile and knowledge contributions on Quora.",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/nomadlifexp",
        description: "Official NomadLifeXP Facebook page.",
    },
    {
        name: "GitHub",
        href: "https://github.com/roysubrata2099-boop/nomadlifexp",
        description: "NomadLifeXP's official GitHub repository.",
    },
    {
        name: "Pinterest",
        href: "https://in.pinterest.com/nomadlifexp",
        description: "Official NomadLifeXP Pinterest presence.",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/nomadlifexp",
        description: "Official NomadLifeXP Instagram profile.",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@nomadlifexp",
        description: "Official NomadLifeXP YouTube channel.",
    },
    {
        name: "Threads",
        href: "https://www.threads.com/@nomadlifexp",
        description: "Official NomadLifeXP Threads profile.",
    },
    {
        name: "Blogger",
        href: "https://nomadlifexp.blogspot.com",
        description: "NomadLifeXP's official Blogger publication.",
    },
];

const sameAs = externalProfiles.map((profile) => profile.href);

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NomadLifeXP",
    url: SITE_URL,
    description:
        "NomadLifeXP is a self-development and personal-growth knowledge platform focused on discipline, fitness, yoga, mindset, mental clarity, habit formation, and sustainable behavioral change.",
    founder: {
        "@type": "Person",
        name: "Subrata Roy",
    },
    sameAs,
};

export default function ConnectPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#050914] text-[#EDF6FF]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            {/* HERO */}
            <section className="relative border-b border-sky-400/10 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.13),transparent_32%),linear-gradient(135deg,#050914,#071428_55%,#0a1a33)]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.025)_1px,transparent_1px)] bg-[size:42px_42px]" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
                    <div className="max-w-5xl">
                        <div className="mb-7 flex items-center gap-3 text-xs font-mono font-semibold uppercase tracking-[0.28em] text-sky-400">
                            <span className="h-px w-10 bg-sky-400" />
                            NOMADLIFEXP // OFFICIAL RESOURCES
                        </div>

                        <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">
                            Official
                            <span className="block text-sky-400">
                                Resources
                            </span>
                            <span className="block">&amp; Profiles</span>
                        </h1>

                        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                            The official directory for NomadLifeXP systems,
                            knowledge resources, articles, and verified external
                            profiles built around the Human Evolution System.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <Link
                                href="/start-here"
                                className="rounded-lg bg-sky-400 px-6 py-3 text-sm font-black uppercase tracking-wider text-[#050914] shadow-[0_0_30px_rgba(56,189,248,0.15)] transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#050914]"
                            >
                                Start Here →
                            </Link>

                            <Link
                                href="/knowledge-index"
                                className="rounded-lg border border-sky-400/20 bg-white/[0.03] px-6 py-3 text-sm font-black uppercase tracking-wider text-slate-200 transition hover:border-sky-400/50 hover:bg-sky-400/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
                            >
                                Knowledge Index →
                            </Link>
                        </div>
                    </div>

                    <div className="mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
                        {[
                            ["01", "Systems"],
                            ["02", "Knowledge"],
                            ["03", "Presence"],
                        ].map(([number, label]) => (
                            <div
                                key={number}
                                className="border-l border-sky-400/30 bg-black/20 px-5 py-4 backdrop-blur-sm"
                            >
                                <p className="font-mono text-xs text-sky-400">
                                    {number}
                                </p>
                                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-slate-200">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CANONICAL SOURCE */}
            <section className="border-b border-white/10 bg-[#071428]">
                <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                                00 // CANONICAL SOURCE
                            </p>

                            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                                NomadLifeXP
                            </h2>

                            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                                The official NomadLifeXP website is the
                                canonical source for the platform&apos;s
                                personal-development systems, frameworks,
                                knowledge resources, and articles.
                            </p>
                        </div>

                        <Link
                            href="/"
                            className="inline-flex w-fit rounded-lg border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-black uppercase tracking-wider text-sky-300 transition hover:border-sky-400 hover:bg-sky-400 hover:text-[#050914] focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            Visit nomadlifexp.com →
                        </Link>
                    </div>
                </div>
            </section>

            {/* SYSTEMS */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                <div className="max-w-4xl">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                        01 // HUMAN EVOLUTION SYSTEM
                    </p>

                    <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                        The NomadLifeXP Systems
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                        Interconnected systems for building stronger habits,
                        physical capability, mental clarity, awareness, and
                        sustainable personal growth.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-2">
                    {systems.map((system) => (
                        <Link
                            key={system.href}
                            href={system.href}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#071428]/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-[#0a1a33] hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-sky-400/5 blur-3xl transition group-hover:bg-sky-400/15" />

                            <div className="relative">
                                <div className="flex items-start justify-between gap-5">
                                    <span className="font-mono text-xs font-bold tracking-widest text-sky-400">
                                        {system.number}
                                    </span>

                                    <span className="text-xl text-slate-600 transition group-hover:text-sky-400">
                                        ↗
                                    </span>
                                </div>

                                <h3 className="mt-7 text-2xl font-black uppercase tracking-tight text-white">
                                    {system.name}
                                </h3>

                                <p className="mt-3 max-w-xl leading-7 text-slate-400">
                                    {system.description}
                                </p>

                                <div className="mt-7 h-px w-full bg-white/10">
                                    <div className="h-px w-0 bg-sky-400 transition-all duration-500 group-hover:w-20" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* INTERNAL RESOURCES */}
            <section className="border-y border-white/10 bg-[#071428]/70">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                        02 // INTERNAL KNOWLEDGE
                    </p>

                    <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                        Official Resources
                    </h2>

                    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {internalResources.map((resource, index) => (
                            <Link
                                key={resource.href}
                                href={resource.href}
                                className="group rounded-xl border border-white/10 bg-[#050914]/70 p-6 transition hover:border-sky-400/30 hover:bg-[#0a1a33] focus:outline-none focus:ring-2 focus:ring-sky-400"
                            >
                                <div className="font-mono text-xs text-sky-400">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h3 className="mt-5 font-black uppercase tracking-tight text-white">
                                    {resource.name}
                                    <span className="ml-2 text-slate-600 transition group-hover:text-sky-400">
                                        →
                                    </span>
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {resource.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* KNOWLEDGE LIBRARY */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                        03 // KNOWLEDGE LIBRARY
                    </p>

                    <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                        Explore by Category
                    </h2>

                    <p className="mt-5 leading-7 text-slate-400">
                        Navigate directly into the core knowledge areas of the
                        NomadLifeXP publishing system.
                    </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <Link
                            key={category.href}
                            href={category.href}
                            className="group rounded-xl border border-white/10 bg-[#071428] px-5 py-5 transition hover:border-sky-400/40 hover:bg-[#0a1a33] focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            <span className="font-mono text-xs text-sky-400">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="mt-3 block font-bold uppercase tracking-wide text-slate-200">
                                {category.name}
                            </span>

                            <span className="mt-3 block text-sm text-slate-600 transition group-hover:text-sky-400">
                                Explore →
                            </span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* EXTERNAL PRESENCE */}
            <section className="border-y border-white/10 bg-[linear-gradient(135deg,#050914,#071428)]">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                    <div className="max-w-4xl">
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                            04 // OFFICIAL EXTERNAL PRESENCE
                        </p>

                        <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                            NomadLifeXP Across the Web
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-300">
                            Official external profiles and publishing channels
                            extending the NomadLifeXP knowledge ecosystem
                            beyond the main website.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {externalProfiles.map((profile, index) => (
                            <a
                                key={profile.href}
                                href={profile.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-2xl border border-white/10 bg-[#071428]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-[#0a1a33] focus:outline-none focus:ring-2 focus:ring-sky-400"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="font-mono text-xs text-sky-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="text-slate-600 transition group-hover:text-sky-400">
                                        ↗
                                    </span>
                                </div>

                                <h3 className="mt-7 text-xl font-black uppercase tracking-tight text-white">
                                    {profile.name}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {profile.description}
                                </p>

                                <p className="mt-5 break-all font-mono text-[10px] leading-5 text-slate-600 transition group-hover:text-slate-500">
                                    {profile.href}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
                <div className="relative overflow-hidden rounded-3xl border border-sky-400/15 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_35%),#071428] p-8 sm:p-12">
                    <div className="relative max-w-4xl">
                        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
                            05 // FOUNDER &amp; CREATOR
                        </p>

                        <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                            Subrata Roy
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Subrata Roy is the founder and creator of
                            NomadLifeXP. The platform was developed around
                            practical exploration of discipline, consistency,
                            physical training, yoga, mindset development, and
                            sustainable personal growth.
                        </p>

                        <Link
                            href="/about"
                            className="mt-8 inline-flex rounded-lg border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-black uppercase tracking-wider text-sky-300 transition hover:border-sky-400 hover:bg-sky-400 hover:text-[#050914] focus:outline-none focus:ring-2 focus:ring-sky-400"
                        >
                            Learn About NomadLifeXP →
                        </Link>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="border-t border-sky-400/10 bg-[#030711]">
                <div className="mx-auto max-w-5xl px-6 py-24 text-center sm:px-8">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-sky-400">
                        NOMADLIFEXP // EVOLUTION PROTOCOL
                    </p>

                    <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Become Stronger.
                        <span className="block text-sky-400">
                            Build Discipline.
                        </span>
                        <span className="block">Evolve Every Day.</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                        Explore the Human Evolution System and build your next
                        version through consistent action.
                    </p>

                    <Link
                        href="/"
                        className="mt-9 inline-flex rounded-lg bg-sky-400 px-7 py-4 text-sm font-black uppercase tracking-wider text-[#050914] shadow-[0_0_35px_rgba(56,189,248,0.18)] transition hover:bg-sky-300 hover:shadow-[0_0_45px_rgba(56,189,248,0.28)] focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-[#030711]"
                    >
                        Start Your Evolution →
                    </Link>
                </div>
            </section>
        </main>
    );
}
