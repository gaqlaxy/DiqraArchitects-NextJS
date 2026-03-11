"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/styles/Works.css";

import Footer from "@/app/components/Footer";
import projectsData from "@/app/data/projects-data.json";

gsap.registerPlugin(ScrollTrigger);

export default function WorksPage() {
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  // Filter Projects Logic
  useEffect(() => {
    let filtered = projectsData.projects;
    if (filter !== "all") {
      filtered = filtered.filter(p => p.projectType.toLowerCase() === filter);
    }
    setFilteredProjects(filtered);
  }, [filter]);

  // Handle GSAP Reveal when projects change
  useEffect(() => {
    if (!containerRef.current || filteredProjects.length === 0) return;

    let ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".wp-project-card");
      
      // Reset state for new items
      gsap.set(items, { y: 50, opacity: 0 });

      // Stagger animate them in
      ScrollTrigger.batch(items, {
        onEnter: elements => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
          });
        },
        start: "top 85%",
      });

    }, containerRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <div className="wp-container" ref={containerRef}>
      
      {/* --- HERO --- */}
      <section className="wp-hero">
        <h1 className="wp-hero-title">Selected<br/>Works</h1>
        
        {/* Filter Navigation */}
        <div className="wp-filter-nav">
          <button 
            className={`wp-filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button 
            className={`wp-filter-btn ${filter === "architecture" ? "active" : ""}`}
            onClick={() => setFilter("architecture")}
          >
            Architecture
          </button>
          <button 
            className={`wp-filter-btn ${filter === "interior" ? "active" : ""}`}
            onClick={() => setFilter("interior")}
          >
            Interior
          </button>
        </div>
      </section>

      {/* --- MASONRY GRID --- */}
      <section className="wp-grid-section">
        <div className="wp-masonry-grid">
          {filteredProjects.map((project, idx) => (
            <Link
              key={project.id}
              href={`/project/${project.slug}`}
              className={`wp-project-card ${idx % 3 === 0 ? "large" : "standard"}`}
            >
              <div className="wp-image-wrapper">
                <img src={project.thumbnail} alt={project.title} loading="lazy" />
                <div className="wp-overlay"></div>
                <div className="wp-meta-hover">
                  <span className="wp-meta-year">{project.year || "2024"}</span>
                  <span className="wp-meta-type">{project.projectType}</span>
                </div>
              </div>
              <div className="wp-project-info">
                <h3 className="wp-project-title">{project.title}</h3>
                <span className="wp-project-location">{project.location || "View Details →"}</span>
              </div>
            </Link>
          ))}

          {filteredProjects.length === 0 && (
            <div className="wp-empty-state">
              <p>No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
