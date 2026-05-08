import fallbackProjectsData from "@/app/data/projects-data.json";
import { hasSanityConfig } from "../env";
import { client } from "./client";
import {
  PROJECT_BY_SLUG_QUERY,
  PROJECT_SLUGS_QUERY,
  PROJECTS_QUERY,
} from "../queries/projects";

const fallbackProjects = fallbackProjectsData.projects || [];

function normalizeImage(image) {
  if (!image) return null;
  if (typeof image === "string") return image;
  return image.url || null;
}

export function normalizeProject(project) {
  if (!project) return null;

  const images = Array.isArray(project.images)
    ? project.images.map(normalizeImage).filter(Boolean)
    : [];
  const thumbnail = normalizeImage(project.thumbnail) || images[0] || null;

  return {
    ...project,
    id: project.id || project.slug || project._id,
    slug: project.slug,
    title: project.title,
    year: project.year || "",
    category: project.category || "Project",
    projectType: project.projectType || "architecture",
    location: project.location || "",
    thumbnail,
    featured: Boolean(project.featured),
    description: project.description || "",
    details: project.details || {},
    images: images.length > 0 ? images : thumbnail ? [thumbnail] : [],
    tags: Array.isArray(project.tags) ? project.tags : [],
  };
}

function normalizeProjects(projects) {
  return (projects || []).map(normalizeProject).filter((project) => {
    return project?.slug && project?.title && project?.images?.length > 0;
  });
}

function getFallbackProjects() {
  return normalizeProjects(fallbackProjects);
}

async function fetchProjectsFromSanity(query, params = {}) {
  if (!hasSanityConfig) return null;

  try {
    return await client.fetch(query, params, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.warn("Sanity project fetch failed; using local fallback.", error);
    return null;
  }
}

export async function getAllProjects() {
  const sanityProjects = await fetchProjectsFromSanity(PROJECTS_QUERY);
  const projects = normalizeProjects(sanityProjects);
  return projects.length > 0 ? projects : getFallbackProjects();
}

export async function getProjectSlugs() {
  const sanitySlugs = await fetchProjectsFromSanity(PROJECT_SLUGS_QUERY);
  const slugs = (sanitySlugs || [])
    .map((project) => project.slug)
    .filter(Boolean);

  if (slugs.length > 0) return slugs;

  return getFallbackProjects().map((project) => project.slug);
}

export async function getProjectBySlug(slug) {
  const sanityProject = await fetchProjectsFromSanity(PROJECT_BY_SLUG_QUERY, {
    slug,
  });
  const project = normalizeProject(sanityProject);

  if (project?.slug) return project;

  return getFallbackProjects().find((item) => item.slug === slug) || null;
}
