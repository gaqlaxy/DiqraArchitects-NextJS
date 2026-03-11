"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/CtaSection.css";
import SlideUpButton from "./SlideUpButton";

gsap.registerPlugin(ScrollTrigger);

export default function CtaSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line text reveal
      const lines = sectionRef.current.querySelectorAll(".cta-line-text");
      gsap.fromTo(
        lines,
        { y: "110%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Subtext + button
      const reveals = sectionRef.current.querySelectorAll(".cta-reveal");
      gsap.fromTo(
        reveals,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="cta-section" ref={sectionRef}>
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-heading">
            <span className="cta-line-mask">
              <span className="cta-line-text">Focused on Quality</span>
            </span>
            <span className="cta-line-mask cta-line-indent">
              <span className="cta-line-text">Driven by Creativity</span>
            </span>
          </h2>

          <p className="cta-subtext cta-reveal">
            Let&apos;s discuss your project, vision, and how our collaborative
            process turns ideas into enduring spaces.
          </p>

          <div className="cta-btn-wrapper cta-reveal">
            <SlideUpButton href="/contact">Let&apos;s Connect</SlideUpButton>
          </div>
        </div>
      </div>
    </section>
  );
}
