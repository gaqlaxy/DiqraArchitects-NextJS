"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Footer from "@/app/components/Footer";
import projectsData from "@/app/data/projects-data.json";
import "@/app/styles/InteriorWorks.css";

export default function InteriorWorks() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const progress = scrollWidth > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Filter only interior projects
  const projects = projectsData.projects.filter(
    (project) => project.projectType === "interior"
  );

  return (
    <div className="gallery-container">
      {/* Mobile Header */}
      {isMobile && (
        <div className="mobile-header">
          <h1 className="mobile-title">WORKS</h1>
          <div className="mobile-links">
            <Link href="/works">← ARCHITECTURE</Link>

            {/* <Link to="/interior" className="uppercase tracking-wide">
              INTERIOR
            </Link> */}
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div
        ref={scrollContainerRef}
        className={
          isMobile ? "scroll-container-mobile" : "scroll-container-desktop"
        }
      >
        {/* Projects Grid */}
        <div
          className={
            isMobile ? "projects-grid-mobile" : "projects-grid-desktop"
          }
        >
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <Link
                key={project.id}
                href={`/project/${project.slug}`}
                className={`project-card ${idx % 2 === 0 ? "tall" : "wide"}`}
              >
                <div className="project-inner">
                  <img src={project.thumbnail} alt={project.title} />
                  <div className="overlay" />
                  <div className="project-title-container">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-projects">
              <p>No interior projects available at the moment.</p>
            </div>
          )}
        </div>
      </div>

      {!isMobile && (
        <div className="desktop-header">
          <div className="works-title">
            <h1>WORKS</h1>
          </div>

          <div className="scroll-indicator">
            <span className="scroll-text">SCROLL DOWN TO EXPLORE</span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <span className="progress-percent">
              ({Math.round(scrollProgress)}%)
            </span>
          </div>
          <div className="desktop-links">
            <Link href="/works">← ARCHITECTURE</Link>
            {/* <Link to="/interior">INTERIOR</Link> */}
          </div>
        </div>
      )}

      {isMobile && <Footer />}
    </div>
  );
}
