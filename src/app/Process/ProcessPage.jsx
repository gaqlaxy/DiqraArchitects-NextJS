"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Testimonials from "@/app/components/Testimonials";
import Footer from "@/app/components/Footer";
import CTASection from "../components/CtaSection";
import Link from "next/link";
// import "../styles/ProcessPage.css";

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
    color: "green", // You can use: green, white, orange, lilac, or add a new color in your CSS
  },
];

const styles = `
h1 {
  font-size: 120px;
  font-weight: 400;
  letter-spacing: -3px;
  line-height: 0.9;
}
  .process-page {
    background: #fff;
    min-height: 100vh;
  }

  /* Hero Section */
  .hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-background {
    position: absolute;
    top: -20%;
    left: 0;
    width: 100%;
    height: 140%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    will-change: transform;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: white;
    padding: 2rem;
    max-width: 1200px;
    will-change: transform, opacity;
  }

  .hero-title {
    font-size: clamp(2.5rem, 8vw, 6rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .hero-subtitle {
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 300;
    opacity: 0.95;
    letter-spacing: 0.05em;
  }

  /* Process Cards */
  .process-page-content-wrapper {
    perspective: 800px;
  }

  .process-page-content-slide {
    color: #111;
    padding: 3rem 1rem 6rem 1rem;
  }

  .process-page-content-slide-inner {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 2rem;
  }

  .process-page-content-slide.process-page-green {
    background: #c9f6b4;
  }

  .process-page-content-slide.process-page-white {
    background: #f5f5f5;
  }

  .process-page-content-slide.process-page-orange {
    background: #ffd9b0;
  }

  .process-page-content-slide.process-page-lilac {
    background: #c4bafe;
  }

  .process-page-content-title {
    color: #111;
    margin-top: 0.5rem;
  }

  .process-page-content-copy {
    max-width: 50ch;
    font-size: clamp(1rem, 2vw, 1.5rem);
    line-height: 1.6;
  }

  .process-page-content-number {
    font-size: clamp(1rem, 3vw, 3rem);
    opacity: 0.5;
    font-weight: 500;
  }

  .process-page-heading-lg {
    font-size: 8vw;
    font-weight: 700;
    line-height: 1.1;
  }

  @media (min-width: 900px) {
    .process-page-content-slide {
      height: calc(100vh - 80px);
      transform-style: preserve-3d;
    }

    .process-page-content-slide-inner {
      gap: 4rem;
    }
  }

  @media (min-width: 1200px) {
    .process-page-heading-lg {
      font-size: clamp(4rem, 8vw, 8rem);
    }
  }

  .process-page-spacer {
    height: 100vh;
  }
`;

export default function ProcessPage() {
  const wrapperRefs = useRef([]);
  const slideRefs = useRef([]);
  const heroBackgroundRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Parallax effect for hero section
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (heroBackgroundRef.current) {
        gsap.to(heroBackgroundRef.current, {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          opacity: 0,
          y: 100,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "center top",
            scrub: 1,
          },
        });
      }
    });

    // Card stacking animation
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
            scale = 0.4 + 0.025 * i;
            rotationZ = 5;
            rotationX = 40;
          }

          gsap.to(card, {
            scale,
            rotationX,
            rotationZ,
            transformOrigin: "50% center",
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "bottom bottom",
              endTrigger: slideRefs.current[slideRefs.current.length - 1],
              scrub: 1,
              pin: wrapper,
              pinSpacing: false,
              id: i + 1,
            },
          });
        });
      }
    );

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  // useEffect(() => {
  //   const mm = gsap.matchMedia();

  //   mm.add(
  //     "(min-width: 1200px) and (prefers-reduced-motion: no-preference)",
  //     () => {
  //       wrapperRefs.current.forEach((wrapper, i) => {
  //         if (!wrapper || !slideRefs.current[i]) return;

  //         const card = slideRefs.current[i];
  //         let scale = 1;
  //         let rotationZ = 0;
  //         let rotationX = 0;

  //         if (i !== slideRefs.current.length - 1) {
  //           scale = 0.4 + 0.025 * i;
  //           rotationZ = 5;
  //           rotationX = 40;
  //         }

  //         gsap.to(card, {
  //           scale,
  //           rotationX,
  //           rotationZ,
  //           transformOrigin: "50% center",
  //           ease: "none",
  //           scrollTrigger: {
  //             trigger: wrapper,
  //             start: "top top",
  //             end: "bottom bottom",
  //             endTrigger: slideRefs.current[slideRefs.current.length - 1],
  //             scrub: 1,
  //             pin: wrapper,
  //             pinSpacing: false,
  //             id: i + 1,
  //           },
  //         });
  //       });
  //     }
  //   );

  //   return () => {
  //     mm.revert();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);
  // useEffect(() => {
  //   const prefersReducedMotion = window.matchMedia(
  //     "(prefers-reduced-motion: reduce)"
  //   ).matches;

  //   if (prefersReducedMotion) return;

  //   // Detect if mobile
  //   const isMobile = window.innerWidth < 900;

  //   wrapperRefs.current.forEach((wrapper, i) => {
  //     if (!wrapper || !slideRefs.current[i]) return;

  //     const card = slideRefs.current[i];
  //     let scale = 1;
  //     let rotationZ = 0;
  //     let rotationX = 0;

  //     if (i !== slideRefs.current.length - 1) {
  //       // Mobile: less dramatic effect
  //       scale = isMobile ? 0.6 + 0.05 * i : 0.4 + 0.025 * i;
  //       rotationZ = isMobile ? 3 : 5;
  //       rotationX = isMobile ? 20 : 40;
  //     }

  //     gsap.to(card, {
  //       scale,
  //       rotationX,
  //       rotationZ,
  //       transformOrigin: "50% center",
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: wrapper,
  //         start: "top top",
  //         end: "bottom bottom",
  //         endTrigger: slideRefs.current[slideRefs.current.length - 1],
  //         scrub: 1,
  //         pin: wrapper,
  //         pinSpacing: false,
  //         id: i + 1,
  //       },
  //     });
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);
  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <>
      <style>{styles}</style>
      <div className="process-page">
        {/* Dummy Section Before */}
        {/* <section className="process-page-dummy-section process-page-before">
        <div className="process-page-dummy-content">
          <h1>Welcome Section</h1>
          <p>
            This is a dummy section before the scroll cards. You can modify this
            content however you like.
          </p>
          <p>Add your hero content, intro text, or any other elements here.</p>
        </div>
      </section> */}
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

        <section className="process-page-content">
          <div className="process-page-content-inner">
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
                  <div className="process-page-content-slide-inner">
                    <div>
                      <p className="process-page-content-number">
                        {"{ " + card.number + " }"}
                      </p>
                      <h2 className="process-page-content-title process-page-heading-lg">
                        {card.title}
                      </h2>
                    </div>
                    <div>
                      <p className="process-page-content-copy">{card.copy}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="process-page-spacer"></div>
        <Testimonials />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
