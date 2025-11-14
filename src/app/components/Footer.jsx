import React from "react";
import "../styles/Footer.css";
import "../styles/SlideUpLink.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        {/* --- Top Section --- */}
        <div className="footer-content">
          <div className="footer-brand">
            <h1>Diqra Architects</h1>
            <p>© 2025 Diqra Architects.</p>
          </div>

          <div className="footer-column">
            <h3>What We Do</h3>
            <ul>
              <li>
                {/* <a href="#"></a> */}
                {/* <Link
                  to="/services"
                  className="slideup-link"
                  data-text="Exterior Design"
                >
                  <span>Exterior Design</span>
                </Link> */}
                <Link
                  href="/services"
                  className="slideup-link"
                  data-text="Exterior Design"
                >
                  <span>Exterior Design</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Design & Planning</a> */}
                <Link
                  href="/services"
                  className="slideup-link"
                  data-text="Design & Planning"
                >
                  <span>Design & Planning</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Consultation</a> */}
                <Link
                  href="/services"
                  className="slideup-link"
                  data-text="Consultation"
                >
                  <span>Consultation</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Landscape Design</a> */}
                <Link
                  href="/services"
                  className="slideup-link"
                  data-text="Landscape Design"
                >
                  <span>Landscape Design</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Pages</h3>
            <ul>
              <li>
                {/* <a href="#">About us</a> */}
                <Link
                  href="/about"
                  className="slideup-link"
                  data-text="About us"
                >
                  <span>About us</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Projects</a> */}
                <Link
                  href="/works"
                  className="slideup-link"
                  data-text="Projects"
                >
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Services</a> */}
                <Link
                  href="/services"
                  className="slideup-link"
                  data-text="Services"
                >
                  <span>Services</span>
                </Link>
              </li>

              <li>
                {/* <a href="#">FAQ</a> */}
                <Link href="/contact" className="slideup-link" data-text="FAQ">
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Contact us</a> */}
                <Link
                  href="/contact"
                  className="slideup-link"
                  data-text="Contact us"
                >
                  <span>Contact us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>
                {/* <a href="#">Privacy Policy</a> */}
                <Link
                  href="/privacy"
                  className="slideup-link"
                  data-text="Privacy Policy"
                >
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">Terms & Conditions</a> */}
                <Link
                  href="/terms"
                  className="slideup-link"
                  data-text="Terms & Conditions"
                >
                  <span>Terms & Conditions</span>
                </Link>
              </li>
              <li>
                {/* <a href="#">License</a> */}
                <Link
                  href="/license"
                  className="slideup-link"
                  data-text="License"
                >
                  <span>License</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- Contact Section --- */}
        <div className="footer-contact">
          <div className="contact-item">
            <div className="contact-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              Office
            </div>
            <div className="contact-info">
              No. 534/2, 19th Street, Periyar nagar, Urapakkam
              <br />
              Karanaipuducheri, Tamil Nadu 603202
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </div>
            <div className="contact-info">
              <a href="mailto:info@example.io">info@diqraarchitecture.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-label">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Phone
            </div>
            <div className="contact-info">
              <a href="tel:+917871772428">+917871772428</a>
            </div>
          </div>

          <div className="newsletter">
            <h3>Subscribe for more updates!</h3>
            <p>
              Stay updated with our latest design insights by entering your
              email below.
            </p>
            <div className="email-input-wrapper">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input type="email" placeholder="Enter your email here..." />
              <button type="submit">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="footer-bottom">
          <div className="footer-credit">
            Developed by{" "}
            <a href="#" target="_blank" rel="noreferrer">
              pixeldperfect
            </a>
          </div>
          <div className="footer-socials">
            <a href="#" target="_blank" aria-label="Instagram" rel="noreferrer">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" target="_blank" aria-label="Facebook" rel="noreferrer">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
