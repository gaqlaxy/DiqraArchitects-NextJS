// "use client";

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "@/app/styles/ProjectGallery.css";

// gsap.registerPlugin(ScrollTrigger);

// export default function ProjectGallery({ images }) {
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {

//       // Fade-in reveal animation
//       gsap.utils.toArray(".gallery-item").forEach((item) => {
//         gsap.fromTo(
//           item,
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 1.2,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: item,
//               start: "top 85%",
//               toggleActions: "play none none none",
//             },
//           }
//         );
//       });

//       // Subtle parallax on scroll
//       gsap.utils.toArray(".gallery-img").forEach((img) => {
//         gsap.to(img, {
//           yPercent: -12,
//           ease: "none",
//           scrollTrigger: {
//             trigger: img,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//           },
//         });
//       });

//     }, galleryRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={galleryRef} className="gallery-container-custom">
//       <div className="gallery-column left-column">
//         {images
//           .filter((_, i) => i % 2 === 0)
//           .map((src, i) => (
//             <div key={i} className="gallery-item tall">
//               <img src={src} className="gallery-img" alt="" />
//             </div>
//           ))}
//       </div>

//       <div className="gallery-column right-column">
//         {images
//           .filter((_, i) => i % 2 !== 0)
//           .map((src, i) => (
//             <div key={i} className="gallery-item medium">
//               <img src={src} className="gallery-img" alt="" />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/app/styles/ProjectGallery.css";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectGallery({ images = [] }) {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current || !images.length) return;

    const ctx = gsap.context(() => {
      // Fade-in reveal on scroll
      gsap.utils.toArray(".pg-item").forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Subtle parallax on images
      gsap.utils.toArray(".pg-img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: 0 },
          {
            yPercent: -8, // gentle inner parallax
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".pg-item"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, galleryRef);

    return () => ctx.revert();
  }, [images]);

  // Split images into left (even indices) + right (odd indices)
  const leftImages = images.filter((_, i) => i % 2 === 0);
  const rightImages = images.filter((_, i) => i % 2 !== 0);

  return (
    <section ref={galleryRef} className="project-gallery-section">
      <div className="pg-grid">
        {/* LEFT COLUMN – tall (100vh-ish) */}
        <div className="pg-column pg-column-left">
          {leftImages.map((src, idx) => (
            <div className="pg-item pg-item-tall" key={`left-${idx}`}>
              <div className="pg-image-wrapper">
                <img src={src} alt="" className="pg-img" />
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN – shorter (70vh-ish) */}
        <div className="pg-column pg-column-right">
          {rightImages.map((src, idx) => (
            <div className="pg-item pg-item-medium" key={`right-${idx}`}>
              <div className="pg-image-wrapper">
                <img src={src} alt="" className="pg-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
