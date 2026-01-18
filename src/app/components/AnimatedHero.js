// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// export default function Hero({ data }) {
//   const root = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();

//       // Professional Clip-Path Reveal (Very "Architectural")
//       tl.from(".hero-img", {
//         clipPath: "inset(100% 0% 0% 0%)",
//         duration: 1.5,
//         ease: "power4.inOut",
//       }).from(
//         ".reveal-up",
//         {
//           y: 60,
//           opacity: 0,
//           stagger: 0.1,
//           duration: 1,
//           ease: "power3.out",
//         },
//         "-=0.5",
//       );
//     }, root);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={root}
//       className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-12"
//     >
//       {/* Background Image Container */}
//       <div className="hero-img absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] via-transparent to-transparent z-10" />
//         <img
//           src="/architectural-render.jpg"
//           className="w-full h-full object-cover"
//           alt="Architecture"
//         />
//       </div>

//       {/* Text Content */}
//       <div className="relative z-20 max-w-screen-xl mx-auto w-full">
//         <div className="overflow-hidden mb-2">
//           <span className="reveal-up block text-sm uppercase tracking-[0.4em] font-bold text-neutral-500">
//             {data.title}
//           </span>
//         </div>
//         <div className="overflow-hidden">
//           <h1 className="reveal-up text-6xl md:text-8xl font-light tracking-tighter leading-[0.9]">
//             {data.tagline}
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function HeroAnimation({ data }) {
  const container = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Cinematic Reveal
      tl.from(".hero-image-wrap", {
        scale: 1.1,
        duration: 2,
        ease: "power2.out"
      })
      .from(".overlay-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.5,
        ease: "expo.inOut"
      }, 0)
      .from(".text-reveal", {
        y: "100%",
        stagger: 0.1,
        duration: 1,
        ease: "power4.out"
      }, "-=0.8");
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative h-screen w-full overflow-hidden bg-black">
      {/* The Hero Image (Data-Driven) */}
      <div className="hero-image-wrap absolute inset-0 opacity-70">
        <Image 
          src={data.image} 
          alt={data.title}
          fill
          priority // Loads immediately for SEO/LCP
          className="object-cover"
        />
      </div>

      {/* Modern Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 z-10 text-white">
        <div className="overflow-hidden">
          <span className="text-reveal block text-sm uppercase tracking-[0.6em] mb-4 opacity-80">
            {data.title}
          </span>
        </div>
        <div className="overflow-hidden mb-6">
          <h1 className="text-reveal text-5xl md:text-8xl font-light leading-none tracking-tighter max-w-4xl">
            {data.tagline}
          </h1>
        </div>
        <div className="overlay-line w-24 h-[1px] bg-white" />
      </div>
    </div>
  );
}