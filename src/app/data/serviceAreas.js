export const serviceAreaLocations = {
  adyar: {
    slug: "adyar",
    label: "Adyar",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.86,
    nearbyAreas: ["Besant Nagar", "Thiruvanmiyur", "Mylapore", "Guindy"],
    intro:
      "Adyar projects often need careful planning around compact plots, mature neighbourhood streets, premium apartment interiors, and family homes that balance privacy with natural ventilation.",
  },
  "anna-nagar": {
    slug: "anna-nagar",
    label: "Anna Nagar",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.84,
    nearbyAreas: ["Kilpauk", "Mogappair", "Shenoy Nagar", "Aminjikarai"],
    intro:
      "Anna Nagar combines established residences, commercial streets, and renovation opportunities, making practical layouts and refined material choices especially important.",
  },
  tambaram: {
    slug: "tambaram",
    label: "Tambaram",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.88,
    nearbyAreas: ["Selaiyur", "Chromepet", "Perungalathur", "Medavakkam"],
    intro:
      "Tambaram has a wide mix of independent homes, apartments, and new-build plots where clients often need approval-ready planning, efficient interiors, and dependable site coordination.",
  },
  velachery: {
    slug: "velachery",
    label: "Velachery",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.84,
    nearbyAreas: ["Madipakkam", "Taramani", "Guindy", "Pallikaranai"],
    intro:
      "Velachery homes benefit from space-aware architecture and interior planning that handles dense urban surroundings, storage needs, light, and everyday family movement.",
  },
  urapakkam: {
    slug: "urapakkam",
    label: "Urapakkam",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.9,
    nearbyAreas: ["Guduvanchery", "Vandalur", "Perungalathur", "Mannivakkam"],
    intro:
      "Urapakkam is one of Diqra's strongest local service areas, with demand for new residences, turnkey construction, architectural consultation, and practical interiors.",
  },
  "besant-nagar": {
    slug: "besant-nagar",
    label: "Besant Nagar",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.82,
    nearbyAreas: ["Adyar", "Thiruvanmiyur", "Elliot's Beach", "Kottivakkam"],
    intro:
      "Besant Nagar projects need sensitive design decisions around coastal climate, compact premium homes, apartment upgrades, and calm contemporary interiors.",
  },
  "t-nagar": {
    slug: "t-nagar",
    label: "T Nagar",
    city: "Chennai",
    region: "Tamil Nadu",
    priority: 0.82,
    nearbyAreas: ["Nungambakkam", "West Mambalam", "Kodambakkam", "Saidapet"],
    intro:
      "T Nagar brings together busy commercial activity and established residential pockets, so design work must be efficient, durable, and easy to execute.",
  },
  coimbatore: {
    slug: "coimbatore",
    label: "Coimbatore",
    city: "Coimbatore",
    region: "Tamil Nadu",
    priority: 0.78,
    nearbyAreas: ["Peelamedu", "RS Puram", "Saibaba Colony", "Singanallur"],
    intro:
      "Coimbatore projects often call for climate-conscious planning, calm interiors, and practical construction detailing for modern homes and commercial spaces.",
  },
};

export const serviceAreaPages = [
  { service: "architects", location: "adyar" },
  { service: "architects", location: "anna-nagar" },
  { service: "architects", location: "tambaram" },
  { service: "architects", location: "velachery" },
  { service: "architects", location: "urapakkam" },
  { service: "architects", location: "besant-nagar" },
  { service: "interior-design", location: "adyar" },
  { service: "interior-design", location: "anna-nagar" },
  { service: "interior-design", location: "tambaram" },
  { service: "interior-design", location: "velachery" },
  { service: "interior-design", location: "besant-nagar" },
  { service: "interior-design", location: "coimbatore" },
  { service: "construction", location: "tambaram" },
  { service: "construction", location: "urapakkam" },
  { service: "construction", location: "velachery" },
  { service: "renovation", location: "anna-nagar" },
  { service: "renovation", location: "tambaram" },
  { service: "renovation", location: "adyar" },
  { service: "exterior-design", location: "adyar" },
  { service: "exterior-design", location: "tambaram" },
  { service: "consultation", location: "urapakkam" },
  { service: "consultation", location: "tambaram" },
];

export function getServiceAreaLocation(locationSlug) {
  return serviceAreaLocations[locationSlug] || null;
}

export function isApprovedServiceArea(serviceSlug, locationSlug) {
  return serviceAreaPages.some(
    (page) => page.service === serviceSlug && page.location === locationSlug,
  );
}

export function getServiceAreaLinks(serviceSlug, currentLocationSlug = null) {
  return serviceAreaPages
    .filter(
      (page) =>
        page.service === serviceSlug && page.location !== currentLocationSlug,
    )
    .map((page) => {
      const location = getServiceAreaLocation(page.location);
      return location
        ? {
            slug: `${page.service}/${page.location}`,
            href: `/services/${page.service}/${page.location}`,
            title: `${location.label}`,
            hint: `${location.city}, ${location.region}`,
            location,
          }
        : null;
    })
    .filter(Boolean);
}
