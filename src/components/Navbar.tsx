// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
    // Main structural site links
    const mainLinks = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Start Here", href: "/start-here" },
    ];

    // Article category dynamic filter links
    const categoryLinks = [
        { name: "Mindset", href: "/blog/category/mindset" },
        { name: "Discipline", href: "/blog/category/discipline" },
        { name: "Fitness", href: "/blog/category/fitness" },
        { name: "Yoga", href: "/blog/category/yoga" },
    ];

    return (
        <header
            style={{
                backgroundColor: "#111",
                borderBottom: "1px solid #222",
                maxWidth: "900px",
                margin: "0 auto",
                padding: "15px 20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                }}
            >
                {/* Brand Logo */}
                <Link
                    href="/"
                    style={{
                        color: "#facc15",
                        textDecoration: "none",
                        fontWeight: "bold",
                        fontSize: "22px",
                        letterSpacing: "-0.5px",
                    }}
                >
                    NomadLifeXP
                </Link>

                {/* Primary Navigation Hub */}
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Main Pages */}
                    <div style={{ display: "flex", gap: "15px" }}>
                        {mainLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                style={{
                                    color: "#fff",
                                    textDecoration: "none",
                                    fontSize: "15px",
                                    fontWeight: "600",
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Divider Line */}
                    <span style={{ color: "#333", userSelect: "none" }}>|</span>

                    {/* Categories */}
                    <div style={{ display: "flex", gap: "12px" }}>
                        {categoryLinks.map((tab) => (
                            <Link
                                key={tab.name}
                                href={tab.href}
                                style={{
                                    color: "#38bdf8", // Distinct accent color for content silos
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    padding: "2px 6px",
                                    borderRadius: "4px",
                                    background: "#161b22",
                                }}
                            >
                                {tab.name}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}