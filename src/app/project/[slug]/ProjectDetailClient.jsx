// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import projectsData from "@/app/data/projects-data.json";
// import Footer from "@/app/components/Footer";

// import "@/app/styles/ProjectDetail.css";

// export default function ProjectDetailClient({ slug }) {
//   const [project, setProject] = useState(null);
//   const [nextProject, setNextProject] = useState(null);
//   const [prevProject, setPrevProject] = useState(null);
//   const [scrollY, setScrollY] = useState(0);

//   const heroRef = useRef(null);

//   // Load project on mount
//   useEffect(() => {
//     const current = projectsData.projects.find((p) => p.slug === slug);

//     if (!current) return notFound();

//     setProject(current);

//     const index = projectsData.projects.findIndex((p) => p.slug === slug);
//     const nextIndex = (index + 1) % projectsData.projects.length;
//     const prevIndex =
//       (index - 1 + projectsData.projects.length) %
//       projectsData.projects.length;

//     setNextProject(projectsData.projects[nextIndex]);
//     setPrevProject(projectsData.projects[prevIndex]);

//     window.scrollTo(0, 0);
//   }, [slug]);

//   // Track scroll
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   if (!project) return <div style={{ height: "100vh" }}>Loading...</div>;

//   const parallaxOffset = scrollY * 0.6;
//   const opacity = Math.max(0, 1 - scrollY / 500);

//   return (
//     <div className="project-detail">
//       {/* HERO */}
//       <section className="project-hero" ref={heroRef}>
//         <div
//           className="hero-background"
//           style={{
//             transform: `translateY(${parallaxOffset}px) scale(1.1)`,
//             backgroundImage: `url(${project.images[0]})`,
//           }}
//         />

//         <div
//           className="hero-overlay"
//           style={{ opacity: opacity * 0.7 + 0.3 }}
//         />

//         <div className="hero-content" style={{ opacity }}>
//           <h1 className="project-title">{project.title}</h1>

//           <div className="project-meta">
//             <span className="location">{project.location}</span>
//             <span className="country">{project.category}</span>
//           </div>

//           <Link href="/works" className="back-link">
//             ← Back to Works
//           </Link>

//           <div className="scroll-indicator">
//             <span>(SCROLL TO EXPLORE)</span>
//             <div className="scroll-line" />
//           </div>
//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="project-info">
//         <div className="info-grid">
//           <div className="info-description">
//             <h2>About the Project</h2>
//             <p>{project.description}</p>

//             <div className="project-tags">
//               {project.tags.map((tag, i) => (
//                 <span key={i} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="info-details">
//             <h3>Project Details</h3>
//             <dl>
//               <dt>Year</dt> <dd>{project.year}</dd>
//               <dt>Client</dt> <dd>{project.details.client}</dd>
//               <dt>Area</dt> <dd>{project.details.area}</dd>
//               <dt>Status</dt> <dd>{project.details.status}</dd>
//               <dt>Architect</dt> <dd>{project.details.architect}</dd>
//             </dl>
//           </div>
//         </div>
//       </section>

//       {/* GALLERY */}
//       <section className="project-gallery">
//         {project.images.slice(1).map((img, i) => (
//           <div key={i} className="gallery-image">
//             <img src={img} alt={`${project.title}-image-${i + 2}`} />
//           </div>
//         ))}
//       </section>

//       {/* NEXT / PREVIOUS */}
//       <section className="navigation-projects">
//         {prevProject && (
//           <div className="nav-project prev-project">
//             <div className="nav-project-content">
//               <span className="nav-label">Previous Project</span>
//               <Link href={`/project/${prevProject.slug}`} className="nav-link">
//                 <span className="arrow-left">←</span>
//                 <h2>{prevProject.title}</h2>
//               </Link>
//             </div>

//             <div className="nav-project-image">
//               <Link href={`/project/${prevProject.slug}`}>
//                 <img src={prevProject.thumbnail} alt={prevProject.title} />
//               </Link>
//             </div>
//           </div>
//         )}

//         {nextProject && (
//           <div className="nav-project next-project">
//             <div className="nav-project-content">
//               <span className="nav-label">Next Project</span>
//               <Link href={`/project/${nextProject.slug}`} className="nav-link">
//                 <h2>{nextProject.title}</h2>
//                 <span className="arrow-right">→</span>
//               </Link>
//             </div>

//             <div className="nav-project-image">
//               <Link href={`/project/${nextProject.slug}`}>
//                 <img src={nextProject.thumbnail} alt={nextProject.title} />
//               </Link>
//             </div>
//           </div>
//         )}
//       </section>

//       <Footer />
//     </div>
//   );
// }

// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import projectsData from "@/app/data/projects-data.json";
// import Footer from "@/app/components/Footer";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import ProjectGallery from "./ProjectGallery";

// gsap.registerPlugin(ScrollTrigger);

// import "@/app/styles/ProjectDetail.css";

// export default function ProjectDetailClient({ slug }) {
//   const [scrollY, setScrollY] = useState(0);
//   const heroRef = useRef(null);

//   // Find project + neighbours synchronously from JSON
//   const projectIndex = projectsData.projects.findIndex(
//     (p) => p.slug === slug
//   );

//   if (projectIndex === -1) {
//     return (
//       <div className="project-detail project-detail--notfound">
//         <div className="project-notfound-inner">
//           <p>Project not found.</p>
//           <Link href="/works" className="back-to-works-link">
//             ← Back to Works
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const project = projectsData.projects[projectIndex];
//   const nextProject =
//     projectsData.projects[(projectIndex + 1) % projectsData.projects.length];
//   const prevProject =
//     projectsData.projects[
//       (projectIndex - 1 + projectsData.projects.length) %
//         projectsData.projects.length
//     ];

//   // Scroll-to-top on slug change
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [slug]);

//   // Track scroll for parallax
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Parallax for gallery images
// useEffect(() => {
//   if (!project) return;

//   const images = document.querySelectorAll(".gallery-split-image img");

//   images.forEach((img) => {
//     gsap.fromTo(
//       img,
//       { y: 0 },
//       {
//         y: -80, // Amount of parallax
//         ease: "none",
//         scrollTrigger: {
//           trigger: img,
//           start: "top bottom",  // when image enters view
//           end: "bottom top",    // when image leaves view
//           scrub: 1.2,           // smooth motion
//         },
//       }
//     );
//   });

//   return () => {
//     ScrollTrigger.getAll().forEach((t) => t.kill());
//   };
// }, [project]);

//   const parallaxOffset = scrollY * 0.4;
//   const opacity = Math.max(0, 1 - scrollY / 450);

//   return (
//     <div className="project-detail">
//       {/* HERO */}
//       <section className="project-hero" ref={heroRef}>
//         <div
//           className="hero-background"
//           style={{
//             transform: `translateY(${parallaxOffset}px) scale(1.03)`,
//             backgroundImage: `url(${project.images[0]})`,
//           }}
//         />

//         <div className="hero-gradient" />

//         <div className="hero-content" style={{ opacity }}>
//           <div className="hero-inner">
//             <div className="hero-left">
//               <span className="hero-label">(Project)</span>
//               <h1 className="project-title">{project.title}</h1>

//               <div className="project-meta">
//                 <span className="meta-primary">{project.location}</span>
//                 <span className="meta-divider">•</span>
//                 <span className="meta-secondary">{project.category}</span>
//                 {project.year && (
//                   <>
//                     <span className="meta-divider">•</span>
//                     <span className="meta-secondary">{project.year}</span>
//                   </>
//                 )}
//               </div>

//               <Link href="/works" className="back-link">
//                 ← Back to works
//               </Link>
//             </div>

//             <div className="hero-right">
//               <div className="hero-right-block">
//                 <span className="hero-right-label">Scope</span>
//                 <p className="hero-right-value">
//                   {project.details?.status || "Architecture & Design"}
//                 </p>
//               </div>
//               {project.details?.area && (
//                 <div className="hero-right-block">
//                   <span className="hero-right-label">Area</span>
//                   <p className="hero-right-value">{project.details.area}</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="scroll-indicator">
//             <span className="scroll-indicator-text">(SCROLL TO EXPLORE)</span>
//             <div className="scroll-line" />
//           </div>
//         </div>
//       </section>

//       {/* PROJECT INFO */}
//       <section className="project-info">
//         <div className="info-inner">
//           <div className="info-grid">
//             <div className="info-description">
//               <h2 className="section-label">About the project</h2>
//               <p className="project-description">{project.description}</p>

//               {project.tags?.length > 0 && (
//                 <div className="project-tags">
//                   {project.tags.map((tag, i) => (
//                     <span key={i} className="tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="info-details">
//               <h3 className="details-title">Project details</h3>
//               <dl className="details-grid">
//                 {project.year && (
//                   <>
//                     <dt>Year</dt>
//                     <dd>{project.year}</dd>
//                   </>
//                 )}
//                 {project.details?.client && (
//                   <>
//                     <dt>Client</dt>
//                     <dd>{project.details.client}</dd>
//                   </>
//                 )}
//                 {project.details?.area && (
//                   <>
//                     <dt>Area</dt>
//                     <dd>{project.details.area}</dd>
//                   </>
//                 )}
//                 {project.details?.status && (
//                   <>
//                     <dt>Status</dt>
//                     <dd>{project.details.status}</dd>
//                   </>
//                 )}
//                 {project.details?.architect && (
//                   <>
//                     <dt>Architect</dt>
//                     <dd>{project.details.architect}</dd>
//                   </>
//                 )}
//               </dl>
//             </div>
//           </div>
//         </div>
//       </section>

//         <ProjectGallery images={project.images} />

//       {/* PREVIOUS / NEXT */}
//       <section className="navigation-projects">
//         <div className="navigation-inner">
//           {prevProject && (
//             <article className="nav-project nav-project--prev">
//               <div className="nav-project-image">
//                 <Link href={`/project/${prevProject.slug}`}>
//                   <img
//                     src={prevProject.thumbnail}
//                     alt={prevProject.title}
//                     loading="lazy"
//                   />
//                 </Link>
//               </div>
//               <div className="nav-project-content">
//                 <span className="nav-label">Previous project</span>
//                 <Link
//                   href={`/project/${prevProject.slug}`}
//                   className="nav-link"
//                 >
//                   <span className="nav-arrow nav-arrow--left">←</span>
//                   <h2>{prevProject.title}</h2>
//                 </Link>
//               </div>
//             </article>
//           )}

//           {nextProject && (
//             <article className="nav-project nav-project--next">
//               <div className="nav-project-content">
//                 <span className="nav-label">Next project</span>
//                 <Link
//                   href={`/project/${nextProject.slug}`}
//                   className="nav-link"
//                 >
//                   <h2>{nextProject.title}</h2>
//                   <span className="nav-arrow nav-arrow--right">→</span>
//                 </Link>
//               </div>
//               <div className="nav-project-image">
//                 <Link href={`/project/${nextProject.slug}`}>
//                   <img
//                     src={nextProject.thumbnail}
//                     alt={nextProject.title}
//                     loading="lazy"
//                   />
//                 </Link>
//               </div>
//             </article>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

"use client";

import React, { useLayoutEffect, useEffect, useRef } from "react";
import Link from "next/link";
import projectsData from "@/app/data/projects-data.json";
import Footer from "@/app/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ProjectGallery from "./ProjectGallery"; // We will incorporate images manually for control, or use this if it fits
import "@/app/styles/ProjectDetail.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectDetailClient({ slug }) {
  const containerRef = useRef(null);
  const lenisRef = useRef(null);

  // --- DATA ---
  const projectIndex = projectsData.projects.findIndex((p) => p.slug === slug);
  const project = projectsData.projects[projectIndex];

  const nextProject =
    projectIndex !== -1
      ? projectsData.projects[(projectIndex + 1) % projectsData.projects.length]
      : null;

  // --- SMOOTH SCROLL ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      smooth: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // --- ANIMATIONS ---
  useLayoutEffect(() => {
    if (!project) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. OPENING SEQUENCE
      // Title lines slide up
      tl.from(".title-line span", {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1,
      });

      // Meta info fades in
      tl.from(
        ".meta-row",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Hero Image Unmask (Clip path animation)
      tl.fromTo(
        ".hero-img-wrapper",
        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.4,
          ease: "power4.inOut",
        },
        "-=1.0"
      );

      // Scale the image slightly inside the wrapper
      tl.from(
        ".hero-img",
        { scale: 1.3, duration: 1.8, ease: "power2.out" },
        "-=1.4"
      );

      // 2. SCROLL ANIMATIONS (IMAGES)
      // Every image in the content flow gets a parallax + reveal
      const contentImages = gsap.utils.toArray(".content-image-wrapper");
      contentImages.forEach((wrapper) => {
        const img = wrapper.querySelector("img");

        // Reveal (Fade + Slide)
        gsap.fromTo(
          wrapper,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 90%",
            },
          }
        );

        // Internal Parallax
        gsap.fromTo(
          img,
          { yPercent: -15, scale: 1.1 },
          {
            yPercent: 15,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // 3. NEXT PROJECT HOVER REVEAL
      // Keep footer simple, animate text strongly
      gsap.from(".next-project-section", {
        yPercent: 50,
        opacity: 0,
        scrollTrigger: {
          trigger: ".next-project-section",
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [project]);

  // Reset scroll on navigation
  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [slug]);

  if (projectIndex === -1) return null;

  return (
    <div ref={containerRef} className="minimal-project-page">
      {/* HEADER SECTION */}
      <header className="project-header">
        <div className="header-top">
          <Link href="/works" className="back-btn">
            &larr; Index
          </Link>
          <span className="header-year">{project.year}</span>
        </div>

        <h1 className="project-title">
          {/* Split title for animation logic if needed, or keep simple block */}
          <div className="title-line">
            <span>{project.title}</span>
          </div>
        </h1>

        <div className="header-meta">
          <div className="meta-row">
            <span className="meta-label">Location</span>
            <span className="meta-value">{project.location}</span>
          </div>
          <div className="meta-row">
            <span className="meta-label">Category</span>
            <span className="meta-value">{project.category}</span>
          </div>
          {project.details?.client && (
            <div className="meta-row">
              <span className="meta-label">Client</span>
              <span className="meta-value">{project.details.client}</span>
            </div>
          )}
        </div>
      </header>

      {/* HERO IMAGE */}
      <div className="hero-section">
        <div className="hero-img-wrapper">
          <img
            src={project.images[0]}
            alt={project.title}
            className="hero-img"
            data-speed="0.5"
          />
        </div>
      </div>

      {/* CONTENT GRID (Sticky Sidebar) */}
      <section className="content-grid">
        {/* LEFT: Sticky Description */}
        <aside className="content-sidebar">
          <div className="sidebar-sticky-inner">
            <h2 className="sidebar-label">Overview</h2>
            <div className="project-description">{project.description}</div>

            <div className="tech-stack">
              <h3 className="sidebar-label">Tags</h3>
              <div className="tags-list">
                {project.tags?.map((t, i) => (
                  <span key={i} className="minimal-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* RIGHT: Flowing Images */}
        <div className="content-flow">
          {/* Map through images, skip the first one since it's the hero */}
          {project.images.slice(1).map((imgUrl, idx) => (
            <div key={idx} className="content-image-wrapper">
              <img
                src={imgUrl}
                alt={`${project.title} detail ${idx}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT FOOTER */}
      {nextProject && (
        <section className="next-project-section">
          <Link
            href={`/project/${nextProject.slug}`}
            className="next-project-link"
          >
            <span className="next-label">Next Project</span>
            <h2 className="next-title">{nextProject.title}</h2>
            <div className="next-img-preview">
              <img
                src={nextProject.thumbnail || nextProject.images[0]}
                alt=""
              />
            </div>
          </Link>
        </section>
      )}

      <Footer />
    </div>
  );
}
