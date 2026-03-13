import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import PreloaderWrapper from "./components/PreloaderWrapper";
import localFont from "next/font/local";

// const myFont = localFont({
//   src: "./Geom-Regular.ttf",
// });

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
    "A modern architecture studio crafting intentional, functional, and elegant spaces. Based in Urapakkam, Tamil Nadu.",
  keywords: [
    "architecture in Urapakkam",
    "architects in Urapakkam",
    "builders in Urapakkam",
    "interior designers in Urapakkam",
    "modern architecture Chennai",
    "sustainable design Tamil Nadu",
    "luxury residential architects",
  ],
  metadataBase: new URL("https://diqraarchitects.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
    },
  },
  openGraph: {
    title: "DIQRA | Intentional Architecture & Modern Design",
    description:
      "Modern, functional and intentional architecture crafting elegant spaces in Urapakkam.",
    url: "https://diqraarchitects.com",
    siteName: "DIQRA Architects",
    images: [
      {
        url: "/Hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "DIQRA Architecture Studio - Modern Architectural Design",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIQRA Architects",
    description: "Modern, functional and intentional architecture crafting elegant spaces in Urapakkam.",
    images: ["/Hero1.jpeg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    "@id": "https://diqraarchitects.com/#organization",
    "name": "DIQRA Architects",
    "url": "https://diqraarchitects.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://diqraarchitects.com/diqrawhite.ico"
    },
    "image": "https://diqraarchitects.com/Hero1.jpeg",
    "description": "DIQRA is a modern architecture studio creating intentional, functional and elegant designs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Urapakkam", // Fill with full address if available
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "603210", // Example code for Urapakkam
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.8687", // Example coordinates for Urapakkam
      "longitude": "80.0717"
    },
    "areaServed": ["Chennai", "Urapakkam", "Kanchipuram", "Tamil Nadu"],
    "openingHours": "Mo-Sa 09:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9840000000",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil"]
    },
    "sameAs": [
      "https://www.instagram.com/diqra_architects" // Add actual social links
    ]
  };

  return (
    <html lang="en" className={myFont.className}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
