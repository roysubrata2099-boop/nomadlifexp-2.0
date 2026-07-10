// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";
// @ts-ignore
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
            <body className="antialiased bg-black text-white">
                {children}

                {/* Microsoft Clarity Analytics Tracking Infrastructure */}
                <Script id="microsoft-clarity-init" strategy="afterInteractive">
                    {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x4hbg8q5cg");
          `}
                </Script>

                {/* Google Tag Manager / Global Site Tag (gtag.js) Core Async Dependency */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-V0M0XN8BBE"
                    strategy="afterInteractive"
                />

                {/* Google Analytics 4 Execution Routing Architecture */}
                <Script id="google-analytics-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V0M0XN8BBE', {
              page_path: window.location.pathname,
            });
          `}
                </Script>
            </body>
        </html>
    );
}