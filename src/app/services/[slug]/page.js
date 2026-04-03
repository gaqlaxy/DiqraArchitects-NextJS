import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import categoriesData from "@/app/data/categories.json";
import { notFound } from "next/navigation";

// The 15 curated high-traffic categories
const selectedSlugs = [
  "construction-companies",
  "architects",
  "interior-designers",
  "residential-builders",
  "commercial-builders",
  "building-contractors",
  "civil-contractors",
  "architects-for-residential",
  "architects-for-office",
  "interior-designers-for-office",
  "architects-for-apartment",
  "industrial-construction-companies",
  "architects-for-landscape",
  "builders-and-developers",
  "architects-for-building",
];

export async function generateStaticParams() {
  return selectedSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const category = categoriesData.find((cat) => cat.slug === slug);
  
  if (!category) {
    return {
      title: "Service Not Found | DIQRA Architects",
    };
  }

  const metaDescription = category.description || `Professional ${category.title.toLowerCase()} services in Chennai by DIQRA Architects. Expert design and execution for your projects.`;
  const canonicalUrl = `https://diqraarchitects.com/services/${slug}`;

  return {
    title: `${category.title} | Best ${category.title.toLowerCase()} in Chennai | DIQRA`,
    description: metaDescription,
    keywords: [
      category.title.toLowerCase(),
      "architects in Chennai",
      "architecture services",
      "design services",
      `${category.title.toLowerCase()} services`,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.title} | DIQRA Architects`,
      description: metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: category.image || "https://diqraarchitects.com/Hero1.jpeg",
          width: 1200,
          height: 630,
          alt: `${category.title} - DIQRA Architects`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.title} | DIQRA Architects`,
      description: metaDescription,
      images: [category.image || "https://diqraarchitects.com/Hero1.jpeg"],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const category = categoriesData.find((cat) => cat.slug === slug);

  if (!category || !selectedSlugs.includes(slug)) {
    notFound();
  }

  // Map JSON data to ServiceDetailPage expected format
  const customData = {
    title: category.title,
    subtitle: category.tagline,
    hero: category.image || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    description: category.description,
    features: category.features || [],
    process: (category.process || []).map((p) => ({
      step: p.step,
      title: p.name,
      desc: p.detail,
    })),
    stats: category.stats || [],
  };

  // Generate Service and LocalBusiness structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://diqraarchitects.com/services/${slug}#service`,
    name: category.title,
    description: category.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://diqraarchitects.com/#organization",
      name: "DIQRA Architects",
      url: "https://diqraarchitects.com",
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    image: category.image || "https://diqraarchitects.com/Hero1.jpeg",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://diqraarchitects.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://diqraarchitects.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: `https://diqraarchitects.com/services/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailPage customData={customData} service={slug} />
    </>
  );
}
