"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "@/app/styles/Preloader.css";

// Full-screen cuts through the work; on the homepage the last one becomes the real hero image
const PHOTOS = ["/HeroMain.webp", "/About.webp", "/hero3.webp", "/hero2.webp"];
const CUTS = [0, 1.0, 1.75, 2.5];

// Ink of /diqrablack.webp, the logo on inner pages
const DARK_INK = "#050a08";

// Lets the page hold its own entrance until the preloader starts to leave
const reveal = () => {
  document.documentElement.dataset.preloader = "revealed";
  window.dispatchEvent(new Event("preloader:reveal"));
};

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

    // Homepage: end on the hero's own image so the last frame is the page itself
    const heroImg = document.querySelector(".oh-hero-bg");
    if (heroImg) {
      const last = photos[photos.length - 1];
      // Don't open on the same photo we close on: reuse the freed-up last photo instead
      const heroUrl = decodeURIComponent(heroImg.currentSrc || heroImg.getAttribute("src") || "");
      photos.forEach((photo, i) => {
        if (photo !== last && heroUrl.includes(PHOTOS[i])) photo.src = PHOTOS[PHOTOS.length - 1];
      });
      const srcset = heroImg.getAttribute("srcset");
      if (srcset) {
        last.setAttribute("srcset", srcset);
        last.setAttribute("sizes", "100vw");
      }
      last.src = heroImg.currentSrc || heroImg.getAttribute("src");
    }

    // Inner pages use the black logo on a light page
    const isInner = !!document.querySelector(".Navbar-simple");
    const ink = isInner ? DARK_INK : "#fff";

    document.documentElement.classList.add("is-preloading");
    const unlockScroll = () =>
      document.documentElement.classList.remove("is-preloading");
    const finish = () => {
      unlockScroll();
      setDone(true);
    };

    // Once the page scrollbar is back, keep wheel/touch from scrolling the page under the preloader
    const block = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };
    root.addEventListener("wheel", block, { passive: false });
    root.addEventListener("touchmove", block, { passive: false });

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(frame, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(logo, { opacity: 1 });
        gsap.set(paths, { fill: "#fff" });
        countRef.current.textContent = "100";
        gsap.to(root, { opacity: 0, duration: 0.4, delay: 0.8, onStart: reveal, onComplete: finish });
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

      // 4. Logo lands exactly on the navbar's logo image (same 559x171 artwork),
      //    stays put while everything behind it fades, and is swapped for the real one
      const navLogo = () =>
        document
          .querySelector(".Navbar-logo:not(.Navbar-logo-hidden) img")
          ?.getBoundingClientRect();
      const flight = (key) => () => {
        const target = navLogo();
        if (!target || !target.width) return key === "scale" ? 1 : 0;
        const from = logo.getBoundingClientRect();
        if (key === "x") return target.left - from.left;
        if (key === "y") return target.top - from.top;
        return target.width / from.width;
      };

      // Inner pages clear the photo early so the dark logo never lands on it
      const revealAt = isInner ? 3.5 : 4.2;

      // Bring the scrollbar back now, while the photo is still zooming and covers the page:
      // the ~15px width change and ScrollTrigger's refresh happen out of sight, not at the swap
      tl.call(unlockScroll, null, 3.4)
        .to(logo, {
          x: flight("x"),
          y: flight("y"),
          scale: flight("scale"),
          transformOrigin: "0 0",
          duration: 0.8,
          ease: "power4.inOut",
        }, 3.4)
        .to(paths, { fill: ink, duration: 0.6, ease: "power1.inOut" }, 3.4)
        .to(".preloader-scrim", { opacity: 0, duration: 0.8 }, 3.4)
        .to(".preloader-vignette", { opacity: heroImg ? 1 : 0, duration: 0.8 }, 3.4)
        .call(reveal, null, revealAt)
        // Drop the cream ground while the photo is still opaque, so the dissolve goes
        // straight from photo to page with no cream washing through mid-fade
        .set(root, { backgroundColor: "transparent" }, revealAt)
        .to(frame, { opacity: 0, duration: 0.6, ease: "power2.out" }, revealAt)
        // Ease from the vector logo to the navbar's raster one instead of swapping on one frame
        .to(logo, { opacity: 0, duration: 0.35, ease: "power1.inOut" }, 4.45);
    }, root);

    return () => {
      ctx.revert();
      root.removeEventListener("wheel", block);
      root.removeEventListener("touchmove", block);
      unlockScroll();
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
        <div className="preloader-vignette" />

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
