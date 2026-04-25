# Project Code Review: Diqra Architects

A comprehensive analysis of the current state of the Next.js project, identifying strengths, technical debt, and areas for optimization.

---

## ✅ Positives

### 1. High-End Visual Aesthetics
The project achieves a premium, "Awwwards-worthy" look. The use of the "Sand and Charcoal" design system, combined with smooth parallax effects and editorial layouts, creates a professional first impression suitable for an architecture firm.

### 2. Modern Technology Stack
- **Next.js 16 (Alpha/Beta)** & **React 19**: Leveraging the latest features of the React ecosystem, including the React Compiler (`babel-plugin-react-compiler`).
- **Tailwind CSS v4**: Using the CSS-first approach of the newest Tailwind version.
- **GSAP & Lenis**: Best-in-class libraries for high-performance animations and smooth scrolling.

### 3. Comprehensive SEO Implementation
- **Metadata Strategy**: Robust metadata configuration in `layout.js` and individual pages, including OpenGraph and Twitter cards.
- **Structured Data (JSON-LD)**: Excellent implementation of Schema.org types (ArchitectureFirm, Service, FAQPage, BreadcrumbList) in `ServiceDetailPage.jsx`.
- **Sitemap & Robots**: Dynamically generated `sitemap.xml` and a well-configured `robots.js`.
- **Accessibility**: Inclusion of "Skip to content" links and descriptive ARIA labels.

### 4. Clean Design System
- **Design Tokens**: `globals.css` uses well-defined CSS variables for colors, typography scales, and motion curves, ensuring visual consistency.
- **Responsive Typography**: Intelligent use of `clamp()` for fluid typography across devices.

---

## ❌ Negatives & Technical Debt

### 1. Underutilization of `next/image`
Most images in the project (Hero sections, Galleries, Portfolio) use standard `<img>` tags or manual lazy-loading logic (`OptimizedGalleryImage.jsx`).
- **Impact**: Missing out on Next.js's automatic image optimization (WebP/AVIF conversion, resizing, and cumulative layout shift prevention).
- **Recommendation**: Replace `<img>` tags with `next/image` to improve LCP and overall performance scores.

### 2. Redundant Route Architecture
The `src/app/services` directory contains both a dynamic `[slug]` route and individual static folders (e.g., `consultation`, `renovation`).
- **Impact**: Violates the DRY (Don't Repeat Yourself) principle and makes maintenance difficult. Static routes and dynamic routes compete for the same URL space.
- **Recommendation**: Consolidate all services into the `[slug]` route and manage mapping/overrides within a single data utility.

### 3. Direct DOM Manipulation in React
Multiple components (`Navbar.jsx`, `InfiniteGallery.jsx`) use `document.querySelector`, `document.getElementById`, and manual `addEventListener`.
- **Impact**: This bypasses the React virtual DOM, leading to potential hydration mismatches, memory leaks (if not cleaned up correctly), and issues with Server-Side Rendering (SSR).
- **Recommendation**: Refactor to use React `refs` and state-driven event handling.

### 4. Placeholder Content & Errors
- **Data Quality**: Many projects in `projects-data.json` have "Your Studio Name" as the architect and identical "secluded retreat" descriptions.
- **Geographic Error**: `ServiceDetailPage.jsx` lists "Lahore" in the `areaServed` schema, which is inconsistent with a Chennai-based firm.
- **Broken Links**: Many footer and navigation links use `href="#"`.

### 5. Project Organization & Redundancy
- **Folder Duplication**: Both `src/app/lib` and `src/app/libs` exist.
- **Component Placement**: `AnimatedText.jsx` is located in the `hooks` folder despite being a UI component.
- **Dependency Redundancy**: `package.json` includes both `lenis` and `@studio-freight/lenis`.
- **Code Duplication**: `Navbar.jsx` contains two nearly identical blocks of JSX for different themes, which should be refactored into a single reusable structure.

### 6. Semantic HTML Issues
- **Multiple `<main>` tags**: `OhHeroSection.jsx` contains a `<main>` tag, while `layout.js` also defines the main content area. There should only be one `<main>` per page.

---

## 🛠️ Summary of Recommendations

1.  **Refactor Image Handling**: Migrate to `next/image` across the entire project.
2.  **Unify Service Routes**: Delete individual service folders and use the `[slug]` directory for all service-related paths.
3.  **Clean up React Logic**: Remove direct DOM calls in favor of proper React patterns.
4.  **Audit Content**: Update `projects-data.json` with real data and fix the "Lahore" reference in the SEO schema.
5.  **Rationalize Dependencies**: Choose one `lenis` package and remove the other.
