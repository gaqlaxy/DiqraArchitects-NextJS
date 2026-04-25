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
      title:
        service.metaTitle ||
        `${service.title} | Best Architectural Services in Chennai | Diqra`,
      description: metaDescription,
      alternates: {
        canonical: `https://diqraarchitects.com/services/${slug}`,
      },
      openGraph: {
        title: service.metaTitle || service.title,
        description: metaDescription,
        url: `https://diqraarchitects.com/services/${slug}`,
        siteName: "DIQRA Architects",
        images: [{ url: service.hero, width: 1200, height: 630 }],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: service.title,
        description: metaDescription,
        images: [service.hero],
      },
    };
  }

  // 2. Fallback to categoriesData for SEO landing pages
  const category = categoriesData.find((cat) => cat.slug === slug);
  if (!category) {
    return { title: "Service Not Found | Diqra Architects" };
  }

  const metaDescription =
    category.description ||
    `Professional ${category.title.toLowerCase()} services in Chennai by Diqra Architects.`;
  return {
    title: `${category.title} | Best ${category.title.toLowerCase()} in Chennai | Diqra`,
    description: metaDescription,
    alternates: {
      canonical: `https://diqraarchitects.com/services/${slug}`,
    },
    openGraph: {
      title: category.title,
      description: metaDescription,
      url: `https://diqraarchitects.com/services/${slug}`,
      siteName: "DIQRA Architects",
      images: [{ url: category.image || "/Hero1.jpeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: category.title,
      description: metaDescription,
      images: [category.image || "/Hero1.jpeg"],
    },
  };
}

/**
 * Main Page Component
 */
export default async function CategoryPage({ params }) {
  const { slug } = await params;

  let pageData = null;
  let isRichService = false;

  // Priority 1: High-fidelity Service Data
  if (servicesData[slug]) {
    pageData = servicesData[slug];
    isRichService = true;
  } else {
    // Priority 2: Structured Category Data (legacy fallback)
    const category = categoriesData.find((cat) => cat.slug === slug);
    if (!category || !legacySlugs.includes(slug)) {
      notFound();
    }
    pageData = {
      title: category.title,
      subtitle: category.tagline,
      hero:
        category.image ||
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      description: category.description,
      features: category.features || [],
      process: (category.process || []).map((p) => ({
        step: p.step,
        title: p.name,
        desc: p.detail,
      })),
      stats: category.stats || [],
    };
  }

  return isRichService ? (
    <ServiceDetailPage service={slug} slug={slug} />
  ) : (
    <ServiceDetailPage customData={pageData} service={slug} slug={slug} />
  );
}
