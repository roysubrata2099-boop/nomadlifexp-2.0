"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MAIN_NAVIGATION_NODES = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Discipline System", href: "/discipline-system" },
];

export default function NomadLifeXPMaster() {
  const currentPath = usePathname();

  return (
    <div className="min-h-screen flex flex-col items-center justify-between antialiased bg-[#060b18] text-white">
      {/* HEADER */}
      <header className="w-full border-b border-white/5 sticky top-0 z-50 backdrop-blur-md bg-[#060b18]/80">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 text-center">
          <Link
            href="/"
            className="font-bold uppercase tracking-widest text-sm text-white hover:opacity-90 transition-opacity"
          >
            NOMADLIFE<span style={{ color: "var(--glow-cyan)" }}>XP</span>
          </Link>

          <div className="flex items-center gap-x-6 md:gap-x-8 text-[11px] tracking-[0.2em] uppercase font-medium">
            {MAIN_NAVIGATION_NODES.map((node) => {
              const isActive = currentPath === node.href;

              return (
                <Link
                  key={node.href}
                  href={node.href}
                  className="transition-colors hover:text-white"
                  style={{
                    color: isActive
                      ? "var(--glow-cyan)"
                      : "var(--text-muted, #94a3b8)",
                    fontWeight: isActive ? "700" : "400",
                  }}
                >
                  {node.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/start-here"
            className="text-[10px] uppercase tracking-widest px-5 py-2.5 border font-bold transition-all rounded-sm"
            style={{
              borderColor: "var(--glow-cyan)",
              color: "var(--glow-cyan)",
            }}
          >
            Start Here
          </Link>
        </nav>
      </header>

      {/* MAIN SYSTEM WRAPPER */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-32 pb-24 max-w-4xl w-full text-center mx-auto">
        {/* BRAND INTRO */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gray-400">
            NomadLifeXP // Transformation Architecture for Human Evolution
          </span>

          <div className="text-xs tracking-[0.25em] uppercase font-semibold text-cyan-300 mt-2 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
            <Link
              href="/blog/category/discipline"
              className="hover:text-white transition-colors duration-200"
            >
              Discipline
            </Link>
            <span className="text-gray-600 font-normal">/</span>
            <Link
              href="/blog/category/fitness"
              className="hover:text-white transition-colors duration-200"
            >
              Fitness
            </Link>
            <span className="text-gray-600 font-normal">/</span>
            <Link
              href="/blog/category/yoga"
              className="hover:text-white transition-colors duration-200"
            >
              Yoga
            </Link>
            <span className="text-gray-600 font-normal">/</span>
            <Link
              href="/blog/category/mindset"
              className="hover:text-white transition-colors duration-200"
            >
              Mindset
            </Link>
          </div>
        </div>

        {/* BRANDING HOOK */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase mb-12">
          Evolve in Motion
        </h1>

        {/* SEO HERO COPY */}
        <p className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed text-gray-400 mb-14">
          NomadLifeXP is a personal transformation framework designed to help
          individuals build stronger habits, improve physical performance,
          develop mental clarity, and create a more intentional lifestyle.
          <br />
          <br />
          Built around four foundational systems —{" "}
          <strong className="text-gray-300">
            Discipline, Fitness, Yoga, and Mindset
          </strong>
          , NomadLifeXP provides structured frameworks for developing
          consistency, resilience, focus, and continuous personal growth.
          <br />
          <br />
          In a world shaped by distraction, information overload, and
          inconsistent routines, NomadLifeXP helps individuals build the
          systems, habits, and identity required for long-term transformation.
        </p>

        {/* PRIMARY ACTIONS */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-24">
          <Link
            href="/start-here"
            className="w-full px-10 py-4 text-xs uppercase tracking-widest font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition"
          >
            Initialize System
          </Link>

          <Link
            href="/blog"
            className="w-full px-10 py-4 text-xs uppercase tracking-widest border border-white/20 text-white hover:border-cyan-400 transition"
          >
            Enter Knowledge Index
          </Link>
        </div>

        {/* VIDEO ASSET */}
        <div className="w-full aspect-video border border-white/10 rounded-2xl overflow-hidden mb-8">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/yoga.mp4" type="video/mp4" />
          </video>
        </div>

        {/* FROM CHAOS TO CLARITY */}
        <div className="text-center max-w-xl mb-24">
          <h3 className="text-xl font-bold uppercase mb-3">
            From Chaos to Clarity
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Transformation begins when intention becomes structure.
            <br />
            <br />
            Many people understand what they want to achieve but struggle with
            consistency, focus, and maintaining progress over time.
            <br />
            <br />
            NomadLifeXP connects behavioral discipline, physical performance,
            mindful movement, mental resilience, and lifestyle design into a
            structured system for continuous improvement.
          </p>
        </div>

        {/* SEO AUTHORITY MATRIX */}
        <section className="w-full text-left grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-b border-white/5 py-16 mb-12 text-sm font-sans text-slate-400 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400">
              // 01 / WHAT IS NOMADLIFEXP?
            </h2>
            <p>
              NomadLifeXP is an integrated personal development architecture
              combining discipline systems, fitness principles, yoga practices,
              mindset training, and intentional lifestyle design.
            </p>
            <p>
              The framework is built around four interconnected pillars:
              Discipline, Fitness, Yoga, and Mindset. Together, these systems
              create a complete approach to personal transformation.
            </p>
            <p>
              Instead of depending on temporary motivation, NomadLifeXP focuses
              on repeatable structures, sustainable habits, and identity-based
              behaviors that support long-term growth.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400">
              // 02 / THE NOMADLIFEXP OPERATIONAL PROFILE
            </h2>
            <p>
              NomadLifeXP is designed for individuals who want to remove
              execution barriers and create sustainable performance habits.
            </p>
            <p>
              Modern life creates challenges including digital distraction,
              inconsistent routines, reduced physical activity, mental overload,
              and loss of focus.
            </p>
            <p>
              The framework explores practical systems for developing
              discipline, improving fitness, strengthening resilience, increasing
              awareness, and creating a more intentional lifestyle.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400">
              // 03 / PRIMARY SYSTEMS DEPLOYED
            </h2>
            <p>
              NomadLifeXP combines four connected development tracks:
            </p>
            <ul className="space-y-1.5 font-mono text-xs text-slate-300 pl-1 list-none">
              <li>
                <span className="text-cyan-400 mr-1">■</span>
                <strong>Discipline:</strong> Building consistency, habits, focus, and reliable execution.
              </li>
              <li>
                <span className="text-cyan-400 mr-1">■</span>
                <strong>Fitness:</strong> Developing strength, mobility, energy, and physical capability.
              </li>
              <li>
                <span className="text-cyan-400 mr-1">■</span>
                <strong>Yoga:</strong> Improving awareness, breathing, balance, and mind-body connection.
              </li>
              <li>
                <span className="text-cyan-400 mr-1">■</span>
                <strong>Mindset:</strong> Developing resilience, clarity, confidence, and self-awareness.
              </li>
            </ul>
          </div>
        </section>

        {/* FOUR CORE SYSTEMS */}
        <section className="w-full text-left space-y-14 mb-24">
          <div>
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-3">
              // DISCIPLINE SYSTEM
            </h2>
            <h3 className="text-xl font-bold uppercase text-white mb-3">
              The Foundation of Consistent Action
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Discipline is the ability to execute regardless of mood,
              environment, or circumstance.
              <br />
              <br />
              The Discipline System explores self-discipline habits, daily
              routines, habit formation, productivity systems, focus
              development, and consistency strategies.
              <br />
              <br />
              Discipline transforms intention into action. Repeated action
              becomes identity.
            </p>
            <Link
              href="/discipline-system"
              className="inline-block mt-4 text-xs uppercase tracking-widest text-cyan-300 hover:text-white transition"
            >
              Explore Discipline System →
            </Link>
          </div>

          <div>
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-3">
              // FITNESS SYSTEM
            </h2>
            <h3 className="text-xl font-bold uppercase text-white mb-3">
              Building Physical Capability
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              A strong body creates the foundation for a stronger life.
              <br />
              <br />
              The Fitness System focuses on functional fitness, strength
              development, mobility, energy optimization, travel-friendly
              workouts, and sustainable health practices.
              <br />
              <br />
              Fitness is not only about appearance. It is about developing
              energy, confidence, and capability.
            </p>
            <Link
              href="/blog/category/fitness"
              className="inline-block mt-4 text-xs uppercase tracking-widest text-cyan-300 hover:text-white transition"
            >
              Explore Fitness System →
            </Link>
          </div>

          <div>
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-3">
              // YOGA SYSTEM
            </h2>
            <h3 className="text-xl font-bold uppercase text-white mb-3">
              Movement, Awareness & Internal Balance
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Yoga connects physical movement with mental awareness.
              <br />
              <br />
              The Yoga System explores breath control, flexibility, mobility,
              meditation, stress regulation, and the connection between body
              and mind.
              <br />
              <br />
              Through conscious movement and awareness, yoga becomes a tool for
              improving focus, recovery, and balance.
            </p>
            <Link
              href="/blog/category/yoga"
              className="inline-block mt-4 text-xs uppercase tracking-widest text-cyan-300 hover:text-white transition"
            >
              Explore Yoga System →
            </Link>
          </div>

          <div>
            <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-3">
              // MINDSET SYSTEM
            </h2>
            <h3 className="text-xl font-bold uppercase text-white mb-3">
              The Architecture of Inner Strength
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your external results are shaped by your internal framework.
              <br />
              <br />
              The Mindset System explores growth mindset, mental resilience,
              confidence development, emotional discipline, self-awareness,
              and personal evolution.
              <br />
              <br />
              A stronger mindset creates the ability to adapt, overcome
              challenges, and continue moving forward.
            </p>
            <Link
              href="/blog/category/mindset"
              className="inline-block mt-4 text-xs uppercase tracking-widest text-cyan-300 hover:text-white transition"
            >
              Explore Mindset System →
            </Link>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="w-full text-left border-t border-white/5 py-16 mb-12">
          <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-6">
            // 04 / THE NOMADLIFEXP PHILOSOPHY
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Transformation is not created through one decision.
            <br />
            <br />
            It is created through thousands of small actions repeated
            consistently.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            NomadLifeXP represents a lifestyle philosophy built around
            intentional growth, structured improvement, and continuous
            evolution.
          </p>
          <div className="space-y-2 text-cyan-300 font-semibold uppercase tracking-wide text-sm">
            <p>Move with purpose.</p>
            <p>Train with discipline.</p>
            <p>Think with clarity.</p>
            <p>Live with intention.</p>
            <p>Evolve continuously.</p>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="w-full text-left border-t border-white/5 py-16 mb-12">
          <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-8">
            // WHO IS NOMADLIFEXP FOR?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-400">
            <div>
              <h3 className="text-white font-bold uppercase mb-2">
                Digital Nomads
              </h3>
              <p>
                Individuals creating freedom through travel, remote work,
                intentional living, and personal development.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase mb-2">
                Entrepreneurs & Creators
              </h3>
              <p>
                People building their future while maintaining health,
                discipline, creativity, and performance.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase mb-2">
                Personal Growth Seekers
              </h3>
              <p>
                Individuals committed to improving habits, mindset, routines,
                and lifestyle quality.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold uppercase mb-2">
                High Performers
              </h3>
              <p>
                People seeking sustainable achievement without sacrificing
                balance and wellbeing.
              </p>
            </div>
          </div>
        </section>

        {/* KNOWLEDGE INDEX */}
        <section className="w-full text-left border-t border-white/5 py-16 mb-12">
          <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-6">
            // THE KNOWLEDGE INDEX
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Explore systems and guides covering discipline, fitness, yoga,
            mindset, lifestyle design, and continuous improvement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-bold mb-2">Discipline</h3>
              <p className="text-gray-400">
                Building habits, routines, focus, productivity, and consistency.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Fitness</h3>
              <p className="text-gray-400">
                Strength, movement, mobility, energy, and physical performance.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Yoga</h3>
              <p className="text-gray-400">
                Mindfulness, breathwork, awareness, recovery, and balance.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Mindset</h3>
              <p className="text-gray-400">
                Growth, resilience, confidence, awareness, and evolution.
              </p>
            </div>
          </div>
        </section>

        {/* WHY NOMADLIFEXP */}
        <section className="w-full text-left border-t border-white/5 py-16 mb-12">
          <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-6">
            // WHY NOMADLIFEXP?
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Transformation requires more than information.
            <br />
            <br />
            It requires implementation.
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✓ Structured systems</li>
            <li>✓ Practical frameworks</li>
            <li>✓ Physical development</li>
            <li>✓ Mental training</li>
            <li>✓ Sustainable habits</li>
          </ul>
          <p className="text-sm text-gray-400 leading-relaxed mt-6">
            Knowledge creates awareness.
            <br />
            Practice creates change.
            <br />
            Consistency creates transformation.
          </p>
        </section>

        {/* FAQ */}
        <section className="w-full text-left border-t border-white/5 py-16 mb-12">
          <h2 className="text-white font-mono uppercase tracking-wider text-xs font-bold text-cyan-400 mb-8">
            // FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="space-y-8 text-sm text-gray-400">
            <div>
              <h3 className="text-white font-bold mb-2">
                What is NomadLifeXP?
              </h3>
              <p>
                NomadLifeXP is a personal transformation framework focused on
                discipline, fitness, yoga, mindset, and intentional lifestyle
                development.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">
                What are the four pillars of NomadLifeXP?
              </h3>
              <p>
                The four pillars are Discipline, Fitness, Yoga, and Mindset.
                Together they create a complete framework for personal growth.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">
                Is NomadLifeXP only for digital nomads?
              </h3>
              <p>
                No. The principles apply to anyone seeking stronger habits,
                improved health, better focus, and continuous development.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">
                How does discipline improve personal growth?
              </h3>
              <p>
                Discipline creates consistency by transforming positive actions
                into repeatable systems.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/5 py-12 text-center text-xs font-mono">
        <div
          className="mb-4 tracking-widest uppercase text-[10px] transition-all duration-300"
          style={{
            color: "#ffca28",
            textShadow: "0 0 12px rgba(255, 202, 40, 0.4)",
          }}
        >
          Follow NomadLifeXP —{" "}
          <a
            className="mx-1 transition-all duration-300 underline underline-offset-4"
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffca28" }}
          >
            YouTube
          </a>
          <span className="text-amber-600/60 mx-1">|</span>
          <a
            className="mx-1 transition-all duration-300 underline underline-offset-4"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ffca28" }}
          >
            Instagram
          </a>
        </div>

        <div className="tracking-wider text-neutral-600 mb-6">
          © 2026 NomadLifeXP. All rights reserved.
        </div>

        <Link
          href="/knowledge-index"
          className="inline-block transition-all duration-300 uppercase tracking-[0.2em] font-bold text-[11px]"
          style={{
            color: "#ffca28",
            textShadow:
              "0 0 12px rgba(255, 202, 40, 0.4), 0 0 25px rgba(255, 179, 0, 0.2)",
          }}
        >
          Knowledge Index ↗
        </Link>
      </footer>
    </div>
  );
}