"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

// Components (Assuming these exist based on your code)
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "@/app/components/SlideUpButton";

// Styles
import "@/app/styles/ServiceDetailPage.css";

// Register GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ... [Keep your projectsData and serviceData objects here exactly as they were] ...
// (I am omitting the data objects for brevity, but copy them back in)
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
  const [relatedProjects, setRelatedProjects] = useState([]);
  const currentService = serviceData[service] || serviceData.exterior;

  useEffect(() => {
    const allProjects = projectsData.projects;
    const serviceProjectMap = {
      exterior: allProjects.filter((p) =>
        p.tags.some((tag) => /modern|bold/i.test(tag)),
      ),
      planning: allProjects.filter((p) => p.category === "Residential"),
      consultation: allProjects.filter((p) => p.tags.includes("Luxury")),
      interior: allProjects.filter((p) =>
        p.tags.some((tag) => /minimalist/i.test(tag)),
      ),
      renovation: allProjects.filter((p) =>
        p.tags.some((tag) => /traditional/i.test(tag)),
      ),
    };
    const related = serviceProjectMap[service] || allProjects;
    setRelatedProjects(related.slice(0, 3));
  }, [service]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    // Use MatchMedia for Responsive Animations
    let mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      // --- SHARED ANIMATIONS (All Screens) ---
      
      // Hero Entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power4.out" } });
      heroTl
        .from(".sd-hero-title-line", {
          y: "110%",
          duration: 1.2,
          stagger: 0.1,
          delay: 0.2,
        })
        .from(".sd-hero-meta", { opacity: 0, y: 20, duration: 1 }, "-=0.8")
        .from(
          heroImageRef.current,
          { scale: 1.15, filter: "blur(10px)", duration: 1.5 },
          "-=1.2",
        );

      // Hero Parallax
      gsap.to(heroImageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".sd-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Feature items fade in
      gsap.utils.toArray(".sd-feature-card").forEach((card) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Text reveal for process
      gsap.utils.toArray(".sd-process-item").forEach((item) => {
        gsap.from(item.querySelector(".sd-process-content"), {
          opacity: 0.2,
          x: -20,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Projects Hover Reveal Animation
      gsap.utils.toArray(".sd-project-row").forEach((row) => {
        gsap.from(row, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
          },
        });
      });

      // --- RESPONSIVE ANIMATIONS ---
      
      mm.add("(min-width: 1025px)", () => {
        // DESKTOP ONLY
        
        // 1. Pin the Expertise Title
        ScrollTrigger.create({
          trigger: ".sd-features-wrapper",
          start: "top top",
          end: "bottom bottom",
          pin: ".sd-sticky-title",
        });

        // 2. Process Line: Animate WIDTH (Horizontal)
        gsap.utils.toArray(".sd-process-item").forEach((item) => {
          gsap.fromTo(
            item.querySelector(".sd-process-line-fill"),
            { width: "0%" },
            {
              width: "100%",
              duration: 1,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: item,
                start: "top 70%",
                end: "bottom 70%",
                scrub: 0.5,
              },
            }
          );
        });
      });

      mm.add("(max-width: 1024px)", () => {
        // MOBILE / TABLET ONLY

        // 1. Process Line: Animate HEIGHT (Vertical)
        gsap.utils.toArray(".sd-process-item").forEach((item) => {
          gsap.fromTo(
            item.querySelector(".sd-process-line-fill"),
            { height: "0%" },
            {
              height: "100%",
              duration: 1,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: item,
                start: "top 70%",
                end: "bottom 70%", // Animate while scrolling past
                scrub: 0.5,
              },
            }
          );
        });
      });

    }, containerRef);

    return () => {
      ctx.revert();
      mm.revert(); // Make sure to revert MatchMedia too
    };
  }, [service]);

  return (
    <div ref={containerRef} className="sd-container">
      {/* HERO SECTION */}
      <header className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-hero-meta">
            <span className="sd-pill">{currentService.subtitle}</span>
            <p className="sd-hero-desc">{currentService.description}</p>
          </div>
          <h1 className="sd-hero-title">
            <div className="sd-line-mask">
              <span className="sd-hero-title-line">{currentService.title}</span>
            </div>
          </h1>
        </div>

        <div className="sd-hero-media">
          <img
            ref={heroImageRef}
            src={currentService.hero}
            alt={currentService.title}
            className="sd-hero-img"
          />
        </div>
      </header>

      {/* EXPERTISE (Sticky Scroll Layout) */}
      <section className="sd-features-wrapper">
        <div className="sd-sticky-col">
          <div className="sd-sticky-title">
            <h2>Expertise</h2>
            <p>Our core capabilities within this discipline.</p>
          </div>
        </div>
        <div className="sd-scroll-col">
          {currentService.features.map((feature, i) => (
            <div key={i} className="sd-feature-card">
              <span className="sd-feature-num">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="sd-feature-name">{feature.title}</h3>
              <p className="sd-feature-text">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="sd-process">
        <div className="sd-section-header">
          <h2>The Process</h2>
        </div>
        <div className="sd-process-list">
          {currentService.process.map((step, i) => (
            <div key={i} className="sd-process-item">
              <div className="sd-process-marker">
                <div className="sd-process-line">
                  <div className="sd-process-line-fill"></div>
                </div>
                <span className="sd-step-num">{step.step}</span>
              </div>
              <div className="sd-process-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORKS (List View) */}
      {relatedProjects.length > 0 && (
        <section className="sd-projects">
          <div className="sd-projects-header">
            <h2>Selected Works</h2>
            <Link href="/works" className="sd-view-all">
              All Projects
            </Link>
          </div>

          <div className="sd-projects-table">
            {relatedProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className="sd-project-row"
              >
                <div className="sd-row-content">
                  <span className="sd-row-cat">{project.category}</span>
                  <h3 className="sd-row-title">{project.title}</h3>
                  <span className="sd-row-year">{project.year}</span>
                </div>
                <div className="sd-row-image-reveal">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
              </Link>
            ))}
          </div>

          <div className="sd-mobile-cta">
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