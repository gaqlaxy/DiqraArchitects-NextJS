"use client";

import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/styles/ServiceDetailPage.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceDetailPage = ({ customData = {}, service = "service" }) => {
  const containerRef = useRef(null);
  const currentService = customData || {};

  // Sample related services - in production, fetch from data or pass as props
  const relatedServices = [
    { slug: "architects", title: "Architects", hint: "Architecture & Design · Chennai" },
    { slug: "interior-designers", title: "Interior Designers", hint: "Boutique interiors · Chennai" },
    { slug: "building-contractors", title: "Building Contractors", hint: "Turnkey execution" },
  ];

  // Projects data - in production, fetch from a centralized projects.json
  const projectsData = [
    { id: 1, slug: "jaloura-house", title: "Jaloura House", cat: "Residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200" },
    { id: 2, slug: "myrtle-pavilion", title: "Myrtle Pavilion", cat: "Structure", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" },
    { id: 3, slug: "urban-loft", title: "Urban Loft", cat: "Commercial", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" },
    { id: 4, slug: "the-grove-villa", title: "The Grove Villa", cat: "Residential", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200" },
    { id: 5, slug: "apex-hq", title: "Apex HQ", cat: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      gsap.fromTo(
        ".sd-hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".sd-hero-tagline, .sd-hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.6 }
      );

      // 2. Stats Band Animation
      gsap.fromTo(
        ".sd-stat-metric",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-stats-band",
            start: "top 80%",
          },
        }
      );

      // 3. Feature Rows Animation
      const featureRows = containerRef.current.querySelectorAll(".sd-feature-row");
      featureRows.forEach((row, i) => {
        const image = row.querySelector(".sd-feature-image");
        const content = row.querySelector(".sd-feature-content");

        gsap.fromTo(
          image,
          { scale: 1.1, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 70%",
            },
          }
        );

        gsap.fromTo(
          content,
          { x: i % 2 === 0 ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: row,
              start: "top 70%",
            },
          }
        );
      });

      // 4. Vertical Stepper Animation
      const steps = containerRef.current.querySelectorAll(".sd-step-row");
      gsap.fromTo(
        steps,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-process-section",
            start: "top 60%",
          },
        }
      );

      // 5. Masonry Portfolio Animation
      const masonryItems = containerRef.current.querySelectorAll(".sd-masonry-item");
      gsap.fromTo(
        masonryItems,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-masonry-grid",
            start: "top 70%",
          },
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, [currentService]);

  return (
    <div ref={containerRef} className="sd-master-container">
      {/* Navbar Integration */}
      <Navbar />

      {/* SPLIT HERO SECTION */}
      <section className="sd-hero">
        <div className="sd-hero-image-col">
          {currentService.hero ? (
            <img src={currentService.hero} alt={currentService.title} className="sd-hero-img" />
          ) : (
            <div className="sd-placeholder-img">Category Image</div>
          )}
          <div className="sd-hero-scroll">↓ &nbsp; Scroll</div>
        </div>
        <div className="sd-hero-text-col">
          <div className="sd-hero-eyebrow">Architecture &amp; Design · Chennai</div>
          <h1 className="sd-hero-title">{currentService.title}</h1>
          <p className="sd-hero-tagline">{currentService.subtitle}</p>
          <button className="sd-hero-cta">Explore Service</button>
        </div>
      </section>

      {/* DARK STATS BAND */}
      <div className="sd-stats-band">
        <div className="sd-stats-tagline">
          "Transforming abstract ideas into buildable blueprints since 2009."
        </div>
        {(currentService.stats || []).map((stat, i) => (
          <div key={i} className="sd-stat-metric">
            <div className="sd-stat-value">{stat.value}</div>
            <div className="sd-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ALTERNATING FEATURE ROWS */}
      {currentService.features && currentService.features.length > 0 && (
        <section className="sd-features-section">
          <div className="sd-section-label-header">Key Expertise</div>
          {currentService.features.map((feature, i) => (
            <div key={i} className={`sd-feature-row ${i % 2 !== 0 ? "sd-reverse" : ""}`}>
              <div className="sd-feature-image">
                <div className="sd-placeholder-img">{feature.title}</div>
              </div>
              <div className="sd-feature-content">
                <div className="sd-feature-num">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="sd-feature-title">{feature.title}</h3>
                <p className="sd-feature-desc">{feature.desc}</p>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* PROCESS: Vertical Stepper */}
      {currentService.process && currentService.process.length > 0 && (
        <section className="sd-process-section">
          <div className="sd-process-left">
            <div className="sd-section-label">Methodology</div>
            <h2 className="sd-process-main-title">Our<br />Process</h2>
            <p className="sd-process-sub">A rigorous design process refined over 15 years and 1000+ projects.</p>
          </div>
          <div className="sd-process-right">
            {currentService.process.map((step, i) => (
              <div key={i} className="sd-step-row">
                <div className="sd-step-num">{step.step || String(i + 1).padStart(2, "0")}</div>
                <div className="sd-step-content">
                  <h3 className="sd-step-title">{step.title}</h3>
                  <p className="sd-step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MASONRY PORTFOLIO GRID */}
      <section className="sd-masonry-section">
        <div className="sd-masonry-header">
          <div>
            <div className="sd-section-label">Portfolio</div>
            <h2 className="sd-masonry-main-title">Recent Projects</h2>
          </div>
          <Link href="/gallery" className="sd-view-all">View All →</Link>
        </div>
        <div className="sd-masonry-grid">
          {projectsData.map((project, i) => (
            <Link href={`/project/${project.slug}`} key={project.id} className={`sd-masonry-item sd-item-${i+1}`}>
              <img src={project.img} alt={project.title} className="sd-masonry-img" />
              <div className="sd-masonry-overlay">
                <div className="sd-masonry-cat">{project.cat}</div>
                <div className="sd-masonry-title">{project.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="sd-related-section">
        <div className="sd-section-label">Explore More</div>
        <h2 className="sd-related-main-title">Related Services</h2>
        <div className="sd-related-cards">
          {relatedServices.map((rel, i) => (
            <Link key={rel.slug} href={`/services/${rel.slug}`} className="sd-related-card">
              <div className="sd-card-arrow">→</div>
              <div className="sd-card-title">{rel.title}</div>
              <div className="sd-card-hint">{rel.hint}</div>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;