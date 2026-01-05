"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/About.css";
import SlideUpButton from "./SlideUpButton";

const About = () => {
  return (
    <section id="about" className="about-sticky-section">
      <div className="about-container">
        {/* LEFT: Pinned Headline (Stays fixed while you scroll) */}
        <div className="sticky-side">
          <div className="sticky-content">
            <span className="chapter-marker">(STUDIO)</span>
            <h1 className="sticky-headline">
              CRAFTING
              <br />
              TIMELESS
              <br />
              SPACES
            </h1>
          </div>
        </div>

        {/* RIGHT: Scrolling Content (Moves up) */}
        <div className="scroll-side">
          {/* The Visual */}
          <div className="scroll-image-wrapper">
            <img src="/AboutW.webp" alt="Architecture Studio" />
          </div>

          {/* The Narrative */}
          <div className="scroll-text-content">
            <div className="heading-group">
              <h2 className="sub-title">Intent</h2>
              <span className="amp">&</span>
              <h2 className="sub-title">Impact</h2>
            </div>

            <p className="description">
              Diqra Architects creates spaces that balance strength, serenity,
              and refined craftsmanship. Our work draws from cultural richness
              and translates it into contemporary, timeless architecture.
            </p>

            <p className="description">
              Every project is approached with clarity, precision, and a
              commitment to natural harmony, resulting in spaces that feel
              grounded, enduring, and beautifully purposeful.
            </p>

            <div className="action-area">
              {/* <SlideUpButton href="/about">More About Us</SlideUpButton> */}
              {/* <button className="line-btn">Read Full Story</button> */}
              <SlideUpButton href="/about">Read Full Story</SlideUpButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// V222

// V333333333
// const About = () => {
//   return (
//     <section className="classic-section about-section">
//       <div className="classic-container">

//         {/* 1. The Hook (Serif Italic) */}
//         <div className="classic-header">
//           <p className="cursive-tag">Since 2024</p>
//           <h1 className="classic-title">
//             We craft spaces of <br />
//             <span className="italic-serif">quiet elegance</span>
//             <span className="roman-serif"> & strength.</span>
//           </h1>
//         </div>

//         {/* 2. The Triptych (3 Columns: Text - Image - Text) */}
//         <div className="classic-grid">

//           {/* Left: Logic */}
//           <div className="classic-col text-col">
//             <h3 className="col-label">The Intent</h3>
//             <p>
//               Diqra Architects creates spaces that balance strength, serenity,
//               and refined craftsmanship. Our work draws from cultural richness,
//               translating it into contemporary forms.
//             </p>
//           </div>

//           {/* Center: Visual */}
//           <div className="classic-col img-col">
//             <div className="arch-window">
//               <img src="/About.webp" alt="Architecture Interior" />
//             </div>
//           </div>

//           {/* Right: Emotion */}
//           <div className="classic-col text-col">
//             <h3 className="col-label">The Impact</h3>
//             <p>
//               Every project is approached with clarity and a commitment to
//               natural harmony. The result is spaces that feel grounded,
//               enduring, and beautifully purposeful.
//             </p>
//             <button className="classic-btn">The Studio</button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// V44444444444

// import React, { useEffect, useRef, useState } from 'react';

// const About = () => {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="about">
//       <style>{`
//         .about {
//           background: #fcfcfc;
//           padding: 4rem 20px 60px;
//           position: relative;
//         }

//         .about-container {
//           max-width: 1400px;
//           margin: 0 auto;
//         }

//         .about-header {
//           text-align: center;
//           margin-bottom: 4rem;
//         }

//         .about-label {
//           font-size: 14px;
//           letter-spacing: 2px;
//           color: #666;
//           text-transform: uppercase;
//           margin-bottom: 2rem;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 20}px);
//           transition: all 0.8s ease;
//         }

//         .about-title {
//           font-size: clamp(48px, 5vw, 72px);
//           font-weight: 500;
//           line-height: 1.15;
//           color: #000;
//           margin: 0;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 30}px);
//           transition: all 1s 0.2s ease;
//         }

//         .about-grid {
//           display: grid;
//           grid-template-columns: 1fr 2fr 1fr;
//           gap: 15px;
//           margin-bottom: 40px;
//           align-items: center;
//         }

//         .about-studio {
//           opacity: ${inView ? 1 : 0};
//           transition: all 0.8s 0.3s ease;
//         }

//         .studio-text {
//           font-size: 14px;
//           font-weight: 400;
//           color: #666;
//           writing-mode: vertical-rl;
//           text-orientation: mixed;
//           letter-spacing: 2px;
//         }

//         .about-image {
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 40}px);
//           transition: all 1.2s 0.4s ease;
//         }

//         .about-image img {
//           width: 100%;
//           height: 250px;
//           object-fit: cover;
//           display: block;
//         }

//         .about-impact {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 30}px);
//           transition: all 1s 0.5s ease;
//         }

//         .impact-title {
//           font-size: clamp(32px, 3vw, 42px);
//           font-weight: 400;
//           letter-spacing: 0.02em;
//           color: #000;
//           margin: 0;
//           line-height: 1.4;
//           text-align: left;
//         }

//         .about-content {
//           max-width: 720px;
//           margin: 0 auto;
//           text-align: center;
//         }

//         .about-text {
//           font-size: 18px;
//           line-height: 1.6;
//           color: #444;
//           font-weight: 400;
//           margin-bottom: 40px;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 25}px);
//           transition: all 1s 0.6s ease;
//         }

//         .about-button {
//           display: inline-block;
//           padding: 12px 24px;
//           font-size: 16px;
//           letter-spacing: 0.5px;
//           text-transform: lowercase;
//           color: #000;
//           background: transparent;
//           border: 1px solid #ddd;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 20}px);
//           transition: all 0.8s 0.7s ease;
//         }

//         .about-button:hover {
//           background: #000;
//           color: #fff;
//           border-color: #000;
//         }

//         @media (max-width: 768px) {
//           .about {
//             padding: 40px 16px;
//           }

//           .about-header {
//             margin-bottom: 3rem;
//           }

//           .about-title {
//             text-align: center;
//           }

//           .about-grid {
//             grid-template-columns: 1fr;
//             gap: 25px;
//           }

//           .studio-text {
//             writing-mode: initial;
//             text-orientation: initial;
//             text-align: center;
//             font-size: 12px;
//             letter-spacing: 0.3em;
//             opacity: 0.6;
//           }

//           .about-image img {
//             height: 420px;
//           }

//           .about-text {
//             text-align: left;
//             font-weight: 500;
//           }

//           .about-button {
//             width: 100%;
//             text-align: center;
//           }
//         }

//         @media (min-width: 1200px) {
//           .about {
//             padding: 80px 40px;
//           }

//           .about-grid {
//             gap: 30px;
//           }

//           .about-image img {
//             height: 350px;
//           }

//           .about-content {
//             max-width: 1000px;
//           }

//           .about-text {
//             font-size: 20px;
//             line-height: 1.8;
//           }
//         }
//       `}</style>

//       <div className="about-container">
//         <div className="about-header">
//           <div className="about-label">(our studio)</div>
//           <h1 className="about-title">
//             CRAFTING TIMELESS<br />
//             SPACES WITH
//           </h1>
//         </div>

//         <div className="about-grid">
//           <div className="about-studio">
//             <span className="studio-text">our studio</span>
//           </div>

//           <div className="about-image">
//             <img src="/About.webp" alt="Architecture Studio" />
//           </div>

//           <div className="about-impact">
//             <h2 className="impact-title">INTENT +<br />IMPACT</h2>
//           </div>
//         </div>

//         <div className="about-content">
//           <p className="about-text">
//             Diqra Architects creates spaces that balance strength, serenity,
//             and refined craftsmanship. Our work draws from cultural richness
//             and translates it into contemporary, timeless architecture. Every
//             project is approached with clarity, precision, and a commitment to
//             natural harmony, resulting in spaces that feel grounded, enduring,
//             and beautifully purposeful.
//           </p>

//           <a href="/about" className="about-button">
//             learn more about us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// V555555555555
// import React, { useEffect, useRef, useState } from 'react';

// const About = () => {
//   const [inView, setInView] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setInView(entry.isIntersecting),
//       { threshold: 0.1 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section ref={sectionRef} className="classic-about">
//       <style>{`
//         .classic-about {
//           background: #f8f8f6;
//           padding: 0;
//           position: relative;
//         }

//         .about-wrap {
//           max-width: 1600px;
//           margin: 0 auto;
//           padding: 8vh 6vw;
//         }

//         .about-ornament {
//           text-align: center;
//           margin-bottom: 3rem;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 20}px);
//           transition: all 0.9s ease;
//         }

//         .ornament-line {
//           display: inline-block;
//           width: 60px;
//           height: 1px;
//           background: #9d8b7c;
//           margin: 0 1rem;
//           vertical-align: middle;
//         }

//         .ornament-symbol {
//           display: inline-block;
//           font-size: 1.2rem;
//           color: #9d8b7c;
//           vertical-align: middle;
//         }

//         .about-header {
//           text-align: center;
//           margin-bottom: 6vh;
//           max-width: 900px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .about-subtitle {
//           font-size: 0.75rem;
//           letter-spacing: 0.3em;
//           text-transform: uppercase;
//           color: #9d8b7c;
//           margin-bottom: 2rem;
//           font-weight: 400;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 20}px);
//           transition: all 1s 0.1s ease;
//         }

//         .about-main-title {
//           font-size: clamp(2.5rem, 5vw, 4rem);
//           font-weight: 400;
//           line-height: 1.4;
//           color: #2c2c2c;
//           margin: 0 0 2rem 0;
//           font-family: Georgia, 'Times New Roman', serif;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 30}px);
//           transition: all 1.2s 0.2s ease;
//         }

//         .about-intro-text {
//           font-size: clamp(1rem, 1.8vw, 1.2rem);
//           line-height: 1.8;
//           color: #5a5a5a;
//           font-weight: 300;
//           max-width: 700px;
//           margin: 0 auto 5vh;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 25}px);
//           transition: all 1s 0.3s ease;
//         }

//         .about-divider {
//           width: 80px;
//           height: 1px;
//           background: #9d8b7c;
//           margin: 0 auto 6vh;
//           opacity: ${inView ? 1 : 0};
//           transition: all 0.8s 0.4s ease;
//         }

//         .about-visual-grid {
//           display: grid;
//           grid-template-columns: 1fr 2fr 1fr;
//           gap: 3rem;
//           margin-bottom: 8vh;
//           align-items: center;
//         }

//         .visual-left {
//           text-align: right;
//           padding-right: 2rem;
//           opacity: ${inView ? 1 : 0};
//           transform: translateX(${inView ? 0 : -30}px);
//           transition: all 1.2s 0.5s ease;
//         }

//         .visual-label {
//           font-size: 0.8rem;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #9d8b7c;
//           margin-bottom: 1rem;
//           font-weight: 400;
//         }

//         .visual-year {
//           font-size: 2rem;
//           font-weight: 300;
//           color: #2c2c2c;
//           font-family: Georgia, 'Times New Roman', serif;
//         }

//         .visual-center {
//           position: relative;
//           opacity: ${inView ? 1 : 0};
//           transform: scale(${inView ? 1 : 0.95});
//           transition: all 1.4s 0.6s ease;
//         }

//         .image-frame {
//           position: relative;
//           padding: 12px;
//           background: #fff;
//           box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
//         }

//         .image-frame::before {
//           content: '';
//           position: absolute;
//           inset: 6px;
//           border: 1px solid #e5e5e5;
//           pointer-events: none;
//         }

//         .image-frame img {
//           width: 100%;
//           height: 400px;
//           object-fit: cover;
//           display: block;
//         }

//         .visual-right {
//           padding-left: 2rem;
//           opacity: ${inView ? 1 : 0};
//           transform: translateX(${inView ? 0 : 30}px);
//           transition: all 1.2s 0.7s ease;
//         }

//         .visual-quote {
//           font-size: 1rem;
//           line-height: 1.7;
//           color: #5a5a5a;
//           font-style: italic;
//           font-family: Georgia, 'Times New Roman', serif;
//           position: relative;
//           padding-left: 1.5rem;
//         }

//         .visual-quote::before {
//           content: '"';
//           position: absolute;
//           left: 0;
//           top: -0.3rem;
//           font-size: 3rem;
//           color: #9d8b7c;
//           font-family: Georgia, 'Times New Roman', serif;
//         }

//         .about-description {
//           max-width: 900px;
//           margin: 0 auto;
//           text-align: center;
//         }

//         .description-title {
//           font-size: clamp(1.5rem, 3vw, 2rem);
//           font-weight: 400;
//           color: #2c2c2c;
//           margin: 0 0 2.5rem 0;
//           font-family: Georgia, 'Times New Roman', serif;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 30}px);
//           transition: all 1s 0.8s ease;
//         }

//         .description-text {
//           font-size: clamp(1rem, 1.5vw, 1.15rem);
//           line-height: 1.9;
//           color: #5a5a5a;
//           font-weight: 300;
//           margin-bottom: 3rem;
//           opacity: ${inView ? 1 : 0};
//           transform: translateY(${inView ? 0 : 25}px);
//           transition: all 1s 0.9s ease;
//         }

//         .about-cta {
//           display: inline-block;
//           padding: 14px 40px;
//           font-size: 0.8rem;
//           letter-spacing: 0.2em;
//           text-transform: uppercase;
//           color: #2c2c2c;
//           background: transparent;
//           border: 1px solid #9d8b7c;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           opacity: ${inView ? 1 : 0};
//           transition: all 0.8s 1s ease;
//         }

//         .about-cta:hover {
//           background: #9d8b7c;
//           color: #fff;
//         }

//         @media (max-width: 1024px) {
//           .about-visual-grid {
//             grid-template-columns: 1fr;
//             gap: 2.5rem;
//           }

//           .visual-left,
//           .visual-right {
//             text-align: center;
//             padding: 0;
//             transform: translateX(0);
//           }

//           .visual-quote {
//             padding-left: 0;
//             max-width: 500px;
//             margin: 0 auto;
//           }

//           .visual-quote::before {
//             position: static;
//             display: block;
//             text-align: center;
//           }
//         }

//         @media (max-width: 768px) {
//           .about-wrap {
//             padding: 6vh 6vw;
//           }

//           .about-ornament {
//             margin-bottom: 2rem;
//           }

//           .ornament-line {
//             width: 40px;
//             margin: 0 0.8rem;
//           }

//           .about-header {
//             margin-bottom: 4vh;
//           }

//           .about-divider {
//             margin-bottom: 4vh;
//           }

//           .image-frame {
//             padding: 8px;
//           }

//           .image-frame img {
//             height: 350px;
//           }

//           .about-description {
//             text-align: left;
//           }

//           .description-title {
//             text-align: center;
//           }

//           .about-cta {
//             width: 100%;
//             text-align: center;
//           }
//         }
//       `}</style>

//       <div className="about-wrap">
//         {/* <div className="about-ornament">
//           <span className="ornament-line"></span>
//           <span className="ornament-symbol">◆</span>
//           <span className="ornament-line"></span>
//         </div> */}

//         <div className="about-header">
//           <div className="about-subtitle">Our Studio</div>
//           <h1 className="about-main-title">
//             Crafting Timeless Spaces<br />
//             With Intent and Impact
//           </h1>
//           <p className="about-intro-text">
//             Architecture that honors heritage while embracing contemporary vision,
//             rooted in classical principles of proportion, harmony, and enduring beauty.
//           </p>
//         </div>

//         <div className="about-divider"></div>

//         <div className="about-visual-grid">
//           <div className="visual-left">
//             <div className="visual-label">Established</div>
//             <div className="visual-year">2010</div>
//           </div>

//           <div className="visual-center">
//             <div className="image-frame">
//               <img src="/About.webp" alt="Diqra Architects" />
//             </div>
//           </div>

//           <div className="visual-right">
//             <p className="visual-quote">
//               Every space tells a story of craftsmanship, clarity, and timeless design principles.
//             </p>
//           </div>
//         </div>

//         <div className="about-description">
//           <h2 className="description-title">Our Design Philosophy</h2>
//           <p className="description-text">
//             Diqra Architects creates spaces that balance strength, serenity,
//             and refined craftsmanship. Our work draws from cultural richness
//             and translates it into contemporary, timeless architecture. Every
//             project is approached with clarity, precision, and a commitment to
//             natural harmony, resulting in spaces that feel grounded, enduring,
//             and beautifully purposeful.
//           </p>
//           <a href="/about" className="about-cta">Learn More About Us</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
