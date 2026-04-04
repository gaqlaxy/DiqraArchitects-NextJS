"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Head from "next/head";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { servicesData } from "@/app/data/servicesData";
import "@/app/styles/ServiceDetailPage.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────────────────────────────────────────────────────────
   SEO — JSON-LD Helper (Service + FAQ schema)
   Improves chances of rich snippets in Google Search
───────────────────────────────────────────────────────────── */
const ServiceSchema = ({ service, slug, faqs = [] }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription || service.subtitle,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Diqra Architects",
      "url": "https://www.diqraarchitects.com",
      "telephone": "+917871772428",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No. 534/2, 19th Street, Periyar Nagar, Urapakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "603202",
        "addressCountry": "IN"
      }
    },
    "areaServed": ["Chennai", "Tamil Nadu", "Lahore"],
    "serviceType": service.title,
    "url": `https://www.diqraarchitects.com/services/${slug}`
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.diqraarchitects.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.diqraarchitects.com/services" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.diqraarchitects.com/services/${slug}` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

/* ─────────────────────────────────────────────────────────────
   FAQ Accordion Item
───────────────────────────────────────────────────────────── */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className={`sd-faq-item${open ? " open" : ""}`}>
      <button
        className="sd-faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <em className="sd-faq-icon" aria-hidden>+</em>
      </button>
      {/* Visible to search crawlers even when collapsed via CSS */}
      <div className="sd-faq-answer" aria-hidden={!open}>
        {a}
      </div>
    </li>
  );
};

// Internal data block removed. Service data is now imported from @/app/data/servicesData.js



/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */
const ServiceDetailPage = ({
  customData = {},
  service = "service",
  slug = "service",
  relatedServices = [],
  projectsData = [],
  faqs = [],
}) => {
  const containerRef = useRef(null);
  
  // Resolve current service data: prioritize customData, then lookup by service or slug
  const lookupKey = service !== "service" ? service : (slug !== "service" ? slug : null);
  const currentService = (customData && Object.keys(customData).length > 0) 
    ? customData 
    : (lookupKey ? (servicesData[lookupKey] || {}) : {});

  /* ── Default fallbacks ── */
  const _relatedServices = (currentService.relatedServices && currentService.relatedServices.length > 0)
    ? currentService.relatedServices
    : (relatedServices.length > 0 ? relatedServices : [
        { slug: "exterior-design", title: "Exterior Design", hint: "Bold façades · Chennai" },
        { slug: "design-planning", title: "Design & Planning", hint: "Concept to blueprint" },
        { slug: "consultation", title: "Consultation", hint: "Expert guidance" },
      ]);


  const _projectsData = projectsData.length > 0 ? projectsData : [
    { id: 1, slug: "mohans-house", title: "Mohan's House", cat: "Residential", img: "https://www.diqraarchitects.com/HeroMain.webp" },
    { id: 2, slug: "esake-residence", title: "Mr. Esake Residence", cat: "Residential", img: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=1200" },
    { id: 3, slug: "manikandan-residence", title: "Manikandan Residence", cat: "Residential", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200" },
    { id: 4, slug: "ranga-residence", title: "Mr. Ranga Residence", cat: "Residential", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200" },
    { id: 5, slug: "apex-hq", title: "Apex HQ", cat: "Commercial", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200" },
  ];

  const _faqs = faqs.length > 0 ? faqs : [
    {
      q: `What does Diqra Architects offer for ${currentService.title || "this service"} in Chennai?`,
      a: `Diqra Architects provides end-to-end ${currentService.title || "architectural"} services in Chennai — from initial concept design and 3D visualisation to regulatory approval and on-site supervision. We operate across Urapakkam, Periyar Nagar, and all of Greater Chennai.`,
    },
    {
      q: "How long does the design process typically take?",
      a: "Project timelines vary by scope and complexity. A residential design typically spans 4–8 weeks from brief to approval-ready drawings. We maintain transparency at every stage and provide milestone-based updates.",
    },
    {
      q: "Do you handle CMDA / DTCP building approvals?",
      a: "Yes. Our team has extensive experience preparing documentation and liaising with CMDA and DTCP authorities in Tamil Nadu for residential and commercial projects. We handle the full regulatory process on your behalf.",
    },
    {
      q: "Can I see similar completed projects before commissioning?",
      a: "Absolutely. We maintain a comprehensive portfolio of completed projects across Chennai and Tamil Nadu. You can view selected works on our Projects page or schedule a studio consultation to review full project documentation.",
    },
  ];

  /* ── GSAP Animations ── */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(".sd-hero-eyebrow", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 });
      gsap.fromTo(".sd-hero-title", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.45 });
      gsap.fromTo(".sd-hero-tagline", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.7 });
      gsap.fromTo(".sd-hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.9 });
      gsap.fromTo(".sd-hero-index", { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 1.2 });

      // Stats
      gsap.fromTo(".sd-stat-metric", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".sd-stats-band", start: "top 85%" },
      });

      // Overview
      gsap.fromTo(".sd-overview-heading, .sd-overview-body", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: ".sd-overview-section", start: "top 75%" },
      });

      // Feature rows
      containerRef.current?.querySelectorAll(".sd-feature-row").forEach((row, i) => {
        const visual = row.querySelector(".sd-feature-visual");
        const content = row.querySelector(".sd-feature-content");
        const isEven = i % 2 === 0;

        if (visual) gsap.fromTo(visual, { scale: 1.08, opacity: 0 }, {
          scale: 1, opacity: 1, duration: 1.2, ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 72%" },
        });
        if (content) gsap.fromTo(content, { x: isEven ? 40 : -40, opacity: 0 }, {
          x: 0, opacity: 1, duration: 1, ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 72%" },
        });
      });

      // Process steps
      gsap.fromTo(".sd-step-row", { x: 24, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: ".sd-process-section", start: "top 65%" },
      });

      // Masonry
      gsap.fromTo(".sd-masonry-item", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: ".sd-masonry-grid", start: "top 75%" },
      });

      // FAQ
      gsap.fromTo(".sd-faq-item", { x: 20, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".sd-faq-section", start: "top 75%" },
      });

    }, containerRef);

    return () => ctx.revert();
  }, [currentService]);

  /* ── Render ── */
  return (
    <>
      {/* ── SEO Structured Data ── */}
      <ServiceSchema service={currentService} slug={slug} faqs={_faqs} />

      <div ref={containerRef} className="sd-master-container">
        <Navbar />

        {/* ════════════════════════════════════════════
            SPLIT HERO
        ════════════════════════════════════════════ */}
        <section className="sd-hero" aria-label={`${currentService.title} – Diqra Architects`}>
          {/* Visual column */}
          <div className="sd-hero-visual">
            {currentService.hero ? (
              <img
                src={currentService.hero}
                alt={`${currentService.title} – Diqra Architects, Chennai`}
                className="sd-hero-img"
                loading="eager"
                fetchpriority="high"
              />
            ) : (
              <div className="sd-feature-placeholder">Hero Image</div>
            )}
            <div className="sd-hero-scroll-hint" aria-hidden="true">Scroll</div>
          </div>

          {/* Text column */}
          <div className="sd-hero-panel">
            <div className="sd-hero-index" aria-hidden="true">01</div>

            <div className="sd-hero-eyebrow">
              {/* Breadcrumb — semantic nav for SEO */}
              <nav aria-label="Breadcrumb" className="sd-hero-breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">›</span>
                <Link href="/services">Services</Link>
                <span aria-hidden="true">›</span>
                <span aria-current="page">{currentService.title}</span>
              </nav>
              <div className="sd-label">Architecture &amp; Design · Chennai</div>
            </div>

            <h1 className="sd-hero-title">
              {currentService.titleLine1 || currentService.title}
              {currentService.titleLine2 && (
                <><br /><em>{currentService.titleLine2}</em></>
              )}
            </h1>

            <p className="sd-hero-tagline">{currentService.subtitle}</p>

            <Link href="/contact" className="sd-hero-cta">
              Discuss Your Project
            </Link>
          </div>
        </section>

        {/* ════════════════════════════════════════════
            STATS BAND
        ════════════════════════════════════════════ */}
        <div className="sd-stats-band" aria-label="Key Statistics">
          <div className="sd-stats-tagline">
            {currentService.statsQuote || "Transforming abstract ideas into buildable blueprints since 2009."}
          </div>
          {(currentService.stats || []).map((stat, i) => (
            <div key={i} className="sd-stat-metric">
              <div className="sd-stat-value">{stat.value}</div>
              <div className="sd-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════
            SEO-RICH OVERVIEW (keyword-dense copy block)
        ════════════════════════════════════════════ */}
        {(currentService.overview || currentService.overviewHeading) && (
          <section className="sd-overview-section" aria-labelledby="sd-overview-heading">
            <div className="sd-overview-left">
              <div className="sd-overview-sticky">
                <div className="sd-overview-label sd-label">Overview</div>
                {currentService.overviewAside && (
                  <div
                    className="sd-overview-aside"
                    dangerouslySetInnerHTML={{ __html: currentService.overviewAside }}
                  />
                )}
              </div>
            </div>
            <div className="sd-overview-right">
              {currentService.overviewHeading && (
                <h2
                  id="sd-overview-heading"
                  className="sd-overview-heading"
                  dangerouslySetInnerHTML={{ __html: currentService.overviewHeading }}
                />
              )}
              {currentService.overview && (
                <div className="sd-overview-body">
                  {currentService.overview.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ════════════════════════════════════════════
            FEATURE ROWS — Key Expertise
        ════════════════════════════════════════════ */}
        {currentService.features && currentService.features.length > 0 && (
          <section className="sd-features-section" aria-labelledby="sd-features-heading">
            <div className="sd-features-header">
              <h2 id="sd-features-heading" className="sd-label" style={{ fontSize: "11px" }}>
                Key Expertise
              </h2>
              <span className="sd-label">
                {String(currentService.features.length).padStart(2, "0")} capabilities
              </span>
            </div>

            {currentService.features.map((feature, i) => (
              <article
                key={i}
                className={`sd-feature-row${i % 2 !== 0 ? " sd-reverse" : ""}`}
              >
                <div className="sd-feature-visual" aria-hidden="true">
                  {feature.img ? (
                    <img
                      src={feature.img}
                      alt={`${feature.title} – Diqra Architects`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="sd-feature-placeholder">{feature.title}</div>
                  )}
                </div>
                <div className="sd-feature-content">
                  <div className="sd-feature-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="sd-feature-title">{feature.title}</h3>
                  <p className="sd-feature-desc">{feature.desc}</p>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* ════════════════════════════════════════════
            PROCESS — Vertical Stepper
        ════════════════════════════════════════════ */}
        {currentService.process && currentService.process.length > 0 && (
          <section className="sd-process-section" aria-labelledby="sd-process-heading">
            <div className="sd-process-left">
              <div className="sd-process-label sd-label">Methodology</div>
              <h2 id="sd-process-heading" className="sd-process-main-title">
                Our<br /><em>Process</em>
              </h2>
              <p className="sd-process-sub">
                A rigorous design process refined over 15 years and 100+ projects across Tamil Nadu.
              </p>
            </div>

            <ol className="sd-process-right" style={{ listStyle: "none" }}>
              {currentService.process.map((step, i) => (
                <li key={i} className="sd-step-row">
                  <div className="sd-step-num" aria-label={`Step ${i + 1}`}>
                    {step.step || String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="sd-step-content">
                    <h3 className="sd-step-title">{step.title}</h3>
                    <p className="sd-step-desc">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ════════════════════════════════════════════
            MASONRY PORTFOLIO
        ════════════════════════════════════════════ */}
        <section className="sd-masonry-section" aria-labelledby="sd-portfolio-heading">
          <div className="sd-masonry-header">
            <div>
              <div className="sd-label" style={{ marginBottom: "12px" }}>Portfolio</div>
              <h2 id="sd-portfolio-heading" className="sd-masonry-title">Recent Projects</h2>
            </div>
            <Link href="/works" className="sd-view-all">View All</Link>
          </div>

          <div className="sd-masonry-grid">
            {_projectsData.slice(0, 5).map((project, i) => (
              <Link
                href={`/project/${project.slug}`}
                key={project.id}
                className={`sd-masonry-item sd-item-${i + 1}`}
                aria-label={`View ${project.title} – ${project.cat} project`}
              >
                <img
                  src={project.img}
                  alt={`${project.title} – ${project.cat} architecture by Diqra, Chennai`}
                  className="sd-masonry-img"
                  loading="lazy"
                />
                <div className="sd-masonry-overlay" aria-hidden="true">
                  <div className="sd-masonry-cat">{project.cat}</div>
                  <div className="sd-masonry-name">{project.title}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            FAQ — Rich Snippet target
        ════════════════════════════════════════════ */}
        <section className="sd-faq-section" aria-labelledby="sd-faq-heading">
          <div className="sd-faq-left">
            <div className="sd-faq-label sd-label">FAQ</div>
            <h2 id="sd-faq-heading" className="sd-faq-heading">
              Common<br />Questions
            </h2>
          </div>

          <ul className="sd-faq-list" aria-label="Frequently asked questions">
            {_faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </ul>
        </section>

        {/* ════════════════════════════════════════════
            RELATED SERVICES
        ════════════════════════════════════════════ */}
        <section className="sd-related-section" aria-labelledby="sd-related-heading">
          <div className="sd-related-header">
            <div>
              <div className="sd-label" style={{ marginBottom: "12px" }}>Explore More</div>
              <h2 id="sd-related-heading" className="sd-related-title">Related Services</h2>
            </div>
          </div>

          <nav aria-label="Related services" className="sd-related-cards">
            {_relatedServices.map((rel, i) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="sd-related-card"
              >
                <div className="sd-card-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="sd-card-title">{rel.title}</div>
                <div className="sd-card-hint">{rel.hint}</div>
                <div className="sd-card-arrow" aria-hidden="true">→</div>
              </Link>
            ))}
          </nav>
        </section>

        <CtaSection />
        <Footer />
      </div>
    </>
  );
};

export default ServiceDetailPage;
