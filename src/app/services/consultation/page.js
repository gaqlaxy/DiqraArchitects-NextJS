import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { servicesData } from "@/app/data/servicesData";

const slug = "consultation";

export function generateMetadata() {
  const service = servicesData[slug];
  return {
    title: service?.metaTitle || "Architectural Consultation | Diqra Architects",
    description: service?.metaDescription || "Expert architectural consultation in Chennai.",
    alternates: {
      canonical: `https://www.diqraarchitects.com/services/${slug}`,
    },
  };
}

export default function Page() {
  return <ServiceDetailPage service={slug} slug={slug} />;
}
