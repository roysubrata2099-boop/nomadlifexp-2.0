export default function Footer() {
    return (
        <footer
            style={{
                padding: "40px 20px",
                textAlign: "center",
                borderTop: "1px solid #1f2937",
                marginTop: "60px",
                color: "#e2e8f0",
            }}
        >
            <p style={{ marginBottom: "15px", fontWeight: 500 }}>
                Follow NomadLifeXP
            </p>

            <div
                style={{
                    display: "flex",
                    gap: 20,
                    justifyContent: "center",
                    marginBottom: "20px",
                }}
            >
                <a
                    href="https://www.youtube.com/@nomadlifexp"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#facc15", textDecoration: "none" }}
                >
                    YouTube
                </a>

                <a
                    href="https://www.instagram.com/nomadlifexp"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#facc15", textDecoration: "none" }}
                >
                    Instagram
                </a>
            </div>

            <p style={{ fontSize: "12px", opacity: 0.6 }}>
                © 2026 NomadLifeXP
            </p>
        </footer>
    );
}