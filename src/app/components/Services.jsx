"use client";
import React, { useEffect } from "react";
import "../styles/Services.css";
import { gsap } from "gsap";
import SlideUpButton from "./SlideUpButton";

import Link from "next/link";

const Services = () => {
  useEffect(() => {
    // Function to create slide-up effect for button
    const createSlideUpEffect = (element) => {
      if (element.hasAttribute("data-gsap-initialized")) return null;

      let span = element.querySelector("span");
      if (!span) {
        const originalText = element.textContent.trim();
        element.innerHTML = `<span>${originalText}</span>`;
        span = element.querySelector("span");
      }

      if (span.querySelector(".text-original, .text-hover")) {
        element.setAttribute("data-gsap-initialized", "true");
        return null;
      }

      const originalText = span.textContent;
      span.innerHTML = `
        <span class="text-original">${originalText}</span>
        <span class="text-hover">${originalText}</span>
      `;

      const originalSpan = span.querySelector(".text-original");
      const hoverSpan = span.querySelector(".text-hover");
      const slideDistance = originalSpan.offsetHeight;

      gsap.set(span, {
        overflow: "hidden",
        position: "relative",
        display: "block",
        height: `${slideDistance}px`,
      });
      gsap.set(originalSpan, { y: 0, position: "relative", display: "block" });
      gsap.set(hoverSpan, {
        y: `${slideDistance}px`,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "block",
      });

      const tl = gsap.timeline({ paused: true });
      tl.to(originalSpan, {
        y: `-${slideDistance}px`,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(hoverSpan, { y: 0, duration: 0.4, ease: "power2.inOut" }, 0)
        .to(originalSpan, { opacity: 0, duration: 0.1 }, 0.2)
        .to(hoverSpan, { opacity: 1, duration: 0.1 }, 0.2);

      tl.eventCallback("onReverseComplete", () => {
        gsap.set(originalSpan, { y: 0, opacity: 1 });
        gsap.set(hoverSpan, { y: `${slideDistance}px`, opacity: 0 });
      });

      element.setAttribute("data-gsap-initialized", "true");
      return tl;
    };

    setTimeout(() => {
      const styledCtaBtns = document.querySelectorAll(".cta-btn-styled");
      styledCtaBtns.forEach((btn) => {
        const timeline = createSlideUpEffect(btn);
        if (timeline) {
          btn.addEventListener("mouseenter", () => timeline.play());
          btn.addEventListener("mouseleave", () => timeline.reverse());
        }
      });
    }, 100);
  }, []);

  return (
    <>
      <section className="services-section">
        <div className="header">
          <div className="header-left">
            <div className="label">WHAT WE DO</div>
            <h1>Our Services</h1>
          </div>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon-container">
              <svg
                className="icon"
                viewBox="0 0 100 100"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
              >
                <rect x="20" y="40" width="25" height="35" />
                <rect x="25" y="48" width="6" height="8" />
                <rect x="34" y="48" width="6" height="8" />
                <rect x="25" y="60" width="6" height="8" />
                <rect x="34" y="60" width="6" height="8" />
                <path d="M 45 30 L 55 20 L 75 20 L 75 75 L 45 75 Z" />
                <rect x="50" y="28" width="6" height="8" />
                <rect x="59" y="28" width="6" height="8" />
                <rect x="50" y="40" width="6" height="8" />
                <rect x="59" y="40" width="6" height="8" />
                <rect x="50" y="52" width="6" height="8" />
                <rect x="59" y="52" width="6" height="8" />
                <line x1="55" y1="20" x2="55" y2="30" />
                <line x1="55" y1="30" x2="45" y2="30" />
              </svg>
            </div>
            <div className="service-content">
              <h3>Exterior Design</h3>
              <p>
                We craft bold, refined exteriors that balance form, function,
                and lasting visual harmony.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-container">
              <svg
                className="icon"
                viewBox="0 0 100 100"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
              >
                <circle cx="35" cy="45" r="18" />
                <circle cx="55" cy="35" r="18" />
                <circle cx="50" cy="60" r="18" />
              </svg>
            </div>
            <div className="service-content">
              <h3>Design & Planning</h3>
              <p>
                From conceptual layouts to detailed drawings, we shape your
                project with precision and clarity.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-container">
              <svg
                className="icon"
                viewBox="0 0 100 100"
                fill="none"
                stroke="#000"
                strokeWidth="1.5"
              >
                <path d="M 25 45 L 50 25 L 75 45 L 75 75 L 25 75 Z" />
                <rect x="45" y="55" width="10" height="20" />
                <path d="M 20 45 L 80 45" />
                <rect x="55" y="35" width="12" height="10" rx="1" />
                <line x1="58" y1="38" x2="64" y2="38" />
                <line x1="58" y1="41" x2="64" y2="41" />
                <path
                  d="M 72 28 L 78 28 L 78 22 L 88 22 L 88 32 L 82 32 L 82 34"
                  strokeWidth="1.2"
                />
                <line x1="75" y1="25" x2="78" y2="25" strokeWidth="1.2" />
                <line x1="85" y1="25" x2="88" y2="25" strokeWidth="1.2" />
                <line x1="85" y1="29" x2="88" y2="29" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="service-content">
              <h3>Consultation</h3>
              <p>
                We offer expert guidance to help you make confident design
                decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="header-right">
          {/* <a href="services.html" className="cta-btn-styled">
            <span>View all</span>
          </a> */}

          {/* <Link to="/services" className="cta-btn-styled">
            <span>View All</span>
          </Link> */}
          <SlideUpButton to="/services" className="ml-4">
            view all
          </SlideUpButton>
        </div>

        <div className="inquiry">
          <div>Do you have any project on your mind? Call Us:</div>
          <a href="tel:+(378)555-0108" className="inquiry-number">
            +(378) 555-0108
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;
