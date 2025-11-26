// "use client";
// import { useState } from "react";

// export default function OptimizedGalleryImage({ full, blur, alt }) {
//   const [loaded, setLoaded] = useState(false);

//   return (
//     <div style={{ width: "100%", height: "100%", position: "relative" }}>
//       {/* Blur Placeholder */}
//       <img
//         src={blur}
//         alt=""
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           filter: "blur(20px)",
//           transform: "scale(1.1)",
//           opacity: loaded ? 0 : 1,
//           transition: "opacity 0.5s ease-out",
//         }}
//       />

//       {/* Full Resolution Image */}
//       <img
//         src={full}
//         alt={alt}
//         draggable="false"
//         onLoad={() => setLoaded(true)}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: "cover",
//           opacity: loaded ? 1 : 0,
//           transition: "opacity 0.7s ease-out",
//         }}
//       />
//     </div>
//   );
// }

"use client";
import { useState, useRef, useEffect } from "react";

export default function OptimizedGalleryImage({ full, blur, alt }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect(); // stop observing once loaded
          }
        });
      },
      {
        rootMargin: "300px", // preload slightly before visible
      }
    );

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imgRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#111",
      }}
    >
      {/* Blur Placeholder */}
      <img
        src={blur}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(20px)",
          transform: "scale(1.1)",
          opacity: shouldLoad ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      />

      {/* Only load FULL image when in view */}
      {shouldLoad && (
        <img
          src={full}
          alt={alt}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 1,
            transition: "opacity 0.7s ease-out",
          }}
        />
      )}
    </div>
  );
}
