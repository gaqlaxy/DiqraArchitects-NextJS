// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import CtaSection from "@/app/components/CtaSection";
// import Footer from "@/app/components/Footer";
// import SlideUpButton from "@/app/components/SlideUpButton";
// import "@/app/styles/ServiceDetailPage.css";

// // import { Link } from "react-router-dom";
// import Link from "next/link";

// // Mock GSAP for demo

// gsap.registerPlugin(ScrollTrigger);

// // Mock projects data
// const projectsData = {
//   projects: [
//     {
//       id: 1,
//       slug: "jaloura-main-house",
//       title: "JALOURA MAIN HOUSE",
//       year: "2024",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
//       tags: ["Modern", "Residential", "Sustainable"],
//     },
//     {
//       id: 3,
//       slug: "myrtle-pool-house",
//       title: "MYRTLE POOL HOUSE",
//       year: "2024",
//       category: "Recreational",
//       thumbnail:
//         "https://website-data-pluckwalk.s3-ap-south-1.amazonaws.com/test/kYPfqrWt8C7uRmJ5U4cofX.jpeg",
//       tags: ["Luxury", "Pool House", "Contemporary"],
//     },
//     {
//       id: 5,
//       slug: "sidney-house",
//       title: "SIDNEY HOUSE",
//       year: "2024",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
//       tags: ["Coastal", "Views", "Modern"],
//     },
//     {
//       id: 7,
//       slug: "mowbray",
//       title: "MOWBRAY",
//       year: "2023",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
//       tags: ["Urban Oasis", "Pavilion", "Contemporary"],
//     },
//     {
//       id: 9,
//       slug: "garden-studio",
//       title: "GARDEN STUDIO",
//       year: "2023",
//       category: "Studio",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
//       tags: ["Studio", "Garden", "Minimalist"],
//     },
//     {
//       id: 10,
//       slug: "hillside-retreat",
//       title: "HILLSIDE RETREAT",
//       year: "2022",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
//       tags: ["Retreat", "Hillside", "Bold Design"],
//     },
//   ],
// };

// const ServiceDetailPage = ({ service = "exterior" }) => {
//   const containerRef = useRef(null);
//   const [relatedProjects, setRelatedProjects] = useState([]);

//   // Service data
//   const serviceData = {
//     exterior: {
//       title: "Exterior Design",
//       subtitle: "TRANSFORM YOUR PROPERTY",
//       hero: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       description:
//         "We craft bold, refined exteriors that balance form, function, and lasting visual harmony. Every façade is designed to elevate the character of your space while staying true to its surroundings.",
//       features: [
//         {
//           title: "Facade Design",
//           desc: "Contemporary and timeless exterior facades that make a lasting impression.",
//         },
//         {
//           title: "Landscaping",
//           desc: "Thoughtfully designed outdoor spaces that complement your architecture.",
//         },
//         {
//           title: "Lighting Solutions",
//           desc: "Strategic exterior lighting that enhances beauty and security.",
//         },
//         {
//           title: "Material Selection",
//           desc: "Premium, weather-resistant materials for long-lasting beauty.",
//         },
//       ],
//       process: [
//         {
//           step: "01",
//           title: "Site Analysis",
//           desc: "Comprehensive evaluation of your property and surroundings.",
//         },
//         {
//           step: "02",
//           title: "Concept Design",
//           desc: "Initial sketches and 3D visualizations of proposed designs.",
//         },
//         {
//           step: "03",
//           title: "Material Selection",
//           desc: "Curated selection of materials and finishes.",
//         },
//         {
//           step: "04",
//           title: "Implementation",
//           desc: "Expert execution with attention to every detail.",
//         },
//       ],
//       gallery: [
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
//       ],
//     },
//     planning: {
//       title: "Design & Planning",
//       subtitle: "FROM VISION TO REALITY",
//       hero: "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       description:
//         "From conceptual layouts to detailed drawings, we shape your project with precision and clarity. Our planning process ensures functional flow, aesthetic coherence, and long-term usability.",
//       features: [
//         {
//           title: "Space Planning",
//           desc: "Optimal utilization of space for functionality and flow.",
//         },
//         {
//           title: "3D Visualization",
//           desc: "Photorealistic renderings to preview your space before construction.",
//         },
//         {
//           title: "Technical Drawings",
//           desc: "Detailed architectural and engineering drawings.",
//         },
//         {
//           title: "Budget Planning",
//           desc: "Transparent cost estimation and financial planning.",
//         },
//       ],
//       process: [
//         {
//           step: "01",
//           title: "Discovery",
//           desc: "Understanding your needs, preferences, and lifestyle.",
//         },
//         {
//           step: "02",
//           title: "Concept Development",
//           desc: "Creating initial design concepts and mood boards.",
//         },
//         {
//           step: "03",
//           title: "Detailed Planning",
//           desc: "Developing comprehensive plans and specifications.",
//         },
//         {
//           step: "04",
//           title: "Approval & Documentation",
//           desc: "Final review and preparation for execution.",
//         },
//       ],
//       gallery: [
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
//       ],
//     },
//     consultation: {
//       title: "Consultation",
//       subtitle: "EXPERT GUIDANCE",
//       hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       description:
//         "We offer expert guidance to help you make confident design decisions. From material choices to spatial strategies, our consultations provide clear direction tailored to your goals.",
//       features: [
//         {
//           title: "Project Assessment",
//           desc: "Comprehensive evaluation of your project requirements and constraints.",
//         },
//         {
//           title: "Design Direction",
//           desc: "Expert advice on style, materials, and spatial planning.",
//         },
//         {
//           title: "Feasibility Study",
//           desc: "Analysis of project viability and potential challenges.",
//         },
//         {
//           title: "Contractor Coordination",
//           desc: "Guidance on selecting and working with contractors.",
//         },
//       ],
//       process: [
//         {
//           step: "01",
//           title: "Initial Meeting",
//           desc: "One-on-one discussion to understand your vision.",
//         },
//         {
//           step: "02",
//           title: "Site Visit",
//           desc: "On-site assessment and documentation.",
//         },
//         {
//           step: "03",
//           title: "Recommendations",
//           desc: "Detailed report with actionable insights.",
//         },
//         {
//           step: "04",
//           title: "Follow-up Support",
//           desc: "Ongoing guidance throughout your project.",
//         },
//       ],
//       gallery: [
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
//       ],
//     },
//     interior: {
//       title: "Interior Design",
//       subtitle: "SPACES THAT INSPIRE",
//       hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       description:
//         "We create interiors that feel balanced, elegant, and deeply connected to your lifestyle. Through thoughtful materials, textures, and spatial experiences, we shape spaces that feel harmonious and timeless.",
//       features: [
//         {
//           title: "Custom Furniture",
//           desc: "Bespoke furniture pieces tailored to your space and style.",
//         },
//         {
//           title: "Color Consultation",
//           desc: "Expert color palettes that create the perfect ambiance.",
//         },
//         {
//           title: "Space Optimization",
//           desc: "Intelligent layouts that maximize comfort and efficiency.",
//         },
//         {
//           title: "Styling & Decor",
//           desc: "Curated selection of accessories and finishing touches.",
//         },
//       ],
//       process: [
//         {
//           step: "01",
//           title: "Style Discovery",
//           desc: "Identifying your aesthetic preferences and lifestyle needs.",
//         },
//         {
//           step: "02",
//           title: "Design Concept",
//           desc: "Developing mood boards and material palettes.",
//         },
//         {
//           step: "03",
//           title: "Space Planning",
//           desc: "Creating functional layouts and furniture arrangements.",
//         },
//         {
//           step: "04",
//           title: "Installation",
//           desc: "Bringing the design to life with precision.",
//         },
//       ],
//       gallery: [
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
//       ],
//     },
//     renovation: {
//       title: "Renovation",
//       subtitle: "REFRESH & REVITALIZE",
//       hero: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       description:
//         "We reimagine existing spaces with a blend of sensitivity and innovation. Our renovation approach preserves what matters while elevating form, function, and overall design quality.",
//       features: [
//         {
//           title: "Structural Updates",
//           desc: "Safe and compliant structural modifications and improvements.",
//         },
//         {
//           title: "Modern Systems",
//           desc: "Upgrading electrical, plumbing, and HVAC systems.",
//         },
//         {
//           title: "Aesthetic Refresh",
//           desc: "Contemporary finishes and fixtures for a modern look.",
//         },
//         {
//           title: "Space Reconfiguration",
//           desc: "Reimagining layouts for better flow and functionality.",
//         },
//       ],
//       process: [
//         {
//           step: "01",
//           title: "Assessment",
//           desc: "Thorough inspection of existing conditions and potential.",
//         },
//         {
//           step: "02",
//           title: "Design Solutions",
//           desc: "Creative approaches to maximize your spaces potential.",
//         },
//         {
//           step: "03",
//           title: "Phased Execution",
//           desc: "Strategic implementation to minimize disruption.",
//         },
//         {
//           step: "04",
//           title: "Quality Assurance",
//           desc: "Meticulous attention to finish quality and details.",
//         },
//       ],
//       gallery: [
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
//         "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
//       ],
//     },
//   };

//   const currentService = serviceData[service];

//   // Get related projects based on service
//   useEffect(() => {
//     const getRelatedProjects = () => {
//       const allProjects = projectsData.projects;

//       const serviceProjectMap = {
//         exterior: allProjects.filter((p) =>
//           p.tags.some(
//             (tag) =>
//               tag.toLowerCase().includes("modern") ||
//               tag.toLowerCase().includes("contemporary") ||
//               tag.toLowerCase().includes("bold")
//           )
//         ),
//         planning: allProjects.filter(
//           (p) =>
//             p.category === "Residential" ||
//             p.tags.some((tag) => tag.toLowerCase().includes("design"))
//         ),
//         consultation: allProjects.filter((p) =>
//           p.tags.some((t) => t.includes("Luxury"))
//         ),
//         interior: allProjects.filter((p) =>
//           p.tags.some(
//             (tag) =>
//               tag.toLowerCase().includes("luxury") ||
//               tag.toLowerCase().includes("minimalist") ||
//               tag.toLowerCase().includes("creative")
//           )
//         ),
//         renovation: allProjects.filter((p) =>
//           p.tags.some(
//             (tag) =>
//               tag.toLowerCase().includes("traditional") ||
//               tag.toLowerCase().includes("timeless")
//           )
//         ),
//       };

//       const related = serviceProjectMap[service] || allProjects;
//       return related.slice(0, 6);
//     };

//     setRelatedProjects(getRelatedProjects());
//   }, [service]);

//   return (
//     <div ref={containerRef} className="servicedetail-container">
//       {/* Hero Section */}
//       <section className="servicedetail-hero">
//         <div className="servicedetail-hero-content">
//           <div className="servicedetail-label">{currentService.subtitle}</div>
//           <h1 className="servicedetail-hero-title">{currentService.title}</h1>
//           <p className="servicedetail-hero-desc">
//             {currentService.description}
//           </p>
//         </div>
//         <div className="servicedetail-hero-image-wrapper">
//           <img
//             src={currentService.hero}
//             alt={currentService.title}
//             className="servicedetail-hero-image"
//           />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="servicedetail-features">
//         <div className="servicedetail-section-header">
//           <div className="servicedetail-label">WHAT WE OFFER</div>
//           <h2 className="servicedetail-section-title">Key Features</h2>
//         </div>
//         <div className="servicedetail-features-list">
//           {currentService.features.map((feature, index) => (
//             <div key={index} className="servicedetail-feature-item">
//               <div className="servicedetail-feature-number">
//                 {String(index + 1).padStart(2, "0")}
//               </div>
//               <div className="servicedetail-feature-content">
//                 <h3 className="servicedetail-feature-title">{feature.title}</h3>
//                 <p className="servicedetail-feature-desc">{feature.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="servicedetail-process">
//         <div className="servicedetail-section-header">
//           <div className="servicedetail-label">OUR APPROACH</div>
//           <h2 className="servicedetail-section-title">How We Work</h2>
//         </div>
//         <div className="servicedetail-process-grid">
//           {currentService.process.map((step, index) => (
//             <div key={index} className="servicedetail-process-card">
//               <div className="servicedetail-process-step-badge">
//                 {step.step}
//               </div>
//               <h3 className="servicedetail-process-title">{step.title}</h3>
//               <p className="servicedetail-process-desc">{step.desc}</p>
//               <div className="servicedetail-process-arrow">→</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Related Projects Section */}
//       {relatedProjects.length > 0 && (
//         <section className="servicedetail-projects">
//           <div className="servicedetail-section-header">
//             <div className="servicedetail-label">SELECTED PROJECTS</div>
//             <h2 className="servicedetail-section-title">Related Work</h2>
//           </div>
//           <div className="servicedetail-projects-grid">
//             {relatedProjects.map((project) => (
//               <Link
//                 key={project.id}
//                 href={`/project/${project.slug}`}
//                 className="servicedetail-project-card"
//               >
//                 <div className="servicedetail-project-image-wrapper">
//                   <img
//                     src={project.thumbnail}
//                     alt={project.title}
//                     className="servicedetail-project-image"
//                   />
//                   <div className="servicedetail-project-overlay">
//                     <span className="servicedetail-project-view">
//                       View Project →
//                     </span>
//                   </div>
//                 </div>
//                 <div className="servicedetail-project-info">
//                   <h3 className="servicedetail-project-title">
//                     {project.title}
//                   </h3>
//                   <div className="servicedetail-project-meta">
//                     <span>{project.category}</span>
//                     <span>•</span>
//                     <span>{project.year}</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//           <div className="servicedetail-projects-cta">
//             {/* <Link to="/works" className="servicedetail-view-all-btn">
//               <span>View All Projects</span>
//               <span className="arrow">→</span>
//             </Link> */}
//             <SlideUpButton href="/works">View all works</SlideUpButton>
//           </div>
//         </section>
//       )}

//       {/* CTA Section */}
//       {/* <section className="servicedetail-cta">
//         <div className="servicedetail-cta-content">
//           <h2 className="servicedetail-cta-title">
//             Ready to Start Your Project?
//           </h2>
//           <p className="servicedetail-cta-desc">
//             Let's discuss how we can bring your vision to life.
//           </p>
//           <a href="#contact" className="servicedetail-cta-button">
//             <span>Get in Touch</span>
//           </a>
//         </div>
//       </section> */}
//       <CtaSection />
//       <Footer />
//     </div>
//   );
// };

// export default ServiceDetailPage;


// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Link from "next/link";

// // Components
// import CtaSection from "@/app/components/CtaSection";
// import Footer from "@/app/components/Footer";
// import SlideUpButton from "@/app/components/SlideUpButton";

// // Styles
// import "@/app/styles/ServiceDetailPage.css";

// // Register GSAP
// gsap.registerPlugin(ScrollTrigger);

// // --- MOCK DATA (Same as before) ---
// const projectsData = {
//   projects: [
//     {
//       id: 1,
//       slug: "jaloura-main-house",
//       title: "JALOURA MAIN HOUSE",
//       year: "2024",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
//       tags: ["Modern", "Residential", "Sustainable"],
//     },
//     {
//       id: 3,
//       slug: "myrtle-pool-house",
//       title: "MYRTLE POOL HOUSE",
//       year: "2024",
//       category: "Recreational",
//       thumbnail:
//         "https://website-data-pluckwalk.s3-ap-south-1.amazonaws.com/test/kYPfqrWt8C7uRmJ5U4cofX.jpeg",
//       tags: ["Luxury", "Pool House", "Contemporary"],
//     },
//     {
//       id: 5,
//       slug: "sidney-house",
//       title: "SIDNEY HOUSE",
//       year: "2024",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
//       tags: ["Coastal", "Views", "Modern"],
//     },
//     {
//       id: 7,
//       slug: "mowbray",
//       title: "MOWBRAY",
//       year: "2023",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
//       tags: ["Urban Oasis", "Pavilion", "Contemporary"],
//     },
//     {
//       id: 9,
//       slug: "garden-studio",
//       title: "GARDEN STUDIO",
//       year: "2023",
//       category: "Studio",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
//       tags: ["Studio", "Garden", "Minimalist"],
//     },
//     {
//       id: 10,
//       slug: "hillside-retreat",
//       title: "HILLSIDE RETREAT",
//       year: "2022",
//       category: "Residential",
//       thumbnail:
//         "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
//       tags: ["Retreat", "Hillside", "Bold Design"],
//     },
//   ],
// };

// const serviceData = {
//   exterior: {
//     title: "Exterior Design",
//     subtitle: "Transform Your Property",
//     hero: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1920&auto=format&fit=crop",
//     description:
//       "We craft bold, refined exteriors that balance form, function, and lasting visual harmony. Every façade is designed to elevate the character of your space while staying true to its surroundings.",
//     features: [
//       {
//         title: "Facade Design",
//         desc: "Contemporary and timeless exterior facades that make a lasting impression.",
//       },
//       {
//         title: "Landscaping",
//         desc: "Thoughtfully designed outdoor spaces that complement your architecture.",
//       },
//       {
//         title: "Lighting Solutions",
//         desc: "Strategic exterior lighting that enhances beauty and security.",
//       },
//       {
//         title: "Material Selection",
//         desc: "Premium, weather-resistant materials for long-lasting beauty.",
//       },
//     ],
//     process: [
//       {
//         step: "01",
//         title: "Site Analysis",
//         desc: "Comprehensive evaluation of your property, topography, and surroundings to inform the design strategy.",
//       },
//       {
//         step: "02",
//         title: "Concept Design",
//         desc: "Initial sketches and high-fidelity 3D visualizations of proposed designs to align on the vision.",
//       },
//       {
//         step: "03",
//         title: "Material & Detail",
//         desc: "Curated selection of premium materials and architectural details that define the project's character.",
//       },
//       {
//         step: "04",
//         title: "Implementation",
//         desc: "Expert execution and oversight during construction to ensure every detail matches the design intent.",
//       },
//     ],
//   },
//   // ... (Add other services: planning, consultation, interior, renovation here if needed, using the same structure)
// };

// // Fallback if service doesn't exist
// const defaultService = serviceData.exterior;

// const ServiceDetailPage = ({ service = "exterior" }) => {
//   const containerRef = useRef(null);
//   const heroImageRef = useRef(null);
//   const processLineRef = useRef(null);
//   const [relatedProjects, setRelatedProjects] = useState([]);

//   const currentService = serviceData[service] || defaultService;

//   // Get related projects logic (Same as before)
//   useEffect(() => {
//     const getRelatedProjects = () => {
//       const allProjects = projectsData.projects;
//       // Simple filter for demo purposes
//       let related = allProjects;
//       if (service === 'exterior') {
//          related = allProjects.filter(p => p.tags.includes('Modern') || p.tags.includes('Bold Design'));
//       } else if (service === 'interior') {
//          related = allProjects.filter(p => p.tags.includes('Luxury') || p.tags.includes('Minimalist'));
//       }
//       //Fallback if filter is too restrictive for demo
//       if(related.length < 2) related = allProjects;

//       return related.slice(0, 3); // Limit to 3 for editorial layout
//     };
//     setRelatedProjects(getRelatedProjects());
//   }, [service]);

//   // --- GSAP ANIMATIONS ---
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Page Reveal
//       gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.8, ease: "power2.out" });

//       // 2. Hero Animation Timeline
//       const heroTl = gsap.timeline({ delay: 0.2 });
      
//       // Split text reveal for title (simple version, could use SplitText for more complex)
//       heroTl.from(".sd-hero-title", {
//         y: 120,
//         opacity: 0,
//         duration: 1.5,
//         ease: "power4.out",
//         skewY: 5,
//       })
//       .from(".sd-hero-image-container", {
//         scale: 0.95,
//         opacity: 0,
//         duration: 1.5,
//         ease: "expo.out"
//       }, "-=1") // overlap
//       .from(".sd-hero-desc", {
//         y: 40,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out"
//       }, "-=1");

//       // Hero Parallax on Scroll
//       gsap.to(heroImageRef.current, {
//         yPercent: 20, // Move image down slowly within its container
//         scale: 1, // Zoom out slightly back to normal
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".sd-hero",
//             start: "top top",
//             end: "bottom top",
//             scrub: true
//         }
//       });


//       // 3. Features Stagger Reveal
//       // gsap.from(".sd-feature-item", {
//       //   scrollTrigger: {
//       //     trigger: ".sd-features-list",
//       //     start: "top 80%",
//       //   },
//       //   y: 60,
//       //   opacity: 0,
//       //   stagger: 0.15,
//       //   duration: 1,
//       //   ease: "power3.out",
//       // });

//       // 4. Process Section Animations
//       // 4a. Draw the line
//       gsap.to(processLineRef.current, {
//         height: "100%",
//         ease: "none",
//         scrollTrigger: {
//             trigger: ".sd-process-container",
//             start: "top center",
//             end: "bottom center",
//             scrub: 0.5,
//         }
//       });

//       // 4b. Activate steps and fade them in
//       const steps = gsap.utils.toArray(".sd-process-step");
//       steps.forEach((step) => {
//         // Fade in
//         gsap.from(step, {
//             scrollTrigger: {
//                 trigger: step,
//                 start: "top 85%",
//             },
//             y: 40,
//             opacity: 0,
//             duration: 0.8,
//             ease: "power3.out"
//         });

//         // Toggle "active" class for the marker highlight
//         ScrollTrigger.create({
//             trigger: step,
//             start: "top center+=100", // Trigger when step is near center screen
//             end: "bottom center+=100",
//             toggleClass: { targets: step, className: "active" },
//         });
//       });

//       // 5. Projects Parallax and Reveal
//       const projectItems = gsap.utils.toArray(".sd-project-item");
//       projectItems.forEach((item) => {
//         // Reveal text part
//         gsap.from(item.querySelector(".sd-project-info"), {
//            scrollTrigger: { trigger: item, start: "top 75%" },
//            y: 60,
//            opacity: 0,
//            duration: 1,
//            ease: "power3.out"
//         });

//         // Parallax for image inside its wrapper
//         gsap.fromTo(item.querySelector(".sd-project-image"), 
//             { scale: 1.2, yPercent: -10 }, // Start zoomed and slightly up
//             { scale: 1, yPercent: 10, // End normal scale and slightly down
//               ease: "none",
//               scrollTrigger: {
//                 trigger: item,
//                 start: "top bottom",
//                 end: "bottom top",
//                 scrub: true
//               }
//             }
//         );
//       });

//     }, containerRef);

//     return () => ctx.revert();
//   }, [service]);

//   return (
//     <div ref={containerRef} className="servicedetail-container">
//       {/* --- HERO SECTION --- */}
//       <section className="sd-hero">
//         <div className="sd-hero-header">
//           <span className="sd-overline">{currentService.subtitle}</span>
//           <h1 className="sd-hero-title">{currentService.title}</h1>
//         </div>
        
//         <div className="sd-hero-image-container">
//           <img
//             ref={heroImageRef}
//             src={currentService.hero}
//             alt={currentService.title}
//             className="sd-hero-image"
//           />
//         </div>

//         <div className="sd-hero-footer">
//           <p className="sd-hero-desc">
//             {currentService.description}
//           </p>
//         </div>
//       </section>

//       {/* --- FEATURES SECTION --- */}
//       <section className="sd-features">
//         <h2 className="sd-section-title">Our Expertise</h2>
//         <div className="sd-features-list">
//           {currentService.features.map((feature, index) => (
//             <div key={index} className="sd-feature-item">
//               <div className="sd-feature-num">
//                 {String(index + 1).padStart(2, "0")}.
//               </div>
//               <h3 className="sd-feature-title">{feature.title}</h3>
//               <p className="sd-feature-desc">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- PROCESS SECTION --- */}
//       <section className="sd-process">
//          <h2 className="sd-section-title">The Approach</h2>
//          <div className="sd-process-container">
//             {/* The vertical lines */}
//             <div className="sd-process-line"></div>
//             <div ref={processLineRef} className="sd-process-line-progress"></div>

//             {currentService.process.map((step, index) => (
//                 <div key={index} className="sd-process-step">
//                     <div className="sd-process-marker"></div>
//                     <span className="sd-process-step-num">Stage {step.step}</span>
//                     <h3 className="sd-process-title">{step.title}</h3>
//                     <p className="sd-process-desc">{step.desc}</p>
//                 </div>
//             ))}
//          </div>
//       </section>

//       {/* --- RELATED PROJECTS SECTION --- */}
//       {relatedProjects.length > 0 && (
//         <section className="sd-projects">
//           <h2 className="sd-section-title">Selected Works</h2>
          
//           <div className="sd-projects-list">
//             {relatedProjects.map((project, index) => (
//               <Link
//                 key={project.id}
//                 href={`/project/${project.slug}`}
//                 className="sd-project-item"
//               >
//                 <div className="sd-project-image-wrap">
//                   <img
//                     src={project.thumbnail}
//                     alt={project.title}
//                     className="sd-project-image"
//                   />
//                 </div>
//                 <div className="sd-project-info">
//                   <span className="sd-project-meta">{project.category} — {project.year}</span>
//                   <h3 className="sd-project-title">
//                     {project.title}
//                   </h3>
//                   <div className="sd-project-view">
//                     View Project <span className="sd-project-arrow">→</span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="sd-projects-cta-wrap">
//             <SlideUpButton href="/works">View all works</SlideUpButton>
//           </div>
//         </section>
//       )}

//       <CtaSection />
//       <Footer />
//     </div>
//   );
// };

// export default ServiceDetailPage;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Components
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "@/app/components/SlideUpButton";

// Styles
import "@/app/styles/ServiceDetailPage.css";

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// --- PROJECTS DATA ---
const projectsData = {
  projects: [
    {
      id: 1,
      slug: "jaloura-main-house",
      title: "JALOURA MAIN HOUSE",
      year: "2024",
      category: "Residential",
      thumbnail:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      tags: ["Modern", "Residential", "Sustainable"],
    },
    {
      id: 3,
      slug: "myrtle-pool-house",
      title: "MYRTLE POOL HOUSE",
      year: "2024",
      category: "Recreational",
      thumbnail:
        "https://website-data-pluckwalk.s3-ap-south-1.amazonaws.com/test/kYPfqrWt8C7uRmJ5U4cofX.jpeg",
      tags: ["Luxury", "Pool House", "Contemporary"],
    },
    {
      id: 5,
      slug: "sidney-house",
      title: "SIDNEY HOUSE",
      year: "2024",
      category: "Residential",
      thumbnail:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
      tags: ["Coastal", "Views", "Modern"],
    },
    {
      id: 7,
      slug: "mowbray",
      title: "MOWBRAY",
      year: "2023",
      category: "Residential",
      thumbnail:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
      tags: ["Urban Oasis", "Pavilion", "Contemporary"],
    },
    {
      id: 9,
      slug: "garden-studio",
      title: "GARDEN STUDIO",
      year: "2023",
      category: "Studio",
      thumbnail:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      tags: ["Studio", "Garden", "Minimalist"],
    },
    {
      id: 10,
      slug: "hillside-retreat",
      title: "HILLSIDE RETREAT",
      year: "2022",
      category: "Residential",
      thumbnail:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      tags: ["Retreat", "Hillside", "Bold Design"],
    },
  ],
};

// --- SERVICE DATA (Restored Full Content) ---
const serviceData = {
  exterior: {
    title: "Exterior Design",
    subtitle: "TRANSFORM YOUR PROPERTY",
    hero: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1920&auto=format&fit=crop",
    description:
      "We craft bold, refined exteriors that balance form, function, and lasting visual harmony. Every façade is designed to elevate the character of your space while staying true to its surroundings.",
    features: [
      {
        title: "Facade Design",
        desc: "Contemporary and timeless exterior facades that make a lasting impression.",
      },
      {
        title: "Landscaping",
        desc: "Thoughtfully designed outdoor spaces that complement your architecture.",
      },
      {
        title: "Lighting Solutions",
        desc: "Strategic exterior lighting that enhances beauty and security.",
      },
      {
        title: "Material Selection",
        desc: "Premium, weather-resistant materials for long-lasting beauty.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Site Analysis",
        desc: "Comprehensive evaluation of your property and surroundings.",
      },
      {
        step: "02",
        title: "Concept Design",
        desc: "Initial sketches and 3D visualizations of proposed designs.",
      },
      {
        step: "03",
        title: "Material Selection",
        desc: "Curated selection of materials and finishes.",
      },
      {
        step: "04",
        title: "Implementation",
        desc: "Expert execution with attention to every detail.",
      },
    ],
  },
  planning: {
    title: "Design & Planning",
    subtitle: "FROM VISION TO REALITY",
    hero: "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1920&auto=format&fit=crop",
    description:
      "From conceptual layouts to detailed drawings, we shape your project with precision and clarity. Our planning process ensures functional flow, aesthetic coherence, and long-term usability.",
    features: [
      {
        title: "Space Planning",
        desc: "Optimal utilization of space for functionality and flow.",
      },
      {
        title: "3D Visualization",
        desc: "Photorealistic renderings to preview your space before construction.",
      },
      {
        title: "Technical Drawings",
        desc: "Detailed architectural and engineering drawings.",
      },
      {
        title: "Budget Planning",
        desc: "Transparent cost estimation and financial planning.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your needs, preferences, and lifestyle.",
      },
      {
        step: "02",
        title: "Concept Development",
        desc: "Creating initial design concepts and mood boards.",
      },
      {
        step: "03",
        title: "Detailed Planning",
        desc: "Developing comprehensive plans and specifications.",
      },
      {
        step: "04",
        title: "Approval & Documentation",
        desc: "Final review and preparation for execution.",
      },
    ],
  },
  consultation: {
    title: "Consultation",
    subtitle: "EXPERT GUIDANCE",
    hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop",
    description:
      "We offer expert guidance to help you make confident design decisions. From material choices to spatial strategies, our consultations provide clear direction tailored to your goals.",
    features: [
      {
        title: "Project Assessment",
        desc: "Comprehensive evaluation of your project requirements and constraints.",
      },
      {
        title: "Design Direction",
        desc: "Expert advice on style, materials, and spatial planning.",
      },
      {
        title: "Feasibility Study",
        desc: "Analysis of project viability and potential challenges.",
      },
      {
        title: "Contractor Coordination",
        desc: "Guidance on selecting and working with contractors.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Initial Meeting",
        desc: "One-on-one discussion to understand your vision.",
      },
      {
        step: "02",
        title: "Site Visit",
        desc: "On-site assessment and documentation.",
      },
      {
        step: "03",
        title: "Recommendations",
        desc: "Detailed report with actionable insights.",
      },
      {
        step: "04",
        title: "Follow-up Support",
        desc: "Ongoing guidance throughout your project.",
      },
    ],
  },
  interior: {
    title: "Interior Design",
    subtitle: "SPACES THAT INSPIRE",
    hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920&auto=format&fit=crop",
    description:
      "We create interiors that feel balanced, elegant, and deeply connected to your lifestyle. Through thoughtful materials, textures, and spatial experiences, we shape spaces that feel harmonious and timeless.",
    features: [
      {
        title: "Custom Furniture",
        desc: "Bespoke furniture pieces tailored to your space and style.",
      },
      {
        title: "Color Consultation",
        desc: "Expert color palettes that create the perfect ambiance.",
      },
      {
        title: "Space Optimization",
        desc: "Intelligent layouts that maximize comfort and efficiency.",
      },
      {
        title: "Styling & Decor",
        desc: "Curated selection of accessories and finishing touches.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Style Discovery",
        desc: "Identifying your aesthetic preferences and lifestyle needs.",
      },
      {
        step: "02",
        title: "Design Concept",
        desc: "Developing mood boards and material palettes.",
      },
      {
        step: "03",
        title: "Space Planning",
        desc: "Creating functional layouts and furniture arrangements.",
      },
      {
        step: "04",
        title: "Installation",
        desc: "Bringing the design to life with precision.",
      },
    ],
  },
  renovation: {
    title: "Renovation",
    subtitle: "REFRESH & REVITALIZE",
    hero: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1920&auto=format&fit=crop",
    description:
      "We reimagine existing spaces with a blend of sensitivity and innovation. Our renovation approach preserves what matters while elevating form, function, and overall design quality.",
    features: [
      {
        title: "Structural Updates",
        desc: "Safe and compliant structural modifications and improvements.",
      },
      {
        title: "Modern Systems",
        desc: "Upgrading electrical, plumbing, and HVAC systems.",
      },
      {
        title: "Aesthetic Refresh",
        desc: "Contemporary finishes and fixtures for a modern look.",
      },
      {
        title: "Space Reconfiguration",
        desc: "Reimagining layouts for better flow and functionality.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        desc: "Thorough inspection of existing conditions and potential.",
      },
      {
        step: "02",
        title: "Design Solutions",
        desc: "Creative approaches to maximize your spaces potential.",
      },
      {
        step: "03",
        title: "Phased Execution",
        desc: "Strategic implementation to minimize disruption.",
      },
      {
        step: "04",
        title: "Quality Assurance",
        desc: "Meticulous attention to finish quality and details.",
      },
    ],
  },
};

const ServiceDetailPage = ({ service = "exterior" }) => {
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  const processLineRef = useRef(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  // Ensure we get the correct service, default to exterior if undefined
  const currentService = serviceData[service] || serviceData.exterior;

  // Get related projects logic
  useEffect(() => {
    const getRelatedProjects = () => {
      const allProjects = projectsData.projects;

      const serviceProjectMap = {
        exterior: allProjects.filter((p) =>
          p.tags.some(
            (tag) =>
              tag.toLowerCase().includes("modern") ||
              tag.toLowerCase().includes("contemporary") ||
              tag.toLowerCase().includes("bold")
          )
        ),
        planning: allProjects.filter(
          (p) =>
            p.category === "Residential" ||
            p.tags.some((tag) => tag.toLowerCase().includes("design"))
        ),
        consultation: allProjects.filter((p) =>
          p.tags.some((t) => t.includes("Luxury"))
        ),
        interior: allProjects.filter((p) =>
          p.tags.some(
            (tag) =>
              tag.toLowerCase().includes("luxury") ||
              tag.toLowerCase().includes("minimalist") ||
              tag.toLowerCase().includes("creative")
          )
        ),
        renovation: allProjects.filter((p) =>
          p.tags.some(
            (tag) =>
              tag.toLowerCase().includes("traditional") ||
              tag.toLowerCase().includes("timeless")
          )
        ),
      };

      const related = serviceProjectMap[service] || allProjects;
      return related.slice(0, 3); // Limit to 3 for editorial layout
    };

    setRelatedProjects(getRelatedProjects());
  }, [service]);

  // --- GSAP ANIMATIONS ---
  // We add 'currentService' to dependency array to re-run animations when content changes
  useEffect(() => {
    // Optional: Scroll to top when service changes
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Page Reveal
      gsap.set(containerRef.current, { autoAlpha: 0 });
      gsap.to(containerRef.current, { autoAlpha: 1, duration: 0.8, ease: "power2.out" });

      // 2. Hero Animation Timeline
      const heroTl = gsap.timeline({ delay: 0.2 });
      
      heroTl.from(".sd-hero-title", {
        y: 120,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        skewY: 5,
      })
      .from(".sd-hero-image-container", {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out"
      }, "-=1") 
      .from(".sd-hero-desc", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=1");

      // Hero Parallax on Scroll
      gsap.to(heroImageRef.current, {
        yPercent: 20, 
        scale: 1, 
        ease: "none",
        scrollTrigger: {
            trigger: ".sd-hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
      });


      // 3. Features Stagger Reveal
      // gsap.from(".sd-feature-item", {
      //   scrollTrigger: {
      //     trigger: ".sd-features-list",
      //     start: "top 80%",
      //   },
      //   y: 60,
      //   opacity: 0,
      //   stagger: 0.15,
      //   duration: 1,
      //   ease: "power3.out",
      // });

      // 4. Process Section Animations
      // 4a. Draw the line
      gsap.to(processLineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: ".sd-process-container",
            start: "top center",
            end: "bottom center",
            scrub: 0.5,
        }
      });

      // 4b. Activate steps and fade them in
      const steps = gsap.utils.toArray(".sd-process-step");
      steps.forEach((step) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        ScrollTrigger.create({
            trigger: step,
            start: "top center+=100", 
            end: "bottom center+=100",
            toggleClass: { targets: step, className: "active" },
        });
      });

      // 5. Projects Parallax and Reveal
      const projectItems = gsap.utils.toArray(".sd-project-item");
      projectItems.forEach((item) => {
        gsap.from(item.querySelector(".sd-project-info"), {
           scrollTrigger: { trigger: item, start: "top 75%" },
           y: 60,
           opacity: 0,
           duration: 1,
           ease: "power3.out"
        });

        gsap.fromTo(item.querySelector(".sd-project-image"), 
            { scale: 1.2, yPercent: -10 }, 
            { scale: 1, yPercent: 10, 
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, [service]); // Re-run GSAP when service changes

  return (
    <div ref={containerRef} className="servicedetail-container">
      {/* --- HERO SECTION --- */}
      <section className="sd-hero">
        <div className="sd-hero-header">
          <span className="sd-overline">{currentService.subtitle}</span>
          <h1 className="sd-hero-title">{currentService.title}</h1>
        </div>
        
        <div className="sd-hero-image-container">
          <img
            ref={heroImageRef}
            src={currentService.hero}
            alt={currentService.title}
            className="sd-hero-image"
          />
        </div>

        <div className="sd-hero-footer">
          <p className="sd-hero-desc">
            {currentService.description}
          </p>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="sd-features">
        <h2 className="sd-section-title">Our Expertise</h2>
        <div className="sd-features-list">
          {currentService.features.map((feature, index) => (
            <div key={index} className="sd-feature-item">
              <div className="sd-feature-num">
                {String(index + 1).padStart(2, "0")}.
              </div>
              <h3 className="sd-feature-title">{feature.title}</h3>
              <p className="sd-feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="sd-process">
         <h2 className="sd-section-title">The Approach</h2>
         <div className="sd-process-container">
            {/* The vertical lines */}
            <div className="sd-process-line"></div>
            <div ref={processLineRef} className="sd-process-line-progress"></div>

            {currentService.process.map((step, index) => (
                <div key={index} className="sd-process-step">
                    <div className="sd-process-marker"></div>
                    <span className="sd-process-step-num">Stage {step.step}</span>
                    <h3 className="sd-process-title">{step.title}</h3>
                    <p className="sd-process-desc">{step.desc}</p>
                </div>
            ))}
         </div>
      </section>

      {/* --- RELATED PROJECTS SECTION --- */}
      {relatedProjects.length > 0 && (
        <section className="sd-projects">
          <h2 className="sd-section-title">Selected Works</h2>
          
          <div className="sd-projects-list">
            {relatedProjects.map((project, index) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="sd-project-item"
              >
                <div className="sd-project-image-wrap">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="sd-project-image"
                  />
                </div>
                <div className="sd-project-info">
                  <span className="sd-project-meta">{project.category} — {project.year}</span>
                  <h3 className="sd-project-title">
                    {project.title}
                  </h3>
                  <div className="sd-project-view">
                    View Project <span className="sd-project-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="sd-projects-cta-wrap">
            <SlideUpButton href="/works">View all works</SlideUpButton>
          </div>
        </section>
      )}

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;