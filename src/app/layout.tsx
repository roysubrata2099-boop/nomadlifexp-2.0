import type { Metadata, Viewport } from "next";
import Script from "next/script";
// @ts-ignore
import "./globals.css";

export const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://nomadlifexp.com"),
    title: {
        default: "NomadLifeXP // Human Optimization Platform",
        template: "%s | NomadLifeXP",
    },
    description:
        "NomadLifeXP is a high-performance framework engineered for somatic mechanics, advanced focus systems, deep discipline architectures, and cognitive design.",
    keywords: [
        "Somatic Mechanics",
        "Discipline Systems",
        "Mindset",
        "Yoga",
        "Cognitive Architecture",
        "Bio-Performance",
    ],
    authors: [{ name: "NomadLifeXP Team" }],
    creator: "NomadLifeXP",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://nomadlifexp.com",
        siteName: "NomadLifeXP",
        title: "NomadLifeXP // Human Optimization Platform",
        description:
            "NomadLifeXP is a high-performance framework engineered for somatic mechanics, advanced focus systems, deep discipline architectures, and cognitive design.",
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
        description:
            "NomadLifeXP is a high-performance framework engineered for somatic mechanics, advanced focus systems, deep discipline architectures, and cognitive design.",
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
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://nomadlifexp.com/#organization",
                name: "NomadLifeXP",
                url: "https://nomadlifexp.com",
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://nomadlifexp.com/#logo",
                    url: "https://nomadlifexp.com/images/logo.png",
                    caption: "NomadLifeXP",
                },
                image: {
                    "@id": "https://nomadlifexp.com/#logo",
                },
            },
            {
                "@type": "WebSite",
                "@id": "https://nomadlifexp.com/#website",
                url: "https://nomadlifexp.com",
                name: "NomadLifeXP",
                publisher: {
                    "@id": "https://nomadlifexp.com/#organization",
                },
                potentialAction: {
                    "@type": "SearchAction",
                    target:
                        "https://nomadlifexp.com/blog?q={search_term_string}",
                    "query-input": "required name=search_term_string",
                },
            },
        ],
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

                <main className="flex-grow">
                    {children}
                </main>

                {/* Structured Data SEO Layer */}
                {serializedSchema && (
                    <script
                        id="structured-data-core-architecture"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: serializedSchema,
                        }}
                    />
                )}

                {/* Microsoft Clarity Analytics */}
                <Script
                    id="microsoft-clarity-init"
                    strategy="afterInteractive"
                >
                    {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){
                                (c[a].q=c[a].q||[]).push(arguments)
                            };
                            t=l.createElement(r);
                            t.async=1;
                            t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];
                            y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "x4hbg8q5cg");
                    `}
                </Script>


                {/* Google Analytics 4 Multi Property Tracking */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-V0M0XN8BBE"
                    strategy="afterInteractive"
                />

                <Script
                    id="google-analytics-init"
                    strategy="afterInteractive"
                >
                    {`
                        window.dataLayer = window.dataLayer || [];

                        function gtag(){
                            window.dataLayer.push(arguments);
                        }

                        gtag('js', new Date());

                        // Primary GA4 Property
                        gtag('config', 'G-V0M0XN8BBE', {
                            page_path: window.location.pathname,
                        });

                        // Secondary GA4 Property
                        gtag('config', 'G-B7KY4PQ8WN', {
                            page_path: window.location.pathname,
                        });
                    `}
                </Script>

            </body>
        </html>
    );
}
