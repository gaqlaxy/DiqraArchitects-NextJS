"use client";

import React, { useEffect, useState } from "react";
import Services from "@/app/components/Services";
import Footer from "@/app/components/Footer";
import CtaSection from "@/app/components/CtaSection";

import "@/app/styles/AboutPage.css";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Only apply hover functionality on desktop
    if (isMobile) return;

    const teamMembers = document.querySelectorAll(".team-member");
    const teamImages = document.querySelectorAll(".team-image");

    teamMembers.forEach((member) => {
      member.addEventListener("mouseenter", () => {
        const memberData = member.getAttribute("data-member");

        // Remove active class
        teamMembers.forEach((m) => m.classList.remove("active"));
        teamImages.forEach((img) => img.classList.remove("active"));

        // Add active class to current member and image
        member.classList.add("active");
        const correspondingImage = document.querySelector(
          `.team-image[data-member="${memberData}"]`
        );
        if (correspondingImage) correspondingImage.classList.add("active");
      });
    });
  }, [isMobile]);

  return (
    <main>
      {/* about-page Hero Section */}
      <section
        className="about-page-hero"
        role="banner"
        aria-label="about-page us hero section"
      >
        <div className="about-page-hero-content">
          <div className="about-page-hero-text">
            <h1 className="about-page-title">DIQRA</h1>
          </div>
          <div className="about-page-hero-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop"
              alt="DIQRA Architects Studio"
            />
          </div>
        </div>
      </section>

      {/* about-page Content Section */}
      <section className="about-page-content">
        <div className="about-page-section">
          <div className="about-page-section-content">
            <p>
              At DIQRA, we believe in collaboration—within our studio, with our
              clients, and with every partner involved. This shared process
              allows us to create architecture that blends your vision with our
              craft.
            </p>
          </div>
        </div>
      </section>

      {/* Two Column Image Section */}
      <section className="about-page-content">
        <div className="second-about-page">
          <div className="leftabout-page">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=800&fit=crop"
              alt="Architectural detail"
            />
          </div>
          <div className="rightabout-page">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=700&fit=crop"
              alt="Interior design space"
            />
            <p className="about-page-second-section-content">
              We see architecture as an expression of the people who live and
              interact within a space. Our focus is to design environments that
              are beautiful, functional, and deeply meaningful. By understanding
              your needs and aspirations, we work closely with you to transform
              ideas into enduring spaces.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <Services />

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <h1 className="team-title">Meet the Team</h1>
          <div className="team-content">
            <div className="team-left">
              <div className="team-members">
                <div
                  className={`team-member ${!isMobile ? "active" : ""}`}
                  data-member="naveen"
                >
                  <h3 className="member-name">Naveen</h3>
                  <p className="member-role">Co-Founder & CEO</p>
                  <p className="member-description">
                    With over 15 years of experience in sustainable design,
                    Naveen leads our residential and commercial projects with a
                    focus on environmental responsibility and innovative
                    solutions.
                  </p>
                  <div className="team-member-image">
                    <img
                      src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                      alt="Naveen"
                    />
                  </div>
                </div>

                <div className="team-member" data-member="jafar">
                  <h3 className="member-name">Jafar Sathik</h3>
                  <p className="member-role">
                    Co-Founder & Principal Architect
                  </p>
                  <p className="member-description">
                    Jafar brings a unique perspective to interior design and
                    spatial planning, combining modern aesthetics with
                    functional excellence to create inspiring environments.
                  </p>
                  <div className="team-member-image">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1664300982961-f57190dca362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                      alt="Jafar Sathik"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="team-right">
              <div className="team-image-container">
                <img
                  src="https://images.unsplash.com/photo-1581094480465-4e6c25fb4a52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Naveen"
                  className="team-image active"
                  data-member="naveen"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1664300982961-f57190dca362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                  alt="Jafar Sathik"
                  className="team-image"
                  data-member="jafar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </main>
  );
}
