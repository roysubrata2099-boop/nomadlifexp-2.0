import Link from "next/link";

export default function StartHerePage() {
    return (
        <main style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 20px" }}>

            {/* HERO */}
            <section style={{ textAlign: "center", marginBottom: "60px" }}>
                <h1>Start Here</h1>

                <p style={{ color: "#94a3b8", marginTop: "15px", lineHeight: 1.7 }}>
                    This is not a motivation system. It is a structured transformation framework.
                    Do not try to do everything. Follow sequence only.
                </p>
            </section>

            {/* SYSTEM FLOW */}
            <section>
                <h2>System Flow (Follow in Order)</h2>

                <div style={{ marginTop: "20px", lineHeight: 2, color: "#94a3b8" }}>
                    <p><strong>Step 1 — Discipline</strong> → Build consistency engine</p>
                    <p><strong>Step 2 — Fitness</strong> → Build physical energy system</p>
                    <p><strong>Step 3 — Yoga</strong> → Build awareness + control</p>
                    <p><strong>Step 4 — Mental Clarity</strong> → Build focus system</p>
                </div>
            </section>

            {/* WARNING / POSITIONING */}
            <section style={{ marginTop: "60px" }}>
                <h2>Important</h2>

                <p style={{ color: "#94a3b8", lineHeight: 1.8 }}>
                    Most people fail because they jump between systems.
                    This platform works only when you follow structure, not motivation.
                </p>
            </section>

            {/* CTA ZONE */}
            <section style={{ textAlign: "center", marginTop: "80px" }}>
                <h2>Begin Execution</h2>

                <p style={{ color: "#94a3b8" }}>
                    Do not read everything. Start one system.
                </p>

                <div style={{ marginTop: "25px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>

                    <Link
                        href="/discipline"
                        style={{
                            background: "#8b5cf6",
                            padding: "12px 20px",
                            borderRadius: "10px",
                            color: "white",
                        }}
                    >
                        Start Discipline
                    </Link>

                    <Link
                        href="/blog"
                        style={{
                            border: "1px solid #333",
                            padding: "12px 20px",
                            borderRadius: "10px",
                        }}
                    >
                        Enter Blog System
                    </Link>
                </div>
            </section>

        </main>
    );
}