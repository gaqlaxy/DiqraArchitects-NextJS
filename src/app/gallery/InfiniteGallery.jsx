"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import OptimizedGalleryImage from "@/app/components/OptimizedGalleryImage";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");
const PRELOAD_DISTANCE = 6;
const TOTAL_IMAGES = 59;

const optimizedGalleryImages = Array.from({ length: TOTAL_IMAGES }, (_, i) => ({
  full: `/images/gallery/${i + 1}.webp`,
  blur: `/blur/gallery/${i + 1}.jpg`,
}));

const items = [
  "Chromatic Loopscape",
  "Solar Bloom",
  "Neon Handscape",
  "Echo Discs",
  "Void Gaze",
  "Gravity Sync",
  "Heat Core",
  "Fractal Mirage",
  "Nova Pulse",
  "Sonic Horizon",
  "Dream Circuit",
  "Lunar Mesh",
  "Radiant Dusk",
  "Pixel Drift",
  "Vortex Bloom",
  "Shadow Static",
  "Crimson Phase",
  "Retro Cascade",
  "Photon Fold",
  "Zenith Flow",
];

const imageUrls = [
  "https://cdn.cosmos.so/0f164449-f65e-4584-9d62-a9b3e1f4a90a?format=jpeg",
  "https://cdn.cosmos.so/74ccf6cc-7672-4deb-ba13-1727b7dc6146?format=jpeg",
  "https://cdn.cosmos.so/2f49a117-05e7-4ae9-9e95-b9917f970adb?format=jpeg",
  "https://cdn.cosmos.so/7b5340f5-b4dc-4c08-8495-c507fa81480b?format=jpeg",
  "https://cdn.cosmos.so/f733585a-081e-48e7-a30e-e636446f2168?format=jpeg",
  "https://cdn.cosmos.so/47caf8a0-f456-41c5-98ea-6d0476315731?format=jpeg",
  "https://cdn.cosmos.so/f99f8445-6a19-4a9a-9de3-ac382acc1a3f?format=jpeg",
];

// pulled out of component to avoid re-creating every render
const SETTINGS = {
  baseWidth: 400,
  smallHeight: 330,
  largeHeight: 500,
  itemGap: 65,
  hoverScale: 1.05,
  expandedScale: 0.4,
  dragEase: 0.075,
  momentumFactor: 200,
  bufferZone: 3,
  borderRadius: 0,
  vignetteSize: 0,
  vignetteStrength: 0.7,
  pageVignetteSize: 200,
  overlayOpacity: 0.9,
  overlayEaseDuration: 0.8,
  zoomDuration: 0.6,
};

const InfiniteGallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedData, setExpandedData] = useState(null);

  // viewport width for SSR-safe usage of window
  const [viewportWidth, setViewportWidth] = useState(0);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const titleRef = useRef(null);
  const expandedItemRef = useRef(null);

  // visible items now stored in a ref to avoid heavy state updates in RAF
  const visibleItemsRef = useRef(new Map());
  const [, forceRender] = useState(0); // only used to re-render when visible items change

  const positionRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
  });

  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    velocityX: 0,
    velocityY: 0,
    hasMoved: false,
  });

  const stateRef = useRef({
    canDrag: true,
    lastUpdateTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const columns = 4;
  const cellWidth = SETTINGS.baseWidth + SETTINGS.itemGap;
  const cellHeight =
    Math.max(SETTINGS.smallHeight, SETTINGS.largeHeight) + SETTINGS.itemGap;

  const getItemSize = (row, col) => {
    const sizeIndex = Math.abs((row * columns + col) % 2);
    return sizeIndex === 0
      ? { width: SETTINGS.baseWidth, height: SETTINGS.smallHeight }
      : { width: SETTINGS.baseWidth, height: SETTINGS.largeHeight };
  };

  const getItemPosition = (col, row) => ({
    x: col * cellWidth,
    y: row * cellHeight,
  });

  const updateVisibleItems = useCallback(() => {
    const buffer = SETTINGS.bufferZone;
    const viewWidth = window.innerWidth * (1 + buffer);
    const viewHeight = window.innerHeight * (1 + buffer);

    const { currentX, currentY } = positionRef.current;
    const startCol = Math.floor((-currentX - viewWidth / 2) / cellWidth);
    const endCol = Math.ceil((-currentX + viewWidth * 1.5) / cellWidth);
    const startRow = Math.floor((-currentY - viewHeight / 2) / cellHeight);
    const endRow = Math.ceil((-currentY + viewHeight * 1.5) / cellHeight);

    const newItems = new Map();

    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        const itemId = `${col},${row}`;
        const itemNum = Math.abs((row * columns + col) % items.length);
        const itemSize = getItemSize(row, col);
        const position = getItemPosition(col, row);

        newItems.set(itemId, {
          id: itemId,
          col,
          row,
          itemNum,
          size: itemSize,
          position,
          title: items[itemNum],
          // image: imageUrls[itemNum % imageUrls.length],
          image:
            optimizedGalleryImages[itemNum % optimizedGalleryImages.length]
              .full,
          blur: optimizedGalleryImages[itemNum % optimizedGalleryImages.length]
            .blur,
          number: `#${(itemNum + 1).toString().padStart(5, "0")}`,
        });
      }
    }

    visibleItemsRef.current = newItems;
    Array.from(newItems.values())
      .slice(0, PRELOAD_DISTANCE)
      .forEach((item) => {
        const img = new Image();
        img.src =
          optimizedGalleryImages[
            item.itemNum % optimizedGalleryImages.length
          ].full;
      });
    // trigger a lightweight re-render only when items set changes
    forceRender((n) => n + 1);
  }, [cellWidth, cellHeight]);

  const handleItemClick = (itemData) => {
    if (dragRef.current.hasMoved || dragRef.current.isDragging) return;

    if (isExpanded) {
      closeExpandedItem();
    } else {
      expandItem(itemData);
    }
  };

  const expandItem = (itemData) => {
    setIsExpanded(true);
    stateRef.current.canDrag = false;

    const itemElement = document.getElementById(
      `GallerySectionitem-${itemData.id}`
    );
    if (!itemElement) return;

    const rect = itemElement.getBoundingClientRect();

    setExpandedData({
      ...itemData,
      rect,
      originalRect: rect,
    });

    gsap.to(overlayRef.current, {
      opacity: SETTINGS.overlayOpacity,
      duration: SETTINGS.overlayEaseDuration,
      ease: "power2.inOut",
    });

    // Animate title
    if (titleRef.current) {
      titleRef.current.textContent = itemData.title;
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );
    }

    // Fade out other items
    document.querySelectorAll(".GallerySectionitem").forEach((el) => {
      if (el.id !== `GallerySectionitem-${itemData.id}`) {
        gsap.to(el, { opacity: 0, duration: SETTINGS.overlayEaseDuration });
      }
    });
  };

  const closeExpandedItem = () => {
    setIsExpanded(false);
    stateRef.current.canDrag = true;

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: SETTINGS.overlayEaseDuration,
      ease: "power2.inOut",
    });

    if (titleRef.current) {
      gsap.to(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Fade in other items
    document.querySelectorAll(".GallerySectionitem").forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        duration: SETTINGS.overlayEaseDuration,
        delay: 0.3,
      });
    });

    setTimeout(() => setExpandedData(null), SETTINGS.zoomDuration * 1000);
  };

  const animate = useCallback(() => {
    if (stateRef.current.canDrag) {
      const ease = SETTINGS.dragEase;
      positionRef.current.currentX +=
        (positionRef.current.targetX - positionRef.current.currentX) * ease;
      positionRef.current.currentY +=
        (positionRef.current.targetY - positionRef.current.currentY) * ease;

      if (canvasRef.current) {
        canvasRef.current.style.transform = `translate(${positionRef.current.currentX}px, ${positionRef.current.currentY}px)`;
      }

      const now = Date.now();
      const distMoved = Math.sqrt(
        Math.pow(positionRef.current.currentX - stateRef.current.lastX, 2) +
          Math.pow(positionRef.current.currentY - stateRef.current.lastY, 2)
      );

      // Throttled update to avoid too many re-renders
      if (distMoved > 100 || now - stateRef.current.lastUpdateTime > 180) {
        updateVisibleItems();
        stateRef.current.lastX = positionRef.current.currentX;
        stateRef.current.lastY = positionRef.current.currentY;
        stateRef.current.lastUpdateTime = now;
      }
    }
    requestAnimationFrame(animate);
  }, [updateVisibleItems]);

  const handleMouseDown = (e) => {
    if (!stateRef.current.canDrag) return;
    dragRef.current.isDragging = true;
    dragRef.current.hasMoved = false;
    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseMove = (e) => {
    if (!dragRef.current.isDragging || !stateRef.current.canDrag) return;

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      dragRef.current.hasMoved = true;
    }

    positionRef.current.targetX += dx;
    positionRef.current.targetY += dy;

    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
  };

  const handleMouseUp = () => {
    dragRef.current.isDragging = false;
  };

  // Touch handlers for mobile support
  const handleTouchStart = (e) => {
    if (!stateRef.current.canDrag) return;
    const touch = e.touches[0];
    if (!touch) return;
    dragRef.current.isDragging = true;
    dragRef.current.hasMoved = false;
    dragRef.current.startX = touch.clientX;
    dragRef.current.startY = touch.clientY;
  };

  const handleTouchMove = (e) => {
    if (!dragRef.current.isDragging || !stateRef.current.canDrag) return;
    const touch = e.touches[0];
    if (!touch) return;

    const dx = touch.clientX - dragRef.current.startX;
    const dy = touch.clientY - dragRef.current.startY;

    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      dragRef.current.hasMoved = true;
    }

    positionRef.current.targetX += dx;
    positionRef.current.targetY += dy;

    dragRef.current.startX = touch.clientX;
    dragRef.current.startY = touch.clientY;
  };

  const handleTouchEnd = () => {
    dragRef.current.isDragging = false;
  };

  useEffect(() => {
    // viewport width (SSR-safe)
    const updateViewport = () => {
      if (typeof window !== "undefined") {
        setViewportWidth(window.innerWidth);
      }
    };
    updateViewport();
    window.addEventListener("resize", updateViewport);

    updateVisibleItems();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", updateVisibleItems);
      window.removeEventListener("resize", updateViewport);
      // NOTE: animate loop is still running; if you want, we can refactor to store RAF id and cancel it here.
    };
  }, [animate, updateVisibleItems]);

  const visibleItems = Array.from(visibleItemsRef.current.values());

  return (
    <>
      <style>{`
        @import url("https://fonts.cdnfonts.com/css/thegoodmonolith");
        @font-face {
          src: url("https://fonts.cdnfonts.com/css/pp-neue-montreal") format("woff2");
          font-family: "PP Neue Montreal", sans-serif;
          font-weight: 400;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
        }

        body {
          font-family: "PP Neue Montreal", sans-serif;
          background-color: #000000;
          color: #ffffff;
          overflow: hidden;
        }

        body::before {
          content: "";
          position: fixed;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: transparent url("http://assets.iceable.com/img/noise-transparent.png") repeat 0 0;
          background-size: 300px 300px;
          animation: noise-animation 0.3s steps(5) infinite;
          opacity: 0.9;
          z-index: 100;
          pointer-events: none;
        }

        @keyframes noise-animation {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(-4%, 2%); }
          30% { transform: translate(2%, -4%); }
          40% { transform: translate(-2%, 5%); }
          50% { transform: translate(-4%, 2%); }
          60% { transform: translate(3%, 0); }
          70% { transform: translate(0, 3%); }
          80% { transform: translate(-3%, 0); }
          90% { transform: translate(2%, 2%); }
          100% { transform: translate(1%, 0); }
        }

        .GallerySectionheader, .GallerySectionfooter {
          position: absolute;
          left: 0;
          width: 100vw;
          padding: 1.5rem;
          z-index: 10000;
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          column-gap: 1rem;
        }

        .GallerySectionheader { top: 0; }
        .GallerySectionfooter { bottom: 0; }

        .GallerySectionnav-section { grid-column: 1 / span 3; }
        .GallerySectionvalues-section { grid-column: 5 / span 2; }
        .GallerySectionlocation-section { grid-column: 7 / span 2; }
        .GallerySectioncontact-section { grid-column: 9 / span 2; }
        .GallerySectionsocial-section { grid-column: 11 / span 2; text-align: right; }
        .GallerySectioncoordinates-section { grid-column: 1 / span 3; }
        .GallerySectionlinks-section { grid-column: 5 / span 4; text-align: center; display: flex; justify-content: center; align-items: center; gap: 1rem; }
        .GallerySectioninfo-section { grid-column: 9 / span 4; text-align: right; }

        .GallerySectionlogo-container {
          margin-bottom: 1.5rem;
          display: block;
          width: 3rem;
          height: 1.5rem;
          position: relative;
        }

        .GallerySectionlogo-circles {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .GallerySectioncircle {
          position: absolute;
          border-radius: 50%;
          transition: transform 0.3s ease;
          width: 1.4rem;
          height: 1.4rem;
          background-color: #ffffff;
          top: 50%;
        }

        .GallerySectioncircle-1 {
          left: 0;
          transform: translate(0, -50%);
        }

        .GallerySectioncircle-2 {
          left: 0.8rem;
          transform: translate(0, -50%);
          mix-blend-mode: exclusion;
        }

        
        .GallerySectionkey-hint {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          border: 1px solid #ffffff;
          border-radius: 3px;
          font-size: 12px;
          margin: 0 3px;
          min-width: 20px;
          height: 20px;
        }

        h3 {
          font-size: 14px;
          margin-bottom: 1rem;
          font-weight: 600;
          color: #ffffff;
        }

        p {
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: -0.01rem;
        }

        ul {
          list-style: none;
        }

        a {
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #888;
        }

        .GallerySectioncontainer {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          cursor: grab;
          touch-action: none; /* important for mobile dragging */
        }

        .GallerySectioncontainer:active {
          cursor: grabbing;
        }

        .GallerySectioncanvas {
          position: absolute;
          will-change: transform;
        }

        .GallerySectionitem {
          position: absolute;
          overflow: hidden;
          background-color: #000000;
          cursor: pointer;
          border-radius: ${SETTINGS.borderRadius}px;
        }

        .GallerySectionitem-image-container {
          width: 100%;
          height: 100%;
          overflow: hidden;
          position: relative;
        }

        .GallerySectionitem img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
          transition: transform 0.3s ease;
        }

       

        .GallerySectionitem-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px;
          z-index: 2;
        }

        .GallerySectionitem-name {
          font-family: "PP Neue Montreal", sans-serif;
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: -0.03em;
          margin-bottom: 2px;
        }

        .GallerySectionitem-number {
          font-family: "TheGoodMonolith", monospace;
          color: #888888;
          font-size: 10px;
          font-weight: 400;
        }

        .GallerySectionproject-title {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          pointer-events: none;
          z-index: 10002;
        }

        .GallerySectionproject-title p {
          font-size: 36px;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          color: #ffffff;
        }

        .GallerySectionexpanded-item {
          position: fixed;
          z-index: 10000;
          top: 50%;
          left: 50%;
          background-color: #000000;
          overflow: hidden;
          cursor: pointer;
          border-radius: ${SETTINGS.borderRadius}px;
        }

        .GallerySectionexpanded-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .GallerySectionoverlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #000000;
          pointer-events: none;
          opacity: 0;
          z-index: 9999;
        }

        .GallerySectionoverlay.active {
          pointer-events: auto;
        }

        .GallerySectionpage-vignette-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9998;
        }

        .GallerySectionpage-vignette {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          box-shadow: inset 0 0 ${
            SETTINGS.pageVignetteSize * 1.5
          }px rgba(0, 0, 0, ${SETTINGS.vignetteStrength * 0.7});
        }

        /* small tweak so footer hint doesn't feel huge on mobile */
        @media (max-width: 768px) {
          .GallerySectionfooter {
            padding: 1rem;
          }
          .GallerySectionlinks-section p {
            font-size: 12px;
          }
        }
      `}</style>

      <div className="GallerySectionfooter">
        <div className="GallerySectionlinks-section">
          <p>Drag to explore the gallery</p>
        </div>
      </div>

      <div
        className="GallerySectioncontainer"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="GallerySectioncanvas" ref={canvasRef}>
          {visibleItems.map((item) => (
            <div
              key={item.id}
              id={`GallerySectionitem-${item.id}`}
              className="GallerySectionitem"
              style={{
                width: `${item.size.width}px`,
                height: `${item.size.height}px`,
                left: `${item.position.x}px`,
                top: `${item.position.y}px`,
              }}
              onClick={() => handleItemClick(item)}
            >
              <div className="GallerySectionitem-image-container">
                {/* <img src={item.image} alt={item.title} /> */}
                <OptimizedGalleryImage
                  full={item.image}
                  blur={item.blur}
                  alt={item.title}
                />
              </div>
              <div className="GallerySectionitem-caption">
                <div className="GallerySectionitem-name">{item.title}</div>
                <div className="GallerySectionitem-number">{item.number}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`GallerySectionoverlay ${isExpanded ? "active" : ""}`}
          ref={overlayRef}
          onClick={closeExpandedItem}
        ></div>
      </div>

      <div className="GallerySectionproject-title">
        <p ref={titleRef}></p>
      </div>

      {expandedData && viewportWidth > 0 && (
        <div
          className="GallerySectionexpanded-item"
          ref={expandedItemRef}
          onClick={closeExpandedItem}
          style={{
            width: `${viewportWidth * SETTINGS.expandedScale}px`,
            height: `${
              viewportWidth *
              SETTINGS.expandedScale *
              (expandedData.size.height / expandedData.size.width)
            }px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img src={expandedData.image} alt={expandedData.title} />
        </div>
      )}

      <div className="GallerySectionpage-vignette-container">
        <div className="GallerySectionpage-vignette"></div>
      </div>
    </>
  );
};

export default InfiniteGallery;
