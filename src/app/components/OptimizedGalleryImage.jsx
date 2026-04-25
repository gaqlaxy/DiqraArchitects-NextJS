"use client";
import React from "react";
import Image from "next/image";

export default function OptimizedGalleryImage({ full, blur, alt }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#111",
      }}
    >
      <Image
        src={full}
        alt={alt}
        fill
        draggable={false}
        style={{
          objectFit: "cover",
        }}
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />
    </div>
  );
}
