"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Testimonials.css";

const testimonialsData = [
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
    category: '"Architecture Insights"',
    text: "Their landscape design team is incredibly talented and brought my backyard vision to life in ways I never thought possible. Thank you for creating a beautiful sanctuary for me to enjoy!",
    author: "Darlene Robertson",
    location: "Texas, USA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=800&fit=crop",
    category: '"Urban Living"',
    text: "Their team's expertise, creativity, and commitment to quality were evident every step of the way. The end result is a stunning space that has exceeded our expectations. Thank you!",
    author: "Cameron Williamson",
    location: "Georgia, USA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
    category: '"Modern Design"',
    text: "Working with this team was an absolute pleasure. They transformed our space into something we only dreamed of. Their attention to detail and professionalism is unmatched!",
    author: "Robert Fox",
    location: "California, USA",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=800&fit=crop",
    category: '"Sustainable Living"',
    text: "From concept to completion, the entire process was seamless. They listened to our needs and delivered beyond our expectations. Highly recommend their services!",
    author: "Jenny Wilson",
    location: "Florida, USA",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="testimonials-testimonials-section">
      {/* Header with title and buttons */}
      <div className="testimonials-section-header">
        <div className="testimonials-section-title">
          <div className="testimonials-section-label">TESTIMONIALS</div>
          <h1>Clients Review</h1>
        </div>

        <div className="testimonials-carousel-controls">
          <button
            className="testimonials-carousel-btn"
            ref={prevRef}
            aria-label="Previous"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="testimonials-carousel-btn"
            ref={nextRef}
            aria-label="Next"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          0: { slidesPerView: 1 },
          968: { slidesPerView: 2 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        speed={600}
        grabCursor={true}
        className="testimonials-carousel-container"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonials-testimonial-card">
              <div
                className="testimonials-card-image"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="testimonials-card-content">
                <div className="testimonials-card-category">
                  {item.category}
                </div>
                <div className="testimonials-card-text">{item.text}</div>
                <div className="testimonials-card-author">{item.author}</div>
                <div className="testimonials-card-location">
                  {item.location}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
