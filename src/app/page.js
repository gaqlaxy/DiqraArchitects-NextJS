import HomePage from "./Home/HomePage";
import { getAllProjects } from "@/sanity/lib/projects";

export const metadata = {
  title: "DIQRA | Intentional Architecture & Modern Studio in Chennai",
  description:
    "DIQRA Architects is a premier architecture firm in Chennai specializing in intentional, modern, and culturally refined designs for residential and commercial spaces.",
  keywords: [
    "best architects in Chennai",
    "top architects in Urapakkam",
    "modern residential design India",
    "luxury interior designers Chennai",
    "intentional architecture studio",
    "Diqra Architects Naveen Jafar Sathik",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com",
  },
  openGraph: {
    title: "DIQRA | Intentional Architecture & Modern Studio in Chennai",
    description:
      "DIQRA Architects crafts visionary spaces with cultural elegance and modern precision. Specialized in premium residential and commercial architecture.",
    url: "https://diqraarchitects.com",
    siteName: "DIQRA Architects",
    images: [
      {
        url: "/Hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "DIQRA Architecture Studio Home",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DIQRA Architects | Modern Chennai Architecture",
    description: "Designing the future with cultural roots and intentionality.",
    images: ["/Hero1.jpeg"],
  },
};

export default async function Home() {
  const projects = await getAllProjects();

  return <HomePage projects={projects} />;
}
