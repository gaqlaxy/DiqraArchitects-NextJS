import ServicesPage from "./ServicesPage";

export const metadata = {
  title: "Professional Architecture & Design Services | DIQRA",
  description:
    "Explore DIQRA's comprehensive architectural services, including exterior design, construction, and consultancy. We bring precision and cultural elegance to every project.",
  keywords: [
    "architectural services Chennai",
    "exterior design studio",
    "construction consultancy Tamil Nadu",
    "modern house planning",
    "Diqra services",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/services",
  },
  openGraph: {
    title: "Professional Architecture & Design Services | DIQRA",
    description:
      "From exterior design to technical consultancy, DIQRA offers expert architectural services shaped by culture and precision.",
    url: "https://diqraarchitects.com/services",
    siteName: "DIQRA Architects",
    images: [
      {
        url: "/Hero1.jpeg",
        width: 1200,
        height: 630,
        alt: "DIQRA Services Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Services by DIQRA",
    description: "Expert design and consultancy for modern living.",
    images: ["/Hero1.jpeg"],
  },
};

export default function ServicesP() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "DIQRA Architecture Services",
    "description": "Comprehensive architectural and design services in Chennai.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Exterior Design",
        "url": "https://diqraarchitects.com/services/exterior"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Design and Planning",
        "url": "https://diqraarchitects.com/services/architects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Consultation",
        "url": "https://diqraarchitects.com/services/consultancy"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Interior Design",
        "url": "https://diqraarchitects.com/services/interiors"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Renovation",
        "url": "https://diqraarchitects.com/services/renovation"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesPage />
    </>
  );
}
