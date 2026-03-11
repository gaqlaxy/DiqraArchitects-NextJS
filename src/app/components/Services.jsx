"use client";
import React, { useEffect, useRef } from "react";
import "../styles/Services.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideUpButton from "./SlideUpButton";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current.querySelectorAll(".service-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <span className="section-label">(What We Do)</span>
          <h2 className="services-title">Our Services</h2>
        </div>

        <div className="services-grid">
          <Link href="/services/exterior-design" className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="20" y="40" width="25" height="35" />
                <rect x="25" y="48" width="6" height="8" />
                <rect x="34" y="48" width="6" height="8" />
                <rect x="25" y="60" width="6" height="8" />
                <rect x="34" y="60" width="6" height="8" />
                <path d="M 45 30 L 55 20 L 75 20 L 75 75 L 45 75 Z" />
                <rect x="50" y="28" width="6" height="8" />
                <rect x="59" y="28" width="6" height="8" />
                <rect x="50" y="40" width="6" height="8" />
                <rect x="59" y="40" width="6" height="8" />
                <rect x="50" y="52" width="6" height="8" />
                <rect x="59" y="52" width="6" height="8" />
              </svg>
            </div>
            <div className="service-body">
              <h3 className="service-name">Exterior Design</h3>
              <p className="service-desc">
                Bold, refined exteriors that balance form, function, and lasting visual harmony.
              </p>
            </div>
            <span className="service-arrow">→</span>
          </Link>

          <Link href="/services/design-planning" className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="35" cy="45" r="18" />
                <circle cx="55" cy="35" r="18" />
                <circle cx="50" cy="60" r="18" />
              </svg>
            </div>
            <div className="service-body">
              <h3 className="service-name">Design & Planning</h3>
              <p className="service-desc">
                Conceptual layouts to detailed drawings — shaped with precision and clarity.
              </p>
            </div>
            <span className="service-arrow">→</span>
          </Link>

          <Link href="/services/consultation" className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M 25 45 L 50 25 L 75 45 L 75 75 L 25 75 Z" />
                <rect x="45" y="55" width="10" height="20" />
                <path d="M 20 45 L 80 45" />
                <rect x="55" y="35" width="12" height="10" rx="1" />
                <line x1="58" y1="38" x2="64" y2="38" />
                <line x1="58" y1="41" x2="64" y2="41" />
              </svg>
            </div>
            <div className="service-body">
              <h3 className="service-name">Consultation</h3>
              <p className="service-desc">
                Expert guidance to help you make confident design decisions at every stage.
              </p>
            </div>
            <span className="service-arrow">→</span>
          </Link>
        </div>

        <div className="services-cta">
          <SlideUpButton href="/services">View All Services</SlideUpButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
