// "use client";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import "../styles/CtaSection.css"; // ✅ Import external stylesheet
// import SlideUpButton from "./SlideUpButton";

// export default function CTASection() {
//   useEffect(() => {
//     const createSlideUpEffect = (element) => {
//       let span = element.querySelector("span");

//       if (!span) {
//         const originalText = element.textContent;
//         element.innerHTML = `<span>${originalText}</span>`;
//         span = element.querySelector("span");
//       }

//       if (span.querySelector(".text-original")) return;

//       const originalText = span.textContent;
//       span.innerHTML = `
//         <span class="text-original">${originalText}</span>
//         <span class="text-hover">${originalText}</span>
//       `;

//       const originalSpan = span.querySelector(".text-original");
//       const hoverSpan = span.querySelector(".text-hover");

//       gsap.set(span, {
//         overflow: "hidden",
//         height: "auto",
//         position: "relative",
//         display: "block",
//       });

//       gsap.set(originalSpan, {
//         y: 0,
//         position: "relative",
//         display: "block",
//       });
//       gsap.set(hoverSpan, {
//         y: "100%",
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//       });

//       const tl = gsap.timeline({ paused: true });
//       tl.to(originalSpan, {
//         y: "-100%",
//         duration: 0.3,
//         ease: "power2.out",
//       }).to(hoverSpan, { y: 0, duration: 0.3, ease: "power2.out" }, 0);

//       return tl;
//     };

//     const styledCtaBtns = document.querySelectorAll(".cta-btn-styled");
//     styledCtaBtns.forEach((btn) => {
//       const timeline = createSlideUpEffect(btn);
//       if (timeline) {
//         btn.addEventListener("mouseenter", () => timeline.play());
//         btn.addEventListener("mouseleave", () => timeline.reverse());
//       }
//     });
//   }, []);

//   return (
//     <section className="cta-btn">
//       <div className="cta-section">
//         <div className="cta-heading">
//           <span className="desktop-text">FOCUSED ON QUALITY</span>
//           <span className="mobile-text">
//             FOCUSED ON
//             <br />
//             QUALITY
//           </span>
//         </div>
//         <div className="cta-heading2">
//           <span className="desktop-text">DRIVEN BY CREATIVITY</span>
//           <span className="mobile-text">
//             DRIVEN BY
//             <br />
//             CREATIVITY
//           </span>
//         </div>
//       </div>
//       <div className="cta-btn-section">
//         {/* <a href="#" className="cta-btn-styled">
//           <span>tell us about your project</span>
//         </a> */}
//         <SlideUpButton href="/contact">
//           tell us about your project
//         </SlideUpButton>
//       </div>
//     </section>
//   );
// }

// V2222222222222222222222222
// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "../styles/CtaSection.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function ArchitecturalCTA() {
//   const containerRef = useRef(null);
//   // Refs for lines
//   const linesRef = useRef([]);
//   // Refs for text
//   const textRef = useRef([]);
//   // Ref for button
//   const btnRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 75%", // Triggers when section is 75% into view
//         },
//       });

//       // 1. Draw the lines (Scale Width 0 -> 100%)
//       tl.to(linesRef.current, {
//         scaleX: 1,
//         duration: 1.2,
//         stagger: 0.2,
//         ease: "power3.inOut",
//       })
//         // 2. Slide text up from the masks
//         .to(
//           textRef.current,
//           {
//             y: 0,
//             duration: 1,
//             stagger: 0.1,
//             ease: "power4.out",
//           },
//           "-=0.8"
//         ) // Start slightly before lines finish
//         // 3. Reveal Button (using Clip Path for a 'wipe' effect)
//         .to(
//           btnRef.current,
//           {
//             clipPath: "inset(0 0 0% 0)",
//             duration: 1,
//             ease: "power3.out",
//           },
//           "-=0.5"
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   // Helper to add refs to array
//   const addToLines = (el) => {
//     if (el && !linesRef.current.includes(el)) linesRef.current.push(el);
//   };
//   const addToText = (el) => {
//     if (el && !textRef.current.includes(el)) textRef.current.push(el);
//   };

//   return (
//     <section className="arch-section" ref={containerRef}>
//       <div className="arch-container">
//         {/* ROW 1: Line + Text Left */}
//         <div className="arch-row left">
//           <div className="text-mask indent">
//             <h2 className="arch-heading" ref={addToText}>
//               Focused on Quality
//             </h2>
//           </div>
//           <div className="separator-line" ref={addToLines}></div>
//         </div>

//         {/* ROW 2: Line + Text Right */}
//         <div className="arch-row right">
//           <div className="text-mask indent-right">
//             <h2 className="arch-heading" ref={addToText}>
//               Driven by Creativity
//             </h2>
//           </div>
//           <div className="separator-line" ref={addToLines}></div>
//         </div>

//         {/* ROW 3: Button Centered */}
//         <div className="arch-row center">
//           <a href="/contact" className="arch-btn" ref={btnRef}>
//             Tell us about your project
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// V3333333333333333333333333333333
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/CtaSection.css";
import SlideUpButton from "./SlideUpButton";

// Register ScrollTrigger if needed, though basic timeline works for single view
gsap.registerPlugin(ScrollTrigger);

export default function ReplicaCTA() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const headingLinesRef = useRef([]);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%", // Start animation when section is in view
        },
      });

      // 1. Logo Fades In + Slides Up
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      })
        // 2. Heading Lines Slide Up (Masked)
        .to(
          headingLinesRef.current,
          {
            y: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.8"
        ) // Overlap slightly with logo
        // 3. Subtext Fades In
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        // 4. Button Pops In
        .to(
          btnRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)", // Subtle bounce
          },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Helper to collect refs
  const addToLines = (el) => {
    if (el && !headingLinesRef.current.includes(el)) {
      headingLinesRef.current.push(el);
    }
  };

  return (
    <section className="replica-section" ref={containerRef}>
      <div className="replica-container">
        <div className="replica-content">
          <h2 className="replica-heading">
            <span className="line-mask">
              <span className="line-text" ref={addToLines}>
                Designing spaces. Building trust.
              </span>
            </span>
          </h2>

          {/* Subtext Paragraph */}
          <p className="replica-subtext" ref={textRef}>
            Let’s discuss your project, vision, and how our collaborative
            process turns ideas into enduring spaces.
          </p>

          {/* CTA Button */}

          <div>
            <SlideUpButton href="/contact">Let’s Connect</SlideUpButton>
          </div>
        </div>
      </div>
    </section>
  );
}
