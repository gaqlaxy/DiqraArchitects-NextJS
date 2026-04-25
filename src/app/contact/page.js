import ContactPage from "./ContactPage";
export const metadata = {
  title: "Contact DIQRA Architects | Architecture Studio in Chennai",
  description:
    "Get in touch with DIQRA Architects for your next architectural or interior design project. Located in Urapakkam, Chennai, we serve clients across India.",
  keywords: [
    "contact architects Chennai",
    "architecture firm address Urapakkam",
    "architectural consultancy contact",
    "DIQRA office location",
    "hire building contractors Chennai",
  ],
  alternates: {
    canonical: "https://diqraarchitects.com/contact",
  },
  openGraph: {
    title: "Contact DIQRA Architects | Architecture Studio in Chennai",
    description: "Get in touch for your next architectural project in Chennai and beyond.",
    url: "https://diqraarchitects.com/contact",
    siteName: "DIQRA Architects",
    images: [{ url: "/Hero1.jpeg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DIQRA Architects",
    description: "Start your design journey with us today.",
    images: ["/Hero1.jpeg"],
  },
};
export default function contact() {
  return (
    <>
      <ContactPage />
    </>
  );
}
