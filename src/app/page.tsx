import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import FaqStructuredData from "@/components/FaqStructuredData";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    name: "Do you serve homes, or only businesses and farms?",
    text: "Our focus is commercial, industrial, and agricultural clients. If you manage a farm, processing plant, warehouse, or similar facility in our service area, we are set up to help.",
  },
  {
    name: "What does “root-cause” pest control mean?",
    text: "It means we look for how pests get in and what keeps them there — entry gaps, harborage, and attractants — then seal and correct those issues instead of relying only on repeated sprays.",
  },
  {
    name: "Can you work within farm biosecurity protocols?",
    text: "Yes. Our team follows site biosecurity rules, communicates with the people on the ground, and plans treatments around livestock health and facility schedules.",
  },
  {
    name: "What is remote monitoring, and who needs it?",
    text: "Remote monitoring uses electronic sensors to track pest activity between visits. It is especially useful for food processors and commercial sites that need faster alerts and audit-ready digital records.",
  },
  {
    name: "Which areas of Wisconsin do you cover?",
    text: "We serve southwestern and central Wisconsin, including Richland, Sauk, Vernon, Crawford, Grant, Iowa, Lafayette, Juneau, and neighboring counties in the Driftless Region.",
  },
  {
    name: "How do I request an inspection or quote?",
    text: "Call 608-604-9190 or use the Request a Free Inspection form. Tell us about your facility type and location, and our team will follow up to schedule a visit.",
  },
];

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        as="image"
        href="/images/hero_commercial_panorama_4k.webp"
        type="image/webp"
      />
      <FaqStructuredData faqs={homeFaqs} />
      <HomePage />
    </>
  );
}
