"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import "@/app/styles/ServiceDetailPage.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServiceDetailPage = ({ customData = {}, service = "service" }) => {
  const containerRef = useRef(null);
  const ribbonRef = useRef(null);
  const currentService = customData || {};

  // Sample related services - in production, fetch from data
  const relatedServices = [
    { slug: "architects", title: "Architects" },
    { slug: "interior-designers", title: "Interior Designers" },
    { slug: "building-contractors", title: "Building Contractors" },
  ];

  const projectsData = {
    projects: [
      { id: 1, slug: "jaloura-house", title: "JALOURA", cat: "Residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200" },
      { id: 2, slug: "myrtle-pavilion", title: "MYRTLE", cat: "Structure", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200" },
      { id: 3, slug: "urban-loft", title: "URBAN", cat: "Commercial", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200" },
    ]
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Breadcrumb fade in
      gsap.fromTo(
        ".sd-breadcrumb",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.2 }
      );

      // 2. Hero title reveal
      const heroLines = containerRef.current.querySelectorAll(".sd-hero-line");
      gsap.fromTo(
        heroLines,
        { y: "110%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          delay: 0.3,
        }
      );

      // 3. Hero subtitle
      gsap.fromTo(
        ".sd-hero-subtitle",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.7,
        }
      );

      // 4. Intro section on scroll
      gsap.fromTo(
        ".sd-intro-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-intro-section",
            start: "top 70%",
          },
        }
      );

      // 5. Features cards stagger
      const featureCards = containerRef.current.querySelectorAll(".sd-feature-card");
      gsap.fromTo(
        featureCards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-features-section",
            start: "top 70%",
          },
        }
      );

      // 6. Process timeline
      const processSteps = containerRef.current.querySelectorAll(".sd-process-step");
      gsap.fromTo(
        processSteps,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-process-section",
            start: "top 65%",
          },
        }
      );

      // 7. Stats counter animation
      const stats = containerRef.current.querySelectorAll(".sd-stat-card");
      gsap.fromTo(
        stats,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out",
          scrollTrigger: {
            trigger: ".sd-stats-section",
            start: "top 70%",
          },
        }
      );

      // 8. Horizontal ribbon scroll
      if (ribbonRef.current) {
        gsap.to(ribbonRef.current, {
          x: () => -(ribbonRef.current.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: ".sd-ribbon-section",
            start: "top top",
            end: () => `+=${ribbonRef.current.scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });
      }

      // 9. Related services
      const relatedItems = containerRef.current.querySelectorAll(".sd-related-item");
      gsap.fromTo(
        relatedItems,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sd-related-section",
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentService]);

  return (
    <div ref={containerRef} className="sd-master-container">
      {/* BREADCRUMB NAVIGATION */}
      {/* <nav className="sd-breadcrumb" aria-label="Breadcrumb">
        <div className="sd-breadcrumb-inner">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/services">Services</Link>
          <span>/</span>
          <span aria-current="page">{currentService.title}</span>
        </div>
      </nav> */}

      {/* HERO SECTION */}
      <section className="sd-hero-section">
        <div className="sd-hero-inner">
          <h1 className="sd-hero-title">
            <span className="sd-mask">
              <span className="sd-hero-line">{currentService.title}</span>
            </span>
          </h1>
          <p className="sd-hero-subtitle">{currentService.subtitle}</p>
        </div>
        {currentService.hero && (
          <div className="sd-hero-image">
            <img
              src={currentService.hero}
              alt={`${currentService.title} - DIQRA Architects`}
              className="sd-hero-img"
              loading="lazy"
            />
          </div>
        )}
      </section>

      {/* INTRO SECTION */}
      <section className="sd-intro-section">
        <div className="sd-intro-inner">
          <div className="sd-intro-content">
            <p className="sd-intro-description">{currentService.description}</p>
            {currentService.stats && currentService.stats.length > 0 && (
              <div className="sd-intro-highlights">
                {currentService.stats.map((stat, i) => (
                  <div key={i} className="sd-highlight">
                    <span className="sd-highlight-value">{stat.value}</span>
                    <span className="sd-highlight-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FEATURES/EXPERTISE SECTION */}
      {currentService.features && currentService.features.length > 0 && (
        <section className="sd-features-section">
          <div className="sd-features-inner">
            <h2 className="sd-section-title">Key Expertise</h2>
            <div className="sd-features-grid">
              {currentService.features.map((feature, i) => (
                <div key={i} className="sd-feature-card">
                  <h3 className="sd-feature-title">{feature.title}</h3>
                  <p className="sd-feature-desc">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PROCESS SECTION */}
      {currentService.process && currentService.process.length > 0 && (
        <section className="sd-process-section">
          <div className="sd-process-inner">
            <h2 className="sd-section-title">Our Process</h2>
            <div className="sd-process-timeline">
              {currentService.process.map((step, i) => (
                <div key={i} className="sd-process-step">
                  <div className="sd-process-number">{step.step || `0${i + 1}`}</div>
                  <h3 className="sd-process-title">{step.title}</h3>
                  <p className="sd-process-desc">{step.desc}</p>
                  {i < currentService.process.length - 1 && <div className="sd-process-connector" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STATISTICS SECTION */}
      {currentService.stats && currentService.stats.length > 0 && (
        <section className="sd-stats-section">
          <div className="sd-stats-inner">
            <h2 className="sd-section-title">By The Numbers</h2>
            <div className="sd-stats-grid">
              {currentService.stats.map((stat, i) => (
                <div key={i} className="sd-stat-card">
                  <div className="sd-stat-value">{stat.value}</div>
                  <div className="sd-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PORTFOLIO RIBBON SECTION (Enhanced) */}
      <section className="sd-ribbon-section">
        <h2 className="sd-section-title sd-ribbon-title">Recent Projects</h2>
        <div className="sd-ribbon-track" ref={ribbonRef}>
          {projectsData.projects.map((project) => (
            <div key={project.id} className="sd-ribbon-item">
              <img src={project.img} alt={project.title} className="sd-ribbon-img" loading="lazy" />
              <div className="sd-ribbon-info">
                <span className="sd-ribbon-cat">{project.cat}</span>
                <h3 className="sd-ribbon-title">{project.title}</h3>
                <div style={{ marginTop: "3rem" }}>
                  <Link href={`/project/${project.slug}`} className="sd-ribbon-link">
                    View Project →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES SECTION */}
      <section className="sd-related-section">
        <div className="sd-related-inner">
          <h2 className="sd-section-title">Related Services</h2>
          <div className="sd-related-grid">
            {relatedServices.map((relService, i) => (
              <Link key={i} href={`/services/${relService.slug}`} className="sd-related-item">
                <span className="sd-related-name">{relService.title}</span>
                <span className="sd-related-arrow">→</span>
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

export default ServiceDetailPage;