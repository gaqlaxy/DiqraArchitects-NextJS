import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/next";
import PreloaderWrapper from "./components/PreloaderWrapper";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import localFont from "next/font/local";

// const myFont = localFont({
//   src: "./Geom-Regular.ttf",
// });

const myFont = localFont({
  src: "./SpaceGrotesk.ttf",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
  openGraph: {
    title: "DIQRA Architecture Studio",
    description:
      "Modern, functional and intentional architecture based in Urapakkam.",
    url: "https://diqraarchitects.com",
    siteName: "DIQRA Studio",
    images: [
      "/Hero1.jpeg", // add later
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
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
