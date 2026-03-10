import projectsData from "@/app/data/projects-data.json";

const baseUrl = "https://diqraarchitects.com";
const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/gallery",
  "/interiorworks",
  "/process",
  "/services",
  "/services/consultation",
  "/services/design-planning",
  "/services/exterior-design",
  "/services/interior-design",
  "/services/renovation",
  "/works",
];
const uniqueProjectSlugs = [...new Set(projectsData.projects.map((project) => project.slug))];

export default async function sitemap() {
  const lastModified = new Date();
  const pages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));
  const projectPages = uniqueProjectSlugs.map((slug) => ({
    url: `${baseUrl}/project/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...projectPages];
}
