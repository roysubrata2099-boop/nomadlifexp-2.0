import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "NomadLifeXP",
  description: "Evolve in Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased min-h-screen selection:bg-neutral-800 selection:text-white`}
        style={{
          backgroundColor: "var(--bg-deep-blue)",
          color: "var(--text-main)",
        }}
      >
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}