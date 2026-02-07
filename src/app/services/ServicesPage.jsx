// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import CtaSection from "@/app/components/CtaSection";
// import Footer from "@/app/components/Footer";
// import SlideUpButton from "@/app/components/SlideUpButton";
// import "@/app/styles/ServicesPage.css";

// gsap.registerPlugin(ScrollTrigger);

// const ServicesPage = () => {
//   const containerRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Set loaded state immediately to show content
//     setIsLoaded(true);

//     // Delay GSAP initialization slightly to allow page to render
//     const initTimeout = setTimeout(() => {
//       const ctx = gsap.context(() => {
//         // Set z-index for images
//         const imgWrappers = gsap.utils.toArray(".servicespage-img-wrapper");
//         imgWrappers.forEach((element) => {
//           const order = element.getAttribute("data-index");
//           if (order !== null) {
//             element.style.zIndex = order;
//           }
//         });

//         // Mobile layout handler
//         const handleMobileLayout = () => {
//           const isMobile = window.matchMedia("(max-width: 768px)").matches;
//           const leftItems = gsap.utils.toArray(".servicespage-arch__info");
//           const rightItems = gsap.utils.toArray(".servicespage-img-wrapper");

//           if (isMobile) {
//             leftItems.forEach((item, i) => {
//               item.style.order = i * 2;
//             });
//             rightItems.forEach((item, i) => {
//               item.style.order = i * 2 + 1;
//             });
//           } else {
//             leftItems.forEach((item) => {
//               item.style.order = "";
//             });
//             rightItems.forEach((item) => {
//               item.style.order = "";
//             });
//           }
//         };

//         handleMobileLayout();

//         let resizeTimeout;
//         const handleResize = () => {
//           clearTimeout(resizeTimeout);
//           resizeTimeout = setTimeout(handleMobileLayout, 100);
//         };

//         window.addEventListener("resize", handleResize);

//         const imgs = gsap.utils.toArray(".servicespage-img-wrapper img");

//         // Only initialize scroll animations on desktop
//         const mediaQuery = window.matchMedia("(min-width: 769px)");

//         if (mediaQuery.matches) {
//           // Desktop animations
//           const mainTimeline = gsap.timeline({
//             scrollTrigger: {
//               trigger: ".servicespage-arch",
//               start: "top top",
//               end: "bottom bottom",
//               pin: ".servicespage-arch__right",
//               scrub: true,
//               invalidateOnRefresh: true,
//             },
//           });

//           gsap.set(imgs, {
//             clipPath: "inset(0)",
//             objectPosition: "0px 0%",
//           });

//           imgs.forEach((_, index) => {
//             const currentImage = imgs[index];
//             const nextImage = imgs[index + 1] ? imgs[index + 1] : null;

//             if (nextImage) {
//               const sectionTimeline = gsap.timeline();
//               sectionTimeline
//                 .to(
//                   currentImage,
//                   {
//                     clipPath: "inset(0px 0px 100%)",
//                     objectPosition: "0px 60%",
//                     // opacity: 0,
//                     // scale: 1.1,
//                     duration: 1.5,
//                     ease: "none",
//                   },
//                   0
//                 )
//                 .to(
//                   nextImage,
//                   {
//                     objectPosition: "0px 40%",
//                     duration: 1.5,
//                     ease: "none",
//                   },
//                   0
//                 );
//               mainTimeline.add(sectionTimeline);
//             }
//           });
//         } else {
//           // ✅ Mobile animations - smoother parallax without white gaps
//           gsap.set(imgs, { yPercent: 0 });

//           imgs.forEach((image) => {
//             gsap
//               .timeline({
//                 scrollTrigger: {
//                   trigger: image,
//                   start: "top bottom", // starts when image enters viewport
//                   end: "bottom top", // ends when it leaves
//                   scrub: 1,
//                   invalidateOnRefresh: true,
//                 },
//               })
//               .to(image, {
//                 yPercent: -15, // gentle upward motion
//                 ease: "none",
//               });
//           });
//         }

//         // Button hover effects - simplified initialization
//         const initButtonEffects = () => {
//           const styledCtaBtns = document.querySelectorAll(
//             ".servicespage-cta-btn-styled"
//           );

//           styledCtaBtns.forEach((btn) => {
//             if (btn.hasAttribute("data-hover-initialized")) return;

//             btn.addEventListener("mouseenter", () => {
//               gsap.to(btn.querySelector("span"), {
//                 y: -5,
//                 duration: 0.3,
//                 ease: "power2.out",
//               });
//             });

//             btn.addEventListener("mouseleave", () => {
//               gsap.to(btn.querySelector("span"), {
//                 y: 0,
//                 duration: 0.3,
//                 ease: "power2.out",
//               });
//             });

//             btn.setAttribute("data-hover-initialized", "true");
//           });
//         };

//         initButtonEffects();

//         return () => {
//           window.removeEventListener("resize", handleResize);
//         };
//       }, containerRef);

//       return () => ctx.revert();
//     }, 50); // Small delay to let page render first

//     return () => clearTimeout(initTimeout);
//   }, []);

//   if (!isLoaded) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div>Loading...</div>
//       </div>
//     );
//   }

//   return (
//     <div ref={containerRef} className="servicespage-container">
//       <div className="servicespage-spacer"></div>

//       <div className="servicespage-header-section">
//         <div className="servicespage-label">
//           <span>(WHAT WE DO)</span>
//         </div>
//         <h1 className="servicespage-main-title">Our Services</h1>
//       </div>

//       <div className="servicespage-arch">
//         <div className="servicespage-arch__left">
//           <div
//             className="servicespage-arch__info"
//             id="servicespage-exterior-design"
//           >
//             <div className="servicespage-content">
//               <div className="servicespage-icon-container">
//                 <svg
//                   className="servicespage-icon"
//                   viewBox="0 0 100 100"
//                   fill="none"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                 >
//                   <rect x="20" y="40" width="25" height="35" />
//                   <rect x="25" y="48" width="6" height="8" />
//                   <rect x="34" y="48" width="6" height="8" />
//                   <rect x="25" y="60" width="6" height="8" />
//                   <rect x="34" y="60" width="6" height="8" />
//                   <path d="M 45 30 L 55 20 L 75 20 L 75 75 L 45 75 Z" />
//                   <rect x="50" y="28" width="6" height="8" />
//                   <rect x="59" y="28" width="6" height="8" />
//                   <rect x="50" y="40" width="6" height="8" />
//                   <rect x="59" y="40" width="6" height="8" />
//                   <rect x="50" y="52" width="6" height="8" />
//                   <rect x="59" y="52" width="6" height="8" />
//                   <line x1="55" y1="20" x2="55" y2="30" />
//                   <line x1="55" y1="30" x2="45" y2="30" />
//                 </svg>
//               </div>
//               <h2 className="servicespage-header">Exterior Design</h2>
//               <p className="servicespage-desc">
//                 We craft bold, refined exteriors that balance form, function,
//                 and lasting visual harmony.
//               </p>
//               {/* <Link
//                 to="/services/exterior-design"
//                 className="servicespage-cta-btn-styled"
//               >
//                 <span>Learn More</span>
//               </Link> */}
//               <SlideUpButton href="/services/exterior-design">
//                 Learn More
//               </SlideUpButton>
//             </div>
//           </div>

//           <div
//             className="servicespage-arch__info"
//             id="servicespage-design-planning"
//           >
//             <div className="servicespage-content">
//               <div className="servicespage-icon-container">
//                 <svg
//                   className="servicespage-icon"
//                   viewBox="0 0 100 100"
//                   fill="none"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                 >
//                   <circle cx="35" cy="45" r="18" />
//                   <circle cx="55" cy="35" r="18" />
//                   <circle cx="50" cy="60" r="18" />
//                 </svg>
//               </div>
//               <h2 className="servicespage-header">Design & Planning</h2>
//               <p className="servicespage-desc">
//                 From conceptual layouts to detailed drawings, we shape your
//                 project with precision and clarity.
//               </p>
//               {/* <Link
//                 to="/services/design-planning"
//                 className="servicespage-cta-btn-styled"
//               >
//                 <span>Learn More</span>
//               </Link> */}
//               <SlideUpButton href="/services/design-planning">
//                 Learn More
//               </SlideUpButton>
//             </div>
//           </div>

//           <div
//             className="servicespage-arch__info"
//             id="servicespage-consultation"
//           >
//             <div className="servicespage-content">
//               <div className="servicespage-icon-container">
//                 <svg
//                   className="servicespage-icon"
//                   viewBox="0 0 100 100"
//                   fill="none"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                 >
//                   <path d="M 25 45 L 50 25 L 75 45 L 75 75 L 25 75 Z" />
//                   <rect x="45" y="55" width="10" height="20" />
//                   <path d="M 20 45 L 80 45" />
//                   <rect x="55" y="35" width="12" height="10" rx="1" />
//                   <line x1="58" y1="38" x2="64" y2="38" />
//                   <line x1="58" y1="41" x2="64" y2="41" />
//                   <path
//                     d="M 72 28 L 78 28 L 78 22 L 88 22 L 88 32 L 82 32 L 82 34"
//                     strokeWidth="1.2"
//                   />
//                   <line x1="75" y1="25" x2="78" y2="25" strokeWidth="1.2" />
//                   <line x1="85" y1="25" x2="88" y2="25" strokeWidth="1.2" />
//                   <line x1="85" y1="29" x2="88" y2="29" strokeWidth="1.2" />
//                 </svg>
//               </div>
//               <h2 className="servicespage-header">Consultation</h2>
//               <p className="servicespage-desc">
//                 We offer expert guidance to help you make confident design
//                 decisions.
//               </p>
//               {/* <Link
//                 to="/services/consultation"
//                 className="servicespage-cta-btn-styled"
//               >
//                 <span>Learn More</span>
//               </Link> */}
//               <SlideUpButton href="/services/consultation">
//                 Learn More
//               </SlideUpButton>
//             </div>
//           </div>

//           <div
//             className="servicespage-arch__info"
//             id="servicespage-interior-design"
//           >
//             <div className="servicespage-content">
//               <div className="servicespage-icon-container">
//                 <svg
//                   className="servicespage-icon"
//                   viewBox="0 0 100 100"
//                   fill="none"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                 >
//                   <rect x="20" y="35" width="60" height="40" />
//                   <line x1="50" y1="35" x2="50" y2="75" />
//                   <line x1="20" y1="55" x2="80" y2="55" />
//                   <rect x="25" y="40" width="8" height="10" />
//                   <rect x="57" y="40" width="8" height="10" />
//                   <path d="M 35 60 L 45 70 L 45 75" />
//                   <circle cx="60" cy="67" r="5" />
//                 </svg>
//               </div>
//               <h2 className="servicespage-header">Interior Design</h2>
//               <p className="servicespage-desc">
//                 We create interiors that feel balanced, elegant, and deeply
//                 connected to your lifestyle.
//               </p>
//               {/* <Link
//                 to="/services/interior-design"
//                 className="servicespage-cta-btn-styled"
//               >
//                 <span>Learn More</span>
//               </Link> */}
//               <SlideUpButton href="/services/interior-design">
//                 Learn More
//               </SlideUpButton>
//             </div>
//           </div>

//           <div className="servicespage-arch__info" id="servicespage-renovation">
//             <div className="servicespage-content">
//               <div className="servicespage-icon-container">
//                 <svg
//                   className="servicespage-icon"
//                   viewBox="0 0 100 100"
//                   fill="none"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                 >
//                   <path d="M 30 70 L 30 40 L 50 25 L 70 40 L 70 70 Z" />
//                   <rect x="42" y="55" width="16" height="15" />
//                   <path d="M 25 70 L 75 70" strokeWidth="2" />
//                   <line x1="40" y1="40" x2="40" y2="50" strokeWidth="2" />
//                   <line x1="60" y1="40" x2="60" y2="50" strokeWidth="2" />
//                   <circle cx="65" cy="30" r="8" />
//                   <path d="M 61 30 L 63 32 L 69 26" strokeWidth="1.2" />
//                 </svg>
//               </div>
//               <h2 className="servicespage-header">Renovation</h2>
//               <p className="servicespage-desc">
//                 We reimagine existing spaces with a blend of sensitivity and
//                 innovation.
//               </p>
//               {/* <Link
//                 to="/services/renovation"
//                 className="servicespage-cta-btn-styled"
//               >
//                 <span>Learn More</span>
//               </Link> */}
//               <SlideUpButton href="/services/renovation">
//                 Learn More
//               </SlideUpButton>
//             </div>
//           </div>
//         </div>

//         <div className="servicespage-arch__right">
//           <div className="servicespage-img-wrapper" data-index="5">
//             <img
//               src="https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Exterior Design"
//               loading="lazy"
//             />
//           </div>

//           <div className="servicespage-img-wrapper" data-index="4">
//             <img
//               src="https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Design & Planning"
//               loading="lazy"
//             />
//           </div>

//           <div className="servicespage-img-wrapper" data-index="3">
//             <img
//               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Consultation"
//               loading="lazy"
//             />
//           </div>

//           <div className="servicespage-img-wrapper" data-index="2">
//             <img
//               src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Interior Design"
//               loading="lazy"
//             />
//           </div>

//           <div className="servicespage-img-wrapper" data-index="1">
//             <img
//               src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Renovation"
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </div>

//       {/* <div className="servicespage-spacer"></div> */}
//       <CtaSection />
//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;

"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Imports from your original file structure
import CtaSection from "@/app/components/CtaSection";
import Footer from "@/app/components/Footer";
import SlideUpButton from "@/app/components/SlideUpButton";

// Import the CSS defined below
import "@/app/styles/ServicesPage.css";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "01",
    title: "Exterior Design",
    description:
      "We craft bold, refined exteriors that balance form, function, and lasting visual harmony. Every line serves a purpose.",
    image:
      "https://images.unsplash.com/photo-1712806377231-256e4a1f0a8e?q=80&w=1332&auto=format&fit=crop",
    link: "/services/exterior-design",
    // Architectural Icon: Facade/Elevation
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M 45 30 L 55 20 L 75 20 L 75 75 L 45 75 Z" />
        <line x1="55" y1="20" x2="55" y2="30" />
        <rect x="20" y="40" width="25" height="35" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Design & Planning",
    description:
      "From conceptual layouts to detailed drawings. We focus on spatial flow and structural integrity before the first brick is laid.",
    image:
      "https://images.unsplash.com/photo-1721244654394-36a7bc2da288?q=80&w=1017&auto=format&fit=crop",
    link: "/services/design-planning",
    // Architectural Icon: Blueprint/Grid
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="25" y="25" width="50" height="50" />
        <line x1="25" y1="50" x2="75" y2="50" />
        <line x1="50" y1="25" x2="50" y2="75" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Consultation",
    description:
      "Expert guidance to help you make confident design decisions. We analyze feasibility, budget, and zoning requirements.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
    link: "/services/consultation",
    // Architectural Icon: Dialogue/Measurements
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M 25 45 L 50 25 L 75 45 L 75 75 L 25 75 Z" />
        <circle cx="50" cy="55" r="10" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Interior Design",
    description:
      "Creating interiors that feel balanced and elegant. We focus on materials, light, and the psychology of space.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2058&auto=format&fit=crop",
    link: "/services/interior-design",
    // Architectural Icon: Room/Perspective
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <rect x="20" y="30" width="60" height="40" rx="2" />
        <line x1="20" y1="50" x2="80" y2="50" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Renovation",
    description:
      "Reimagining existing spaces with sensitivity. We preserve the history while injecting modern innovation.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
    link: "/services/renovation",
    // Architectural Icon: Modification
    icon: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M 30 70 L 30 40 L 50 25 L 70 40 L 70 70 Z" />
        <line x1="40" y1="40" x2="40" y2="55" />
        <line x1="60" y1="40" x2="60" y2="55" />
      </svg>
    ),
  },
];

const ServicesPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Small timeout ensures DOM is painted before GSAP calculates positions
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const rows = document.querySelectorAll(".arch-service-row");

        rows.forEach((row) => {
          const imgReveal = row.querySelector(".arch-img-reveal");
          const img = row.querySelector(".arch-img");
          const textContent = row.querySelector(".arch-text-content");

          if (!imgReveal) return;

          // 1. The Blueprint Wipe (Right to Left Reveal)
          gsap.to(imgReveal, {
            clipPath: "inset(0 0% 0 0)", // Fully visible
            ease: "power2.inOut",
            duration: 1.4,
            scrollTrigger: {
              trigger: row,
              start: "top 75%", // Triggers when row enters lower viewport
            },
          });

          // 2. Structural Parallax (Image moves slightly slower than scroll)
          gsap.to(img, {
            scale: 1, // Zooms out to normal
            yPercent: 10, // Moves down slightly
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });

          // 3. Technical Text Stagger
          if (textContent) {
            gsap.from(textContent.children, {
              y: 30,
              opacity: 0,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 70%",
              },
            });
          }
        });
      }, containerRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="arch-container" ref={containerRef}>
      {/* 1. Technical Header */}
      <header className="arch-header-wrap">
        <h1 className="arch-title">Our Services</h1>
        <div className="arch-header-meta">
          <span className="arch-subtitle">Architecture & Design</span>
          <span className="arch-subtitle">Est. 2024</span>
        </div>
      </header>

      {/* 2. The Structural Grid */}
      <div className="arch-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="arch-service-row">
            {/* Column 1: Specs (ID & Icon) */}
            <div className="arch-col-1">
              <span className="arch-num">({service.id})</span>
              <div className="arch-icon-box">{service.icon}</div>
            </div>

            {/* Column 2: Content (Title, Desc, Button) */}
            <div className="arch-col-2">
              <div className="arch-text-content">
                <h2 className="arch-service-name">{service.title}</h2>
                <p className="arch-desc">{service.description}</p>

                {/* Your Custom SlideUpButton Component */}
                <div className="arch-btn-wrapper">
                  <SlideUpButton href={service.link}>Details</SlideUpButton>
                </div>
              </div>
            </div>

            {/* Column 3: Visual (The Reveal) */}
            <div className="arch-col-3">
              <div className="arch-img-reveal">
                <img
                  src={service.image}
                  alt={service.title}
                  className="arch-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Footer Integration */}
      <div className="arch-footer-wrapper">
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
