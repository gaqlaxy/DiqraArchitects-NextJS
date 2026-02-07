"use client";
import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceClient({ data }) {
  const container = useRef(null);
  const serviceNumber = useMemo(() => {
    const slug = data?.slug ?? "";
    if (!slug) return 1;
    let hash = 0;
    for (let i = 0; i < slug.length; i += 1) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    return (Math.abs(hash) % 9) + 1;
  }, [data?.slug]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Line Drawing Animation (Architectural feel)
      gsap.utils.toArray(".anim-line").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
          },
        });
      });

      // 2. Text Reveal (Slide Up)
      gsap.utils.toArray(".reveal-text").forEach((text) => {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          },
        });
      });

      // 3. Image Parallax inside Container
      gsap.to(".hero-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [data]);

  return (
    <div
      ref={container}
      className="bg-[#F3F3F3] text-black min-h-screen selection:bg-black selection:text-white"
    >
      {/* FLOATING CONTACT (Minimal) */}
      <div className="fixed bottom-8 right-8 z-50 mix-blend-difference text-white">
        <Link
          href="/contact"
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:underline decoration-1 underline-offset-4"
        >
          Start Project <ArrowRight size={16} />
        </Link>
      </div>

      {/* --- HEADER / HERO SECTION --- */}
      <header className="pt-32 pb-10 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8">
          {/* Breadcrumb / Meta */}
          <div className="md:col-span-12 mb-4">
            <span className="block anim-line h-[1px] w-full bg-black/10 mb-6"></span>
            <div className="flex justify-between items-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
              <span>( Service 0{serviceNumber} )</span>
              <span>{data.slug}</span>
              <span>Chengalpattu, IN</span>
            </div>
          </div>

          {/* Huge Title */}
          <div className="md:col-span-9">
            <h1 className="text-6xl md:text-[7rem] leading-[0.85] font-light tracking-tight uppercase reveal-text">
              {data.title}
            </h1>
          </div>

          {/* Tagline / Intro */}
          <div className="md:col-span-3 flex flex-col justify-end pb-2">
            <p className="text-sm md:text-base leading-relaxed font-medium text-neutral-600 reveal-text">
              {data.tagline}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              Available Now
            </div>
          </div>
        </div>
      </header>

      {/* --- HERO IMAGE (Architectural Crop) --- */}
      <section className="px-6 md:px-12 pb-20 max-w-[1800px] mx-auto">
        <div className="hero-container relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-neutral-200">
          <Image
            src={data.image}
            alt={data.title}
            fill
            priority={false}
            className="hero-img object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </section>

      {/* --- CONTENT GRID (Editorial Layout) --- */}
      <section className="px-6 md:px-12 py-20 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left: Sticky Context */}
          <div className="md:col-span-4 relative">
            <div className="sticky top-12">
              <h2 className="text-2xl font-light mb-8 reveal-text">Overview</h2>
              <div className="anim-line h-[1px] w-12 bg-black mb-8"></div>

              {/* Stats Minimal */}
              <div className="grid grid-cols-2 gap-8">
                {data.stats.map((stat, i) => (
                  <div key={i} className="reveal-text">
                    <span className="block text-4xl font-light">
                      {stat.value}
                    </span>
                    <span className="text-xs text-neutral-400 uppercase tracking-widest">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Detailed Content (SEO Rich) */}
          <div className="md:col-span-8 md:pl-12 border-l border-black/5">
            <p className="text-2xl md:text-4xl font-light leading-snug mb-12 reveal-text">
              {data.description}
            </p>

            {data.longDescription && (
              <div className="text-neutral-600 text-lg leading-relaxed max-w-2xl mb-16 reveal-text space-y-6">
                <p>{data.longDescription}</p>
                <p>
                  We approach every {data.title.toLowerCase()} project with a
                  focus on longevity, sustainability, and aesthetic precision.
                </p>
              </div>
            )}

            {/* Minimal Accordion / List for Features */}
            <div className="space-y-0">
              <h3 className="text-xs font-mono uppercase text-neutral-400 mb-6 tracking-widest">
                Key Features
              </h3>
              {data.features.map((feature, i) => (
                <div
                  key={i}
                  className="group border-t border-black/10 py-8 transition-all hover:bg-white hover:px-6 -mx-6 px-6 cursor-default"
                >
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-neutral-300">
                        0{i + 1}
                      </span>
                      <h4 className="text-xl font-medium group-hover:translate-x-2 transition-transform">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-neutral-500 text-sm max-w-xs text-right opacity-0 group-hover:opacity-100 transition-opacity">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
              <div className="border-t border-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS (Horizontal Steps) --- */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-black/5">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight reveal-text">
              The Process
            </h2>
            <ArrowDownRight
              size={40}
              strokeWidth={1}
              className="text-neutral-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
            {data.process.map((step, i) => (
              <div
                key={i}
                className="bg-white p-10 h-full flex flex-col justify-between hover:bg-neutral-50 transition-colors"
              >
                <div>
                  <span className="block text-xs font-mono text-neutral-400 mb-6">
                    STEP {step.step}
                  </span>
                  <h3 className="text-2xl font-normal mb-4">{step.name}</h3>
                </div>
                <p className="text-neutral-500 text-sm leading-relaxed mt-12">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ & FOOTER (Clean) --- */}
      <section className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Simple FAQ */}
          <div>
            <h3 className="text-lg font-medium mb-8">Frequently Asked</h3>
            <div className="space-y-6">
              {data.faq &&
                data.faq.map((q, i) => (
                  <div key={i} className="pb-6 border-b border-black/5">
                    <h4 className="text-lg font-light mb-2">{q.q}</h4>
                    <p className="text-neutral-500 text-sm">{q.a}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Minimal CTA */}
          <div className="flex flex-col justify-center items-start md:pl-20">
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter mb-8 leading-[0.9]">
              Ready to <br />
              <span className="italic font-serif">begin?</span>
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 text-xl border-b border-black pb-1 hover:pb-2 transition-all"
            >
              Book Consultation{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
