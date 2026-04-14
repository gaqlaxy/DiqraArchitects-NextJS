import { allServiceSlugs } from "@/app/data/servicesData";
import projectsData from "@/app/data/projects-data.json";

const baseUrl = "https://diqraarchitects.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/contact",
  "/privacy",
  "/terms",
  "/license",
];

// The legacy curated high-traffic categories from categories.json
const legacySlugs = [
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

  // 1. Static Routes (Home, About, etc.)
  const pages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));

  // 2. Dynamic Service Pages (including Geo-Variants)
  const selectedSlugs = [...new Set([...legacySlugs, ...allServiceSlugs])];
  const categoryPages = selectedSlugs.map((slug) => {
    // Give base services a slightly higher priority than geo-variants
    const isGeoVariant = slug.endsWith("-chennai") || slug.endsWith("-urapakkam");
    
    return {
      url: `${baseUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: isGeoVariant ? 0.8 : 0.9,
    };
  });

  // 3. Dynamic Project Pages (Portfolio)
  const projectPages = projectsData.projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...categoryPages, ...projectPages];
}
