import { servicesData } from "@/app/data/servicesData";

const SERVICE_ROUTE_OVERRIDES = {
  consultation: {
    sourceSlug: "consultancy",
    overrides: {
      title: "Consultation",
      titleLine1: "Expert",
      titleLine2: "Consultation",
      metaTitle: "Architectural Consultation in Chennai | Diqra Architects",
    },
  },
  "design-planning": {
    sourceSlug: "architects",
    overrides: {
      title: "Design & Planning",
      titleLine1: "Design &",
      titleLine2: "Planning",
      metaTitle: "Design & Planning Services in Chennai | Diqra Architects",
    },
  },
  "exterior-design": {
    sourceSlug: "exterior",
    overrides: {
      title: "Exterior Design",
      titleLine1: "Exterior",
      titleLine2: "Design",
      metaTitle: "Exterior Design Services in Chennai | Diqra Architects",
    },
  },
  "interior-design": {
    sourceSlug: "interiors",
    overrides: {
      title: "Interior Design",
      titleLine1: "Interior",
      titleLine2: "Design",
      metaTitle: "Interior Design Services in Chennai | Diqra Architects",
    },
  },
  renovation: {
    sourceSlug: "renovation",
  },
};

export const dedicatedServiceRouteSlugs = Object.keys(SERVICE_ROUTE_OVERRIDES);

function getCanonicalUrl(routeSlug) {
  return `https://diqraarchitects.com/services/${routeSlug}`;
}

export function getServiceRouteData(routeSlug) {
  const routeConfig = SERVICE_ROUTE_OVERRIDES[routeSlug] || {
    sourceSlug: routeSlug,
  };
  const baseService = servicesData[routeConfig.sourceSlug];

  if (!baseService) {
    return null;
  }

  return {
    routeSlug,
    sourceSlug: routeConfig.sourceSlug,
    data: {
      ...baseService,
      ...(routeConfig.overrides || {}),
    },
  };
}

export function buildServiceMetadata(routeSlug) {
  const resolved = getServiceRouteData(routeSlug);

  if (!resolved) {
    return {
      title: "Service Not Found | Diqra Architects",
    };
  }

  const { data } = resolved;
  const canonical = getCanonicalUrl(routeSlug);
  const description = data.metaDescription || data.subtitle;
  const title = data.metaTitle || `${data.title} | Diqra Architects`;
  const image = data.hero || "/Hero1.jpeg";

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "DIQRA Architects",
      images: [{ url: image, width: 1200, height: 630 }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description,
      images: [image],
    },
  };
}
