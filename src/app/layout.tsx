import type { Metadata, Viewport } from "next";
import Script from "next/script";

import "./globals.css";
import Footer from "@/components/Footer";

const SITE_URL = "https://www.nomadlifexp.com";
const SITE_NAME = "NomadLifeXP";

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_ID = `${SITE_URL}/#logo`;

export const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    verification: {
        other: {
            "p:domain_verify":
                "80172532b3cdb4c34c3c365d6b942e63",
        },
    },

    alternates: {
        canonical: "/",
    },

    title: {
        default: "NomadLifeXP // Human Optimization Platform",
        template: "%s | NomadLifeXP",
    },

    description:
        "NomadLifeXP is a personal transformation framework focused on discipline, fitness, yoga, mindset, habits, and intentional lifestyle design.",

    keywords: [
        "Discipline Systems",
        "Fitness Frameworks",
        "Yoga Practice",
        "Mindset Training",
        "Habit Formation",
        "Lifestyle Design",
        "Personal Transformation",
    ],

    authors: [
        {
            name: "NomadLifeXP Team",
        },
    ],

    creator: SITE_NAME,

    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: "NomadLifeXP // Human Optimization Platform",
        description:
            "A structured human optimization framework covering discipline, fitness, yoga, mindset, habits, and intentional living.",
        images: [
            {
                url: "/og-main.jpg",
                width: 1200,
                height: 630,
                alt: "NomadLifeXP Human Optimization Platform",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "NomadLifeXP // Human Optimization Platform",
        description:
            "A structured human optimization framework covering discipline, fitness, yoga, mindset, habits, and intentional living.",
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

/**
 * Site-wide structured data.
 *
 * Organization = NomadLifeXP's identity.
 * WebSite = NomadLifeXP's canonical website.
 *
 * The two entities are connected through stable @id values.
 */
const jsonLdSchema = {
    "@context": "https://schema.org",

    "@graph": [
        {
            "@type": "Organization",
            "@id": ORGANIZATION_ID,

            name: SITE_NAME,

            url: SITE_URL,

            description:
                "NomadLifeXP is a personal transformation framework focused on discipline, fitness, yoga, mindset, habits, and intentional lifestyle design.",

            logo: {
                "@type": "ImageObject",
                "@id": LOGO_ID,
                url: `${SITE_URL}/images/logo.png`,
                caption: SITE_NAME,
            },

            knowsAbout: [
                "Discipline",
                "Fitness",
                "Yoga",
                "Mindset",
                "Habit Formation",
                "Lifestyle Design",
                "Personal Development",
            ],

            sameAs: [
                "https://www.linkedin.com/company/nomadlifexp",
                "https://medium.com/@roy.subrata2099",
                "https://www.quora.com/profile/NomadLifeXP",
                "https://www.facebook.com/nomadlifexp",
                "https://github.com/roysubrata2099-boop/nomadlifexp",
                "https://in.pinterest.com/nomadlifexp",
                "https://www.instagram.com/nomadlifexp",
                "https://www.youtube.com/@nomadlifexp",
                "https://www.threads.com/@nomadlifexp",
                "https://nomadlifexp.blogspot.com",
            ],
        },

        {
            "@type": "WebSite",
            "@id": WEBSITE_ID,

            url: SITE_URL,

            name: SITE_NAME,

            description:
                "NomadLifeXP is a personal transformation framework focused on discipline, fitness, yoga, mindset, habits, and intentional lifestyle design.",

            inLanguage: "en-US",

            publisher: {
                "@id": ORGANIZATION_ID,
            },
        },
    ],
};

/**
 * Defensive JSON-LD serialization.
 *
 * Structured-data failure must never prevent the application
 * from rendering its actual content.
 */
let serializedSchema: string | null = null;

try {
    serializedSchema = JSON.stringify(jsonLdSchema);
} catch (error) {
    console.error(
        "NomadLifeXP structured data serialization failed:",
        error
    );
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="scroll-smooth"
        >
            <body className="antialiased bg-black text-white flex flex-col min-h-screen">

                {serializedSchema !== null && (
                    <script
                        id="nomadlifexp-core-structured-data"
                        type="application/ld+json"
                        suppressHydrationWarning
                        dangerouslySetInnerHTML={{
                            __html: serializedSchema,
                        }}
                    />
                )}

                <main className="flex-grow">
                    {children}
                </main>

                <Footer />

                {/* Microsoft Clarity */}
                <Script
                    id="microsoft-clarity-init"
                    strategy="lazyOnload"
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

                        if(y && y.parentNode){
                            y.parentNode.insertBefore(t,y);
                        }
                    })(window, document, "clarity", "script", "x4hbg8q5cg");
                    `}
                </Script>

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-V0M0XN8BBE"
                    strategy="lazyOnload"
                />

                <Script
                    id="google-analytics-init"
                    strategy="lazyOnload"
                >
                    {`
                    window.dataLayer = window.dataLayer || [];

                    function gtag(){
                        window.dataLayer.push(arguments);
                    }

                    gtag('js', new Date());

                    gtag(
                        'config',
                        'G-V0M0XN8BBE',
                        {
                            page_path: window.location.pathname
                        }
                    );

                    gtag(
                        'config',
                        'G-B7KY4PQ8WN',
                        {
                            page_path: window.location.pathname
                        }
                    );
                    `}
                </Script>

            </body>
        </html>
    );
}


