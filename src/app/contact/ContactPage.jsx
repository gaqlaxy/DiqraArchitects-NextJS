"use client";

import { useState, useEffect } from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const createSlideUpEffect = (element) => {
      if (element.hasAttribute("data-gsap-initialized")) return null;

      let span = element.querySelector("span");
      if (!span) {
        const originalText = element.textContent.trim();
        element.innerHTML = `<span>${originalText}</span>`;
        span = element.querySelector("span");
      }

      if (span.querySelector(".text-original, .text-hover")) {
        element.setAttribute("data-gsap-initialized", "true");
        return null;
      }

      const originalText = span.textContent;
      span.innerHTML = `
        <span class="text-original">${originalText}</span>
        <span class="text-hover">${originalText}</span>
      `;

      const originalSpan = span.querySelector(".text-original");
      const hoverSpan = span.querySelector(".text-hover");
      const slideDistance = originalSpan.offsetHeight;

      const styles = {
        span: {
          overflow: "hidden",
          position: "relative",
          display: "block",
          height: `${slideDistance}px`,
        },
        originalSpan: {
          transform: "translateY(0)",
          position: "relative",
          display: "block",
          transition: "all 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
        },
        hoverSpan: {
          transform: `translateY(${slideDistance}px)`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          display: "block",
          transition: "all 0.4s cubic-bezier(0.65, 0, 0.35, 1)",
        },
      };

      Object.assign(span.style, styles.span);
      Object.assign(originalSpan.style, styles.originalSpan);
      Object.assign(hoverSpan.style, styles.hoverSpan);

      element.setAttribute("data-gsap-initialized", "true");

      const handleMouseEnter = () => {
        originalSpan.style.transform = `translateY(-${slideDistance}px)`;
        originalSpan.style.opacity = "0";
        hoverSpan.style.transform = "translateY(0)";
        hoverSpan.style.opacity = "1";
      };

      const handleMouseLeave = () => {
        originalSpan.style.transform = "translateY(0)";
        originalSpan.style.opacity = "1";
        hoverSpan.style.transform = `translateY(${slideDistance}px)`;
        hoverSpan.style.opacity = "0";
      };

      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);

      return { handleMouseEnter, handleMouseLeave };
    };

    setTimeout(() => {
      const styledCtaBtns = document.querySelectorAll(".cta-btn-styled");
      styledCtaBtns.forEach((btn) => {
        createSlideUpEffect(btn);
      });
    }, 100);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does your company offer?",
      answer:
        "We offer comprehensive design services including interior design, architecture consultation, space planning, 3D visualization, and project management. Our team specializes in residential and commercial projects.",
    },
    {
      question: "How long does a typical project take to complete?",
      answer:
        "Project timelines vary depending on scope and complexity. A typical residential project takes 8-12 weeks, while larger commercial projects may take 3-6 months. We provide detailed timelines during consultation.",
    },
    {
      question: "Do you work with specific types of clients or projects?",
      answer:
        "We work with diverse clients including homeowners, businesses, developers, and institutions. Our portfolio includes residential homes, offices, retail spaces, restaurants, and hospitality venues.",
    },
    {
      question: "Can I see examples of your past work?",
      answer:
        "Yes! Visit our Projects page to view our portfolio. We showcase completed projects across different categories. You can also schedule a consultation to see detailed case studies relevant to your project type.",
    },
    {
      question: "What sets your company apart from others in the industry?",
      answer:
        "Our unique approach combines innovative design with sustainable practices. We prioritize client collaboration, attention to detail, and delivering projects on time and within budget. Our experienced team brings fresh perspectives to every project.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "Getting started is easy! Fill out our contact form, give us a call, or book an appointment through our website. We'll schedule an initial consultation to discuss your vision, requirements, and next steps.",
    },
  ];
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <style>{`
        
            
            .contact-page-container {
                
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px;
        }

       
.contact-page-title{


margin-bottom: 40px;

}

h1 {
  font-size: 120px;
  font-weight: 400;
  letter-spacing: -3px;
  line-height: 0.9;

}

        .contact-section {
          display: grid;
          grid-template-columns: 500px 1fr;
          gap: 80px;
          margin-bottom: 100px;
        }

        .contact-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 8px;
        }

        .contact-info {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          padding-top: 20px;
        }

        .info-block h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          color: #000;
        }

        .info-block p {
          color: #666;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 5px;
        }

        .info-block a {
          color: #666;
          text-decoration: none;
          transition: color 0.3s;
        }

        .info-block a:hover {
          color: #000;
        }

        .offices p {
          margin-bottom: 20px;
        }

        .offices strong {
          color: #000;
          font-weight: 600;
        }

        .social-section {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .social-section span {
          color: #666;
          font-size: 14px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          color: #333;
          font-size: 18px;
          text-decoration: none;
          transition: color 0.3s;
        }

        .social-links a:hover {
          color: #666;
        }

        .form-section {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          margin-bottom: 100px;
        }

        .form-contact-page-container {
          display: flex;
          flex-direction: column;
          gap: 45px;
          padding-right: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 14px;
          color: #333;
          margin-top: 20px;
        }

        .form-group input,
        .form-group textarea {
          padding: 16px 0;
          border: none;
          border-bottom: 1px solid #ddd;
          background: transparent;
          font-size: 15px;
          font-family: inherit;
          color: #333;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: #333;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #bbb;
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          text-transform: uppercase;
          padding: 10px 18px;
          background: #080807;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          color: white;
          text-decoration: none;
          font-weight: 400;
          font-size: 18px;
          transition: all 0.3s ease;
          overflow: hidden;
          white-space: nowrap;
          cursor: pointer;
          position: relative;
        }

        .submit-btn span {
          color: #fff;
          display: block;
          position: relative;
          overflow: hidden;
        }

        .submit-btn .text-original,
        .submit-btn .text-hover {
          display: block;
          line-height: 1;
        }

        .submit-btn::after {
          content: "";
          width: 8px;
          height: 8px;
          background: #fff;
          border: 2px solid #000;
          border-radius: 50%;
          margin-left: 8px;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .submit-btn:hover::after {
          background: #fff;
          border-color: #fff;
        }

        .form-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .faq-section {
          margin-bottom: 100px;
        }

        .faq-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 30px;
        }

        .faq-icon {
          width: 20px;
          height: 20px;
          background: #000;
          border-radius: 50%;
        }

        .faq-header span {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .faq-title {
          
          margin-bottom: 40px;
        }

        .faq-content {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 80px;
        }

        .faq-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 8px;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid #e5e5e5;
          padding: 25px 0;
        }

        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }

        .faq-question-text {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 15px;
          color: #333;
        }

        .faq-number {
          color: #999;
          font-size: 14px;
          min-width: 15px;
        }

        .faq-toggle {
          font-size: 20px;
          color: #666;
          transition: transform 0.3s;
        }

        .faq-item.active .faq-toggle {
          transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding-left: 35px;
        }

        .faq-answer p {
          padding-top: 15px;
          color: #666;
          font-size: 14px;
          line-height: 1.8;
        }

        @media (max-width: 1024px) {
          .contact-section,
          .form-section,
          .faq-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .contact-image,
          .faq-image {
            height: 350px;
          }
        }

        @media (max-width: 768px) {
          .contact-page-container {
            padding: 80px 20px;
            margin-top: 80px;
          }

         

          

          .form-row {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .form-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .submit-btn {
            align-self: flex-start;
          }

          .contact-section,
          .form-section {
            gap: 30px;
          }
        }

        @media (max-width: 480px) {
         

          .contact-image,
          .faq-image {
            height: 280px;
          }

          .info-block,
          .faq-item {
            padding: 20px 0;
          }
        }
      `}</style>

      <div className="contact-page-container">
        <h1 className="contact-page-title">Get in Touch</h1>

        <div className="contact-section">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=700&fit=crop"
            alt="Modern Building"
            className="contact-image"
          />

          <div className="contact-info">
            <div className="info-block">
              <h3>Appointment</h3>
              <p>
                Book your appointment with us to kickstart your
                <br />
                design journey.
              </p>
              <p style={{ marginTop: "15px" }}>Monday to Friday — 9AM - 5PM</p>
              <p>Saturday & Sunday only 10AM to 12PM</p>
            </div>

            <div className="info-block">
              <h3>Give Us a Call</h3>
              <p>
                <a href="tel:+12395550108">(239) 555-0108</a>
              </p>
            </div>

            <div className="info-block">
              <h3>Email Us</h3>
              <p>
                <a href="mailto:support@example.com">support@example.com</a>
              </p>
            </div>

            <div className="info-block offices">
              <h3>Offices</h3>
              <p>
                <strong>New Jersey</strong>
                <br />
                2972 Westheimer Rd. Santa Ana, Illinois 85486
              </p>

              <p>
                <strong>New York</strong>
                <br />
                4517 Washington. Manchester, Kentucky 39495
              </p>

              <p>
                <strong>Los Angeles</strong>
                <br />
                3517 W. Gray St. Utica, Pennsylvania 57867
              </p>
            </div>

            <div className="social-section">
              <span>Follow on us</span>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  𝕏
                </a>
                <a href="#" aria-label="Facebook">
                  f
                </a>
                <a href="#" aria-label="YouTube">
                  ▶
                </a>
                <a href="#" aria-label="Instagram">
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-contact-page-container">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Message...."
                required
              />
            </div>

            <div className="form-footer">
              <button
                type="button"
                onClick={handleSubmit}
                className="submit-btn cta-btn-styled"
              >
                <span>Submit</span>
              </button>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=700&fit=crop"
            alt="Modern Architecture"
            className="form-image"
          />
        </div>

        <div className="faq-section">
          <h1 className="faq-title">FAQ</h1>

          <div className="faq-content">
            <img
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop"
              alt="Interior Design"
              className="faq-image"
            />

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeFAQ === index ? "active" : ""}`}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-question-text">
                      <span className="faq-number">{index + 1}</span>
                      <span>{faq.question}</span>
                    </div>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div
                    className="faq-answer"
                    style={{ maxHeight: activeFAQ === index ? "200px" : "0" }}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
