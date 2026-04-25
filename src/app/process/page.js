import ProcessPage from "./ProcessPage";

export const metadata = {
  title: "Our Architectural Process | From Concept to Construction",
  description:
    "Learn about DIQRA's structured architectural process: Discovery, Designing, and Deployment. We ensure clarity and precision at every stage of your project.",
  keywords: [
    "architectural workflow",
    "design process",
    "construction phases",
    "DIQRA methodology",
    "project management in architecture",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/process",
  },
  openGraph: {
    title: "Our Architectural Process | From Concept to Construction",
    description: "A structured approach to architecture: Discovery, Designing, and Deployment.",
    url: "https://diqraarchitects.com/process",
    siteName: "DIQRA Architects",
    images: [{ url: "/Hero1.jpeg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The DIQRA Process",
    description: "Transparent and precise architectural workflows.",
    images: ["/Hero1.jpeg"],
  },
};

export default function Process() {
  return (
    <>
      <ProcessPage />
    </>
  );
}
