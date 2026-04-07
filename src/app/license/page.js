import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Website License",
  description:
    "The limited license for using the DIQRA Architects website, project imagery, and studio materials.",
  alternates: {
    canonical: "/license",
  },
};

const sections = [
  {
    id: "limited-license",
    kicker: "01",
    title: "Your limited license to use this site",
    body: [
      {
        paragraphs: [
          "We grant you a limited, non-exclusive, non-transferable, revocable license to access and use this website for personal, informational, and non-commercial purposes. That means you are welcome to view our work, learn about our services, and share direct links to the site.",
          "This license does not transfer ownership of any text, drawings, renders, photographs, marks, or other materials displayed here.",
        ],
      },
    ],
  },
  {
    id: "permitted-use",
    kicker: "02",
    title: "What is permitted",
    body: [
      {
        type: "list",
        items: [
          "Viewing the website for inspiration, research, or service evaluation.",
          "Sharing direct links to public pages of the website.",
          "Printing or saving a single copy for your internal review of a potential project discussion.",
          "Referring architects, collaborators, or family members to the website while discussing a live project with us.",
        ],
      },
    ],
  },
  {
    id: "restricted-use",
    kicker: "03",
    title: "What is not permitted",
    body: [
      {
        type: "list",
        items: [
          "Copying project imagery, brand assets, or written content into another website, portfolio, proposal, or advertisement without written permission.",
          "Using our drawings, renders, photographs, or layouts to train models, populate design libraries, or generate derivative commercial content.",
          "Reverse engineering, scraping, or systematically downloading substantial portions of the website.",
          "Removing copyright, trademark, watermark, or credit notices from any material associated with DIQRA.",
        ],
      },
    ],
  },
  {
    id: "client-and-partner-materials",
    kicker: "04",
    title: "Client, consultant, and partner materials",
    body: [
      {
        paragraphs: [
          "Some visuals or project details on this website may include materials belonging to clients, photographers, consultants, vendors, or collaborators. Their rights remain theirs. Nothing on this page should be read as permission to reuse third-party material that appears on our site.",
        ],
      },
    ],
  },
  {
    id: "asking-for-permission",
    kicker: "05",
    title: "Asking for permission",
    body: [
      {
        paragraphs: [
          "If you want to feature our work in media, publications, academic references, or industry presentations, please contact us first at info@diqraarchitects.com. In many cases we are happy to help when the use is respectful, properly credited, and consistent with client confidentiality.",
        ],
      },
    ],
  },
  {
    id: "changes-to-license",
    kicker: "06",
    title: "Changes to this license",
    body: [
      {
        paragraphs: [
          "We may revise this license from time to time to reflect changes in our website, content practices, or legal obligations. Continued use of the site after updates means you accept the revised terms.",
        ],
      },
    ],
  },
];

export default function LicensePage() {
  return (
    <LegalPage
      eyebrow="Website License"
      title="Use our work with respect."
      intro="Architecture is deeply collaborative, but that does not mean every asset is free to reuse. This license explains the limited permission we give for browsing and sharing the DIQRA website, along with the boundaries around our brand, imagery, and design material."
      summary="If you simply want to browse the site or send a link to someone, you are fine. If you want to republish images, copy written material, or reuse project assets, please ask first so we can protect both studio work and client trust."
      updatedOn="April 7, 2026"
      sections={sections}
    />
  );
}
