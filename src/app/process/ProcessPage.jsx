"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/app/components/Footer";
import "../styles/ProcessPage.css";
import CtaSection from "@/app/components/CtaSection";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    number: "01",
    title: "Sketch Design",
    copy: "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief.",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Design Development",
    copy: "Here we fill in the glorious details, including material selections, inside-to-outside interfaces, floor plans, layouts, and spatial flow. Our team will craft detailed digital 2D drawings and a 3D model.",
    image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Development Application",
    copy: "If your project requires a development application with Council, we coordinate the entire process, sourcing input from Town Planners and consultant documentation.",
    image: "https://images.unsplash.com/photo-1664267605963-39d67566de33?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Construction Docs",
    copy: "We prepare comprehensive construction documentation, including detailed drawings and specifications, to ensure your vision is realized accurately by builders.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2662&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Handover",
    copy: "We oversee the construction phase, ensuring quality and compliance, and guide you through to a smooth handover of your completed project.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
  },
];

export default function ProcessPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // Hero Animation
      const heroLines = gsap.utils.toArray(".pp-hero-line");
      gsap.fromTo(
        heroLines,
        { y: "110%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".pp-hero-sub",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: 0.8,
        }
      );

      // Intro Reveal
      const introLines = gsap.utils.toArray(".pp-intro-line");
      gsap.fromTo(
        introLines,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".pp-intro-section",
            start: "top 75%",
          },
        }
      );

      // Image Parallax for steps
      const images = gsap.utils.toArray(".pp-step-img");
      images.forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Text reveal for steps
      const stepTexts = gsap.utils.toArray(".pp-step-text-reveal");
      stepTexts.forEach((text) => {
        gsap.fromTo(
          text,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pp-container" ref={containerRef}>
      {/* Hero */}
      <section className="pp-hero">
        <div className="pp-hero-content">
          <h1 className="pp-hero-title">
            <span className="pp-mask">
              <span className="pp-hero-line">Our</span>
            </span>
            <span className="pp-mask pp-indent">
              <span className="pp-hero-line">Process</span>
            </span>
          </h1>
          <p className="pp-hero-sub">
            From the first sketch to the final handover, we guide you through a seamless, collaborative journey to build your dream space.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pp-intro-section">
        <div className="pp-intro-content">
          <div className="pp-mask">
            <h2 className="pp-intro-line pp-intro-main">Great architecture</h2>
          </div>
          <div className="pp-mask pp-indent-small">
            <h2 className="pp-intro-line pp-intro-main">is built on</h2>
          </div>
          <div className="pp-mask pp-indent-large">
            <h2 className="pp-intro-line pp-intro-accent">strong relationships.</h2>
          </div>
          
          <div className="pp-intro-desc-wrapper">
            <p className="pp-intro-line pp-intro-desc">
              We believe in a transparent, step-by-step approach ensuring you are heard, understood, and delighted at every milestone.
            </p>
          </div>
        </div>
      </section>

      {/* Steps — Sticky Left, Scroll Right */}
      <section className="pp-steps-wrapper">
        <div className="pp-steps-container">
          {cardData.map((card, index) => (
            <div key={index} className="pp-step-row">
              {/* Left Column: Sticky Number */}
              <div className="pp-step-left">
                <div className="pp-step-sticky">
                  <span className="pp-step-number">{card.number}</span>
                </div>
              </div>

              {/* Right Column: Content & Image */}
              <div className="pp-step-right">
                <div className="pp-step-content pp-step-text-reveal">
                  <h3 className="pp-step-title">{card.title}</h3>
                  <p className="pp-step-desc">{card.copy}</p>
                </div>
                <div className="pp-step-img-wrapper">
                  <img src={card.image} alt={card.title} className="pp-step-img" loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
      <Footer />
    </div>
  );
}
