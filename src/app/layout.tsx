import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NomadLifeXP | Self Transformation System",
  description:
    "A structured system for discipline, fitness, yoga, and mental clarity. Replace motivation with systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {/* SYSTEM WRAPPER */}
        <div className="container">
          {children}
        </div>

        <footer
          style={{
            padding: "80px 0",
            textAlign: "center",
            color: "#94a3b8",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "80px",
          }}
        >
          <p>NomadLifeXP System Platform</p>
          <p>Discipline • Fitness • Yoga • Mental Clarity</p>
        </footer>
      </body>
    </html>
  );
}