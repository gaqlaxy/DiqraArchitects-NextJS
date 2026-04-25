import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import {
  getServiceAreaLinks,
  getServiceAreaLocation,
  isApprovedServiceArea,
  serviceAreaPages,
} from "@/app/data/serviceAreas";
import { notFound } from "next/navigation";
import { getServiceRouteData } from "../../serviceRouteData";

const baseUrl = "https://diqraarchitects.com";
export const dynamicParams = false;

const servicePhrases = {
  architects: "architectural services",
  "interior-design": "interior design",
  construction: "construction services",
  renovation: "renovation services",
  "exterior-design": "exterior design",
  consultation: "architectural consultation",
};

export function generateStaticParams() {
  return serviceAreaPages.map((page) => ({
    slug: page.service,
    location: page.location,
  }));
}

function buildLocalServiceData(serviceSlug, locationSlug) {
  if (!isApprovedServiceArea(serviceSlug, locationSlug)) {
    return null;
  }

  const resolved = getServiceRouteData(serviceSlug);
  const location = getServiceAreaLocation(locationSlug);

  if (!resolved || !location) {
    return null;
  }

  const service = resolved.data;
  const serviceTitle = service.title || "Architectural Services";
  const servicePhrase =
    servicePhrases[serviceSlug] || serviceTitle.toLowerCase();
  const localTitle = `Best ${serviceTitle} in ${location.label}`;
  const areaLine = location.nearbyAreas?.length
    ? ` We also serve nearby areas including ${location.nearbyAreas.join(", ")}.`
    : "";

  const localIntro = `${location.intro} Diqra Architects brings ${servicePhrase} expertise to ${location.label}, ${location.city}, with design, documentation, and execution guidance shaped around the site, budget, and approval requirements.${areaLine}`;

  const relatedServices = [
    {
      slug: serviceSlug,
      href: `/services/${serviceSlug}`,
      title: serviceTitle,
      hint: "Main service page",
    },
    ...getServiceAreaLinks(serviceSlug, locationSlug).slice(0, 5).map((area) => ({
      slug: area.slug,
      href: area.href,
      title: `${serviceTitle} in ${area.title}`,
      hint: area.hint,
    })),
  ];

  return {
    resolved,
    location,
    data: {
      ...service,
      title: localTitle,
      titleLine1: `Best ${serviceTitle}`,
      titleLine2: `in ${location.label}`,
      metaTitle: `${localTitle} | Diqra Architects`,
      metaDescription: `${serviceTitle} in ${location.label}, ${location.city} by Diqra Architects. Get site-aware ${servicePhrase}, approvals guidance, and project support for homes and commercial spaces.`,
      subtitle: `${serviceTitle} for ${location.label} projects, planned with local context, buildability, and Diqra's design discipline.`,
      overviewHeading: `${serviceTitle} for <em>${location.label}</em> Projects`,
      overview: `${localIntro}\n\n${service.overview || service.metaDescription || ""}`,
      overviewAside: `
        <strong>Service Area</strong>
        ${location.label} · ${location.city}
        <strong>Nearby Areas</strong>
        ${(location.nearbyAreas || []).join(" · ")}
      `,
      relatedServices,
      faqs: [
        {
          q: `Do you provide ${servicePhrase} in ${location.label}?`,
          a: `Yes. Diqra Architects works with clients in ${location.label} and nearby areas for ${servicePhrase}, from early consultation and planning to drawings, approvals guidance, and execution support.`,
        },
        {
          q: `Can you visit a site in ${location.label} before starting design?`,
          a: `Yes. Site context is important for every project. We review plot conditions, access, light, ventilation, existing structure, and local constraints before finalising the design direction.`,
        },
        {
          q: `Which nearby areas around ${location.label} do you serve?`,
          a: `We serve ${location.label} along with nearby areas such as ${(location.nearbyAreas || []).join(", ")} and other parts of ${location.city}.`,
        },
        ...(service.faqs || []).slice(0, 2),
      ],
    },
  };
}

export async function generateMetadata({ params }) {
  const { slug, location } = await params;
  const localPage = buildLocalServiceData(slug, location);

  if (!localPage) {
    return {
      title: "Service Area Not Found | Diqra Architects",
    };
  }

  const { data } = localPage;
  const canonical = `${baseUrl}/services/${slug}/${location}`;
  const image = data.hero || "/Hero1.jpeg";

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: canonical,
      siteName: "DIQRA Architects",
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDescription,
      images: [image],
    },
  };
}

export default async function LocalServiceAreaPage({ params }) {
  const { slug, location } = await params;
  const localPage = buildLocalServiceData(slug, location);

  if (!localPage) {
    notFound();
  }

  return (
    <ServiceDetailPage
      customData={localPage.data}
      service={localPage.resolved.sourceSlug}
      slug={`${slug}/${location}`}
      locationData={localPage.location}
      routeServiceSlug={slug}
    />
  );
}
