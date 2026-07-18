import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Link from "next/link";
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
    description: "NomadLifeXP is a high-performance framework engineered for somatic mechanics, advanced focus systems, deep discipline architectures, and cognitive design.",
    keywords: ["Somatic Mechanics", "Discipline Systems", "Mindset", "Yoga", "Cognitive Architecture", "Bio-Performance"],
    authors: [{ name: "NomadLifeXP Team" }],
    creator: "NomadLifeXP",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://nomadlifexp.com",
        siteName: "NomadLifeXP",
        title: "NomadLifeXP // Human Optimization Platform",
        description: "NomadLifeXP is a high-performance framework engineered for somatic mechanics, advanced focus systems, deep discipline architectures, and cognitive design.",
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
        description: "NomadLifeXP is a high-performance framework engineered for somatic mechanics, advanced focus systems, deep discipline architectures, and cognitive design.",
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
    // 🛡️ RE-ENGINEERED 10/10 SCHEMA METADATA GRAPH ENTITY MATRIX
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://nomadlifexp.com/#organization",
                "name": "NomadLifeXP",
                "url": "https://nomadlifexp.com",
                "logo": {
                    "@type": "ImageObject",
                    "@id": "https://nomadlifexp.com/#logo",
                    "url": "https://nomadlifexp.com/images/logo.png",
                    "caption": "NomadLifeXP"
                },
                "image": {
                    "@id": "https://nomadlifexp.com/#logo"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://nomadlifexp.com/#website",
                "url": "https://nomadlifexp.com",
                "name": "NomadLifeXP",
                "publisher": {
                    "@id": "https://nomadlifexp.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://nomadlifexp.com/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                }
            }
        ]
    };

    let serializedSchema = "";
    try {
        serializedSchema = JSON.stringify(jsonLdSchema);
    } catch (e) {
        console.error("Schema serialization bypass triggered:", e);
    }

    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased bg-black text-white flex flex-col min-h-screen">

                {/* 🛡️ SYSTEM UTILITY OVERLAY HEADER */}
                {/* Dynamically pipes crawl juice to your 'Start Here' page site-wide without disturbing main content layouts */}
                <header className="w-full border-b border-neutral-900/60 bg-black/50 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
                    <div className="max-w-5xl mx-auto flex justify-between items-center font-mono text-xs tracking-widest">
                        <Link href="/" className="font-black text-white hover:text-cyan-400 transition-colors duration-200">
                            NOMADLIFEXP // CORE
                        </Link>
                        <nav aria-label="Global Access Point">
                            <Link
                                href="/start-here"
                                className="border border-cyan-500/30 bg-cyan-950/10 hover:bg-cyan-400 hover:text-black px-3 py-1.5 transition-all duration-300 uppercase font-bold"
                            >
                                [ START HERE ]
                            </Link>
                        </nav>
                    </div>
                </header>

                {/* Main page template slot */}
                <div className="flex-grow">
                    {children}
                </div>

                {/* 🛡️ INJECTED 10/10 AI VISIBILITY & GEO UNDERPINNINGS */}
                {serializedSchema && (
                    <script
                        id="structured-data-core-architecture"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: serializedSchema }}
                    />
                )}

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
                    {...({} as any)}
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