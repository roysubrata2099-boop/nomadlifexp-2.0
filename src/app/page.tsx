"use client";

import Link from "next/link";
import { type JSX } from "react";

interface SystemDetail {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly coreFocus: string;
  readonly description: string;
  readonly detailedDescription: string;
  readonly primaryOutcome: string;
  readonly href: string;
}

interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly detail: string;
}

interface OutcomeItem {
  readonly title: string;
  readonly description: string;
}

interface KnowledgeCategory {
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly href: string;
}

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

const DETAILED_SYSTEMS: readonly SystemDetail[] = [
  {
    id: "discipline",
    number: "01",
    title: "Discipline System",
    coreFocus: "HABITS. FOCUS. CONSISTENCY.",
    description: "Build the ability to act with intention, follow through on commitments, manage distractions, and create routines that support long term growth.",
    detailedDescription: "Learn how to turn goals into repeatable actions, reduce your dependence on motivation, and build consistency that compounds over time. Discipline is the foundation that turns intention into action, meaning you develop the ability to follow through even when motivation is low.",
    primaryOutcome: "Stronger routines. Better focus. Greater self control.",
    href: "/blog/category/discipline",
  },
  {
    id: "fitness",
    number: "02",
    title: "Fitness System",
    coreFocus: "STRENGTH. MOBILITY. PERFORMANCE.",
    description: "Develop physical capacity through strength training, conditioning, movement, recovery, and progressive practice.",
    detailedDescription: "Fitness is not simply about appearance. It is about developing a body that can handle the demands of training, work, travel, everyday life, and the challenges you choose to pursue.",
    primaryOutcome: "A stronger, healthier, more capable, and more resilient body.",
    href: "/blog/category/fitness",
  },
  {
    id: "yoga",
    number: "03",
    title: "Yoga System",
    coreFocus: "MOVEMENT. AWARENESS. RECOVERY.",
    description: "Develop mobility, balance, breath, body awareness, and movement control through mindful practice.",
    detailedDescription: "Yoga complements physical training by helping you move with greater awareness while supporting recovery, flexibility, balance, and the connection between body and mind. The goal is not simply to perform poses, but to become more aware of how you move, breathe, recover, and respond.",
    primaryOutcome: "Better movement. Better recovery. Greater mind and body connection.",
    href: "/blog/category/yoga",
  },
  {
    id: "mindset",
    number: "04",
    title: "Mindset System",
    coreFocus: "GROWTH. RESILIENCE. CONFIDENCE.",
    description: "Develop the mental foundations required to handle pressure, overcome resistance, learn from setbacks, and continue evolving.",
    detailedDescription: "A resilient mindset is not about pretending everything is easy. It is about developing the perspective and confidence to respond to difficulty instead of being controlled by it.",
    primaryOutcome: "Greater resilience. Stronger confidence. A growth oriented mind.",
    href: "/blog/category/mindset",
  },
];

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: "01",
    title: "Awareness",
    description: "Understand yourself, your habits, your environment, and your current physical and mental state.",
    detail: "Awareness gives you an honest starting point. You cannot intentionally improve what you have not taken the time to understand.",
  },
  {
    number: "02",
    title: "Discipline",
    description: "Turn intention into consistent action.",
    detail: "Build routines, remove unnecessary friction, manage distractions, and develop the ability to follow through even when motivation disappears.",
  },
  {
    number: "03",
    title: "Strength",
    description: "Develop physical and mental capacity.",
    detail: "Train your body, strengthen your resilience, and gradually increase your ability to handle challenge, discomfort, and responsibility.",
  },
  {
    number: "04",
    title: "Balance",
    description: "Bring performance, recovery, movement, mindset, and lifestyle into a sustainable rhythm.",
    detail: "Progress is not about pushing harder forever. It is about knowing when to train, when to recover, when to adapt, and when to continue.",
  },
  {
    number: "05",
    title: "Evolution",
    description: "Keep learning, adapting, and becoming more capable.",
    detail: "Evolution is not a final destination. As you grow, your understanding changes, your challenges change, and the next level of development begins.",
  },
];

const OUTCOMES: readonly OutcomeItem[] = [
  {
    title: "Stronger Body",
    description: "Build physical strength, mobility, conditioning, and resilience.",
  },
  {
    title: "Sharper Mind",
    description: "Develop focus, awareness, confidence, and the ability to think and respond intentionally.",
  },
  {
    title: "Better Habits",
    description: "Create routines that make positive behavior easier to repeat.",
  },
  {
    title: "Greater Discipline",
    description: "Develop the ability to act consistently instead of relying entirely on motivation.",
  },
  {
    title: "Improved Performance",
    description: "Increase your physical and mental capacity so you can perform better in training and everyday life.",
  },
  {
    title: "Sustainable Growth",
    description: "Create progress that can continue over months and years instead of chasing short term extremes.",
  },
];

const KNOWLEDGE_CATEGORIES: readonly KnowledgeCategory[] = [
  {
    title: "Discipline",
    subtitle: "Habits • Focus • Consistency",
    description: "Practical approaches to building discipline, creating better routines, improving focus, and becoming more consistent.",
    href: "/blog/category/discipline",
  },
  {
    title: "Fitness",
    subtitle: "Training • Strength • Recovery",
    description: "Guides for developing strength, physical capacity, mobility, conditioning, performance, and recovery.",
    href: "/blog/category/fitness",
  },
  {
    title: "Yoga",
    subtitle: "Movement • Breath • Mobility",
    description: "Explore yoga, mobility, breathing, body awareness, balance, recovery, and mindful movement.",
    href: "/blog/category/yoga",
  },
  {
    title: "Mindset",
    subtitle: "Resilience • Confidence • Growth",
    description: "Develop a stronger mindset through resilience, self awareness, confidence, growth, and intentional thinking.",
    href: "/blog/category/mindset",
  },
];

const FAQS: readonly FaqItem[] = [
  {
    question: "WHAT IS NOMADLIFEXP?",
    answer: "NomadLifeXP is a human optimization system focused on personal growth through discipline, fitness, yoga, mindset, and intentional habits. It brings these areas together into a practical framework designed to help you become stronger, healthier, more resilient, disciplined, and capable.",
  },
  {
    question: "WHAT DOES HUMAN OPTIMIZATION MEAN?",
    answer: "Human optimization means intentionally developing your physical, mental, and behavioral capabilities. It includes how you train, move, think, recover, build habits, manage challenges, and continue learning. The objective is not perfection. It is greater capability and sustainable personal growth.",
  },
  {
    question: "WHAT ARE THE FOUR NOMADLIFEXP SYSTEMS?",
    answer: "The framework consists of four interconnected systems. Discipline develops habits, focus, and consistency. Fitness develops strength, mobility, conditioning, and physical capacity. Yoga develops movement, awareness, breath, balance, and recovery. Mindset develops resilience, confidence, adaptability, and growth.",
  },
  {
    question: "IS NOMADLIFEXP ONLY ABOUT FITNESS?",
    answer: "No. Fitness is one part of the framework. NomadLifeXP approaches human optimization through four connected areas: discipline, fitness, yoga, and mindset. Physical development matters, but sustainable growth also requires habits, awareness, resilience, and the ability to consistently apply what you learn.",
  },
  {
    question: "WHO IS NOMADLIFEXP FOR?",
    answer: "NomadLifeXP is for people who want to take a more intentional approach to personal growth. You do not need to be an athlete, a yoga practitioner, or an expert in self improvement. You simply need a willingness to learn, take action, build better habits, and continue developing.",
  },
  {
    question: "WHERE SHOULD I START?",
    answer: "Start with awareness. Understand where you are currently, identify the area that would create the greatest positive change, and begin with one system. The Start Here section provides a path into the NomadLifeXP framework, while the Knowledge Library provides deeper resources across discipline, fitness, yoga, and mindset.",
  },
];

export default function HomePage(): JSX.Element {
  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black font-sans flex flex-col justify-between">

      {/* Navbar with System, Blog, and Start */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="font-black tracking-[0.25em] text-sm uppercase">
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#systems" className="text-xs uppercase font-bold text-slate-300 hover:text-cyan-400 transition-colors">
              Systems
            </Link>
            <Link href="/blog" className="text-xs uppercase font-bold text-slate-300 hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link href="/start-here" className="text-xs uppercase font-bold text-slate-300 hover:text-cyan-400 transition-colors">
              Start Here
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/start-here" className="px-4 py-2 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors">
              Start Your Evolution &rarr;
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20 flex-grow">

        {/* 1. HERO */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-cyan-400 font-mono text-xs uppercase tracking-[0.3em] mb-4">
              Human Optimization &amp; Personal Growth
            </p>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-6">
              BUILD YOURSELF<br />
              <span className="text-cyan-400">LIKE A SYSTEM</span>
            </h1>
            <p className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-6">
              Discipline &bull; Fitness &bull; Yoga &bull; Mindset
            </p>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              NomadLifeXP is a human optimization system for building discipline, strength, mobility, resilience, mindset, and habits to help you become stronger, healthier, and more capable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/start-here" className="px-8 py-4 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors">
                Start Your Evolution &rarr;
              </Link>
              <Link href="#systems" className="px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-wider hover:bg-white/5 transition-colors">
                Explore the Systems &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 2. CINEMATIC YOGA VIDEO SECTION */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
          <div className="relative w-full aspect-video border border-white/10 bg-black/60 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 via-[#050816] to-slate-900/40" />
            <div className="relative z-10 text-center px-4">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">[ CINEMATIC YOGA &amp; MOVEMENT ]</span>
              <p className="text-sm text-slate-300 uppercase font-bold tracking-wider mb-1">Evolve in Motion</p>
              <p className="text-xs text-slate-400 font-mono tracking-wider mb-6">Movement &bull; Breath &bull; Control</p>
              <a
                href="https://www.youtube.com/@nomadlifexp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors"
              >
                Watch Cinematic Yoga on YouTube &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* 3. EVOLVE IN MOTION */}
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black uppercase mb-6">Evolve in Motion</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Movement is part of evolution. The way you move, breathe, recover, and experience your body influences how you perform and how you feel. Through yoga, mobility, breath, and mindful movement, NomadLifeXP explores the connection between physical awareness and personal growth.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Yoga is not simply about performing poses. It is about developing greater control, awareness, mobility, balance, and connection between body and mind.
            </p>
            <div className="text-cyan-400 font-mono text-xs uppercase tracking-[0.2em]">
              Evolve in Motion.
            </div>
          </div>
        </section>

        {/* 4. WHAT IS HUMAN OPTIMIZATION? */}
        <section className="py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-3">Become more capable.</span>
            <h2 className="text-4xl font-black uppercase mb-6">What is Human Optimization?</h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Human optimization is the intentional development of your physical, mental, and behavioral capabilities so you can live, perform, and adapt with greater purpose.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              It is not about becoming perfect, maximizing every minute, or constantly pushing yourself harder. It is about developing the strength, discipline, awareness, resilience, and habits that help you handle the demands of life while continuing to grow.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              NomadLifeXP turns these principles into a practical framework for personal growth. The framework brings together four interconnected systems: Discipline, Fitness, Yoga, and Mindset. Each system develops a different aspect of human capability, while together they create a more complete approach to personal development.
            </p>
            <div className="text-xs font-mono text-slate-400 max-w-xl mx-auto space-y-2 mb-12">
              <p>Discipline creates consistency.</p>
              <p>Fitness builds physical capacity.</p>
              <p>Yoga develops movement, awareness, and recovery.</p>
              <p>Mindset develops resilience, confidence, and adaptability.</p>
            </div>
            <p className="text-sm text-slate-300 mb-12">
              The goal is not a temporary transformation. It is to build a stronger foundation that continues to improve over time.
            </p>
            <div className="space-y-2 text-xs font-mono text-cyan-300 mb-12">
              <p>Small actions become habits.</p>
              <p>Habits become systems.</p>
              <p>Systems create consistency.</p>
              <p>Consistency creates lasting change.</p>
            </div>
            <div className="text-2xl md:text-3xl font-black text-cyan-400 italic tracking-wide">
              &ldquo;Motivation fades. Systems endure.&rdquo;
            </div>
          </div>
        </section>

        {/* 5. FOUR SYSTEM FRAMEWORK */}
        <section className="py-24 max-w-7xl mx-auto px-4 border-t border-white/5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">The NomadLifeXP Framework</span>
            <h2 className="text-4xl font-black uppercase mt-2 mb-4">Four systems. One human.</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Human development does not happen in isolation. Your physical condition can influence your confidence. Your habits influence your consistency. Your mobility affects how you move and recover. Your mindset influences how you respond when things become difficult.
            </p>
            <p className="text-slate-400 text-xs">
              That is why NomadLifeXP connects these areas instead of treating them as separate goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 border border-white/10 bg-white/[0.01]">
              <div className="text-cyan-400 font-mono text-sm mb-3">01</div>
              <h3 className="text-lg font-bold uppercase mb-2">Discipline</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">Discipline creates consistency.</p>
              <p className="text-xs text-slate-500">Executing consistency regardless of daily emotional states.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.01]">
              <div className="text-cyan-400 font-mono text-sm mb-3">02</div>
              <h3 className="text-lg font-bold uppercase mb-2">Fitness</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">Fitness builds physical capacity.</p>
              <p className="text-xs text-slate-500">Building structural strength, conditioning, and physical longevity.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.01]">
              <div className="text-cyan-400 font-mono text-sm mb-3">03</div>
              <h3 className="text-lg font-bold uppercase mb-2">Yoga</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">Yoga develops movement and awareness.</p>
              <p className="text-xs text-slate-500">Enhancing mobility, breath control, and nervous system recovery.</p>
            </div>
            <div className="p-6 border border-white/10 bg-white/[0.01]">
              <div className="text-cyan-400 font-mono text-sm mb-3">04</div>
              <h3 className="text-lg font-bold uppercase mb-2">Mindset</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">Mindset develops resilience.</p>
              <p className="text-xs text-slate-500">Cultivating unyielding mental resilience and strategic focus.</p>
            </div>
          </div>
          <p className="text-center font-mono text-xs text-cyan-300 uppercase tracking-wider mt-12">
            Four systems. Different functions. One direction: greater human capability.
          </p>
        </section>

        {/* 6. FOUR SYSTEMS */}
        <section id="systems" className="py-24 max-w-7xl mx-auto px-4 border-t border-white/5 scroll-mt-24">
          <h2 className="text-5xl font-black uppercase text-center mb-16 tracking-tight">The Four Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {DETAILED_SYSTEMS.map((system) => (
              <div key={system.id} className="p-6 border border-white/10 bg-[#050816]/60 flex flex-col justify-between hover:border-cyan-400/50 transition-colors">
                <div>
                  <div className="text-cyan-400 font-mono text-sm mb-4 tracking-widest">{system.number} // SYSTEM</div>
                  <h3 className="text-xl font-bold uppercase mb-2">{system.title}</h3>
                  <p className="text-xs text-cyan-300 font-mono mb-4">{system.coreFocus}</p>
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{system.description}</p>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">{system.detailedDescription}</p>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-4 border-t border-white/5 pt-4">
                    <strong className="text-slate-300 block mb-1">Primary Outcome</strong> {system.primaryOutcome}
                  </div>
                  <Link href={system.href} className="text-xs font-bold text-cyan-400 uppercase tracking-wider hover:text-cyan-300 transition-colors">
                    Enter System &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FIVE STAGE PROCESS */}
        <section className="py-24 bg-white/[0.02] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">The Process</span>
              <h2 className="text-4xl font-black uppercase mt-2 mb-4">From Chaos to Clarity</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">
                Every meaningful transformation begins with awareness and develops through deliberate action. But the process does not end when you reach a goal. It continues as you learn, adapt, and take on new challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step) => (
                <div key={step.number} className="p-6 border border-white/10 bg-[#050816] flex flex-col justify-between">
                  <div>
                    <span className="text-cyan-400 font-mono text-xs block mb-3">{step.number}. {step.title.toUpperCase()}</span>
                    <h3 className="text-sm font-bold uppercase mb-2 text-slate-200">{step.description}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center font-mono text-xs text-cyan-400 uppercase tracking-widest mt-12">
              THE PROCESS NEVER STOPS.
            </p>
          </div>
        </section>

        {/* 8. WHY HUMAN OPTIMIZATION? */}
        <section className="py-24 px-4 max-w-4xl mx-auto border-t border-white/5 text-center">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-3">Build the next version of yourself</span>
          <h2 className="text-4xl font-black uppercase mb-8">Why Human Optimization?</h2>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Human optimization is not about becoming someone else. It is about developing more of what you are capable of becoming.
          </p>
          <div className="text-left max-w-xl mx-auto space-y-3 mb-12 text-sm text-slate-400 font-mono">
            <p>&bull; It looks like keeping promises to yourself.</p>
            <p>&bull; It looks like having the strength and mobility to move well.</p>
            <p>&bull; It looks like building habits that continue working when motivation disappears.</p>
            <p>&bull; It looks like responding to setbacks instead of being controlled by them.</p>
            <p>&bull; It looks like recovering intelligently instead of constantly pushing yourself into exhaustion.</p>
            <p>&bull; It looks like becoming more disciplined without becoming rigid.</p>
            <p>&bull; It looks like becoming stronger without sacrificing balance.</p>
            <p>&bull; It looks like becoming more capable without sacrificing your health or your life in the process.</p>
          </div>
          <div className="p-8 border border-white/10 bg-white/[0.01] max-w-md mx-auto mb-8">
            <p className="text-xs uppercase font-mono text-slate-400 mb-4">The objective is simple:</p>
            <div className="space-y-2 text-sm font-bold uppercase text-cyan-300">
              <p>Become stronger.</p>
              <p>Become healthier.</p>
              <p>Become more disciplined.</p>
              <p>Become more resilient.</p>
              <p>Become more aware.</p>
              <p>Become more capable.</p>
            </div>
            <p className="text-xs font-mono text-slate-500 mt-4">One system at a time.</p>
          </div>
        </section>

        {/* 9. OUTCOMES */}
        <section className="py-24 bg-white/[0.01] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">What human optimization can develop</span>
            <h2 className="text-4xl font-black uppercase mb-12">Expected Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {OUTCOMES.map((item, idx) => (
                <div key={idx} className="p-6 border border-white/10 bg-[#050816]/40 text-left">
                  <h3 className="text-base font-bold uppercase mb-2 text-cyan-400">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. KNOWLEDGE LIBRARY */}
        <section className="py-24 max-w-7xl mx-auto px-4 border-t border-white/5 text-center">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">Learn. Apply. Evolve.</span>
          <h2 className="text-4xl font-black uppercase mb-6">Knowledge Library</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-16 leading-relaxed">
            Knowledge becomes valuable when it changes what you do. The NomadLifeXP Knowledge Library brings together practical guides, frameworks, training principles, movement practices, mindset strategies, and habit systems designed to help you turn information into action.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {KNOWLEDGE_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-6 border border-white/10 bg-[#050816] flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-lg font-bold uppercase mb-1">{cat.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{cat.subtitle}</p>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">{cat.description}</p>
                </div>
                <Link href={cat.href} className="text-xs font-bold text-cyan-300 uppercase tracking-wider hover:text-cyan-200 transition-colors">
                  Explore {cat.title} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <Link href="/blog" className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 font-bold uppercase text-xs tracking-wider hover:bg-cyan-400 hover:text-black transition-colors">
            Explore the Knowledge Library &rarr;
          </Link>
        </section>

        {/* 11. MISSION */}
        <section className="py-24 bg-white/[0.02] border-t border-white/5 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">Our Mission</span>
            <h2 className="text-4xl font-black uppercase mb-6">We do not chase motivation. We build systems.</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              NomadLifeXP exists to make personal growth more practical. Not through endless motivation. Not through perfection. Not through unsustainable extremes. Through systems, habits, training, movement, awareness, resilience, and continuous practice.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed mb-12">
              The goal is not to create a temporary peak that disappears when motivation fades. The goal is to create a better baseline. A body that is stronger. A mind that is more resilient. Habits that support the person you want to become. A greater ability to act with intention. And a system that continues evolving with you.
            </p>
            <div className="text-xs font-mono uppercase text-cyan-300 tracking-wider">
              The goal is not a temporary peak. It is a better baseline.
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="py-24 max-w-4xl mx-auto px-4 border-t border-white/5">
          <h2 className="text-4xl font-black uppercase text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-6 border border-white/10 bg-[#050816]">
                <h3 className="text-sm font-bold uppercase mb-3 text-cyan-300 font-mono">{faq.question}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="py-28 px-4 text-center border-t border-white/5 bg-gradient-to-b from-[#050816] to-cyan-950/20">
          <div className="max-w-3xl mx-auto">
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">Your evolution begins here.</span>
            <h2 className="text-5xl font-black uppercase tracking-tight mb-4">
              Build. Adapt. Evolve.
            </h2>
            <p className="text-xs font-mono text-slate-400 mb-6 uppercase tracking-wider">
              You do not need more motivation. You need a system you can follow.
            </p>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto text-sm">
              Start where you are. Build what matters. Become more capable.
            </p>
            <Link href="/start-here" className="inline-block px-10 py-5 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors">
              Start Your Evolution &rarr;
            </Link>
          </div>
        </section>

      </main>

      {/* PREVIOUS FOOTER LAYOUT */}
      <footer className="border-t border-white/10 bg-[#03050c] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="font-black tracking-[0.25em] text-sm uppercase block mb-2">
              NOMADLIFE<span className="text-cyan-400">XP</span>
            </Link>
            <p className="text-xs text-slate-500 font-mono">
              &copy; {new Date().getFullYear()} NomadLifeXP. All rights reserved. Human Optimization &amp; Personal Growth.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.youtube.com/@nomadlifexp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors"
            >
              YouTube &rarr;
            </a>
            <a
              href="https://www.instagram.com/nomadlifexp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-cyan-400 transition-colors"
            >
              Instagram &rarr;
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}