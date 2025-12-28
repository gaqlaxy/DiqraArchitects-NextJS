import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedText = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const originalRef = useRef(null);
  const hoverRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const slideDistance = originalRef.current.offsetHeight || 32;
    
    // Initial States
    gsap.set(hoverRef.current, { y: "100%" });

    // Create Timeline
    const tl = gsap.timeline({ paused: true });
    
    tl.to(originalRef.current, {
      y: `-${slideDistance}px`,
      duration: 0.4,
      ease: "power2.inOut",
    })
    .to(hoverRef.current, {
      y: 0,
      duration: 0.4,
      ease: "power2.inOut",
    }, 0);

    tlRef.current = tl;

    // Event Listeners
    const el = containerRef.current;
    const onEnter = () => tl.play();
    const onLeave = () => tl.reverse();

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden block ${className}`} style={{ height: 'auto' }}>
      <span ref={originalRef} className="block relative">
        {children}
      </span>
      <span ref={hoverRef} className="absolute top-0 left-0 w-full block">
        {children}
      </span>
    </div>
  );
};

export default AnimatedText;