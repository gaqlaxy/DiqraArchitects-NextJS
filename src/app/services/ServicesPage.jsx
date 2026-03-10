

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Imports from your original file structure
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "@/app/components/SlideUpButton";

// Import the CSS defined below
import "@/app/styles/ServicesPage.css";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "01",
    title: "Exterior Design",
    description:
      "We craft bold, refined exteriors that balance form, function, and lasting visual harmony. Every line serves a purpose.",
    image:
      "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332&auto=format&fit=crop",
    link: "/services/exterior-design",
    // Architectural Icon: Facade/Elevation
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M 45 30 L 55 20 L 75 20 L 75 75 L 45 75 Z" />
        <line x1="55" y1="20" x2="55" y2="30" />
        <rect x="20" y="40" width="25" height="35" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Design & Planning",
    description:
      "From conceptual layouts to detailed drawings. We focus on spatial flow and structural integrity before the first brick is laid.",
    image:
      "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017&auto=format&fit=crop",
    link: "/services/design-planning",
    // Architectural Icon: Blueprint/Grid
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="25" y="25" width="50" height="50" />
        <line x1="25" y1="50" x2="75" y2="50" />
        <line x1="50" y1="25" x2="50" y2="75" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Consultation",
    description:
      "Expert guidance to help you make confident design decisions. We analyze feasibility, budget, and zoning requirements.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    link: "/services/consultation",
    // Architectural Icon: Dialogue/Measurements
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M 25 45 L 50 25 L 75 45 L 75 75 L 25 75 Z" />
        <circle cx="50" cy="55" r="10" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Interior Design",
    description:
      "Creating interiors that feel balanced and elegant. We focus on materials, light, and the psychology of space.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop",
    link: "/services/interior-design",
    // Architectural Icon: Room/Perspective
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="20" y="30" width="60" height="40" rx="2" />
        <line x1="20" y1="50" x2="80" y2="50" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Renovation",
    description:
      "Reimagining existing spaces with sensitivity. We preserve the history while injecting modern innovation.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
    link: "/services/renovation",
    // Architectural Icon: Modification
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M 30 70 L 30 40 L 50 25 L 70 40 L 70 70 Z" />
        <line x1="40" y1="40" x2="40" y2="55" />
        <line x1="60" y1="40" x2="60" y2="55" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Small timeout ensures DOM is painted before GSAP calculates positions
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const rows = document.querySelectorAll(".arch-service-row");

        rows.forEach((row) => {
          const imgReveal = row.querySelector(".arch-img-reveal");
          const img = row.querySelector(".arch-img");
          const textContent = row.querySelector(".arch-text-content");

          if (!imgReveal) return;

          // 1. The Blueprint Wipe (Right to Left Reveal)
          gsap.to(imgReveal, {
            clipPath: "inset(0 0% 0 0)", // Fully visible
            ease: "power2.inOut",
            duration: 1.4,
            scrollTrigger: {
              trigger: row,
              start: "top 75%", // Triggers when row enters lower viewport
            },
          });

          // 2. Structural Parallax (Image moves slightly slower than scroll)
          gsap.to(img, {
            scale: 1, // Zooms out to normal
            yPercent: 10, // Moves down slightly
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });

          // 3. Technical Text Stagger
          if (textContent) {
            gsap.from(textContent.children, {
              y: 30,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 70%",
              },
            });
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="arch-container" ref={containerRef}>
      {/* 1. Technical Header */}
      <header className="arch-header-wrap">
        <h1 className="arch-title">Our Services</h1>
        <div className="arch-header-meta">
          <span className="arch-subtitle">Architecture & Design</span>
          <span className="arch-subtitle">Est. 2024</span>
        </div>
      </header>

      {/* 2. The Structural Grid */}
      <div className="arch-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="arch-service-row">
            {/* Column 1: Specs (ID & Icon) */}
            <div className="arch-col-1">
              <span className="arch-num">({service.id})</span>
              <div className="arch-icon-box">{service.icon}</div>
            </div>

            {/* Column 2: Content (Title, Desc, Button) */}
            <div className="arch-col-2">
              <div className="arch-text-content">
                <h2 className="arch-service-name">{service.title}</h2>
                <p className="arch-desc">{service.description}</p>

                {/* Your Custom SlideUpButton Component */}
                <div className="arch-btn-wrapper">
                  <SlideUpButton href={service.link}>Details</SlideUpButton>
                </div>
              </div>
            </div>

            {/* Column 3: Visual (The Reveal) */}
            <div className="arch-col-3">
              <div className="arch-img-reveal">
                <img
                  src={service.image}
                  alt={service.title}
                  className="arch-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Footer Integration */}
      <div className="arch-footer-wrapper">
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
