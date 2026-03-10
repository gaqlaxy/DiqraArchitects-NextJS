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
    title: `${project.title} - DIQRA`,
    description: project.description,
    openGraph: {
      images: [project.images[0]],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  if (!projectsBySlug.has(slug)) {
    notFound();
  }

  return <ProjectDetailClient slug={slug} />;
}
