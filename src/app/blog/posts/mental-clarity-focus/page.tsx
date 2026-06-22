export default function Page() {
    return (
        <main
            style={{
                maxWidth: "900px",
                margin: "0 auto",
                padding: "40px 20px",
                background: "#0f172a",
                color: "#e2e8f0",
                lineHeight: "1.8",
                fontFamily: "Arial",
                minHeight: "100vh",
            }}
        >
            <h1 style={{ color: "#38bdf8", textAlign: "center" }}>
                Mental Clarity: How to Stop Overthinking and Improve Focus
            </h1>

            <p style={{ textAlign: "center", color: "#94a3b8" }}>
                A practical guide to reduce mental noise and regain control of attention.
            </p>

            <p>
                <strong>Most people do not struggle with intelligence or discipline.</strong>
            </p>

            <div style={boxStyle}>
                They struggle with mental noise. A mind that never stops talking,
                replaying conversations, and creating problems that do not exist yet.
            </div>

            <p>
                The truth is simple: you do not overcome overthinking by thinking better.
                You overcome it by stepping outside the cycle.
            </p>

            <h2 style={h2}>1. Observe thoughts instead of fighting them</h2>

            <p>
                Most people try to force thoughts away. Instead, observe them without judgment.
            </p>

            <div style={quoteStyle}>
                Most thoughts are repeated patterns, not new ideas.
            </div>

            <h2 style={h2}>2. Use breathing to interrupt the loop</h2>

            <div style={boxStyle}>
                Inhale slowly through nose <br />
                Hold 2–3 seconds <br />
                Exhale longer than inhale <br />
                Repeat 2–5 minutes
            </div>

            <p>Focus only on breathing. Nothing else.</p>

            <h2 style={h2}>3. Break cycle with movement</h2>

            <p>Walking, stretching, or push-ups reset the system quickly.</p>

            <p>
                <strong>Movement interrupts overthinking patterns.</strong>
            </p>

            <h2 style={h2}>4. Yoga restores attention</h2>

            <div style={boxStyle}>
                Forward bends calm nervous system <br />
                Slow breathing improves awareness <br />
                Holding poses builds discipline
            </div>

            <h2 style={h2}>5. You don’t remove thoughts</h2>

            <p>
                Thoughts will come. The goal is not to obey them.
            </p>

            <div style={quoteStyle}>
                You are not your thoughts. You are the awareness observing them.
            </div>

            <h2 style={h2}>Final Insight</h2>

            <div style={boxStyle}>
                Observation <br />
                Breath <br />
                Movement <br />
                Awareness
            </div>

            <p>
                Mental clarity is not found — it is trained.
            </p>
        </main>
    );
}

const boxStyle = {
    background: "#111827",
    padding: "18px",
    borderLeft: "4px solid #38bdf8",
    margin: "20px 0",
    borderRadius: "8px",
};

const quoteStyle = {
    borderLeft: "3px solid #a5b4fc",
    paddingLeft: "12px",
    fontStyle: "italic",
    color: "#a5b4fc",
    margin: "18px 0",
};

const h2 = {
    color: "#fbbf24",
    marginTop: "40px",
};