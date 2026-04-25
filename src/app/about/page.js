import AboutPage from "./AboutPage";

export const metadata = {
  title: "About DIQRA | Architecture Studio Philosophy & Team",
  description:
    "Discover the vision of DIQRA Architecture Studio. Led by Naveen and Jafar Sathik, we focus on material honesty, cultural relevance, and intentional design in every project.",
  keywords: [
    "architectural philosophy",
    "DIQRA studio story",
    "Naveen architect",
    "Jafar Sathik architect",
    "modern design studio Chennai",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/about",
  },
  openGraph: {
    title: "About DIQRA | Architecture Studio Philosophy & Team",
    description:
      "Led by Naveen and Jafar Sathik, DIQRA focuses on material honesty and intentional design. Learn about our journey and vision.",
    url: "https://diqraarchitects.com/about",
    siteName: "DIQRA Architects",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070",
        width: 1200,
        height: 630,
        alt: "DIQRA Studio Space",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About DIQRA Architects",
    description: "The philosophy and minds behind intentional architecture.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"],
  },
};

export default function About() {
  return (
    <>
      <AboutPage />
    </>
  );
}
