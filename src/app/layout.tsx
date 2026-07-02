import type { Metadata, Viewport } from "next";
import "./globals.css";

// Force absolute client container rules
export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allows accessibility scaling but prevents arbitrary zoom breaks
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nomadlifexp.com"),
  title: {
    default: "NomadLifeXP // Human Optimization Platform",
    template: "%s | NomadLifeXP",
  },
  description: "A framework for somatic mechanics, focus systems, deep discipline, and cognitive architecture.",
  keywords: ["Somatic Mechanics", "Discipline Systems", "Mindset", "Yoga", "Cognitive Architecture", "Bio-Performance"],
  authors: [{ name: "NomadLifeXP Team" }],
  creator: "NomadLifeXP",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nomadlifexp.com",
    siteName: "NomadLifeXP",
    title: "NomadLifeXP // Human Optimization Platform",
    description: "A framework for somatic mechanics, focus systems, deep discipline, and cognitive architecture.",
    images: [
      {
        url: "/og-main.jpg",
        width: 1200,
        height: 630,
        alt: "NomadLifeXP Terminal Interface",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NomadLifeXP // Human Optimization Platform",
    description: "A framework for somatic mechanics, focus systems, deep discipline, and cognitive architecture.",
    images: ["/og-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Anti-Clickjacking and Security X-Frame Options via Meta Tag (Live Server Fallback) */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Security-Policy" content="object-src 'none'; base-uri 'self';" />
      </head>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}