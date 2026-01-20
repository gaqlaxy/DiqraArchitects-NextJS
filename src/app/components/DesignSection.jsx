import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  Video, 
  Diamond, 
  Film, 
  Megaphone, 
  ThumbsUp, 
  Layers, 
  Plus, 
  ArrowRight,
  Minus 
} from 'lucide-react';
import '../styles/DesignSection.css';

const services = [
  { 
    id: 1, 
    title: "Exterior Design", 
    icon: <Video size={20} />,
    desc: "Simplify complex ideas into engaging visual stories. Perfect for product launches and educational content.",
    link: "/services/explainer-videos"
  },
  { 
    id: 2, 
    title: "Design & Planning", 
    icon: <Diamond size={20} />,
    desc: "Bring your brand to life with dynamic logos and motion design systems that stand out.",
    link: "/services/animated-identities"
  },
  { 
    id: 3, 
    title: "Consultation", 
    icon: <Film size={20} />,
    desc: "Captivating opening sequences for films, series, and events that set the perfect tone.",
    link: "/services/title-sequences"
  },
  { 
    id: 4, 
    title: "Interior Design", 
    icon: <Megaphone size={20} />,
    desc: "High-impact commercials designed to convert viewers and boost brand awareness across all platforms.",
    link: "/services/advertisements"
  },
  { 
    id: 5, 
    title: "Renovation", 
    icon: <ThumbsUp size={20} />,
    desc: "Snackable, shareable motion content tailored for social media algorithms and engagement.",
    link: "/services/some-content"
  },
  
];

const DesignSection = () => {
  const [activeService, setActiveService] = useState(null);
  const containerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const contentRefs = useRef([]);

  // Toggle Accordion Logic
  const toggleService = (index) => {
    // If clicking the active one, close it. Otherwise, open the new one.
    const isSame = activeService === index;
    const newIndex = isSame ? null : index;
    
    // Close currently open item if exists
    if (activeService !== null) {
      gsap.to(contentRefs.current[activeService], {
        height: 0,
        opacity: 0,
        marginBottom: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }

    // Open new item if selected
    if (!isSame) {
      gsap.fromTo(contentRefs.current[index], 
        { height: 0, opacity: 0, marginBottom: 0 },
        { 
          height: "auto", 
          opacity: 1, 
          marginBottom: 20, 
          duration: 0.4, 
          ease: "power2.out" 
        }
      );
    }

    setActiveService(newIndex);
  };

  // Hover animation for list items (only if not active)
  const handleMouseEnter = (e, index) => {
    if (activeService !== index) {
      gsap.to(e.currentTarget, { paddingLeft: "20px", duration: 0.3, ease: "power2.out" });
    }
  };

  const handleMouseLeave = (e, index) => {
    if (activeService !== index) {
      gsap.to(e.currentTarget, { paddingLeft: "10px", duration: 0.3, ease: "power2.out" });
    }
  };

  // Initial Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(leftColRef.current.children, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
    )
    .fromTo(rightColRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5"
    )
    .fromTo(".arch-card-content", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 }
    );
  }, []);

  return (
    <div className="section-container" ref={containerRef}>
      
      {/* LEFT SECTION: Services */}
      <div className="left-column" ref={leftColRef}>
        <h1 className="main-headline">Thoughtfully designed. Precisely built.</h1>
        
        <p className="description-text">
          We take care of the entire process from idea to finished result with
          everything that entails from art direction, copywriting, storyboard, music
          and sound effects.
        </p>

        <div className="services-wrapper">
          <h2 className="services-header">Our Services:</h2>
          
          <ul className="services-list">
            {services.map((service, index) => (
              <li 
                key={service.id} 
                className={`service-item ${activeService === index ? 'active' : ''}`}
                onMouseEnter={(e) => handleMouseEnter(e, index)}
                onMouseLeave={(e) => handleMouseLeave(e, index)}
                onClick={() => toggleService(index)}
              >
                {/* Header Part */}
                <div className="service-header">
                  <div className="service-left">
                    <span className={`icon-wrapper ${activeService === index ? 'active-icon' : ''}`}>
                      {service.icon}
                    </span>
                    <span className="service-title">{service.title}</span>
                  </div>
                  {activeService === index ? 
                    <Minus size={18} className="toggle-icon" /> : 
                    <Plus size={18} className="toggle-icon" />
                  }
                </div>

                {/* Expanded Content Part */}
                <div 
                  className="design-service-content" 
                  ref={el => contentRefs.current[index] = el}
                >
                  <p className="service-desc">{service.desc}</p>
                  <a href={service.link} className="view-more-link">
                    VIEW MORE
                    <ArrowRight size={14} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SECTION: Process (Architecture Theme) */}
      <div className="right-column" ref={rightColRef}>
        <div className="arch-card">
          <div className="arch-image-bg"></div>
          <div className="arch-overlay">
            <div className="arch-card-content">
              <span className="arch-subtitle">Blueprint & Strategy</span>
              <h2 className="arch-title">PROCESS</h2>
              <div className="arch-graphics">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
              <button className="process-btn">
                SEE PROCESS
                <ArrowRight size={16} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;