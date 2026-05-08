"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/OhHeroSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function OhHeroSection({ projects = [] }) {
  const heroRef = useRef(null);
  const heroBgRef = useRef(null);
  const hoverPreviewRef = useRef(null);
  const previewImageRef = useRef(null);
  const timelineRef = useRef(null);
  const viewProjectRef = useRef(null);

  const [heroLoaded, setHeroLoaded] = useState(false);

  const featuredProject =
    projects.find((project) => project.featured) || projects[0];
  const HERO_IMG = featuredProject?.images?.[0] || featuredProject?.thumbnail;
  const PREVIEW_IMG =
    featuredProject?.images?.[1] || featuredProject?.thumbnail || HERO_IMG;

  // GSAP animations after image load
  useEffect(() => {
    if (!heroLoaded) return;

    const ctx = gsap.context(() => {
      // Fade in the hero
      gsap.set(heroRef.current, { autoAlpha: 0 });
      gsap.to(heroRef.current, {
        autoAlpha: 1,
        duration: 0.6,
        ease: "power2.out",
      });

      // Pin the hero section so the About section slides over it
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=100%", // Pin for exactly its own height
        pin: true,
        pinSpacing: false,
      });

      // Staggered text entrance
      const heroLines = heroRef.current.querySelectorAll(".oh-line");
      gsap.fromTo(
        heroLines,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.3,
        },
      );

      // Meta elements entrance
      const metaEls = heroRef.current.querySelectorAll(".oh-meta-item");
      gsap.fromTo(
        metaEls,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1,
        },
      );

      // Scroll indicator pulse
      const scrollLine = heroRef.current.querySelector(".oh-scroll-line");
      if (scrollLine) {
        gsap.to(scrollLine, {
          scaleY: 1,
          duration: 1.2,
          ease: "power2.inOut",
          delay: 1.5,
        });
      }

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
        "-=0.7",
      );

      ScrollTrigger.refresh();
    }, heroRef);

    return () => ctx.revert();
  }, [heroLoaded]);

  const handleMouseEnter = () => timelineRef.current?.play();
  const handleMouseLeave = () => timelineRef.current?.reverse();
  const handleFocus = () => timelineRef.current?.play();
  const handleBlur = () => timelineRef.current?.reverse();

  if (!featuredProject || !HERO_IMG) return null;

  return (
    <div className="oh-hero-body">
      <main>
        <section
          className={`oh-hero ${heroLoaded ? "loaded" : ""}`}
          ref={heroRef}
          role="banner"
        >
          {/* Background Image with Parallax */}
          <div className="oh-hero-bg-wrapper">
            <Image
              src={HERO_IMG}
              alt="DIQRA Architecture Hero Background"
              fill
              priority
              className={`oh-hero-bg ${heroLoaded ? "loaded" : ""}`}
              onLoad={() => setHeroLoaded(true)}
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>

          {/* Cinematic Vignette Overlay */}
          <div className="oh-hero-vignette" aria-hidden="true" />

          {/* Hover Preview */}
          <div
            className="oh-hover-preview"
            ref={hoverPreviewRef}
            aria-hidden="true"
          >
            <div ref={previewImageRef} className="oh-preview-image-wrapper">
              <Image
                src={PREVIEW_IMG}
                alt={`Architectural project: ${featuredProject.title}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="oh-hero-content">
            {/* Left: Headline */}
            <h1 className="oh-hero-headline">
              <div className="oh-line-mask">
                <span className="oh-line">Strong, Grounded</span>
              </div>
              <div className="oh-line-mask">
                <span className="oh-line">Architecture</span>
              </div>
              <div className="oh-line-mask">
                <span className="oh-line oh-line-light">
                  Shaped by Culture &amp; Elegance
                </span>
              </div>
            </h1>

            {/* Right: Meta Info */}
            <div className="oh-hero-meta">
              <div className="oh-meta-item">
                <span className="oh-meta-label">Featured</span>
                <span className="oh-meta-value">{featuredProject.title}</span>
              </div>
              <div className="oh-meta-item">
                <span className="oh-meta-label">Year</span>
                <span className="oh-meta-value">{featuredProject.year}</span>
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
                <span className="oh-view-text">View Project</span>
                <span className="oh-view-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="oh-scroll-indicator" aria-hidden="true">
            <span className="oh-scroll-text">Scroll</span>
            <div className="oh-scroll-track">
              <div className="oh-scroll-line" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
