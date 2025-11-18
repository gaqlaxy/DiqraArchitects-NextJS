

import projectsData from "@/app/data/projects-data.json";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projectsData.projects.find((p) => p.slug === slug);

  if (!project)
    return { title: "Project Not Found – DIQRA" };

  return {
    title: `${project.title} – DIQRA`,
    description: project.description,
    openGraph: {
      images: [project.images[0]],
    },
  };
}


export default async function Page({ params }) {
  const { slug } = await params;   // <-- IMPORTANT
  return <ProjectDetailClient slug={slug} />;
}
