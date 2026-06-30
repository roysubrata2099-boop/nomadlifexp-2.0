import type { Metadata } from "next";
import Script from "next/script";
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

const GA_ID = "G-B7KY4PQ8WN";
const CLARITY_ID = "x4hbg8q5cg";

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
        {/* =========================
            GOOGLE ANALYTICS 4 (GA4)
        ========================== */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* =========================
            MICROSOFT CLARITY (BING)
        ========================== */}
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;
                t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>

        {/* APP WRAPPER */}
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}