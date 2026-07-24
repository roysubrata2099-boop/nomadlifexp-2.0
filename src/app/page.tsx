// src/app/page.tsx
"use client";

import Link from "next/link";

interface System {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly href: string;
}

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface AudienceItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

interface KnowledgeItem {
  readonly id: string;
  readonly title: string;
  readonly text: string;
  readonly href: string;
}

interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

const SYSTEMS: readonly System[] = [
  {
    id: "system-discipline",
    title: "Discipline",
    subtitle: "The Foundation",
    description: "Build consistency, habits, focus, and the ability to execute regardless of circumstances.",
    href: "/discipline-system",
  },
  {
    id: "system-fitness",
    title: "Fitness",
    subtitle: "Physical Capability",
    description: "Develop strength, mobility, energy, and a body capable of supporting your mission.",
    href: "/blog/category/fitness",
  },
  {
    id: "system-yoga",
    title: "Yoga",
    subtitle: "Movement & Awareness",
    description: "Improve balance, breathing, recovery, and the connection between body and mind.",
    href: "/blog/category/yoga",
  },
  {
    id: "system-mindset",
    title: "Mindset",
    subtitle: "Inner Architecture",
    description: "Develop resilience, confidence, clarity, and the mental framework for growth.",
    href: "/blog/category/mindset",
  },
];

const NAVIGATION: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Systems", href: "/discipline-system" },
];

const AUDIENCE_ITEMS: readonly AudienceItem[] = [
  {
    id: "audience-nomads",
    title: "Digital Nomads",
    description: "Create freedom while building discipline and intentional living.",
  },
  {
    id: "audience-entrepreneurs",
    title: "Entrepreneurs",
    description: "Develop performance without sacrificing health and balance.",
  },
  {
    id: "audience-creators",
    title: "Creators",
    description: "Build consistency, creativity, and long-term execution.",
  },
  {
    id: "audience-growth",
    title: "Growth Seekers",
    description: "Improve habits, mindset, and lifestyle quality.",
  },
];

const KNOWLEDGE_ITEMS: readonly KnowledgeItem[] = [
  {
    id: "knowledge-discipline",
    title: "Discipline",
    text: "Habits, routines, focus, consistency.",
    href: "/blog/category/discipline",
  },
  {
    id: "knowledge-fitness",
    title: "Fitness",
    text: "Strength, mobility, energy, performance.",
    href: "/blog/category/fitness",
  },
  {
    id: "knowledge-yoga",
    title: "Yoga",
    text: "Movement, breathing, awareness.",
    href: "/blog/category/yoga",
  },
  {
    id: "knowledge-mindset",
    title: "Mindset",
    text: "Growth, resilience, confidence.",
    href: "/blog/category/mindset",
  },
];

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "faq-what-is",
    question: "What is NomadLifeXP?",
    answer: "NomadLifeXP is a personal evolution framework built around discipline, fitness, yoga, mindset, and intentional living.",
  },
  {
    id: "faq-four-systems",
    question: "What are the four systems?",
    answer: "The four foundations are Discipline, Fitness, Yoga, and Mindset. Together they create a complete transformation framework.",
  },
  {
    id: "faq-who-for",
    question: "Who is this for?",
    answer: "It is designed for anyone who wants stronger habits, better health, improved focus, and continuous growth.",
  },
  {
    id: "faq-where-start",
    question: "Where should I start?",
    answer: "Begin with the Start Here path and build your personal evolution system step by step.",
  },
];

const STEPS: readonly string[] = [
  "Awareness",
  "Discipline",
  "Strength",
  "Balance",
  "Evolution",
];

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black overflow-x-hidden antialiased">
      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-black tracking-[0.25em] text-sm uppercase flex items-center gap-1 focus:outline-none"
          >
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-slate-400">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-cyan-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/start-here"
            className="px-5 py-2.5 border border-cyan-400 text-cyan-300 text-xs uppercase tracking-[0.2em] font-bold hover:bg-cyan-400 hover:text-black transition-all"
          >
            Start Here
          </Link>
        </div>
      </header>

      {/* HERO SECTION - EXTRA TOP PADDING FOR FULL VISIBILITY */}
      <section className="relative pt-44 sm:pt-52 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none"
        />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300 mb-6">
            NomadLifeXP // Human Optimization Platform
          </p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight leading-none mb-8 text-white">
            Evolve <br />
            <span className="text-cyan-400">in Motion</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10 text-center">
            A complete personal evolution framework built around{" "}
            <strong className="text-white font-normal">
              discipline, fitness, yoga, and mindset.
            </strong>
            <br />
            Build stronger systems. Create better habits. Become your next version.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            <Link
              href="/start-here"
              className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition shadow-[0_0_30px_rgba(34,211,238,0.3)] text-center"
            >
              Begin Journey
            </Link>
            <Link
              href="/knowledge-index"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-cyan-400 hover:text-cyan-300 transition text-center"
            >
              Explore Knowledge
            </Link>
          </div>

          <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 text-center">
            Scroll to evolve &darr;
          </p>
        </div>
      </section>

      {/* YOGA VIDEO & PHILOSOPHY - CENTERED */}
      <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center justify-center text-center">
        <div className="w-full relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-video mb-12 shadow-2xl mx-auto flex items-center justify-center">
          <video
            className="w-full h-full object-cover block mx-auto"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/yoga-mind-body-awareness.jpg"
            suppressHydrationWarning
          >
            <source src="/videos/yoga-mind-body-awareness.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-3">
            The Philosophy
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-center">
            Transformation is not a moment. <br />
            It is a system.
          </h2>
        </div>
      </section>

      {/* FOUR FOUNDATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">
            The Four Foundations
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-center">
            Build Your <br className="sm:hidden" />
            <span className="text-cyan-400">Evolution System</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base text-center">
            Four connected systems designed to transform your body, mind, habits, and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          {SYSTEMS.map((system, idx) => (
            <Link
              key={system.id}
              href={system.href}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/50 hover:bg-white/[0.04] transition-all text-center"
            >
              <span className="text-xs tracking-[0.3em] text-cyan-400 font-mono block mb-4">
                0{idx + 1}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase mb-2">
                {system.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
                {system.subtitle}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-md mx-auto">
                {system.description}
              </p>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-300 group-hover:translate-x-1 inline-block transition-transform">
                Explore System &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="border-y border-white/10 bg-white/[0.01] py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2 text-center">
            The Journey
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-12 text-center">
            From Chaos <span className="text-cyan-400">To Clarity</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full max-w-5xl">
            {STEPS.map((step, idx) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full border border-cyan-400/40 flex items-center justify-center font-bold text-cyan-300 mb-3 bg-[#050816]">
                  0{idx + 1}
                </div>
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-center">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">
            Our Mission
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-center">
            We don&apos;t chase motivation. <br />
            <span className="text-cyan-400">We build systems.</span>
          </h2>
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base text-center">
            NomadLifeXP helps individuals create sustainable personal transformation through structured habits, physical development, mindful movement, and mental resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {AUDIENCE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col items-center text-center"
            >
              <h3 className="font-bold uppercase text-lg mb-2 text-center">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* KNOWLEDGE INDEX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center border-t border-white/10">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">
            Knowledge Index
          </p>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-3 text-center">
            Explore. <span className="text-cyan-400">Learn. Evolve.</span>
          </h2>
          <p className="text-slate-400 text-sm text-center">
            A growing library of systems, frameworks, and insights designed to help you improve every area of life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {KNOWLEDGE_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/50 transition-all flex flex-col items-center text-center"
            >
              <h3 className="font-bold uppercase text-xl mb-2 text-center">{item.title}</h3>
              <p className="text-xs text-slate-400 mb-6 text-center">{item.text}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan-300 group-hover:translate-x-1 inline-block transition-transform">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-white/10 py-16 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300 mb-2">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-center">
              Questions Answered
            </h2>
          </div>

          <div className="space-y-4 w-full text-left">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.id}
                className="group border border-white/10 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden bg-white/[0.01]"
              >
                <summary className="flex items-center justify-between font-bold uppercase text-sm cursor-pointer list-none">
                  <span>{faq.question}</span>
                  <span className="text-cyan-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-4 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-3">
            Your Evolution Begins
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4 text-center">
            Evolve <span className="text-cyan-400">in Motion</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 text-center">
            The next version of yourself is built through small actions repeated consistently.
          </p>
          <Link
            href="/start-here"
            className="inline-block px-10 py-4 bg-cyan-400 text-black font-bold uppercase tracking-[0.2em] text-xs hover:bg-cyan-300 transition text-center"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* FOOTER WITH SOCIAL LINKS AND DISTINCT DARK COLOR */}
      <footer className="border-t border-cyan-500/20 bg-[#02040a] py-16 px-4 text-center text-xs text-slate-400">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <p className="font-black tracking-[0.3em] uppercase text-white mb-1 text-base">
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </p>
          <p className="uppercase tracking-[0.3em] text-[10px] text-cyan-400 mb-8">
            Evolve in Motion
          </p>

          {/* YOUTUBE & INSTAGRAM FOOTER LINKS */}
          <div className="flex justify-center items-center gap-4 mb-8 text-sm">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium"
            >
              YouTube
            </a>
            <span className="text-slate-600">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors uppercase tracking-[0.15em] font-medium"
            >
              Instagram
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10 uppercase tracking-[0.2em] text-[11px] font-semibold text-slate-300">
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/knowledge-index" className="hover:text-cyan-400 transition-colors">
              Knowledge
            </Link>
            <Link href="/start-here" className="hover:text-cyan-400 transition-colors">
              Start
            </Link>
          </div>

          <p className="text-slate-600 text-[11px]">
            © 2026 NomadLifeXP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}