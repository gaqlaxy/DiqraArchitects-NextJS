// export const categories = [
//   {
//     slug: "civil-contractors",
//     title: "Civil Contractors",
//     tagline: "Building Foundations for a Sustainable Future", // From Justdial
//     image:
//       "https://images.unsplash.com/photo-1592818993411-eba55f84e788?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:
//       "Expert civil engineering and contracting services for residential and commercial projects.",
//   },
//   {
//     slug: "builders-and-developers",
//     title: "Builders and Developers",
//     tagline: "Crafting Spaces, Inspiring Lives",
//     image:
//       "https://images.unsplash.com/photo-1592818993411-eba55f84e788?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

//     description: "Premier real estate development and architectural mastery.",
//   },
//   // Add all 40+ categories here...
// ];


// export const categories = [
//   {
//     slug: "civil-contractors",
//     title: "Civil Contractors",
//     tagline: "Precision Engineering. Timeless Infrastructure.",
//     description: "Leading the way in heavy civil construction and infrastructure development with a focus on durability and modern design.",
//     image: "/images/services/civil-contractors.jpg",
//     thumbnail: "/images/services/civil-contracors.jpg", // For SEO/Social sharing
//   },
//   {
//     slug: "builders-and-developers",
//     title: "Builders and Developers",
//     tagline: "Designing Spaces Where Life Happens.",
//     description: "Crafting premium residential and commercial spaces that redefine luxury and functional living.",
//     image: "/images/services/civil-contractors.jpg",
    
//     thumbnail: "/images/services/civil-contracors.jpg",
//   },
//   // Add the remaining 38+ categories here...
// ];

// export const categories = [
//   {
//     slug: "civil-contractors",
//     title: "Civil Contractors",
//     tagline: "Engineering the Backbone of Modern Infrastructure.",
//     description: "Leading the way in heavy civil construction and infrastructure development. We specialize in large-scale structural integrity, earthworks, and industrial foundations that stand the test of time.",
//     image: "/images/services/civil-contractors.jpg",
//     thumbnail: "/images/services/civil-contractors.jpg",
//     // Expanded Content
//     features: [
//       { title: "Structural Reinforcement", desc: "Advanced RCC work and structural steel fabrication for high-rise stability." },
//       { title: "Earthworks & Excavation", desc: "Precision site grading, trenching, and large-scale soil stabilization." },
//       { title: "Industrial Flooring", desc: "Heavy-duty epoxy and VDF flooring solutions for warehouses and factories." }
//     ],
//     process: [
//       { step: "01", name: "Site Analysis", detail: "Comprehensive soil testing and topographical surveys." },
//       { step: "02", name: "Structural Design", detail: "BIM-integrated modeling for maximum load-bearing efficiency." },
//       { step: "03", name: "Execution", detail: "Strict adherence to IS codes and safety protocols on-site." }
//     ],
//     stats: [
//       { label: "Projects Completed", value: "150+" },
//       { label: "Concrete Poured", value: "2M cu.ft" },
//       { label: "Safety Rating", value: "99.9%" }
//     ]
//   },
//   {
//     slug: "builders-and-developers",
//     title: "Builders and Developers",
//     tagline: "Crafting Iconic Spaces, Redefining Urban Living.",
//     description: "From luxury residential enclaves to state-of-the-art commercial hubs, we bridge the gap between visionary architecture and flawless execution. We don't just build; we develop ecosystems.",
//     image: "/images/services/builders-developers.jpg",
//     thumbnail: "/images/services/builders-developers.jpg",
//     features: [
//       { title: "Turnkey Development", desc: "Complete end-to-end management from land acquisition to final handover." },
//       { title: "Sustainable Design", desc: "Integrating Green Building certifications and energy-efficient systems." },
//       { title: "Smart Interiors", desc: "AI-ready homes and office spaces with integrated IoT infrastructure." }
//     ],
//     process: [
//       { step: "01", name: "Master Planning", detail: "Zoning and architectural layout optimization." },
//       { step: "02", name: "Legal & Compliance", detail: "Seamless navigation of RERA and local municipal approvals." },
//       { step: "03", name: "Construction Mastery", detail: "Using premium materials and modular tech for rapid delivery." }
//     ],
//     stats: [
//       { label: "Total Square Footage", value: "5M+" },
//       { label: "Residential Units", value: "1200+" },
//       { label: "Premium Awards", value: "12" }
//     ]
//   }
// ];
export const categories = [
  // --- CORE CONSTRUCTION ---
  {
    slug: "construction-companies",
    title: "Construction Companies",
    tagline: "Building the Skyline of Tomorrow.",
    description: "A premier construction firm dedicated to delivering large-scale infrastructure with military-grade precision.",
    image: "/images/services/construction-companies.jpg",
    thumbnail: "/images/services/construction-companies-thumb.jpg",
    features: [{ title: "Turnkey Projects", desc: "End-to-end execution." }, { title: "Safety", desc: "OSHA compliant." }],
    process: [{ step: "01", name: "Plan", detail: "Site Analysis" }, { step: "02", name: "Build", detail: "Execution" }],
    stats: [{ label: "Projects", value: "500+" }, { label: "Years", value: "25+" }]
  },
  {
    slug: "builders-and-developers",
    title: "Builders and Developers",
    tagline: "Designing Spaces Where Life Happens.",
    description: "Crafting premium residential and commercial spaces that redefine luxury and functional living.",
    image: "/images/services/builders-and-developers.jpg",
    thumbnail: "/images/services/builders-and-developers.jpg",
    features: [{ title: "Land Acquisition", desc: "Prime locations." }, { title: "Legal", desc: "100% RERA compliant." }],
    process: [{ step: "01", name: "Master Plan", detail: "Zoning & Layout" }, { step: "02", name: "Develop", detail: "Construction" }],
    stats: [{ label: "Acres", value: "100+" }, { label: "Units", value: "1200+" }]
  },
  {
    slug: "building-contractors",
    title: "Building Contractors",
    tagline: "Execution Excellence for Every Blueprint.",
    description: "Your trusted partner for executing complex architectural designs into reality.",
    image: "/images/services/building-contractors.jpg",
    thumbnail: "/images/services/building-contractors.jpg",
    features: [{ title: "Labor", desc: "Skilled workforce." }, { title: "Material", desc: "Direct sourcing." }],
    process: [{ step: "01", name: "Quote", detail: "BOQ Estimation" }, { step: "02", name: "Build", detail: "Site work" }],
    stats: [{ label: "Contractors", value: "50+" }, { label: "On-Time", value: "99%" }]
  },
  {
    slug: "civil-contractors",
    title: "Civil Contractors",
    tagline: "Precision Engineering. Timeless Infrastructure.",
    description: "Leading the way in heavy civil construction and infrastructure development with a focus on durability.",
    image: "/images/services/civil-contractors.jpg",
    thumbnail: "/images/services/civil-contractors.jpg",
    features: [{ title: "RCC Work", desc: "Heavy structural framing." }, { title: "Foundations", desc: "Deep piling." }],
    process: [{ step: "01", name: "Survey", detail: "Soil testing" }, { step: "02", name: "Structure", detail: "Framing" }],
    stats: [{ label: "Concrete", value: "1M m3" }, { label: "Steel", value: "50k Tons" }]
  },
  {
    slug: "builders",
    title: "Builders",
    tagline: "Solid Foundations, Soaring Ambitions.",
    description: "Reliable building services for individual homes and commercial shops.",
    image: "/images/services/builders.jpg",
    thumbnail: "/images/services/builders.jpg",
    features: [{ title: "Cost Effective", desc: "Budget friendly." }, { title: "Durable", desc: "Long lasting." }],
    process: [{ step: "01", name: "Design", detail: "Floor plans" }, { step: "02", name: "Construct", detail: "Brick work" }],
    stats: [{ label: "Homes", value: "200+" }, { label: "Trust", value: "100%" }]
  },
  {
    slug: "residential-builders",
    title: "Residential Builders",
    tagline: "Where Houses Become Homes.",
    description: "Specialized in creating warm, functional, and aesthetic residential spaces.",
    image: "/images/services/residential-builders.jpg",
    thumbnail: "/images/services/residential-builders.jpg",
    features: [{ title: "Custom Homes", desc: "Tailored designs." }, { title: "Vastu", desc: "Compliant layouts." }],
    process: [{ step: "01", name: "Consult", detail: "Needs analysis" }, { step: "02", name: "Handover", detail: "Key delivery" }],
    stats: [{ label: "Villas", value: "150+" }, { label: "Families", value: "500+" }]
  },
  {
    slug: "residential-construction-companies",
    title: "Residential Construction Companies",
    tagline: "Scalable Housing Solutions.",
    description: "Focused on large-scale residential projects like gated communities and societies.",
    image: "/images/services/residential-construction-companies.jpg",
    thumbnail: "/images/services/residential-construction-companies.jpg",
    features: [{ title: "Mass Housing", desc: "Efficient build." }, { title: "Amenities", desc: "Clubhouses & Parks." }],
    process: [{ step: "01", name: "Plan", detail: "Master layout" }, { step: "02", name: "Infra", detail: "Roads & Utils" }],
    stats: [{ label: "Units", value: "1000+" }, { label: "Area", value: "2M sqft" }]
  },
  {
    slug: "commercial-builders",
    title: "Commercial Builders",
    tagline: "Spaces for Business Growth.",
    description: "Building high-performance commercial spaces including shopping complexes and offices.",
    image: "/images/services/commercial-builders.jpg",
    thumbnail: "/images/services/commercial-builders.jpg",
    features: [{ title: "High Footfall", desc: "Optimized flow." }, { title: "Facade", desc: "Glass & ACP." }],
    process: [{ step: "01", name: "Zone", detail: "FSI check" }, { step: "02", name: "Build", detail: "Shell & Core" }],
    stats: [{ label: "Malls", value: "12" }, { label: "Offices", value: "45" }]
  },
  {
    slug: "industrial-construction-companies",
    title: "Industrial Construction Companies",
    tagline: "Engineering for Industry.",
    description: "Heavy-duty construction for factories, warehouses, and manufacturing plants.",
    image: "/images/services/industrial-construction-companies.jpg",
    thumbnail: "/images/services/industrial-construction-companies.jpg",
    features: [{ title: "PEB", desc: "Pre-engineered buildings." }, { title: "Flooring", desc: "VDF/Epoxy." }],
    process: [{ step: "01", name: "Fab", detail: "Steel fabrication" }, { step: "02", name: "Erect", detail: "On-site assembly" }],
    stats: [{ label: "Factories", value: "30+" }, { label: "Warehouses", value: "50+" }]
  },
  {
    slug: "commercial-construction-companies",
    title: "Commercial Construction Companies",
    tagline: "Corporate Infrastructure Specialists.",
    description: "Dedicated to building corporate campuses and IT parks.",
    image: "/images/services/commercial-construction-companies.jpg",
    thumbnail: "/images/services/commercial-construction-companies.jpg",
    features: [{ title: "Green Building", desc: "LEED certified." }, { title: "Tech", desc: "Smart integration." }],
    process: [{ step: "01", name: "Strategy", detail: "Workplace planning" }, { step: "02", name: "Fitout", detail: "Interior finish" }],
    stats: [{ label: "IT Parks", value: "5" }, { label: "Campuses", value: "8" }]
  },

  // --- ARCHITECTS ---
  {
    slug: "architects",
    title: "Architects",
    tagline: "Visionary Design, Practical Reality.",
    description: "Transforming abstract ideas into buildable blueprints.",
    image: "/images/services/architects.jpg",
    thumbnail: "/images/services/architects.jpg",
    features: [{ title: "Concept", desc: "Initial sketches." }, { title: "3D", desc: "Realistic renders." }],
    process: [{ step: "01", name: "Brief", detail: "Client meeting" }, { step: "02", name: "Draft", detail: "CAD drawings" }],
    stats: [{ label: "Awards", value: "20+" }, { label: "Designs", value: "1000+" }]
  },
  {
    slug: "interior-designers",
    title: "Interior Designers",
    tagline: "Soulful Interiors for Modern Living.",
    description: "Creating immersive interior environments that reflect your personality.",
    image: "/images/services/interior-designers.jpg",
    thumbnail: "/images/services/interior-designers.jpg",
    features: [{ title: "Space Plan", desc: "Optimized layout." }, { title: "Decor", desc: "Curated furniture." }],
    process: [{ step: "01", name: "Moodboard", detail: "Theme selection" }, { step: "02", name: "Install", detail: "Fit-out" }],
    stats: [{ label: "Projects", value: "300+" }, { label: "Clients", value: "Happy" }]
  },
  {
    slug: "interior-designers-for-office",
    title: "Interior Designers for Office",
    tagline: "Productivity by Design.",
    description: "Office interiors that boost employee morale and brand identity.",
    image: "/images/services/interior-designers-for-office.jpg",
    thumbnail: "/images/services/interior-designers-for-office.jpg",
    features: [{ title: "Ergonomics", desc: "Comfort focus." }, { title: "Acoustics", desc: "Noise control." }],
    process: [{ step: "01", name: "Plan", detail: "Desk layout" }, { step: "02", name: "Branding", detail: "Visual identity" }],
    stats: [{ label: "Offices", value: "150+" }, { label: "Desks", value: "5000+" }]
  },
  {
    slug: "architects-for-residential",
    title: "Architects for Residential",
    tagline: "Designing Your Dream Home.",
    description: "Architectural services dedicated to individual villas and bungalows.",
    image: "/images/services/architects-for-residential.jpg",
    thumbnail: "/images/services/architects-for-residential.jpg",
    features: [{ title: "Personal", desc: "Tailored to you." }, { title: "Elevation", desc: "Curb appeal." }],
    process: [{ step: "01", name: "Consult", detail: "Lifestyle check" }, { step: "02", name: "Draw", detail: "Blueprints" }],
    stats: [{ label: "Homes", value: "200+" }, { label: "Designs", value: "Unique" }]
  },
  {
    slug: "architects-for-building",
    title: "Architects for Building",
    tagline: "Structural Aesthetics.",
    description: "Architectural planning for multi-story buildings, maximizing FSI.",
    image: "/images/services/architects-for-building.jpg",
    thumbnail: "/images/services/architects-for-building.jpg",
    features: [{ title: "FSI", desc: "Max utilization." }, { title: "Lobbies", desc: "Grand entrances." }],
    process: [{ step: "01", name: "Feasibility", detail: "Code check" }, { step: "02", name: "Permit", detail: "Liaisoning" }],
    stats: [{ label: "Towers", value: "40+" }, { label: "Floors", value: "500+" }]
  },
  {
    slug: "architects-for-office",
    title: "Architects for Office",
    tagline: "Corporate Headquarters Design.",
    description: "Architectural design for office buildings and corporate parks.",
    image: "/images/services/architects-for-office.jpg",
    thumbnail: "/images/services/architects-for-office.jpg",
    features: [{ title: "Facade", desc: "Glass glazing." }, { title: "Efficiency", desc: "Floor plate optimization." }],
    process: [{ step: "01", name: "Concept", detail: "Massing" }, { step: "02", name: "Detail", detail: "GFC Drawings" }],
    stats: [{ label: "Sqft", value: "1M+" }, { label: "Clients", value: "MNCs" }]
  },
  {
    slug: "architects-for-structural-drawing",
    title: "Architects for Structural Drawing",
    tagline: "The Science Behind the Art.",
    description: "Detailed reinforcement drawings and load calculations.",
    image: "/images/services/structural-drawing.jpg",
    thumbnail: "/images/services/structural-drawing.jpg",
    features: [{ title: "Load Calc", desc: "Seismic analysis." }, { title: "Detailing", desc: "Bar bending schedule." }],
    process: [{ step: "01", name: "Analyze", detail: "STAAD Pro" }, { step: "02", name: "Draft", detail: "Structural sheets" }],
    stats: [{ label: "Safety", value: "100%" }, { label: "Steel", value: "Optimized" }]
  },
  {
    slug: "architects-for-apartment",
    title: "Architects for Apartment",
    tagline: "High-Density Living Design.",
    description: "Efficient apartment planning for maximum saleable area.",
    image: "/images/services/architects-for-apartment.jpg",
    thumbnail: "/images/services/architects-for-apartment.jpg",
    features: [{ title: "Privacy", desc: "No overlooking." }, { title: "Ventilation", desc: "Cross air flow." }],
    process: [{ step: "01", name: "Layout", detail: "Unit planning" }, { step: "02", name: "Common", detail: "Area design" }],
    stats: [{ label: "Units", value: "5000+" }, { label: "Complexes", value: "50+" }]
  },
  {
    slug: "civil-architects",
    title: "Civil Architects",
    tagline: "Engineering-First Design.",
    description: "Architectural design with a heavy focus on civil engineering constraints.",
    image: "/images/services/civil-architects.jpg",
    thumbnail: "/images/services/civil-architects.jpg",
    features: [{ title: "Technical", desc: "Feasibility focus." }, { title: "Robust", desc: "Strong structures." }],
    process: [{ step: "01", name: "Survey", detail: "Site data" }, { step: "02", name: "Plan", detail: "Technical drawing" }],
    stats: [{ label: "Exp", value: "20 Yrs" }, { label: "Projects", value: "Technical" }]
  },
  {
    slug: "architects-for-landscape",
    title: "Architects for Landscape",
    tagline: "Designing with Nature.",
    description: "Integrating hardscape and softscape for green environments.",
    image: "/images/services/architects-for-landscape.jpg",
    thumbnail: "/images/services/architects-for-landscape.jpg",
    features: [{ title: "Hardscape", desc: "Pathways & Gazebos." }, { title: "Plants", desc: "Native species." }],
    process: [{ step: "01", name: "Topography", detail: "Level survey" }, { step: "02", name: "Planting", detail: "Selection" }],
    stats: [{ label: "Acres", value: "50+" }, { label: "Gardens", value: "100+" }]
  },
  {
    slug: "architects-for-farm-house",
    title: "Architects for Farm House",
    tagline: "Rural Luxury Retreats.",
    description: "Blending modern luxury with rustic landscapes for getaway homes.",
    image: "/images/services/architects-for-farm-house.jpg",
    thumbnail: "/images/services/architects-for-farm-house.jpg",
    features: [{ title: "Open", desc: "Verandahs & Courtyards." }, { title: "Nature", desc: "Integrated views." }],
    process: [{ step: "01", name: "Site", detail: "Location study" }, { step: "02", name: "Design", detail: "Rustic modern" }],
    stats: [{ label: "Retreats", value: "25+" }, { label: "Relax", value: "100%" }]
  },
  {
    slug: "architects-for-resorts",
    title: "Architects for Resorts",
    tagline: "Creating Destinations.",
    description: "Hospitality design that creates memorable guest experiences.",
    image: "/images/services/architects-for-resorts.jpg",
    thumbnail: "/images/services/architects-for-resorts.jpg",
    features: [{ title: "Theme", desc: "Immersive design." }, { title: "Guest Flow", desc: "Service privacy." }],
    process: [{ step: "01", name: "Masterplan", detail: "Zoning" }, { step: "02", name: "Cottages", detail: "Unit design" }],
    stats: [{ label: "Resorts", value: "10+" }, { label: "Stars", value: "5-Star" }]
  },
  {
    slug: "architects-for-hospital",
    title: "Architects for Hospital",
    tagline: "Healing Architecture.",
    description: "Healthcare facilities prioritizing patient safety and sterile zones.",
    image: "/images/services/architects-for-hospital.jpg",
    thumbnail: "/images/services/architects-for-hospital.jpg",
    features: [{ title: "Sterile", desc: "OT & ICU design." }, { title: "NABH", desc: "Compliant layouts." }],
    process: [{ step: "01", name: "Med-Plan", detail: "Flow check" }, { step: "02", name: "MEP", detail: "Medical gases" }],
    stats: [{ label: "Hospitals", value: "10" }, { label: "Beds", value: "2000+" }]
  },
  {
    slug: "architects-for-restaurant",
    title: "Architects for Restaurant",
    tagline: "Dining by Design.",
    description: "Themed interiors and efficient kitchen layouts for culinary spaces.",
    image: "/images/services/architects-for-restaurant.jpg",
    thumbnail: "/images/services/architects-for-restaurant.jpg",
    features: [{ title: "Kitchen", desc: "Workflow optimized." }, { title: "Ambiance", desc: "Lighting & Decor." }],
    process: [{ step: "01", name: "Concept", detail: "Theme" }, { step: "02", name: "Kitchen", detail: "Service layout" }],
    stats: [{ label: "Outlets", value: "50+" }, { label: "Cafes", value: "20+" }]
  },
  {
    slug: "sustainable-architects",
    title: "Sustainable Architects",
    tagline: "Eco-Friendly Design.",
    description: "Carbon-neutral and energy-efficient building designs.",
    image: "/images/services/sustainable-architects.jpg",
    thumbnail: "/images/services/sustainable-architects.jpg",
    features: [{ title: "Passive", desc: "Natural cooling." }, { title: "Materials", desc: "Locally sourced." }],
    process: [{ step: "01", name: "Climate", detail: "Sun path analysis" }, { step: "02", name: "Design", detail: "Green building" }],
    stats: [{ label: "Carbon", value: "Reduced" }, { label: "Energy", value: "Saved" }]
  },
  {
    slug: "islamic-architects",
    title: "Islamic Architects",
    tagline: "Modern Heritage.",
    description: "Contemporary interpretation of Islamic geometric motifs and arches.",
    image: "/images/services/islamic-architects.jpg",
    thumbnail: "/images/services/islamic-architects.jpg",
    features: [{ title: "Geometry", desc: "Intricate patterns." }, { title: "Privacy", desc: "Screen walls (Jaali)." }],
    process: [{ step: "01", name: "Study", detail: "Cultural research" }, { step: "02", name: "Design", detail: "Fusion style" }],
    stats: [{ label: "Projects", value: "15+" }, { label: "Style", value: "Timeless" }]
  },
  {
    slug: "architects-for-school",
    title: "Architects for School",
    tagline: "Spaces for Learning.",
    description: "Stimulating educational environments with safe play areas and bright classrooms.",
    image: "/images/services/architects-for-school.jpg",
    thumbnail: "/images/services/architects-for-school.jpg",
    features: [{ title: "Safety", desc: "Child-friendly." }, { title: "Light", desc: "Natural daylight." }],
    process: [{ step: "01", name: "Campus", detail: "Master planning" }, { step: "02", name: "Class", detail: "Interior layout" }],
    stats: [{ label: "Schools", value: "15" }, { label: "Students", value: "10k+" }]
  },
  {
    slug: "architects-for-green-building",
    title: "Architects for Green Building",
    tagline: "Certified Sustainability.",
    description: "IGBC/LEED rated designs for high-efficiency performance.",
    image: "/images/services/architects-for-green-building.jpg",
    thumbnail: "/images/services/architects-for-green-building.jpg",
    features: [{ title: "Certification", desc: "LEED/GRIHA." }, { title: "Water", desc: "Rainwater harvest." }],
    process: [{ step: "01", name: "Audit", detail: "Pre-cert check" }, { step: "02", name: "Submit", detail: "Documentation" }],
    stats: [{ label: "Platinum", value: "5" }, { label: "Gold", value: "10" }]
  },
  {
    slug: "architects-for-corporate",
    title: "Architects for Corporate",
    tagline: "Headquarters Design.",
    description: "Iconic buildings for big brands and multinational companies.",
    image: "/images/services/architects-for-corporate.jpg",
    thumbnail: "/images/services/architects-for-corporate.jpg",
    features: [{ title: "Identity", desc: "Brand architecture." }, { title: "Scale", desc: "Large format." }],
    process: [{ step: "01", name: "Vision", detail: "Brand alignment" }, { step: "02", name: "Design", detail: "Landmark creation" }],
    stats: [{ label: "HQ", value: "5" }, { label: "Brands", value: "Top Tier" }]
  },
  {
    slug: "architects-for-wooden-house",
    title: "Architects for Wooden house",
    tagline: "Timber Architecture.",
    description: "Sustainable and aesthetic wooden structures and cottages.",
    image: "/images/services/architects-for-wooden-house.jpg",
    thumbnail: "/images/services/architects-for-wooden-house.jpg",
    features: [{ title: "Joinery", desc: "Expert craftsmanship." }, { title: "Warmth", desc: "Natural insulation." }],
    process: [{ step: "01", name: "Select", detail: "Timber sourcing" }, { step: "02", name: "Build", detail: "Prefab assembly" }],
    stats: [{ label: "Houses", value: "20+" }, { label: "Eco", value: "High" }]
  },
  {
    slug: "architects-for-church",
    title: "Architects for Church",
    tagline: "Spiritual Spaces.",
    description: "Church architecture focusing on acoustics and congregational flow.",
    image: "/images/services/architects-for-church.jpg",
    thumbnail: "/images/services/architects-for-church.jpg",
    features: [{ title: "Acoustics", desc: "Choir & Sermon." }, { title: "Light", desc: "Stained glass." }],
    process: [{ step: "01", name: "Volume", detail: "Height planning" }, { step: "02", name: "Detail", detail: "Altar design" }],
    stats: [{ label: "Churches", value: "12" }, { label: "Seats", value: "5000+" }]
  },
  {
    slug: "architects-for-temple",
    title: "Architects for Temple",
    tagline: "Sacred Geometry.",
    description: "Traditional temple architecture following Agama Shastras.",
    image: "/images/services/architects-for-temple.jpg",
    thumbnail: "/images/services/architects-for-temple.jpg",
    features: [{ title: "Shastras", desc: "Vedic compliance." }, { title: "Carving", desc: "Stone detailing." }],
    process: [{ step: "01", name: "Grid", detail: "Vastu Purusha Mandala" }, { step: "02", name: "Sculpt", detail: "Stone work" }],
    stats: [{ label: "Temples", value: "8" }, { label: "Restored", value: "5" }]
  },

  // --- CONSULTANTS & APPROVALS ---
  {
    slug: "project-management-for-construction",
    title: "Project Management for Construction",
    tagline: "On Time. On Budget.",
    description: "Professional PMC services to oversee your construction.",
    image: "/images/services/pmc.jpg",
    thumbnail: "/images/services/pmc.jpg",
    features: [{ title: "Tracking", desc: "MSP/Primavera." }, { title: "Cost", desc: "Budget control." }],
    process: [{ step: "01", name: "Schedule", detail: "Timeline" }, { step: "02", name: "Monitor", detail: "Daily reports" }],
    stats: [{ label: "Managed", value: "500Cr+" }, { label: "Saved", value: "10%" }]
  },
  {
    slug: "building-construction-approval-consultants",
    title: "Building Construction Approval Consultants",
    tagline: "Navigating Red Tape.",
    description: "Expert liaison services to get your building plans sanctioned.",
    image: "/images/services/approvals.jpg",
    thumbnail: "/images/services/approvals.jpg",
    features: [{ title: "Liaison", desc: "Govt coordination." }, { title: "Legal", desc: "Clear titles." }],
    process: [{ step: "01", name: "Docs", detail: "Collection" }, { step: "02", name: "Submit", detail: "Online filing" }],
    stats: [{ label: "Approvals", value: "1000+" }, { label: "Speed", value: "Fast" }]
  },
  {
    slug: "flat-promoters",
    title: "Flat Promoters",
    tagline: "Real Estate Promotion.",
    description: "Marketing and selling apartment complexes and gated communities.",
    image: "/images/services/flat-promoters.jpg",
    thumbnail: "/images/services/flat-promoters.jpg",
    features: [{ title: "Marketing", desc: "Digital & Print." }, { title: "Sales", desc: "Site visits." }],
    process: [{ step: "01", name: "Launch", detail: "Project go-live" }, { step: "02", name: "Sell", detail: "Booking" }],
    stats: [{ label: "Sold", value: "500+" }, { label: "Happy", value: "Families" }]
  },
  {
    slug: "building-construction-consultants",
    title: "Building Construction Consultants",
    tagline: "Technical Advisory.",
    description: "Expert advice on construction methods, materials, and cost saving.",
    image: "/images/services/building-consultants.jpg",
    thumbnail: "/images/services/building-consultants.jpg",
    features: [{ title: "Audit", desc: "Quality checks." }, { title: "Advice", desc: "Material selection." }],
    process: [{ step: "01", name: "Inspect", detail: "Site visit" }, { step: "02", name: "Report", detail: "Findings" }],
    stats: [{ label: "Consulted", value: "200+" }, { label: "Expertise", value: "High" }]
  },
  {
    slug: "civil-consultants",
    title: "Civil Consultants",
    tagline: "Infrastructure Advice.",
    description: "Solving complex civil engineering problems and structural challenges.",
    image: "/images/services/civil-consultants.jpg",
    thumbnail: "/images/services/civil-consultants.jpg",
    features: [{ title: "Solutions", desc: "Problem solving." }, { title: "Testing", desc: "Lab coordination." }],
    process: [{ step: "01", name: "Problem", detail: "Identification" }, { step: "02", name: "Solve", detail: "Technical fix" }],
    stats: [{ label: "Solved", value: "100+" }, { label: "Tech", value: "Advanced" }]
  },
  {
    slug: "building-renovation-contractors",
    title: "Building Renovation Contractors",
    tagline: "Restore. Revive. Renew.",
    description: "Breathing new life into old structures through repair and remodeling.",
    image: "/images/services/renovation.jpg",
    thumbnail: "/images/services/renovation.jpg",
    features: [{ title: "Repair", desc: "Structural fix." }, { title: "Modernize", desc: "New look." }],
    process: [{ step: "01", name: "Demo", detail: "Strip down" }, { step: "02", name: "Rebuild", detail: "New finish" }],
    stats: [{ label: "Renovated", value: "200+" }, { label: "Value", value: "Increased" }]
  },
  {
    slug: "false-ceiling-contractors",
    title: "False Ceiling Contractors",
    tagline: "The Fifth Wall Aesthetics.",
    description: "Specialized in Gypsum, POP, Grid, and PVC false ceilings.",
    image: "/images/services/false-ceiling.jpg",
    thumbnail: "/images/services/false-ceiling.jpg",
    features: [{ title: "Gypsum", desc: "Seamless finish." }, { title: "Lighting", desc: "Cove lights." }],
    process: [{ step: "01", name: "Frame", detail: "Channel fixing" }, { step: "02", name: "Board", detail: "Installation" }],
    stats: [{ label: "Sqft", value: "5M+" }, { label: "Designs", value: "Unlimited" }]
  },

  // --- PAINTING ---
  {
    slug: "painting-contractors",
    title: "Painting Contractors",
    tagline: "Colors that Protect and Beautify.",
    description: "Professional residential and commercial painting services.",
    image: "/images/services/painting-contractors.jpg",
    thumbnail: "/images/services/painting-contractors.jpg",
    features: [{ title: "Prep", desc: "Sanding & Putty." }, { title: "Finish", desc: "Premium coats." }],
    process: [{ step: "01", name: "Protect", detail: "Masking" }, { step: "02", name: "Paint", detail: "Application" }],
    stats: [{ label: "Walls", value: "10M sqft" }, { label: "Clean", value: "Yes" }]
  },
  {
    slug: "painting-contractors-asian-paints",
    title: "Painting Contractors - Asian Paints",
    tagline: "Authorized Asian Paints Applicators.",
    description: "Certified experts in applying the complete range of Asian Paints products.",
    image: "/images/services/asian-paints.jpg",
    thumbnail: "/images/services/asian-paints.jpg",
    features: [{ title: "Royale", desc: "Luxury finish." }, { title: "Texture", desc: "Wall art." }],
    process: [{ step: "01", name: "Consult", detail: "Color selection" }, { step: "02", name: "Apply", detail: "Mechanized tools" }],
    stats: [{ label: "Certified", value: "Yes" }, { label: "Projects", value: "500+" }]
  },
  {
    slug: "painting-contractors-duco",
    title: "Painting Contractors - Duco",
    tagline: "Premium Automotive Finish.",
    description: "High-gloss and matte PU/Duco finishing for furniture and doors.",
    image: "/images/services/duco.jpg",
    thumbnail: "/images/services/duco.jpg",
    features: [{ title: "PU", desc: "Polyurethane." }, { title: "Gloss", desc: "High shine." }],
    process: [{ step: "01", name: "Sand", detail: "Micro sanding" }, { step: "02", name: "Spray", detail: "Booth finish" }],
    stats: [{ label: "Doors", value: "2000+" }, { label: "Finish", value: "Glass-like" }]
  },
  {
    slug: "painting-contractors-berger",
    title: "Painting Contractors - Berger",
    tagline: "Berger Express Painting.",
    description: "Authorized applicators for Berger Paints with express delivery.",
    image: "/images/services/berger.jpg",
    thumbnail: "/images/services/berger.jpg",
    features: [{ title: "Express", desc: "Fast service." }, { title: "Dust-Free", desc: "Clean tools." }],
    process: [{ step: "01", name: "Quote", detail: "Laser measure" }, { step: "02", name: "Paint", detail: "Quick dry" }],
    stats: [{ label: "Speed", value: "Fast" }, { label: "Warranty", value: "Yes" }]
  },

  // --- INTERIOR NICHE ---
  {
    slug: "interior-decorators",
    title: "Interior Decorators",
    tagline: "Finishing Touches.",
    description: "Soft furnishing and decor styling to complete your home.",
    image: "/images/services/interior-decorators.jpg",
    thumbnail: "/images/services/interior-decorators.jpg",
    features: [{ title: "Soft Furnishing", desc: "Curtains & Rugs." }, { title: "Styling", desc: "Art placement." }],
    process: [{ step: "01", name: "Select", detail: "Shopping" }, { step: "02", name: "Style", detail: "Placement" }],
    stats: [{ label: "Homes", value: "100+" }, { label: "Style", value: "Chic" }]
  },
  {
    slug: "interior-designer-for-modular-kitchen",
    title: "Interior Designer for Modular Kitchen",
    tagline: "The Heart of the Home.",
    description: "Ergonomic modular kitchen designs featuring Hettich/Blum fittings.",
    image: "/images/services/modular-kitchen.jpg",
    thumbnail: "/images/services/modular-kitchen.jpg",
    features: [{ title: "Storage", desc: "Space saving." }, { title: "Finish", desc: "Acrylic/Laminate." }],
    process: [{ step: "01", name: "Measure", detail: "Site check" }, { step: "02", name: "Install", detail: "2-Day Fit" }],
    stats: [{ label: "Kitchens", value: "500+" }, { label: "Warranty", value: "10 Yrs" }]
  },
  {
    slug: "commercial-interior-designers",
    title: "Commercial Interior Designers",
    tagline: "Retail & Biz Interiors.",
    description: "Spaces that sell. Design for showrooms and retail outlets.",
    image: "/images/services/commercial-interiors.jpg",
    thumbnail: "/images/services/commercial-interiors.jpg",
    features: [{ title: "Display", desc: "Product focus." }, { title: "Lighting", desc: "Retail spec." }],
    process: [{ step: "01", name: "Layout", detail: "Flow" }, { step: "02", name: "Fitout", detail: "Racks & Light" }],
    stats: [{ label: "Shops", value: "100+" }, { label: "Sales", value: "Boosted" }]
  },
  {
    slug: "residential-construction-contractors",
    title: "Residential Construction Contractors",
    tagline: "Home Builders.",
    description: "Dedicated home construction teams for private properties.",
    image: "/images/services/residential-construction-contractors.jpg",
    thumbnail: "/images/services/residential-construction-contractors.jpg",
    features: [{ title: "Team", desc: "Dedicated." }, { title: "Quality", desc: "Checked." }],
    process: [{ step: "01", name: "Contract", detail: "Sign-off" }, { step: "02", name: "Build", detail: "Daily work" }],
    stats: [{ label: "Homes", value: "50+" }, { label: "Reliable", value: "Yes" }]
  },
  {
    slug: "civil-contractors-for-residential",
    title: "Civil Contractors for Residential",
    tagline: "Home Structural Work.",
    description: "Foundations and framing specifically for houses.",
    image: "/images/services/civil-residential.jpg",
    thumbnail: "/images/services/civil-residential.jpg",
    features: [{ title: "Strong", desc: "Solid base." }, { title: "Fast", desc: "Quick structure." }],
    process: [{ step: "01", name: "Dig", detail: "Excavation" }, { step: "02", name: "Pour", detail: "Concrete" }],
    stats: [{ label: "Foundations", value: "100+" }, { label: "Stable", value: "100%" }]
  },
  {
    slug: "penthouse-construction-contractors",
    title: "Penthouse Construction Contractors",
    tagline: "Sky-High Luxury.",
    description: "Exclusive rooftop construction and lightweight structure additions.",
    image: "/images/services/penthouse.jpg",
    thumbnail: "/images/services/penthouse.jpg",
    features: [{ title: "Lightweight", desc: "Steel structure." }, { title: "View", desc: "Glass walls." }],
    process: [{ step: "01", name: "Load", detail: "Check capacity" }, { step: "02", name: "Build", detail: "Rooftop work" }],
    stats: [{ label: "Penthouses", value: "15+" }, { label: "Luxury", value: "High" }]
  },
  {
    slug: "bungalow-renovation-contractors",
    title: "Bungalow Renovation Contractors",
    tagline: "Villa Makeovers.",
    description: "Total bungalow transformation services inside and out.",
    image: "/images/services/bungalow-reno.jpg",
    thumbnail: "/images/services/bungalow-reno.jpg",
    features: [{ title: "Total", desc: "Full gut reno." }, { title: "Facade", desc: "Modernize." }],
    process: [{ step: "01", name: "Strip", detail: "Demolition" }, { step: "02", name: "New", detail: "Reconstruction" }],
    stats: [{ label: "Villas", value: "30+" }, { label: "Value", value: "2x" }]
  },
  {
    slug: "residential-3d-ceiling-contractors",
    title: "Residential 3D Ceiling Contractors",
    tagline: "Art Above Your Head.",
    description: "Custom 3D stretch ceilings and printed sky ceilings.",
    image: "/images/services/3d-ceiling.jpg",
    thumbnail: "/images/services/3d-ceiling.jpg",
    features: [{ title: "Stretch", desc: "Gloss finish." }, { title: "Print", desc: "Custom art." }],
    process: [{ step: "01", name: "Measure", detail: "Laser" }, { step: "02", name: "Heat", detail: "Stretch fit" }],
    stats: [{ label: "Ceilings", value: "100+" }, { label: "Wow", value: "Factor" }]
  },
  {
    slug: "residential-exterior-designers",
    title: "Residential Exterior Designers",
    tagline: "Curb Appeal.",
    description: "Facade and front elevation design to make your home stand out.",
    image: "/images/services/exterior-design.jpg",
    thumbnail: "/images/services/exterior-design.jpg",
    features: [{ title: "Materials", desc: "Stone & HPL." }, { title: "Lighting", desc: "Facade lights." }],
    process: [{ step: "01", name: "3D", detail: "Visualize" }, { step: "02", name: "Clad", detail: "Install" }],
    stats: [{ label: "Facades", value: "50+" }, { label: "Beauty", value: "100%" }]
  },
  {
    slug: "pvc-interior-designers",
    title: "PVC Interior Designers",
    tagline: "Budget Interiors.",
    description: "Durable and waterproof PVC paneling solutions for walls and ceilings.",
    image: "/images/services/pvc-interior.jpg",
    thumbnail: "/images/services/pvc-interior.jpg",
    features: [{ title: "Waterproof", desc: "No dampness." }, { title: "Fast", desc: "1-day install." }],
    process: [{ step: "01", name: "Select", detail: "Pattern" }, { step: "02", name: "Paste", detail: "Installation" }],
    stats: [{ label: "Rooms", value: "200+" }, { label: "Cost", value: "Low" }]
  },
  {
    slug: "3d-interior-designers",
    title: "3D Interior Designers",
    tagline: "Visualizing Reality.",
    description: "Photorealistic walkthroughs and renders before you build.",
    image: "/images/services/3d-interior.jpg",
    thumbnail: "/images/services/3d-interior.jpg",
    features: [{ title: "Realism", desc: "4K Renders." }, { title: "VR", desc: "Walkthrough." }],
    process: [{ step: "01", name: "Model", detail: "Build 3D" }, { step: "02", name: "Render", detail: "Lighting" }],
    stats: [{ label: "Renders", value: "1000+" }, { label: "Views", value: "Stunning" }]
  },
  {
    slug: "upvc-ceiling-interior-designers",
    title: "UPVC Ceiling Interior Designers",
    tagline: "Modern Ceilings.",
    description: "UPVC aesthetics for maintenance-free ceilings.",
    image: "/images/services/upvc-ceiling.jpg",
    thumbnail: "/images/services/upvc-ceiling.jpg",
    features: [{ title: "Clean", desc: "Easy wipe." }, { title: "Look", desc: "Wood finish." }],
    process: [{ step: "01", name: "Frame", detail: "Grid" }, { step: "02", name: "Lock", detail: "Panels" }],
    stats: [{ label: "Ceilings", value: "100+" }, { label: "Life", value: "Long" }]
  },
  {
    slug: "interior-designers-for-bathroom",
    title: "Interior Designers for Bathroom",
    tagline: "Spa at Home.",
    description: "Luxury sanitary ware and tile design for modern bathrooms.",
    image: "/images/services/bathroom-design.jpg",
    thumbnail: "/images/services/bathroom-design.jpg",
    features: [{ title: "Wet/Dry", desc: "Zone separation." }, { title: "Luxury", desc: "Premium fittings." }],
    process: [{ step: "01", name: "Select", detail: "Tiles" }, { step: "02", name: "Plumb", detail: "Installation" }],
    stats: [{ label: "Baths", value: "150+" }, { label: "Relax", value: "Spa" }]
  },
  {
    slug: "interior-designers-for-apartment",
    title: "Interior Designers for Apartment",
    tagline: "Flat Interiors.",
    description: "Maximizing apartment space with smart furniture and decor.",
    image: "/images/services/apartment-interior.jpg",
    thumbnail: "/images/services/apartment-interior.jpg",
    features: [{ title: "Compact", desc: "Space saving." }, { title: "Style", desc: "Modern." }],
    process: [{ step: "01", name: "Layout", detail: "Plan" }, { step: "02", name: "Fit", detail: "Execute" }],
    stats: [{ label: "Flats", value: "300+" }, { label: "Space", value: "Max" }]
  },
  {
    slug: "minimalist-interior-designers",
    title: "Minimalist Interior Designers",
    tagline: "Less is More.",
    description: "Zen-inspired interior design focusing on clean lines.",
    image: "/images/services/minimalist.jpg",
    thumbnail: "/images/services/minimalist.jpg",
    features: [{ title: "Clean", desc: "Clutter free." }, { title: "Neutral", desc: "Color palette." }],
    process: [{ step: "01", name: "Edit", detail: "Remove clutter" }, { step: "02", name: "Style", detail: "Simple" }],
    stats: [{ label: "Projects", value: "50+" }, { label: "Vibe", value: "Zen" }]
  },
  {
    slug: "interior-designers-for-bungalow",
    title: "Interior Designers for Bungalow",
    tagline: "Grand Interiors.",
    description: "Large-scale luxury design for spacious bungalows.",
    image: "/images/services/bungalow-interior.jpg",
    thumbnail: "/images/services/bungalow-interior.jpg",
    features: [{ title: "Grand", desc: "Double height." }, { title: "Luxury", desc: "Materials." }],
    process: [{ step: "01", name: "Theme", detail: "Concept" }, { step: "02", name: "Execute", detail: "Detailing" }],
    stats: [{ label: "Bungalows", value: "40+" }, { label: "Lux", value: "High" }]
  },
  {
    slug: "interior-designers-for-bedroom",
    title: "Interior Designers for Bedroom",
    tagline: "Restful Retreats.",
    description: "Sleep-optimized design for peaceful bedrooms.",
    image: "/images/services/bedroom-design.jpg",
    thumbnail: "/images/services/bedroom-design.jpg",
    features: [{ title: "Comfort", desc: "Cozy vibes." }, { title: "Storage", desc: "Wardrobes." }],
    process: [{ step: "01", name: "Layout", detail: "Bed position" }, { step: "02", name: "Decor", detail: "Soft furnishings" }],
    stats: [{ label: "Rooms", value: "500+" }, { label: "Sleep", value: "Better" }]
  },
  {
    slug: "interior-designers-for-villa",
    title: "Interior Designers for Villa",
    tagline: "Estate Interiors.",
    description: "Cohesive design language for large villa estates.",
    image: "/images/services/villa-interior.jpg",
    thumbnail: "/images/services/villa-interior.jpg",
    features: [{ title: "Flow", desc: "Connected spaces." }, { title: "Opulence", desc: "Rich finish." }],
    process: [{ step: "01", name: "Concept", detail: "Master theme" }, { step: "02", name: "Build", detail: "Fitout" }],
    stats: [{ label: "Villas", value: "30+" }, { label: "Class", value: "Top" }]
  },
  {
    slug: "interior-designers-for-home-office",
    title: "Interior Designers for Home Office",
    tagline: "Work from Home.",
    description: "Professional home setups for focus and productivity.",
    image: "/images/services/home-office.jpg",
    thumbnail: "/images/services/home-office.jpg",
    features: [{ title: "Focus", desc: "Distraction free." }, { title: "Tech", desc: "Cable management." }],
    process: [{ step: "01", name: "Plan", detail: "Ergonomics" }, { step: "02", name: "Setup", detail: "Install" }],
    stats: [{ label: "Offices", value: "100+" }, { label: "Productive", value: "Yes" }]
  },
  {
    slug: "3d-interior-designers-for-modular-kitchen",
    title: "3D Interior Designers for Modular Kitchen",
    tagline: "Kitchen Viz.",
    description: "See your modular kitchen in 3D before you buy.",
    image: "/images/services/3d-kitchen.jpg",
    thumbnail: "/images/services/3d-kitchen.jpg",
    features: [{ title: "Preview", desc: "Color check." }, { title: "Layout", desc: "Usage flow." }],
    process: [{ step: "01", name: "Draft", detail: "Layout" }, { step: "02", name: "Render", detail: "3D View" }],
    stats: [{ label: "Designs", value: "200+" }, { label: "Accuracy", value: "100%" }]
  },
  {
    slug: "house-painters",
    title: "House Painters",
    tagline: "Home Refresh.",
    description: "Repainting services to brighten up your home.",
    image: "/images/services/house-painters.jpg",
    thumbnail: "/images/services/house-painters.jpg",
    features: [{ title: "Clean", desc: "No mess." }, { title: "Fast", desc: "Quick turn." }],
    process: [{ step: "01", name: "Prep", detail: "Covering" }, { step: "02", name: "Paint", detail: "Coating" }],
    stats: [{ label: "Homes", value: "1000+" }, { label: "Fresh", value: "Look" }]
  },
  {
    slug: "interior-designers-for-shops",
    title: "Interior Designers for Shops",
    tagline: "Retail Design.",
    description: "Shop layouts that convert browsers into buyers.",
    image: "/images/services/shop-design.jpg",
    thumbnail: "/images/services/shop-design.jpg",
    features: [{ title: "Flow", desc: "Customer path." }, { title: "Display", desc: "Highlight." }],
    process: [{ step: "01", name: "Plan", detail: "Zoning" }, { step: "02", name: "Fit", detail: "Shelving" }],
    stats: [{ label: "Shops", value: "80+" }, { label: "Sales", value: "Up" }]
  },
  {
    slug: "interior-designers-for-hotels",
    title: "Interior Designers for Hotels",
    tagline: "Hospitality Luxury.",
    description: "Lobbies and suites designed for guest comfort.",
    image: "/images/services/hotel-interior.jpg",
    thumbnail: "/images/services/hotel-interior.jpg",
    features: [{ title: "Welcome", desc: "Grand lobby." }, { title: "Comfort", desc: "Room design." }],
    process: [{ step: "01", name: "Concept", detail: "Theme" }, { step: "02", name: "Build", detail: "Furnish" }],
    stats: [{ label: "Hotels", value: "10+" }, { label: "Guests", value: "Happy" }]
  },
  {
    slug: "interior-designers-for-restaurants",
    title: "Interior Designers for Restaurants",
    tagline: "F&B Interiors.",
    description: "Ambiance creation for dining establishments.",
    image: "/images/services/restaurant-interior.jpg",
    thumbnail: "/images/services/restaurant-interior.jpg",
    features: [{ title: "Mood", desc: "Lighting." }, { title: "Seat", desc: "Capacity plan." }],
    process: [{ step: "01", name: "Theme", detail: "Story" }, { step: "02", name: "Fit", detail: "Decor" }],
    stats: [{ label: "Cafes", value: "30+" }, { label: "Vibe", value: "Good" }]
  },
  {
    slug: "interior-decorators-for-office",
    title: "Interior Decorators for Office",
    tagline: "Office Styling.",
    description: "Art and furniture selection to professionalize workspaces.",
    image: "/images/services/office-decor.jpg",
    thumbnail: "/images/services/office-decor.jpg",
    features: [{ title: "Art", desc: "Wall decor." }, { title: "Plants", desc: "Greenery." }],
    process: [{ step: "01", name: "Select", detail: "Items" }, { step: "02", name: "Place", detail: "Styling" }],
    stats: [{ label: "Offices", value: "50+" }, { label: "Style", value: "Pro" }]
  },
  {
    slug: "interior-decorators-for-residences",
    title: "Interior Decorators for Residences",
    tagline: "Home Styling.",
    description: "Curtains, rugs, and art to make a house a home.",
    image: "/images/services/home-decor.jpg",
    thumbnail: "/images/services/home-decor.jpg",
    features: [{ title: "Soft", desc: "Fabrics." }, { title: "Accents", desc: "Vases & Art." }],
    process: [{ step: "01", name: "Shop", detail: "Selection" }, { step: "02", name: "Style", detail: "Setup" }],
    stats: [{ label: "Homes", value: "200+" }, { label: "Cozy", value: "Yes" }]
  },
  {
    slug: "interior-decorators-for-showrooms",
    title: "Interior Decorators for Showrooms",
    tagline: "Display Design.",
    description: "Highlighting products through strategic decor.",
    image: "/images/services/showroom-decor.jpg",
    thumbnail: "/images/services/showroom-decor.jpg",
    features: [{ title: "Focus", desc: "Product light." }, { title: "Prop", desc: "Staging." }],
    process: [{ step: "01", name: "Plan", detail: "Visual merch" }, { step: "02", name: "Set", detail: "Display" }],
    stats: [{ label: "Showrooms", value: "40+" }, { label: "Look", value: "Sharp" }]
  },
  {
    slug: "interior-decorators-for-shops",
    title: "Interior Decorators for Shops",
    tagline: "Store Decor.",
    description: "Visual merchandising to attract customers.",
    image: "/images/services/shop-decor.jpg",
    thumbnail: "/images/services/shop-decor.jpg",
    features: [{ title: "Window", desc: "Display." }, { title: "Sign", desc: "Branding." }],
    process: [{ step: "01", name: "Design", detail: "Concept" }, { step: "02", name: "Install", detail: "Props" }],
    stats: [{ label: "Shops", value: "60+" }, { label: "Footfall", value: "Up" }]
  },
  {
    slug: "interior-decorators-for-kitchen",
    title: "Interior Decorators for Kitchen",
    tagline: "Kitchen Styling.",
    description: "Accessories and finishes to upgrade your kitchen look.",
    image: "/images/services/kitchen-decor.jpg",
    thumbnail: "/images/services/kitchen-decor.jpg",
    features: [{ title: "Org", desc: "Jars & Bins." }, { title: "Light", desc: "Under cab." }],
    process: [{ step: "01", name: "Audit", detail: "Needs" }, { step: "02", name: "Style", detail: "Organize" }],
    stats: [{ label: "Kitchens", value: "100+" }, { label: "Neat", value: "Yes" }]
  },
  {
    slug: "interior-decorators-for-hotel",
    title: "Interior Decorators for Hotel",
    tagline: "Hotel Styling.",
    description: "Soft furnishings and art for hotel rooms and lobbies.",
    image: "/images/services/hotel-decor.jpg",
    thumbnail: "/images/services/hotel-decor.jpg",
    features: [{ title: "Luxury", desc: "Linens." }, { title: "Art", desc: "Framed work." }],
    process: [{ step: "01", name: "Source", detail: "Bulk buy" }, { step: "02", name: "Install", detail: "Room setup" }],
    stats: [{ label: "Rooms", value: "500+" }, { label: "Rating", value: "5-Star" }]
  },
  {
    slug: "interior-decorators-for-restaurants",
    title: "Interior Decorators for Restaurants",
    tagline: "Dining Decor.",
    description: "Table settings and themes for the perfect dining experience.",
    image: "/images/services/restaurant-decor.jpg",
    thumbnail: "/images/services/restaurant-decor.jpg",
    features: [{ title: "Table", desc: "Setting." }, { title: "Wall", desc: "Mural/Art." }],
    process: [{ step: "01", name: "Theme", detail: "Select" }, { step: "02", name: "Style", detail: "Tables" }],
    stats: [{ label: "Restaurants", value: "25+" }, { label: "Instagram", value: "Ready" }]
  }
];