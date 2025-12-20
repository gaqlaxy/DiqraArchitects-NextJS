// "use client";

// import { useState, useEffect } from "react";
// import Footer from "../components/Footer";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [activeFAQ, setActiveFAQ] = useState(null);

//   useEffect(() => {
//     const createSlideUpEffect = (element) => {
//       if (element.hasAttribute("data-gsap-initialized")) return null;

//       let span = element.querySelector("span");
//       if (!span) {
//         const originalText = element.textContent.trim();
//         element.innerHTML = `<span>${originalText}</span>`;
//         span = element.querySelector("span");
//       }

//       if (span.querySelector(".text-original, .text-hover")) {
//         element.setAttribute("data-gsap-initialized", "true");
//         return null;
//       }

//       const originalText = span.textContent;
//       span.innerHTML = `
//         <span class="text-original">${originalText}</span>
//         <span class="text-hover">${originalText}</span>
//       `;

//       const originalSpan = span.querySelector(".text-original");
//       const hoverSpan = span.querySelector(".text-hover");
//       const slideDistance = originalSpan.offsetHeight;

//       const styles = {
//         span: {
//           overflow: "hidden",
//           position: "relative",
//           display: "block",
//           height: `${slideDistance}px`,
//         },
//         originalSpan: {
//           transform: "translateY(0)",
//           position: "relative",
//           display: "block",
//           transition: "all 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
//         },
//         hoverSpan: {
//           transform: `translateY(${slideDistance}px)`,
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           display: "block",
//           transition: "all 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
//         },
//       };

//       Object.assign(span.style, styles.span);
//       Object.assign(originalSpan.style, styles.originalSpan);
//       Object.assign(hoverSpan.style, styles.hoverSpan);

//       element.setAttribute("data-gsap-initialized", "true");

//       const handleMouseEnter = () => {
//         originalSpan.style.transform = `translateY(-${slideDistance}px)`;
//         originalSpan.style.opacity = "0";
//         hoverSpan.style.transform = "translateY(0)";
//         hoverSpan.style.opacity = "1";
//       };

//       const handleMouseLeave = () => {
//         originalSpan.style.transform = "translateY(0)";
//         originalSpan.style.opacity = "1";
//         hoverSpan.style.transform = `translateY(${slideDistance}px)`;
//         hoverSpan.style.opacity = "0";
//       };

//       element.addEventListener("mouseenter", handleMouseEnter);
//       element.addEventListener("mouseleave", handleMouseLeave);

//       return { handleMouseEnter, handleMouseLeave };
//     };

//     setTimeout(() => {
//       const styledCtaBtns = document.querySelectorAll(".cta-btn-styled");
//       styledCtaBtns.forEach((btn) => {
//         createSlideUpEffect(btn);
//       });
//     }, 100);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for contacting us! We will get back to you soon.");
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const toggleFAQ = (index) => {
//     setActiveFAQ(activeFAQ === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What services does your company offer?",
//       answer:
//         "We offer comprehensive design services including interior design, architecture consultation, space planning, 3D visualization, and project management. Our team specializes in residential and commercial projects.",
//     },
//     {
//       question: "How long does a typical project take to complete?",
//       answer:
//         "Project timelines vary depending on scope and complexity. A typical residential project takes 8-12 weeks, while larger commercial projects may take 3-6 months. We provide detailed timelines during consultation.",
//     },
//     {
//       question: "Do you work with specific types of clients or projects?",
//       answer:
//         "We work with diverse clients including homeowners, businesses, developers, and institutions. Our portfolio includes residential homes, offices, retail spaces, restaurants, and hospitality venues.",
//     },
//     {
//       question: "Can I see examples of your past work?",
//       answer:
//         "Yes! Visit our Projects page to view our portfolio. We showcase completed projects across different categories. You can also schedule a consultation to see detailed case studies relevant to your project type.",
//     },
//     {
//       question: "What sets your company apart from others in the industry?",
//       answer:
//         "Our unique approach combines innovative design with sustainable practices. We prioritize client collaboration, attention to detail, and delivering projects on time and within budget. Our experienced team brings fresh perspectives to every project.",
//     },
//     {
//       question: "How can I get started with your services?",
//       answer:
//         "Getting started is easy! Fill out our contact form, give us a call, or book an appointment through our website. We'll schedule an initial consultation to discuss your vision, requirements, and next steps.",
//     },
//   ];
//   useEffect(() => {
//     scrollTo(0, 0);
//   }, []);
//   return (
//     <>
//       <style>{`

//             .contact-page-container {

//           max-width: 1400px;
//           margin: 0 auto;
//           padding: 100px 20px 60px 20px;
//         }

// .contact-page-title{

// margin-bottom: 40px;

// }

// h1 {
//   font-size: 120px;
//   font-weight: 400;
//   letter-spacing: -3px;
//   line-height: 0.9;

// }

//         .contact-section {
//           display: grid;
//           grid-template-columns: 500px 1fr;
//           gap: 80px;
//           margin-bottom: 100px;
//         }

//         .contact-image {
//           width: 100%;
//           height: 500px;
//           object-fit: cover;
//           border-radius: 8px;
//         }

//         .contact-info {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 40px;
//           padding-top: 20px;
//         }

//         .info-block h3 {
//           font-size: 18px;
//           font-weight: 600;
//           margin-bottom: 15px;
//           color: #000;
//         }

//         .info-block p {
//           color: #666;
//           font-size: 14px;
//           line-height: 1.8;
//           margin-bottom: 5px;
//         }

//         .info-block a {
//           color: #666;
//           text-decoration: none;
//           transition: color 0.3s;
//         }

//         .info-block a:hover {
//           color: #000;
//         }

//         .offices p {
//           margin-bottom: 20px;
//         }

//         .offices strong {
//           color: #000;
//           font-weight: 600;
//         }

//         .social-section {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//         }

//         .social-section span {
//           color: #666;
//           font-size: 14px;
//         }

//         .social-links {
//           display: flex;
//           gap: 15px;
//         }

//         .social-links a {
//           color: #333;
//           font-size: 18px;
//           text-decoration: none;
//           transition: color 0.3s;
//         }

//         .social-links a:hover {
//           color: #666;
//         }

//         .form-section {
//           display: grid;
//           grid-template-columns: 1.2fr 1fr;
//           gap: 60px;
//           margin-bottom: 100px;
//         }

//         .form-contact-page-container {
//           display: flex;
//           flex-direction: column;
//           gap: 45px;
//           padding-right: 20px;
//         }

//         .form-row {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 50px;
//         }

//         .form-group {
//           display: flex;
//           flex-direction: column;
//         }

//         .form-group label {
//           font-size: 14px;
//           color: #333;
//           margin-top: 20px;
//         }

//         .form-group input,
//         .form-group textarea {
//           padding: 16px 0;
//           border: none;
//           border-bottom: 1px solid #ddd;
//           background: transparent;
//           font-size: 15px;
//           font-family: inherit;
//           color: #333;
//           transition: border-color 0.3s;
//         }

//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-bottom-color: #333;
//         }

//         .form-group input::placeholder,
//         .form-group textarea::placeholder {
//           color: #bbb;
//         }

//         textarea {
//           resize: vertical;
//           min-height: 120px;
//         }

//         .form-footer {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: 10px;
//         }

//         .submit-btn {
//           display: inline-flex;
//           align-items: center;
//           text-transform: uppercase;
//           padding: 10px 18px;
//           background: #080807;
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 50px;
//           color: white;
//           text-decoration: none;
//           font-weight: 400;
//           font-size: 18px;
//           transition: all 0.3s ease;
//           overflow: hidden;
//           white-space: nowrap;
//           cursor: pointer;
//           position: relative;
//         }

//         .submit-btn span {
//           color: #fff;
//           display: block;
//           position: relative;
//           overflow: hidden;
//         }

//         .submit-btn .text-original,
//         .submit-btn .text-hover {
//           display: block;
//           line-height: 1;
//         }

//         .submit-btn::after {
//           content: "";
//           width: 8px;
//           height: 8px;
//           background: #fff;
//           border: 2px solid #000;
//           border-radius: 50%;
//           margin-left: 8px;
//           transition: all 0.3s ease;
//           box-sizing: border-box;
//         }

//         .submit-btn:hover::after {
//           background: #fff;
//           border-color: #fff;
//         }

//         .form-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 8px;
//         }

//         .faq-section {
//           margin-bottom: 100px;
//         }

//         .faq-header {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 30px;
//         }

//         .faq-icon {
//           width: 20px;
//           height: 20px;
//           background: #000;
//           border-radius: 50%;
//         }

//         .faq-header span {
//           font-size: 14px;
//           color: #666;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }

//         .faq-title {

//           margin-bottom: 40px;
//         }

//         .faq-content {
//           display: grid;
//           grid-template-columns: 380px 1fr;
//           gap: 80px;
//         }

//         .faq-image {
//           width: 100%;
//           height: 400px;
//           object-fit: cover;
//           border-radius: 8px;
//         }

//         .faq-list {
//           display: flex;
//           flex-direction: column;
//         }

//         .faq-item {
//           border-bottom: 1px solid #e5e5e5;
//           padding: 25px 0;
//         }

//         .faq-question {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           cursor: pointer;
//           user-select: none;
//         }

//         .faq-question-text {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//           font-size: 15px;
//           color: #333;
//         }

//         .faq-number {
//           color: #999;
//           font-size: 14px;
//           min-width: 15px;
//         }

//         .faq-toggle {
//           font-size: 20px;
//           color: #666;
//           transition: transform 0.3s;
//         }

//         .faq-item.active .faq-toggle {
//           transform: rotate(45deg);
//         }

//         .faq-answer {
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.3s ease;
//           padding-left: 35px;
//         }

//         .faq-answer p {
//           padding-top: 15px;
//           color: #666;
//           font-size: 14px;
//           line-height: 1.8;
//         }

//         @media (max-width: 1024px) {
//           .contact-section,
//           .form-section,
//           .faq-content {
//             grid-template-columns: 1fr;
//             gap: 40px;
//           }

//           .contact-image,
//           .faq-image {
//             height: 350px;
//           }
//         }

//         @media (max-width: 768px) {
//           .contact-page-container {
//             padding: 80px 20px;
//             margin-top: 80px;
//           }

//           .form-row {
//             grid-template-columns: 1fr;
//             gap: 20px;
//           }

//           .form-footer {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 20px;
//           }

//           .submit-btn {
//             align-self: flex-start;
//           }

//           .contact-section,
//           .form-section {
//             gap: 30px;
//           }
//         }

//         @media (max-width: 480px) {

//           .contact-image,
//           .faq-image {
//             height: 280px;
//           }

//           .info-block,
//           .faq-item {
//             padding: 20px 0;
//           }
//         }
//       `}</style>

//       <div className="contact-page-container">
//         <h1 className="contact-page-title">Get in Touch</h1>

//         <div className="contact-section">
//           <img
//             src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=700&fit=crop"
//             alt="Modern Building"
//             className="contact-image"
//           />

//           <div className="contact-info">
//             <div className="info-block">
//               <h3>Appointment</h3>
//               <p>
//                 Book your appointment with us to kickstart your
//                 <br />
//                 design journey.
//               </p>
//               <p style={{ marginTop: "15px" }}>Monday to Friday — 9AM - 5PM</p>
//               <p>Saturday & Sunday only 10AM to 12PM</p>
//             </div>

//             <div className="info-block">
//               <h3>Give Us a Call</h3>
//               <p>
//                 <a href="tel:+917871772428">(+91) 7871772428</a>
//               </p>
//             </div>

//             <div className="info-block">
//               <h3>Email Us</h3>
//               <p>
//                 <a href="mailto:support@example.com">
//                   info@diqraarchitects.com
//                 </a>
//               </p>
//             </div>

//             <div className="info-block offices">
//               <h3>Office</h3>

//               <p>
//                 <strong>Urapakkam</strong>
//                 <br />
//                 No. 534/2, 19th Street, Periyar nagar,
//                 <br />
//                 Urapakkam, Karanaipuducheri, Tamil Nadu 603202
//               </p>
//             </div>

//             <div className="social-section">
//               <span>Follow on us</span>
//               <div className="social-links">
//                 {/* <a href="#" aria-label="Twitter">
//                   𝕏
//                 </a> */}
//                 <a href="#" aria-label="Facebook">
//                   f
//                 </a>
//                 {/* <a href="#" aria-label="YouTube">
//                   ▶
//                 </a> */}
//                 <a href="#" aria-label="Instagram">
//                   📷
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="form-section">
//           <div className="form-contact-page-container">
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   placeholder="Enter your first name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   placeholder="Enter your last name"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="email">Email Address</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email address"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phone">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                 />
//               </div>
//             </div>

//             <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Type Message...."
//                 required
//               />
//             </div>

//             <div className="form-footer">
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="submit-btn cta-btn-styled"
//               >
//                 <span>Submit</span>
//               </button>
//             </div>
//           </div>

//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop"
//             alt="Modern Architecture"
//             className="form-image"
//           />
//         </div>

//         <div className="faq-section">
//           <h1 className="faq-title">FAQ</h1>

//           <div className="faq-content">
//             <img
//               src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop"
//               alt="Interior Design"
//               className="faq-image"
//             />

//             <div className="faq-list">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className={`faq-item ${activeFAQ === index ? "active" : ""}`}
//                 >
//                   <div
//                     className="faq-question"
//                     onClick={() => toggleFAQ(index)}
//                   >
//                     <div className="faq-question-text">
//                       <span className="faq-number">{index + 1}</span>
//                       <span>{faq.question}</span>
//                     </div>
//                     <span className="faq-toggle">+</span>
//                   </div>
//                   <div
//                     className="faq-answer"
//                     style={{ maxHeight: activeFAQ === index ? "200px" : "0" }}
//                   >
//                     <p>{faq.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// V22222222222222
"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [activeFAQ, setActiveFAQ] = useState(null);

  // --- 1. Smooth Scroll Setup ---
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureDirection: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // --- 2. GSAP Animations ---
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Title
      gsap.from(".reveal-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.2,
      });

      // Line drawing animations
      gsap.utils.toArray(".divider-line").forEach((line) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        });
      });

      // Form inputs stagger
      gsap.from(".form-group-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
        },
      });

      // Image Parallax
      gsap.to(".parallax-img", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // --- 3. Handlers ---
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    const btn = document.querySelector(".submit-text");
    const originalText = btn.innerText;
    btn.innerText = "Sending...";

    setTimeout(() => {
      alert("Blueprint received. We will be in touch.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      btn.innerText = originalText;
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // GSAP Powered FAQ Toggle
  const toggleFAQ = (index) => {
    if (activeFAQ === index) {
      // Close active
      gsap.to(`#faq-ans-${index}`, {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
      });
      gsap.to(`#faq-icon-${index}`, { rotation: 0, duration: 0.4 });
      setActiveFAQ(null);
    } else {
      // Close previous if exists
      if (activeFAQ !== null) {
        gsap.to(`#faq-ans-${activeFAQ}`, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(`#faq-icon-${activeFAQ}`, { rotation: 0, duration: 0.4 });
      }
      // Open new
      setActiveFAQ(index);
      // Small timeout to allow state to set before animating height to auto
      setTimeout(() => {
        gsap.fromTo(
          `#faq-ans-${index}`,
          { height: 0 },
          { height: "auto", duration: 0.4, ease: "power2.inOut" }
        );
        gsap.to(`#faq-icon-${index}`, { rotation: 45, duration: 0.4 });
      }, 10);
    }
  };

  const faqs = [
    {
      q: "Scope of Services",
      a: "We offer comprehensive design services including interior design, architecture consultation, space planning, 3D visualization, and project management.",
    },
    {
      q: "Project Timeline",
      a: "Residential projects typically take 8-12 weeks, while commercial ventures range from 3-6 months depending on complexity.",
    },
    {
      q: "Client Types",
      a: "We work with visionaries. From private homeowners to commercial developers and hospitality groups.",
    },
    {
      q: "Portfolio Access",
      a: "Our private case studies are available upon request during the initial consultation.",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&display=swap");

        :root {
          --arch-black: #111111;
          --arch-grey: #888888;
          --arch-light: #f4f4f4;
          --arch-white: #ffffff;
          --line-color: rgba(0, 0, 0, 0.1);
        }

        body {
          background-color: var(--arch-light);
          color: var(--arch-black);
          font-family: "Manrope", sans-serif;
          overflow-x: hidden;
        }

        /* UTILS */
        .divider-line {
          width: 100%;
          height: 1px;
          background: var(--line-color);
          margin: 0;
        }

        .container-arch {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* HEADER */
        .page-header {
          padding-top: 180px;
          padding-bottom: 80px;
        }

        .title-wrapper {
          overflow: hidden;
        }

        h1 {
          font-size: clamp(3rem, 9vw, 11rem);
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.03em;
          text-transform: uppercase;
          margin: 0;
        }

        /* MAIN GRID */
        .arch-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          padding-bottom: 150px;
          position: relative;
        }

        /* STICKY SIDEBAR */
        .sticky-info {
          position: sticky;
          top: 40px;
          height: fit-content;
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding-top: 20px;
        }

        .info-group h3 {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--arch-grey);
          margin-bottom: 20px;
          font-weight: 500;
        }

        .info-group p,
        .info-group a {
          font-size: 18px;
          line-height: 1.6;
          color: var(--arch-black);
          text-decoration: none;
          display: block;
          transition: opacity 0.3s;
        }

        .info-group a:hover {
          opacity: 0.6;
        }

        .social-row {
          display: flex;
          gap: 20px;
        }

        /* FORM SECTION */
        .form-section {
          padding-top: 20px;
        }

        .form-intro {
          font-size: clamp(1.5rem, 2.5vw, 3rem);
          font-weight: 300;
          margin-bottom: 80px;
          max-width: 90%;
          line-height: 1.2;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .form-group {
          position: relative;
          padding-bottom: 10px;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--arch-grey);
          margin-bottom: 10px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--line-color);
          padding: 15px 0;
          font-size: 20px;
          font-family: "Manrope", sans-serif;
          color: var(--arch-black);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: var(--arch-black);
          padding-left: 10px;
        }

        /* CUSTOM BUTTON */
        .submit-wrapper {
          margin-top: 60px;
          display: flex;
          justify-content: flex-start;
        }

        .arch-btn {
          background: var(--arch-black);
          color: #fff;
          border: none;
          padding: 25px 60px;
          border-radius: 4px;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .arch-btn:hover {
          transform: translateY(-2px);
        }

        /* FAQ SECTION */
        .faq-container {
          margin-top: 150px;
          border-top: 1px solid var(--line-color);
          padding-top: 80px;
        }

        .faq-item {
          border-bottom: 1px solid var(--line-color);
          padding: 30px 0;
          cursor: pointer;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-q-text {
          font-size: 24px;
          font-weight: 300;
        }

        .faq-answer {
          overflow: hidden;
          height: 0;
        }

        .faq-answer p {
          padding-top: 20px;
          font-size: 16px;
          color: var(--arch-grey);
          max-width: 600px;
          line-height: 1.8;
        }

        /* IMAGE DECORATION */
        .image-container {
          margin: 100px 0;
          height: 500px;
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .parallax-img {
          width: 100%;
          height: 140%;
          object-fit: cover;
          position: absolute;
          top: -20%;
        }

        @media (max-width: 1024px) {
          .arch-grid {
            grid-template-columns: 1fr;
          }
          .sticky-info {
            position: relative;
            flex-direction: row;
            flex-wrap: wrap;
            top: 0;
            margin-bottom: 60px;
          }
        }

        @media (max-width: 768px) {
          .input-grid {
            grid-template-columns: 1fr;
          }
          .page-header {
            padding-top: 120px;
          }
          h1 {
            font-size: 14vw;
          }
          .sticky-info {
            flex-direction: column;
            gap: 40px;
          }
        }
      `}</style>

      <div ref={containerRef} className="container-arch">
        {/* HEADER */}
        <header className="page-header">
          <div className="title-wrapper">
            <h1 className="reveal-text">Let's build</h1>
          </div>
          <div className="title-wrapper">
            <h1 className="reveal-text" style={{ paddingLeft: "5vw" }}>
              Something
            </h1>
          </div>
          <div className="title-wrapper">
            <h1 className="reveal-text">Concrete.</h1>
          </div>
        </header>

        <div className="divider-line"></div>

        {/* MAIN LAYOUT */}
        <div className="arch-grid">
          {/* LEFT SIDEBAR (Sticky) */}
          <aside className="sticky-info fade-in-section">
            <div className="info-group">
              <h3>Coordinates</h3>
              <p>No. 534/2, 19th Street</p>
              <p>Periyar Nagar, Urapakkam</p>
              <p>Tamil Nadu 603202</p>
            </div>

            <div className="info-group">
              <h3>Contact</h3>
              <a href="mailto:info@diqraarchitects.com">
                info@diqraarchitects.com
              </a>
              <a href="tel:+917871772428">(+91) 7871772428</a>
            </div>

            <div className="info-group">
              <h3>Hours</h3>
              <p>Mon - Fri: 09:00 - 18:00</p>
              <p>Weekend: By Appointment</p>
            </div>

            <div className="info-group">
              <h3>Socials</h3>
              <div className="social-row">
                <a href="#">Inst.</a>
                <a href="#">Fb.</a>
                <a href="#">Ln.</a>
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT (Form) */}
          <section className="form-section">
            <p className="form-intro reveal-text">
              We approach every inquiry with the same precision as our
              blueprints. Tell us about your vision.
            </p>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="input-grid">
                <div className="form-group form-group-anim">
                  <label>01. First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                </div>
                <div className="form-group form-group-anim">
                  <label>02. Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="input-grid">
                <div className="form-group form-group-anim">
                  <label>03. Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group form-group-anim">
                  <label>04. Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91..."
                  />
                </div>
              </div>

              <div className="form-group form-group-anim">
                <label>05. Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about the space, timeline, and vision..."
                  rows="4"
                  required
                />
              </div>

              <div className="submit-wrapper form-group-anim">
                <button type="submit" className="arch-btn">
                  <span className="submit-text">Send Proposal</span>
                </button>
              </div>
            </form>

            {/* PARALLAX IMAGE BREAK */}
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
                className="parallax-img"
                alt="Architecture Detail"
              />
            </div>

            {/* FAQ */}
            <div className="faq-container">
              <h3
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  color: "var(--arch-grey)",
                  marginBottom: "40px",
                }}
              >
                Common Inquiries
              </h3>

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq-item"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question">
                    <span className="faq-q-text">{faq.q}</span>
                    <span
                      id={`faq-icon-${index}`}
                      style={{ fontSize: "24px", display: "inline-block" }}
                    >
                      +
                    </span>
                  </div>
                  <div id={`faq-ans-${index}`} className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

// V333333333333333333333

// "use client";

// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
// import Footer from "../components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     inquiry: "",
//   });

//   const containerRef = useRef(null);
//   const imageRef = useRef(null);

//   // --- 1. Smooth Scroll (Liquid Feel) ---
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.5, // Slower, more luxurious scroll
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     return () => lenis.destroy();
//   }, []);

//   // --- 2. Animations ---
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Hero Title Fade Up
//       gsap.from(".hero-text", {
//         y: 60,
//         opacity: 0,
//         duration: 1.8,
//         stagger: 0.1,
//         ease: "power3.out",
//         delay: 0.2,
//       });

//       // Sticky Image Parallax
//       // The image container stays pinned, but the image inside moves slightly
//       ScrollTrigger.create({
//         trigger: ".content-row",
//         start: "top top",
//         end: "bottom bottom",
//         pin: ".image-col",
//         pinSpacing: false, // Allows content to flow naturally
//       });

//       gsap.to(imageRef.current, {
//         scale: 1.1,
//         yPercent: 5,
//         scrollTrigger: {
//           trigger: ".content-row",
//           start: "top top",
//           end: "bottom bottom",
//           scrub: true,
//         },
//       });

//       // Form Line Animations
//       const inputs = document.querySelectorAll(".input-group");
//       inputs.forEach((group) => {
//         const line = group.querySelector(".underline");

//         // Hover animation
//         group.addEventListener("mouseenter", () => {
//           gsap.to(line, { scaleX: 1, duration: 0.6, ease: "expo.out" });
//         });
//         group.addEventListener("mouseleave", () => {
//           if (group.querySelector("input:focus, textarea:focus")) return;
//           if (
//             group.querySelector("input")?.value ||
//             group.querySelector("textarea")?.value
//           )
//             return;
//           gsap.to(line, { scaleX: 0.3, duration: 0.6, ease: "power2.out" });
//         });
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   const [activeFAQ, setActiveFAQ] = useState(null);

//   return (
//     <>
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Montserrat:wght@300;400;500&display=swap");

//         :root {
//           --bg: #f5f3ef; /* Alabaster Paper */
//           --ink: #1c1c1c; /* Soft Black */
//           --gold: #d4af37; /* Muted Gold for tiny accents */
//           --gray: #8a8a8a;
//         }

//         body {
//           background-color: var(--bg);
//           color: var(--ink);
//           margin: 0;
//           font-family: "Montserrat", sans-serif;
//           -webkit-font-smoothing: antialiased;
//         }

//         h1,
//         h2,
//         h3 {
//           font-family: "Cormorant Garamond", serif;
//           font-weight: 300;
//           margin: 0;
//         }

//         .wrapper {
//           width: 100%;
//           overflow: hidden;
//         }

//         /* HEADER */
//         .header {
//           padding: 180px 6vw 120px 6vw;
//           text-align: center;
//         }

//         .title-display {
//           font-size: clamp(3rem, 8vw, 9rem);
//           line-height: 0.9;
//           letter-spacing: -0.02em;
//         }

//         .subtitle {
//           margin-top: 30px;
//           font-size: 14px;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           color: var(--gray);
//         }

//         /* MAIN CONTENT ROW */
//         .content-row {
//           display: flex;
//           min-height: 120vh; /* Ensure scroll space */
//           position: relative;
//         }

//         /* LEFT: FORM (Scrolls) */
//         .form-col {
//           width: 55%;
//           padding: 0 8vw 100px 6vw;
//           z-index: 2;
//           background: var(--bg); /* Covers the pinned image if overlapped */
//         }

//         /* RIGHT: IMAGE (Sticky) */
//         .image-col {
//           width: 45%;
//           height: 100vh;
//           position: relative;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           overflow: hidden;
//           padding: 40px;
//         }

//         .sticky-img-wrapper {
//           width: 100%;
//           height: 85%;
//           overflow: hidden;
//           border-radius: 2px; /* Slight soft edge */
//         }

//         .sticky-img {
//           width: 100%;
//           height: 120%;
//           object-fit: cover;
//           opacity: 0.9;
//         }

//         /* FORM STYLING */
//         .classy-form {
//           margin-top: 40px;
//         }

//         .input-group {
//           position: relative;
//           margin-bottom: 70px;
//         }

//         .input-group label {
//           display: block;
//           font-family: "Cormorant Garamond", serif;
//           font-size: 24px;
//           font-style: italic;
//           color: var(--gray);
//           margin-bottom: 15px;
//           transition: color 0.3s;
//         }

//         .input-group:focus-within label {
//           color: var(--ink);
//         }

//         .input-group input,
//         .input-group textarea {
//           width: 100%;
//           background: transparent;
//           border: none;
//           font-family: "Montserrat", sans-serif;
//           font-size: 18px;
//           color: var(--ink);
//           padding-bottom: 15px;
//           outline: none;
//         }

//         .underline {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 1px;
//           background: var(--ink);
//           transform: scaleX(0.3); /* Starts small */
//           transform-origin: left;
//           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//           opacity: 0.4;
//         }

//         .input-group:focus-within .underline {
//           transform: scaleX(1);
//           opacity: 1;
//         }

//         /* BUTTON */
//         .btn-minimal {
//           background: transparent;
//           border: 1px solid var(--ink);
//           padding: 20px 50px;
//           font-family: "Montserrat", sans-serif;
//           font-size: 13px;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           cursor: pointer;
//           transition: all 0.4s ease;
//           margin-top: 20px;
//         }

//         .btn-minimal:hover {
//           background: var(--ink);
//           color: var(--bg);
//         }

//         /* INFO BLOCK */
//         .info-section {
//           margin-top: 120px;
//           border-top: 1px solid rgba(0, 0, 0, 0.1);
//           padding-top: 60px;
//         }

//         .info-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 40px;
//         }

//         .info-item h4 {
//           font-family: "Montserrat", sans-serif;
//           font-size: 11px;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           margin-bottom: 15px;
//           color: var(--gray);
//         }

//         .info-item p,
//         .info-item a {
//           font-family: "Cormorant Garamond", serif;
//           font-size: 26px;
//           line-height: 1.2;
//           color: var(--ink);
//           text-decoration: none;
//           display: block;
//         }

//         /* FAQ */
//         .faq-block {
//           margin-top: 60px;
//         }
//         .faq-row {
//           padding: 25px 0;
//           border-bottom: 1px solid rgba(0, 0, 0, 0.1);
//           cursor: pointer;
//         }
//         .faq-row h3 {
//           font-size: 22px;
//         }
//         .faq-ans {
//           font-size: 15px;
//           line-height: 1.6;
//           color: #555;
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.5s ease;
//         }
//         .faq-ans p {
//           padding-top: 15px;
//         }

//         @media (max-width: 1024px) {
//           .content-row {
//             flex-direction: column;
//           }
//           .form-col,
//           .image-col {
//             width: 100%;
//             height: auto;
//             padding: 40px 20px;
//           }
//           .image-col {
//             height: 60vh;
//             order: -1;
//           } /* Image on top for mobile */
//           .header {
//             padding: 120px 20px 60px 20px;
//           }
//         }
//       `}</style>

//       <div ref={containerRef} className="wrapper">
//         {/* HEADER */}
//         <header className="header">
//           <h1 className="title-display">
//             <div style={{ overflow: "hidden" }}>
//               <span className="hero-text" style={{ display: "block" }}>
//                 The Art
//               </span>
//             </div>
//             <div style={{ overflow: "hidden" }}>
//               <span className="hero-text" style={{ display: "block" }}>
//                 of Dialogue.
//               </span>
//             </div>
//           </h1>
//           <div style={{ overflow: "hidden" }}>
//             <p className="subtitle hero-text">Begin your journey with Diqra</p>
//           </div>
//         </header>

//         {/* MAIN SPLIT */}
//         <div className="content-row">
//           {/* LEFT: FORM */}
//           <div className="form-col">
//             <p
//               style={{
//                 fontFamily: "Cormorant Garamond",
//                 fontSize: "28px",
//                 lineHeight: "1.4",
//                 marginBottom: "60px",
//                 color: "#555",
//               }}
//             >
//               Architecture is a conversation between the environment and the
//               soul. Tell us about the space you wish to cultivate.
//             </p>

//             <form className="classy-form">
//               <div className="input-group">
//                 <label>01. Your Name</label>
//                 <input type="text" placeholder="John Doe" />
//                 <div className="underline"></div>
//               </div>

//               <div className="input-group">
//                 <label>02. Email Address</label>
//                 <input type="email" placeholder="john@example.com" />
//                 <div className="underline"></div>
//               </div>

//               <div className="input-group">
//                 <label>03. The Vision</label>
//                 <textarea
//                   rows="3"
//                   placeholder="Describe your project..."
//                 ></textarea>
//                 <div className="underline"></div>
//               </div>

//               <button type="button" className="btn-minimal">
//                 Submit Inquiry
//               </button>
//             </form>

//             {/* INFO & FAQ */}
//             <div className="info-section">
//               <div className="info-grid">
//                 <div className="info-item">
//                   <h4>Contact</h4>
//                   <a href="mailto:info@diqra.com">info@diqra.com</a>
//                   <p>(+91) 787 177 2428</p>
//                 </div>
//                 <div className="info-item">
//                   <h4>Studio</h4>
//                   <p>Urapakkam, Chennai</p>
//                   <p>Tamil Nadu, 603202</p>
//                 </div>
//               </div>

//               <div className="faq-block">
//                 <h4
//                   style={{
//                     fontFamily: "Montserrat",
//                     fontSize: "11px",
//                     textTransform: "uppercase",
//                     letterSpacing: "2px",
//                     color: "#8A8A8A",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   Common Questions
//                 </h4>
//                 {[
//                   {
//                     q: "What is your design philosophy?",
//                     a: "We believe in minimalism, sustainability, and emotional resonance.",
//                   },
//                   {
//                     q: "How long is the design process?",
//                     a: "Typically 4-8 weeks for concept design, depending on scale.",
//                   },
//                   {
//                     q: "Do you handle construction?",
//                     a: "We offer full project management to ensure the build matches the vision.",
//                   },
//                 ].map((item, i) => (
//                   <div
//                     key={i}
//                     className="faq-row"
//                     onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
//                   >
//                     <div
//                       style={{
//                         display: "flex",
//                         justifyContent: "space-between",
//                       }}
//                     >
//                       <h3>{item.q}</h3>
//                       <span>{activeFAQ === i ? "—" : "+"}</span>
//                     </div>
//                     <div
//                       className="faq-ans"
//                       style={{ maxHeight: activeFAQ === i ? "150px" : "0" }}
//                     >
//                       <p>{item.a}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* RIGHT: STICKY IMAGE */}
//           <div className="image-col">
//             <div className="sticky-img-wrapper">
//               <img
//                 ref={imageRef}
//                 src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1200&auto=format&fit=crop"
//                 className="sticky-img"
//                 alt="Minimal Architecture"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// V44444444444444444444

// "use client";

// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";
// import Footer from "../components/Footer";

// gsap.registerPlugin(ScrollTrigger);

// export default function ContactPage() {
//   const containerRef = useRef(null);

//   // --- 1. Smooth Scroll ---
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       orientation: "vertical",
//       smoothWheel: true,
//     });
//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);
//     return () => lenis.destroy();
//   }, []);

//   // --- 2. Animations ---
//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // A. Horizontal Lines Drawing
//       gsap.utils.toArray(".line-h").forEach((line) => {
//         gsap.from(line, {
//           scaleX: 0,
//           transformOrigin: "left",
//           duration: 1.5,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: line,
//             start: "top 95%",
//           },
//         });
//       });

//       // B. Vertical Lines Drawing
//       gsap.utils.toArray(".line-v").forEach((line) => {
//         gsap.from(line, {
//           scaleY: 0,
//           transformOrigin: "top",
//           duration: 1.5,
//           ease: "expo.out",
//           scrollTrigger: {
//             trigger: line,
//             start: "top 95%",
//           },
//         });
//       });

//       // C. Text Reveal
//       gsap.utils.toArray(".fade-up").forEach((el) => {
//         gsap.from(el, {
//           y: 30,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 90%",
//           },
//         });
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   const [activeFAQ, setActiveFAQ] = useState(null);

//   return (
//     <>
//       <style jsx global>{`
//         @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap");

//         :root {
//           --bg: #ffffff;
//           --ink: #111111;
//           --line: #e5e5e5;
//           --active-line: #111111;
//           --hover-bg: #fafafa;
//         }

//         body {
//           background-color: var(--bg);
//           color: var(--ink);
//           font-family: "Inter", sans-serif;
//           margin: 0;
//         }

//         /* GRID SYSTEM */
//         .structure-grid {
//           display: grid;
//           grid-template-columns: 25% 25% 50%; /* The Floor Plan */
//           width: 100%;
//           border-bottom: 1px solid var(--line);
//         }

//         /* CELLS */
//         .cell {
//           position: relative;
//           padding: 40px;
//           border-right: 1px solid var(--line);
//           transition: background 0.3s;
//         }

//         .cell:last-child {
//           border-right: none;
//         }

//         .cell:hover {
//           background: var(--hover-bg);
//         }

//         /* BORDERS (For Animation) */
//         .line-h {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 1px;
//           background: var(--line);
//           z-index: 1;
//         }
//         .line-v {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 1px;
//           height: 100%;
//           background: var(--line);
//           z-index: 1;
//         }

//         .border-top {
//           border-top: 1px solid var(--line);
//         }

//         /* TYPOGRAPHY */
//         .label {
//           font-size: 11px;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           color: #888;
//           margin-bottom: 20px;
//           display: block;
//         }

//         h1.hero-title {
//           font-size: clamp(3rem, 6vw, 8rem);
//           font-weight: 400;
//           letter-spacing: -0.03em;
//           margin: 0;
//           line-height: 0.9;
//         }

//         p.hero-desc {
//           font-size: 1.5rem;
//           color: #555;
//           line-height: 1.4;
//           margin-top: 20px;
//           max-width: 90%;
//         }

//         /* FORM */
//         .grid-form {
//           width: 100%;
//         }

//         .input-row {
//           position: relative;
//           padding: 40px;
//           border-bottom: 1px solid var(--line);
//           transition: background 0.3s;
//         }

//         .input-row:focus-within {
//           background: #f4f4f4;
//         }

//         .input-row label {
//           display: block;
//           font-size: 11px;
//           text-transform: uppercase;
//           color: #888;
//           margin-bottom: 10px;
//         }

//         .input-row input,
//         .input-row textarea {
//           width: 100%;
//           background: transparent;
//           border: none;
//           font-family: "Inter", sans-serif;
//           font-size: 24px;
//           color: var(--ink);
//           outline: none;
//           padding: 0;
//         }

//         .input-row textarea {
//           resize: none;
//           min-height: 80px;
//         }

//         /* BUTTON */
//         .action-cell {
//           padding: 40px;
//           display: flex;
//           justify-content: flex-end;
//           align-items: center;
//         }

//         .submit-btn {
//           background: var(--ink);
//           color: var(--bg);
//           border: none;
//           padding: 20px 60px;
//           border-radius: 4px;
//           font-size: 14px;
//           text-transform: uppercase;
//           cursor: pointer;
//           transition: transform 0.2s;
//         }

//         .submit-btn:hover {
//           transform: translateY(-2px);
//         }

//         /* FAQ */
//         .faq-cell {
//           padding: 0;
//         }
//         .faq-item {
//           padding: 30px 40px;
//           border-bottom: 1px solid var(--line);
//           cursor: pointer;
//         }
//         .faq-item:hover {
//           background: var(--hover-bg);
//         }
//         .faq-q {
//           display: flex;
//           justify-content: space-between;
//           font-size: 18px;
//         }
//         .faq-a {
//           max-height: 0;
//           overflow: hidden;
//           transition: max-height 0.3s ease;
//         }
//         .faq-a p {
//           padding-top: 15px;
//           color: #666;
//           font-size: 14px;
//           line-height: 1.6;
//         }

//         @media (max-width: 1024px) {
//           .structure-grid {
//             grid-template-columns: 1fr;
//             border-bottom: none;
//           }
//           .cell {
//             border-right: none;
//             border-bottom: 1px solid var(--line);
//           }
//           .hero-title {
//             font-size: 14vw;
//           }
//         }
//       `}</style>

//       <div ref={containerRef} style={{ width: "100%", overflow: "hidden" }}>
//         {/* ROW 1: HEADER */}
//         <div className="structure-grid border-top">
//           <div className="cell">
//             <span className="label fade-up">Agency</span>
//             <div className="fade-up">Diqra.Arch</div>
//             <div
//               className="fade-up"
//               style={{ marginTop: "5px", color: "#888" }}
//             >
//               Est. 2025
//             </div>
//           </div>
//           <div className="cell">
//             <span className="label fade-up">Location</span>
//             <div className="fade-up">Chennai, IN</div>
//             <div
//               className="fade-up"
//               style={{ marginTop: "5px", color: "#888" }}
//             >
//               12:42 PM IST
//             </div>
//           </div>
//           <div className="cell">
//             <span className="label fade-up">Context</span>
//             <h1 className="hero-title fade-up">Design</h1>
//             <h1 className="hero-title fade-up" style={{ color: "#999" }}>
//               Dialogue.
//             </h1>
//           </div>
//         </div>

//         {/* ROW 2: CONTENT SPLIT */}
//         <div className="structure-grid">
//           {/* COL 1 & 2 Combined (Left Side) */}
//           <div
//             style={{
//               gridColumn: "1 / 3",
//               display: "flex",
//               flexDirection: "column",
//               borderRight: "1px solid var(--line)",
//             }}
//           >
//             <div
//               className="cell"
//               style={{
//                 flex: 1,
//                 borderRight: "none",
//                 borderBottom: "1px solid var(--line)",
//               }}
//             >
//               <span className="label fade-up">Intro</span>
//               <p className="hero-desc fade-up">
//                 We approach every project with a blank slate and a grid.
//                 Structure informs freedom. Tell us about your space.
//               </p>
//             </div>

//             {/* INFO BLOCKS */}
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//               <div className="cell" style={{ borderBottom: "none" }}>
//                 <span className="label fade-up">Direct</span>
//                 <a
//                   href="mailto:info@diqra.com"
//                   className="fade-up"
//                   style={{
//                     display: "block",
//                     color: "inherit",
//                     textDecoration: "none",
//                     marginBottom: "5px",
//                   }}
//                 >
//                   info@diqra.com
//                 </a>
//                 <a
//                   href="tel:+"
//                   className="fade-up"
//                   style={{
//                     display: "block",
//                     color: "inherit",
//                     textDecoration: "none",
//                   }}
//                 >
//                   (+91) 787 177 2428
//                 </a>
//               </div>
//               <div
//                 className="cell"
//                 style={{ borderRight: "none", borderBottom: "none" }}
//               >
//                 <span className="label fade-up">Socials</span>
//                 <div className="fade-up">Instagram ↗</div>
//                 <div className="fade-up">LinkedIn ↗</div>
//               </div>
//             </div>

//             {/* IMAGE FILLER */}
//             <div
//               style={{
//                 height: "300px",
//                 borderTop: "1px solid var(--line)",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1517551066060-6c9561b3699c?q=80&w=1000"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   filter: "grayscale(100%)",
//                 }}
//                 alt="Architecture"
//               />
//             </div>
//           </div>

//           {/* COL 3 (Right Side - FORM) */}
//           <div style={{ gridColumn: "3 / 4" }}>
//             <form className="grid-form">
//               <div className="input-row">
//                 <div className="line-h"></div>
//                 <label className="fade-up">01 / Name</label>
//                 <input type="text" placeholder="John Doe" className="fade-up" />
//               </div>

//               <div className="input-row">
//                 <div className="line-h"></div>
//                 <label className="fade-up">02 / Email</label>
//                 <input
//                   type="email"
//                   placeholder="john@example.com"
//                   className="fade-up"
//                 />
//               </div>

//               <div className="input-row">
//                 <div className="line-h"></div>
//                 <label className="fade-up">03 / Project Type</label>
//                 <input
//                   type="text"
//                   placeholder="Residential, Commercial..."
//                   className="fade-up"
//                 />
//               </div>

//               <div className="input-row">
//                 <div className="line-h"></div>
//                 <label className="fade-up">04 / Details</label>
//                 <textarea
//                   placeholder="Tell us about the site..."
//                   className="fade-up"
//                 ></textarea>
//               </div>

//               <div className="action-cell">
//                 <button type="button" className="submit-btn fade-up">
//                   Submit Blueprint
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* ROW 3: FAQ */}
//         <div
//           className="structure-grid"
//           style={{ borderBottom: "1px solid var(--line)" }}
//         >
//           <div className="cell" style={{ gridColumn: "1 / 2" }}>
//             <span className="label fade-up">Details</span>
//           </div>
//           <div className="faq-cell" style={{ gridColumn: "2 / 4" }}>
//             {[
//               {
//                 q: "What is your scope of work?",
//                 a: "We handle architecture, interior design, and landscape planning.",
//               },
//               {
//                 q: "Do you work internationally?",
//                 a: "Yes, we collaborate digitally on projects worldwide.",
//               },
//               {
//                 q: "What is the starting budget?",
//                 a: "We tailor solutions to various budgets, prioritizing value and longevity.",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="faq-item"
//                 onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
//               >
//                 <div className="faq-q">
//                   <span>{item.q}</span>
//                   <span>{activeFAQ === i ? "—" : "+"}</span>
//                 </div>
//                 <div
//                   className="faq-a"
//                   style={{ maxHeight: activeFAQ === i ? "150px" : "0" }}
//                 >
//                   <p>{item.a}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
