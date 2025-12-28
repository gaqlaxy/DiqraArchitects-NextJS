"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import "../styles/Navbar.css";

// --- 1. SAFE ANIMATED TEXT COMPONENT (Replaces innerHTML) ---
const AnimatedText = ({ children }) => {
  const containerRef = useRef(null);
  const originalRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !originalRef.current || !hoverRef.current) return;

    // Measure height
    const slideDistance = originalRef.current.offsetHeight || 30;

    // Reset GSAP states
    gsap.set(hoverRef.current, { y: "100%", opacity: 0 });
    gsap.set(originalRef.current, { y: 0, opacity: 1 });

    const tl = gsap.timeline({ paused: true });
    
    tl.to(originalRef.current, {
      y: `-${slideDistance}px`,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    }).to(
      hoverRef.current,
      {
        y: "0%",
        opacity: 1,
        duration: 0.4,
        ease: "power2.inOut",
      },
      0
    );

    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, [children]);

  return (
    <span ref={containerRef} className="navbar-text-wrapper">
      <span ref={originalRef} className="navbar-text-original">{children}</span>
      <span ref={hoverRef} className="navbar-text-hover" aria-hidden="true">{children}</span>
    </span>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlayRef = useRef(null);
  const pathname = usePathname();

  // --- LOGIC CONFIGURATION ---

  // 1. Theme Logic
  const isHomePage = pathname === "/";
  // If we are NOT on homepage, we use Dark Theme (Black text/logo)
  const isDarkTheme = !isHomePage; 

  // 2. Logo Scroll Logic
  // You want to hide the logo on scroll for ALL pages, EXCEPT Works and Gallery
  const isStickyLogoPage = ["/works", "/gallery"].includes(pathname);
  
  // Logic: Hide logo if (Scrolled > 200) AND (Not a Sticky Page)
  const shouldHideLogo = isScrolled && !isStickyLogoPage;

  // 3. Menu Button Logic
  // On Homepage: Menu button is hidden initially, shows on scroll.
  // On Inner Pages: Menu button is ALWAYS visible (because there are no center links).
  const isMenuButtonVisible = isHomePage ? isScrolled : true;

  // 4. Center Links Logic
  // Only show on Homepage, and hide when scrolled
  const areLinksVisible = isHomePage && !isScrolled;


  // --- SCROLL LISTENER ---
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- OVERLAY ANIMATION ---
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const ctx = gsap.context(() => {
      if (isMenuOpen) {
        document.body.style.overflow = "hidden";
        gsap.set(overlay, { display: "block" });
        gsap.fromTo(
          overlay,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power3.inOut" }
        );

        gsap.fromTo(
          ".Navbar-overlay-nav-item, .Navbar-overlay-footer-link",
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
      } else {
        document.body.style.overflow = "";
        gsap.to(overlay, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
          },
        });
      }
    });
    return () => ctx.revert();
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className={`Navbar ${isDarkTheme ? "Navbar-dark" : "Navbar-light"}`}
        role="navigation" 
        aria-label="Main Navigation"
      >
        <div className="Navbar-container">
          <div className="Navbar-content">
            
            {/* LOGO: Changes Src based on Theme */}
            <Link
              href="/"
              className={`Navbar-logo ${shouldHideLogo ? "Navbar-logo-hidden" : ""}`}
              aria-label="Homepage"
            >
              <img 
                src={isDarkTheme ? "/diqrablack.webp" : "/diqrawhite.webp"} 
                alt="Diqra Logo" 
              />
            </Link>

            {/* CENTER LINKS: Only on Homepage */}
            {isHomePage && (
              <div className={`Navbar-links ${areLinksVisible ? "" : "Navbar-links-hidden"}`}>
                <Link href="/works" className="Navbar-link"><AnimatedText>WORKS</AnimatedText></Link>
                <Link href="/about" className="Navbar-link"><AnimatedText>ABOUT</AnimatedText></Link>
                <Link href="/process" className="Navbar-link"><AnimatedText>PROCESS</AnimatedText></Link>
                <Link href="/gallery" className="Navbar-link"><AnimatedText>GALLERY</AnimatedText></Link>
              </div>
            )}

            {/* ACTIONS: Contact & Menu */}
            <div className="Navbar-actions">
              
              {/* Contact Button: Hides on scroll logic varies, but generally visible on Desktop */}
              <button 
                className={`Navbar-contact-btn ${isMenuButtonVisible ? "visible" : ""}`}
              >
                <Link href="/contact" tabIndex="-1">
                  <AnimatedText>GET IN TOUCH</AnimatedText>
                </Link>
                <span className="Navbar-contact-dot" aria-hidden="true" />
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`Navbar-menu-btn ${isMenuButtonVisible ? "visible" : ""}`}
                aria-label="Open Menu"
                aria-expanded={isMenuOpen}
              >
                <AnimatedText>MENU</AnimatedText>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY MENU (Common for all pages) */}
      <div
        className={`Navbar-overlay-menu ${isMenuOpen ? "Navbar-overlay-menu-open" : ""}`}
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
      >
        <div className="Navbar-overlay-container">
          <div className="Navbar-overlay-header">
            <Link href="/" className="Navbar-overlay-logo" onClick={() => setIsMenuOpen(false)}>
              <img src="/diqrawhite.webp" alt="Diqra Logo" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="Navbar-close-btn"
              aria-label="Close Menu"
            >
              <AnimatedText>CLOSE</AnimatedText>
            </button>
          </div>

          <div className="Navbar-overlay-content">
            <nav className="Navbar-overlay-nav">
              {["HOME", "WORKS", "ABOUT", "PROCESS", "GALLERY"].map((item) => (
                <Link
                  key={item}
                  href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="Navbar-overlay-nav-item"
                >
                  <AnimatedText>{item}</AnimatedText>
                </Link>
              ))}
            </nav>

            <div className="Navbar-overlay-footer">
              <Link href="/instagram" className="Navbar-overlay-footer-link"><AnimatedText>INSTAGRAM</AnimatedText></Link>
              <Link href="/privacy" className="Navbar-overlay-footer-link"><AnimatedText>PRIVACY POLICY</AnimatedText></Link>
              <Link href="/terms" className="Navbar-overlay-footer-link"><AnimatedText>TERMS OF SERVICE</AnimatedText></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;