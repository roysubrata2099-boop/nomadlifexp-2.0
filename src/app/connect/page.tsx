import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nomadlifexp.com";

export const metadata: Metadata = {
    title: "Official NomadLifeXP Resources & Profiles",
    description:
        "Official NomadLifeXP website, personal-development systems, knowledge library, and verified external profiles including LinkedIn, Medium, YouTube, Instagram, Threads, Facebook, Pinterest, Quora, GitHub, and Blogger.",
    alternates: {
        canonical: `${SITE_URL}/connect`,
    },
    openGraph: {
        title: "Official NomadLifeXP Resources & Profiles",
        description:
            "Explore the official NomadLifeXP website, knowledge systems, articles, and external profiles.",
        url: `${SITE_URL}/connect`,
        siteName: "NomadLifeXP",
        type: "website",
    },
};

const systems = [
    {
        name: "Mindset",
        href: "/mindset",
        description:
            "Mental clarity, attention management, focus, awareness, resilience, and intentional thinking.",
    },
    {
        name: "Discipline",
        href: "/discipline",
        description:
            "Habit formation, consistency, execution, routines, focus, self-control, and personal responsibility.",
    },
    {
        name: "Fitness",
        href: "/fitness",
        description:
            "Strength, conditioning, mobility, physical capability, training consistency, and sustainable development.",
    },
    {
        name: "Yoga",
        href: "/yoga",
        description:
            "Movement, mobility, breathing, balance, body awareness, recovery, and mind-body connection.",
    },
    {
        name: "Recalibration",
        href: "/recalibration",
        description:
            "Recovery, reflection, energy management, nervous-system awareness, and sustainable progression.",
    },
];

const internalResources = [
    {
        name: "Homepage",
        href: "/",
        description: "The main NomadLifeXP entry point and Human Evolution System.",
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
        description:
            "Official NomadLifeXP company presence on LinkedIn.",
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
        description:
            "Official NomadLifeXP Facebook page.",
    },
    {
        name: "GitHub",
        href: "https://github.com/roysubrata2099-boop/nomadlifexp",
        description:
            "NomadLifeXP's official GitHub repository.",
    },
    {
        name: "Pinterest",
        href: "https://in.pinterest.com/nomadlifexp",
        description:
            "Official NomadLifeXP Pinterest presence.",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/nomadlifexp",
        description:
            "Official NomadLifeXP Instagram profile.",
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@nomadlifexp",
        description:
            "Official NomadLifeXP YouTube channel.",
    },
    {
        name: "Threads",
        href: "https://www.threads.com/@nomadlifexp",
        description:
            "Official NomadLifeXP Threads profile.",
    },
    {
        name: "Blogger",
        href: "https://nomadlifexp.blogspot.com",
        description:
            "NomadLifeXP's official Blogger publication.",
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
        <main className="min-h-screen bg-black text-white">
            {/* Structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />

            {/* Header */}
            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
                <div className="max-w-4xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
                        NOMADLIFEXP // OFFICIAL RESOURCES
                    </p>

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        Official NomadLifeXP
                        <br />
                        Resources &amp; Profiles
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
                        Explore the official NomadLifeXP website, personal-development
                        systems, knowledge library, and external profiles created around
                        the Human Evolution System.
                    </p>

                    <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-400">
                        NomadLifeXP is a self-development and personal-growth knowledge
                        platform focused on discipline, fitness, yoga, mindset, mental
                        clarity, habit formation, resilience, and sustainable behavioral
                        change.
                    </p>
                </div>
            </section>

            {/* Official website */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Official Website
                    </p>

                    <h2 className="mt-3 text-2xl font-bold">
                        NomadLifeXP
                    </h2>

                    <p className="mt-3 max-w-3xl leading-7 text-neutral-300">
                        The official NomadLifeXP website is the canonical source for the
                        platform&apos;s personal-development systems, frameworks,
                        knowledge resources, and articles.
                    </p>

                    <a
                        href={SITE_URL}
                        className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10"
                    >
                        Visit nomadlifexp.com →
                    </a>
                </div>
            </section>

            {/* Core systems */}
            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
                <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Human Evolution System
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        The NomadLifeXP Systems
                    </h2>

                    <p className="mt-4 leading-7 text-neutral-300">
                        NomadLifeXP organizes personal development into interconnected
                        systems designed to help people build stronger habits, physical
                        capability, mental clarity, awareness, and sustainable personal
                        growth.
                    </p>
                </div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
                    {systems.map((system) => (
                        <Link
                            key={system.href}
                            href={system.href}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.06]"
                        >
                            <h3 className="text-xl font-bold group-hover:text-white">
                                {system.name} System →
                            </h3>

                            <p className="mt-3 leading-7 text-neutral-400">
                                {system.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Internal resources */}
            <section className="border-y border-white/10 bg-white/[0.02]">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Internal Knowledge
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        Official NomadLifeXP Resources
                    </h2>

                    <div className="mt-10 grid gap-4 md:grid-cols-2">
                        {internalResources.map((resource) => (
                            <Link
                                key={resource.href}
                                href={resource.href}
                                className="rounded-xl border border-white/10 p-5 transition hover:border-white/25 hover:bg-white/[0.04]"
                            >
                                <h3 className="font-bold">
                                    {resource.name} →
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-neutral-400">
                                    {resource.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                    Knowledge Library
                </p>

                <h2 className="mt-3 text-3xl font-bold">
                    Explore Articles by Category
                </h2>

                <div className="mt-8 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <Link
                            key={category.href}
                            href={category.href}
                            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-white/40 hover:bg-white/10"
                        >
                            {category.name} →
                        </Link>
                    ))}
                </div>
            </section>

            {/* External profiles */}
            <section className="border-y border-white/10 bg-white/[0.03]">
                <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
                    <div className="max-w-3xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                            Official External Presence
                        </p>

                        <h2 className="mt-3 text-3xl font-bold">
                            NomadLifeXP Across the Web
                        </h2>

                        <p className="mt-4 leading-7 text-neutral-300">
                            These are the official NomadLifeXP external profiles and
                            publishing channels. They extend the NomadLifeXP knowledge
                            ecosystem beyond the main website.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {externalProfiles.map((profile) => (
                            <a
                                key={profile.href}
                                href={profile.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group rounded-2xl border border-white/10 bg-black/20 p-6 transition hover:border-white/30 hover:bg-white/[0.05]"
                            >
                                <h3 className="text-lg font-bold group-hover:text-white">
                                    {profile.name}
                                    <span className="ml-2 text-neutral-500">↗</span>
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-neutral-400">
                                    {profile.description}
                                </p>

                                <p className="mt-4 break-all text-xs text-neutral-600">
                                    {profile.href}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
                <div className="max-w-4xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        Founder &amp; Creator
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        Subrata Roy
                    </h2>

                    <p className="mt-5 leading-7 text-neutral-300">
                        Subrata Roy is the founder and creator of NomadLifeXP. The platform
                        was developed around practical exploration of discipline,
                        consistency, physical training, yoga, mindset development, and
                        sustainable personal growth.
                    </p>

                    <Link
                        href="/about"
                        className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition hover:border-white/50 hover:bg-white/10"
                    >
                        Learn About NomadLifeXP →
                    </Link>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="border-t border-white/10">
                <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:px-8 lg:px-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                        NOMADLIFEXP
                    </p>

                    <h2 className="mt-4 text-3xl font-bold">
                        Become Stronger. Build Discipline. Evolve Every Day.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-400">
                        Explore the Human Evolution System and build your next version
                        through consistent action.
                    </p>

                    <Link
                        href="/"
                        className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-neutral-200"
                    >
                        Start Your Evolution →
                    </Link>
                </div>
            </section>
        </main>
    );
}
