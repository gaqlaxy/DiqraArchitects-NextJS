import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { servicesData } from "@/app/data/servicesData";

const slug = "design-planning";

export function generateMetadata() {
  const service = servicesData[slug];
  return {
    title: service?.metaTitle || "Design & Planning | Diqra Architects",
    description: service?.metaDescription || "Full architectural design and planning in Chennai.",
    alternates: {
      canonical: `https://www.diqraarchitects.com/services/${slug}`,
    },
  };
}

export default function Page() {
  return <ServiceDetailPage service={slug} slug={slug} />;
}
