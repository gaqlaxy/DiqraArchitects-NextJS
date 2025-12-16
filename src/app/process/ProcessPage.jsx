// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Testimonials from "@/app/components/Testimonials";
// import Footer from "@/app/components/Footer";
// import CTASection from "../components/CtaSection";
// import SlideUpButton from "../components/SlideUpButton";

// import "../styles/ProcessPage.css";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//   {
//     number: "01",
//     title: "Sketch Design",
//     copy: "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget.",
//     color: "green",
//   },
//   {
//     number: "02",
//     title: "Design Development",
//     copy: "Here we take the initial sketches and fill in all the glorious details, including building material selections, inside-to-outside interfaces, floor plans, layouts, indicative joinery design and spatial flow. Our team will craft detailed digital 2D drawings and a 3D model that bring the look, feel and layout of your home to life.",
//     color: "white",
//   },
//   {
//     number: "03",
//     title: "Development Application",
//     copy: "Not all projects will require a development application with Council. If yours does, we will coordinate the entire process, including sourcing input from Town Planners, gathering documentation and information from consultants, preparing and submitting the application, and managing information requests and follow-ups with Council.",
//     color: "orange",
//   },
//   {
//     number: "04",
//     title: "Construction Documentation",
//     copy: "We prepare comprehensive construction documentation, including detailed drawings and specifications, to ensure your vision is realized accurately by the builders.",
//     color: "lilac",
//   },
//   {
//     number: "05",
//     title: "Construction & Handover",
//     copy: "We oversee the construction phase, ensuring quality and compliance, and guide you through to a smooth handover of your completed project.",
//     color: "green",
//   },
// ];

// export default function ProcessPage() {
//   const wrapperRefs = useRef([]);
//   const slideRefs = useRef([]);
//   const heroBackgroundRef = useRef(null);
//   const heroContentRef = useRef(null);

//   useEffect(() => {
//     // Scroll to top on mount
//     scrollTo(0, 0);

//     const mm = gsap.matchMedia();

//     // Parallax effect for hero section
//     mm.add("(prefers-reduced-motion: no-preference)", () => {
//       if (heroBackgroundRef.current) {
//         gsap.fromTo(
//           heroBackgroundRef.current,
//           {
//             yPercent: -15,
//             scale: 1.15,
//           },
//           {
//             yPercent: 15,
//             scale: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: ".hero-section",
//               start: "top top",
//               end: "bottom top",
//               scrub: 1,
//             },
//           }
//         );
//       }

//       if (heroContentRef.current) {
//         gsap.to(heroContentRef.current, {
//           opacity: 0,
//           y: 100,
//           ease: "none",
//           scrollTrigger: {
//             trigger: ".hero-section",
//             start: "top top",
//             end: "center top",
//             scrub: 1,
//           },
//         });
//       }
//     });

//     // Card stacking animation
//     mm.add(
//       "(min-width: 1200px) and (prefers-reduced-motion: no-preference)",
//       () => {
//         wrapperRefs.current.forEach((wrapper, i) => {
//           if (!wrapper || !slideRefs.current[i]) return;

//           const card = slideRefs.current[i];
//           let scale = 1;
//           let rotationZ = 0;
//           let rotationX = 0;

//           if (i !== slideRefs.current.length - 1) {
//             scale = 0.4 + 0.025 * i;
//             rotationZ = 5;
//             rotationX = 40;
//           }

//           gsap.to(card, {
//             scale,
//             rotationX,
//             rotationZ,
//             transformOrigin: "50% center",
//             ease: "none",
//             scrollTrigger: {
//               trigger: wrapper,
//               start: "top top",
//               end: "bottom bottom",
//               endTrigger: slideRefs.current[slideRefs.current.length - 1],
//               scrub: 1,
//               pin: wrapper,
//               pinSpacing: false,
//               id: i + 1,
//             },
//           });
//         });
//       }
//     );

//     return () => {
//       mm.revert();
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []); // ✅ Fixed: Added dependency array

//   return (
//     <div className="process-page">
//       {/* Process Overview Section */}
//       <section className="process-overview-section">
//         <div className="process-overview-container">
//           {/* Process Statement */}
//           <div className="process-statement">
//             <span className="process-label">(PROCESS)</span>
//             <p className="process-statement-heading">
//               Great architecture isn't just about talent and experience, but
//               collaborations and relationships.
//             </p>
//           </div>

//           {/* Large Image */}
//           <div className="process-image-wrapper">
//             <img
//               src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
//               alt="Modern architectural design"
//               className="process-large-image"
//             />
//           </div>

//           {/* Our Approach */}
//           <div className="process-approach">
//             <span className="process-label">(OUR APPROACH)</span>
//             <div className="process-approach-content">
//               <p className="process-approach-text">
//                 You can expect our team to expertly guide your project and work
//                 closely with you at every stage from delivering the initial
//                 design concepts to achieving a final build that goes beyond your
//                 aspirations
//               </p>
//               {/* <button className="process-cta-button">
//                 SEND US AN ENQUIRY
//                 <svg
//                   width="16"
//                   height="16"
//                   viewBox="0 0 16 16"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="button-arrow"
//                 >
//                   <path
//                     d="M1 8H15M15 8L8 1M15 8L8 15"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button> */}
//               <SlideUpButton href="/contact">Send us an enquiry</SlideUpButton>
//             </div>
//             <span className="process-copyright">©2025</span>
//           </div>
//         </div>
//       </section>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div
//           className="hero-background"
//           ref={heroBackgroundRef}
//           style={{
//             backgroundImage:
//               "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)",
//           }}
//         />
//         <div className="hero-overlay" />
//         <div className="hero-content" ref={heroContentRef}>
//           <h1 className="hero-title">
//             Overview of our <br /> 5 step process
//           </h1>
//           <p className="hero-subtitle">Your vision, our expertise</p>
//         </div>
//       </section>

//       {/* Process Cards */}
//       <section className="process-page-content">
//         <div className="process-page-content-inner">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               className="process-page-content-wrapper"
//               ref={(el) => (wrapperRefs.current[index] = el)}
//             >
//               <div
//                 className={`process-page-content-slide process-page-${card.color}`}
//                 ref={(el) => (slideRefs.current[index] = el)}
//               >
//                 <div className="process-page-content-slide-inner">
//                   <div>
//                     <p className="process-page-content-number">
//                       {"{ " + card.number + " }"}
//                     </p>
//                     <h2 className="process-page-content-title process-page-heading-lg">
//                       {card.title}
//                     </h2>
//                   </div>
//                   <div>
//                     <p className="process-page-content-copy">{card.copy}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Remaining sections */}
//       <Testimonials />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import CTASection from "../components/CtaSection";
import SlideUpButton from "../components/SlideUpButton";
import "../styles/ProcessPage.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    number: "01",
    title: "Sketch Design",
    copy: "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief. Through collaboration and refinement, we shape the concept to align with your goals, timeline, and budget.",
    color: "green",
  },
  {
    number: "02",
    title: "Design Development",
    copy: "Here we take the initial sketches and fill in all the glorious details, including building material selections, inside-to-outside interfaces, floor plans, layouts, indicative joinery design and spatial flow. Our team will craft detailed digital 2D drawings and a 3D model that bring the look, feel and layout of your home to life.",
    color: "white",
  },
  {
    number: "03",
    title: "Development Application",
    copy: "Not all projects will require a development application with Council. If yours does, we will coordinate the entire process, including sourcing input from Town Planners, gathering documentation and information from consultants, preparing and submitting the application, and managing information requests and follow-ups with Council.",
    color: "orange",
  },
  {
    number: "04",
    title: "Construction Documentation",
    copy: "We prepare comprehensive construction documentation, including detailed drawings and specifications, to ensure your vision is realized accurately by the builders.",
    color: "lilac",
  },
  {
    number: "05",
    title: "Construction & Handover",
    copy: "We oversee the construction phase, ensuring quality and compliance, and guide you through to a smooth handover of your completed project.",
    color: "green",
  },
];

export default function ProcessPage() {
  const wrapperRefs = useRef([]);
  const slideRefs = useRef([]);
  const heroBackgroundRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    scrollTo(0, 0);

    const mm = gsap.matchMedia();

    // True parallax scroll effect for hero section
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (heroBackgroundRef.current) {
        // Simple vertical scroll parallax - image moves slower than scroll
        gsap.to(heroBackgroundRef.current, {
          y: "30%", // Image scrolls down slower than the page
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      }

      if (heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          opacity: 0,
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: true,
          },
        });
      }
    });

    // Smooth card stacking animation
    mm.add(
      "(min-width: 1200px) and (prefers-reduced-motion: no-preference)",
      () => {
        wrapperRefs.current.forEach((wrapper, i) => {
          if (!wrapper || !slideRefs.current[i]) return;

          const card = slideRefs.current[i];
          let scale = 1;
          let rotationZ = 0;
          let rotationX = 0;

          if (i !== slideRefs.current.length - 1) {
            scale = 0.5 + 0.05 * i; // Smoother scale progression
            rotationZ = 3; // Reduced rotation for subtlety
            rotationX = 30; // Reduced rotation for smoother effect
          }

          gsap.to(card, {
            scale,
            rotationX,
            rotationZ,
            transformOrigin: "50% center",
            ease: "power1.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "bottom bottom",
              endTrigger: slideRefs.current[slideRefs.current.length - 1],
              scrub: 0.5, // Smoother scrub
              pin: wrapper,
              pinSpacing: false,
              anticipatePin: 1, // Prevents jumps
              invalidateOnRefresh: true,
              id: `card-${i + 1}`,
            },
          });
        });
      }
    );

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // ✅ Fixed: Added dependency array

  return (
    <div className="process-page">
      {/* Process Overview Section */}
      <section className="process-overview-section">
        <div className="process-overview-container">
          {/* Process Statement */}
          <div className="process-statement">
            <span className="process-label">(PROCESS)</span>
            <h2 className="process-statement-heading">
              Great architecture isn't just about talent and experience, but
              collaborations and relationships.
            </h2>
          </div>

          {/* Large Image */}
          <div className="process-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
              alt="Modern architectural design"
              className="process-large-image"
            />
          </div>

          {/* Our Approach */}
          <div className="process-approach">
            <span className="process-label">(OUR APPROACH)</span>
            <div className="process-approach-content">
              <p className="process-approach-text">
                You can expect our team to expertly guide your project and work
                closely with you at every stage from delivering the initial
                design concepts to achieving a final build that goes beyond your
                aspirations
              </p>
              <SlideUpButton href="/contact">Send us an enquiry</SlideUpButton>
            </div>
            <span className="process-copyright">©2025</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-background"
          ref={heroBackgroundRef}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)",
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content" ref={heroContentRef}>
          <h1 className="hero-title">
            Overview of our <br /> 5 step process
          </h1>
          <p className="hero-subtitle">Your vision, our expertise</p>
        </div>
      </section>

      {/* Process Cards */}
      <section className="process-page-content">
        <div className="process-pin-area">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="process-page-content-wrapper"
              ref={(el) => (wrapperRefs.current[index] = el)}
            >
              <div
                className={`process-page-content-slide process-page-${card.color}`}
                ref={(el) => (slideRefs.current[index] = el)}
              >
                {/* <div className="process-page-content-slide-inner"> */}
                {/* <div>
                    <p className="process-page-content-number">
                      {"{ " + card.number + " }"}
                    </p>
                    <h2 className="process-page-content-title process-page-heading-lg">
                      {card.title}
                    </h2>
                  </div> */}
                {/* <div>
                    <p className="process-page-content-copy">{card.copy}</p>
                  </div> */}
                {/* </div> */}
                <div className="process-page-content-slide-inner process-card-layout">
                  {/* Left column – number */}
                  <div className="process-card-left">
                    <p className="process-page-content-number">
                      ( {card.number} )
                    </p>
                  </div>

                  {/* Right column – content */}
                  <div className="process-card-right">
                    <h2 className="process-page-content-title process-page-heading-lg">
                      {card.title}
                    </h2>

                    {/* Image block (can reuse same image for now) */}
                    <div className="process-card-image">
                      <img
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80"
                        alt={card.title}
                      />
                    </div>

                    <p className="process-page-content-copy">{card.copy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Remaining sections */}
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
