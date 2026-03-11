"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";
import CtaSection from "@/app/components/CtaSection";
import "@/app/styles/AboutPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState("01");
  const containerRef = useRef(null);

  useEffect(() => {
    scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // 1. Hero Text Reveal
      const heroLines = gsap.utils.toArray(".ap-hero-line");
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

      // 2. Image Parallax
      const images = gsap.utils.toArray(".ap-parallax-img");
      images.forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // 3. Text Reveal on Scroll
      const textBlocks = gsap.utils.toArray(".ap-text-reveal");
      textBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
            },
          }
        );
      });

      // 4. ScrollSpy for Sidebar
      const sections = gsap.utils.toArray(".ap-stream-section");
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onToggle: (self) => {
            if (self.isActive) {
              const step = section.getAttribute("data-step");
              setActiveStep(step);
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="ap-container" ref={containerRef}>
      <div className="ap-split-layout">
        
        {/* --- LEFT: STICKY SIDEBAR --- */}
        <aside className="ap-sticky-sidebar">
          <div className="ap-sidebar-header">
            <h1 className="ap-brand-title">
              <span className="ap-mask">
                <span className="ap-hero-line">OUR</span>
              </span>
              <span className="ap-mask ap-indent">
                <span className="ap-hero-line">STUDIO</span>
              </span>
            </h1>
          </div>
          
          {/* Progress Indicator */}
          <div className="ap-chapter-indicator">
            <ul className="ap-chapter-list">
              {["01", "02", "03"].map((num, idx) => {
                const labels = ["The Studio", "Philosophy", "The Minds"];
                return (
                  <li key={num} className={`ap-chapter-item ${activeStep === num ? "active" : ""}`}>
                    <span className="ap-c-num">{num}</span>
                    <span className="ap-c-label">{labels[idx]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>

        {/* --- RIGHT: CONTENT STREAM --- */}
        <div className="ap-content-stream">
          
          {/* STEP 01: HERO */}
          <section className="ap-stream-section" data-step="01">
            <div className="ap-hero-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
                alt="Studio Main" 
                className="ap-parallax-img"
              />
            </div>
            <div className="ap-intro-text ap-text-reveal">
              <h2 className="ap-big-statement">
                Refining the <br />
                <span className="ap-italic-accent">Unseen.</span>
              </h2>
            </div>
          </section>

          {/* STEP 02: PHILOSOPHY */}
          <section className="ap-stream-section" data-step="02">
            <div className="ap-text-columns ap-text-reveal">
              <p className="ap-lead-paragraph">
                Architecture is not about adding; it is about revealing. 
                At DIQRA, we strip away the noise to uncover the 
                emotional core of a space.
              </p>
              <p className="ap-sub-paragraph">
                We believe in the luxury of silence. Our projects are designed 
                to be sanctuaries that breathe, evolve, and age with dignity alongside 
                those who inhabit them.
              </p>
            </div>
            
            <div className="ap-secondary-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" 
                alt="Material Detail" 
                className="ap-parallax-img"
              />
              <span className="ap-caption">Fig. A — Material Honesty</span>
            </div>
          </section>

          {/* STEP 03: TEAM */}
          <section className="ap-stream-section ap-team-section" data-step="03">
            <div className="ap-team-header ap-text-reveal">
              <span className="ap-section-label">(Leadership)</span>
              <h2 className="ap-team-title">The Minds behind the Craft.</h2>
            </div>

            <div className="ap-team-list">
              
              {/* Member 1 */}
              <div className="ap-team-item ap-text-reveal">
                <div className="ap-team-meta">
                  <span className="ap-t-num">01</span>
                  <span className="ap-t-role">Founder & CEO</span>
                </div>
                <h3 className="ap-t-name">Naveen</h3>
                
                {/* Hover Portrait */}
                <div className="ap-hover-portrait">
                  <img src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&q=80" alt="Naveen" />
                </div>
              </div>

              {/* Member 2 */}
              <div className="ap-team-item ap-text-reveal">
                <div className="ap-team-meta">
                  <span className="ap-t-num">02</span>
                  <span className="ap-t-role">Principal Architect</span>
                </div>
                <h3 className="ap-t-name">Jafar Sathik</h3>
                
                {/* Hover Portrait */}
                <div className="ap-hover-portrait">
                  <img src="https://plus.unsplash.com/premium_photo-1664300982961-f57190dca362?w=600&q=80" alt="Jafar Sathik" />
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>

      <Services />
      <CtaSection />
      <Footer />
    </main>
  );
}