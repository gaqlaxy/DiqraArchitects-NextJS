export function defaultTransition(gsap, ease = "power3.inOut") {
  return function runDefaultTransition(currentContainer, nextContainer) {
    gsap.set(nextContainer, {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 1,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: 10,
    });

    const timeline = gsap.timeline();

    timeline
      .to(
        currentContainer,
        {
          y: "-30vh",
          opacity: 0.4,
          scale: 0.8,
          duration: 0.7,
          force3D: true,
          ease,
        },
        0,
      )
      .to(
        nextContainer,
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.7,
          force3D: true,
          ease,
        },
        0,
      );

    return timeline;
  };
}
