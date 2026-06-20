import Link from "next/link";

export default function HomePage() {
  return (
    <main>

      {/* HERO SYSTEM */}
      <section style={{ textAlign: "center", padding: "100px 0" }}>
        <p style={{ color: "#8b5cf6", fontWeight: 600 }}>
          Self Transformation System
        </p>

        <h1 style={{ fontSize: "3.5rem", marginTop: "20px" }}>
          NomadLifeXP
        </h1>

        <p style={{ color: "#94a3b8", maxWidth: "700px", margin: "20px auto" }}>
          A structured system designed to replace motivation with repeatable daily frameworks for discipline, fitness, yoga, and mental clarity.
        </p>

        <div style={{ marginTop: "30px", display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/start-here" style={{ background: "#8b5cf6", padding: "12px 20px", borderRadius: "10px", color: "white" }}>
            Start System
          </Link>

          <Link href="/blog" style={{ border: "1px solid #333", padding: "12px 20px", borderRadius: "10px" }}>
            Explore System
          </Link>
        </div>
      </section>

      {/* SYSTEM EXPLANATION */}
      <section style={{ marginTop: "80px" }}>
        <h2>What is this system?</h2>

        <p style={{ color: "#94a3b8", marginTop: "10px" }}>
          This is not motivation content. This is a structured behavioral system that builds identity through repetition.
        </p>
      </section>

      {/* CORE SYSTEMS */}
      <section style={{ marginTop: "80px" }}>
        <h2>Core Systems</h2>

        <ul style={{ color: "#94a3b8", lineHeight: "2" }}>
          <li>Discipline → consistency engine</li>
          <li>Fitness → physical performance system</li>
          <li>Yoga → awareness system</li>
          <li>Mental Clarity → focus system</li>
        </ul>
      </section>

      {/* ENTRY CTA */}
      <section style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Enter the System</h2>

        <p style={{ color: "#94a3b8" }}>
          Start from structure → build consistency → build identity
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link href="/start-here" style={{ background: "#8b5cf6", padding: "12px 20px", borderRadius: "10px", color: "white" }}>
            Begin Now
          </Link>
        </div>
      </section>

    </main>
  );
}