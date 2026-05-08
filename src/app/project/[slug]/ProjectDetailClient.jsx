"use client";

import React, { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "@/app/styles/ProjectDetail.css";
import CTASection from "../../components/CtaSection";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailClient({ slug, projects = [] }) {
  const containerRef = useRef(null);

  // --- DATA RETRIEVAL ---
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  const nextProject =
    projectIndex !== -1
      ? projects[(projectIndex + 1) % projects.length]
      : null;

  // --- ANIMATIONS ---
  useLayoutEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. OPENING SEQUENCE
      // Title line slide up
      tl.from(".title-line span", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.08,
      });

      // Meta rows fade in
      tl.from(
        ".meta-row",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.06,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Hero Image Unmask (Clip path animation)
      tl.fromTo(
        ".hero-img-wrapper",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.4,
          ease: "power4.inOut",
        },
        "-=0.9"
      );

      // Scale the image on reveal
      tl.from(
        ".hero-img",
        { scale: 1.3, duration: 1.8, ease: "power2.out" },
        "-=1.4"
      );

      // 2. SCROLL ANIMATIONS (IMAGES)
      const contentImages = gsap.utils.toArray(".content-image-wrapper");
      contentImages.forEach((wrapper) => {
        const img = wrapper.querySelector("img");

        // Fade + Slide In
        gsap.fromTo(
          wrapper,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 85%",
            },
          }
        );

        // Internal Parallax
        gsap.fromTo(
          img,
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  // Reset scroll on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (projectIndex === -1) return null;

  return (
    <>
      <div ref={containerRef} className="minimal-project-page">
        {/* HEADER SECTION */}
        <header className="project-header">
          <div className="header-top">
            <Link href="/works" className="back-btn">
              &larr; Index
            </Link>
            <span className="header-year">{project.year}</span>
          </div>

          <h1 className="project-title">
            <div className="title-line">
              <span>{project.title}</span>
            </div>
          </h1>

          <div className="header-meta">
            <div className="meta-row">
              <span className="meta-label">Location</span>
              <span className="meta-value">{project.location}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Category</span>
              <span className="meta-value">{project.category}</span>
            </div>
            {project.details?.client && (
              <div className="meta-row">
                <span className="meta-label">Client</span>
                <span className="meta-value">{project.details.client}</span>
              </div>
            )}
            {project.details?.status && (
              <div className="meta-row">
                <span className="meta-label">Status</span>
                <span className="meta-value">{project.details.status}</span>
              </div>
            )}
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="hero-section">
          <div className="hero-img-wrapper" style={{ position: "relative" }}>
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              priority
              className="hero-img"
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
        </div>

        {/* CONTENT GRID (Sticky Sidebar + Flowing Images) */}
        <section className="content-grid">
          {/* LEFT: Sticky Sidebar */}
          <aside className="content-sidebar">
            <div className="sidebar-sticky-inner">
              <h2 className="sidebar-label">Overview</h2>
              <div className="project-description">{project.description}</div>

              {project.tags && project.tags.length > 0 && (
                <div className="tech-stack">
                  <h3 className="sidebar-label">Tags</h3>
                  <div className="tags-list">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="minimal-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.details && (
                <div className="tech-stack">
                  <h3 className="sidebar-label">Details</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {project.details.area && (
                      <div className="meta-row">
                        <span className="meta-label">Area</span>
                        <span className="meta-value">{project.details.area}</span>
                      </div>
                    )}
                    {project.details.architect && (
                      <div className="meta-row">
                        <span className="meta-label">Architect</span>
                        <span className="meta-value">{project.details.architect}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* RIGHT: Flowing Images */}
          <div className="content-flow">
            {project.images.slice(1).map((imgUrl, idx) => (
              <div key={idx} className="content-image-wrapper" style={{ position: "relative", aspectRatio: "3/2" }}>
                <Image
                  src={imgUrl}
                  alt={`${project.title} detail ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="content-img-asset"
                />
              </div>
            ))}
          </div>
        </section>

        {/* NEXT PROJECT SECTION */}
        {nextProject && (
          <section className="next-project-section">
            <Link
              href={`/project/${nextProject.slug}`}
              className="next-project-link"
            >
              <div className="next-project-bg">
                <Image
                  src={nextProject.thumbnail || nextProject.images[0]}
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                />
              </div>

              <div className="next-project-content">
                <span className="next-label">Next Project</span>
                <h2 className="next-title">{nextProject.title}</h2>
              </div>
            </Link>
          </section>
        )}
      </div>

      <CTASection />
      <Footer />
    </>
  );
}
