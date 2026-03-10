import fs from "fs";
import path from "path";
import { categories } from "@/app/libs/categories";
import { notFound } from "next/navigation";
import ServiceClient from "@/app/components/ServiceClient";

const FALLBACK_IMAGE = "/images/services/civil-contractors.jpg";
const PUBLIC_DIR = path.join(process.cwd(), "public");
const SERVICE_IMAGES_DIR = path.join(PUBLIC_DIR, "images", "services");
const categoriesBySlug = new Map(
  categories.map((category) => [category.slug, category])
);
const knownServiceImages = fs.existsSync(SERVICE_IMAGES_DIR)
  ? new Set(
      fs
        .readdirSync(SERVICE_IMAGES_DIR, { withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => `/images/services/${entry.name}`)
    )
  : new Set();

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

function resolveImage(src) {
  if (!src) return FALLBACK_IMAGE;
  if (/^https?:\/\//i.test(src)) return src;

  const clean = src.startsWith("/") ? src : `/${src}`;
  return knownServiceImages.has(clean) ? clean : FALLBACK_IMAGE;
}

function resolveServiceData(data) {
  return {
    ...data,
    image: resolveImage(data?.image),
    thumbnail: resolveImage(data?.thumbnail),
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = categoriesBySlug.get(slug);

  if (!data) {
    notFound();
  }

  const resolved = resolveServiceData(data);
  const city = "Chennai";
  const completed = data.stats?.[0]?.value ?? "many";

  return {
    title: `Top ${data.title} in ${city} | Premium Services`,
    description: `Looking for ${data.title}? Diqra Architects delivers ${data.tagline} with ${completed} completed projects. Rated #1 in ${city}.`,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: data.title,
      description: data.description,
      images: [resolved.image],
      url: `https://diqraarchitects.com/services/${slug}`,
      siteName: "DIQRA Architects",
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [resolved.image],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = categoriesBySlug.get(slug);

  if (!data) {
    notFound();
  }

  const resolvedData = resolveServiceData(data);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: resolvedData.title,
    provider: {
      "@type": "GeneralContractor",
      name: "Diqra Architects",
      image: "https://diqraarchitects.com/logo.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chengalpattu",
        addressRegion: "TN",
        addressCountry: "IN",
      },
    },
    description: resolvedData.description,
    areaServed: ["Chennai", "Chengalpattu", "Kanchipuram"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: (resolvedData.features ?? []).map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
        },
      })),
    },
  };

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceClient data={resolvedData} />
    </main>
  );
}
