import Link from "next/link";

export default function Footer() {
    const socialNodes = [
        { name: "YouTube", href: "https://www.youtube.com/@nomadlifexp" },
        { name: "Instagram", href: "https://www.instagram.com/nomadlifexp/" },
    ];

    return (
        <footer className="border-t border-neutral-800 bg-black text-neutral-200 antialiased">
            <div className="mx-auto max-w-6xl px-6 py-16 text-center">

                <div className="space-y-4">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                        Follow NomadLifeXP
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-mono">
                        {socialNodes.map((node) => (
                            <Link
                                key={node.name}
                                href={node.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-300 transition-colors hover:text-cyan-400 hover:underline underline-offset-4"
                            >
                                {node.name}
                            </Link>
                        ))}

                        <Link
                            href="/knowledge-index"
                            className="text-neutral-300 transition-colors hover:text-cyan-400 hover:underline underline-offset-4"
                        >
                            Knowledge Index
                        </Link>

                        <Link
                            href="/connect"
                            className="text-neutral-300 transition-colors hover:text-cyan-400 hover:underline underline-offset-4"
                        >
                            Official Links & Profiles
                        </Link>
                    </div>
                </div>

                <div className="mx-auto my-10 max-w-md border-t border-neutral-800" />

                <p className="text-sm font-mono font-semibold uppercase tracking-[0.15em] text-neutral-300">
                    Discipline • Fitness • Yoga • Mindset
                </p>

                <div className="mt-8 space-y-3">
                    <a
                        href="mailto:roy@nomadlifexp.com"
                        className="text-sm font-mono text-cyan-400 transition-colors hover:text-cyan-300 hover:underline underline-offset-4"
                    >
                        roy@nomadlifexp.com
                    </a>

                    <div className="border-t border-neutral-800 pt-6">
                        <p className="text-base font-mono font-bold tracking-wide text-white">
                            © 2026 NomadLifeXP. All rights reserved.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}


