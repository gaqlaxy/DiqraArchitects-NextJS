import LegalPage from "@/app/components/LegalPage";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How DIQRA Architects collects, uses, and protects personal information shared through this website and during project enquiries.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    id: "information-we-collect",
    kicker: "01",
    title: "Information we collect",
    body: [
      {
        paragraphs: [
          "We collect the information you choose to share with us when you fill out our contact forms, send us an email, call us, or request a consultation. That may include your name, phone number, email address, project location, budget range, drawings, mood boards, and any other details you provide so we can understand your brief.",
          "Like most modern websites, we may also receive basic technical information such as IP address, browser type, device information, referral source, and page activity. This helps us understand how the site is being used and where we need to improve clarity, speed, or content.",
        ],
      },
    ],
  },
  {
    id: "how-we-use-it",
    kicker: "02",
    title: "How we use your information",
    body: [
      {
        type: "list",
        items: [
          "To respond to enquiries, schedule consultations, and prepare proposals.",
          "To understand project needs, preferred aesthetics, budgets, and timelines before we begin design discussions.",
          "To improve website performance, user experience, and the quality of our communications.",
          "To send project-related updates or important studio communications you have asked for.",
          "To meet legal, tax, security, or record-keeping obligations where required.",
        ],
      },
    ],
  },
  {
    id: "sharing-and-disclosure",
    kicker: "03",
    title: "When we share information",
    body: [
      {
        paragraphs: [
          "We do not sell personal information. We only share it when it is necessary to run the business responsibly, such as with trusted service providers who support hosting, analytics, communication, accounting, or project coordination.",
          "If a project moves forward, we may share relevant details with consultants, contractors, vendors, or statutory authorities involved in your work, but only to the extent reasonably needed for delivery, approvals, or coordination.",
        ],
      },
    ],
  },
  {
    id: "cookies-and-analytics",
    kicker: "04",
    title: "Cookies and analytics",
    body: [
      {
        paragraphs: [
          "This website may use cookies, analytics tags, and similar technologies to understand visits, page usage, and engagement. These tools help us learn which pages are useful and which ones need refinement.",
          "You can control cookies through your browser settings. Disabling some cookies may affect how certain parts of the website perform, but it will not stop you from contacting us directly by email or phone.",
        ],
      },
    ],
  },
  {
    id: "retention-and-security",
    kicker: "05",
    title: "Retention and security",
    body: [
      {
        paragraphs: [
          "We keep information only for as long as it is reasonably needed for enquiry follow-up, project execution, compliance, dispute resolution, or internal record-keeping. Different kinds of information may be retained for different periods depending on business and legal needs.",
          "We use reasonable administrative and technical measures to protect information, but no website or transmission method can be guaranteed to be perfectly secure. If you are sharing highly sensitive documents, we recommend telling us first so we can agree on the most suitable transfer method.",
        ],
      },
    ],
  },
  {
    id: "your-choices",
    kicker: "06",
    title: "Your choices and rights",
    body: [
      {
        paragraphs: [
          "You may ask us to review, correct, update, or delete the personal information you have shared with us, subject to any legal or operational obligations that require us to retain certain records.",
          "If you no longer want to receive studio updates from us, you can contact us at info@diqraarchitects.com and we will take care of it with as little friction as possible.",
        ],
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy, handled with care."
      intro="The trust people place in a design studio starts long before drawings are approved. This page explains what information we collect, why we collect it, and how we try to handle it thoughtfully while you explore DIQRA or begin a project conversation with us."
      summary="We only ask for information that helps us respond well, design responsibly, and communicate clearly. If anything here feels too formal or too vague, write to us and we will clarify it in plain language."
      updatedOn="April 7, 2026"
      sections={sections}
    />
  );
}
