"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/DesignPhilosophy.css";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    id: "01",
    title: "Intent",
    description:
      "Every line we draw begins with purpose. We don\u2019t design for aesthetics alone — we design for the way a space makes you feel, move, and breathe.",
  },
  {
    id: "02",
    title: "Craft",
    description:
      "Material truth, structural honesty, and meticulous detailing. We believe architecture is built — not just conceived — and that craft elevates concept.",
  },
  {
    id: "03",
    title: "Harmony",
    description:
      "Architecture exists within culture, climate, and community. Our work draws from these forces to create spaces that belong — quietly, powerfully.",
  },
];

export default function DesignPhilosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".dp-pillar");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      const rules = sectionRef.current.querySelectorAll(".dp-rule");
      gsap.fromTo(
        rules,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.inOut",
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
    <section className="dp-section" ref={sectionRef}>
      <div className="dp-container">
        <div className="dp-header">
          <span className="dp-label">(Philosophy)</span>
          <h2 className="dp-title">What Guides Us</h2>
        </div>

        <div className="dp-grid">
          {pillars.map((pillar, i) => (
            <div key={pillar.id}>
              <div className="dp-rule" />
              <article className="dp-pillar">
                <span className="dp-number">{pillar.id}</span>
                <h3 className="dp-pillar-title">{pillar.title}</h3>
                <p className="dp-pillar-desc">{pillar.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
