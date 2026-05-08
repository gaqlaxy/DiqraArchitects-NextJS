import { defineQuery } from "next-sanity";

const PROJECT_FIELDS = `
  "id": coalesce(id, _id),
  "slug": slug.current,
  title,
  year,
  category,
  projectType,
  location,
  "thumbnail": thumbnail.asset->url,
  featured,
  description,
  details,
  "images": images[]{
    "url": asset->url,
    alt
  },
  tags
`;

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)]
  | order(coalesce(sortOrder, 9999) asc, _createdAt desc) {
    ${PROJECT_FIELDS}
  }
`);

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    ${PROJECT_FIELDS}
  }
`);
