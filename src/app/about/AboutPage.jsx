"use client";

import React, { useEffect, useState, useRef } from "react";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";
import CtaSection from "@/app/components/CtaSection";
import "@/app/styles/AboutPage.css";

export default function About() {
  const [activeStep, setActiveStep] = useState("01");
  const sectionRefs = useRef([]);

  // --- INTERSECTION OBSERVER FOR ACTIVE STEP ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when element is in middle of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const step = entry.target.getAttribute("data-step");
          if (step) setActiveStep(step);
          
          // Add "in-view" class for animations
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Helper to collect refs
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <main className="editorial-plus">
      
      <div className="split-layout">
        
        {/* --- LEFT: DYNAMIC SIDEBAR --- */}
        <aside className="sticky-sidebar">
          <div className="sidebar-header">
            <h1 className="brand-title">OUR STUDIO</h1>
          </div>
          
          {/* Dynamic Progress Indicator */}
          <div className="chapter-indicator">
            <div className={`chapter-item ${activeStep === "01" ? "active" : ""}`}>
              <span className="c-num">01</span>
              <span className="c-label">The Studio</span>
            </div>
            <div className={`chapter-item ${activeStep === "02" ? "active" : ""}`}>
              <span className="c-num">02</span>
              <span className="c-label">Philosophy</span>
            </div>
            <div className={`chapter-item ${activeStep === "03" ? "active" : ""}`}>
              <span className="c-num">03</span>
              <span className="c-label">The Minds</span>
            </div>
          </div>
        </aside>

        {/* --- RIGHT: CONTENT STREAM --- */}
        <div className="content-stream">
          
          {/* STEP 01: HERO */}
          <section className="stream-section" data-step="01" ref={addToRefs}>
            <div className="hero-reveal-mask">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2070" 
                alt="Studio Main" 
                className="parallax-img"
              />
            </div>
            <div className="intro-text">
              <h2 className="big-statement">
                Refining the <br/>
                <span className="italic-accent">Unseen.</span>
              </h2>
            </div>
          </section>

          {/* STEP 02: PHILOSOPHY */}
          <section className="stream-section" data-step="02" ref={addToRefs}>
            <div className="text-columns">
              <p className="lead-paragraph">
                Architecture is not about adding; it is about revealing. 
                At DIQRA, we strip away the noise to uncover the 
                emotional core of a space.
              </p>
              <p className="sub-paragraph">
                We believe in the luxury of silence. Our projects are designed 
                to be sanctuaries that breathe, evolve, and age with dignity alongside 
                those who inhabit them.
              </p>
            </div>
            
            <div className="secondary-image-wrap">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80" 
                alt="Detail" 
              />
              <span className="caption">Fig. A — Material Honesty</span>
            </div>
          </section>

          {/* STEP 03: TEAM (Focus Mode) */}
          <section className="stream-section" data-step="03" ref={addToRefs}>
            <div className="team-focus-list">
              
              {/* Member 1 */}
              <div className="team-item">
                <div className="team-meta">
                  <span className="t-num">01</span>
                  <span className="t-role">Founder & CEO</span>
                </div>
                <h3 className="t-name">Naveen</h3>
                
                {/* Hover Image */}
                <div className="hover-portrait">
                  <img src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?w=600&q=80" alt="Naveen" />
                </div>
              </div>

              {/* Member 2 */}
              <div className="team-item">
                <div className="team-meta">
                  <span className="t-num">02</span>
                  <span className="t-role">Principal Architect</span>
                </div>
                <h3 className="t-name">Jafar Sathik</h3>
                
                {/* Hover Image */}
                <div className="hover-portrait">
                  <img src="https://plus.unsplash.com/premium_photo-1664300982961-f57190dca362?w=600&q=80" alt="Jafar" />
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