"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";
import Image from "next/image";
import SlideUpButton from "./SlideUpButton";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline lines slide up
      const headlines = sectionRef.current.querySelectorAll(".about-headline-line");
      gsap.fromTo(
        headlines,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Right side content fade in
      const rightContent = sectionRef.current.querySelectorAll(".about-reveal");
      gsap.fromTo(
        rightContent,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Stats count animation
      const stats = sectionRef.current.querySelectorAll(".about-stat-number");
      stats.forEach((stat) => {
        const target = parseInt(stat.dataset.value, 10);
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        {/* LEFT: Sticky Editorial Headline */}
        <div className="about-left">
          <span className="section-label about-label">(Studio)</span>
          <h2 className="about-headline">
            <div className="about-line-mask">
              <span className="about-headline-line">Crafting</span>
            </div>
            <div className="about-line-mask">
              <span className="about-headline-line">Timeless</span>
            </div>
            <div className="about-line-mask">
              <span className="about-headline-line">Spaces</span>
            </div>
          </h2>
        </div>

        {/* RIGHT: Scrollable — Image, Text, Stats */}
        <div className="about-right">
          <div className="about-image-wrapper about-reveal">
            <Image
              src="/AboutW.webp"
              alt="DIQRA Architecture Studio workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="about-image"
            />
          </div>

          <div className="about-text-block about-reveal">
            <div className="about-sub-heading">
              <span>Intent</span>
              <span className="about-amp">&amp;</span>
              <span>Impact</span>
            </div>

            <p className="about-description">
              Diqra Architects creates spaces that balance strength, serenity,
              and refined craftsmanship. Our work draws from cultural richness
              and translates it into contemporary, timeless architecture.
            </p>

            <p className="about-description">
              Every project is approached with clarity, precision, and a
              commitment to natural harmony — resulting in spaces that feel
              grounded, enduring, and beautifully purposeful.
            </p>

            <div className="about-action">
              <SlideUpButton href="/about">Read Full Story</SlideUpButton>
            </div>
          </div>

          {/* Stats — inside right column so they scroll while left stays sticky */}
          <div className="about-stats about-reveal">
            <div className="about-stat">
              <span className="about-stat-number" data-value="8">0</span>
              <span className="about-stat-suffix">+</span>
              <span className="about-stat-label">Years Active</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="about-stat-number" data-value="150">0</span>
              <span className="about-stat-suffix">+</span>
              <span className="about-stat-label">Projects Completed</span>
            </div>
            <div className="about-stat-divider" />
            <div className="about-stat">
              <span className="about-stat-number" data-value="12">0</span>
              <span className="about-stat-suffix">+</span>
              <span className="about-stat-label">Cities Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
