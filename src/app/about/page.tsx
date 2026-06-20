import Link from "next/link";

export default function AboutPage() {
    return (
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 24px" }}>

            {/* HERO */}
            <section style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "3rem", fontWeight: 800 }}>
                    About NomadLifeXP
                </h1>

                <p style={{ color: "#94a3b8", marginTop: "15px", fontSize: "1.1rem" }}>
                    A structured life system built to replace motivation with systems.
                </p>
            </section>

            {/* CORE IDEA */}
            <section style={{ marginTop: "70px" }}>
                <h2>What is NomadLifeXP?</h2>

                <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                    NomadLifeXP is not a motivation-based self-help blog.
                    It is a structured life operating system designed to rebuild discipline,
                    physical performance, yoga practice, and mental clarity through repeatable daily frameworks.
                </p>

                <p style={{ color: "#94a3b8", lineHeight: 1.8, marginTop: "15px" }}>
                    Most people already know what they should do — train, focus, stay consistent.
                    The failure is not knowledge. It is system design.
                </p>
            </section>

            {/* PRINCIPLE */}
            <section style={{ marginTop: "70px" }}>
                <h2>Core Principle</h2>

                <div
                    style={{
                        marginTop: "20px",
                        padding: "20px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                        background: "rgba(255,255,255,0.03)"
                    }}
                >
                    <p style={{ fontSize: "1.2rem", color: "#fff" }}>
                        If your life has no structure, motivation will always fail you.
                    </p>
                </div>
            </section>

            {/* SYSTEM */}
            <section style={{ marginTop: "70px" }}>
                <h2>The Core System</h2>

                <ul style={{ color: "#94a3b8", lineHeight: 2 }}>
                    <li><strong>Discipline</strong> → consistency engine</li>
                    <li><strong>Fitness</strong> → energy + physical control</li>
                    <li><strong>Yoga</strong> → awareness + breath + mobility</li>
                    <li><strong>Mental Clarity</strong> → focus + emotional control</li>
                </ul>
            </section>

            {/* WHY IT EXISTS */}
            <section style={{ marginTop: "70px" }}>
                <h2>Why This System Exists</h2>

                <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                    Modern environments are engineered for distraction.
                    Attention is fragmented, habits are unstable, and focus is constantly broken.
                </p>

                <p style={{ color: "#94a3b8", lineHeight: 1.8, marginTop: "15px" }}>
                    NomadLifeXP exists to reverse this pattern by replacing motivation cycles
                    with structured behavioral systems that work even on low-energy days.
                </p>
            </section>

            {/* CTA */}
            <section style={{ marginTop: "90px", textAlign: "center" }}>
                <h2>Start Building Your System</h2>

                <p style={{ color: "#94a3b8", marginTop: "10px" }}>
                    You don’t need more information. You need execution structure.
                </p>

                <Link
                    href="/blog"
                    style={{
                        display: "inline-block",
                        marginTop: "25px",
                        background: "#8b5cf6",
                        padding: "14px 26px",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: 600
                    }}
                >
                    Enter Blog System
                </Link>
            </section>

        </main>
    );
}