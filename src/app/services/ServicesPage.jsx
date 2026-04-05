"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "@/app/components/SlideUpButton";
import "../styles/ServicesPage.css";
import Link from "next/link";
import categoriesData from "@/app/data/categories.json";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "01",
    title: "Exterior Design",
    description: "Bold, refined exteriors that balance form, function, and visual harmony.",
    image: "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332&auto=format&fit=crop",
    link: "/services/exterior",
  },
  {
    id: "02",
    title: "Design and Planning",
    description: "From conceptual layouts to detailed drawings, focusing on spatial flow.",
    image: "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017&auto=format&fit=crop",
    link: "/services/architectural",
  },
  {
    id: "03",
    title: "Consultation",
    description: "Expert guidance to help you make confident design decisions.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    link: "/services/consultancy",
  },
  {
    id: "04",
    title: "Interior Design",
    description: "Creating interiors that feel balanced, elegant, and purposeful.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop",
    link: "/services/interiors",
  },
  {
    id: "05",
    title: "Renovation",
    description: "Reimagining existing spaces with sensitivity and modern innovation.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
    link: "/services/renovation",
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  useEffect(() => {
    scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      const heroLines = containerRef.current.querySelectorAll(".sp-hero-line");
      gsap.fromTo(
        heroLines,
        { y: "110%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".sp-hero-sub",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.6,
        }
      );

      // 2. List Items Reveal on Scroll
      const listItems = containerRef.current.querySelectorAll(".sp-list-item");
      gsap.fromTo(
        listItems,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".sp-interactive-section",
            start: "top 75%",
          },
        }
      );

      // 3. Right Image Container Fade In
      gsap.fromTo(
        ".sp-image-sticky",
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sp-interactive-section",
            start: "top 60%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="sp-container" ref={containerRef}>
      {/* Hero */}
      <section className="sp-hero">
        <div className="sp-hero-inner">
          <h1 className="sp-title">
            <span className="sp-mask">
              <span className="sp-hero-line">Our</span>
            </span>
            <span className="sp-mask sp-indent">
              <span className="sp-hero-line">Services</span>
            </span>
          </h1>
          <div className="sp-hero-meta">
            <p className="sp-hero-sub">
              Delivering high-craft architectural and interior solutions tailored
              to elevate both the human experience and the built environment.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive List Section */}
      <section className="sp-interactive-section">
        <div className="sp-interactive-container">
          
          {/* Left: Monumental List */}
          <div className="sp-list-wrapper">
            <ul className="sp-list">
              {servicesData.map((service, index) => (
                <li
                  key={service.id}
                  className={`sp-list-item ${hoveredIndex === index ? "active" : ""}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onTouchStart={() => setHoveredIndex(index)}
                >
                  <Link href={service.link} className="sp-item-link">
                    <span className="sp-item-num">{service.id}</span>
                    <h2 className="sp-item-title">{service.title}</h2>
                    <div className="sp-item-reveal-content">
                      <p className="sp-item-desc">{service.description}</p>
                      <span className="sp-item-arrow">Explore →</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Fixed Image Pane */}
          <div className="sp-image-wrapper">
            <div className="sp-image-sticky">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className={`sp-image-frame ${hoveredIndex === index ? "active" : ""}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="sp-image-asset"
                    loading="lazy"
                  />
                  <div className="sp-image-overlay"></div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
      
      {/* Specialized Services Directory */}
      <section className="sp-directory">
        <div className="sp-directory-inner">
          <div className="sp-directory-header">
            <h2 className="sp-directory-title">Specific Expertise</h2>
            <p className="sp-directory-subtitle">Focused solutions for niche architectural and construction requirements.</p>
          </div>
          <div className="sp-directory-grid">
            {categoriesData
              .filter(cat => [
                "exterior",
                "architectural",
                "consultancy",
                "interiors",
                "renovation",
              ].includes(cat.slug))
              .map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="sp-directory-item">
                  <div className="sp-dir-content">
                    <span className="sp-dir-title">{service.title}</span>
                    <span className="sp-dir-tag">{service.tagline.split('.')[0]}</span>
                  </div>
                  <span className="sp-dir-arrow">↗</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
