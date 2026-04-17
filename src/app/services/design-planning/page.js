import ServiceDetailPage from "@/app/components/ServiceDetailPage";
import { notFound } from "next/navigation";
import {
  buildServiceMetadata,
  getServiceRouteData,
} from "../serviceRouteData";

const slug = "design-planning";

export function generateMetadata() {
  return buildServiceMetadata(slug);
}

export default function Page() {
  const resolved = getServiceRouteData(slug);

  if (!resolved) {
    notFound();
  }

  return (
    <ServiceDetailPage
      customData={resolved.data}
      service={resolved.sourceSlug}
      slug={slug}
    />
  );
}
