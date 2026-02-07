import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/next";
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
    default: "DIQRA Architecture",
    template: "%s | DIQRA",
  },
  icons: {
    icon: "/diqrawhite.ico",
  },
  description:
    "DIQRA is a modern architecture studio creating intentional, functional and elegant designs.",
  keywords: [
    "architecture",
    "architects in Urapakkam",
    "builders in Urapakkam",
    "interior designers",
  ],
  metadataBase: new URL("https://diqraarchitects.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DIQRA Architecture Studio",
    description:
      "Modern, functional and intentional architecture based in Urapakkam.",
    url: "https://diqraarchitects.com",
    siteName: "DIQRA Studio",
    images: [
      "/Hero1.jpeg",
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIQRA Architecture Studio",
    description: "Modern, functional and intentional architecture based in Urapakkam.",
    images: ["/Hero1.jpeg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ArchitectureFirm",
    "name": "DIQRA Architecture",
    "url": "https://diqraarchitects.com",
    "logo": "https://diqraarchitects.com/diqrawhite.ico",
    "image": "https://diqraarchitects.com/Hero1.jpeg",
    "description": "DIQRA is a modern architecture studio creating intentional, functional and elegant designs.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Urapakkam",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "openingHours": "Mo-Sa 09:00-18:00",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9840000000", // Update with real number if available
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en" className={myFont.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <PreloaderWrapper />
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </SmoothScroll>
      </body>
    </html>
  );
}
