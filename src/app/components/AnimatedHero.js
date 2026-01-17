"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero({ data }) {
  const root = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Professional Clip-Path Reveal (Very "Architectural")
      tl.from(".hero-img", {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.5,
        ease: "power4.inOut",
      }).from(
        ".reveal-up",
        {
          y: 60,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[90vh] flex flex-col justify-end px-6 pb-12"
    >
      {/* Background Image Container */}
      <div className="hero-img absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#fcfcfc] via-transparent to-transparent z-10" />
        <img
          src="/architectural-render.jpg"
          className="w-full h-full object-cover"
          alt="Architecture"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 max-w-screen-xl mx-auto w-full">
        <div className="overflow-hidden mb-2">
          <span className="reveal-up block text-sm uppercase tracking-[0.4em] font-bold text-neutral-500">
            {data.title}
          </span>
        </div>
        <div className="overflow-hidden">
          <h1 className="reveal-up text-6xl md:text-8xl font-light tracking-tighter leading-[0.9]">
            {data.tagline}
          </h1>
        </div>
      </div>
    </section>
  );
}
