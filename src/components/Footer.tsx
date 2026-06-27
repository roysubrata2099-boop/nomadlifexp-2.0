import Link from "next/link";

/* ---------------- OPERATIONAL FOOTER COMPONENT ---------------- */
export default function Footer() {
    const socialNodes = [
        { name: "YouTube", href: "https://www.youtube.com/@nomadlifexp" },
        { name: "Instagram", href: "https://www.instagram.com/nomadlifexp/" }
    ];

    return (
        <footer className="border-t border-neutral-900 bg-black text-neutral-400 selection:bg-neutral-800 selection:text-white antialiased">
            <div className="max-w-6xl mx-auto px-6 py-16 text-center space-y-8">

                {/* SOCIAL DIRECTORY ENFORCER */}
                <div className="space-y-3">
                    <h5 className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
                        Follow NomadLifeXP
                    </h5>

                    <div className="flex justify-center items-center gap-6 text-xs font-mono">
                        {socialNodes.map((node) => (
                            <Link
                                key={node.name}
                                href={node.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-400 hover:text-white hover:underline decoration-neutral-700 underline-offset-4 transition-colors"
                            >
                                {node.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* RUNTIME SYSTEM CONFIG CODES */}
                <div className="pt-4 border-t border-neutral-950 max-w-xs mx-auto">
                    <p className="text-neutral-600 font-mono text-[9px] uppercase tracking-[0.4em]">
                        Discipline System Mindset Discipline Fitness Yoga
                    </p>
                </div>

                {/* COPYRIGHT AND RUNTIME METRIC */}
                <div className="text-[10px] font-mono text-neutral-600 flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
                    <span>© 2026 NomadLifeXP</span>
                    <span className="hidden sm:inline text-neutral-800">|</span>
                    <span className="text-neutral-700 uppercase tracking-widest text-[9px]">
                        System Status Nominal
                    </span>
                </div>

            </div>
        </footer>
    );
}