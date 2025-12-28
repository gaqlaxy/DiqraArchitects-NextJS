

"use client";
import React, { useState, useRef, useEffect } from "react";
import "../styles/ProcessSection.css";
import { gsap } from "gsap";
import SlideUpButton from "./SlideUpButton";

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
    title: "Development Application",
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
    title: "Construction Plans",
    desc: "Overseeing the build to ensure the vision is executed.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

const ProcessSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRefs = useRef([]);

  // Handle the Image Transition
  useEffect(() => {
    // 1. Reset all images (fade out)
    processSteps.forEach((_, i) => {
      if (i !== activeIndex && imageRefs.current[i]) {
        gsap.to(imageRefs.current[i], {
          opacity: 0,
          scale: 1.1,
          zIndex: 0,
          duration: 0.5,
        });
      }
    });

    // 2. Animate Active Image (fade in)
    if (imageRefs.current[activeIndex]) {
      const activeImg = imageRefs.current[activeIndex];
      gsap.to(activeImg, {
        opacity: 1,
        scale: 1,
        zIndex: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  return (
    <div className="arch-process-section">
      <div className="arch-container">
        {/* LEFT COLUMN: Sticky Visuals */}
        <div className="arch-left-col">
          {/* --- NEW HEADING ADDED HERE --- */}
          <h2 className="arch-left-heading">Our Process</h2>

          <div className="arch-label">( OUR PROCESS )</div>

          <div className="arch-image-frame">
            {processSteps.map((step, index) => (
              <img
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={step.img}
                alt={step.title}
                className="arch-visual-img"
              />
            ))}

            {/* Minimal Overlay Info */}
            <div className="arch-img-meta">
              <span>PHASE {processSteps[activeIndex].id}</span>
              
            </div>
          </div>

          <div className="arch-description-area">
            <p className="arch-desc-text">{processSteps[activeIndex].desc}</p>
          </div>
        </div>

        {/* RIGHT COLUMN: The Grid List */}
        <div className="arch-right-col">
          <div className="arch-header-block">
            <h2 className="arch-main-heading">
              Collaborative process, crafted around you.
            </h2>
            <p className="arch-sub-heading">
              Our 6-stage approach ensures a smooth journey from the first
              conversation to the final build. With structured steps,
              transparent communication, and a focus on your vision, we guide
              each phase with clarity and precision—so you always know what’s
              happening and what comes next.
            </p>
          </div>

          <div className="arch-grid-list">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`arch-grid-item ${
                  index === activeIndex ? "active" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div className="arch-item-top">
                  <span className="arch-number">({step.id})</span>
                  {/* The animated line */}
                  <div className="arch-line"></div>
                </div>
                <h3 className="arch-title">{step.title}</h3>

                <div className="arch-arrow">→</div>
              </div>
            ))}
          </div>

          {/*
            <SlideUpButton href="/process">View Full Methodology</SlideUpButton>
          </div> */}
          {/* <div className="arch-cta-block">
            <SlideUpButton href="/process" className="ml-4">
              get to know our process{" "}
            </SlideUpButton>
          </div> */}
          <div className="arch-cta-block">
            {/* <div className="">
              <SlideUpButton href="/process" className="ml-4">
                get to know our process
              </SlideUpButton>
            </div> */}
          </div>
        </div>
      </div>
      <div className="cta-block-process">
        <SlideUpButton href="/process" className="ml-4">
          get to know our process
        </SlideUpButton>
      </div>
    </div>
  );
};

export default ProcessSection;

