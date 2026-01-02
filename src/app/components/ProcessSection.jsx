"use client";
import React, { useState } from "react";
import "../styles/ProcessSection.css";
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
    title: "Development App",
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
    desc: "Overseeing the build to ensure the vision is executed.",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
    <section className="homeprocess-section">

    <div className="min-process-section">
      <div className="section-header">

      <h2 className="section-title">Our Process</h2>
      </div>
      <div className="min-container">
        
        {/* LEFT: VISUALS */}

        <div className="min-visual-col">

          <div className="min-image-wrapper">
            {processSteps.map((step, index) => (
              <img
                key={step.id}
                src={step.img}
                alt={step.title}
                className={`min-image ${activeStep === index ? "active" : ""}`}
              />
            ))}
            <div className="min-img-overlay"></div>
          </div>
          
          <div className="min-visual-label">
            Phase {processSteps[activeStep].id}
          </div>
        </div>

        {/* RIGHT: CONTENT LIST */}
        <div className="min-content-col">
          <ul className="min-list">
            {processSteps.map((step, index) => (
              <li
                key={step.id}
                className={`min-item ${activeStep === index ? "active" : ""}`}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)} // Touch support
              >
                <div className="min-item-header">
                  <span className="min-id">{step.id}</span>
                  <span className="min-title">{step.title}</span>
                </div>
                
                <div className="min-item-body">
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="min-cta">
            <SlideUpButton href="/process">View Full Process</SlideUpButton>
          </div>
        </div>
      </div>
    </div>
    </section>

    </>
  );
};

export default ProcessSection;