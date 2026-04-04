import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { servicesData } from "@/app/data/servicesData";

const slug = "interior-design";

export function generateMetadata() {
  const service = servicesData[slug];
  return {
    title: service?.metaTitle || "Interior Design | Diqra Architects",
    description: service?.metaDescription || "Bespoke interior design services in Chennai.",
    alternates: {
      canonical: `https://www.diqraarchitects.com/services/${slug}`,
    },
  };
}

export default function Page() {
  return <ServiceDetailPage service={slug} slug={slug} />;
}
