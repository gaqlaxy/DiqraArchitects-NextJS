/**
 * servicesData.js
 * ─────────────────────────────────────────────────────────────
 * Complete content data for all Diqra Architects service pages.
 * Import the object you need in each /services/[slug]/page.jsx
 *
 * Usage:
 *   import { servicesData } from "@/app/data/servicesData";
 *   const customData = servicesData["interiors"];
 * ─────────────────────────────────────────────────────────────
 */

export const servicesData = {

  /* 01 — INTERIORS */
  "interiors": {
    title: "Interiors",
    titleLine1: "Refined",
    titleLine2: "Interiors",
    metaTitle: "Interior Design Services in Chennai | Diqra Architects",
    metaDescription: "Bespoke interior design in Chennai — creating balanced, elegant, and purposeful spaces for residential and commercial environments.",
    subtitle: "Spaces that feel balanced, elegant, and purposeful — where every element is considered and nothing is accidental.",
    statsQuote: "An interior should feel inevitable — as if it could not have been any other way.",
    hero: "https://images.unsplash.com/photo-1618221195710-dd6b41fa5609?q=80&w=2000",
    stats: [
      { value: "120+", label: "Homes Transformed" },
      { value: "15+",  label: "Years of Design" },
      { value: "0",    label: "Standard Templates" },
    ],
    overviewHeading: "Interiors Built Around <em>Human Experience</em>",
    overview: `Interior design at Diqra Architects begins with understanding — how you move through your home, where natural light falls, and what materials age well in Chennai's climate. We don't just decorate; we resolve the spatial logic of your environment to reflect your lifestyle.\n\nFrom residential villas to boutique office spaces, our interior practice is dedicated to material quality and spatial calm. We handle everything from custom joinery and lighting design to soft furnishings and decorative accents — ensuring a cohesive narrative from room to room.`,
    overviewAside: `
      <strong>Design Ethos</strong>
      Bespoke · Minimalist · Grounded
      <strong>Services Included</strong>
      Space Planning · Mood Boards · Material Curation · Joinery Design · Styling
      <strong>Coverage</strong>
      Chennai · Tamil Nadu
    `,
    features: [
      {
        title: "Bespoke Joinery",
        desc: "Custom-designed wardrobes, kitchen cabinetry, and shelving units that fit your space perfectly.",
        img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=1200",
      },
      {
        title: "Material Curation",
        desc: "Hand-selected stones, timbers, and fabrics that age gracefully and feel premium to the touch.",
        img: "https://images.unsplash.com/photo-1616486341351-70ad52b2792b?w=1200",
      },
      {
        title: "Lighting Narrative",
        desc: "Layers of ambient, task, and accent lighting designed to transform atmosphere throughout the day.",
        img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1200",
      },
      {
        title: "Spatial Optimization",
        desc: "Intelligent layouts that maximize flow, storage, and natural light in every corner of your home.",
        img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Consultation to understand your lifestyle, taste, and functional needs." },
      { step: "02", title: "Concept",   desc: "Mood boards and preliminary spatial layouts establishing the design direction." },
      { step: "03", title: "3D Design", desc: "Detailed 3D models of every room for visual review and approval." },
      { step: "04", title: "Spec",      desc: "Finalizing material schedules, hardware selections, and vendor quotes." },
      { step: "05", title: "Execution", desc: "Site coordination and carpenter management to ensure high-fidelity delivery." },
      { step: "06", title: "Handover",  desc: "Final styling, quality checks, and transitioning your new space to you." },
    ],
    faqs: [
      { q: "Do you offer standard interior packages?", a: "No. Every project is designed from scratch to ensure it is unique to your space and personality." },
      { q: "How long does a home interior take?", a: "Design takes 3-6 weeks; execution typically takes 3-5 months depending on scope." },
    ],
    relatedServices: [
      { slug: "modular-kitchen", title: "Modular Kitchen", hint: "Culinary excellence" },
      { slug: "renovation",      title: "Renovation",      hint: "Full home makeovers" },
    ],
  },

  /* 02 — MODULAR KITCHEN */
  "modular-kitchen": {
    title: "Modular Kitchen",
    titleLine1: "Culinary",
    titleLine2: "Excellence",
    metaTitle: "Modular Kitchen Design in Chennai | Diqra Architects",
    metaDescription: "High-end modular kitchen solutions in Chennai — combining ergonomic precision with premium finishes for the modern chef.",
    subtitle: "High-performance culinary spaces where ergonomic precision meets aesthetic excellence.",
    statsQuote: "The kitchen is the engine room of the home — it must be as efficient as it is beautiful.",
    hero: "https://images.unsplash.com/photo-1556911220-e15224bbaf40?q=80&w=2000",
    stats: [
      { value: "500+", label: "Kitchens Delivered" },
      { value: "10yr",  label: "Finish Warranty" },
      { value: "0",    label: "Dead Corners" },
    ],
    overviewHeading: "Kitchens Designed for <em>Fluid Movement</em>",
    overview: `A great kitchen is more than just cabinetry; it is a meticulously planned workspace. We apply architectural discipline to kitchen design — optimizing the classic 'work triangle', maximizing vertical storage, and specifying materials that endure heat, moisture, and heavy use.\n\nOur modular solutions integrate the latest in European hardware with locally sourced, high-durability surfaces, ensuring your kitchen remains functional and sharp for decades.`,
    overviewAside: `
      <strong>Key Features</strong>
      Bespoke Layouts · BWP Plywood · Soft-Close Hardware · Hidden Lighting
      <strong>Vendors</strong>
      Häfele · Hettich · Blum · Kaff
      <strong>Maintenance</strong>
      Low persistence · High durability
    `,
    features: [
      {
        title: "Ergonomic Layouts",
        desc: "Island, Galley, L-shaped, or U-shaped — planned for maximum efficiency and social flow.",
        img: "https://images.unsplash.com/photo-1556185781-a47769abb7ee?w=1200",
      },
      {
        title: "Smart Storage",
        desc: "Pull-out larders, corner carousels, and bottle racks that ensure nothing is out of reach.",
        img: "https://images.unsplash.com/photo-1579725942955-4d8377f8c66a?w=1200",
      },
      {
        title: "Premium Finishes",
        desc: "From anti-fingerprint acrylics to high-gloss lacquers and textured veneers.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Appliance Integration",
        desc: "Seamless inclusion of hobs, chimneys, built-in ovens, and dishwashers for a sleek look.",
        img: "https://images.unsplash.com/photo-1510629251804-0985220a2e7c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Site Measurement", desc: "Precise measurement to account for every millimetre and service point." },
      { step: "02", title: "Workflow Planning", desc: "Zoning the kitchen for prep, cook, wash, and storage." },
      { step: "03", title: "3D Visualization", desc: "Full-colour renders with your chosen finishes and lighting." },
      { step: "04", title: "Technical Drawing", desc: "Electrical and plumbing layouts matched to the design." },
      { step: "05", title: "Factory Production", desc: "Precision manufacturing using computerized machinery." },
      { step: "06", title: "On-Site Install",    desc: "Fast, clean installation by our professional fit-out team." },
    ],
    faqs: [
      { q: "What materials do you use for the carcass?", a: "We use 710-grade Boiling Water Proof (BWP) plywood for all kitchen bases." },
      { q: "Do you handle plumbing and electrical too?", a: "Yes. We provide the complete service from rough-ins to final lighting." },
    ],
    relatedServices: [
      { slug: "interiors", title: "Interiors", hint: "Full home design" },
      { slug: "renovation", title: "Renovation", hint: "Updates & extensions" },
    ],
  },

  /* 03 — RENOVATION */
  "renovation": {
    title: "Renovation",
    titleLine1: "Space",
    titleLine2: "Renovation",
    metaTitle: "Home Renovation Services in Chennai | Diqra Architects",
    metaDescription: "Expert home and building renovation in Chennai — structural repairs, interior upgrades, and exterior makeovers with architectural sensitivity.",
    subtitle: "Reimagining existing spaces with architectural sensitivity, structural clarity, and modern intention.",
    statsQuote: "The best renovation is invisible — it feels like the building was always this way.",
    hero: "https://images.unsplash.com/photo-1505843513577-22bb7d21ef45?q=80&w=2000",
    stats: [
      { value: "65+",  label: "Renovations Done" },
      { value: "15yr", label: "Structural Exp" },
      { value: "∞",    label: "New Possibilities" },
    ],
    overviewHeading: "Renovation That <em>Respects the Past</em>",
    overview: `Renovation is the most demanding discipline — working within existing constraints while delivering the quality of a new build. We handle structural alterations, interior overhauls, and façade refurbishments for residential and commercial buildings across Chennai.\n\nOur approach is analytical: we assess the building's current integrity and service layouts before designing, ensuring a smooth transformation without hidden surprises during construction.`,
    overviewAside: `
      <strong>Renovation Types</strong>
      Interior · Exterior · Structural · Heritage
      <strong>Services</strong>
      Assessment · Design · Contractor Vetting · Supervision
      <strong>Status</strong>
      CMDA/DTCP Compliance
    `,
    features: [
      {
        title: "Structural Alteration",
        desc: "Wall removals, room additions, and roof modifications handled with engineering precision.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
      {
        title: "Interior Refit",
        desc: "Complete overhaul of flooring, ceilings, joinery, and electrical for a brand new feel.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Facade Upgrades",
        desc: "Transforming dated exteriors with modern cladding, paint schemes, and windows.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Service Modernization",
        desc: "Replacing old plumbing and electrical lines with modern, high-capacity systems.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "As-Built Survey", desc: "Detailed survey of the existing structure and service lines." },
      { step: "02", title: "Integrity Audit",  desc: "Checking for cracks, dampness, and structural health." },
      { step: "03", title: "Design Proposal", desc: "Proposed changes shown alongside existing plans for clarity." },
      { step: "04", title: "Permit Check",    desc: "Verifying if changes require local body or CMDA approvals." },
      { step: "05", title: "Phased Execution", desc: "Organized site work to minimize disruption if residents are staying." },
      { step: "06", title: "Final Finishing",  desc: "Snagging and handover of your 'new' existing space." },
    ],
    faqs: [
      { q: "Can we live in the house during renovation?", a: "Yes, for phased interior works. For structural or full home overhauls, we recommend temporary lodging." },
      { q: "Is renovation cheaper than building new?", a: "Usually yes, but it depends on the structural state. We provide a feasibility report first." },
    ],
    relatedServices: [
      { slug: "interiors", title: "Interiors", hint: "Premium finishes" },
      { slug: "construction", title: "Construction", hint: "New additions" },
    ],
  },

  /* 04 — CONSTRUCTION */
  "construction": {
    title: "Construction",
    titleLine1: "Design-Led",
    titleLine2: "Construction",
    metaTitle: "Best Construction Company in Urapakkam | Diqra Architects",
    metaDescription: "Premier turnkey building construction in Urapakkam and Chennai. Award-winning architect-managed construction for villas and luxury homes in Chennai.",
    subtitle: "Turnkey construction managed by architects — where design intent meets military-grade execution in Urapakkam.",
    statsQuote: "A building is only as good as the mind that guided the hands that built it.",
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
    stats: [
      { value: "100+", label: "Projects Completed" },
      { value: "15+",  label: "Years in Field" },
      { value: "100%", label: "On-Spec Delivery" },
    ],
    overviewHeading: "Construction in <em>Urapakkam</em> & Chennai",
    overview: `Finding a construction company in Urapakkam that understands architectural precision is rare. Diqra Architects bridges this gap by offering design-led construction. We don't just build to the plan; we build to the design intent, ensuring every shadow line and material junction is executed as envisioned.\n\nFrom high-end residential villas to commercial complexes in Urapakkam and across Chennai, we manage the entire construction lifecycle — from foundation to final paint — giving you a single point of responsibility.`,
    overviewAside: `
      <strong>Delivery Model</strong>
      Turnkey · Item-Rate · Project Management
      <strong>Specializations</strong>
      RCC Structure · Composite Build · Prefab
      <strong>Location</strong>
      Urapakkam · Chennai · Trichy
    `,
    features: [
      {
        title: "Turnkey Execution",
        desc: "End-to-end management including approvals, labour, materials, and final handover.",
        img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      },
      {
        title: "Quality Benchmarking",
        desc: "Rigorous on-site testing for concrete strength, steel grade, and masonry alignment.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Schedule Adherence",
        desc: "Cloud-based project tracking to ensure milestones are met on time, every time.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Material Transparency",
        desc: "Itemized bills and vendor verifications for every major purchase made for your project.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "BOQ Finalization", desc: "Detailed bill of quantities so you know the cost before the first shovel hits." },
      { step: "02", title: "Site Mobilization", desc: "Setting up safety barriers, labour sheds, and site office." },
      { step: "03", title: "Foundation Stage",  desc: "Excavation and RCC footings inspected by our principal architect." },
      { step: "04", title: "Structure & Walls", desc: "Formwork and masonry following the precise structural drawings." },
      { step: "05", title: "Finishing Works",   desc: "Plastering, flooring, and service integrations." },
      { step: "06", title: "Handover",          desc: "Deep cleaning, snagging, and delivery of keys." },
    ],
    faqs: [
      { q: "What is your per square foot rate?", a: "Rates vary based on specification (Standard vs Luxury). Contact us for a detailed quote." },
      { q: "Do you handle building approvals?", a: "Yes, as your turnkey partner, we manage CMDA/DTCP submissions." },
    ],
    relatedServices: [
      { slug: "engineering", title: "Engineering", hint: "Structural precision" },
      { slug: "project-management", title: "Project Management", hint: "Expert oversight" },
    ],
  },

  /* 05 — EXTERIOR */
  "exterior": {
    title: "Exterior",
    titleLine1: "Bold",
    titleLine2: "Façades",
    metaTitle: "Exterior Design Services in Chennai | Diqra Architects",
    metaDescription: "Bold architectural exteriors in Chennai — façade design, material selection, and 3D visualization that creates an enduring first impression.",
    subtitle: "Bold façades that balance form, function, and lasting visual harmony — the first impression that endures.",
    statsQuote: "Every exterior is a public statement that must stand for decades.",
    hero: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=2000",
    stats: [
      { value: "100+", label: "Buildings Designed" },
      { value: "15+",  label: "Years in Practice" },
      { value: "3",    label: "States Served" },
    ],
    overviewHeading: "Exteriors Designed to <em>Command Attention</em>",
    overview: `The exterior of a building is its most enduring public statement. At Diqra Architects, we treat every façade as an exercise in architectural discipline — where proportion, material, and light converge to create something genuinely memorable.\n\nWe integrate climate-responsive design with contemporary aesthetics, ensuring façades that look as sharp in 20 years as they do on the day of completion.`,
    overviewAside: `
      <strong>Design Scope</strong>
      Massing · Façade · Cladding · Landscape
      <strong>Project Types</strong>
      Villas · Commercial · Mixed-Use
      <strong>Locations</strong>
      Urapakkam · Chennai Metro
    `,
    features: [
      {
        title: "Façade Massing",
        desc: "Sculpting building volumes to create depth, shade, and a distinctive silhouette.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Cladding & Textures",
        desc: "Specifying stone, concrete, brick, and timber palettes that age gracefully.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Fenestration Design",
        desc: "Windows and louvers that control light and heat while adding visual rhythm.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
      {
        title: "Landscape Integration",
        desc: "Merging the building's exterior with its immediate green environment.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Context Audit", desc: "Assessing orientation, neighborhood character, and FSI constants." },
      { step: "02", title: "Massing Study",  desc: "Developing the build's volume and silhouette in 3D." },
      { step: "03", title: "Material Board", desc: "Curating a tactile palette of stone, glass, and metal." },
      { step: "04", title: "Photoreal visualization", desc: "Daylight and dusk renders to finalize the visual aesthetic." },
      { step: "05", title: "Elevation Drawings", desc: "Detailed working drawings for site execution." },
      { step: "06", title: "Site Review",     desc: "Periodic visits during plaster and cladding stages." },
    ],
    faqs: [
      { q: "Do you design compound walls too?", a: "Yes, the entry gate and boundary wall are integral parts of our exterior design." },
      { q: "Can you fix a dull façade?", a: "Yes, we handle façade refurbishment as part of our renovation services." },
    ],
    relatedServices: [
      { slug: "architectural", title: "Architectural", hint: "Full design" },
      { slug: "construction",  title: "Construction",  hint: "Turnkey build" },
    ],
  },

  /* 06 — ARCHITECTURAL */
  "architectural": {
    title: "Architectural",
    titleLine1: "Architectural",
    titleLine2: "Services",
    metaTitle: "Architectural Design Services in Chennai | Diqra Architects",
    metaDescription: "Comprehensive architectural services in Chennai — concept design, floor planning, working drawings, and CMDA/DTCP approval support.",
    subtitle: "From the first sketch to the last approval drawing — spatial clarity and precision documentation.",
    statsQuote: "Architecture is the precise resolution of complex human needs into buildable space.",
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
    stats: [
      { value: "100%", label: "Approval Rate" },
      { value: "15yr",  label: "Experience" },
      { value: "1k+",  label: "Drawings Issued" },
    ],
    overviewHeading: "Architecture That Begins with <em>Clarity</em>",
    overview: `Good architecture is not decoration; it is the thoughtful arrangement of space. Our architectural practice covers residential, commercial, and institutional projects across Tamil Nadu. We manage the journey from site analysis and concept layouts to structural coordination and approval-ready blueprints.\n\nEvery plan we produce is drawn with an awareness of how people move through it — focusing on ventilation, light, and intuitive circulation.`,
    overviewAside: `
      <strong>Expertise</strong>
      Concept · Planning · MEP · Approval
      <strong>Regulation</strong>
      CMDA · DTCP · Local Body
      <strong>Focus</strong>
      Urban Residences · Small Plots · Villas
    `,
    features: [
      {
        title: "Spatial Planning",
        desc: "Creating floor plans that feel generous and intuitive, regardless of plot size.",
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      },
      {
        title: "3D Massing",
        desc: "Visualizing the building's volume and height ratios before detailed design.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Approval Documentation",
        desc: "Comprehensive drawing sets prepared to strict local body and CMDA standards.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "GFC Drawings",
        desc: "Good-For-Construction drawings including every structural and service detail.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Briefing",       desc: "Defining project goals, budget, and timeline." },
      { step: "02", title: "Concept",        desc: "Preliminary spatial layouts and silhouette studies." },
      { step: "03", title: "Refined Design", desc: "Detailed floor plans, sections, and elevations." },
      { step: "04", title: "Coordination",  desc: "Integrating structural, electrical, and plumbing data." },
      { step: "05", title: "Submission",    desc: "Preparation and filing for building approvals." },
      { step: "06", title: "Issuance",      desc: "Final drawing set delivered to your contractor." },
    ],
    faqs: [
      { q: "What is a GFC drawing?", a: "GFC stands for 'Good for Construction' — the final, detailed drawing set used on-site." },
      { q: "Do you handle Vastu?", a: "Yes, we integrate Vastu principles while maintaining modern design integrity." },
    ],
    relatedServices: [
      { slug: "architecture", title: "Architecture", hint: "Design philosophy" },
      { slug: "consultancy",  title: "Consultancy",  hint: "Expert advice" },
    ],
  },

  /* 07 — CONSULTANCY */
  "consultancy": {
    title: "Consultancy",
    titleLine1: "Expert",
    titleLine2: "Consultancy",
    metaTitle: "Architectural Consultancy in Chennai | Diqra Architects",
    metaDescription: "Independent architectural consultancy in Chennai — plot assessment, design reviews, and builder vetting for confident decision making.",
    subtitle: "Confident decisions begin with clarity. We give you the expert perspective you need.",
    statsQuote: "The right question asked early saves months of expensive revision.",
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000",
    stats: [
      { value: "500+", label: "Sessions Delivered" },
      { value: "100%", label: "Unbiased Advice" },
      { value: "15yr",  label: "Practice" },
    ],
    overviewHeading: "Expertise You Can <em>Act On</em>",
    overview: `Most architectural mistakes are made before a single drawing is produced. Our consultancy service gives you access to 15 years of hands-on practice before you commit to a purchase or a builder.\n\nWe offer plot feasibility studies, design second-opinions, and construction feasibility audits. Our advice is independent — we are not aligned with any specific vendor or material supplier, ensuring your interests are the only priority.`,
    overviewAside: `
      <strong>Session Formats</strong>
      In-Studio · On-Site · Video Call
      <strong>Common Tasks</strong>
      Plot Assessment · Plan Review · Vetting
      <strong>Location</strong>
      Urapakkam · Online
    `,
    features: [
      {
        title: "Plot Assessment",
        desc: "FSI potential, soil suitability, and flood risk analysis before you buy.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Plan Review",
        desc: "A second look at your existing drawings for spatial efficiency and cost risks.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Builder Vetting",
        desc: "Helping you evaluate quotes and technical capability of potential contractors.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Budget Planning",
        desc: "Realistic cost estimation for your project stage and specification choice.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Enquiry",         desc: "Tell us your specific question or project stage." },
      { step: "02", title: "Doc Review",      desc: "We review your shared layouts/photos before the session." },
      { step: "03", title: "Session",         desc: "Focused 60–120 minute advice meeting." },
      { step: "04", title: "Written Memo",    desc: "Clear summary of findings and recommendations within 48h." },
      { step: "05", title: "Action Plan",     desc: "Step-by-step roadmap for your next project milestone." },
      { step: "06", title: "Check-in",        desc: "Follow-up support via email for one week." },
    ],
    faqs: [
      { q: "Do you visit sites outside Chennai?", a: "Yes, we cover Greater Chennai and major districts in Tamil Nadu." },
      { q: "Is the first consultation free?", a: "General introductory calls are free; technical assessments are fee-based." },
    ],
    relatedServices: [
      { slug: "architectural", title: "Architectural", hint: "Full design" },
      { slug: "project-management", title: "Project Management", hint: "On-site help" },
    ],
  },

  /* 08 — ENGINEERING */
  "engineering": {
    title: "Engineering",
    titleLine1: "Technical",
    titleLine2: "Excellence",
    metaTitle: "Structural & Civil Engineering Services in Chennai | Diqra Architects",
    metaDescription: "Technical engineering services in Chennai — structural design, load calculations, MEP coordination, and site technical audits.",
    subtitle: "Where creative vision is grounded in technical truth — structural integrity without compromise.",
    statsQuote: "The strength of a building lies in the things you cannot see.",
    hero: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000",
    stats: [
      { value: "0",    label: "Structural Failures" },
      { value: "15yr", label: "Engineering Exp" },
      { value: "Safe", label: "By Design" },
    ],
    overviewHeading: "Engineering the <em>Resilient</em>",
    overview: `At Diqra Architects, engineering is not an afterthought; it is integrated into the design from day one. We provide comprehensive structural and civil engineering services, including seismic load calculations, foundation design for varied soil types (clay, sand, fill), and detailed reinforcement schedules.\n\nOur goal is technical efficiency — using building materials to their maximum potential to ensure safety while optimizing costs.`,
    overviewAside: `
      <strong>Services</strong>
      Structural RCC · Steel Design · Plumbing · Electrical
      <strong>Tools</strong>
      STAAD Pro · Etabs · Revit
      <strong>Standards</strong>
      IS Codes · Seismic Compliance
    `,
    features: [
      {
        title: "Structural Design",
        desc: "RCC framing and steel structures optimized for load, span, and durability.",
        img: "https://images.unsplash.com/photo-1503387762-592dee58ca3b?w=1200",
      },
      {
        title: "Foundation Engineering",
        desc: "Specialized footing design for Chennai's diverse soil conditions.",
        img: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?w=1200",
      },
      {
        title: "MEP Coordination",
        desc: "Integrated electrical, plumbing, and HVAC layouts that don't clash with structure.",
        img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=1200",
      },
      {
        title: "Site Technical Audit",
        desc: "Checking execution against structural drawings to ensure zero deviation.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Soil Analysis",   desc: "Soil testing to determine bearing capacity." },
      { step: "02", title: "Load Modeling",   desc: "Simulating gravity, wind, and seismic loads in 3D." },
      { step: "03", title: "Drafting",        desc: "Precise reinforcement and column-beam drawings." },
      { step: "04", title: "Detailing",       desc: "Bar bending schedules and connection details." },
      { step: "05", title: "Site Inspection", desc: "Checking steel binding before concrete pours." },
      { step: "06", title: "Certification",   desc: "Issuing structural stability certificates." },
    ],
    faqs: [
      { q: "Do you design for earthquakes?", a: "Yes, all our structures are designed for the relevant seismic zones in Tamil Nadu." },
      { q: "Can you review another engineer's work?", a: "Yes, we offer technical audits and second-opinions on structural plans." },
    ],
    relatedServices: [
      { slug: "construction", title: "Construction", hint: "Building it right" },
      { slug: "architectural", title: "Architectural", hint: "Integrated design" },
    ],
  },

  /* 09 — PROJECT MANAGEMENT */
  "project-management": {
    title: "Project Management",
    titleLine1: "Project",
    titleLine2: "Management",
    metaTitle: "Construction Project Management in Chennai | Diqra Architects",
    metaDescription: "Professional project management in Chennai — ensuring your construction is delivered on-time, on-budget, and to the highest quality standards.",
    subtitle: "On-time, on-budget, and on-quality — professional oversight for high-stakes construction.",
    statsQuote: "Good management is the difference between a project and a process.",
    hero: "https://images.unsplash.com/photo-1454165833767-027508496b4c?q=80&w=2000",
    stats: [
      { value: "0",    label: "Budget Overruns" },
      { value: "100%", label: "Quality Audit" },
      { value: "99%",  label: "On-Time Mark" },
    ],
    overviewHeading: "Your Interests, <em>Managed</em>",
    overview: `A large construction project has thousands of moving parts. Our Project Management Consultancy (PMC) ensures they all move in sync. We act as your professional representative on-site — vetting vendors, auditing material quality, tracking schedules, and certifying payments to contractors.\n\nWe represent the client, not the builder, ensuring your money is spent effectively and your design is never compromised for convenience.`,
    overviewAside: `
      <strong>Role</strong>
      Owner's Rep · Vendor Manager · Quality Controller
      <strong>Deliverables</strong>
      Weekly Reports · Bill Certs · Snag Lists
      <strong>Coverage</strong>
      Residential · Commercial · Institutional
    `,
    features: [
      {
        title: "Vendor Coordination",
        desc: "Managing multiple specialized contractors for structure, interiors, and services.",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
      },
      {
        title: "Quality Control",
        desc: "Rigorous check-lists for every stage of work from footing to final paint.",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200",
      },
      {
        title: "Bill Certification",
        desc: "Independent verification of work done before you release payments to builders.",
        img: "https://images.unsplash.com/photo-1554224155-1696373b067a?w=1200",
      },
      {
        title: "Schedule Tracking",
        desc: "Gantt charts and critical path analysis to prevent project delays.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Master Schedule", desc: "Developing a day-by-day project roadmap." },
      { step: "02", title: "Budget Setup",     desc: "Establishing cost controls and cash-flow plans." },
      { step: "03", title: "Daily Review",     desc: "On-site monitoring of labour and progress." },
      { step: "04", title: "Quality Check",    desc: "Material testing and workmanship audits." },
      { step: "05", title: "Bill Auditing",    desc: "Strict verification of contractor claims." },
      { step: "06", title: "Closing",          desc: "Snag lists, final accounts, and handover." },
    ],
    faqs: [
      { q: "How do you charge for PMC?", a: "Usually a fixed monthly fee or a percentage of project value." },
      { q: "Do you hire the labour?", a: "No, we manage the contractors you hire, ensuring they perform to spec." },
    ],
    relatedServices: [
      { slug: "construction", title: "Construction", hint: "Execution partner" },
      { slug: "consultancy",  title: "Consultancy",  hint: "Expert guidance" },
    ],
  },

  /* 10 — ARCHITECTURE */
  "architecture": {
    title: "Architecture",
    titleLine1: "Grounded",
    titleLine2: "Architecture",
    metaTitle: "Architects in Chennai | Diqra Architects – Award Winning Design",
    metaDescription: "Grounded, culturally rooted architecture in Chennai — designing intentional spaces that reflect life, climate, and site in Tamil Nadu.",
    subtitle: "Intentional architecture shaped by cultural richness and refined modern craftsmanship — built for Chennai.",
    statsQuote: "Architecture is the will of an epoch translated into space.",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
    stats: [
      { value: "100+", label: "Delivered" },
      { value: "15yr",  label: "Practice" },
      { value: "Unique", label: "Always" },
    ],
    overviewHeading: "Designing <em>With Intent</em>",
    overview: `Architecture at Diqra Architects is about more than making things look good. It's about grounding a building in its site, its climate, and the lives of its occupants. We believe every project should be a unique response to its environment — creating a sense of 'place' rather than just a structure.\n\nOur philosophy blends modern minimalism with traditional wisdom, ensuring homes are ventilated, bright, and deeply connected to nature even in dense urban settings like Chennai.`,
    overviewAside: `
      <strong>Philosophy</strong>
      Site-Responsive · Minimalist · Authentic
      <strong>Practice</strong>
      Residential · Institutional · Commercial
      <strong>Credentials</strong>
      Registered Architect · COA India
    `,
    features: [
      {
        title: "Cultural Context",
        desc: "Designing buildings that feel at home in Tamil Nadu's rich architectural heritage.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Sustainability",
        desc: "Passive cooling, rain harvesting, and light-well integration as standard features.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Human Centric",
        desc: "Spaces planned around rituals of daily life — from shared meals to quiet study.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
      {
        title: "Material Sincerity",
        desc: "Celebrating honest materials: exposed brick, polished stone, and raw concrete.",
        img: "https://images.unsplash.com/photo-1600612239202-9c1a30c5728d?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Discovery",       desc: "Defining your vision and life-patterns." },
      { step: "02", title: "Site Reading",     desc: "Understanding the sun, wind, and neighbors." },
      { step: "03", title: "Conceptualizing",  desc: "Sketching the soul of your building." },
      { step: "04", title: "Refining",        desc: "Translating concepts into buildable forms." },
      { step: "05", title: "Collaborating",   desc: "Integrating structure and services seamlessly." },
      { step: "06", title: "Supervising",     desc: "Ensuring the vision is built to perfection." },
    ],
    faqs: [
      { q: "What is your design style?", a: "We lean towards modern minimalism, but our 'style' is always a response to your needs and the site." },
      { q: "Is architectural design expensive?", a: "It is an investment that increases property value and livability significantly." },
    ],
    relatedServices: [
      { slug: "interiors", title: "Interiors", hint: "Holistic design" },
      { slug: "exterior",  title: "Exterior",  hint: "Defining Presence" },
    ],
  },

  /* 11 — ARCHITECT */
  "architect": {
    title: "Architect",
    titleLine1: "Registered",
    titleLine2: "Professional",
    metaTitle: "Registered Architect in Chennai | Diqra Architects",
    metaDescription: "Professional architect-led services in Chennai — registered with the Council of Architecture. We provide certified drawings and principal oversight for all projects.",
    subtitle: "Professional registration and principal-led oversight — ensuring your project meets the highest industry standards.",
    statsQuote: "A registered architect brings legal accountability and design mastery to your project.",
    hero: "https://images.unsplash.com/photo-1503387762-592dee58ca3b?q=80&w=2000",
    stats: [
      { value: "COA", label: "Registered" },
      { value: "15yr", label: "Experience" },
      { value: "1-1",  label: "Principal Attention" },
    ],
    overviewHeading: "Expertise With <em>Accountability</em>",
    overview: `Engaging a registered architect is a legal and quality requirement for any significant building project. At Diqra Architects, every project is personally overseen by a principal architect registered with the Council of Architecture (COA) India.\n\nWe bring a balance of artistic vision, technical knowledge, and project management skills to ensures your investment is safe, compliant with CMDA/DTCP rules, and spatially optimized for long-term value.`,
    overviewAside: `
      <strong>Registration</strong>
      Council of Architecture (COA)
      <strong>Responsibility</strong>
      Design · Code · Supervision
      <strong>Service</strong>
      Principal-Led Oversight
    `,
    features: [
      {
        title: "Code Compliance",
        desc: "Ensuring your plans meet every local body and CMDA regulation from day one.",
        img: "https://images.unsplash.com/photo-1600607687889-13809df77a4c?w=1200",
      },
      {
        title: "Professional Ethics",
        desc: "Working with transparency in fees, contracts, and vendor recommendations.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a46a0c?w=1200",
      },
      {
        title: "Visionary Design",
        desc: "Applying deep design knowledge to solve complex spatial problems creatively.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Authority Sign-off",
        desc: "Providing the certified drawings required for all government building permits.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Identity",     desc: "Verification of registration and previous track record." },
      { step: "02", title: "Strategy",     desc: "Setting the roadmap for design and approval." },
      { step: "03", title: "Drafting",     desc: "Preparing scaled layouts and technical data." },
      { step: "04", title: "Submission",   desc: "Signing off on plans for official approvals." },
      { step: "05", title: "Supervision",  desc: "Acting as the legal authority on-site for quality check." },
      { step: "06", title: "Completion",   desc: "Issuing completion certificates and occupancy aid." },
    ],
    faqs: [
      { q: "Why hire a registered architect?", a: "Only registered architects can sign off on the plans required for government building approval." },
      { q: "Is the principal involved in my project?", a: "Yes, at Diqra Architects, the principal leads every key design meeting." },
    ],
    relatedServices: [
      { slug: "architecture", title: "Architecture", hint: "Full design philosophy" },
      { slug: "consultancy",  title: "Consultancy",  hint: "Expert opinions" },
    ],
  },

};

export const allServiceSlugs = Object.keys(servicesData);

/* ─────────────────────────────────────────────────────────────
   Helper — get data for a slug with safe fallback
───────────────────────────────────────────────────────────── */
export function getServiceData(slug) {
  return servicesData[slug] || null;
}
