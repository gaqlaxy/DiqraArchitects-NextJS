"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import projectsData from "../data/projects-data.json";
import "../styles/FeaturedWorks.css";
import SlideUpButton from "./SlideUpButton";

gsap.registerPlugin(ScrollTrigger);

const FeaturedWorks = () => {
  const sectionRef = useRef(null);

  const featuredWorks = projectsData.projects
    .filter((project) => project.featured)
    .slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for work items
      const items = sectionRef.current.querySelectorAll(".work-item");
      gsap.fromTo(
        items,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Header reveal
      const header = sectionRef.current.querySelector(".fw-header");
      gsap.fromTo(
        header,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="featured-section" ref={sectionRef}>
      <div className="fw-header">
        <div className="fw-header-left">
          <span className="section-label">(Selected Work)</span>
          <h2 className="fw-title">
            Featured <br /> Works
          </h2>
        </div>
        <span className="fw-count">
          ({featuredWorks.length.toString().padStart(2, "0")})
        </span>
      </div>

      <div className="works-grid">
        {featuredWorks.map((work, index) => (
          <Link
            href={`/project/${work.slug}`}
            className={`work-item ${index === 0 ? "work-item-large" : ""}`}
            key={work.id}
          >
            <div className="work-image">
              <img src={work.thumbnail} alt={work.title} loading="lazy" />
              <div className="work-overlay">
                <span className="work-view">View →</span>
              </div>
            </div>
            <div className="work-info">
              <div className="work-meta">
                <span className="work-category">{work.category}</span>
                <span className="work-year">{work.year}</span>
              </div>
              <h3 className="work-title">{work.title}</h3>
              <span className="work-location">{work.location}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="fw-cta">
        <SlideUpButton href="/works">View All Works</SlideUpButton>
      </div>
    </section>
  );
};

export default FeaturedWorks;
