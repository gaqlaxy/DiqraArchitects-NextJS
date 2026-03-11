"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import { Instagram, Facebook } from "lucide-react";
import "@/app/styles/ContactPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Title
      gsap.from(".cp-reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });

      // Line drawing animations
      gsap.utils.toArray(".cp-divider-line").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        });
      });

      // Image Parallax
      gsap.to(".cp-parallax-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".cp-image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = document.querySelector(".cp-submit-text");
    const originalText = btn.innerText;
    btn.innerText = "Sending...";

    setTimeout(() => {
      alert("Blueprint received. We will be in touch.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      btn.innerText = originalText;
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // GSAP Powered FAQ Toggle
  const toggleFAQ = (index) => {
    if (activeFAQ === index) {
      gsap.to(`#faq-ans-${index}`, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(`#faq-icon-${index}`, { rotation: 0, duration: 0.4 });
      setActiveFAQ(null);
    } else {
      if (activeFAQ !== null) {
        gsap.to(`#faq-ans-${activeFAQ}`, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(`#faq-icon-${activeFAQ}`, { rotation: 0, duration: 0.4 });
      }
      setActiveFAQ(index);
      setTimeout(() => {
        gsap.fromTo(
          `#faq-ans-${index}`,
          { height: 0 },
          { height: "auto", duration: 0.4, ease: "power2.inOut" }
        );
        gsap.to(`#faq-icon-${index}`, { rotation: 45, duration: 0.4 });
      }, 10);
    }
  };

  const faqs = [
    {
      q: "Scope of Services",
      a: "We offer comprehensive design services including interior design, architecture consultation, space planning, 3D visualization, and project management.",
    },
    {
      q: "Project Timeline",
      a: "Residential projects typically take 8-12 weeks, while commercial ventures range from 3-6 months depending on complexity.",
    },
    {
      q: "Client Types",
      a: "We work with visionaries. From private homeowners to commercial developers and hospitality groups.",
    },
    {
      q: "Portfolio Access",
      a: "Our private case studies are available upon request during the initial consultation.",
    },
  ];

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <>
      <div ref={containerRef} className="cp-container-arch">
        {/* HEADER */}
        <header className="cp-page-header">
          <div className="cp-title-wrapper">
            <h1 className="cp-reveal-text">Let's build</h1>
          </div>
          <div className="cp-title-wrapper">
            <h1 className="cp-reveal-text" style={{ paddingLeft: "clamp(2rem, 5vw, 6rem)" }}>
              Something
            </h1>
          </div>
          <div className="cp-title-wrapper">
            <h1 className="cp-reveal-text">Concrete.</h1>
          </div>
        </header>

        <div className="cp-divider-line"></div>

        {/* MAIN LAYOUT */}
        <div className="cp-arch-grid">
          {/* LEFT SIDEBAR (Sticky) */}
          <aside className="cp-sticky-info">
            <div className="cp-info-group">
              <h3>Find us</h3>
              <p>No. 534/2, 19th Street</p>
              <p>Periyar Nagar, Urapakkam</p>
              <p>Tamil Nadu 603202</p>
            </div>

            <div className="cp-info-group">
              <h3>Contact</h3>
              <a href="mailto:info@diqraarchitects.com">
                info@diqraarchitects.com
              </a>
              <a href="tel:+917871772428">(+91) 7871772428</a>
            </div>

            <div className="cp-info-group">
              <h3>Hours</h3>
              <p>Mon - Fri: 09:00 - 18:00</p>
              <p>Weekend: By Appointment</p>
            </div>

            <div className="cp-info-group">
              <h3>Socials</h3>
              <div className="cp-social-row">
                <Instagram />
                <Facebook />
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT (Form) */}
          <section className="cp-form-section">
            <p className="cp-form-intro cp-reveal-text">
              We approach every inquiry with the same precision as our
              blueprints. Tell us about your vision.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="cp-input-grid">
                <div className="cp-form-group">
                  <label>01. First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="cp-form-group">
                  <label>02. Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="cp-input-grid">
                <div className="cp-form-group">
                  <label>03. Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="cp-form-group">
                  <label>04. Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div className="cp-form-group">
                <label>05. Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the space, timeline, and vision..."
                  rows={4}
                  required
                />
              </div>

              <div className="cp-submit-wrapper">
                <button type="submit" className="cp-arch-btn">
                  <span className="cp-submit-text">Send Proposal</span>
                </button>
              </div>
            </form>

            {/* PARALLAX IMAGE BREAK */}
            <div className="cp-image-container">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                className="cp-parallax-img"
                alt="Architecture Detail"
              />
            </div>

            {/* FAQ */}
            <div className="cp-faq-container">
              <h3
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--color-muted, #888)",
                  marginBottom: "40px",
                }}
              >
                Common Inquiries
              </h3>

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="cp-faq-item"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="cp-faq-question">
                    <span className="cp-faq-q-text">{faq.q}</span>
                    <span
                      id={`faq-icon-${index}`}
                      style={{ fontSize: "24px", display: "inline-block", fontWeight: 300 }}
                    >
                      +
                    </span>
                  </div>
                  <div id={`faq-ans-${index}`} className="cp-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
