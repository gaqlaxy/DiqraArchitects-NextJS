import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Flexible scroll animation hook that works with any component structure
 * @param {Object} config - Animation configuration
 * @param {string} config.trigger - CSS selector or ref for trigger element
 * @param {string} config.start - ScrollTrigger start position (default: "top 70%")
 * @param {Array} config.animations - Array of animation configs
 *
 * Animation config structure:
 * {
 *   selector: string | ref,  // CSS selector or ref to animate
 *   from: object,            // Starting properties (optional)
 *   to: object,              // Ending properties
 *   delay: number,           // Delay from previous (use negative to overlap)
 *   stagger: number,         // Stagger for multiple elements
 * }
 */
export const useScrollAnimation = (config = {}) => {
  const { start = "top 70%", animations = [], markers = false } = config;

  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || animations.length === 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: start,
          markers: markers, // For debugging
        },
      });

      animations.forEach((anim, index) => {
        const {
          selector,
          from,
          to,
          delay = index === 0 ? 0 : "-=0.6",
          stagger = 0,
        } = anim;

        // Get elements to animate
        const elements =
          typeof selector === "string"
            ? containerRef.current.querySelectorAll(selector)
            : selector?.current;

        if (!elements) return;

        // Set initial state if 'from' is provided
        if (from) {
          gsap.set(elements, from);
        }

        // Add animation to timeline
        tl.to(
          elements,
          {
            ...to,
            stagger: stagger,
          },
          delay
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [start, animations, markers]);

  return { containerRef };
};

/**
 * Pre-configured animation presets for common patterns
 */
export const animationPresets = {
  fadeInUp: {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  },

  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 1, ease: "power2.out" },
  },

  slideInLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
  },

  slideInRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power3.out" },
  },

  scaleIn: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
  },

  slideUpMasked: {
    from: { y: "100%" },
    to: { y: 0, duration: 1.2, ease: "power4.out" },
  },
};
