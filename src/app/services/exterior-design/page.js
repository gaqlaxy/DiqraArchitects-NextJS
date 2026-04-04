import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { servicesData } from "@/app/data/servicesData";

const slug = "exterior-design";

export function generateMetadata() {
  const service = servicesData[slug];
  return {
    title: service?.metaTitle || "Exterior Design | Diqra Architects",
    description: service?.metaDescription || "Bold, refined exterior design in Chennai.",
    alternates: {
      canonical: `https://www.diqraarchitects.com/services/${slug}`,
    },
  };
}

export default function Page() {
  return <ServiceDetailPage service={slug} slug={slug} />;
}
