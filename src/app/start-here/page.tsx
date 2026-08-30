import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Evolve In Motion | Personal Development System for Discipline, Fitness & Growth | NomadLifeXP",
    description:
        "Evolve In Motion with NomadLifeXP — a personal operating system combining self-discipline, habit building, fitness, mindset training, and daily routines for lasting transformation.",
    keywords:
        "daily discipline system, practical fitness habits, core stability training, mental focus framework, behavioral habits engine, functional mobility routines, digital distraction immunity, personal operating system",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "https://www.nomadlifexp.com/start-here",
    },
    openGraph: {
        title: "Evolve In Motion | Personal Development System for Discipline, Fitness & Growth | NomadLifeXP",
        description:
            "Evolve In Motion with NomadLifeXP — a personal operating system combining self-discipline, habit building, fitness, mindset training, and daily routines for lasting transformation.",
        url: "https://www.nomadlifexp.com/start-here",
        type: "website",
        siteName: "NomadLifeXP",
        images: [
            {
                url: "https://www.nomadlifexp.com/og-main.jpg",
                width: 1200,
                height: 630,
                alt: "NomadLifeXP Personal Operating System",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Evolve In Motion | Personal Development System | NomadLifeXP",
        description:
            "Build self-discipline, functional fitness strength, mobility, and razor-sharp focus through structured daily execution protocols.",
        images: ["https://www.nomadlifexp.com/og-main.jpg"],
    },
};

interface DeploymentStep {
    id: string;
    systemCode: string;
    title: string;
    subtitle: string;
    description: string;
    route: string;
    linkTitle: string;
    highlights: readonly string[];
}

const DEPLOYMENT_STEPS: readonly DeploymentStep[] = [
    {
        id: "STEP_01",
        systemCode: "MODULE_01 // DISCIPLINE ENGINE",
        title: "Discipline Engine",
        subtitle: "Self-Discipline & Habit Building System",
        description: "Build habits that survive changing emotions, environments, and circumstances.",
        route: "/blog/category/discipline",
        linkTitle: "Read the foundational guide on building daily discipline protocols",
        highlights: [
            "Strong daily routines",
            "Better consistency",
            "Reduced procrastination",
            "Improved focus",
            "Identity-based habits",
        ],
    },
    {
        id: "STEP_02",
        systemCode: "MODULE_02 // PHYSICAL PERFORMANCE ENGINE",
        title: "Physical Performance Engine",
        subtitle: "Fitness, Strength & Healthy Lifestyle System",
        description:
            "Your body is the foundation of your evolution. Develop physical strength, energy, mobility, and resilience through structured training.",
        route: "/blog/category/fitness",
        linkTitle: "Deploy the absolute functional fitness and strength training protocol",
        highlights: [
            "Strength development",
            "Fitness improvement",
            "Better movement",
            "Increased energy",
            "Long-term health",
        ],
    },
    {
        id: "STEP_03",
        systemCode: "MODULE_03 // SOMATIC RECOVERY ENGINE",
        title: "Somatic Recovery Engine",
        subtitle: "Yoga, Mobility & Mind-Body Balance System",
        description:
            "Reconnect your body and mind through movement, flexibility, breathing, and recovery practices.",
        route: "/blog/category/yoga",
        linkTitle: "Access the systematic functional yoga mobility routine blueprint",
        highlights: [
            "Mobility",
            "Flexibility",
            "Stress regulation",
            "Recovery",
            "Body awareness",
        ],
    },
    {
        id: "STEP_04",
        systemCode: "MODULE_04 // COGNITIVE PERFORMANCE ENGINE",
        title: "Cognitive Performance Engine",
        subtitle: "Mindset, Focus & Productivity System",
        description: "Control your attention. Improve your thinking. Build mental resilience.",
        route: "/blog/category/mindset",
        linkTitle: "Initialize the guide on mental focus tracking and digital distraction immunity",
        highlights: [
            "Deep focus",
            "Better decision-making",
            "Digital discipline",
            "Mental clarity",
            "Productivity",
        ],
    },
] as const;

const FAQS = [
    {
        question: "What is NomadLifeXP?",
        answer:
            "NomadLifeXP is a personal development system that combines discipline, fitness, mindset, and habit-building frameworks to help people create lasting lifestyle transformation.",
    },
    {
        question: "How do I build self-discipline?",
        answer:
            "Self-discipline is developed through consistent routines, structured habits, and systems that reduce dependence on motivation.",
    },
    {
        question: "What does \"Evolve In Motion\" mean?",
        answer:
            "Evolve In Motion represents continuous personal growth through action. Transformation happens through repeated behaviours, not temporary inspiration.",
    },
    {
        question: "Is this a fitness program or a mindset system?",
        answer:
            "It combines both. NomadLifeXP connects physical training, mental performance, habits, and lifestyle design into one integrated system.",
    },
] as const;

export default function StartHerePage() {
    const graphSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": "https://www.nomadlifexp.com/#website",
                url: "https://www.nomadlifexp.com",
                name: "NomadLifeXP",
                description: "Human optimization frameworks for physical capability and mental clarity.",
                publisher: { "@id": "https://www.nomadlifexp.com/#organization" },
            },
            {
                "@type": "Organization",
                "@id": "https://www.nomadlifexp.com/#organization",
                name: "NomadLifeXP",
                url: "https://www.nomadlifexp.com",
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://www.nomadlifexp.com/#logo",
                    url: "https://www.nomadlifexp.com/logo.png",
                    caption: "NomadLifeXP Logo",
                },
            },
            {
                "@type": "Person",
                "@id": "https://www.nomadlifexp.com/#author",
                name: "NomadLifeXP Editorial Team",
                url: "https://www.nomadlifexp.com/about",
            },
            {
                "@type": "WebPage",
                "@id": "https://www.nomadlifexp.com/start-here",
                url: "https://www.nomadlifexp.com/start-here",
                name: "Evolve In Motion | Personal Development System for Discipline, Fitness & Growth | NomadLifeXP",
                description:
                    "Evolve In Motion with NomadLifeXP — a personal operating system combining self-discipline, habit building, fitness, mindset training, and daily routines for lasting transformation.",
                isPartOf: { "@type": "WebSite", "@id": "https://www.nomadlifexp.com/#website" },
                author: { "@id": "https://www.nomadlifexp.com/#author" },
                inLanguage: "en-US",
                datePublished: "2026-01-10T08:00:00+00:00",
                dateModified: "2026-07-29T00:00:00+00:00",
                primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: "https://www.nomadlifexp.com/og-main.jpg",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.nomadlifexp.com/start-here/#faq",
                mainEntity: FAQS.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.nomadlifexp.com/start-here/#breadcrumb",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "System Home", item: "https://www.nomadlifexp.com" },
                    { "@type": "ListItem", position: 2, name: "Start Here Sequence", item: "https://www.nomadlifexp.com/start-here" },
                ],
            },
        ],
    };

    return (
        <div className="relative min-h-screen bg-[#050914] text-[#EDF6FF] antialiased font-sans selection:bg-cyan-500 selection:text-black overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
            />

            {/* Decorative Ambient Background */}
            <div
                className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none motion-reduce:hidden"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
                aria-hidden="true"
            />

            <main className="max-w-5xl mx-auto px-6 pt-24 md:pt-36 pb-32 relative z-10 animate-[fadeIn_0.5s_ease-out] motion-reduce:animate-none">
                {/* Navigation */}
                <nav
                    className="mb-12 flex flex-col gap-3 border-b border-neutral-900/60 pb-6 text-xs font-mono uppercase tracking-widest"
                    aria-label="Page navigation"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-white hover:text-cyan-400 transition-colors duration-200 group"
                    >
                        <span
                            className="transition-transform duration-200 group-hover:-translate-x-1 motion-reduce:transform-none"
                            aria-hidden="true"
                        >
                            ←
                        </span>
                        <span>NOMADLIFEXP</span>
                    </Link>

                    <ol className="flex items-center gap-3">
                        <li>
                            <Link
                                href="/"
                                className="text-white hover:text-cyan-400 transition-colors duration-200"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="text-neutral-800" aria-hidden="true">
                            /
                        </li>

                        <li className="text-cyan-400" aria-current="page">
                            Start Here
                        </li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start mb-16">
                    <header className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-3">
                            <span
                                className="h-2 w-2 rounded-full bg-cyan-400 animate-[pulse_2s_infinite] motion-reduce:animate-none"
                                aria-hidden="true"
                            />
                            <p className="text-xs uppercase tracking-[0.4em] font-mono text-cyan-400">
                                NomadLifeXP // Personal Operating System
                            </p>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none text-white">
                            Evolve In <br />
                            <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent pb-1 block md:inline">
                                Motion
                            </span>
                        </h1>

                        <div className="space-y-4">
                            <h2 className="text-lg sm:text-xl font-semibold text-neutral-200 tracking-tight">
                                Build Your Personal Operating System for Discipline, Fitness, Mindset & Growth
                            </h2>

                            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed tracking-tight border-l-2 border-cyan-500/30 pl-4 py-1">
                                NomadLifeXP is a personal development system designed to transform how you move, think, and perform. Build self-discipline through powerful habits, strengthen your body through structured fitness, sharpen your mindset, and create a lifestyle built for consistent growth.
                            </p>

                            <blockquote className="border-l-2 border-neutral-800 pl-4 py-1 text-xs sm:text-sm font-mono text-neutral-400 space-y-1">
                                <p className="text-cyan-400 font-medium">
                                    &ldquo;Evolution is not a destination. It is a system.&rdquo;
                                </p>
                                <p className="text-neutral-500 italic">
                                    Every action you repeat becomes part of who you become.
                                </p>
                            </blockquote>
                        </div>
                    </header>

                    {/* System Status Matrix Widget */}
                    <aside className="w-full border border-neutral-800 bg-neutral-950/80 p-6 font-mono text-xs rounded-none backdrop-blur-sm space-y-6 md:animate-[fadeIn_0.7s_ease-out] motion-reduce:animate-none">
                        <div>
                            <p className="text-neutral-600 uppercase tracking-widest text-[10px] mb-2 font-bold">
                // SYSTEM STATUS
                            </p>
                            <div className="space-y-1.5 text-neutral-400">
                                <div className="flex justify-between border-b border-neutral-900/60 pb-1">
                                    <span>PROFILE:</span>
                                    <span className="text-white font-bold">NOMAD</span>
                                </div>
                                <div className="flex justify-between border-b border-neutral-900/60 pb-1">
                                    <span>SYSTEM:</span>
                                    <span className="text-emerald-400 font-bold tracking-widest animate-pulse motion-reduce:animate-none">
                                        ONLINE
                                    </span>
                                </div>
                                <div className="flex justify-between border-b border-neutral-900/60 pb-1">
                                    <span>CORE STATE:</span>
                                    <span className="text-neutral-200 font-bold">READY</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>MODULES:</span>
                                    <span className="text-cyan-400 font-bold">4/4 ACTIVE</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-neutral-600 uppercase tracking-widest text-[10px] mb-2 font-bold">
                // MODULE DIRECTORY
                            </p>
                            <div className="space-y-1 text-[11px] text-neutral-500">
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-700">[01]</span> Discipline Engine
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-700">[02]</span> Physical Output
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-700">[03]</span> Somatic Recovery
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-neutral-700">[04]</span> Cognitive Performance
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Operating Philosophy */}
                <section className="space-y-6 mb-16 text-neutral-300 text-sm sm:text-base leading-relaxed font-light border-t border-neutral-900 pt-12">
                    <h2 className="text-xl font-black uppercase tracking-tight text-white font-mono">
            // The Personal Operating System Behind Lasting Transformation
                    </h2>
                    <div className="space-y-3 text-neutral-400">
                        <p>
                            Most people try to change their lives through motivation. <strong className="text-neutral-200">Motivation is temporary. Systems create consistency.</strong>
                        </p>
                        <p>
                            NomadLifeXP transforms self-improvement into a structured operating system by combining habit building, self-discipline, fitness routines, mobility practices, mindset training, and productivity systems.
                        </p>
                        <p className="text-neutral-300 font-normal">
                            Instead of depending on willpower, you build repeatable daily protocols that create lasting personal growth.
                        </p>
                    </div>
                </section>

                {/* The 4 Evolution Modules */}
                <section className="space-y-6 mb-20" aria-label="The Four Evolution Modules">
                    <header className="border-b border-neutral-900 pb-3">
                        <h2 className="text-2xl font-black uppercase tracking-tight text-white">
                            The Four Evolution Modules
                        </h2>
                    </header>

                    <div className="grid grid-cols-1 gap-4">
                        {DEPLOYMENT_STEPS.map((step) => (
                            <Link
                                key={step.id}
                                href={step.route}
                                title={step.linkTitle}
                                className="group block border border-neutral-900 p-6 md:p-8 hover:border-cyan-500/40 hover:bg-neutral-950/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.02)] transition-all duration-300 relative bg-neutral-950/20 rounded-none focus:outline-none focus:ring-1 focus:ring-cyan-500 motion-reduce:transition-none"
                            >
                                <div className="grid md:grid-cols-12 gap-6 items-start">
                                    <div className="md:col-span-6 space-y-3">
                                        <div className="space-y-1">
                                            <p className="font-mono text-[9px] text-neutral-600 group-hover:text-cyan-500/60 transition-colors duration-200">
                                                {step.systemCode}
                                            </p>
                                            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200">
                                                {step.title}
                                            </h3>
                                            <p className="text-xs font-mono text-cyan-400/80">{step.subtitle}</p>
                                        </div>
                                        <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-200">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-neutral-900 pt-4 md:pt-0 md:pl-6 space-y-2 font-mono text-[11px]">
                                        <div className="text-neutral-600 uppercase tracking-wider text-[9px]">
                      // SYSTEM HIGHLIGHTS
                                        </div>
                                        <div className="space-y-1">
                                            {step.highlights.map((item, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-neutral-400">
                                                    <span className="text-cyan-400 font-bold" aria-hidden="true">
                                                        ?
                                                    </span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 text-left md:text-right flex md:flex-col justify-between items-start md:items-end h-full pt-2 md:pt-0">
                                        <span className="font-mono text-[9px] text-emerald-400/90 bg-emerald-950/20 border border-emerald-900/50 px-2 py-0.5 uppercase tracking-widest font-bold">
                                            ACTIVE
                                        </span>
                                        <span className="hidden md:inline font-mono text-[10px] uppercase tracking-wider text-neutral-600 group-hover:text-cyan-400 transition-colors duration-200">
                                            INITIALIZE <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* How NomadLifeXP Creates Change & Evolution Framework */}
                <div className="grid md:grid-cols-2 gap-8 mb-20 border-t border-b border-neutral-900/60 py-12">
                    <section className="space-y-4" aria-labelledby="method-heading">
                        <div className="space-y-1">
                            <p className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
                // EXECUTION OVER INFORMATION
                            </p>
                            <h2 id="method-heading" className="text-lg font-black uppercase tracking-tight text-white">
                                How NomadLifeXP Creates Change
                            </h2>
                        </div>
                        <p className="text-sm text-neutral-400 leading-relaxed font-light">
                            Information Is Everywhere. Execution Is Rare. Most people know what they should do. The difference between knowing and becoming is execution. NomadLifeXP bridges that gap through:
                        </p>
                        <ul className="space-y-3 font-mono text-xs text-neutral-300">
                            <li className="border border-neutral-900 bg-neutral-950/40 p-3">
                                <strong className="text-cyan-400 block mb-0.5">Simple Systems</strong> Clear actions without unnecessary complexity.
                            </li>
                            <li className="border border-neutral-900 bg-neutral-950/40 p-3">
                                <strong className="text-cyan-400 block mb-0.5">Daily Protocols</strong> Small behaviours repeated until they become automatic.
                            </li>
                            <li className="border border-neutral-900 bg-neutral-950/40 p-3">
                                <strong className="text-cyan-400 block mb-0.5">Identity Transformation</strong> Your habits become evidence of the person you are becoming.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4" aria-labelledby="framework-heading">
                        <div className="space-y-1">
                            <p className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
                // SYSTEM CORE
                            </p>
                            <h2 id="framework-heading" className="text-lg font-black uppercase tracking-tight text-white">
                                Evolution Framework
                            </h2>
                        </div>
                        <div className="space-y-3 font-mono text-xs">
                            <div className="border border-neutral-900 bg-neutral-950/40 p-4 space-y-1">
                                <p className="text-white font-bold uppercase">// MOVE BETTER</p>
                                <p className="text-neutral-400 font-sans font-light text-sm">
                                    Build physical strength, mobility, and energy.
                                </p>
                            </div>
                            <div className="border border-neutral-900 bg-neutral-950/40 p-4 space-y-1">
                                <p className="text-white font-bold uppercase">// THINK BETTER</p>
                                <p className="text-neutral-400 font-sans font-light text-sm">
                                    Develop focus, clarity, and mental control.
                                </p>
                            </div>
                            <div className="border border-neutral-900 bg-neutral-950/40 p-4 space-y-1">
                                <p className="text-white font-bold uppercase">// LIVE BETTER</p>
                                <p className="text-neutral-400 font-sans font-light text-sm">
                                    Create systems that support your highest potential.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Frequently Asked Questions */}
                <section className="space-y-6 mb-20" aria-labelledby="faq-heading">
                    <header className="border-b border-neutral-900 pb-3">
                        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold">
              // FAQ
                        </p>
                        <h2 id="faq-heading" className="text-2xl font-black uppercase tracking-tight text-white">
                            Frequently Asked Questions
                        </h2>
                    </header>

                    <div className="grid md:grid-cols-2 gap-6">
                        {FAQS.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-neutral-900 bg-neutral-950/40 p-6 space-y-2 rounded-none"
                            >
                                <h3 className="text-base font-bold text-white tracking-tight">{faq.question}</h3>
                                <p className="text-sm text-neutral-400 font-light leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <section
                    className="border border-neutral-900 bg-neutral-950/80 p-8 md:p-12 text-center space-y-6 relative rounded-none backdrop-blur-sm overflow-hidden"
                    aria-label="Begin Your Evolution"
                >
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
                        aria-hidden="true"
                    />
                    <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 font-bold">
                            FINAL CTA
                        </p>
                        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white">
                            Begin Your Evolution
                        </h2>
                    </div>
                    <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-400 font-light">
                        You do not need more motivation. <br />
                        You need a system that moves with you.
                    </p>
                    <div className="pt-4">
                        <Link
                            href="/blog/category/discipline"
                            title="Start your NomadLifeXP system"
                            className="inline-block border border-cyan-500/50 bg-cyan-950/20 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] font-mono text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-none font-bold"
                        >
                            [ START YOUR NOMADLIFEXP SYSTEM &rarr; ]
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}

