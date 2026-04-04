import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import categoriesData from "@/app/data/categories.json";
import { servicesData, allServiceSlugs } from "@/app/data/servicesData";
import { notFound } from "next/navigation";

// The legacy curated high-traffic categories from categories.json
const legacySlugs = [
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

/**
 * Static generation for all known service slugs
 */
export async function generateStaticParams() {
  // Combine unique slugs from both sources
  const combined = Array.from(new Set([...legacySlugs, ...allServiceSlugs]));
  return combined.map((slug) => ({
    slug: slug,
  }));
}

/**
 * Dynamic metadata based on the rich servicesData or legacy categories
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  // 1. Try rich servicesData first
  const service = servicesData[slug];
  if (service) {
    const metaDescription = service.metaDescription || service.subtitle;
    return {
      title: service.metaTitle || `${service.title} | Best Architectural Services in Chennai | Diqra`,
      description: metaDescription,
      alternates: {
        canonical: `https://www.diqraarchitects.com/services/${slug}`,
      },
      openGraph: {
        title: service.title,
        description: metaDescription,
        images: [{ url: service.hero }],
      }
    };
  }

  // 2. Fallback to categoriesData for SEO landing pages
  const category = categoriesData.find((cat) => cat.slug === slug);
  if (!category) {
    return { title: "Service Not Found | Diqra Architects" };
  }

  const metaDescription = category.description || `Professional ${category.title.toLowerCase()} services in Chennai by Diqra Architects.`;
  return {
    title: `${category.title} | Best ${category.title.toLowerCase()} in Chennai | Diqra`,
    description: metaDescription,
    alternates: {
      canonical: `https://www.diqraarchitects.com/services/${slug}`,
    },
  };
}

/**
 * Main Page Component
 */
export default async function CategoryPage({ params }) {
  const { slug } = await params;

  // Priority 1: High-fidelity Service Data
  if (servicesData[slug]) {
    // ServiceDetailPage now handles its own data lookup if we pass the slug
    return <ServiceDetailPage service={slug} slug={slug} />;
  }

  // Priority 2: Structured Category Data (legacy fallback)
  const category = categoriesData.find((cat) => cat.slug === slug);
  
  // Ensure the slug is either in our curated legacy list or our rich data list
  if (!category || !legacySlugs.includes(slug)) {
    notFound();
  }

  // Map legacy JSON format to ServiceDetailPage expected format
  const mappedData = {
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

  return <ServiceDetailPage customData={mappedData} service={slug} slug={slug} />;
}
