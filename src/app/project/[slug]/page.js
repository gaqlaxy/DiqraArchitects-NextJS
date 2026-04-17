import projectsData from "@/app/data/projects-data.json";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

const projectsBySlug = new Map(
  projectsData.projects.map((project) => [project.slug, project])
);

export const dynamicParams = false;

export function generateStaticParams() {
  return [...projectsBySlug.keys()].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsBySlug.get(slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title} - DIQRA Portfolio`,
    description: project.description,
    alternates: {
      canonical: `https://diqraarchitects.com/project/${slug}`,
    },
    openGraph: {
      title: `${project.title} | DIQRA Architecture`,
      description: project.description,
      url: `https://diqraarchitects.com/project/${slug}`,
      siteName: "DIQRA Architects",
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 675,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.images[0]],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = projectsBySlug.get(slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.images[0],
    "author": {
      "@type": "Organization",
      "name": "DIQRA Architects"
    },
    "locationCreated": {
      "@type": "Place",
      "name": project.location
    },
    "datePublished": project.year
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetailClient slug={slug} />
    </>
  );
}
