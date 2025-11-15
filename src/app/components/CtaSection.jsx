"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "../styles/CtaSection.css"; // ✅ Import external stylesheet
import SlideUpButton from "./SlideUpButton";

export default function CTASection() {
  useEffect(() => {
    const createSlideUpEffect = (element) => {
      let span = element.querySelector("span");

      if (!span) {
        const originalText = element.textContent;
        element.innerHTML = `<span>${originalText}</span>`;
        span = element.querySelector("span");
      }

      if (span.querySelector(".text-original")) return;

      const originalText = span.textContent;
      span.innerHTML = `
        <span class="text-original">${originalText}</span>
        <span class="text-hover">${originalText}</span>
      `;

      const originalSpan = span.querySelector(".text-original");
      const hoverSpan = span.querySelector(".text-hover");

      gsap.set(span, {
        overflow: "hidden",
        height: "auto",
        position: "relative",
        display: "block",
      });

      gsap.set(originalSpan, {
        y: 0,
        position: "relative",
        display: "block",
      });
      gsap.set(hoverSpan, {
        y: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      });

      const tl = gsap.timeline({ paused: true });
      tl.to(originalSpan, {
        y: "-100%",
        duration: 0.3,
        ease: "power2.out",
      }).to(hoverSpan, { y: 0, duration: 0.3, ease: "power2.out" }, 0);

      return tl;
    };

    const styledCtaBtns = document.querySelectorAll(".cta-btn-styled");
    styledCtaBtns.forEach((btn) => {
      const timeline = createSlideUpEffect(btn);
      if (timeline) {
        btn.addEventListener("mouseenter", () => timeline.play());
        btn.addEventListener("mouseleave", () => timeline.reverse());
      }
    });
  }, []);

  return (
    <section className="cta-btn">
      <div className="cta-section">
        <div className="cta-heading">
          <span className="desktop-text">FOCUSED ON QUALITY</span>
          <span className="mobile-text">
            FOCUSED ON
            <br />
            QUALITY
          </span>
        </div>
        <div className="cta-heading2">
          <span className="desktop-text">DRIVEN BY CREATIVITY</span>
          <span className="mobile-text">
            DRIVEN BY
            <br />
            CREATIVITY
          </span>
        </div>
      </div>
      <div className="cta-btn-section">
        {/* <a href="#" className="cta-btn-styled">
          <span>tell us about your project</span>
        </a> */}
        <SlideUpButton href="/contact">
          tell us about your project
        </SlideUpButton>
      </div>
    </section>
  );
}
