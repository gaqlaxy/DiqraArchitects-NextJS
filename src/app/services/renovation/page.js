import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { servicesData } from "@/app/data/servicesData";

const slug = "renovation";

export function generateMetadata() {
  const service = servicesData[slug];
  return {
    title: service?.metaTitle || "Renovation | Diqra Architects",
    description: service?.metaDescription || "Modern home and building renovation in Chennai.",
    alternates: {
      canonical: `https://www.diqraarchitects.com/services/${slug}`,
    },
  };
}

export default function Page() {
  return <ServiceDetailPage service={slug} slug={slug} />;
}
