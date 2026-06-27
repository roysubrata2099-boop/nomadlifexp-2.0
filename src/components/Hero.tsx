import Link from "next/link";

/* ---------------- OPERATIONAL HERO COMPONENT ---------------- */
export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-black text-neutral-200 px-6 selection:bg-neutral-800 selection:text-white antialiased">
            <div className="text-center max-w-3xl space-y-8">

                {/* PROTOCOL META TRACKING */}
                <div className="space-y-3">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-500 border border-neutral-900 bg-neutral-950/40 px-4 py-1.5 inline-block">
                        System Protocol Core Framework
                    </span>
                    <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-neutral-600 block pt-1">
                        Discipline Fitness Yoga Mindset
                    </p>
                </div>

                {/* MAIN SYSTEM CALLOUT */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                    Evolve in Motion
                </h1>

                {/* EXECUTIVE DESCRIPTION */}
                <p className="text-neutral-400 font-light max-w-xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
                    The NomadLifeXP configuration maps deliberate execution parameters to clean physical output. It is engineered to establish strict cognitive clarity and daily consistency through non-negotiable micro-structures.
                </p>

                {/* ACTION ROUTING CHIPS */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4 max-w-md mx-auto sm:max-w-none">
                    <Link
                        href="/start-here"
                        className="w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-widest bg-white text-black hover:bg-neutral-200 transition-colors font-bold rounded-none"
                    >
                        Initialize System
                    </Link>

                    <Link
                        href="/blog"
                        className="w-full sm:w-auto px-8 py-4 text-xs font-mono uppercase tracking-widest border border-neutral-800 text-neutral-300 bg-neutral-950/20 hover:text-white hover:border-neutral-700 transition-colors rounded-none"
                    >
                        Enter Blog System
                    </Link>
                </div>

            </div>
        </section>
    );
}