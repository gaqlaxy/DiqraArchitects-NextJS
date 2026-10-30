"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "@/app/styles/Preloader.css";

// Full-screen cuts through the work; the last one is held as the site fades in
const PHOTOS = ["/HeroMain.webp", "/About.webp", "/hero3.webp", "/hero2.webp"];
const CUTS = [0, 1.0, 1.75, 2.5];

export default function PreloaderClient({ svg }) {
  const preloaderRef = useRef(null);
  const countRef = useRef(null);
  const indexRef = useRef(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = preloaderRef.current;
    const frame = root.querySelector(".preloader-frame");
    const photos = root.querySelectorAll(".preloader-photo");
    const logo = root.querySelector(".preloader-logo");
    const paths = root.querySelectorAll(".preloader-logo path");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    document.documentElement.classList.add("is-preloading");
    const finish = () => {
      document.documentElement.classList.remove("is-preloading");
      setDone(true);
    };

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(frame, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(logo, { opacity: 1 });
        gsap.set(paths, { fill: "#fff" });
        countRef.current.textContent = "100";
        gsap.to(root, { opacity: 0, duration: 0.4, delay: 0.8, onComplete: finish });
        return;
      }

      // Prep logo strokes for drawing
      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
          fill: "transparent",
        });
      });

      gsap.set(frame, { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set([...photos].slice(1), { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set(photos, { scale: 1.18 });

      const progress = { value: 0 };
      const tl = gsap.timeline({ onComplete: finish });

      // 1. The cream lifts away onto the first photo
      tl.to(frame, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power4.inOut" }, 0.15)
        .to(progress, {
          value: 100,
          duration: 2.9,
          ease: "power3.inOut",
          onUpdate: () => {
            countRef.current.textContent = String(Math.round(progress.value)).padStart(3, "0");
          },
        }, 0.1)
        .from(".preloader-meta", { opacity: 0, duration: 0.4 }, 0.8)
        .to(".preloader-meta", { opacity: 0, duration: 0.3 }, 3.2);

      // 2. Each project cuts in from below over the last, settling as it plays
      photos.forEach((photo, i) => {
        const at = CUTS[i];
        if (i > 0) {
          tl.to(photo, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5, ease: "power3.inOut" }, at);
        }
        tl.to(photo, { scale: 1, duration: 4.4 - at, ease: "power3.out" }, at)
          .call(() => { indexRef.current.textContent = `0${i + 1}`; }, null, at + 0.25);
      });

      // 3. Logo rises in, is drawn in white, then filled
      tl.fromTo(logo, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 0.7)
        .to(paths, { strokeDashoffset: 0, duration: 1.3, ease: "power2.inOut" }, 0.7)
        .to(paths, { fill: "#fff", duration: 0.4, ease: "power1.out" }, 1.7)
        .to(paths, { strokeWidth: 0, duration: 0.3 }, 2.0);

      // 4. Logo lands on the navbar logo, then the preloader gives way to the site
      const flight = (key) => () => {
        const target = document
          .querySelector(".Navbar-logo:not(.Navbar-logo-hidden)")
          ?.getBoundingClientRect();
        if (!target || !target.width) return key === "scale" ? 1 : 0;
        const from = logo.getBoundingClientRect();
        const scale = target.width / from.width;
        if (key === "x") return target.left - from.left;
        if (key === "y") return target.top + target.height / 2 - (from.top + (from.height * scale) / 2);
        return scale;
      };

      tl.to(logo, {
        x: flight("x"),
        y: flight("y"),
        scale: flight("scale"),
        transformOrigin: "0 0",
        duration: 0.8,
        ease: "power4.inOut",
      }, 3.4)
        .to(".preloader-scrim", { opacity: 0, duration: 0.8 }, 3.4)
        .to(root, { opacity: 0, duration: 0.6, ease: "power2.out" }, 4.2);
    }, root);

    return () => {
      ctx.revert();
      document.documentElement.classList.remove("is-preloading");
    };
  }, []);

  if (done) return null;

  return (
    <div className="preloader" ref={preloaderRef} aria-hidden="true">
      <div className="preloader-frame">
        {PHOTOS.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            className="preloader-photo"
            src={src}
            alt=""
            decoding="async"
            fetchPriority={i === 0 ? "high" : "auto"}
          />
        ))}
        <div className="preloader-scrim" />

        <div className="preloader-meta l">
          <span>Loading</span>
          <span ref={countRef}>000</span>
        </div>
        <div className="preloader-meta r">
          <span>Selected work</span>
          <span><span ref={indexRef}>01</span> / 0{PHOTOS.length}</span>
        </div>
      </div>

      <div className="preloader-center">
        <div className="preloader-logo" dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    </div>
  );
}
