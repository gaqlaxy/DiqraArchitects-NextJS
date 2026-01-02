"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import projectsData from "../data/projects-data.json";
import "../styles/FeaturedWorks.css";
import SlideUpButton from "./SlideUpButton";

const FeaturedWorks = () => {
  
  // Filter only featured projects and limit to 6
  const featuredWorks = projectsData.projects
    .filter((project) => project.featured)
    .slice(0, 6);

  return (
    <section className="featured-section">
      <div className="section-header">
        <h1 className="section-title">
          FEATURED <br /> WORKS
        </h1>
        <span className="section-number">
          ({featuredWorks.length.toString().padStart(2, "0")})
        </span>
      </div>

      <div className="works-grid">
        {featuredWorks.map((work) => (
          // <Link
          //   to={`/project/${work.slug}`}
          //   className="work-item"
          //   key={work.id}
          // >
          <Link
            href={`/project/${work.slug}`}
            className="work-item"
            key={work.id}
          >
            <div className="work-image">
              <img src={work.thumbnail} alt={work.title} />
              <div className="view-project-btn">
                <span>View Project</span>
              </div>
            </div>
            <div className="work-info">
              <div className="work-title">{work.title}</div>
              <div className="work-year">{work.year}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="cta-btn-container">
        {/* <Link to="/works" className="cta-btn-styled">
          <span>View all works</span>
        </Link> */}
        <SlideUpButton href="/works" className="ml-4">
          view all works
        </SlideUpButton>
      </div>
    </section>
  );
};

export default FeaturedWorks;
