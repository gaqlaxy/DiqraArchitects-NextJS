"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import projectsData from "../data/projects-data.json";
import "../styles/FeaturedWorks.css";
import SlideUpButton from "./SlideUpButton";

const FeaturedWorks = () => {
  useEffect(() => {
    // Slide-up effect for CTA button
    const createSlideUpEffect = (element) => {
      let span = element.querySelector("span");

      if (!span) {
        const originalText = element.textContent;
        element.innerHTML = `<span>${originalText}</span>`;
        span = element.querySelector("span");
      }

      if (span.querySelector(".text-original")) return; // avoid duplicate init

      const originalText = span.textContent;
      span.innerHTML = `
        <span class="text-original">${originalText}</span>
        <span class="text-hover">${originalText}</span>
      `;

      const originalSpan = span.querySelector(".text-original");
      const hoverSpan = span.querySelector(".text-hover");
      const slideDistance = originalSpan.offsetHeight;

      gsap.set(span, {
        overflow: "hidden",
        position: "relative",
        display: "block",
        height: "auto",
      });

      gsap.set(originalSpan, { y: 0, position: "relative", display: "block" });
      gsap.set(hoverSpan, {
        y: `${slideDistance}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "block",
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(originalSpan, {
        y: `-${slideDistance}px`,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(
          hoverSpan,
          {
            y: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0
        )
        .to(originalSpan, { opacity: 0, duration: 0.1 }, 0.2)
        .to(hoverSpan, { opacity: 1, duration: 0.1 }, 0.2);

      tl.eventCallback("onReverseComplete", () => {
        gsap.set(originalSpan, { y: 0, opacity: 1 });
        gsap.set(hoverSpan, { y: `${slideDistance}px`, opacity: 0 });
      });

      return tl;
    };

    const styledCtaBtns = document.querySelectorAll(".cta-btn-styled");
    styledCtaBtns.forEach((btn) => {
      const timeline = createSlideUpEffect(btn);
      if (timeline) {
        btn.addEventListener("mouseenter", () => timeline.play());
        btn.addEventListener("mouseleave", () => timeline.reverse());
      }
    });
  }, []);

  // Filter only featured projects and limit to 6
  const featuredWorks = projectsData.projects
    .filter((project) => project.featured)
    .slice(0, 6);

  return (
    <section className="featured-section">
      <div className="section-header">
        <h2 className="section-title">
          FEATURED <br /> WORKS
        </h2>
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
