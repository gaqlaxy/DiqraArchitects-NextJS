"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import projectsData from "../data/projects-data.json";
import "../styles/OhHeroSection.css";
import SlideUpButton from "./SlideUpButton";
// import "../styles/SlideUpLink.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function OhHeroSection() {
  const heroBgRef = useRef(null);
  const heroTopBarRef = useRef(null);
  const featuredLabelRef = useRef(null);
  const projectTitleRef = useRef(null);
  const projectYearRef = useRef(null);
  const heroH1Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const viewProjectRef = useRef(null);
  const hoverPreviewRef = useRef(null);
  const previewImageRef = useRef(null);

  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const ctaBtnRef = useRef(null);

  const [heroLoaded, setHeroLoaded] = useState(false);

  // Get the first featured project or fallback to first project
  const featuredProject =
    projectsData.projects.find((p) => p.featured) || projectsData.projects[0];
  const HERO_IMG = featuredProject.images[0];

  useEffect(() => {}, []);

  // 1) Preload hero image
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = HERO_IMG;
    const onLoad = () => setHeroLoaded(true);
    const onError = () => {
      // fallback: still mark loaded so UI and animations run
      setHeroLoaded(true);
      console.warn("Hero image failed to load, continuing anyway.");
    };
    img.addEventListener("load", onLoad);
    img.addEventListener("error", onError);

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
  }, [HERO_IMG]);

  // 2) Initialize GSAP only after hero image is loaded
  useEffect(() => {
    if (!heroLoaded) return;

    const ctx = gsap.context(() => {
      gsap.set(heroRef.current, { autoAlpha: 0 });
      gsap.to(heroRef.current, {
        autoAlpha: 1,
        duration: 0.45,
        ease: "power1.out",
      });

      // Parallax background effect
      const parallaxTween = gsap.to(heroBgRef.current, {
        yPercent: 10,
        scrub: 1,
        // ease: "none",
        // scrollTrigger: {
        //   trigger: heroRef.current,
        //   start: "top top",
        //   end: "bottom top",
        //   scrub: 1,
        //   invalidateOnRefresh: true,
        // },
      });

      // pin the hero while preserving proper measurement after load
      const pinTrigger = ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        // end: "bottom top",
        end: "+=80%",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });

      // Hover preview timeline
      const tl = gsap.timeline({ paused: true });
      timelineRef.current = tl;

      tl.to(hoverPreviewRef.current, {
        y: 0,
        duration: 0.9,
        ease: "power4.inOut",
      }).to(
        previewImageRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.7"
      );

      // CTA Button slide-up effect (same function but run after load)
      function createSlideUpEffect(element) {
        if (!element) return null;
        let span = element.querySelector("span");
        if (!span) {
          const originalText = element.textContent;
          element.innerHTML = `<span>${originalText}</span>`;
          span = element.querySelector("span");
        }
        if (span.querySelector(".text-original")) return null;
        const originalText = span.textContent;
        span.innerHTML = `
        <span class="text-original">${originalText}</span>
        <span class="text-hover">${originalText}</span>
      `;
        const originalSpan = span.querySelector(".text-original");
        const hoverSpan = span.querySelector(".text-hover");

        gsap.set(span, {
          overflow: "hidden",
          height: "auto",
          position: "relative",
          display: "block",
        });
        gsap.set(originalSpan, {
          y: 0,
          position: "relative",
          display: "block",
        });
        gsap.set(hoverSpan, {
          y: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
        });

        const ctaTl = gsap.timeline({ paused: true });
        ctaTl
          .to(originalSpan, { y: "-100%", duration: 0.3, ease: "power2.out" })
          .to(hoverSpan, { y: 0, duration: 0.3, ease: "power2.out" }, 0);

        return ctaTl;
      }

      const ctaTimeline = createSlideUpEffect(ctaBtnRef.current);

      // Refresh ScrollTrigger after all is set (ensures correct measurements)
      ScrollTrigger.refresh();

      // Apply styles for text animation
      gsap.set(".lineParent", { overflow: "hidden" });
      gsap.set(".lineChild", {
        display: "inline-block",
        transformOrigin: "0% 100%",
      });
    }, heroRef);
    // small fade-in for hero wrapper (visual polish)

    // cleanup on unmount
    //   return () => {
    //     tl.kill();
    //     if (ctaTimeline) ctaTimeline.kill();
    //     parallaxTween.kill();
    //     pinTrigger.kill();
    //     ScrollTrigger.getAll().forEach((t) => t.kill());
    //   };
    // }, [heroLoaded]);
    return () => ctx.revert();
  }, [heroLoaded]);

  const handleMouseEnter = () => timelineRef.current?.play();
  const handleMouseLeave = () => timelineRef.current?.reverse();
  const handleFocus = () => timelineRef.current?.play();
  const handleBlur = () => timelineRef.current?.reverse();

  return (
    <div className="oh-hero-body">
      <main>
        {/* HERO SECTION */}
        <section
          className={`oh-hero ${heroLoaded ? "loaded" : ""}`}
          ref={heroRef}
          role="banner"
        >
          <div className="oh-hero-bg-wrapper">
            <div
              className={`oh-hero-bg ${heroLoaded ? "loaded" : ""}`}
              ref={heroBgRef}
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${HERO_IMG})`,
              }}
              aria-hidden="true"
            />
          </div>

          <div className="oh-hero-overlay" />

          {/* HOVER PREVIEW */}
          <div
            className="oh-hover-preview"
            ref={hoverPreviewRef}
            aria-hidden="true"
          >
            <img
              ref={previewImageRef}
              src={featuredProject.images[1] || featuredProject.thumbnail}
              alt={`${featuredProject.title} preview`}
              className="oh-preview-image"
            />
          </div>

          {/* Top Bar */}
          {/* <div className="oh-hero-top-bar" ref={heroTopBarRef}>
            <div className="oh-hero-top-left">
              <div className="oh-featured-label" ref={featuredLabelRef}>
                FEATURED PROJECT
              </div>
              <div className="oh-project-title" ref={projectTitleRef}>
                {featuredProject.title}
              </div>
              <div className="oh-project-year" ref={projectYearRef}>
                {featuredProject.year}
              </div>
            </div>
            <Link
              href={`/project/${featuredProject.slug}`}
              className="oh-view-project"
              aria-label="View detailed project information"
              ref={viewProjectRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <span className="oh-view-project-text">VIEW PROJECT</span>
              <span className="oh-view-project-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="oh-arrow-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="oh-arrow-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div> */}

          {/* Bottom Hero Text */}
          <div className="oh-hero-content">
            <div className="flex items-center justify-between">
              <h1 ref={heroH1Ref} className="oh-hero-h1">
                Strong, Grounded Architecture <br />
                Shaped by Culture, Balance & Enduring Elegance
              </h1>
              {/* <Link
              href={`/project/${featuredProject.slug}`}
              // className="oh-view-project"
              className="oh-hero-cta"
              aria-label="View detailed project information"
              ref={viewProjectRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              <span className="oh-view-project-text">
                VIEW Featured PROJECT
              </span>
              <span className="oh-hero-cta-arrow">&#8593;</span>
            </Link> */}
              <Link
                href={`/project/${featuredProject.slug}`}
                className="oh-view-project "
                //className="oh-hero-cta"
                // className="slideup-link"
                data-text="View Featured Project"
                aria-label="View detailed project information"
                ref={viewProjectRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                <span className="oh-view-project-text">
                  VIEW Featured PROJECT
                </span>
              </Link>
            </div>
          </div>

          <div
            className="oh-scroll-indicator"
            ref={scrollIndicatorRef}
            aria-hidden="true"
          >
            (SCROLL DOWN)
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section">
          <div className="about-parent">
            <div className="about-div1">
              <div className="about-heading1">
                <h1>
                  CRAFTING TIMELESS
                  <br />
                  SPACES WITH
                </h1>
              </div>
            </div>
            <div className="about-div2">
              <div className="about-2">
                <div className="about-studio-col">
                  <span>(our studio)</span>
                </div>
                <div className="about-img-col">
                  <img src="/About.jpg" alt="Architecture Studio" />
                </div>
                <div className="about-heading2">
                  <h1>INTENT + IMPACT</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="about-architecture-content">
            <p>
              Diqra Architects creates spaces that balance strength, serenity,
              and refined craftsmanship. Our work draws from cultural richness
              and translates it into contemporary, timeless architecture. Every
              project is approached with clarity, precision, and a commitment to
              natural harmony, resulting in spaces that feel grounded, enduring,
              and beautifully purposeful.
            </p>

            {/* <Link
              to="/about"
              className="about-cta-btn-styled"
              ref={ctaBtnRef}
              onMouseEnter={handleCtaMouseEnter}
              onMouseLeave={handleCtaMouseLeave}
            >
              <span>Learn more About us</span>
            </Link> */}

            <SlideUpButton href="/about" className="ml-4">
              learn more about us
            </SlideUpButton>
          </div>
        </section>
      </main>
    </div>
  );
}
