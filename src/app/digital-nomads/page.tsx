import Link from 'next/link';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.nomadlifexp.com';
const PAGE_PATH = '/digital-nomads/';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: 'Digital Nomad Lifestyle: Human Optimization | NomadLifeXP',

    description:
        'Build a better digital nomad lifestyle with human optimization for health, fitness, mindset, productivity, discipline, yoga, and adaptable routines that work anywhere.',

    keywords: [
        'digital nomad lifestyle',
        'digital nomad health',
        'digital nomad fitness',
        'digital nomad productivity',
        'digital nomad routine',
        'digital nomad wellness',
        'digital nomad discipline',
        'digital nomad mindset',
        'digital nomad yoga',
        'fitness while traveling',
        'healthy habits while traveling',
        'productivity while traveling',
        'location independent lifestyle',
    ],

    alternates: {
        canonical: PAGE_PATH,
    },

    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
    },

    openGraph: {
        title: 'Digital Nomad Lifestyle: Human Optimization | NomadLifeXP',
        description:
            'Build yourself to live anywhere with adaptable systems for discipline, fitness, yoga, mindset, health, and productivity.',
        type: 'website',
        url: PAGE_URL,
        siteName: 'NomadLifeXP',
        locale: 'en_US',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Digital Nomad Lifestyle | NomadLifeXP',
        description:
            'Live anywhere. Adapt anywhere. Build yourself everywhere.',
    },
};

const pillars = [
    {
        number: '01',
        title: 'DISCIPLINE',
        heading: 'Digital Nomad Discipline',
        description:
            'Build structure, consistency, focus, and personal standards when your environment no longer provides them for you. Create routines that travel with you.',
        href: '/blog/category/discipline/',
        cta: 'EXPLORE DISCIPLINE →',
    },
    {
        number: '02',
        title: 'FITNESS',
        heading: 'Digital Nomad Fitness',
        description:
            'Build strength, conditioning, mobility, and physical capability without relying on a permanent gym or predictable training environment.',
        href: '/blog/category/fitness/',
        cta: 'EXPLORE NOMAD FITNESS →',
    },
    {
        number: '03',
        title: 'YOGA',
        heading: 'Digital Nomad Yoga',
        description:
            'Use movement, breath, mobility, and awareness to support recovery and physical balance through flights, changing schedules, and life on the road.',
        href: '/blog/category/yoga/',
        cta: 'EXPLORE NOMAD YOGA →',
    },
    {
        number: '04',
        title: 'MINDSET',
        heading: 'Digital Nomad Mindset',
        description:
            'Develop mental clarity, adaptability, perspective, and resilience while navigating unfamiliar environments, uncertainty, and constant change.',
        href: '/blog/category/mindset/',
        cta: 'EXPLORE NOMAD MINDSET →',
    },
] as const;

const problems = [
    {
        title: 'Changing routines',
        description:
            'Build routines that can adapt to new cities, time zones, workspaces, and schedules.',
    },
    {
        title: 'Fitness while traveling',
        description:
            'Maintain strength, conditioning, mobility, and physical capability without a permanent gym.',
    },
    {
        title: 'Productivity while traveling',
        description:
            'Create systems for focused work even when your environment changes constantly.',
    },
    {
        title: 'Healthy habits',
        description:
            'Develop practical habits that support health and wellness without requiring a perfect environment.',
    },
    {
        title: 'Loss of structure',
        description:
            'Replace external structure with personal systems, standards, and deliberate discipline.',
    },
    {
        title: 'Mental overload',
        description:
            'Build awareness, clarity, adaptability, and recovery into a life defined by constant change.',
    },
] as const;

const resources = [
    {
        label: 'DISCIPLINE',
        title: 'Build consistency',
        description:
            'Routines, habits, focus, structure, and discipline for life on the move.',
        href: '/blog/category/discipline/',
    },
    {
        label: 'FITNESS',
        title: 'Build physical capacity',
        description:
            'Strength, mobility, conditioning, bodyweight training, and fitness while traveling.',
        href: '/blog/category/fitness/',
    },
    {
        label: 'YOGA',
        title: 'Build mobility and awareness',
        description:
            'Breath, movement, recovery, flexibility, and body awareness on the road.',
        href: '/blog/category/yoga/',
    },
    {
        label: 'MINDSET',
        title: 'Build mental adaptability',
        description:
            'Mental clarity, resilience, perspective, focus, and navigating uncertainty.',
        href: '/blog/category/mindset/',
    },
] as const;

const articles = [
    {
        category: 'DISCIPLINE',
        title: 'Self-Discipline While Traveling',
        description:
            'How to maintain structure, consistency, and personal standards when your environment constantly changes.',
        href: '/discipline/self-discipline-while-traveling/',
    },
    {
        category: 'FITNESS',
        title: 'Fitness for Digital Nomads',
        description:
            'Build a portable approach to strength, conditioning, mobility, and fitness while traveling.',
        href: '/fitness/fitness-for-digital-nomads/',
    },
    {
        category: 'YOGA',
        title: 'Yoga for Digital Nomads',
        description:
            'Movement, mobility, breath, and recovery practices for life on the road.',
        href: '/yoga/yoga-for-digital-nomads/',
    },
    {
        category: 'MINDSET',
        title: 'Mental Clarity for Digital Nomads',
        description:
            'Build focus, adaptability, resilience, and mental clarity while living in constantly changing environments.',
        href: '/mindset/mental-clarity-for-digital-nomads/',
    },
] as const;

/**
 * JSON-LD
 *
 * The JSON is serialized and then escaped before being placed inside
 * the application/ld+json script element.
 *
 * This prevents characters such as < from being interpreted as HTML.
 */
function JsonLd() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: 'NomadLifeXP',
                inLanguage: 'en',
            },
            {
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: 'NomadLifeXP',
                url: SITE_URL,
            },
            {
                '@type': 'WebPage',
                '@id': `${PAGE_URL}#webpage`,
                url: PAGE_URL,
                name: 'Digital Nomad Lifestyle: Human Optimization | NomadLifeXP',
                description:
                    'Build a better digital nomad lifestyle with human optimization for health, fitness, mindset, productivity, discipline, yoga, and adaptable routines that work anywhere.',
                isPartOf: {
                    '@id': `${SITE_URL}/#website`,
                },
                about: {
                    '@type': 'Thing',
                    name: 'Digital nomad lifestyle',
                },
                breadcrumb: {
                    '@id': `${PAGE_URL}#breadcrumb`,
                },
                inLanguage: 'en',
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${PAGE_URL}#breadcrumb`,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: `${SITE_URL}/`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Digital Nomads',
                        item: PAGE_URL,
                    },
                ],
            },
        ],
    };

    const safeJsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c');

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: safeJsonLd,
            }}
        />
    );
}

export default function DigitalNomadsPage() {
    return (
        <>
            <JsonLd />

            <main className="min-h-screen bg-[#050816] font-sans text-white selection:bg-cyan-500/30 selection:text-cyan-300">

                {/* =====================================================
                    ACCESSIBLE SKIP LINK
                ====================================================== */}

                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cyan-400 focus:px-4 focus:py-3 focus:font-mono focus:text-xs focus:font-bold focus:text-black focus:outline-none"
                >
                    Skip to main content
                </a>


                {/* =====================================================
                    NAVBAR
                ====================================================== */}

                <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/95 backdrop-blur-md">
                    <nav
                        aria-label="Primary navigation"
                        className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-6"
                    >
                        <Link
                            href="/"
                            aria-label="NomadLifeXP Home"
                            className="font-mono text-xs font-bold tracking-[0.2em] text-white transition hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                        >
                            NOMADLIFEXP
                        </Link>

                        <ol className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] sm:text-xs">
                            <li>
                                <Link
                                    href="/"
                                    className="text-zinc-400 transition hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li
                                aria-hidden="true"
                                className="text-zinc-600"
                            >
                                /
                            </li>

                            <li
                                aria-current="page"
                                className="text-cyan-400"
                            >
                                Digital Nomads
                            </li>
                        </ol>
                    </nav>
                </header>


                <div id="main-content">

{/* =================================================
                        HERO
                    ================================================== */}

                    <section
                        aria-labelledby="page-title"
                        className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center md:pb-28 md:pt-28"
                    >
                        <div className="mb-8 inline-block border border-cyan-500/30 bg-[#03050c] px-4 py-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                            NOMADLIFEXP // DIGITAL NOMAD LIFESTYLE
                        </div>

                        <h1
                            id="page-title"
                            className="mx-auto max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
                        >
                            The Nomad Operating System:
                            <span className="mt-3 block text-cyan-400">
                                Build Yourself to Live Anywhere
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-zinc-300 md:text-2xl">
                            Live anywhere. Adapt anywhere. Build yourself everywhere.
                        </p>

                        <p className="mx-auto mt-7 max-w-3xl leading-relaxed text-zinc-400 md:text-lg">
                            A digital nomad lifestyle gives you freedom, but freedom
                            can also remove the structures that make consistency easy.
                            NomadLifeXP is a human optimization system for building
                            the health, fitness, mindset, productivity, discipline,
                            and awareness required to thrive while living and working
                            anywhere.
                        </p>

                        <div className="mt-10">
                            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
                                YOUR ENVIRONMENT CHANGES.
                            </p>

                            <p className="mt-2 font-mono text-xs uppercase tracking-[0.25em] text-white">
                                YOUR FOUNDATION DOESN&apos;T.
                            </p>
                        </div>

                        <div
                            aria-label="NomadLifeXP core systems"
                            className="mt-10 flex flex-wrap justify-center gap-x-3 gap-y-2 font-mono text-xs tracking-widest text-cyan-400"
                        >
                            <span>DISCIPLINE</span>
                            <span aria-hidden="true">·</span>
                            <span>FITNESS</span>
                            <span aria-hidden="true">·</span>
                            <span>YOGA</span>
                            <span aria-hidden="true">·</span>
                            <span>MINDSET</span>
                        </div>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link
                                href="#systems"
                                className="inline-flex min-h-12 items-center justify-center bg-cyan-500 px-7 py-4 font-mono text-xs font-bold tracking-wider text-black transition hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                            >
                                EXPLORE THE SYSTEM →
                            </Link>

                            <Link
                                href="/blog/"
                                className="inline-flex min-h-12 items-center justify-center border border-white/15 px-7 py-4 font-mono text-xs font-bold tracking-wider text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                            >
                                READ THE FIELD MANUAL
                            </Link>
                        </div>
                    </section>


                    {/* =================================================
                        CORE POSITIONING
                    ================================================== */}

                    <section className="border-y border-white/10 bg-[#03050c]">
                        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
                            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">

                                <div className="max-w-3xl">
                                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                        THE NOMAD OPERATING SYSTEM
                                    </span>

                                    <h2 className="mt-3 text-3xl font-bold md:text-5xl">
                                        Build the person who can thrive anywhere.
                                    </h2>

                                    <p className="mt-6 leading-relaxed text-zinc-400 md:text-lg">
                                        The challenge of a digital nomad lifestyle
                                        isn&apos;t simply finding a good apartment,
                                        reliable Wi-Fi, or the next destination.
                                        The deeper challenge is maintaining yourself
                                        when everything around you keeps changing.
                                    </p>

                                    <p className="mt-5 leading-relaxed text-zinc-400 md:text-lg">
                                        New cities. New time zones. New workspaces.
                                        New climates. New routines. Your environment
                                        is constantly moving. Your operating system
                                        needs to be adaptable enough to move with it.
                                    </p>
                                </div>

                                <div className="border border-cyan-400/20 bg-cyan-500/5 p-8">
                                    <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                        CORE POSITIONING
                                    </p>

                                    <p className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">
                                        Your environment changes.
                                        <span className="block text-cyan-400">
                                            Your foundation doesn&apos;t.
                                        </span>
                                    </p>

                                    <p className="mt-5 text-sm leading-relaxed text-zinc-400">
                                        Build capabilities that remain useful
                                        wherever you live, work, train, and travel.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* =================================================
                        FRAMEWORK
                    ================================================== */}

                    <section
                        id="systems"
                        aria-labelledby="framework-heading"
                        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-28"
                    >
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                THE FRAMEWORK
                            </span>

                            <h2
                                id="framework-heading"
                                className="mt-3 text-3xl font-bold md:text-5xl"
                            >
                                Build the system. Then change the environment.
                            </h2>

                            <p className="mt-5 leading-relaxed text-zinc-400 md:text-lg">
                                Your location is temporary. Your capabilities are
                                portable. The Nomad Operating System helps you build
                                foundations that continue working wherever life takes you.
                            </p>
                        </div>

                        <div className="mx-auto mt-14 max-w-4xl">
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {pillars.map((pillar) => (
                                    <Link
                                        key={pillar.number}
                                        href={pillar.href}
                                        className="group border border-white/10 bg-[#03050c] p-6 text-center transition hover:border-cyan-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                                    >
                                        <span className="font-mono text-xs text-cyan-400">
                                            {pillar.number}
                                        </span>

                                        <h3 className="mt-3 text-lg font-bold group-hover:text-cyan-300">
                                            {pillar.title}
                                        </h3>

                                        <span className="mt-3 block font-mono text-[10px] tracking-widest text-zinc-500 group-hover:text-cyan-400">
                                            EXPLORE →
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            <div
                                aria-hidden="true"
                                className="my-6 text-center font-mono text-cyan-400"
                            >
                                ↓
                            </div>

                            <div className="border border-cyan-400/30 bg-cyan-500/5 p-8 text-center">
                                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                    THE OUTCOME
                                </span>

                                <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                                    Human Performance
                                </h3>

                                <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-zinc-400">
                                    A stronger, more adaptable foundation for health,
                                    productivity, movement, awareness, and life in motion.
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* =================================================
                        FOUR SYSTEMS
                    ================================================== */}

                    <section
                        aria-labelledby="systems-heading"
                        className="border-y border-white/10 bg-[#03050c]"
                    >
                        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">

                            <div className="mb-12 max-w-3xl">
                                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                    THE FOUR SYSTEMS
                                </span>

                                <h2
                                    id="systems-heading"
                                    className="mt-3 text-3xl font-bold md:text-5xl"
                                >
                                    Your digital nomad lifestyle needs a foundation.
                                </h2>

                                <p className="mt-5 leading-relaxed text-zinc-400 md:text-lg">
                                    Build systems that remain useful when your location,
                                    schedule, workspace, gym, climate, and culture change.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {pillars.map((pillar) => (
                                    <article
                                        key={pillar.number}
                                        className="border border-white/10 bg-[#050816] p-8 transition-colors hover:border-cyan-400/50"
                                    >
                                        <span className="font-mono text-xs text-cyan-400">
                                            SYSTEM // {pillar.number}
                                        </span>

                                        <h3 className="mt-3 text-2xl font-bold">
                                            {pillar.title}
                                        </h3>

                                        <p className="mt-2 text-lg text-zinc-200">
                                            {pillar.heading}
                                        </p>

                                        <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">
                                            {pillar.description}
                                        </p>

                                        <Link
                                            href={pillar.href}
                                            className="mt-6 inline-flex min-h-10 items-center font-mono text-xs text-cyan-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            {pillar.cta}
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* =================================================
                        PROBLEMS
                    ================================================== */}

                    <section
                        aria-labelledby="problems-heading"
                        className="mx-auto max-w-6xl px-6 py-24 md:py-28"
                    >
                        <div className="max-w-3xl">
                            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                LIFE IN MOTION
                            </span>

                            <h2
                                id="problems-heading"
                                className="mt-3 text-3xl font-bold md:text-5xl"
                            >
                                Solve the problems that come with freedom.
                            </h2>

                            <p className="mt-5 leading-relaxed text-zinc-400 md:text-lg">
                                A location independent lifestyle can create flexibility
                                without consistency. The Nomad Operating System focuses
                                on the practical problems that appear when your
                                environment keeps changing.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {problems.map((problem) => (
                                <article
                                    key={problem.title}
                                    className="border border-white/10 bg-[#03050c] p-6"
                                >
                                    <h3 className="text-lg font-semibold">
                                        {problem.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                        {problem.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </section>


                    {/* =================================================
                        HUMAN OPTIMIZATION
                    ================================================== */}

                    <section className="border-y border-white/10 bg-[#03050c]">
                        <div className="mx-auto max-w-5xl px-6 py-24 md:py-28">

                            <div className="text-center">
                                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                    HUMAN OPTIMIZATION
                                </span>

                                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                                    Freedom works better when you can manage yourself.
                                </h2>

                                <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-zinc-400 md:text-lg">
                                    A sustainable location independent lifestyle requires
                                    more than the ability to move. It requires the ability
                                    to maintain yourself while moving.
                                </p>
                            </div>

                            <div className="mt-12 grid gap-4 sm:grid-cols-2">

                                <div className="border border-white/10 p-6">
                                    <span className="font-mono text-xs text-cyan-400">
                                        HEALTH
                                    </span>

                                    <p className="mt-3 leading-relaxed text-zinc-400">
                                        Build healthy habits while traveling instead of
                                        allowing travel to dictate your health.
                                    </p>
                                </div>

                                <div className="border border-white/10 p-6">
                                    <span className="font-mono text-xs text-cyan-400">
                                        PRODUCTIVITY
                                    </span>

                                    <p className="mt-3 leading-relaxed text-zinc-400">
                                        Create productive systems that survive changing
                                        locations, schedules, and work environments.
                                    </p>
                                </div>

                                <div className="border border-white/10 p-6">
                                    <span className="font-mono text-xs text-cyan-400">
                                        WELLNESS
                                    </span>

                                    <p className="mt-3 leading-relaxed text-zinc-400">
                                        Support physical and mental wellbeing through
                                        movement, recovery, awareness, and sustainable routines.
                                    </p>
                                </div>

                                <div className="border border-white/10 p-6">
                                    <span className="font-mono text-xs text-cyan-400">
                                        ADAPTABILITY
                                    </span>

                                    <p className="mt-3 leading-relaxed text-zinc-400">
                                        Learn to adjust your systems without abandoning
                                        the foundations that keep you performing.
                                    </p>
                                </div>

                            </div>

                            <div className="mt-10 border border-cyan-400/20 bg-cyan-500/5 p-6 text-center">
                                <p className="text-lg font-medium text-zinc-200">
                                    Health is the outcome.
                                </p>

                                <p className="mt-2 text-zinc-400">
                                    Discipline, Fitness, Yoga, and Mindset are the
                                    systems that help support it.
                                </p>
                            </div>
                        </div>
                    </section>


                    {/* =================================================
                        CORE PHILOSOPHY
                    ================================================== */}

                    <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">

                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                            THE NOMAD PHILOSOPHY
                        </span>

                        <h2 className="mt-4 text-3xl font-bold leading-tight md:text-6xl">
                            Your environment changes.
                            <span className="block text-cyan-400">
                                Your foundation doesn&apos;t.
                            </span>
                        </h2>

                        <p className="mx-auto mt-7 max-w-3xl leading-relaxed text-zinc-400 md:text-lg">
                            The goal isn&apos;t to create a perfect routine that only
                            works in one city. It&apos;s to develop systems that remain
                            useful when the city, schedule, workspace, gym, climate,
                            and culture change.
                        </p>

                        <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-zinc-300 md:text-lg">
                            You don&apos;t need the perfect environment. You need a
                            foundation strong enough to adapt to imperfect ones.
                        </p>

                    </section>


                    {/* =================================================
                        FIELD MANUAL / GUIDES
                    ================================================== */}

                    <section
                        aria-labelledby="guides-heading"
                        className="border-y border-white/10 bg-[#03050c]"
                    >
                        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">

                            <div className="mb-10 max-w-3xl">
                                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                    FROM THE FIELD MANUAL
                                </span>

                                <h2
                                    id="guides-heading"
                                    className="mt-3 text-3xl font-bold md:text-5xl"
                                >
                                    Digital Nomad Lifestyle Guides
                                </h2>

                                <p className="mt-4 leading-relaxed text-zinc-400 md:text-lg">
                                    Practical guides for building health, fitness,
                                    productivity, discipline, yoga, and mental clarity
                                    while working and traveling around the world.
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                {articles.map((article) => (
                                    <Link
                                        key={article.href}
                                        href={article.href}
                                        className="group border border-white/10 bg-[#050816] p-6 transition-colors hover:border-cyan-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050c]"
                                    >
                                        <span className="font-mono text-xs text-cyan-400">
                                            {article.category}
                                        </span>

                                        <h3 className="mt-2 text-xl font-bold transition-colors group-hover:text-cyan-300">
                                            {article.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                                            {article.description}
                                        </p>

                                        <span className="mt-5 block font-mono text-xs text-cyan-400">
                                            READ →
                                        </span>
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-10 text-center">
                                <Link
                                    href="/blog/"
                                    className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-widest text-cyan-400 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                >
                                    EXPLORE THE NOMAD BLOG →
                                </Link>
                            </div>

                        </div>
                    </section>


                    {/* =================================================
                        RESOURCE HUB
                    ================================================== */}

                    <section
                        aria-labelledby="resources-heading"
                        className="border-t border-white/10"
                    >
                        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">

                            <div className="mb-10 max-w-3xl">
                                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                    DIGITAL NOMAD RESOURCES
                                </span>

                                <h2
                                    id="resources-heading"
                                    className="mt-3 text-3xl font-bold md:text-4xl"
                                >
                                    Explore the systems behind a better digital nomad lifestyle.
                                </h2>

                                <p className="mt-4 leading-relaxed text-zinc-400">
                                    Go deeper into the four systems and build the
                                    foundations that make location-independent living sustainable.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {resources.map((resource) => (
                                    <Link
                                        key={resource.label}
                                        href={resource.href}
                                        className="group border border-white/10 bg-[#03050c] p-5 transition hover:border-cyan-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                                    >
                                        <span className="font-mono text-xs text-cyan-400">
                                            {resource.label}
                                        </span>

                                        <h3 className="mt-3 font-semibold group-hover:text-cyan-300">
                                            {resource.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                                            {resource.description}
                                        </p>

                                        <span className="mt-4 block font-mono text-[10px] tracking-widest text-zinc-500 group-hover:text-cyan-400">
                                            EXPLORE →
                                        </span>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </section>


                    {/* =================================================
                        AUTHORITY / EDITORIAL STANDARD
                    ================================================== */}

                    <section className="border-y border-white/10 bg-[#03050c]">
                        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">

                            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">

                                <div>
                                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                                        NOMADLIFEXP STANDARD
                                    </span>

                                    <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                                        Practical systems over perfect environments.
                                    </h2>
                                </div>

                                <div>
                                    <p className="leading-relaxed text-zinc-400">
                                        NomadLifeXP focuses on practical frameworks for
                                        people building healthier, more capable,
                                        disciplined, and adaptable lives while moving
                                        through changing environments.
                                    </p>

                                    <p className="mt-4 leading-relaxed text-zinc-400">
                                        The goal is not to present one perfect routine
                                        for everyone. It is to develop principles and
                                        systems that can be adapted to different
                                        locations, schedules, resources, and lifestyles.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <Link
                                            href="/about/"
                                            className="inline-flex min-h-10 items-center border border-white/15 px-5 py-3 font-mono text-xs text-cyan-400 transition hover:border-cyan-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            ABOUT NOMADLIFEXP →
                                        </Link>

                                        <Link
                                            href="/"
                                            className="inline-flex min-h-10 items-center border border-white/15 px-5 py-3 font-mono text-xs text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            EXPLORE THE SYSTEM →
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>


                    {/* =================================================
                        FINAL CTA
                    ================================================== */}

                    <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">

                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                            PART OF NOMADLIFEXP
                        </span>

                        <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                            Digital nomad life is one environment.
                            <span className="block text-cyan-400">
                                Human performance is the system.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-zinc-400 md:text-lg">
                            Start with the system that matters most to you,
                            then build the rest of your foundation over time.
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

                            <Link
                                href="/fitness/fitness-for-digital-nomads/"
                                className="inline-flex min-h-12 items-center justify-center bg-cyan-500 px-7 py-4 font-mono text-xs font-bold tracking-wider text-black transition hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                            >
                                START WITH FITNESS →
                            </Link>

                            <Link
                                href="/discipline/self-discipline-while-traveling/"
                                className="inline-flex min-h-12 items-center justify-center border border-white/15 px-7 py-4 font-mono text-xs font-bold tracking-wider text-zinc-300 transition hover:border-cyan-400 hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816]"
                            >
                                BUILD DISCIPLINE →
                            </Link>

                        </div>

                    </section>


                    {/* =================================================
                        FOOTER
                    ================================================== */}

                    <footer className="border-t border-white/10 bg-[#03050c]">
                        <div className="mx-auto max-w-4xl px-6 py-16 text-center">

                            <h2 className="text-2xl font-bold md:text-4xl">
                                LIVE ANYWHERE.
                            </h2>

                            <p className="mt-4 font-mono text-xs tracking-widest text-cyan-400">
                                ADAPT ANYWHERE. BUILD YOURSELF EVERYWHERE.
                            </p>

                            <p className="mt-5 text-sm font-medium text-zinc-400">
                                Your environment changes. Your foundation doesn&apos;t.
                            </p>

                            <nav
                                aria-label="Footer navigation"
                                className="mt-8"
                            >
                                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-widest text-white">
                                    <li>
                                        <Link
                                            href="/"
                                            className="transition hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/blog/"
                                            className="transition hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            href="/about/"
                                            className="transition hover:text-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </nav>

                            <div className="mt-8 text-[10px] font-mono uppercase tracking-widest text-white">
                                © {new Date().getFullYear()} NomadLifeXP
                            </div>

                        </div>
                    </footer>

                </div>
            </main>
        </>
    );
}








