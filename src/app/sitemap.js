// import { categories } from "@/app/libs/categories";

// export default function sitemap() {
//   const baseUrl = "http://localhost:3000/";
//   //   const baseUrl = "https://www.diqraarchitects.com";

//   const categoryUrls = categories.map((cat) => ({
//     url: `${baseUrl}/services/${cat.slug}`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//     priority: 0.8,
//   }));

//   return [
//     { url: baseUrl, lastModified: new Date(), priority: 1.0 },
//     ...categoryUrls,
//   ];
// }

// app/sitemap.js
import { categories } from "@/app/libs/categories";

export default async function sitemap() {
  // const baseUrl = "http://diqraarchitects.com/";
    const baseUrl = "http://localhost:3000/";

  const servicePages = categories.map((cat) => ({
    url: `${baseUrl}/services/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    ...servicePages,
  ];
}
