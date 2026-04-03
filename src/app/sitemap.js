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

const selectedSlugs = [
  "construction-companies",
  "architects",
  "interior-designers",
  "residential-builders",
  "commercial-builders",
  "building-contractors",
  "civil-contractors",
  "architects-for-residential",
  "architects-for-office",
  "interior-designers-for-office",
  "architects-for-apartment",
  "industrial-construction-companies",
  "architects-for-landscape",
  "builders-and-developers",
  "architects-for-building",
];

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

  const categoryPages = selectedSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...projectPages, ...categoryPages];
}
