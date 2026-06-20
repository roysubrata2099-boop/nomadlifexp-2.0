import Link from "next/link";

export default function AboutSection() {
    return (
        <section style={{ maxWidth: "800px", margin: "0 auto" }}>

            {/* TITLE */}
            <h1 className="gradient-text" style={{ marginBottom: "20px" }}>
                Evolve In Motion
            </h1>

            {/* INTRO */}
            <p style={{ marginBottom: "16px" }}>
                NomadLifeXP is not a motivation-based self-help blog. It is a structured
                life system designed to rebuild discipline, physical performance, and mental
                clarity through repeatable daily frameworks.
            </p>

            <p style={{ marginBottom: "30px" }}>
                Most people already know what they should do — train, focus, stay consistent.
                The failure is not knowledge. It is system design.
            </p>

            <p style={{ marginBottom: "30px", fontWeight: 600 }}>
                NomadLifeXP was built around a simple observation:
                <br />
                If your life has no structure, motivation will always fail you.
            </p>

            {/* SYSTEM GRID */}
            <h2 style={{ marginBottom: "15px" }}>Core Transformation System</h2>

            <div style={{
                display: "grid",
                gap: "12px",
                marginBottom: "30px"
            }}>
                <div className="card">Discipline → builds consistency and self-control</div>
                <div className="card">Fitness → builds energy, strength, and resilience</div>
                <div className="card">Yoga → builds awareness, mobility, and breath control</div>
                <div className="card">Mental Clarity → builds focus and emotional stability</div>
            </div>

            {/* WHY SECTION */}
            <h2 style={{ marginBottom: "15px" }}>Why This System Exists</h2>

            <p style={{ marginBottom: "16px" }}>
                Modern environments are engineered for distraction. Attention is fragmented.
                Habits are unstable. Focus is rare.
            </p>

            <p style={{ marginBottom: "30px" }}>
                NomadLifeXP exists to reverse this pattern by replacing motivation cycles with
                structured behavioral systems that operate even on low-energy days.
            </p>

            <p style={{ marginBottom: "30px", fontWeight: 600 }}>
                This is not inspiration content. This is execution structure.
            </p>

            {/* CTA */}
            <h2 style={{ marginBottom: "15px" }}>Start Building Your System</h2>

            <p style={{ marginBottom: "20px" }}>
                You don’t need more information. You need a repeatable system that works when
                motivation disappears.
            </p>

            <Link href="/blog" className="btn btn-primary">
                Enter Blog System →
            </Link>
        </section>
    );
}