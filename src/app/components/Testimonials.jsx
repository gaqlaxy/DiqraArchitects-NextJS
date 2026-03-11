"use client";
import React, { useState, useCallback } from "react";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    text: "Their landscape design team is incredibly talented and brought my backyard vision to life in ways I never thought possible.",
    author: "Darlene Robertson",
    location: "Chennai, India",
    category: "Architecture Insights",
  },
  {
    text: "Their team's expertise, creativity, and commitment to quality were evident every step of the way. The end result is a stunning space that exceeded all expectations.",
    author: "Cameron Williamson",
    location: "Coimbatore, India",
    category: "Urban Living",
  },
  {
    text: "Working with this team was an absolute pleasure. They transformed our space into something we only dreamed of — with remarkable attention to detail.",
    author: "Robert Fox",
    location: "Trichy, India",
    category: "Modern Design",
  },
  {
    text: "From concept to completion, the entire process was seamless. They listened to our needs and delivered far beyond our expectations.",
    author: "Jenny Wilson",
    location: "Kanchipuram, India",
    category: "Sustainable Living",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback(() => {
    setCurrent((prev) => (prev < testimonialsData.length - 1 ? prev + 1 : prev));
  }, []);

  const item = testimonialsData[current];

  return (
    <section className="test-section">
      <div className="test-container">
        <div className="test-header">
          <span className="section-label">(Testimonials)</span>
          <h2 className="test-title">Client Reviews</h2>
        </div>

        <div className="test-content">
          {/* Large Quote */}
          <div className="test-quote-wrapper">
            <span className="test-quote-mark">&ldquo;</span>
            <blockquote className="test-quote" key={current}>
              {item.text}
            </blockquote>
          </div>

          {/* Author + Navigation */}
          <div className="test-footer">
            <div className="test-author-block">
              <div className="test-author-line" />
              <div className="test-author-info">
                <span className="test-category">{item.category}</span>
                <h4 className="test-author">{item.author}</h4>
                <span className="test-location">{item.location}</span>
              </div>
            </div>

            <div className="test-nav">
              <span className="test-counter">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(testimonialsData.length).padStart(2, "0")}
              </span>
              <div className="test-nav-btns">
                <button
                  className="test-nav-btn"
                  onClick={handlePrev}
                  disabled={current === 0}
                  aria-label="Previous testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className="test-nav-btn"
                  onClick={handleNext}
                  disabled={current === testimonialsData.length - 1}
                  aria-label="Next testimonial"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}