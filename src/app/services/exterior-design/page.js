// import ServiceDetailPage from "@/app/components/ServiceDetailPage";

// export default function Page() {
//   return <ServiceDetailPage service="exterior" />;
// }

import ServiceDetailPage from "@/app/components/ServiceDetailPage";

export function generateMetadata() {
  return {
    title: "Exterior Design | DIQRA Studio",
    description:
      "Transform your property with bold, refined exterior architecture crafted by DIQRA Studio.",
    openGraph: {
      title: "Exterior Design | DIQRA Studio",
      description:
        "Bold, refined exteriors crafted with visual harmony and architectural precision.",
      images: [
        "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80",
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Exterior Design | DIQRA Studio",
      description:
        "Architecture-led exterior design that elevates every project.",
    },
  };
}

export default function Page() {
  return <ServiceDetailPage service="exterior" />;
}
