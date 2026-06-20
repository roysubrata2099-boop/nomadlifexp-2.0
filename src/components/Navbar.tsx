import Link from "next/link";

export default function Navbar() {
    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 1000,
                background: "rgba(11,15,20,0.85)",
                backdropFilter: "blur(14px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <nav
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "16px 24px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                {/* BRAND */}
                <Link
                    href="/"
                    style={{
                        fontWeight: 800,
                        fontSize: "16px",
                        color: "#8b5cf6",
                        textDecoration: "none",
                        letterSpacing: "0.5px",
                    }}
                >
                    NomadLifeXP
                </Link>

                {/* NAV LINKS */}
                <div
                    style={{
                        display: "flex",
                        gap: "16px",
                        fontSize: "14px",
                        flexWrap: "wrap",
                    }}
                >
                    <Link href="/start-here">Start Here</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/discipline">Discipline</Link>
                    <Link href="/fitness">Fitness</Link>
                    <Link href="/yoga">Yoga</Link>
                    <Link href="/mindset">Mindset</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </header>
    );
}