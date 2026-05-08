import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";

const rootDir = process.cwd();
const projectsFilePath = path.join(
  rootDir,
  "src",
  "app",
  "data",
  "projects-data.json",
);
const envFilePath = path.join(rootDir, ".env");

if (fs.existsSync(envFilePath)) {
  const envContents = fs.readFileSync(envFilePath, "utf8");
  const envLines = envContents.split(/\r?\n/);

  for (const line of envLines) {
    if (!line || line.trim().startsWith("#") || !line.includes("=")) continue;

    const separatorIndex = line.indexOf("=");
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();

    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token =
  process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_AUTH_TOKEN;

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment.");
}

if (!token) {
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN or SANITY_AUTH_TOKEN in environment.",
  );
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2026-05-08",
  useCdn: false,
});

const rawProjects = JSON.parse(fs.readFileSync(projectsFilePath, "utf8"));
const projects = rawProjects.projects || [];
const assetCache = new Map();

function slugifyFileName(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toSanityDocumentId(prefix, value) {
  const safeValue = String(value)
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `${prefix}.${safeValue}`;
}

function getContentType(fileName) {
  const ext = path.extname(fileName).toLowerCase();

  if (ext === ".png") return "image/png";
  if (ext === ".webp") return "image/webp";
  if (ext === ".gif") return "image/gif";
  if (ext === ".svg") return "image/svg+xml";
  return "image/jpeg";
}

async function uploadImageFromSource(source, projectSlug, label) {
  if (!source) return null;

  if (assetCache.has(source)) {
    return assetCache.get(source);
  }

  let upload;

  if (source.startsWith("/")) {
    const localPath = path.join(rootDir, "public", source.replace(/^\//, ""));

    if (!fs.existsSync(localPath)) {
      throw new Error(`Local image not found: ${localPath}`);
    }

    const fileName = path.basename(localPath);
    upload = await client.assets.upload(
      "image",
      fs.createReadStream(localPath),
      {
        filename: `${slugifyFileName(projectSlug)}-${slugifyFileName(label)}-${fileName}`,
        contentType: getContentType(fileName),
      },
    );
  } else {
    const response = await fetch(source);

    if (!response.ok) {
      throw new Error(`Failed to fetch remote image: ${source}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const url = new URL(source);
    const remoteName = path.basename(url.pathname) || `${label}.jpg`;

    upload = await client.assets.upload(
      "image",
      Buffer.from(arrayBuffer),
      {
        filename: `${slugifyFileName(projectSlug)}-${slugifyFileName(label)}-${remoteName}`,
      },
    );
  }

  const assetRef = {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: upload._id,
    },
  };

  assetCache.set(source, assetRef);
  return assetRef;
}

async function buildProjectDocument(project, index) {
  const thumbnail = await uploadImageFromSource(
    project.thumbnail || project.images?.[0],
    project.slug,
    "thumbnail",
  );

  const galleryImages = [];
  for (let imageIndex = 0; imageIndex < (project.images || []).length; imageIndex += 1) {
    const imageSource = project.images[imageIndex];
    const imageAsset = await uploadImageFromSource(
      imageSource,
      project.slug,
      `gallery-${imageIndex + 1}`,
    );

    if (imageAsset) {
      galleryImages.push({
        ...imageAsset,
        alt:
          imageIndex === 0
            ? project.title
            : `${project.title} detail ${imageIndex}`,
      });
    }
  }

  return {
    _id: toSanityDocumentId("project", project.slug),
    _type: "project",
    title: project.title,
    slug: {
      _type: "slug",
      current: project.slug,
    },
    sortOrder: index + 1,
    year: project.year || "",
    category: project.category || "Project",
    projectType: project.projectType || "architecture",
    location: project.location || "",
    thumbnail,
    featured: Boolean(project.featured),
    description: project.description || "",
    details: project.details || {},
    images: galleryImages,
    tags: Array.isArray(project.tags) ? project.tags : [],
  };
}

async function run() {
  console.log(`Importing ${projects.length} projects into ${projectId}/${dataset}...`);

  for (let index = 0; index < projects.length; index += 1) {
    const project = projects[index];
    const document = await buildProjectDocument(project, index);
    await client.createOrReplace(document);
    console.log(`Imported ${index + 1}/${projects.length}: ${project.slug}`);
  }

  console.log("Project import complete.");
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
