// V1111
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "../styles/ProcessSection.css";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SlideUpButton from "./SlideUpButton"; // Assuming you have this component

// gsap.registerPlugin(ScrollTrigger);

// const processSteps = [
//   {
//     id: 1,
//     title: "Sketch Design",
//     description:
//       "We translate initial thoughts into hand-drawn concepts and spatial arrangements.",
//     img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
//   },
//   {
//     id: 2,
//     title: "Design Development",
//     description:
//       "Refining the geometry, materials, and flow of the space into a cohesive 3D model.",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "Development Application",
//     description:
//       "Handling council submissions and ensuring all regulatory compliances are met.",
//     img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80",
//   },
//   {
//     id: 4,
//     title: "Interior Design",
//     description:
//       "Curating textures, lighting, and finishes that breathe life into the architecture.",
//     img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
//   },
//   {
//     id: 5,
//     title: "Documentation",
//     description:
//       "Precision technical drawings for builders, engineers, and contractors.",
//     img: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
//   },
//   {
//     id: 6,
//     title: "Construction",
//     description:
//       "Overseeing the build to ensure the vision is executed without compromise.",
//     img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
//   },
// ];

// const ProcessSection = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const imageRef = useRef(null);
//   const revealRef = useRef(null);

//   useEffect(() => {
//     // Initial entrance animation
//     const ctx = gsap.context(() => {
//       gsap.from(".process-reveal-text", {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: ".process-section",
//           start: "top 75%",
//         },
//       });
//     }, revealRef);

//     return () => ctx.revert();
//   }, []);

//   // Handle Image Transition on Hover
//   const handleHover = (index) => {
//     if (index === activeStep) return;

//     // Animate image out and in
//     gsap.to(imageRef.current, {
//       opacity: 0.8,
//       scale: 1.05,
//       duration: 0.2,
//       onComplete: () => {
//         setActiveStep(index);
//         gsap.to(imageRef.current, {
//           opacity: 1,
//           scale: 1,
//           duration: 0.4,
//           ease: "power2.out",
//         });
//       },
//     });
//   };

//   return (
//     <div className="process-section" ref={revealRef}>
//       {/* LEFT COLUMN - STICKY IMAGE */}
//       <div className="process-visual-col">
//         <div className="process-sticky-wrapper">
//           <div className="process-img-frame">
//             <img
//               ref={imageRef}
//               src={processSteps[activeStep].img}
//               alt={processSteps[activeStep].title}
//               className="process-active-img"
//             />
//             <div className="process-img-overlay"></div>
//             <div className="process-img-meta">
//               <span>(Phase {String(activeStep + 1).padStart(2, "0")})</span>
//               <span>Scanning...</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT COLUMN - LIST */}
//       <div className="process-content-col">
//         <div className="process-header-block">
//           <span className="process-subtitle">( OUR METHODOLOGY )</span>
//           <h2 className="process-reveal-text process-main-heading">
//             Crafting visions into <br />
//             <span className="highlight-italic">tangible reality.</span>
//           </h2>
//           <p className="process-reveal-text process-intro-desc">
//             A clear, 6-stage collaborative journey from the first conversation
//             to the final brick. We guide every phase with precision.
//           </p>
//         </div>

//         <div className="process-steps-list">
//           {processSteps.map((step, index) => (
//             <div
//               key={index}
//               className={`process-step-item ${
//                 index === activeStep ? "active" : ""
//               }`}
//               onMouseEnter={() => handleHover(index)}
//             >
//               <div className="step-header">
//                 <span className="step-num">
//                   ({String(index + 1).padStart(2, "0")})
//                 </span>
//                 <h3 className="step-title">{step.title}</h3>
//                 <div className="step-indicator"></div>
//               </div>
//               <div className="step-body">
//                 <p>{step.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="process-cta-container">
//           <SlideUpButton href="/process">Start Your Journey</SlideUpButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;

// V222222222222
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "../styles/ProcessSection.css";
// import { gsap } from "gsap";
// import SlideUpButton from "./SlideUpButton";

// const processSteps = [
//   {
//     id: "01",
//     title: "Concept",
//     subtitle: "Sketching the Dream",
//     description:
//       "We begin with raw ideas, translating your verbal requirements into loose hand-sketches and spatial diagrams.",
//     img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
//   },
//   {
//     id: "02",
//     title: "Develop",
//     subtitle: "Refining the Form",
//     description:
//       "The concept evolves into a digital model. We test light, flow, and materiality to ensure the space works.",
//     img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
//   },
//   {
//     id: "03",
//     title: "Approve",
//     subtitle: "Regulatory Compliance",
//     description:
//       "Navigating the complexities of council approval, ensuring your project meets all legal standards.",
//     img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=900&q=80",
//   },
//   {
//     id: "04",
//     title: "Detail",
//     subtitle: "Interior & Fixtures",
//     description:
//       "Selecting the tactile elements—stone, wood, brass—that you will touch and feel every day.",
//     img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
//   },
//   {
//     id: "05",
//     title: "Build",
//     subtitle: "Construction Phase",
//     description:
//       "We act as your advocate on-site, ensuring the builder executes the vision to the millimeter.",
//     img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
//   },
// ];

// const ProcessSection = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const imageRefs = useRef([]);
//   const contentRef = useRef(null);

//   // Handle the "Wipe" animation when activeStep changes
//   useEffect(() => {
//     // 1. Animate the Image Wipe
//     const activeImg = imageRefs.current[activeStep];

//     // Reset all images to be hidden (except active)
//     imageRefs.current.forEach((img, idx) => {
//       if (idx !== activeStep) {
//         gsap.set(img, { zIndex: 0, opacity: 0 });
//       }
//     });

//     // Animate active image in
//     gsap.fromTo(
//       activeImg,
//       {
//         clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", // Start hidden at bottom
//         zIndex: 2,
//         opacity: 1,
//       },
//       {
//         clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Wipe up to full reveal
//         duration: 0.8,
//         ease: "power3.inOut",
//       }
//     );

//     // 2. Animate the Text Description
//     gsap.fromTo(
//       contentRef.current,
//       { y: 20, opacity: 0 },
//       { y: 0, opacity: 1, duration: 0.5, delay: 0.3 }
//     );
//   }, [activeStep]);

//   return (
//     <div className="process-grid-section">
//       {/* Header Area */}
//       <div className="process-grid-header">
//         <h2 className="header-title">Our Protocol</h2>
//         <div className="header-line"></div>
//         <p className="header-subtitle">
//           Methodical precision tailored for
//           <br />
//           modern living spaces.
//         </p>
//       </div>

//       {/* Main Grid Interface */}
//       <div className="process-interface">
//         {/* Left Column: Navigation List */}
//         <div className="process-nav-col">
//           {processSteps.map((step, index) => (
//             <div
//               key={index}
//               className={`nav-item ${activeStep === index ? "active" : ""}`}
//               onMouseEnter={() => setActiveStep(index)}
//             >
//               <div className="nav-item-inner">
//                 <span className="nav-number">{step.id}</span>
//                 <span className="nav-title">{step.title}</span>
//                 <span className="nav-arrow">→</span>
//               </div>
//               <div className="nav-progress-line"></div>
//             </div>
//           ))}
//         </div>

//         {/* Middle Column: Details (Dynamic Content) */}
//         <div className="process-details-col">
//           <div className="details-wrapper" ref={contentRef}>
//             <div className="detail-label">
//               ( PHASE {processSteps[activeStep].id} )
//             </div>
//             <h3 className="detail-heading">
//               {processSteps[activeStep].subtitle}
//             </h3>
//             <p className="detail-desc">
//               {processSteps[activeStep].description}
//             </p>
//             <div className="detail-cta">
//               <SlideUpButton href="/process">Explore Phase</SlideUpButton>
//             </div>
//           </div>
//         </div>

//         {/* Right Column: Visual Display (The Image) */}
//         <div className="process-visual-col">
//           <div className="visual-container">
//             {processSteps.map((step, index) => (
//               <img
//                 key={index}
//                 ref={(el) => (imageRefs.current[index] = el)}
//                 src={step.img}
//                 alt={step.title}
//                 className="visual-img"
//               />
//             ))}
//             {/* Decoration Grid Lines */}
//             <div className="visual-grid-overlay"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;

// V44444444444

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
              <span>Scanning...</span>
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
