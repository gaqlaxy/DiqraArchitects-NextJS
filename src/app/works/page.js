import Works from "./Works";

export const metadata = {
  title: "Architecture Portfolio | Selected Works & Projects",
  description:
    "Explore DIQRA's portfolio of curated architectural and interior design projects, showcasing our commitment to quality, innovation, and intentional design.",
  keywords: [
    "architecture portfolio",
    "interior design projects",
    "DIQRA works",
    "modern house designs India",
    "commercial architecture portfolio",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/works",
  },
  openGraph: {
    title: "Architecture Portfolio | Selected Works & Projects",
    description:
      "A collection of refined architectural and interior designs by DIQRA Architects. Explore our featured projects and visionary spaces.",
    url: "https://diqraarchitects.com/works",
    siteName: "DIQRA Architects",
    images: [
      {
        url: "/Hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "DIQRA Architecture Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecure Works - DIQRA",
    description: "Hand-picked projects showcasing excellence in modern design.",
    images: ["/Hero1.jpeg"],
  },
};

export default function WorksPage() {
  return (
    <>
      <Works />
    </>
  );
}
