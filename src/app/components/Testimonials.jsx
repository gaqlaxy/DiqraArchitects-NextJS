"use client";
import React, { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Testimonials.css"; // Ensure this path matches your file structure

const testimonialsData = [
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    category: "Architecture Insights",
    text: "Their landscape design team is incredibly talented and brought my backyard vision to life in ways I never thought possible.",
    author: "Darlene Robertson",
    location: "Texas, USA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    category: "Urban Living",
    text: "Their team's expertise, creativity, and commitment to quality were evident every step of the way. The end result is a stunning space.",
    author: "Cameron Williamson",
    location: "Georgia, USA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    category: "Modern Design",
    text: "Working with this team was an absolute pleasure. They transformed our space into something we only dreamed of.",
    author: "Robert Fox",
    location: "California, USA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
    category: "Sustainable Living",
    text: "From concept to completion, the entire process was seamless. They listened to our needs and delivered beyond our expectations.",
    author: "Jenny Wilson",
    location: "Florida, USA",
  },
];

export default function Testimonials() {
  const sliderRef = useRef(null);
  
  // State to disable buttons at start/end
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Header */}
        <div className="testimonials-header">
          <div className="title-group">
            
            <h2 className="section-title">Client Reviews</h2>
          </div>

          <div className="carousel-controls">
            <button
              className="control-btn prev-btn"
              onClick={handlePrev}
              disabled={isBeginning}
              aria-label="Previous Slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className="control-btn next-btn"
              onClick={handleNext}
              disabled={isEnd}
              aria-label="Next Slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          ref={sliderRef}
          modules={[Navigation, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          speed={700}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1.2, spaceBetween: 30 }, // Peek next slide on tablet
            1024: { slidesPerView: 2, spaceBetween: 40 },
          }}
          className="testimonials-swiper"
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={index}>
              <article className="testimonial-card">
                <div
                  className="card-image"
                  role="img"
                  aria-label={`Photo of ${item.author}`}
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                
                <div className="card-content">
                  <span className="card-category">{item.category}</span>
                  <p className="card-text">"{item.text}"</p>
                  
                  <div className="card-footer">
                    <h4 className="card-author">{item.author}</h4>
                    <span className="card-location">{item.location}</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}