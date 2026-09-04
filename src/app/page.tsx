import Link from "next/link";

import ClientSiteProtection from "@/components/ClientSiteProtection";
import ClientVideoPlayer from "@/components/ClientVideoPlayer";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

interface SystemDetail {
  readonly number: string;
  readonly title: string;
  readonly coreFocus: string;
  readonly description: string;
  readonly extraDesc?: string;
  readonly primaryOutcome: string;
  readonly href: string;
}

interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

interface OutcomeItem {
  readonly title: string;
  readonly description: string;
}

interface KnowledgeCard {
  readonly title: string;
  readonly focus: string;
  readonly description: string;
  readonly href: string;
}

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

const NAVIGATION: readonly NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Digital Nomads", href: "/digital-nomads" },
  { label: "Systems", href: "/discipline-system" },
  { label: "Blog", href: "/blog" },
  { label: "Start", href: "/start-here" },
];

const SYSTEMS_LIST: readonly SystemDetail[] = [
  {
    number: "01",
    title: "DISCIPLINE SYSTEM",
    coreFocus: "HABITS. FOCUS. CONSISTENCY.",
    description:
      "Build the ability to act with intention, follow through on commitments, manage distractions, and create routines that support long term growth.",
    extraDesc:
      "Learn how to turn goals into repeatable actions, reduce your dependence on motivation, and build consistency that compounds over time.",
    primaryOutcome:
      "Stronger routines. Better focus. Greater self control.",
    href: "/blog/category/discipline",
  },
  {
    number: "02",
    title: "FITNESS SYSTEM",
    coreFocus: "STRENGTH. MOBILITY. PERFORMANCE.",
    description:
      "Develop physical capacity through strength training, conditioning, movement, recovery, and progressive practice.",
    extraDesc:
      "Fitness is not simply about appearance. It is about developing a body that can handle the demands of training, work, travel, everyday life, and the challenges you choose to pursue.",
    primaryOutcome:
      "A stronger, healthier, more capable, and more resilient body.",
    href: "/blog/category/fitness",
  },
  {
    number: "03",
    title: "YOGA SYSTEM",
    coreFocus: "MOVEMENT. AWARENESS. RECOVERY.",
    description:
      "Develop mobility, balance, breath, body awareness, and movement control through mindful practice.",
    extraDesc:
      "Yoga complements physical training by helping you move with greater awareness while supporting recovery, flexibility, balance, and the connection between body and mind. The goal is not simply to perform poses. It is to become more aware of how you move, breathe, recover, and respond to your physical state.",
    primaryOutcome:
      "Better movement. Better recovery. Greater mind and body connection.",
    href: "/blog/category/yoga",
  },
  {
    number: "04",
    title: "MINDSET SYSTEM",
    coreFocus: "GROWTH. RESILIENCE. CONFIDENCE.",
    description:
      "Develop the mental foundations required to handle pressure, overcome resistance, learn from setbacks, and continue evolving.",
    extraDesc:
      "A resilient mindset is not about pretending everything is easy. It is about developing the perspective and confidence to respond to difficulty instead of being controlled by it.",
    primaryOutcome:
      "Greater resilience. Stronger confidence. A growth oriented mind.",
    href: "https://www.nomadlifexp.com/blog/category/mindset",
  },
];

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    step: "01.",
    title: "AWARENESS",
    description:
      "Understand yourself, your habits, your environment, and your current physical and mental state. Awareness gives you an honest starting point. You cannot intentionally improve what you have not taken the time to understand.",
  },
  {
    step: "02.",
    title: "DISCIPLINE",
    description:
      "Turn intention into consistent action. Build routines, remove unnecessary friction, manage distractions, and develop the ability to follow through even when motivation disappears.",
  },
  {
    step: "03.",
    title: "STRENGTH",
    description:
      "Develop physical and mental capacity. Train your body, strengthen your resilience, and gradually increase your ability to handle challenge, discomfort, and responsibility.",
  },
  {
    step: "04.",
    title: "BALANCE",
    description:
      "Bring performance, recovery, movement, mindset, and lifestyle into a sustainable rhythm. Progress is not about pushing harder forever. It is about knowing when to train, when to recover, when to adapt, and when to continue.",
  },
  {
    step: "05.",
    title: "EVOLUTION",
    description:
      "Keep learning, adapting, and becoming more capable. Evolution is not a final destination. As you grow, your understanding changes, your challenges change, and the next level of development begins.",
  },
];

const OUTCOMES: readonly OutcomeItem[] = [
  {
    title: "STRONGER BODY",
    description:
      "Build physical strength, mobility, conditioning, and resilience.",
  },
  {
    title: "SHARPER MIND",
    description:
      "Develop focus, awareness, confidence, and the ability to think and respond intentionally.",
  },
  {
    title: "BETTER HABITS",
    description:
      "Create routines that make positive behavior easier to repeat.",
  },
  {
    title: "GREATER DISCIPLINE",
    description:
      "Develop the ability to act consistently instead of relying entirely on motivation.",
  },
  {
    title: "IMPROVED PERFORMANCE",
    description:
      "Increase your physical and mental capacity so you can perform better in training and everyday life.",
  },
  {
    title: "SUSTAINABLE GROWTH",
    description:
      "Create progress that can continue over months and years instead of chasing short term extremes.",
  },
];

const KNOWLEDGE_CATEGORIES: readonly KnowledgeCard[] = [
  {
    title: "DISCIPLINE",
    focus: "Habits • Focus • Consistency",
    description:
      "Practical approaches to building discipline, creating better routines, improving focus, and becoming more consistent.",
    href: "/blog/category/discipline",
  },
  {
    title: "FITNESS",
    focus: "Training • Strength • Recovery",
    description:
      "Guides for developing strength, physical capacity, mobility, conditioning, performance, and recovery.",
    href: "/blog/category/fitness",
  },
  {
    title: "YOGA",
    focus: "Movement • Breath • Mobility",
    description:
      "Explore yoga, mobility, breathing, body awareness, balance, recovery, and mindful movement.",
    href: "/blog/category/yoga",
  },
  {
    title: "MINDSET",
    focus: "Resilience • Confidence • Growth",
    description:
      "Develop a stronger mindset through resilience, self awareness, confidence, growth, and intentional thinking.",
    href: "/mindset",
  },
];

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "WHAT IS NOMADLIFEXP?",
    answer:
      "NomadLifeXP is a human optimization system focused on personal growth through discipline, fitness, yoga, mindset, and intentional habits. It brings these areas together into a practical framework designed to help you become stronger, healthier, more resilient, disciplined, and capable.",
  },
  {
    question: "WHAT DOES HUMAN OPTIMIZATION MEAN?",
    answer:
      "Human optimization means intentionally developing your physical, mental, and behavioral capabilities. It includes how you train, move, think, recover, build habits, manage challenges, and continue learning. The objective is not perfection. It is greater capability and sustainable personal growth.",
  },
  {
    question: "WHAT ARE THE FOUR NOMADLIFEXP SYSTEMS?",
    answer:
      "The framework consists of four interconnected systems. Discipline develops habits, focus, and consistency. Fitness develops strength, mobility, conditioning, and physical capacity. Yoga develops movement, awareness, breath, balance, and recovery. Mindset develops resilience, confidence, adaptability, and growth. Together, they create a more complete approach to human development.",
  },
  {
    question: "IS NOMADLIFEXP ONLY ABOUT FITNESS?",
    answer:
      "No. Fitness is one part of the framework. NomadLifeXP approaches human optimization through four connected areas: discipline, fitness, yoga, and mindset. Physical development matters, but sustainable growth also requires habits, awareness, resilience, and the ability to consistently apply what you learn.",
  },
  {
    question: "WHO IS NOMADLIFEXP FOR?",
    answer:
      "NomadLifeXP is for people who want to take a more intentional approach to personal growth. You do not need to be an athlete, a yoga practitioner, or an expert in self improvement. You simply need a willingness to learn, take action, build better habits, and continue developing.",
  },
  {
    question: "WHERE SHOULD I START?",
    answer:
      "Start with awareness. Understand where you are currently, identify the area that would create the greatest positive change, and begin with one system. The Start Here section provides a path into the NomadLifeXP framework, while the Knowledge Library provides deeper resources across discipline, fitness, yoga, and mindset. You do not need to optimize everything at once. Start with one system. Build consistency. Then evolve.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-[#050816] text-white selection:bg-cyan-400 selection:text-black font-sans flex flex-col justify-between select-none">
      <ClientSiteProtection />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-black tracking-[0.25em] text-sm uppercase"
          >
            NOMADLIFE<span className="text-cyan-400">XP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs uppercase font-bold text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/start-here"
            className="px-4 py-2 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors"
          >
            Start Here &rarr;
          </Link>
        </div>
      </header>

      <main className="pt-20 flex-grow">
        {/* HERO SECTION */}
        <section className="py-24 px-4 text-center border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Human Optimization & Personal Growth
            </p>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-6">
              BUILD YOURSELF
              <br />
              <span className="text-cyan-400">LIKE A SYSTEM</span>
            </h1>

            <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-slate-300 mb-6">
              Discipline • Fitness • Yoga • Mindset
            </p>

            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              NomadLifeXP is a human optimization system for building
              discipline, strength, mobility, resilience, mindset, and habits
              to help you become stronger, healthier, and more capable.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/start-here"
                className="w-full sm:w-auto px-8 py-4 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors"
              >
                Start Your Evolution &rarr;
              </Link>

              <Link
                href="/discipline-system"
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase text-xs tracking-wider hover:bg-white/10 transition-colors"
              >
                Explore The Systems &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* CINEMATIC YOGA SECTION */}
        <section className="relative w-full py-24 px-4 overflow-hidden border-b border-white/10">
          <div className="max-w-5xl mx-auto relative z-20 text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">
              Movement • Breath • Control
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Evolve In Motion
            </h2>
          </div>

          <div className="relative w-full aspect-video overflow-hidden bg-[#03050c]">
            <ClientVideoPlayer />

            <div className="absolute top-6 left-6 z-20 pointer-events-none">
              <span className="text-xs font-mono uppercase tracking-[0.4em] bg-black/60 px-4 py-2 border border-white/20 backdrop-blur-md text-cyan-300">
                Cinematic Video
              </span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-slate-300 space-y-6 text-base md:text-lg leading-relaxed text-center">
            <p className="font-bold text-white uppercase tracking-wider text-sm">
              Movement is part of evolution.
            </p>

            <p>
              The way you move, breathe, recover, and experience your body
              influences how you perform and how you feel. Through yoga,
              mobility, breath, and mindful movement, NomadLifeXP explores the
              connection between physical awareness and personal growth.
            </p>

            <p className="text-slate-300 text-sm">
              Yoga is not simply about performing poses. It is about developing
              greater control, awareness, mobility, balance, and connection
              between body and mind.
            </p>

            <p className="font-mono text-cyan-400 uppercase tracking-widest text-xs pt-4">
              EVOLVE IN MOTION.
            </p>
          </div>
        </section>

        {/* WHAT IS HUMAN OPTIMIZATION? */}
        <section className="py-24 px-4 border-b border-white/10 bg-[#03050c]">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">
              Become more capable.
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">
              What Is Human Optimization?
            </h2>

            <div className="space-y-6 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                Human optimization is the intentional development of your
                physical, mental, and behavioral capabilities so you can live,
                perform, and adapt with greater purpose.
              </p>

              <p className="text-slate-300">
                It is not about becoming perfect, maximizing every minute, or
                constantly pushing yourself harder. It is about developing the
                strength, discipline, awareness, resilience, and habits that
                help you handle the demands of life while continuing to grow.
              </p>

              <p>
                NomadLifeXP turns these principles into a practical framework
                for personal growth.
              </p>

              <p className="text-slate-300">
                The framework brings together four interconnected systems:
                Discipline, Fitness, Yoga, and Mindset. Each system develops a
                different aspect of human capability, while together they
                create a more complete approach to personal development.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 text-sm font-mono text-cyan-300">
                <div className="p-4 bg-white/5 border border-white/10">
                  Discipline creates consistency.
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                  Fitness builds physical capacity.
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                  Yoga develops movement, awareness, and recovery.
                </div>

                <div className="p-4 bg-white/5 border border-white/10">
                  Mindset develops resilience, confidence, and adaptability.
                </div>
              </div>

              <p className="font-semibold text-white">
                The goal is not a temporary transformation. It is to build a
                stronger foundation that continues to improve over time.
              </p>

              <div className="py-8 text-center space-y-2 font-mono text-sm tracking-widest uppercase text-cyan-400">
                <p>Small actions become habits.</p>
                <p>Habits become systems.</p>
                <p>Systems create consistency.</p>
                <p>Consistency creates lasting change.</p>
              </div>

              <div className="p-6 bg-cyan-950/20 border-l-4 border-cyan-400 my-6">
                <p className="font-bold text-white tracking-wider uppercase text-sm">
                  Motivation fades. Systems endure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE NOMADLIFEXP FRAMEWORK */}
        <section className="py-24 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">
                Four systems. One human.
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                The NomadLifeXP Framework
              </h2>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Human development does not happen in isolation. Your physical
                condition can influence your confidence. Your habits influence
                your consistency. Your mobility affects how you move and
                recover. Your mindset influences how you respond when things
                become difficult. That is why NomadLifeXP connects these areas
                instead of treating them as separate goals.
              </p>
            </div>

            <div className="space-y-16">
              {SYSTEMS_LIST.map((sys) => (
                <div
                  key={sys.number}
                  className="p-8 md:p-12 bg-[#03050c] border border-white/10 rounded-2xl flex flex-col md:flex-row gap-8 items-start justify-between"
                >
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl font-black text-cyan-400 font-mono">
                        {sys.number}
                      </span>

                      <h3 className="text-2xl md:text-3xl font-black uppercase">
                        {sys.title}
                      </h3>
                    </div>

                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-300">
                      {sys.coreFocus}
                    </p>

                    <p className="text-slate-300 text-base leading-relaxed">
                      {sys.description}
                    </p>

                    {sys.extraDesc && (
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {sys.extraDesc}
                      </p>
                    )}

                    <div className="pt-2">
                      <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                        Primary Outcome
                      </p>

                      <p className="text-sm font-semibold text-white">
                        {sys.primaryOutcome}
                      </p>
                    </div>
                  </div>

                  <div className="w-full md:w-auto flex-shrink-0">
                    <Link
                      href={sys.href}
                      className="inline-block w-full md:w-auto px-6 py-3 bg-white/5 border border-white/20 text-white font-bold uppercase text-xs tracking-wider hover:bg-cyan-400 hover:text-black transition-colors text-center"
                    >
                      Enter The System &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-300 mt-12">
              Four systems. Different functions. One direction: greater human
              capability.
            </p>
          </div>
        </section>

        {/* THE PROCESS */}
        <section className="py-24 px-4 border-b border-white/10 bg-[#03050c]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">
                From chaos to clarity
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                The Process
              </h2>

              <p className="text-slate-300 text-base">
                Every meaningful transformation begins with awareness and
                develops through deliberate action. But the process does not
                end when you reach a goal. It continues as you learn, adapt,
                and take on new challenges.
              </p>
            </div>

            <div className="space-y-12">
              {PROCESS_STEPS.map((p) => (
                <div
                  key={p.step}
                  className="flex flex-col md:flex-row gap-6 items-start border-l-2 border-cyan-400/40 pl-6"
                >
                  <span className="text-xl font-mono font-black text-cyan-400">
                    {p.step}
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase text-white">
                      {p.title}
                    </h3>

                    <p className="text-slate-300 text-base leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center font-mono text-xs uppercase tracking-widest text-cyan-400 mt-16">
              THE PROCESS NEVER STOPS.
            </p>
          </div>
        </section>

        {/* WHY HUMAN OPTIMIZATION? */}
        <section className="py-24 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">
              Build the next version of yourself
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              Why Human Optimization?
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed">
              Human optimization is not about becoming someone else. It is
              about developing more of what you are capable of becoming.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="p-6 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">
                It looks like keeping promises to yourself.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">
                It looks like having the strength and mobility to move well.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">
                It looks like building habits that continue working when
                motivation disappears.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">
                It looks like responding to setbacks instead of being
                controlled by them.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">
                It looks like recovering intelligently instead of constantly
                pushing yourself into exhaustion.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">
                It looks like becoming more disciplined without becoming
                rigid.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto p-8 bg-cyan-950/30 border border-cyan-400/30 text-center space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              The objective is simple:
            </p>

            <p className="text-sm font-mono uppercase tracking-wider text-slate-200">
              Become stronger. Become healthier. Become more disciplined.
              Become more resilient. Become more aware. Become more capable.
              One system at a time.
            </p>
          </div>
        </section>

        {/* WHAT HUMAN OPTIMIZATION CAN DEVELOP */}
        <section className="py-24 px-4 border-b border-white/10 bg-[#03050c]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                What Human Optimization Can Develop
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {OUTCOMES.map((item) => (
                <div
                  key={item.title}
                  className="p-8 bg-[#050816] border border-white/10 space-y-3"
                >
                  <h3 className="text-lg font-black uppercase text-cyan-400">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KNOWLEDGE LIBRARY */}
        <section className="py-24 px-4 border-b border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 mb-2">
                Learn. Apply. Evolve.
              </p>

              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
                Knowledge Library
              </h2>

              <p className="text-slate-300 text-base">
                Knowledge becomes valuable when it changes what you do. The
                NomadLifeXP Knowledge Library brings together practical guides,
                frameworks, training principles, movement practices, mindset
                strategies, and habit systems designed to help you turn
                information into action.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {KNOWLEDGE_CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="p-8 bg-[#03050c] border border-white/10 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black uppercase">
                      {cat.title}
                    </h3>

                    <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                      {cat.focus}
                    </p>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href={cat.href}
                      className="inline-block text-xs font-mono uppercase tracking-wider text-cyan-300 hover:text-white transition-colors"
                    >
                      Explore {cat.title} &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block px-8 py-4 bg-white/5 border border-white/20 text-white font-bold uppercase text-xs tracking-wider hover:bg-cyan-400 hover:text-black transition-colors"
              >
                Explore The Knowledge Library &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* OUR MISSION */}
        <section className="py-24 px-4 border-b border-white/10 bg-[#03050c]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
              We do not chase motivation. We build systems.
            </p>

            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
              Our Mission
            </h2>

            <div className="text-slate-300 text-base md:text-lg space-y-6 leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                NomadLifeXP exists to make personal growth more practical. Not
                through endless motivation. Not through perfection. Not through
                unsustainable extremes. Through systems, habits, training,
                movement, awareness, resilience, and continuous practice.
              </p>

              <p>
                The goal is not to create a temporary peak that disappears
                when motivation fades. The goal is to create a better baseline.
                A body that is stronger. A mind that is more resilient. Habits
                that support the person you want to become. A greater ability
                to act with intention. And a system that continues evolving
                with you.
              </p>
            </div>

            <div className="pt-6">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
                THE GOAL IS NOT A TEMPORARY PEAK. IT IS A BETTER BASELINE.
              </p>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-24 px-4 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              {FAQ_ITEMS.map((faq) => (
                <div
                  key={faq.question}
                  className="p-8 bg-[#03050c] border border-white/10 space-y-3"
                >
                  <h3 className="text-lg font-black uppercase text-cyan-300">
                    {faq.question}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CONVERSION / CTA */}
        <section className="py-24 px-4 text-center bg-[#03050c]">
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400">
              Your evolution begins here.
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
              Build. Adapt. Evolve.
            </h2>

            <p className="text-slate-300 text-base md:text-lg">
              You do not need to optimize everything at once. Start with
              awareness, build consistency through discipline, and let your
              systems compound over time.
            </p>

            <div className="pt-4">
              <Link
                href="/start-here"
                className="inline-block px-8 py-4 bg-cyan-400 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-300 transition-colors"
              >
                Start Your Evolution &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}











