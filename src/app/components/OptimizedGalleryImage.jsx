"use client";
import { useState } from "react";

export default function OptimizedGalleryImage({ full, blur, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Blur Placeholder */}
      <img
        src={blur}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(20px)",
          transform: "scale(1.1)",
          opacity: loaded ? 0 : 1,
          transition: "opacity 0.5s ease-out",
        }}
      />

      {/* Full Resolution Image */}
      <img
        src={full}
        alt={alt}
        draggable="false"
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.7s ease-out",
        }}
      />
    </div>
  );
}
