"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/app/components/Footer";
import "../styles/ProcessPage.css";
import CtaSection from "@/app/components/CtaSection";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    number: "01",
    title: "Sketch Design",
    copy: "We kick off with a site visit and creative consultation to define your vision, style, and functional needs. We'll also uncover new opportunities and potential limitations. Based on this, we craft a series of hand-drawn design sketches to provide an initial visual concept that reflects your brief.",
    image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Design Development",
    copy: "Here we take the initial sketches and fill in all the glorious details, including building material selections, inside-to-outside interfaces, floor plans, layouts, indicative joinery design and spatial flow. Our team will craft detailed digital 2D drawings and a 3D model.",
    image: "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Development Application",
    copy: "Not all projects will require a development application with Council. If yours does, we will coordinate the entire process, including sourcing input from Town Planners, gathering documentation and information from consultants.",
    image: "https://images.unsplash.com/photo-1664267605963-39d67566de33?q=80&w=2670&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Construction Documentation",
    copy: "We prepare comprehensive construction documentation, including detailed drawings and specifications, to ensure your vision is realized accurately by the builders.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2662&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "Construction & Handover",
    copy: "We oversee the construction phase, ensuring quality and compliance, and guide you through to a smooth handover of your completed project.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
  },
];

export default function ProcessPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    scrollTo(0, 0);

    let ctx = gsap.context(() => {
      // 1. Hero Animation
      const heroTl = gsap.timeline();
      heroTl
        .from(".hero-line", {
          y: 100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        })
        .from(
          ".hero-sub",
          {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // 2. Intro Text Reveal
      gsap.from(".intro-text-line", {
        scrollTrigger: {
          trigger: introRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Intro Image Parallax
      gsap.to(".intro-img", {
        scrollTrigger: {
          trigger: ".intro-img-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -100,
        ease: "none"
      });


      // 3. Vertical Steps Animation
      const steps = gsap.utils.toArray(".step-card");

      steps.forEach((step, i) => {
        // Parallax Image
        const img = step.querySelector(".step-image");
        if (img) {
          gsap.fromTo(img,
            { y: "-10%" },
            {
              y: "10%",
              ease: "none",
              scrollTrigger: {
                trigger: step,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            }
          );
        }

        // Text Reveal
        const text = step.querySelector(".step-text-col");
        if (text) {
          gsap.from(text.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          })
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="process-page-container bg-neutral-50 text-neutral-900">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[60vh] md:h-screen w-full flex flex-col justify-center px-6 md:px-20 pt-32 md:pt-20">
        <div className="overflow-hidden">
          <h1 className="hero-line text-[90px] leading-[0.85] font-bold tracking-tighter uppercase text-black">
            Our
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line text-[90px] leading-[0.85] font-bold tracking-tighter uppercase text-black">
            Process
          </h1>
        </div>
        <div className="mt-8 md:mt-12 max-w-xl overflow-hidden">
          <p className="hero-sub text-lg md:text-xl font-medium text-neutral-600">
            From the first sketch to the final handover, we guide you through a seamless, collaborative journey to build your dream space.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-24 px-6 md:px-20 w-full flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            <div className="overflow-hidden"><span className="intro-text-line block">Great architecture</span></div>
            <div className="overflow-hidden"><span className="intro-text-line block">is built on</span></div>
            <div className="overflow-hidden"><span className="intro-text-line block text-neutral-500">strong relationships.</span></div>
          </h2>
          <p className="intro-text-line text-lg text-neutral-600 max-w-md">
            We believe in a transparent, step-by-step approach ensuring you are heard, understood, and delighted at every milestone.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[60vh] overflow-hidden rounded-2xl intro-img-container">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80"
            alt="Architecture meeting"
            className="intro-img w-full h-[120%] object-cover object-center"
          />
        </div>
      </section>

      {/* Vertical Steps Section */}
      <section className="vertical-steps-section">
        {cardData.map((card, index) => (
          <div key={index} className="step-card">
            <div className="step-content-wrapper">

              {/* Text Column */}
              <div className="step-text-col">
                <span className="text-[120px] md:text-[200px] leading-none font-bold text-neutral-200 select-none">
                  {card.number}
                </span>
                <h3 className="step-title">{card.title}</h3>
                <p className="step-description">{card.copy}</p>
              </div>

              {/* Image Column */}
              <div className="step-image-container">
                <img src={card.image} alt={card.title} className="step-image" />
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* End CTA */}
      <CtaSection />

      <Footer />
    </div>
  );
}
