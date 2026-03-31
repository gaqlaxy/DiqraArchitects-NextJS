import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import PreloaderWrapper from "./components/PreloaderWrapper";
import localFont from "next/font/local";
import Script from "next/script";

const myFont = localFont({
  src: "./SpaceGrotesk.ttf",
});

export const metadata = {
  title: {
    default: "DIQRA | Intentional Architecture & Modern Design",
    template: "%s | DIQRA",
  },
  icons: {
    icon: "/diqrawhite.ico",
  },
  description:
    "A visionary architectural firm dedicated to the art of Design, Innovation, Quality, and Resourcefulness in Architecture.",
  keywords: [
    "architecture in Urapakkam",
    "architects in Urapakkam",
    "builders in Urapakkam",
    "interior designers in Urapakkam",
    "modern architecture Chennai",
  ],
  metadataBase: new URL("https://diqraarchitects.com"),
  alternates: {
    canonical: "/",
  },

  // ✅ FIXED ROBOTS (IMPORTANT)
  robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: "large",
    maxVideoPreview: -1,
  },
},

  openGraph: {
    title: "DIQRA | Intentional Architecture & Modern Design",
    description:
      "Modern architecture studio crafting elegant and functional spaces.",
    url: "https://diqraarchitects.com",
    siteName: "DIQRA Architects",
    images: [
      {
        url: "/Hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "DIQRA Architecture Studio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "DIQRA Architects",
    description: "Modern architecture in Chennai",
    images: ["/Hero1.jpeg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    "@id": "https://diqraarchitects.com/#organization",
    name: "DIQRA Architects",
    url: "https://diqraarchitects.com",
    logo: "https://diqraarchitects.com/diqrawhite.ico",
    image: "https://diqraarchitects.com/Hero1.jpeg",
    description:
      "Modern architecture studio creating intentional, functional and elegant designs.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "603210",
      addressCountry: "IN",
    },
    areaServed: ["Chennai", "Urapakkam"],
  };

  return (
    <html lang="en" className={myFont.className}>
      <body>
        {/* ✅ Google Analytics (Correct Way) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJLJ5HRL5S"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJLJ5HRL5S');
          `}
        </Script>

        {/* ✅ JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <SmoothScroll>
          <PreloaderWrapper />
          <Navbar />
          <div id="main-content" role="main">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
