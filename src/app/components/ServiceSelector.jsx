"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, X, Check } from "lucide-react";

const SERVICES_LIST = [
  { slug: "interiors", title: "Interiors" },
  { slug: "modular-kitchen", title: "Modular Kitchen" },
  { slug: "renovation", title: "Renovation" },
  { slug: "construction", title: "Construction" },
  { slug: "exterior", title: "Exterior" },
  { slug: "architectural", title: "Architectural" },
  { slug: "consultancy", title: "Consultancy" },
  { slug: "engineering", title: "Engineering" },
  { slug: "project-management", title: "Project Management" },
];

export default function ServiceSelector({ value = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Toggle service selection
  const toggleService = (slug) => {
    if (value.includes(slug)) {
      onChange(value.filter((s) => s !== slug));
    } else {
      onChange([...value, slug]);
    }
  };

  // Remove service tag
  const removeService = (slug) => {
    onChange(value.filter((s) => s !== slug));
  };

  // Filter services based on search
  const filteredServices = SERVICES_LIST.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get selected service titles for display
  const selectedTitles = value
    .map((slug) => SERVICES_LIST.find((s) => s.slug === slug)?.title)
    .filter(Boolean);

  return (
    <div className="ss-container" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="ss-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="ss-trigger-text">
          {selectedTitles.length === 0 ? "Select services" : `${selectedTitles.length} selected`}
        </span>
        <ChevronDown
          size={20}
          className={`ss-trigger-icon ${isOpen ? "ss-trigger-icon-open" : ""}`}
        />
      </button>

      {/* Selected Tags */}
      {selectedTitles.length > 0 && (
        <div className="ss-selected-tags">
          {selectedTitles.map((title) => {
            const slug = value[SERVICES_LIST.findIndex((s) => s.title === title)];
            return (
              <span key={slug} className="ss-tag">
                <span>{title}</span>
                <button
                  type="button"
                  onClick={() => removeService(slug)}
                  className="ss-tag-remove"
                  aria-label={`Remove ${title}`}
                >
                  <X size={14} />
                </button>
              </span>
            );
          })}
        </div>
      )}

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="ss-dropdown">
          {/* Search Input */}
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="ss-search"
            aria-label="Search services"
          />

          {/* Services List */}
          <div className="ss-list" role="listbox">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  onClick={() => toggleService(service.slug)}
                  className={`ss-item ${value.includes(service.slug) ? "ss-item-selected" : ""}`}
                  role="option"
                  aria-selected={value.includes(service.slug)}
                >
                  <Check
                    size={18}
                    className={`ss-item-check ${
                      value.includes(service.slug) ? "ss-item-check-visible" : ""
                    }`}
                  />
                  <span className="ss-item-text">{service.title}</span>
                </button>
              ))
            ) : (
              <div className="ss-no-results">No services found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
