import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern use of the DIQRA Architects website, studio materials, and enquiry experience.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    id: "using-the-site",
    kicker: "01",
    title: "Using this website",
    body: [
      {
        paragraphs: [
          "By using this website, you agree to use it for lawful purposes and in a way that does not interfere with the site, the studio, or other visitors. The website is intended to help you learn about DIQRA, review selected work, and contact us about possible services.",
          "Information on the site is provided for general guidance and inspiration. It does not automatically create a client relationship, professional engagement, or binding commitment until both sides have agreed in writing.",
        ],
      },
    ],
  },
  {
    id: "project-enquiries",
    kicker: "02",
    title: "Project enquiries and proposals",
    body: [
      {
        paragraphs: [
          "Submitting an enquiry does not guarantee acceptance of a project, a fixed fee, a delivery timeline, or service availability. Every project is reviewed based on scope, location, timeline, technical feasibility, and current studio capacity.",
          "Any budgets, schedules, mood references, or concept discussions shared during early conversations are indicative unless they are later confirmed in a signed agreement.",
        ],
      },
    ],
  },
  {
    id: "intellectual-property",
    kicker: "03",
    title: "Designs, content, and intellectual property",
    body: [
      {
        paragraphs: [
          "All content on this website, including text, branding, project descriptions, photographs, layouts, and visual presentation, belongs to DIQRA Architects or is used with permission from the relevant owner.",
          "You may browse, reference, and share links to this site for personal or informational use. You may not reproduce, republish, sell, scrape, modify, or commercially exploit our content, project imagery, or brand elements without prior written permission.",
        ],
      },
    ],
  },
  {
    id: "accuracy-and-availability",
    kicker: "04",
    title: "Accuracy and availability",
    body: [
      {
        paragraphs: [
          "We aim to keep the website accurate and current, but details may change as projects evolve, services expand, or images are updated. We may revise, remove, or replace content without notice.",
          "We do not guarantee uninterrupted access to the website. Maintenance, hosting issues, or third-party service interruptions may occasionally affect availability.",
        ],
      },
    ],
  },
  {
    id: "third-party-links",
    kicker: "05",
    title: "Third-party links and services",
    body: [
      {
        paragraphs: [
          "Some pages may link to third-party websites, tools, social platforms, or embedded services. Those destinations operate under their own policies and terms, and we are not responsible for their content, data handling, or uptime.",
        ],
      },
    ],
  },
  {
    id: "limitation-and-law",
    kicker: "06",
    title: "Liability and governing law",
    body: [
      {
        paragraphs: [
          "To the fullest extent permitted by law, DIQRA Architects is not liable for indirect, incidental, or consequential losses arising from your use of this website or reliance on its content. This does not limit liability where the law does not allow such limitation.",
          "These terms are governed by the laws applicable in Tamil Nadu, India, unless a signed project agreement states otherwise. Any disputes relating to website use should first be raised with us directly so we can try to resolve them in good faith.",
        ],
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Use"
      title="Clear terms for a clear relationship."
      intro="These terms set expectations for how the DIQRA website can be used, what website content means, and when a real project engagement begins. We prefer clarity over fine print, so the language here is intentionally straightforward."
      summary="The short version: you are welcome to explore, reference, and contact us through this site, but website content remains ours and early conversations are not a formal contract until both sides sign one."
      updatedOn="April 7, 2026"
      sections={sections}
    />
  );
}
