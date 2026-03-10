"use client";
import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import "../styles/Navbar.css";
import SlideUpButton from "./SlideUpButton";
import { usePathname } from "next/navigation";

const AnimatedText = ({ children }) => (
  <span className="navbar-animated-inner">
    <span className="navbar-text-original">{children}</span>
    <span className="navbar-text-hover">{children}</span>
  </span>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  // Check if we're on homepage
  const isHomePage = pathname === "/";

  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth < 1024);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);

    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Opening/closing overlay clip-path animation
    const overlay = document.querySelector(".Navbar-overlay-menu");

    if (isMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";

      gsap.set(overlay, { display: "block" });
      gsap.fromTo(
        overlay,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power3.inOut" }
      );

      // Animate children after overlay is visible
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          gsap.fromTo(
            ".Navbar-overlay-nav-item",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.08,
              delay: 0.05,
              ease: "power2.out",
            }
          );

          gsap.fromTo(
            ".Navbar-overlay-footer-link",
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.05,
              delay: 0.25,
              ease: "power2.out",
            }
          );
        });
      });
    } else {
      // Re-enable body scroll when menu closes
      document.body.style.overflow = "";

      if (overlay) {
        gsap.to(overlay, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
          },
        });
      }
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMobile || !isHomePage) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 200);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, isHomePage]);

  const createSlideUpEffect = (element) => {
    if (!element) return null;
    const span = element.querySelector(".navbar-animated-inner");
    if (!span) return null;

    const originalSpan = span.querySelector(".navbar-text-original");
    const hoverSpan = span.querySelector(".navbar-text-hover");
    const slideDistance = originalSpan.offsetHeight || 32;

    gsap.set(span, {
      overflow: "hidden",
      position: "relative",
      display: "block",
      height: "auto",
    });

    gsap.set(originalSpan, { y: 0, position: "relative", display: "block" });
    gsap.set(hoverSpan, {
      // y: `${slideDistance}px`,
      y: "100%",

      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      display: "block",
    });

    const tl = gsap.timeline({ paused: true });

    tl.to(originalSpan, {
      y: `-${slideDistance}px`,
      duration: 0.4,
      ease: "power2.inOut",
    })
      .to(
        hoverSpan,
        {
          y: 0,
          duration: 0.4,
          ease: "power2.inOut",
        },
        0
      )
      .to(originalSpan, { opacity: 0, duration: 0.1 }, 0.2)
      .to(hoverSpan, { opacity: 1, duration: 0.1 }, 0.2);

    tl.eventCallback("onReverseComplete", () => {
      gsap.set(originalSpan, { y: 0, opacity: 1 });
      gsap.set(hoverSpan, { y: "100%", opacity: 0 });
      // gsap.set(hoverSpan, { y: `${slideDistance}px`, opacity: 0 });
    });

    return tl;
  };

  // Initialize hover for always-visible elements
  useEffect(() => {
    const selectors = [
      ".Navbar-link-animated",
      ".Navbar-contact-btn",
      ".Navbar-menu-btn",
    ];

    const attachHover = (el) => {
      const tl = createSlideUpEffect(el);
      if (!tl) return null;
      const onEnter = () => tl.play();
      const onLeave = () => tl.reverse();
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    };

    const elements = document.querySelectorAll(selectors.join(", "));
    const cleanups = [];

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        elements.forEach((el) => {
          const cleanup = attachHover(el);
          if (cleanup) cleanups.push(cleanup);
        });
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [isHomePage]);

  // Initialize hover for overlay items when menu opens
  useEffect(() => {
    if (!isMenuOpen) return;

    let cancel = false;
    requestAnimationFrame(() => {
      if (cancel) return;
      requestAnimationFrame(() => {
        const overlayItems = document.querySelectorAll(
          ".Navbar-overlay-nav-item, .Navbar-overlay-footer-link, .Navbar-close-btn"
        );
        overlayItems.forEach((el) => {
          // Clean up any existing hover before reinitializing
          if (el._hoverCleanup) {
            el._hoverCleanup();
          }

          const tl = createSlideUpEffect(el);
          if (!tl) return;
          const onEnter = () => tl.play();
          const onLeave = () => tl.reverse();
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
          el._hoverCleanup = () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
            delete el._hoverCleanup;
            delete el._hoverInitialized;
          };
          el._hoverInitialized = true;
        });
      });
    });

    return () => {
      cancel = true;
      const overlayItems = document.querySelectorAll(
        ".Navbar-overlay-nav-item, .Navbar-overlay-footer-link, .Navbar-close-btn"
      );
      overlayItems.forEach((el) => {
        if (el._hoverCleanup) el._hoverCleanup();
      });
    };
  }, [isMenuOpen]);

  // If not on homepage, show logo + buttons (BLACK THEME)
  if (!isHomePage) {
    return (
      <>
        <nav className="Navbar Navbar-simple">
          <div className="Navbar-container">
            <div className="Navbar-content">
              <Link href="/" className="Navbar-logo">
                <Image src="/diqrablack.webp" alt="DIQRA logo" width={110} height={25} priority />
              </Link>

              <div className="Navbar-actions">
                <Link
                  href="/contact"
                  className="Navbar-contact-btn Navbar-contact-btn-visible"
                >
                  <AnimatedText>GET IN TOUCH</AnimatedText>
                  <span className="Navbar-contact-dot" aria-hidden="true" />
                </Link>

                <button
                  onClick={() => setIsMenuOpen(true)}
                  className="Navbar-menu-btn Navbar-menu-btn-visible"
                >
                  <AnimatedText>MENU</AnimatedText>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div
          className={`Navbar-overlay-menu ${isMenuOpen ? "Navbar-overlay-menu-open" : ""
            }`}
          ref={overlayRef}
        >
          <div className="Navbar-overlay-container">
            <div className="Navbar-overlay-header">
              <Link href="/" className="Navbar-overlay-logo">
                <Image src="/diqrawhite.webp" alt="DIQRA logo" width={110} height={25} priority />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="Navbar-close-btn"
              >
                <AnimatedText>CLOSE</AnimatedText>
              </button>
            </div>

            <div className="Navbar-overlay-content">
              <nav className="Navbar-overlay-nav">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="Navbar-overlay-nav-item"
                >
                  <AnimatedText>HOME</AnimatedText>
                </Link>
                <Link
                  href="/works"
                  onClick={() => setIsMenuOpen(false)}
                  className="Navbar-overlay-nav-item"
                >
                  <AnimatedText>WORKS</AnimatedText>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className="Navbar-overlay-nav-item"
                >
                  <AnimatedText>ABOUT</AnimatedText>
                </Link>
                <Link
                  href="/process"
                  onClick={() => setIsMenuOpen(false)}
                  className="Navbar-overlay-nav-item"
                >
                  <AnimatedText>PROCESS</AnimatedText>
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setIsMenuOpen(false)}
                  className="Navbar-overlay-nav-item"
                >
                  <AnimatedText>GALLERY</AnimatedText>
                </Link>
              </nav>

              <div className="Navbar-overlay-footer">
                <a href="https://www.instagram.com/diqraarchitects/" target="_blank" rel="noopener noreferrer" className="Navbar-overlay-footer-link">
                  <AnimatedText>INSTAGRAM</AnimatedText>
                </a>
                <Link href="#" className="Navbar-overlay-footer-link">
                  <AnimatedText>PRIVACY POLICY</AnimatedText>
                </Link>
                <Link href="#" className="Navbar-overlay-footer-link">
                  <AnimatedText>TERMS OF SERVICE</AnimatedText>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Homepage full navbar (WHITE THEME)
  return (
    <>
      <nav className="Navbar">
        <div className="Navbar-container">
          <div className="Navbar-content">
            <Link
              href="/"
              className={`Navbar-logo ${isMobile || isScrolled ? "Navbar-logo-hidden" : ""
                }`}
            >
              <Image src="/diqrawhite.webp" alt="DIQRA logo" width={110} height={25} priority />
            </Link>

            <div
              className={`Navbar-links ${isMobile || isScrolled ? "Navbar-links-hidden" : ""
                }`}
            >
              <Link href="/works" className="Navbar-link Navbar-link-animated">
                <AnimatedText>WORKS</AnimatedText>
              </Link>
              <Link href="/about" className="Navbar-link Navbar-link-animated">
                <AnimatedText>ABOUT</AnimatedText>
              </Link>
              <Link
                href="/process"
                className="Navbar-link Navbar-link-animated"
              >
                <AnimatedText>PROCESS</AnimatedText>
              </Link>
              <Link
                href="/gallery"
                className="Navbar-link Navbar-link-animated"
              >
                <AnimatedText>GALLERY</AnimatedText>
              </Link>
            </div>

            <div className="Navbar-actions">
              <Link
                href="/contact"
                className={`Navbar-contact-btn ${isMobile || isScrolled ? "Navbar-contact-btn-visible" : ""
                  }`}
              >
                <AnimatedText>GET IN TOUCH</AnimatedText>
                <span className="Navbar-contact-dot" aria-hidden="true" />
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className={`Navbar-menu-btn ${isMobile || isScrolled ? "Navbar-menu-btn-visible" : ""
                  }`}
              >
                <AnimatedText>MENU</AnimatedText>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`Navbar-overlay-menu ${isMenuOpen ? "Navbar-overlay-menu-open" : ""
          }`}
        ref={overlayRef}
      >
        <div className="Navbar-overlay-container">
          <div className="Navbar-overlay-header">
            <Link href="/" className="Navbar-overlay-logo">
              <Image src="/diqrawhite.webp" alt="DIQRA logo" width={110} height={25} priority />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="Navbar-close-btn"
            >
              <AnimatedText>CLOSE</AnimatedText>
            </button>
          </div>

          <div className="Navbar-overlay-content">
            <nav className="Navbar-overlay-nav">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="Navbar-overlay-nav-item"
              >
                <AnimatedText>HOME</AnimatedText>
              </Link>
              <Link
                href="/works"
                onClick={() => setIsMenuOpen(false)}
                className="Navbar-overlay-nav-item"
              >
                <AnimatedText>WORKS</AnimatedText>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="Navbar-overlay-nav-item"
              >
                <AnimatedText>ABOUT</AnimatedText>
              </Link>
              <Link
                href="/process"
                onClick={() => setIsMenuOpen(false)}
                className="Navbar-overlay-nav-item"
              >
                <AnimatedText>PROCESS</AnimatedText>
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="Navbar-overlay-nav-item"
              >
                <AnimatedText>GALLERY</AnimatedText>
              </Link>
            </nav>

            <div className="Navbar-overlay-footer">
              <a href="https://www.instagram.com/diqraarchitects/" target="_blank" rel="noopener noreferrer" className="Navbar-overlay-footer-link">
                <AnimatedText>INSTAGRAM</AnimatedText>
              </a>
              <Link href="#" className="Navbar-overlay-footer-link">
                <AnimatedText>PRIVACY POLICY</AnimatedText>
              </Link>
              <Link href="#" className="Navbar-overlay-footer-link">
                <AnimatedText>TERMS OF SERVICE</AnimatedText>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
