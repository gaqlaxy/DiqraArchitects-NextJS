/**
 * servicesData.js
 * ─────────────────────────────────────────────────────────────
 * Complete content data for all Diqra Architects service pages.
 * Import the object you need in each /services/[slug]/page.jsx
 *
 * Usage:
 *   import { servicesData } from "@/app/data/servicesData";
 *   const customData = servicesData["exterior-design"];
 * ─────────────────────────────────────────────────────────────
 */

export const servicesData = {

  /* ══════════════════════════════════════════════════════════
     01 — EXTERIOR DESIGN
  ══════════════════════════════════════════════════════════ */
  "exterior-design": {
    title: "Exterior Design",
    titleLine1: "Exterior",
    titleLine2: "Design",
    metaTitle: "Exterior Design Services in Chennai | Diqra Architects",
    metaDescription:
      "Diqra Architects delivers bold, refined exterior design in Chennai — façade design, cladding, material selection, and 3D visualisation for residential & commercial projects across Tamil Nadu.",
    subtitle:
      "Bold façades that balance form, function, and lasting visual harmony — the first impression that endures.",
    statsQuote: "Every exterior is a public statement that must stand for decades.",
    hero: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332",
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "15+",  label: "Years Active" },
      { value: "3",    label: "States Served" },
    ],
    overviewHeading: "Exteriors Designed to <em>Command Attention</em>",
    overview: `The exterior of a building is its most enduring public statement. At Diqra Architects, we treat every façade as an exercise in architectural discipline — where proportion, material, and light converge to create something genuinely memorable.\n\nOur exterior design practice covers residential villas, commercial buildings, mixed-use developments, and institutional structures across Chennai and Tamil Nadu. We integrate climate-responsive design with contemporary aesthetics, ensuring façades that look as sharp in 20 years as they do on the day of completion.\n\nFrom initial massing studies and material boards to photorealistic 3D renders and contractor-ready elevation drawings, we manage the full exterior design journey under one roof.`,
    overviewAside: `
      <strong>Studio Location</strong>
      Urapakkam, Chennai · Tamil Nadu
      <strong>Services Included</strong>
      Façade Design · Cladding Selection · 3D Visualisation · Material Specification · Working Drawings
      <strong>Regulatory Support</strong>
      CMDA · DTCP · Local Body Submissions
      <strong>Project Types</strong>
      Residential · Commercial · Institutional
    `,
    features: [
      {
        title: "Façade Composition & Massing",
        desc: "We sculpt building volumes with architectural precision — setting back, projecting, and articulating surfaces to create depth, shade, and a distinctive silhouette that reads well at street level and from a distance.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Material & Cladding Selection",
        desc: "Stone, exposed concrete, clay brick, aluminium composite, and timber — we specify materials that perform in Chennai's climate, age gracefully, and require minimal maintenance over a building's lifetime.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Fenestration & Openings",
        desc: "Windows, louvres, screens, and apertures are designed as architectural elements — controlling natural light, reducing solar heat gain, and creating visual rhythm across the façade.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
      {
        title: "3D Visualisation & Walkthroughs",
        desc: "Photo-realistic renders in daylight, dusk, and rain conditions — so you can review, approve, and refine the exterior design before a single wall is cast.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Site Visit & Brief",       desc: "We assess your plot's orientation, neighbourhood character, zoning regulations, and your long-term vision for the building." },
      { step: "02", title: "Concept Sketches",         desc: "Hand-drawn and digital explorations that establish the architectural language — proportion, rhythm, material palette." },
      { step: "03", title: "3D Development",           desc: "Full 3D model with material mapping, lighting simulation, and context rendering." },
      { step: "04", title: "Client Presentation",      desc: "Walkthrough of renders with multiple material options. Revisions until you are completely satisfied." },
      { step: "05", title: "Working Drawings",         desc: "Construction-ready elevation drawings with material schedules, specifications, and contractor notes." },
      { step: "06", title: "Site Review",              desc: "Periodic site visits during construction to ensure the façade is being executed to specification." },
    ],
    faqs: [
      {
        q: "What does exterior design service include in Chennai?",
        a: "Our exterior design service covers façade composition, material and cladding selection, fenestration design, 3D visualisation, and contractor-ready elevation drawings. We also coordinate with structural engineers for any cantilever or projecting elements.",
      },
      {
        q: "How much does exterior design cost in Chennai?",
        a: "Pricing depends on the building's size, complexity, and material specifications. Diqra Architects provides transparent, milestone-based fee structures. Contact us for a no-obligation estimate tailored to your project.",
      },
      {
        q: "Do you provide 3D renders before finalising the exterior design?",
        a: "Yes. Every project includes photo-realistic 3D visualisation so you can review the final exterior in daylight and dusk lighting before construction begins. We offer revisions at every stage.",
      },
      {
        q: "Can you redesign the exterior of an existing building in Chennai?",
        a: "Yes. We handle exterior renovation and façade refurbishment for existing residential and commercial buildings — including re-cladding, new paint schemes, fenestration upgrades, and compound wall design.",
      },
      {
        q: "Do you work on exterior design for apartments and multi-storey buildings?",
        a: "Absolutely. We have designed exteriors for individual residential villas, apartments, commercial complexes, and institutional buildings across Chennai, Trichy, and Chengalpattu.",
      },
    ],
    relatedServices: [
      { slug: "design-planning",   title: "Design & Planning",   hint: "Concept to blueprint" },
      { slug: "interior-design",   title: "Interior Design",     hint: "Refined interiors · Chennai" },
      { slug: "renovation",        title: "Renovation",          hint: "Reimagining existing spaces" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     02 — DESIGN & PLANNING
  ══════════════════════════════════════════════════════════ */
  "design-planning": {
    title: "Design & Planning",
    titleLine1: "Design &",
    titleLine2: "Planning",
    metaTitle: "Architectural Design & Planning Services in Chennai | Diqra Architects",
    metaDescription:
      "From conceptual layouts to CMDA-approved construction drawings — Diqra Architects provides complete architectural design and planning services in Chennai and Tamil Nadu.",
    subtitle:
      "From the first sketch to the last approval drawing — spatial clarity, precision documentation, and zero compromise.",
    statsQuote: "Great buildings begin with a single decisive line on paper.",
    hero: "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017",
    stats: [
      { value: "100+", label: "Projects Designed" },
      { value: "15yr",  label: "Design Experience" },
      { value: "100%", label: "CMDA Approval Rate" },
    ],
    overviewHeading: "Architecture that Begins with <em>Clarity of Intent</em>",
    overview: `Good design is not decoration — it is the precise resolution of complex human needs into livable, buildable space. Diqra Architects approaches every design and planning brief with a methodical rigour that moves from your vision through spatial studies, regulatory compliance, and into construction documentation.\n\nWe work on residential homes, apartment complexes, commercial buildings, and mixed-use developments across Chennai and Tamil Nadu. Our in-house team handles everything from site analysis and concept design to working drawings, structural coordination, and building approval submissions — giving you a single point of accountability from first conversation to final stamp.\n\nEvery plan we produce is drawn with awareness of how people will actually live and move through it — not just how it looks on paper.`,
    overviewAside: `
      <strong>Studio Location</strong>
      Urapakkam, Chennai · Tamil Nadu
      <strong>Services Included</strong>
      Site Analysis · Concept Design · Floor Plans · 3D Massing · Working Drawings · Approval Drawings
      <strong>Regulatory Support</strong>
      CMDA · DTCP · Panchayat · Local Body
      <strong>Scales</strong>
      Individual Plots · Apartments · Commercial · Mixed-Use
    `,
    features: [
      {
        title: "Site Analysis & Feasibility",
        desc: "Before a single line is drawn, we study your site's orientation, soil conditions, FSI/FAR, setback requirements, and neighbourhood character to establish what is possible — and what is optimal.",
        img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
      },
      {
        title: "Concept & Spatial Design",
        desc: "We translate your brief into spatial arrangements that feel intuitive — efficient circulation, generous proportions, natural light in the right rooms, and a layout that supports how you actually live.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Working & Approval Drawings",
        desc: "Complete construction documentation — floor plans, sections, elevations, structural layouts, electrical schematics — prepared to CMDA, DTCP, and local body standards for smooth approval.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "3D Visualisation & Walkthroughs",
        desc: "Interactive 3D models and rendered walkthroughs so you can experience the spatial quality of your home or building before construction begins — and make informed changes early, not late.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Brief & Discovery",        desc: "Understanding your programme, budget, timeline, lifestyle needs, and any regulatory constraints on the site." },
      { step: "02", title: "Site Analysis",            desc: "Survey, orientation study, FSI calculation, setback mapping, and neighbourhood context review." },
      { step: "03", title: "Concept Design",           desc: "Multiple spatial layout options presented as plans and 3D massing models for your review and feedback." },
      { step: "04", title: "Design Development",       desc: "Refining the preferred concept into detailed floor plans, sections, elevations, and a resolved 3D model." },
      { step: "05", title: "Approval Drawings",        desc: "CMDA/DTCP-standard documentation prepared and submitted with full follow-up until approval is granted." },
      { step: "06", title: "Construction Documents",   desc: "Contractor-ready working drawings including structural, electrical, plumbing, and finishing schedules." },
    ],
    faqs: [
      {
        q: "What is included in an architectural design and planning service?",
        a: "Our service covers site analysis, concept design, floor plans, 3D visualisation, working drawings, CMDA/DTCP approval drawings, and coordination with structural engineers. We manage the complete documentation journey.",
      },
      {
        q: "How long does it take to get CMDA building approval in Chennai?",
        a: "Standard residential approvals under the Online Building Plan Approval System (OBPAS) typically take 30–90 days depending on the plot, zone, and submission completeness. Our team prepares complete documentation to avoid delays.",
      },
      {
        q: "Can you design a house for a small plot in Chennai?",
        a: "Yes. We specialise in maximising livable space on constrained urban plots — including narrow sites, corner plots, and irregular shapes — while meeting all setback and FSI requirements.",
      },
      {
        q: "Do you handle structural engineering as well?",
        a: "We coordinate closely with licensed structural engineers and can recommend experienced partners. The architectural and structural drawings are integrated into a single coordinated set for your contractor.",
      },
    ],
    relatedServices: [
      { slug: "exterior-design",   title: "Exterior Design",     hint: "Bold façades · Chennai" },
      { slug: "consultation",      title: "Consultation",        hint: "Expert guidance" },
      { slug: "interior-design",   title: "Interior Design",     hint: "Refined interiors" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     03 — CONSULTATION
  ══════════════════════════════════════════════════════════ */
  "consultation": {
    title: "Consultation",
    titleLine1: "Architectural",
    titleLine2: "Consultation",
    metaTitle: "Architectural Consultation in Chennai | Diqra Architects",
    metaDescription:
      "Get expert architectural consultation in Chennai from Diqra Architects. We help you make confident design, planning, and construction decisions before you commit.",
    subtitle:
      "Confident decisions begin with clarity. We give you the expert perspective you need — without bias, without agenda.",
    statsQuote: "The right question asked early saves months of expensive revision.",
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
    stats: [
      { value: "500+", label: "Consultations Delivered" },
      { value: "15+",  label: "Years of Practice" },
      { value: "100%", label: "Independent Advice" },
    ],
    overviewHeading: "Expertise You Can <em>Act On</em>",
    overview: `Most architectural mistakes are made before a single drawing is produced — in the choice of plot, the builder, the design brief, or the structural system. A focused consultation with Diqra Architects gives you access to 15 years of hands-on practice before you commit to anything.\n\nWe offer pre-project consultations for plot buyers, design reviews for clients who already have plans, builder assessment sessions, and ongoing advisory support for self-builders managing their own construction. Our advice is independent — we are not aligned with any contractor, material supplier, or bank.\n\nAvailable in-studio at Urapakkam, on-site anywhere in Tamil Nadu, or as a video consultation.`,
    overviewAside: `
      <strong>Formats</strong>
      In-Studio · On-Site · Video Call
      <strong>Common Topics</strong>
      Plot Assessment · Design Review · Builder Vetting · Regulatory Guidance · Budget Planning
      <strong>Duration</strong>
      60–120 minute sessions
      <strong>Independence</strong>
      No contractor or supplier affiliations
    `,
    features: [
      {
        title: "Pre-Purchase Plot Assessment",
        desc: "Before buying a plot, let us evaluate its FSI potential, setbacks, road access, soil suitability, flood risk, and neighbourhood character — so you buy with complete confidence.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Existing Plan Review",
        desc: "Already have drawings from another architect or contractor? We review them for spatial efficiency, regulatory compliance, construction feasibility, and hidden cost risks — giving you an honest second opinion.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Builder & Contractor Guidance",
        desc: "We help you evaluate builder proposals, understand contract terms, set quality benchmarks, and know what to check on-site — protecting you from common construction pitfalls.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Ongoing Construction Advisory",
        desc: "For self-managed builds, we offer periodic review visits and phone/video advisory support to ensure your project stays true to design intent throughout construction.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Initial Enquiry",          desc: "Tell us your project stage, key questions, and the format you prefer — studio, site, or video." },
      { step: "02", title: "Session Preparation",      desc: "We review any drawings, photos, or documents you share before the session to maximise the time together." },
      { step: "03", title: "Consultation Session",     desc: "A focused 60–120 minute session covering your specific questions with honest, independent advice." },
      { step: "04", title: "Written Summary",          desc: "A clear written record of our key findings, recommendations, and next steps — within 48 hours." },
      { step: "05", title: "Follow-Up Support",        desc: "Continued access via email for one week after the session for any follow-up questions." },
    ],
    faqs: [
      {
        q: "What is an architectural consultation and who needs it?",
        a: "An architectural consultation is a focused advice session with an experienced architect covering your specific questions — whether you are buying a plot, reviewing existing plans, evaluating a builder, or planning a renovation. It is useful at any project stage.",
      },
      {
        q: "How much does an architectural consultation cost in Chennai?",
        a: "Consultation fees depend on the format and duration. Please contact us directly for current rates. The cost of a good consultation is almost always far less than the cost of correcting a mistake made without it.",
      },
      {
        q: "Can you review a building plan prepared by another architect?",
        a: "Yes. We provide independent design reviews and offer honest, constructive feedback on existing drawings — checking for regulatory compliance, spatial efficiency, construction feasibility, and budget alignment.",
      },
      {
        q: "Do you offer on-site consultation in Chennai?",
        a: "Yes. We visit sites anywhere in Greater Chennai and across Tamil Nadu. On-site consultations are particularly useful for plot assessments, construction quality reviews, and renovation planning.",
      },
    ],
    relatedServices: [
      { slug: "design-planning",   title: "Design & Planning",   hint: "Full design service" },
      { slug: "renovation",        title: "Renovation",          hint: "Reimagining existing spaces" },
      { slug: "exterior-design",   title: "Exterior Design",     hint: "Bold façades · Chennai" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     04 — INTERIOR DESIGN
  ══════════════════════════════════════════════════════════ */
  "interior-design": {
    title: "Interior Design",
    titleLine1: "Interior",
    titleLine2: "Design",
    metaTitle: "Interior Design Services in Chennai | Diqra Architects",
    metaDescription:
      "Diqra Architects creates interiors that feel balanced, elegant, and purposeful — residential and commercial interior design in Chennai, Tamil Nadu.",
    subtitle:
      "Spaces that feel balanced, elegant, and purposeful — where every element is considered and nothing is accidental.",
    statsQuote: "An interior should feel inevitable — as if it could not have been any other way.",
    hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2058",
    stats: [
      { value: "80+",  label: "Interiors Completed" },
      { value: "15+",  label: "Years Active" },
      { value: "2",    label: "Cities Active" },
    ],
    overviewHeading: "Interiors Built Around <em>How You Live</em>",
    overview: `Interior design at Diqra Architects begins with understanding — how you move through your home, where natural light falls at different times of day, what materials age well in Chennai's climate, and what your aesthetic instincts are telling you even when you cannot articulate them.\n\nWe design residential interiors — living rooms, bedrooms, kitchens, bathrooms, and home offices — alongside commercial interiors for offices, boutiques, and hospitality spaces. Our process moves from spatial planning and mood boarding through material selection, custom joinery design, lighting design, and final styling.\n\nEvery interior we produce is tailored to the specific architecture it inhabits. We do not apply standard packages — every project is designed from scratch.`,
    overviewAside: `
      <strong>Studio Location</strong>
      Urapakkam, Chennai · Tamil Nadu
      <strong>Interior Types</strong>
      Residential · Office · Hospitality · Boutique Retail
      <strong>Services Included</strong>
      Space Planning · Mood Boards · Material Selection · Joinery Design · Lighting · Styling
      <strong>Coordination</strong>
      Civil Works · Electrical · Plumbing Integration
    `,
    features: [
      {
        title: "Space Planning & Layout",
        desc: "We resolve the interior plan for optimal flow, proportion, and usability — placing furniture, storage, and circulation paths so the space feels effortless to inhabit.",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
      },
      {
        title: "Material & Finish Selection",
        desc: "Flooring, wall finishes, ceiling treatments, and hardware — curated into a cohesive material palette that is visually refined, durable, and appropriate to Chennai's humidity and temperature range.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Custom Joinery & Furniture",
        desc: "Wardrobes, kitchen cabinetry, TV units, bookshelves, and bed frames designed as bespoke pieces — not catalogue selections — ensuring every millimetre serves your space.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Lighting Design",
        desc: "Ambient, task, and accent lighting layers designed to transform a room across morning, afternoon, and evening — using a mix of natural light maximisation and artificial lighting specification.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Discovery Session",        desc: "Understanding how you use each room, your lifestyle, aesthetic preferences, and any specific functional requirements." },
      { step: "02", title: "Concept & Mood Board",     desc: "Visual reference boards establishing the design language — palette, texture, tone, material mood, and furniture style." },
      { step: "03", title: "Space Plan & 3D Model",    desc: "Detailed floor plan with furniture layout and a full 3D interior model for spatial review." },
      { step: "04", title: "Material Specification",   desc: "Complete material schedule with supplier references, samples, and budget breakdown." },
      { step: "05", title: "Joinery & Furniture Design", desc: "Custom design drawings for all built-in joinery elements — ready for carpenter fabrication." },
      { step: "06", title: "Site Supervision",         desc: "Periodic visits during civil and carpentry works to ensure execution matches the design intent." },
    ],
    faqs: [
      {
        q: "What is included in Diqra's interior design service in Chennai?",
        a: "Our service covers space planning, mood boarding, material and finish selection, custom joinery design, lighting design, and site supervision. We manage the complete interior design journey from concept to completion.",
      },
      {
        q: "How much does interior design cost in Chennai?",
        a: "Interior design fees vary based on the size of the space and scope of work. We offer transparent, phase-based fees with no hidden costs. Contact us for a tailored estimate.",
      },
      {
        q: "Do you design interiors for apartments in Chennai?",
        a: "Yes. We design interiors for apartments, independent houses, villas, and commercial spaces across Chennai. We work with both new builds and existing homes undergoing renovation.",
      },
      {
        q: "How long does an interior design project take in Chennai?",
        a: "Design development typically takes 3–6 weeks. Construction and fit-out timelines depend on the scope — a full home interior typically takes 3–5 months from design approval to completion.",
      },
    ],
    relatedServices: [
      { slug: "exterior-design",   title: "Exterior Design",     hint: "Bold façades · Chennai" },
      { slug: "renovation",        title: "Renovation",          hint: "Reimagining existing spaces" },
      { slug: "design-planning",   title: "Design & Planning",   hint: "Architectural planning" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     05 — RENOVATION
  ══════════════════════════════════════════════════════════ */
  "renovation": {
    title: "Renovation",
    titleLine1: "Space",
    titleLine2: "Renovation",
    metaTitle: "Home & Building Renovation Services in Chennai | Diqra Architects",
    metaDescription:
      "Diqra Architects reimagines existing homes and buildings with sensitive, modern renovation design in Chennai — structural, interior, and exterior renovation across Tamil Nadu.",
    subtitle:
      "Reimagining existing spaces with architectural sensitivity, structural clarity, and modern intention.",
    statsQuote: "The best renovation is invisible — it feels like the building was always this way.",
    hero: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=2074",
    stats: [
      { value: "60+",  label: "Renovations Completed" },
      { value: "15yr", label: "Renovation Experience" },
      { value: "∞",    label: "Possibilities" },
    ],
    overviewHeading: "Renovation That <em>Respects the Past</em>, Builds the Future",
    overview: `Renovation is the most demanding discipline in architecture — you must work within the constraints of an existing structure while delivering the spatial and aesthetic quality of a new build. At Diqra Architects, we approach every renovation project with both analytical rigour and design sensitivity.\n\nWe handle structural alterations, interior renovations, exterior refurbishments, and full home makeovers for residential and commercial buildings across Chennai and Tamil Nadu. Before any design work begins, we assess the existing building's structural condition, services layout, and regulatory status — so there are no surprises during construction.\n\nOur renovation projects range from single-room transformations to complete building overhauls for properties that needed to become something they were not before.`,
    overviewAside: `
      <strong>Renovation Types</strong>
      Interior · Exterior · Structural · Full Building
      <strong>Building Types</strong>
      Residential Homes · Apartments · Commercial · Heritage
      <strong>Included Services</strong>
      Structural Assessment · Design · Documentation · Contractor Coordination · Site Supervision
      <strong>Coverage</strong>
      Chennai · Tamil Nadu
    `,
    features: [
      {
        title: "Structural Alteration & Extension",
        desc: "Wall removals, room additions, floor extensions, and roof modifications — coordinated with licensed structural engineers and executed within CMDA/DTCP regulations.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
      {
        title: "Interior Renovation & Refit",
        desc: "Complete interior overhauls including new flooring, ceiling redesign, kitchen and bathroom remodelling, custom joinery, and fresh material palettes that transform how a space feels.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Exterior Refurbishment",
        desc: "New cladding, paint systems, window replacement, compound wall redesign, and landscaping updates that give an ageing building a renewed presence without losing its character.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Phased Renovation Planning",
        desc: "For clients who want to spread costs, we plan renovations in logical phases — so each stage is complete in itself and the building improves steadily without disruption to occupants.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Existing Building Survey",  desc: "A thorough as-built survey documenting current structural, spatial, and services conditions." },
      { step: "02", title: "Brief & Design Goals",      desc: "Understanding what you want the renovated space to become — functionally, aesthetically, and structurally." },
      { step: "03", title: "Design Development",        desc: "Renovation design drawings showing proposed changes against the existing condition." },
      { step: "04", title: "Regulatory Check",          desc: "Verifying that proposed structural and spatial changes comply with current CMDA/DTCP regulations." },
      { step: "05", title: "Contractor Procurement",    desc: "Helping you identify and appoint experienced renovation contractors with relevant track records." },
      { step: "06", title: "Site Supervision",          desc: "Regular site visits to ensure works are being carried out accurately and to specification." },
    ],
    faqs: [
      {
        q: "Do I need planning approval for a home renovation in Chennai?",
        a: "It depends on the nature of changes. Internal renovations without structural alteration typically do not require CMDA approval. Structural changes, extensions, or exterior modifications to the building footprint may require formal approval. We assess this for every project.",
      },
      {
        q: "How long does a full home renovation take in Chennai?",
        a: "A full residential renovation typically takes 3–6 months from design approval to completion, depending on the extent of structural work and finish quality. We provide detailed project schedules before work begins.",
      },
      {
        q: "Can you renovate an old house in Chennai while we are still living in it?",
        a: "Yes. We plan phased renovations that allow occupants to remain in the building during works — sequencing room-by-room so your disruption is minimised.",
      },
      {
        q: "Do you handle both design and contractor coordination for renovations?",
        a: "Yes. We provide complete renovation services from design through to contractor appointment, site supervision, and completion — giving you a single point of responsibility throughout.",
      },
    ],
    relatedServices: [
      { slug: "interior-design",   title: "Interior Design",     hint: "Refined interiors · Chennai" },
      { slug: "exterior-design",   title: "Exterior Design",     hint: "Façade refurbishment" },
      { slug: "consultation",      title: "Consultation",        hint: "Renovation advice session" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     06 — ARCHITECTS (SEO category page)
  ══════════════════════════════════════════════════════════ */
  "architects": {
    title: "Architects in Chennai",
    titleLine1: "Architects",
    titleLine2: "in Chennai",
    metaTitle: "Best Architects in Chennai | Diqra Architects – Urapakkam",
    metaDescription:
      "Diqra Architects — award-winning architects in Chennai specialising in residential, commercial, and institutional design. CMDA-approved projects across Tamil Nadu.",
    subtitle:
      "Intentional, grounded architecture shaped by cultural richness and refined craftsmanship — built for Chennai and Tamil Nadu.",
    statsQuote: "Architecture is the will of an epoch translated into space.",
    hero: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
    stats: [
      { value: "100+", label: "Projects Delivered" },
      { value: "15+",  label: "Years of Practice" },
      { value: "3",    label: "States Served" },
    ],
    overviewHeading: "Chennai Architects Designing <em>With Intent</em>",
    overview: `Diqra Architects is an architecture studio based in Urapakkam, Chennai — practising intentional, culturally rooted design across residential, commercial, and institutional project types in Tamil Nadu.\n\nFounded on the belief that great architecture must be grounded — in site, in climate, in the lives of its occupants — we have delivered over 100 projects across Chennai, Trichy, Chengalpattu, and beyond. Our practice encompasses architectural design, interior design, landscape, and construction supervision.\n\nWe are registered with the Council of Architecture and maintain full compliance with CMDA and DTCP regulatory frameworks across Tamil Nadu. Every project we undertake is led by a principal architect from first brief to final handover.`,
    overviewAside: `
      <strong>Studio</strong>
      Urapakkam, Chennai · Tamil Nadu
      <strong>Registration</strong>
      Council of Architecture, India
      <strong>Project Types</strong>
      Residential · Commercial · Institutional · Mixed-Use
      <strong>Regulatory Expertise</strong>
      CMDA · DTCP · Panchayat · Local Body
    `,
    features: [
      {
        title: "Residential Architecture",
        desc: "Custom homes, villas, and apartments designed around the way families in Chennai actually live — accounting for joint family dynamics, climate, local building culture, and long-term value.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Commercial Architecture",
        desc: "Offices, retail spaces, showrooms, and mixed-use buildings designed for performance, brand expression, and long-term flexibility — built to Chennai's regulatory and structural standards.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Regulatory Approval & Compliance",
        desc: "Complete CMDA, DTCP, and local body documentation prepared by our in-house team — with a 100% approval rate across all submitted projects in Tamil Nadu.",
        img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
      },
      {
        title: "Construction Supervision",
        desc: "Principal architect-led site supervision throughout construction — ensuring quality, accuracy, and adherence to design intent from foundation to finishing.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Initial Consultation",     desc: "A free first conversation about your project, site, timeline, and aspirations." },
      { step: "02", title: "Site Analysis & Brief",    desc: "Site visit, survey, and a written design brief agreed with you before design begins." },
      { step: "03", title: "Concept Design",           desc: "Spatial concepts presented as plans, sections, and 3D massing for your review." },
      { step: "04", title: "Design Development",       desc: "Fully resolved drawings, 3D visualisation, and material palette." },
      { step: "05", title: "Approval & Documentation", desc: "CMDA/DTCP submission and complete construction documentation." },
      { step: "06", title: "Construction to Handover", desc: "Contractor coordination and site supervision through to key handover." },
    ],
    faqs: [
      {
        q: "How do I choose the right architect in Chennai?",
        a: "Look for a registered architect (Council of Architecture) with relevant project experience, a clearly articulated design philosophy, transparent fee structures, and a track record of CMDA/DTCP approvals. Ask to speak to past clients and visit completed projects before committing.",
      },
      {
        q: "What do architects in Chennai typically charge?",
        a: "Architectural fees in Chennai are typically quoted as a percentage of construction cost (5–10%) or as a fixed fee based on project scope. Diqra Architects provides transparent, milestone-based fee proposals tailored to each project.",
      },
      {
        q: "Do I need an architect to build a house in Chennai?",
        a: "Yes. CMDA and DTCP require drawings prepared and signed by a registered architect for building plan approval. Beyond compliance, an architect adds significant value through design quality, cost optimisation, and construction oversight.",
      },
      {
        q: "Are Diqra Architects registered with the Council of Architecture?",
        a: "Yes. Diqra Architects is fully registered with the Council of Architecture, India, and all drawings are prepared and signed by registered architects in compliance with Tamil Nadu building regulations.",
      },
      {
        q: "Do Diqra Architects work outside Chennai?",
        a: "Yes. We have completed projects in Trichy, Chengalpattu, Ambattur, and other locations across Tamil Nadu. We also take on projects in other states — contact us to discuss your location.",
      },
    ],
    relatedServices: [
      { slug: "architects-for-residential", title: "Residential Architects", hint: "Custom homes · Chennai" },
      { slug: "interior-designers",         title: "Interior Designers",     hint: "Refined interiors" },
      { slug: "design-planning",            title: "Design & Planning",      hint: "Concept to blueprint" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     07 — INTERIOR DESIGNERS (SEO)
  ══════════════════════════════════════════════════════════ */
  "interior-designers": {
    title: "Interior Designers in Chennai",
    titleLine1: "Interior Designers",
    titleLine2: "in Chennai",
    metaTitle: "Best Interior Designers in Chennai | Diqra Architects",
    metaDescription:
      "Diqra Architects offers boutique, editorial-style interior design in Chennai — residential and commercial interiors designed from scratch, not from a catalogue.",
    subtitle:
      "Boutique, editorial-style interiors for modern homes and commercial spaces — designed specifically for how you live.",
    statsQuote: "The best interiors are not designed to impress visitors. They are designed for the people who live in them.",
    hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=2058",
    stats: [
      { value: "80+",  label: "Interiors Delivered" },
      { value: "15+",  label: "Years of Practice" },
      { value: "0",    label: "Standard Packages" },
    ],
    overviewHeading: "Interior Design That <em>Starts With You</em>",
    overview: `Diqra Architects is a Chennai-based interior design practice that creates spaces from scratch — no standard packages, no catalogue selections, no templated outcomes. Every interior we design begins with a deep understanding of the people who will inhabit it.\n\nOur interior design service covers residential homes across Chennai — living rooms, bedrooms, kitchens, bathrooms, and home offices — alongside commercial interiors for offices, boutiques, and hospitality venues. We handle the complete journey from spatial planning and mood boarding through to material specification, custom joinery design, lighting, and site supervision.\n\nOur work is characterised by restraint, material quality, and the kind of spatial calm that only comes from thorough design — not decoration.`,
    overviewAside: `
      <strong>Interior Types</strong>
      Residential · Office · Hospitality · Retail
      <strong>Services</strong>
      Space Planning · Mood Boards · Custom Joinery · Lighting · Material Selection · Styling
      <strong>Studio</strong>
      Urapakkam, Chennai · Tamil Nadu
      <strong>Approach</strong>
      Bespoke design · No standard packages
    `,
    features: [
      {
        title: "Bespoke Residential Interiors",
        desc: "Every room designed around your lifestyle, your family structure, and your aesthetic — not around a showroom display. Cohesive, personalised, and built to last.",
        img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
      },
      {
        title: "Custom Joinery & Furniture",
        desc: "Wardrobes, kitchens, TV units, bookshelves — all designed as architectural elements tailored to your room dimensions and your storage needs.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "Material Curation",
        desc: "A cohesive palette of flooring, wall finishes, hardware, and soft furnishings — sourced for quality, climate suitability, and visual refinement.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Lighting Design",
        desc: "A three-layer lighting strategy — ambient, task, and accent — that transforms how each room feels from morning to evening.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Discovery",                desc: "Understanding your lifestyle, aesthetic sensibilities, how you use each room, and what you want the space to feel like." },
      { step: "02", title: "Concept & Mood Board",     desc: "Visual language established — palette, texture, tone, material mood, furniture style." },
      { step: "03", title: "Space Planning",           desc: "Detailed floor plan with furniture layout optimised for flow, proportion, and function." },
      { step: "04", title: "3D Visualisation",         desc: "Room-by-room 3D renders for your review and approval before any materials are specified." },
      { step: "05", title: "Material Specification",   desc: "Complete material schedule with samples, supplier references, and itemised cost breakdown." },
      { step: "06", title: "Execution & Supervision",  desc: "Contractor coordination and site visits ensuring every element is executed to specification." },
    ],
    faqs: [
      {
        q: "What should I look for in an interior designer in Chennai?",
        a: "Look for demonstrated experience with similar project types, a clear design process, transparent pricing, and a portfolio that reflects a distinct aesthetic sensibility rather than generic catalogue selections. Ask for references from completed projects.",
      },
      {
        q: "How much does interior design cost in Chennai?",
        a: "Interior design fees vary by scope — from design-only consulting to full turnkey execution including materials and contracting. Diqra Architects provides itemised, transparent fee proposals for each project.",
      },
      {
        q: "How long does interior design take in Chennai?",
        a: "Design development typically takes 4–8 weeks. Execution timelines depend on scope — a single room typically takes 6–10 weeks; a full home interior typically 3–6 months from design approval.",
      },
      {
        q: "Do you offer modular kitchen design in Chennai?",
        a: "We design custom kitchens tailored to your space — including layout planning, material selection, appliance integration, and joinery specification. We coordinate with skilled carpenters and modular manufacturers based on what best serves your project.",
      },
    ],
    relatedServices: [
      { slug: "interior-design",             title: "Interior Design",            hint: "Our core interior service" },
      { slug: "interior-designers-for-office", title: "Office Interior Designers", hint: "Workplace design · Chennai" },
      { slug: "renovation",                  title: "Renovation",                  hint: "Full home makeovers" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     08 — BUILDING CONTRACTORS
  ══════════════════════════════════════════════════════════ */
  "phone-building-contractors": {
    title: "Building Contractors in Chennai",
    titleLine1: "Building",
    titleLine2: "Contractors",
    metaTitle: "Building Contractors in Chennai | Diqra Architects – Turnkey Construction",
    metaDescription:
      "Diqra Architects provides design-led turnkey building contractor services in Chennai — from blueprint to key handover for residential and commercial projects in Tamil Nadu.",
    subtitle:
      "Turnkey construction from blueprint to final key handover — design and delivery unified under one roof.",
    statsQuote: "A building is only as good as the hands that built it and the mind that guided them.",
    hero: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
    stats: [
      { value: "100+", label: "Projects Completed" },
      { value: "15+",  label: "Years in Practice" },
      { value: "100%", label: "On-Spec Delivery" },
    ],
    overviewHeading: "Design-Led Construction <em>Without Compromise</em>",
    overview: `Finding a reliable building contractor in Chennai who also brings architectural discipline to site management is rare. Diqra Architects bridges that gap — offering design-led construction oversight that ensures what is built matches what was designed, to the millimetre.\n\nWe coordinate with vetted construction contractors for residential homes, apartments, and commercial buildings across Chennai and Tamil Nadu. Our involvement as your architect and construction manager means your builder has a principal point of design authority on site at every critical stage — from foundation checks and structural pour reviews to finishing and handover inspections.\n\nFor clients who want a single point of accountability from concept to completion, our turnkey delivery model handles everything.`,
    overviewAside: `
      <strong>Delivery Model</strong>
      Design + Construction Supervision · Full Turnkey
      <strong>Project Types</strong>
      Residential · Commercial · Institutional
      <strong>Coverage</strong>
      Chennai · Greater Tamil Nadu
      <strong>Contractor Network</strong>
      Vetted · Experienced · Quality-Assured
    `,
    features: [
      {
        title: "Design-to-Build Continuity",
        desc: "The architects who designed your building also supervise its construction — eliminating interpretation gaps between drawing and reality that cost time and money.",
        img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200",
      },
      {
        title: "Contractor Vetting & Appointment",
        desc: "We identify, evaluate, and appoint construction contractors with the right experience profile for your project — and manage their contracts on your behalf.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "Quality Assurance at Every Stage",
        desc: "Structured site inspections at foundation, structural, masonry, finishing, and pre-handover stages — with written reports and photographic records.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
      {
        title: "Cost & Schedule Management",
        desc: "Detailed bills of quantities, contractor payment schedules, and budget tracking — so you always know where your money is going and when each phase will be complete.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
    ],
    process: [
      { step: "01", title: "Design Completion",         desc: "Full architectural and structural documentation before any contractor is appointed." },
      { step: "02", title: "Tender & Appointment",      desc: "Competitive tender process with vetted contractors; transparent evaluation and appointment." },
      { step: "03", title: "Foundation & Structure",    desc: "Principal architect inspection at all critical structural stages." },
      { step: "04", title: "Masonry & Services",        desc: "Review of brickwork, concrete finishes, electrical, plumbing, and waterproofing." },
      { step: "05", title: "Finishing Works",           desc: "Plastering, tiling, joinery, painting, and fixture installation checked against specification." },
      { step: "06", title: "Handover Inspection",       desc: "Final snag list, rectification, and key handover with complete documentation." },
    ],
    faqs: [
      {
        q: "How do I find a good building contractor in Chennai?",
        a: "Look for contractors with completed projects you can physically inspect, verifiable references, a clear written contract, and experience with CMDA/DTCP regulatory requirements. Working through an architect who can vet and supervise the contractor adds a critical layer of quality assurance.",
      },
      {
        q: "What is a turnkey building contract in Chennai?",
        a: "A turnkey contract means a single party is responsible for delivering the completed building — from design and approvals through to construction and handover. Diqra Architects offers design-led turnkey delivery for residential and commercial projects.",
      },
      {
        q: "How much does building construction cost per square foot in Chennai?",
        a: "Construction costs in Chennai typically range from ₹1,800 to ₹3,500+ per sq ft depending on specification level, materials, and structural complexity. We provide detailed cost estimates based on your specific design before construction begins.",
      },
      {
        q: "Can Diqra Architects manage my construction project even if another architect drew the plans?",
        a: "Yes. We offer standalone construction supervision and project management services for clients who have existing approved plans and want professional architect-led oversight of their build.",
      },
    ],
    relatedServices: [
      { slug: "architects",              title: "Architects in Chennai",  hint: "Design-first practice" },
      { slug: "civil-contractors",       title: "Civil Contractors",      hint: "Heavy civil works" },
      { slug: "residential-builders",    title: "Residential Builders",   hint: "Custom homes · Chennai" },
    ],
  },

  /* ══════════════════════════════════════════════════════════
     09 — ARCHITECTS FOR RESIDENTIAL
  ══════════════════════════════════════════════════════════ */
  "architects-for-residential": {
    title: "Residential Architects in Chennai",
    titleLine1: "Residential",
    titleLine2: "Architects",
    metaTitle: "Residential Architects in Chennai | Diqra Architects",
    metaDescription:
      "Diqra Architects designs custom residential homes, villas, and apartments in Chennai and Tamil Nadu — architecture that reflects your lifestyle, your family, and your site.",
    subtitle:
      "Custom homes and villas designed around the way your family lives — not around a builder's standard template.",
    statsQuote: "A home is not a product. It is the backdrop to every important moment in a life.",
    hero: "https://www.diqraarchitects.com/HeroMain.webp",
    stats: [
      { value: "80+",  label: "Homes Designed" },
      { value: "15+",  label: "Years Active" },
      { value: "4",    label: "Districts Served" },
    ],
    overviewHeading: "Residential Architecture Built Around <em>Your Life</em>",
    overview: `Designing a home is the most personal commission an architect receives. At Diqra Architects, we approach every residential project as a study in the specific life that will unfold within it — the family structure, the daily rhythms, the relationship with outdoor space, and the cultural values that inform how a home should feel.\n\nWe design individual houses, duplex homes, villas, and small apartment buildings across Chennai and Tamil Nadu — handling everything from initial site analysis and concept design through to CMDA approval documentation and construction supervision.\n\nOur residential portfolio spans Ayapakkam, Trichy, Chengalpattu, Ambattur, and Urapakkam — each project tailored entirely to its occupants and its site.`,
    overviewAside: `
      <strong>Residential Types</strong>
      Independent Houses · Duplex · Villas · Apartments
      <strong>Location Coverage</strong>
      Chennai Metro · Trichy · Chengalpattu · Tamil Nadu
      <strong>Services</strong>
      Design · Planning · 3D Visualisation · CMDA Approval · Construction Supervision
      <strong>Minimum Plot</strong>
      600 sq ft and above
    `,
    features: [
      {
        title: "Site-Specific Design",
        desc: "Every home we design begins with a thorough reading of the plot — its orientation, prevailing wind, neighbouring structures, and the quality of light at different times of day. The building grows from the site, not despite it.",
        img: "https://www.diqraarchitects.com/HeroMain.webp",
      },
      {
        title: "Family-Centred Spatial Planning",
        desc: "We plan homes around how families in Tamil Nadu actually live — accommodating joint family arrangements, extended family visits, indoor-outdoor living, and the specific cultural rhythms of daily life.",
        img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200",
      },
      {
        title: "3D Visualisation Before Construction",
        desc: "Photorealistic renders of every key space — exterior, living room, master bedroom, kitchen — so you can make material and layout decisions with full visual confidence before work begins.",
        img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200",
      },
      {
        title: "End-to-End Project Management",
        desc: "From CMDA approval to final snagging, we remain your single point of contact — coordinating architects, structural engineers, MEP consultants, and construction contractors.",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
      },
    ],
    process: [
      { step: "01", title: "First Consultation",        desc: "We meet to understand your family, your plot, your timeline, and your idea of home." },
      { step: "02", title: "Site Survey & Analysis",    desc: "Physical site survey with orientation study, FSI calculation, and setback mapping." },
      { step: "03", title: "Concept Design",            desc: "2–3 spatial concepts presented as floor plans, sections, and 3D massing for your feedback." },
      { step: "04", title: "Design Development & 3D",   desc: "Fully resolved design with photorealistic renders of key spaces." },
      { step: "05", title: "CMDA Approval",             desc: "Complete approval drawings prepared and submitted on your behalf." },
      { step: "06", title: "Construction to Handover",  desc: "Contractor coordination, site supervision, and key handover." },
    ],
    faqs: [
      {
        q: "How much does it cost to build a house in Chennai with an architect?",
        a: "Construction costs typically range from ₹1,800–₹3,500+ per sq ft in Chennai depending on specification. Architectural fees are additional and are quoted transparently based on project scope. Engaging an architect typically saves money overall through better design decisions and construction oversight.",
      },
      {
        q: "How long does it take to design and build a house in Chennai?",
        a: "Design and CMDA approval typically takes 3–5 months. Construction takes 12–24 months depending on house size and specification. We provide a detailed project programme at the start of every project.",
      },
      {
        q: "Can I build a house in Chennai on a small plot?",
        a: "Yes. We design homes on plots from 600 sq ft and above, maximising every square metre within CMDA setback and FSI constraints. Small plot design is one of our specialisations.",
      },
      {
        q: "Do Diqra Architects work in areas outside Chennai city?",
        a: "Yes. We have completed residential projects in Trichy, Chengalpattu, Ambattur, and other districts of Tamil Nadu. We also accept projects in other states.",
      },
    ],
    relatedServices: [
      { slug: "architects",            title: "Architects in Chennai",    hint: "Full-service practice" },
      { slug: "interior-designers",    title: "Interior Designers",       hint: "Refined interiors" },
      { slug: "building-contractors",  title: "Building Contractors",     hint: "Turnkey construction" },
    ],
  },

};

/* ─────────────────────────────────────────────────────────────
   Helper — get data for a slug with safe fallback
───────────────────────────────────────────────────────────── */
export function getServiceData(slug) {
  return servicesData[slug] || null;
}

/* ─────────────────────────────────────────────────────────────
   All slugs list — useful for generateStaticParams()
───────────────────────────────────────────────────────────── */
export const allServiceSlugs = Object.keys(servicesData);
