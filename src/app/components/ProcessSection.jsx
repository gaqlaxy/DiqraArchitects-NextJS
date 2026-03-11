"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/ProcessSection.css";
import SlideUpButton from "./SlideUpButton";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    id: "01",
    title: "Sketch Design",
    desc: "Translating initial thoughts into hand-drawn spatial arrangements.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "02",
    title: "Design Development",
    desc: "Refining the geometry, materials, and flow into a 3D model.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: "03",
    title: "Approval Process",
    desc: "Handling council submissions and ensuring regulatory compliances.",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
  },
  {
    id: "04",
    title: "Interior Design",
    desc: "Curating textures, lighting, and finishes that breathe life.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: "05",
    title: "Building Approval",
    desc: "Precision technical documentation for engineers and contractors.",
    img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
  },
  {
    id: "06",
    title: "Construction",
    desc: "Overseeing the build to ensure the vision is executed flawlessly.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current.querySelectorAll(".proc-item");
      gsap.fromTo(
        items,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="proc-section" ref={sectionRef}>
      <div className="proc-container">
        <div className="proc-header">
          <span className="section-label">(How We Work)</span>
          <h2 className="proc-title">Our Process</h2>
        </div>

        <div className="proc-layout">
          {/* Visual Column */}
          <div className="proc-visual">
            <div className="proc-image-stack">
              {processSteps.map((step, index) => (
                <img
                  key={step.id}
                  src={step.img}
                  alt={step.title}
                  className={`proc-img ${activeStep === index ? "active" : ""}`}
                  loading="lazy"
                />
              ))}
              <div className="proc-img-overlay" />
            </div>
            <div className="proc-phase-badge">
              Phase {processSteps[activeStep].id}
            </div>
          </div>

          {/* Steps List */}
          <div className="proc-steps">
            <div className="proc-list-wrapper">
              {/* Progress line */}
              <div className="proc-progress-track">
                <div
                  className="proc-progress-fill"
                  style={{
                    height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                  }}
                />
              </div>

              <ul className="proc-list">
                {processSteps.map((step, index) => (
                  <li
                    key={step.id}
                    className={`proc-item ${activeStep === index ? "active" : ""}`}
                    onMouseEnter={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="proc-item-header">
                      <span className="proc-id">{step.id}</span>
                      <span className="proc-name">{step.title}</span>
                    </div>
                    <div className="proc-item-body">
                      <p>{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="proc-cta">
              <SlideUpButton href="/process">View Full Process</SlideUpButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
