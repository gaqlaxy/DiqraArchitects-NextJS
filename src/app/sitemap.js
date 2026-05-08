import { allServiceSlugs } from "@/app/data/servicesData";
import { serviceAreaPages, serviceAreaLocations } from "@/app/data/serviceAreas";
import { dedicatedServiceRouteSlugs } from "@/app/services/serviceRouteData";
import { getAllProjects } from "@/sanity/lib/projects";

const baseUrl = "https://diqraarchitects.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/works",
  "/gallery",
  "/process",
  "/interiorworks",
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
  const projects = await getAllProjects();

  // 1. Static Routes (Home, About, etc.)
  const pages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));

  // 2. Dynamic Service Pages (including Geo-Variants)
  const selectedSlugs = [
    ...new Set([...legacySlugs, ...allServiceSlugs, ...dedicatedServiceRouteSlugs]),
  ];
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

  const serviceAreaLandingPages = serviceAreaPages.map((page) => {
    const location = serviceAreaLocations[page.location];

    return {
      url: `${baseUrl}/services/${page.service}/${page.location}`,
      lastModified,
      changeFrequency: "monthly",
      priority: location?.priority || 0.8,
    };
  });

  // 3. Dynamic Project Pages (Portfolio)
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...categoryPages, ...serviceAreaLandingPages, ...projectPages];
}
