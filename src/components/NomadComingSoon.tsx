type NomadComingSoonProps = {
    category: string;
    title: string;
};

export default function NomadComingSoon({
    category,
    title,
}: NomadComingSoonProps) {
    return (
        <main className="min-h-screen px-6 py-24">
            <div className="mx-auto max-w-4xl">

                <p className="font-mono text-xs tracking-[0.2em] text-cyan-400">
                    NOMADLIFEXP // {category}
                </p>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#EDF6FF]/70">
                    This guide is currently being developed.
                    The full NomadLifeXP field guide will be available here soon.
                </p>

                <div className="mt-10 border border-white/10 bg-white/[0.02] p-6">
                    <p className="font-mono text-sm text-cyan-400">
                        STATUS // COMING SOON
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#EDF6FF]/60">
                        We are building this section to provide practical,
                        actionable systems for life in motion.
                    </p>
                </div>

            </div>
        </main>
    );
}
