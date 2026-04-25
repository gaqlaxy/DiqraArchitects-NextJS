"use client";

import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { Cormorant_Garamond, DM_Mono } from "next/font/google";
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";

import { servicesData } from "@/app/data/servicesData";
import projectsSource from "@/app/data/projects-data.json";
import "@/app/styles/ServiceDetailPage.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sd-serif",
});

const serviceMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
  variable: "--font-sd-mono",
});

const EMPTY_ARRAY = [];
const EMPTY_OBJECT = {};
const allowedInlineTagPattern = /(<\/?(?:em|strong)>)/g;
const serializeJsonLd = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

const renderInlineMarkup = (value) => {
  const tokens = String(value || "").split(allowedInlineTagPattern);
  const stack = [{ tag: null, children: [] }];

  tokens.forEach((token) => {
    if (!token) return;

    const openMatch = token.match(/^<(em|strong)>$/);
    if (openMatch) {
      stack.push({ tag: openMatch[1], children: [] });
      return;
    }

    const closeMatch = token.match(/^<\/(em|strong)>$/);
    if (closeMatch && stack.length > 1) {
      const node = stack.pop();
      const Element = node.tag;
      stack[stack.length - 1].children.push(
        <Element key={`${node.tag}-${stack[stack.length - 1].children.length}`}>
          {node.children}
        </Element>,
      );
      return;
    }

    stack[stack.length - 1].children.push(token);
  });

  while (stack.length > 1) {
    const node = stack.pop();
    stack[stack.length - 1].children.push(...node.children);
  }

  return stack[0].children;
};

const renderOverviewAside = (value) =>
  String(value || "")
    .split("\n")
    .flatMap((line) => {
      const trimmed = line.trim();
      return trimmed ? [trimmed] : [];
    })
    .map((line, index, lines) => {
      const strongMatch = line.match(/^<strong>(.*?)<\/strong>$/);
      if (strongMatch) {
        return (
          <strong key={`aside-heading-${strongMatch[1]}`}>
            {strongMatch[1]}
          </strong>
        );
      }

      return (
        <React.Fragment key={`aside-copy-${line}`}>
          {renderInlineMarkup(line)}
          {index < lines.length - 1 ? <br /> : null}
        </React.Fragment>
      );
    });

const normalizeProject = (project) => ({
  id: project.id || project.slug,
  slug: project.slug,
  title: project.title,
  cat: project.cat || project.category || project.projectType || "Project",
  img: project.img || project.thumbnail || project.images?.[0],
});

const knownProjectSlugs = new Set(
  (projectsSource.projects || []).map((project) => project.slug),
);

const projectFallbacks = (projectsSource.projects || [])
  .map(normalizeProject)
  .filter((project) => project.slug && project.title && project.img);

/* ─────────────────────────────────────────────────────────────
   SEO — JSON-LD Helper (Service + FAQ schema)
   Improves chances of rich snippets in Google Search
───────────────────────────────────────────────────────────── */
const ServiceSchema = ({ service, slug, faqs = EMPTY_ARRAY }) => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription || service.subtitle,
    provider: {
      "@type": "LocalBusiness",
      name: "Diqra Architects",
      url: "https://diqraarchitects.com",
      telephone: "+917871772428",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 534/2, 19th Street, Periyar Nagar, Urapakkam",
        addressLocality: "Chennai",
        addressRegion: "Tamil Nadu",
        postalCode: "603202",
        addressCountry: "IN",
      },
    },
    areaServed: ["Chennai", "Tamil Nadu"],
    serviceType: service.title,
    url: `https://diqraarchitects.com/services/${slug}`,
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://diqraarchitects.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://diqraarchitects.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `https://diqraarchitects.com/services/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
      >
        {serializeJsonLd(serviceSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json" suppressHydrationWarning>
          {serializeJsonLd(faqSchema)}
        </script>
      )}
      <script
        type="application/ld+json"
        suppressHydrationWarning
      >
        {serializeJsonLd(breadcrumbSchema)}
      </script>
    </>
  );
};

/* ─────────────────────────────────────────────────────────────
   FAQ Accordion Item
───────────────────────────────────────────────────────────── */
const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  const answerId = useId();
  const questionId = useId();

  return (
    <li className={`sd-faq-item${open ? " open" : ""}`}>
      <button
        id={questionId}
        className="sd-faq-question"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={answerId}
      >
        <span>{q}</span>
        <em className="sd-faq-icon" aria-hidden>
          +
        </em>
      </button>
      {/* Visible to search crawlers even when collapsed via CSS */}
      <div
        id={answerId}
        className="sd-faq-answer"
        role="region"
        aria-labelledby={questionId}
      >
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
  customData = EMPTY_OBJECT,
  service = "service",
  slug = "service",
  relatedServices = EMPTY_ARRAY,
  projectsData = EMPTY_ARRAY,
  faqs = EMPTY_ARRAY,
}) => {
  const containerRef = useRef(null);

  // Resolve current service data: prioritize customData, then lookup by service or slug
  const lookupKey =
    service !== "service" ? service : slug !== "service" ? slug : null;
  const currentService =
    customData && Object.keys(customData).length > 0
      ? customData
      : lookupKey
        ? servicesData[lookupKey] || {}
        : {};

  /* ── Default fallbacks ── */
  const _relatedServices =
    currentService.relatedServices && currentService.relatedServices.length > 0
      ? currentService.relatedServices
      : relatedServices.length > 0
        ? relatedServices
        : [
            {
              slug: "exterior-design",
              title: "Exterior Design",
              hint: "Bold façades · Chennai",
            },
            {
              slug: "design-planning",
              title: "Design & Planning",
              hint: "Concept to blueprint",
            },
            {
              slug: "consultation",
              title: "Consultation",
              hint: "Expert guidance",
            },
          ];

  const suppliedProjects = projectsData
    .map(normalizeProject)
    .filter(
      (project) =>
        project.slug &&
        project.title &&
        project.img &&
        knownProjectSlugs.has(project.slug),
    );
  const _projectsData =
    suppliedProjects.length > 0 ? suppliedProjects : projectFallbacks;

  const _faqs =
    faqs.length > 0
      ? faqs
      : [
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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        ".sd-hero-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.3 },
      );
      gsap.fromTo(
        ".sd-hero-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.45 },
      );
      gsap.fromTo(
        ".sd-hero-tagline",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.7 },
      );
      gsap.fromTo(
        ".sd-hero-cta",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.9 },
      );
      gsap.fromTo(
        ".sd-hero-index",
        { opacity: 0 },
        { opacity: 1, duration: 1.5, delay: 1.2 },
      );

      // Stats
      gsap.fromTo(
        ".sd-stat-metric",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sd-stats-band", start: "top 85%" },
        },
      );

      // Overview
      gsap.fromTo(
        ".sd-overview-heading, .sd-overview-body",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sd-overview-section", start: "top 75%" },
        },
      );

      // Feature rows
      containerRef.current
        ?.querySelectorAll(".sd-feature-row")
        .forEach((row, i) => {
          const visual = row.querySelector(".sd-feature-visual");
          const content = row.querySelector(".sd-feature-content");
          const isEven = i % 2 === 0;

          if (visual)
            gsap.fromTo(
              visual,
              { scale: 1.08, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: { trigger: row, start: "top 72%" },
              },
            );
          if (content)
            gsap.fromTo(
              content,
              { x: isEven ? 40 : -40, opacity: 0 },
              {
                x: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: { trigger: row, start: "top 72%" },
              },
            );
        });

      // Process steps
      gsap.fromTo(
        ".sd-step-row",
        { x: 24, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sd-process-section", start: "top 65%" },
        },
      );

      // Masonry
      gsap.fromTo(
        ".sd-masonry-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sd-masonry-grid", start: "top 75%" },
        },
      );

      // FAQ
      gsap.fromTo(
        ".sd-faq-item",
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".sd-faq-section", start: "top 75%" },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [currentService]);

  /* ── Render ── */
  return (
    <>
      {/* ── SEO Structured Data ── */}
      <ServiceSchema service={currentService} slug={slug} faqs={_faqs} />

      <div
        ref={containerRef}
        className={`sd-master-container ${serviceSerif.variable} ${serviceMono.variable}`}
      >
        {/* ════════════════════════════════════════════
            SPLIT HERO
        ════════════════════════════════════════════ */}
        <section
          className="sd-hero"
          aria-label={`${currentService.title} – Diqra Architects`}
        >
          {/* Visual column */}
          <div className="sd-hero-visual">
            {currentService.hero ? (
              <Image
                src={currentService.hero}
                alt={`${currentService.title} – Diqra Architects, Chennai`}
                className="sd-hero-img"
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            ) : (
              <div className="sd-feature-placeholder">Hero Image</div>
            )}
            <div className="sd-hero-scroll-hint" aria-hidden="true">
              Scroll
            </div>
          </div>

          {/* Text column */}
          <div className="sd-hero-panel">
            <div className="sd-hero-index" aria-hidden="true">
              01
            </div>

            <div className="sd-hero-eyebrow">
              {/* Breadcrumb — semantic nav for SEO */}
              <nav aria-label="Breadcrumb" className="sd-hero-breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">›</span>
                <Link href="/services">Services</Link>
                <span aria-hidden="true">›</span>
                <span aria-current="page">{currentService.title}</span>
              </nav>
              <div className="sd-label">
                Architecture &amp; Design · Chennai
              </div>
            </div>

            <h1 className="sd-hero-title">
              {currentService.titleLine1 || currentService.title}
              {currentService.titleLine2 && (
                <>
                  <br />
                  <em>{currentService.titleLine2}</em>
                </>
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
            {currentService.statsQuote ||
              "Transforming abstract ideas into buildable blueprints since 2009."}
          </div>
          {(currentService.stats || []).map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className="sd-stat-metric"
            >
              <div className="sd-stat-value">{stat.value}</div>
              <div className="sd-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ════════════════════════════════════════════
            SEO-RICH OVERVIEW (keyword-dense copy block)
        ════════════════════════════════════════════ */}
        {(currentService.overview || currentService.overviewHeading) && (
          <section
            className="sd-overview-section"
            aria-labelledby="sd-overview-heading"
          >
            <div className="sd-overview-left">
              <div className="sd-overview-sticky">
                <div className="sd-overview-label sd-label">Overview</div>
                {currentService.overviewAside && (
                  <div className="sd-overview-aside">
                    {renderOverviewAside(currentService.overviewAside)}
                  </div>
                )}
              </div>
            </div>
            <div className="sd-overview-right">
              {currentService.overviewHeading && (
                <h2 id="sd-overview-heading" className="sd-overview-heading">
                  {renderInlineMarkup(currentService.overviewHeading)}
                </h2>
              )}
              {currentService.overview && (
                <div className="sd-overview-body">
                  {currentService.overview.split("\n\n").map((para) => (
                    <p key={para}>{para}</p>
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
          <section
            className="sd-features-section"
            aria-labelledby="sd-features-heading"
          >
            <div className="sd-features-header">
              <h2
                id="sd-features-heading"
                className="sd-label sd-features-heading-label"
              >
                Key Expertise
              </h2>
              <span className="sd-label">
                {String(currentService.features.length).padStart(2, "0")}{" "}
                capabilities
              </span>
            </div>

            {currentService.features.map((feature, i) => (
              <article
                key={feature.title}
                className={`sd-feature-row${i % 2 !== 0 ? " sd-reverse" : ""}`}
              >
                <div className="sd-feature-visual" aria-hidden="true">
                  {feature.img ? (
                    <Image
                      src={feature.img}
                      alt={`${feature.title} – Diqra Architects`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="sd-feature-placeholder">
                      {feature.title}
                    </div>
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
          <section
            className="sd-process-section"
            aria-labelledby="sd-process-heading"
          >
            <div className="sd-process-left">
              <div className="sd-process-label sd-label">Methodology</div>
              <h2 id="sd-process-heading" className="sd-process-main-title">
                Our
                <br />
                <em>Process</em>
              </h2>
              <p className="sd-process-sub">
                A rigorous design process refined over 15 years and 100+
                projects across Tamil Nadu.
              </p>
            </div>

            <ol className="sd-process-right" style={{ listStyle: "none" }}>
              {currentService.process.map((step, i) => (
                <li key={`${step.step || i}-${step.title}`} className="sd-step-row">
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
        <section
          className="sd-masonry-section"
          aria-labelledby="sd-portfolio-heading"
        >
          <div className="sd-masonry-header">
            <div>
              <div className="sd-label" style={{ marginBottom: "12px" }}>
                Portfolio
              </div>
              <h2 id="sd-portfolio-heading" className="sd-masonry-title">
                Recent Projects
              </h2>
            </div>
            <Link href="/works" className="sd-view-all">
              View All
            </Link>
          </div>

          <div className="sd-masonry-grid">
            {_projectsData.slice(0, 5).map((project, i) => (
              <Link
                href={`/project/${project.slug}`}
                key={project.id}
                className={`sd-masonry-item sd-item-${i + 1}`}
                aria-label={`View ${project.title} – ${project.cat} project`}
              >
                <Image
                  src={project.img}
                  alt={`${project.title} – ${project.cat} architecture by Diqra, Chennai`}
                  fill
                  className="sd-masonry-img"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              Common
              <br />
              Questions
            </h2>
          </div>

          <ul className="sd-faq-list" aria-label="Frequently asked questions">
            {_faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </ul>
        </section>

        {/* ════════════════════════════════════════════
            RELATED SERVICES
        ════════════════════════════════════════════ */}
        <section
          className="sd-related-section"
          aria-labelledby="sd-related-heading"
        >
          <div className="sd-related-header">
            <div>
              <div className="sd-label" style={{ marginBottom: "12px" }}>
                Explore More
              </div>
              <h2 id="sd-related-heading" className="sd-related-title">
                Related Services
              </h2>
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
                <div className="sd-card-arrow" aria-hidden="true">
                  →
                </div>
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
