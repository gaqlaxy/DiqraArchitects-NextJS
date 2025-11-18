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


"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import projectsData from "@/app/data/projects-data.json";
import Footer from "@/app/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectGallery from "./ProjectGallery";

gsap.registerPlugin(ScrollTrigger);


import "@/app/styles/ProjectDetail.css";

export default function ProjectDetailClient({ slug }) {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  // Find project + neighbours synchronously from JSON
  const projectIndex = projectsData.projects.findIndex(
    (p) => p.slug === slug
  );

  if (projectIndex === -1) {
    return (
      <div className="project-detail project-detail--notfound">
        <div className="project-notfound-inner">
          <p>Project not found.</p>
          <Link href="/works" className="back-to-works-link">
            ← Back to Works
          </Link>
        </div>
      </div>
    );
  }

  const project = projectsData.projects[projectIndex];
  const nextProject =
    projectsData.projects[(projectIndex + 1) % projectsData.projects.length];
  const prevProject =
    projectsData.projects[
      (projectIndex - 1 + projectsData.projects.length) %
        projectsData.projects.length
    ];

  // Scroll-to-top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Track scroll for parallax
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax for gallery images
useEffect(() => {
  if (!project) return;

  const images = document.querySelectorAll(".gallery-split-image img");

  images.forEach((img) => {
    gsap.fromTo(
      img,
      { y: 0 },
      {
        y: -80, // Amount of parallax
        ease: "none",
        scrollTrigger: {
          trigger: img,
          start: "top bottom",  // when image enters view
          end: "bottom top",    // when image leaves view
          scrub: 1.2,           // smooth motion
        },
      }
    );
  });

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, [project]);


  const parallaxOffset = scrollY * 0.4;
  const opacity = Math.max(0, 1 - scrollY / 450);

  return (
    <div className="project-detail">
      {/* HERO */}
      <section className="project-hero" ref={heroRef}>
        <div
          className="hero-background"
          style={{
            transform: `translateY(${parallaxOffset}px) scale(1.03)`,
            backgroundImage: `url(${project.images[0]})`,
          }}
        />

        <div className="hero-gradient" />

        <div className="hero-content" style={{ opacity }}>
          <div className="hero-inner">
            <div className="hero-left">
              <span className="hero-label">(Project)</span>
              <h1 className="project-title">{project.title}</h1>

              <div className="project-meta">
                <span className="meta-primary">{project.location}</span>
                <span className="meta-divider">•</span>
                <span className="meta-secondary">{project.category}</span>
                {project.year && (
                  <>
                    <span className="meta-divider">•</span>
                    <span className="meta-secondary">{project.year}</span>
                  </>
                )}
              </div>

              <Link href="/works" className="back-link">
                ← Back to works
              </Link>
            </div>

            <div className="hero-right">
              <div className="hero-right-block">
                <span className="hero-right-label">Scope</span>
                <p className="hero-right-value">
                  {project.details?.status || "Architecture & Design"}
                </p>
              </div>
              {project.details?.area && (
                <div className="hero-right-block">
                  <span className="hero-right-label">Area</span>
                  <p className="hero-right-value">{project.details.area}</p>
                </div>
              )}
            </div>
          </div>

          <div className="scroll-indicator">
            <span className="scroll-indicator-text">(SCROLL TO EXPLORE)</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="project-info">
        <div className="info-inner">
          <div className="info-grid">
            <div className="info-description">
              <h2 className="section-label">About the project</h2>
              <p className="project-description">{project.description}</p>

              {project.tags?.length > 0 && (
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="info-details">
              <h3 className="details-title">Project details</h3>
              <dl className="details-grid">
                {project.year && (
                  <>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </>
                )}
                {project.details?.client && (
                  <>
                    <dt>Client</dt>
                    <dd>{project.details.client}</dd>
                  </>
                )}
                {project.details?.area && (
                  <>
                    <dt>Area</dt>
                    <dd>{project.details.area}</dd>
                  </>
                )}
                {project.details?.status && (
                  <>
                    <dt>Status</dt>
                    <dd>{project.details.status}</dd>
                  </>
                )}
                {project.details?.architect && (
                  <>
                    <dt>Architect</dt>
                    <dd>{project.details.architect}</dd>
                  </>
                )}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* VERTICAL GALLERY (G2) */}
      {/* <section className="project-gallery">
        <div className="gallery-inner">
          {project.images.slice(1).map((img, i) => (
            <figure key={i} className="gallery-item">
              <div className="gallery-image-wrap">
                <img src={img} alt={`${project.title} – image ${i + 2}`} />
              </div>
            </figure>
          ))}
        </div>
      </section> */}
      {/* GALLERY */}
        <ProjectGallery images={project.images} />



      {/* PREVIOUS / NEXT */}
      <section className="navigation-projects">
        <div className="navigation-inner">
          {prevProject && (
            <article className="nav-project nav-project--prev">
              <div className="nav-project-image">
                <Link href={`/project/${prevProject.slug}`}>
                  <img
                    src={prevProject.thumbnail}
                    alt={prevProject.title}
                    loading="lazy"
                  />
                </Link>
              </div>
              <div className="nav-project-content">
                <span className="nav-label">Previous project</span>
                <Link
                  href={`/project/${prevProject.slug}`}
                  className="nav-link"
                >
                  <span className="nav-arrow nav-arrow--left">←</span>
                  <h2>{prevProject.title}</h2>
                </Link>
              </div>
            </article>
          )}

          {nextProject && (
            <article className="nav-project nav-project--next">
              <div className="nav-project-content">
                <span className="nav-label">Next project</span>
                <Link
                  href={`/project/${nextProject.slug}`}
                  className="nav-link"
                >
                  <h2>{nextProject.title}</h2>
                  <span className="nav-arrow nav-arrow--right">→</span>
                </Link>
              </div>
              <div className="nav-project-image">
                <Link href={`/project/${nextProject.slug}`}>
                  <img
                    src={nextProject.thumbnail}
                    alt={nextProject.title}
                    loading="lazy"
                  />
                </Link>
              </div>
            </article>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
