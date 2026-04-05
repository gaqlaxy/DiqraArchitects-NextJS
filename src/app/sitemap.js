import { allServiceSlugs } from "@/app/data/servicesData";

const baseUrl = "https://diqraarchitects.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/contact",
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

const selectedSlugs = [...new Set([...legacySlugs, ...allServiceSlugs])];

export default async function sitemap() {
  const lastModified = new Date();

  const pages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.7,
  }));

  const categoryPages = selectedSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...categoryPages];
}
