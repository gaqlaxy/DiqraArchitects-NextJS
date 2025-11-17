"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "@/app/components/SlideUpButton";
import "@/app/styles/ServiceDetailPage.css";

// import { Link } from "react-router-dom";
import Link from "next/link";

// Mock GSAP for demo

gsap.registerPlugin(ScrollTrigger);

// Mock projects data
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

const ServiceDetailPage = ({ service = "exterior" }) => {
  const containerRef = useRef(null);
  const [relatedProjects, setRelatedProjects] = useState([]);

  // Service data
  const serviceData = {
    exterior: {
      title: "Exterior Design",
      subtitle: "TRANSFORM YOUR PROPERTY",
      hero: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      gallery: [
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
      ],
    },
    planning: {
      title: "Design & Planning",
      subtitle: "FROM VISION TO REALITY",
      hero: "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      gallery: [
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
      ],
    },
    consultation: {
      title: "Consultation",
      subtitle: "EXPERT GUIDANCE",
      hero: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      gallery: [
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
      ],
    },
    interior: {
      title: "Interior Design",
      subtitle: "SPACES THAT INSPIRE",
      hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      gallery: [
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/cu8978xjlsjjpjk52ta0.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
      ],
    },
    renovation: {
      title: "Renovation",
      subtitle: "REFRESH & REVITALIZE",
      hero: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      gallery: [
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/aw6qwur0pggp5r03whjq.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/trh7c8ufv1dqfrofdytd.webp",
        "https://ik.imagekit.io/kg2nszxjp/GSAP%20pinned%20image%20mask%20reveal%20on%20scroll/sqwn8u84zd1besgl0zpd.webp",
      ],
    },
  };

  const currentService = serviceData[service];

  // Get related projects based on service
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
      return related.slice(0, 6);
    };

    setRelatedProjects(getRelatedProjects());
  }, [service]);

  return (
    <div ref={containerRef} className="servicedetail-container">
      {/* Hero Section */}
      <section className="servicedetail-hero">
        <div className="servicedetail-hero-content">
          <div className="servicedetail-label">{currentService.subtitle}</div>
          <h1 className="servicedetail-hero-title">{currentService.title}</h1>
          <p className="servicedetail-hero-desc">
            {currentService.description}
          </p>
        </div>
        <div className="servicedetail-hero-image-wrapper">
          <img
            src={currentService.hero}
            alt={currentService.title}
            className="servicedetail-hero-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="servicedetail-features">
        <div className="servicedetail-section-header">
          <div className="servicedetail-label">WHAT WE OFFER</div>
          <h2 className="servicedetail-section-title">Key Features</h2>
        </div>
        <div className="servicedetail-features-list">
          {currentService.features.map((feature, index) => (
            <div key={index} className="servicedetail-feature-item">
              <div className="servicedetail-feature-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="servicedetail-feature-content">
                <h3 className="servicedetail-feature-title">{feature.title}</h3>
                <p className="servicedetail-feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="servicedetail-process">
        <div className="servicedetail-section-header">
          <div className="servicedetail-label">OUR APPROACH</div>
          <h2 className="servicedetail-section-title">How We Work</h2>
        </div>
        <div className="servicedetail-process-grid">
          {currentService.process.map((step, index) => (
            <div key={index} className="servicedetail-process-card">
              <div className="servicedetail-process-step-badge">
                {step.step}
              </div>
              <h3 className="servicedetail-process-title">{step.title}</h3>
              <p className="servicedetail-process-desc">{step.desc}</p>
              <div className="servicedetail-process-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="servicedetail-projects">
          <div className="servicedetail-section-header">
            <div className="servicedetail-label">SELECTED PROJECTS</div>
            <h2 className="servicedetail-section-title">Related Work</h2>
          </div>
          <div className="servicedetail-projects-grid">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="servicedetail-project-card"
              >
                <div className="servicedetail-project-image-wrapper">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="servicedetail-project-image"
                  />
                  <div className="servicedetail-project-overlay">
                    <span className="servicedetail-project-view">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="servicedetail-project-info">
                  <h3 className="servicedetail-project-title">
                    {project.title}
                  </h3>
                  <div className="servicedetail-project-meta">
                    <span>{project.category}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="servicedetail-projects-cta">
            {/* <Link to="/works" className="servicedetail-view-all-btn">
              <span>View All Projects</span>
              <span className="arrow">→</span>
            </Link> */}
            <SlideUpButton href="/works">View all works</SlideUpButton>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {/* <section className="servicedetail-cta">
        <div className="servicedetail-cta-content">
          <h2 className="servicedetail-cta-title">
            Ready to Start Your Project?
          </h2>
          <p className="servicedetail-cta-desc">
            Let's discuss how we can bring your vision to life.
          </p>
          <a href="#contact" className="servicedetail-cta-button">
            <span>Get in Touch</span>
          </a>
        </div>
      </section> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
