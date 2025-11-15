import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "../components/SlideUpButton";

import { Link } from "react-router-dom";

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

  useEffect(() => {
    window.scrollTo(0, 0);
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
                to={`/project/${project.slug}`}
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
            <SlideUpButton to="/works">View all works</SlideUpButton>
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

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        .servicedetail-container {
          
          color: #000;
          background-color: #fff;
        }

        /* Hero Section */
        .servicedetail-hero {
 
          margin: 0 auto;
          padding: 120px 40px 80px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .servicedetail-hero-content {
          max-width: 600px;
        }

        .servicedetail-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #999;
          margin-bottom: 20px;
          padding: 8px 16px;
          background: #f5f5f5;
          border-radius: 20px;
        }

        .servicedetail-hero-title {
          font-size: 72px;
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1.1;
          margin: 0 0 24px;
        }

        .servicedetail-hero-desc {
          font-size: 18px;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        .servicedetail-hero-image-wrapper {
          height: 600px;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
        }

        .servicedetail-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Section Header */
        .servicedetail-section-header {
          max-width: 1440px;
          margin: 0 auto 80px;
          padding: 0 40px;
        }

        .servicedetail-section-title {
          font-size: 56px;
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1.2;
          margin: 12px 0 0;
        }

        /* Features Section */
        .servicedetail-features {
          
          margin: 140px auto;
          padding: 0 40px;
        }

        .servicedetail-features-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .servicedetail-feature-item {
          display: flex;
          gap: 60px;
          align-items: flex-start;
          padding: 60px 0;
          border-bottom: 1px solid #e5e5e5;
          transition: all 0.4s ease;
        }

        .servicedetail-feature-item:first-child {
          border-top: 1px solid #e5e5e5;
        }

        .servicedetail-feature-item:hover {
          padding-left: 20px;
          background: linear-gradient(90deg, #fafafa 0%, transparent 100%);
        }

        .servicedetail-feature-number {
          font-size: 64px;
          font-weight: 700;
          color: #000;
          line-height: 1;
          min-width: 120px;
          opacity: 0.1;
          transition: opacity 0.3s ease;
        }

        .servicedetail-feature-item:hover .servicedetail-feature-number {
          opacity: 1;
        }

        .servicedetail-feature-content {
          flex: 1;
        }

        .servicedetail-feature-title {
          font-size: 32px;
          font-weight: 500;
          margin: 0 0 16px;
          color: #000;
        }

        .servicedetail-feature-desc {
          font-size: 16px;
          line-height: 1.6;
          color: #666;
          margin: 0;
        }

        /* Process Section */
        .servicedetail-process {
          
          margin: 140px auto;
          padding: 80px 40px;
          background: #fafafa;
        }

        .servicedetail-process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .servicedetail-process-card {
          background: #fff;
          padding: 48px;
          border-radius: 24px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .servicedetail-process-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #000 0%, #999 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }

        .servicedetail-process-card:hover::before {
          transform: scaleX(1);
        }

        .servicedetail-process-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
        }

        .servicedetail-process-step-badge {
          display: inline-block;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          background: #000;
          padding: 8px 20px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .servicedetail-process-title {
          font-size: 28px;
          font-weight: 600;
          margin: 0 0 16px;
          color: #000;
        }

        .servicedetail-process-desc {
          font-size: 15px;
          line-height: 1.6;
          color: #666;
          margin: 0 0 24px;
        }

        .servicedetail-process-arrow {
          font-size: 32px;
          color: #000;
          opacity: 0.2;
          transition: all 0.3s ease;
        }

        .servicedetail-process-card:hover .servicedetail-process-arrow {
          opacity: 1;
          transform: translateX(8px);
        }

        /* Gallery Section */
        .servicedetail-gallery {
          max-width: 1440px;
          margin: 140px auto;
          padding: 0 40px;
        }

        .servicedetail-gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .servicedetail-gallery-item {
          border-radius: 24px;
          overflow: hidden;
          position: relative;
        }

        .servicedetail-gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .servicedetail-gallery-item:hover .servicedetail-gallery-image {
          transform: scale(1.05);
        }

        /* Related Projects Section */
        .servicedetail-projects {
          max-width: 1440px;
          margin: 140px auto;
          padding: 80px 40px;
          
        }

        .servicedetail-projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 60px;
        }

        .servicedetail-project-card {
          text-decoration: none;
          color: inherit;
          display: block;
          transition: transform 0.4s ease;
        }

        .servicedetail-project-card:hover {
          transform: translateY(-8px);
        }

        .servicedetail-project-image-wrapper {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
        }

        .servicedetail-project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .servicedetail-project-card:hover .servicedetail-project-image {
          transform: scale(1.08);
        }

        .servicedetail-project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .servicedetail-project-card:hover .servicedetail-project-overlay {
          opacity: 1;
        }

        .servicedetail-project-view {
          color: #fff;
          font-size: 18px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .servicedetail-project-info {
          padding: 0 8px;
        }

        .servicedetail-project-title {
          font-size: 24px;
          font-weight: 600;
          margin: 0 0 8px;
          color: #000;
          letter-spacing: -0.5px;
        }

        .servicedetail-project-meta {
          display: flex;
          gap: 12px;
          font-size: 14px;
          color: #666;
          align-items: center;
        }

        .servicedetail-projects-cta {
          text-align: center;
        }

        .servicedetail-view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 18px 40px;
          background: #000;
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .servicedetail-view-all-btn:hover {
          background: #333;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .servicedetail-view-all-btn .arrow {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .servicedetail-view-all-btn:hover .arrow {
          transform: translateX(4px);
        }

        /* CTA Section */
        .servicedetail-cta {
          max-width: 1440px;
          margin: 140px auto;
          padding: 0 40px;
        }

        .servicedetail-cta-content {
          background: linear-gradient(135deg, #000 0%, #333 100%);
          padding: 120px 80px;
          border-radius: 32px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .servicedetail-cta-content::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .servicedetail-cta-title {
          font-size: 56px;
          font-weight: 400;
          letter-spacing: -2px;
          margin: 0 0 20px;
          color: #fff;
          position: relative;
          z-index: 1;
        }

        .servicedetail-cta-desc {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 40px;
          position: relative;
          z-index: 1;
        }

        .servicedetail-cta-button {
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          padding: 20px 48px;
          background: #fff;
          color: #000;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          z-index: 1;
        }

        .servicedetail-cta-button::after {
          content: "";
          width: 8px;
          height: 8px;
          background: #000;
          border-radius: 50%;
          margin-left: 12px;
        }

        .servicedetail-cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .servicedetail-cta-button {
            padding: 16px 32px;
            font-size: 14px;
          }

          .servicedetail-projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media(max-width: 768px) {
          .servicedetail-hero {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 80px 40px 60px;
          }

          .servicedetail-hero-content {
            text-align: center;
          }

          .servicedetail-hero-title {
            font-size: 48px;
          }

          .servicedetail-hero-desc {
            font-size: 16px;
          }

          .servicedetail-process-grid {
            grid-template-columns: 1fr;
          }

          .servicedetail-gallery-grid {
            grid-template-columns: 1fr;
          }

          .servicedetail-projects-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .servicedetail-project-image-wrapper {
            height: 300px;
          }

          .servicedetail-cta-content {
            padding: 80px 40px;
          }

          .servicedetail-cta-title {
            font-size: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailPage;
