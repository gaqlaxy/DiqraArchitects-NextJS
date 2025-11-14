"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import "../styles/HeroSection.css";
// import "./HeroSection.css";

const HeroSection = () => {
  useEffect(() => {
    const masterTimeline = gsap.timeline();

    // PRELOADER ANIMATION
    masterTimeline
      .to(".preloader-divider", {
        scaleX: 1,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.2,
      })
      .to(
        ".preloader-section.top",
        {
          x: "100%",
          duration: 0.7,
          ease: "power2.inOut",
        },
        "+=0.2"
      )
      .to(
        ".preloader-section.middle",
        {
          x: "-100%",
          duration: 0.7,
          ease: "power2.inOut",
        },
        "-=0.6"
      )
      .to(
        ".preloader-section.bottom",
        {
          x: "100%",
          duration: 0.7,
          ease: "power2.inOut",
        },
        "-=0.6"
      )
      .add(() => {
        gsap.to(".hero-divider", { opacity: 1, duration: 0.3 });
        const preloader = document.querySelector(".preloader");
        if (preloader) preloader.remove();
      });

    // HERO CONTENT ANIMATION
    masterTimeline
      .fromTo(
        ".hero-section",
        { backgroundPosition: "50% 30%" },
        {
          backgroundPosition: "50% 50%",
          duration: 1.5,
          ease: "power2.out",
        },
        "-=0.5"
      )
      .to(
        ".hero-heading",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .to(
        ".hero-para",
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <>
      {/* PRELOADER */}
      <div className="preloader">
        <div className="preloader-section top"></div>
        <div className="preloader-section middle"></div>
        <div className="preloader-section bottom"></div>
        <div className="preloader-divider first"></div>
        <div className="preloader-divider second"></div>
        <div className="preloader-divider third"></div>
      </div>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Hero dividers */}
        <div className="hero-divider first"></div>
        <div className="hero-divider second"></div>
        <div className="hero-divider third"></div>

        {/* Desktop Text Blocks */}
        <div className="text-block top-left">
          <div className="hero-heading heading1">
            <p>High-end</p>
          </div>
          <div className="hero-para para1">
            <p>Premium Residences</p>
          </div>
        </div>

        <div className="text-block center-right">
          <div className="hero-para para2">
            <p>Modern & Thoughtful Spaces</p>
          </div>
          <div className="hero-heading heading2">
            <p>Design + Build</p>
          </div>
        </div>

        <div className="text-block bottom-left">
          <div className="hero-heading heading3">
            <p>for elevated living</p>
          </div>
          <div className="hero-para para3">
            <p>Comfort, Style, and Harmony</p>
          </div>
        </div>

        {/* Mobile Text */}
        <div className="hero-mobile">
          <div className="hero-heading heading-mobile">
            <p>High-end Design + Build</p>
          </div>
          <div className="hero-heading heading-mobile">
            <p>for elevated living</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
