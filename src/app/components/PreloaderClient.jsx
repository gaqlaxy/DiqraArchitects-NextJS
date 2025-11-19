"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "@/app/styles/Preloader.css";

export default function PreloaderClient({ svg }) {
  const preloaderRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current.querySelector("svg");
    const paths = svgEl.querySelectorAll("path");

    const preloader = preloaderRef.current;

    gsap.set(preloader, { y: 0, opacity: 1 });

    paths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.style.stroke = "#fff";
      path.style.fill = "none";
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloader, {
          y: "-100%",
          duration: 1,
          ease: "power4.inOut",
        });
      },
    });

    paths.forEach((path) => {
      tl.to(path, { strokeDashoffset: 0, duration: 2, ease: "power2.out" }, 0);
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <div className="logo-container">
        <div ref={svgRef} dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    </div>
  );
}
