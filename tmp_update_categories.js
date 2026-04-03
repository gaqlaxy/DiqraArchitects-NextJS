const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'Projects', 'DiqraArchitects-NextJS', 'src', 'app', 'data', 'categories.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const updates = {
  "construction-companies": "Military-Grade Precision for Large-Scale Industrial Projects.",
  "architects": "Award-Winning Designs that Redefine Premium Living.",
  "interior-designers": "Boutique, Editorial-Style Interiors for Modern Homes.",
  "residential-builders": "Crafting Luxury Custom Homes with Unmatched Quality.",
  "commercial-builders": "High-Performance Business Spaces Built for Growth.",
  "building-contractors": "Turnkey execution from Blueprint to Final Key Handover.",
  "civil-contractors": "Heavy-Duty Civil Engineering Built for the Next Century.",
  "architects-for-residential": "Bespoke Residential Architecture for Luxury Villas.",
  "architects-for-office": "High-Efficiency Headquarters Designed for Productivity.",
  "interior-designers-for-office": "Modern Office Interiors that Boost Employee Performance.",
  "architects-for-apartment": "Maximizing FSI and Lifestyle in Multi-Story Projects.",
  "industrial-construction-companies": "Rapid Industrial Infrastructure & PEB Structural Solutions.",
  "architects-for-landscape": "Resort-Style Landscapes that Complement your Architecture.",
  "builders-and-developers": "Premium Residential Projects with Exceptional ROI.",
  "architects-for-building": "Strategic Architectural Planning & FSI Utilization."
};

let updatedCount = 0;
data.forEach(cat => {
  if (updates[cat.slug]) {
    cat.tagline = updates[cat.slug];
    updatedCount++;
  }
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log(`Successfully updated ${updatedCount} categories.`);
