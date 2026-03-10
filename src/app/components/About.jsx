"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/About.css";
import Image from "next/image";
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
            <Image 
              src="/AboutW.webp" 
              alt="Architecture Studio" 
              fill 
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority
              className="object-cover"
            />
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
