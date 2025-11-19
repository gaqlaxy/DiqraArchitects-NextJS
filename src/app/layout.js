import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppInit from "./components/AppInit";

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppInit>
          <Navbar />
          {children}
        </AppInit>
      </body>
    </html>
  );
}
