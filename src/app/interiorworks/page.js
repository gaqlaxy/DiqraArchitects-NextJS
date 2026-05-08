import InteriorWorks from "./InteriorWorks";
import { getAllProjects } from "@/sanity/lib/projects";

export const metadata = {
  title: "Interior Design Portfolio | Crafting Elegant Spaces",
  description:
    "Explore DIQRA's interior design projects. We create sanctuaries that breathe, evolve, and age with dignity, focusing on silence and material luxury.",
  keywords: [
    "interior design portfolio",
    "luxury interiors Chennai",
    "modern home interiors",
    "DIQRA interior works",
    "minimalist interior design",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/interiorworks",
  },
  openGraph: {
    title: "Interior Design Portfolio | Crafting Elegant Spaces",
    description: "Explore sanctuaries that breathe and evolve. DIQRA's signature interior works.",
    url: "https://diqraarchitects.com/interiorworks",
    siteName: "DIQRA Architects",
    images: [{ url: "/Hero1.jpeg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Works - DIQRA",
    description: "Elegant and functional interior design solutions.",
    images: ["/Hero1.jpeg"],
  },
};

export default async function Interior() {
  const projects = await getAllProjects();

  return (
    <>
      <InteriorWorks projects={projects} />
    </>
  );
}
