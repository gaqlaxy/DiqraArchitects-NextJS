import InfiniteGallery from "./InfiniteGallery";

export const metadata = {
  title: "Architecture Gallery | Visualizing Spaces & Details",
  description:
    "A curated visual journey through DIQRA's architectural projects. Explore textures, light, and form in our infinite scroll gallery.",
  keywords: [
    "architecture gallery",
    "modern design photos",
    "architectural photography",
    "DIQRA project gallery",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/gallery",
  },
  openGraph: {
    title: "Architecture Gallery | Visualizing Spaces & Details",
    description: "Explore textures, light, and form in DIQRA's architectural project gallery.",
    url: "https://diqraarchitects.com/gallery",
    siteName: "DIQRA Architects",
    images: [{ url: "/Hero1.jpeg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architecture Gallery - DIQRA",
    description: "Visual journey through our modern designs.",
    images: ["/Hero1.jpeg"],
  },
};

export default function gallery() {
  return (
    <>
      <InfiniteGallery />
    </>
  );
}
