import Link from "next/link";
import { Metadata } from "next";

interface SystemItem {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly coreFocus: string;
  readonly description: string;
  readonly primaryOutcome: string;
  readonly href: string;
}

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface JourneyStage {
  readonly step: string;
  readonly title: string;
  readonly desc: string;
}

interface KnowledgeCategory {
  readonly title: string;
  readonly focus: string;
  readonly href: string;
}

const NAVIGATION: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Systems", href: "/discipline-system" },
  { label: "Blog", href: "/blog" },
  { label: "Start", href: "/start-here" },
];

const FOUR_SYSTEMS: readonly SystemItem[] = [
  {
    id: "sys-discipline",
    number: "01",
    title: "Discipline System",
    coreFocus: "HABITS. FOCUS. CONSISTENCY.",
    description: "Build the ability to act with intention, follow through, and create consistency that lasts.",
    primaryOutcome: "Stronger routines. Better focus. Greater self-control.",
    href: "/blog/category/discipline",
  },
  {
    id: "sys-fitness",
    number: "02",
    title: "Fitness System",
    coreFocus: "STRENGTH. MOBILITY. PERFORMANCE.",
    description: "Build physical capacity through strength, movement, conditioning, and intelligent recovery.",
    primaryOutcome: "A stronger, more capable, more resilient body.",
    href: "/blog/category/fitness",
  },
  {
    id: "sys-yoga",
    number: "03",
    title: "Yoga System",
    coreFocus: "MOVEMENT. AWARENESS. RECOVERY.",
    description: "Develop mobility, breath, body awareness, balance, and deeper control through mindful movement.",
    primaryOutcome: "Better movement. Better recovery. Greater mind-body connection.",
    href: "/blog/category/yoga",
  },
  {
    id: "sys-mindset",
    number: "04",
    title: "Mindset System",
    coreFocus: "GROWTH. RESILIENCE. CONFIDENCE.",
    description: "Develop the mental foundations required to handle pressure, overcome resistance, and keep evolving.",
    primaryOutcome: "Greater resilience. Stronger confidence. A growth-oriented mind.",
    href: "/blog/category/mindset",
  },
];

const JOURNEY_STAGES: readonly JourneyStage[] = [
  { step: "01", title: "AWARENESS", desc: "Understand yourself, your habits, and your current state." },
  { step: "02", title: "DISCIPLINE", desc: "Create systems that turn intention into consistent action." },
  { step: "03", title: "STRENGTH", desc: "Develop physical and mental resilience." },
  { step: "04", title: "BALANCE", desc: "Align performance, recovery, movement, and lifestyle." },
  { step: "05", title: "EVOLUTION", desc: "Keep learning, adapting, and becoming more capable." },
];

const OPTIMIZATION_OUTCOMES: readonly string[] = [
  "Stronger Body",
  "Sharper Mind",
  "Better Habits",
  "Greater Discipline",
  "Improved Performance",
  "Sustainable Growth",
];

const KNOWLEDGE_CATEGORIES: readonly KnowledgeCategory[] = [
  { title: "DISCIPLINE", focus: "Habits · Focus · Consistency", href: "/blog/category/discipline" },
  { title: "FITNESS", focus: "Training · Strength · Recovery", href: "/blog/category/fitness" },
  { title: "YOGA", focus: "Movement · Breath · Mobility", href: "/blog/category/yoga" },
  { title: "MINDSET", focus: "Resilience · Confidence · Growth", href: "/blog/category/mindset" },
];

const SOCIAL_LINKS = {
  youtube:
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_YOUTUBE_URL) ||
    "https://youtube.com",
  instagram:
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_INSTAGRAM_URL) ||
    "https://instagram.com",
};

export const metadata: Metadata = {
  title: "NomadLifeXP // Human Optimization Platform",
  description:
    "NomadLifeXP helps you build discipline, fitness, mindset, and habits through structured systems designed for lifelong growth and human evolution.",
  openGraph: {
    title: "NomadLifeXP // Human Optimization Platform",
    description:
      "NomadLifeXP helps you build discipline, fitness, mindset, and habits through structured systems designed for lifelong growth and human evolution.",
    url: "https://nomadlifexp.com",
    siteName: "NomadLifeXP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NomadLifeXP // Human Optimization Platform",
    description:
      "NomadLifeXP helps you build discipline, fitness, mindset, and habits through structured systems designed for lifelong growth and human evolution.",
  },
};

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black overflow-x-hidden antialiased flex flex-col justify-between font-sans">
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      >
        <div className="absolute top-[10%] left-[25%] w-[500px] h-[500px] rounded-full bg-cyan-500/[0.02] blur-[160px]" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-black tracking-[0.25em] text-sm uppercase flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded group"
            aria-label="NomadLifeXP Home"
          >
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-slate-400"
            aria-label="Main Navigation"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-cyan-300 transition-colors focus:outline-none focus:text-cyan-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/start-here"
              className="px-5 py-2.5 border border-cyan-400 text-cyan-300 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cyan-400 hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Start Here
            </Link>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-grow relative z-10">
        <section
          className="relative pt-48 sm:pt-60 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center"
          aria-labelledby="hero-title"
        >
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-cyan-300 mb-6 text-center">
              HUMAN OPTIMIZATION PLATFORM
            </p>

            <h1
              id="hero-title"
              className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.95] mb-6 text-white text-center"
            >
              BUILD YOURSELF <br />
              <span className="text-cyan-400">LIKE A SYSTEM</span>
            </h1>

            <div
              className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] font-mono font-semibold text-cyan-300/80 mb-6 flex-wrap"
              aria-label="System Pillars"
            >
              <span>Discipline</span>
              <span className="text-white/30" aria-hidden="true">
                •
              </span>
              <span>Fitness</span>
              <span className="text-white/30" aria-hidden="true">
                •
              </span>
              <span>Yoga</span>
              <span className="text-white/30" aria-hidden="true">
                •
              </span>
              <span>Mindset</span>
            </div>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8 text-center font-light">
              NomadLifeXP helps you build discipline, fitness, mindset, and habits
              through structured systems designed for lifelong growth and human
              evolution.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/start-here"
                className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition shadow-[0_0_25px_rgba(34,211,238,0.25)] text-center focus:outline-none focus:ring-2 focus:ring-white"
              >
                START YOUR EVOLUTION &rarr;
              </Link>
              <Link
                href="/discipline-system"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-cyan-400 hover:text-cyan-300 transition text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                EXPLORE SYSTEMS &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section
          className="relative w-full h-[70vh] sm:h-[85vh] min-h-[500px] overflow-hidden my-12 flex items-center justify-center bg-cyan-950/20"
          aria-label="NomadLifeXP Cinematic Showcase"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            aria-hidden="true"
            onCanPlay={(e) => {
              e.currentTarget.play().catch(() => {
                // Silently catch blocks from restrictive browser autoplay policies
              });
            }}
          >
            <source src="/videos/yoga-mind-body-awareness.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-[#050816]/70 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            <span className="text-xs font-mono font-extrabold uppercase tracking-[0.3em] sm:tracking-[0.5em] text-cyan-300 mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              EVOLVE IN MOTION
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-wider text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Movement // Breath // Control
            </h2>
            <p className="text-slate-100 text-xs sm:text-sm font-light max-w-md tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Yoga for movement, awareness, mobility, breath, and recovery.
            </p>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-6 text-center">
              THE PHILOSOPHY
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05] text-center mb-6">
              Transformation <br className="hidden sm:inline" />
              is not a moment. <br />
              <span className="text-cyan-400">It is a system.</span>
            </h2>
            <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base font-light leading-relaxed text-center mb-6">
              Real transformation is built through consistent action, intentional
              habits, structured routines, and systems that compound over time.
            </p>
            <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-300/80">
              Motivation fades. Systems endure.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center border-t border-white/10">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-3">
              THE FOUR SYSTEMS
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-center mb-4">
              Four systems. One direction.
            </h2>
            <p className="text-slate-400 text-sm font-light">
              The NomadLifeXP framework brings together four interconnected systems
              designed to develop a stronger, more capable, and more balanced
              human.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {FOUR_SYSTEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group p-8 rounded-xl border border-white/10 bg-[#050816]/60 hover:border-cyan-400/50 transition-all flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <div>
                  <div className="text-cyan-400 font-mono text-xs tracking-widest font-bold mb-4">
                    {item.number} // SYSTEM
                  </div>
                  <h3 className="font-bold uppercase text-2xl mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-cyan-400/90 mb-4 tracking-wider">
                    {item.coreFocus}
                  </p>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="border-t border-white/10 pt-4 mt-2">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-slate-500 mb-1">
                      Primary Outcome:
                    </p>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {item.primaryOutcome}
                    </p>
                  </div>
                </div>
                <div className="mt-6 text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  ENTER SYSTEM &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-8 text-center">
          <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-950/15 backdrop-blur-sm flex flex-col items-center">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-400 mb-2">
              THE NOMADLIFEXP FRAMEWORK
            </span>
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold">
              4 SYSTEMS → 5 STAGES → 1 CONTINUOUS PROCESS
            </p>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.01] py-24 text-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-3 text-center">
              THE JOURNEY
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-center">
              From Chaos <span className="text-cyan-400">To Clarity</span>
            </h2>
            <p className="text-slate-400 text-sm font-light mb-16 text-center max-w-md">
              Every transformation begins with awareness and develops through
              deliberate action.
            </p>

            <div className="w-full max-w-2xl flex flex-col items-center gap-4 mb-12">
              {JOURNEY_STAGES.map((stage, index) => (
                <div
                  key={stage.step}
                  className="w-full flex flex-col items-center"
                >
                  <div className="w-full p-6 rounded-lg border border-white/10 bg-[#050816]/40 hover:border-cyan-400/40 transition-colors text-left flex items-start gap-6">
                    <span className="font-mono text-cyan-400 font-bold text-sm tracking-widest pt-0.5">
                      {stage.step} —
                    </span>
                    <div>
                      <h3 className="text-xs font-bold font-mono uppercase tracking-widest text-white mb-1">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>

                  {index < JOURNEY_STAGES.length - 1 && (
                    <div
                      className="h-6 w-[1px] bg-cyan-500/30 my-1"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>

            <p className="text-xs font-mono tracking-[0.3em] uppercase text-cyan-300/80">
              THE PROCESS NEVER STOPS.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
            WHY HUMAN OPTIMIZATION?
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-6 text-center leading-tight">
            Build the next <br />
            <span className="text-cyan-400">version of yourself</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light mb-2 text-center max-w-xl">
            Human optimization is not about becoming perfect.
          </p>
          <p className="text-slate-400 text-sm font-light mb-12 text-center max-w-xl">
            It is about becoming stronger, sharper, healthier, and more
            capable—one system at a time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {OPTIMIZATION_OUTCOMES.map((benefit) => (
              <div
                key={benefit}
                className="p-4 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center gap-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-200"
              >
                <span className="text-cyan-400 font-bold" aria-hidden="true">
                  ✓
                </span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-white/[0.01] py-20 px-4 text-center">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
              KNOWLEDGE LIBRARY
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-center">
              Learn. Apply. Evolve.
            </h2>
            <p className="text-slate-400 text-sm font-light mb-12 text-center max-w-md">
              Explore practical frameworks, guides, and ideas designed to help
              you turn knowledge into action.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-12 text-left">
              {KNOWLEDGE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.01] hover:border-cyan-400/50 transition-all flex flex-col justify-between group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <div>
                    <h3 className="font-bold uppercase text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {cat.focus}
                    </p>
                  </div>
                  <div className="mt-6 text-xs font-bold uppercase tracking-widest text-cyan-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    &rarr;
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/knowledge-index"
              className="inline-block px-8 py-3 border border-cyan-400 text-cyan-300 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cyan-400 hover:text-black transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              EXPLORE THE LIBRARY &rarr;
            </Link>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
            OUR MISSION
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 text-center leading-tight">
            We don&apos;t chase motivation. <br />
            <span className="text-cyan-400">We build systems.</span>
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base text-center max-w-2xl font-light mb-6">
            NomadLifeXP exists to help people create sustainable transformation
            through discipline, physical development, mindful movement, mental
            resilience, and continuous growth.
          </p>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80">
            The goal isn&apos;t a temporary peak. <br />
            It&apos;s a better baseline.
          </p>
        </section>

        <section className="py-24 px-4 text-center border-t border-white/10 bg-white/[0.01]">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-cyan-300 mb-4 text-center">
              YOUR EVOLUTION BEGINS HERE.
            </p>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-center">
              BUILD. ADAPT. EVOLVE.
            </h2>
            <p className="text-slate-400 text-sm font-light mb-2 max-w-xl text-center">
              You don&apos;t need more motivation.
            </p>
            <p className="text-slate-300 text-sm font-semibold mb-10 max-w-xl text-center">
              You need a system you can follow.
            </p>
            <Link
              href="/start-here"
              className="inline-block px-10 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition text-center shadow-[0_0_30px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-white"
            >
              START YOUR EVOLUTION &rarr;
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-cyan-500/20 bg-[#02040a] py-16 px-4 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="font-black tracking-[0.3em] uppercase text-white mb-1 text-base text-center">
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </p>
          <p className="uppercase tracking-[0.3em] text-[10px] text-cyan-400 mb-2 text-center font-mono">
            Human Optimization Platform
          </p>
          <p className="uppercase tracking-[0.3em] text-[10px] text-slate-300 mb-6 text-center font-mono font-bold">
            Evolve in Motion.
          </p>

          <div className="w-full max-w-xl my-6 p-4 border border-cyan-500/20 bg-cyan-950/10 rounded-lg text-center hover:border-cyan-400/50 transition-colors">
            <Link
              href="/knowledge-index"
              className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-cyan-300 font-bold transition-colors focus:outline-none focus:underline"
            >
              NOMADLIFEXP // HUMAN OPTIMIZATION MASTERCLASS LIBRARY &rarr;
            </Link>
          </div>

          <nav
            className="flex flex-wrap justify-center gap-6 mb-6 uppercase tracking-[0.2em] text-[11px] font-semibold text-slate-300"
            aria-label="Footer Navigation"
          >
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link
              href="/discipline-system"
              className="hover:text-cyan-400 transition-colors"
            >
              Systems
            </Link>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link
              href="/start-here"
              className="hover:text-cyan-400 transition-colors"
            >
              Start
            </Link>
          </nav>

          <div className="flex justify-center items-center gap-4 mb-8 text-sm font-mono">
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium focus:outline-none focus:underline"
              aria-label="NomadLifeXP YouTube Channel (opens in a new tab)"
            >
              YouTube
            </a>
            <span className="text-slate-600" aria-hidden="true">
              ·
            </span>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium focus:outline-none focus:underline"
              aria-label="NomadLifeXP Instagram Account (opens in a new tab)"
            >
              Instagram
            </a>
          </div>

          <p className="text-slate-600 text-[11px] text-center font-mono">
            © 2026 NomadLifeXP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}