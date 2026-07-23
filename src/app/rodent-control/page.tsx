import type { Metadata } from "next";
import ServiceDetailLayout, {
  type ServiceDetailContent,
} from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Rodent Control & Exclusion | Driftless Area Pest Control",
  description:
    "Root-cause rodent control for commercial and industrial facilities across Wisconsin. Inspection-led, prevention-first service with optional remote monitoring.",
};

const icons = {
  food: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V10h4V7h6v3h4v11" />
      <path d="M9 14h.01M12 14h.01M15 14h.01" />
      <path d="M9 17h.01M12 17h.01M15 17h.01" />
      <path d="M7 7V4h2v3M15 7V5h2v2" />
    </svg>
  ),
  warehouse: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 10.5 12 4l9 6.5V21H3V10.5z" />
      <path d="M9 21v-7h6v7" />
      <path d="M3 10.5h18" />
      <path d="M7 14h2M15 14h2" />
    </svg>
  ),
  retail: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 10h16v11H4z" />
      <path d="M4 10 6.5 4h11L20 10" />
      <path d="M9 21v-5h6v5" />
      <path d="M7 13h.01M12 13h.01M17 13h.01" />
    </svg>
  ),
  office: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" />
      <path d="M14 10h5a1 1 0 0 1 1 1v10" />
      <path d="M4 21h16" />
      <path d="M7 8h.01M10 8h.01M7 12h.01M10 12h.01M7 16h.01M10 16h.01" />
      <path d="M17 14h.01M17 17h.01" />
    </svg>
  ),
  inspect: (
    <svg viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  identify: (
    <svg viewBox="0 0 24 24">
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <circle cx="12" cy="12" r="3" />
      <path d="M5.5 5.5 8 8" />
      <path d="m16 16 2.5 2.5" />
      <path d="M18.5 5.5 16 8" />
      <path d="m8 16-2.5 2.5" />
    </svg>
  ),
  plan: (
    <svg viewBox="0 0 24 24">
      <path d="M9 5H5v4" />
      <path d="M15 5h4v4" />
      <path d="M9 19H5v-4" />
      <path d="M15 19h4v-4" />
      <path d="M8 12h8" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24">
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M12 14v7" />
      <path d="M8 21h8" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M8 11h.01" />
      <path d="M12 11h4" />
      <path d="M8 16h.01" />
      <path d="M12 16h4" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </svg>
  ),
  root: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

const content: ServiceDetailContent = {
  heroTitle: "Commercial & Industrial Rodent Control",
  heroDescription:
    "Root-cause rodent control for the facilities that can't afford activity.",
  heroImage: "/images/service_commercial_rodent.jpg",
  heroImageAlt: "Commercial and industrial rodent control",
  objectPosition: "35% 30%",
  breadcrumbLabel: "Rodent Control & Exclusion",
  introEyebrow: "Rodent Control",
  introTitle: (
    <>
      We build rodent programs around the <span className="text-accent">root cause</span>
    </>
  ),
  introParagraphs: [
    "We provide root-cause rodent control for commercial and industrial facilities across Wisconsin — not temporary fixes that leave the same openings and attractants in place. Our team inspects first, then designs prevention-led service around your building, schedule, and pressure areas.",
    "We work with food-safety and biosecurity awareness in mind, so our plans support cleaner operations, clearer documentation, and fewer surprises between visits.",
  ],
  introImageLabel: "facility rodent inspection walkthrough",
  segmentsTitle: (
    <>
      Facilities we <span className="text-accent">protect</span>
    </>
  ),
  segmentsLead: "We tailor rodent control to the way each facility actually operates.",
  segments: [
    {
      title: "Food Processing Facilities",
      benefit:
        "Audit-ready rodent control that supports your food-safety and compliance requirements.",
      imageLabel: "food processing facility rodent program",
      icon: icons.food,
    },
    {
      title: "Warehouses",
      benefit:
        "Protecting stored product, packaging, and inventory from rodent damage and contamination.",
      imageLabel: "warehouse rodent protection",
      icon: icons.warehouse,
    },
    {
      title: "Retail Stores",
      benefit:
        "Discreet, professional service that keeps rodents out of sight and off your shelves.",
      imageLabel: "retail store rodent prevention",
      icon: icons.retail,
    },
    {
      title: "Office Buildings",
      benefit:
        "A clean, healthy workspace through proactive rodent prevention and monitoring.",
      imageLabel: "office building rodent monitoring",
      icon: icons.office,
    },
  ],
  approachTitle: (
    <>
      Root-cause and <span className="text-accent">prevention</span>-first
    </>
  ),
  approachLead:
    "We follow a connected process so every visit builds on the last — not a spray-route checklist.",
  steps: [
    {
      title: "Inspect",
      description:
        "We complete a thorough site inspection to locate activity and entry points.",
      icon: icons.inspect,
    },
    {
      title: "Identify the Source",
      description:
        "We find why rodents are getting in, not just where they are showing up.",
      icon: icons.identify,
    },
    {
      title: "Customized Plan",
      description:
        "We build a facility-specific control and exclusion plan around your layout and risk areas.",
      icon: icons.plan,
    },
    {
      title: "Monitor & Maintain",
      description:
        "We keep proactive monitoring and preventive maintenance in place so pressure stays visible.",
      icon: icons.monitor,
    },
  ],
  calloutEyebrow: "Remote Monitoring",
  calloutTitle: (
    <>
      24/7 rodent <span className="text-accent">monitoring</span> for faster visibility
    </>
  ),
  calloutBody:
    "Our remote rodent monitoring helps us catch activity between visits. Electronic reporting, faster response, preventive maintenance plans, and audit-ready records help your team stay ahead of pressure — especially in food and regulated environments.",
  calloutPoints: [
    {
      text: "Electronic reporting",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 3v4a1 1 0 0 0 1 1h4" />
          <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      ),
    },
    {
      text: "Faster response",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z" />
        </svg>
      ),
    },
    {
      text: "Preventive maintenance plans",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      text: "Audit and food-safety readiness",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ],
  calloutCta: "Ask about remote monitoring",
  calloutImageLabel: "remote rodent monitoring dashboard",
  whyTitle: (
    <>
      Why facilities <span className="text-accent">choose</span> us
    </>
  ),
  whyItems: [
    {
      title: "Customized plans",
      description:
        "We design each rodent program around your facility layout, traffic patterns, and pressure points.",
      icon: icons.chart,
    },
    {
      title: "27+ years of experience",
      description:
        "Our team brings decades of agricultural and facility experience to commercial and industrial sites.",
      icon: icons.experience,
    },
    {
      title: "Root-cause focus",
      description:
        "We look past surface activity to seal entry points and correct conditions that keep rodents coming back.",
      icon: icons.root,
    },
    {
      title: "Biosecurity-conscious service",
      description:
        "We follow site protocols carefully and keep documentation useful for managers and auditors.",
      icon: icons.shield,
    },
  ],
  complianceEyebrow: "Audits & Documentation",
  complianceTitle: (
    <>
      Support for facilities that need <span className="text-accent">clear</span> records
    </>
  ),
  complianceBody:
    "If your site prepares for audits, we can provide electronic reporting and documentation that supports food-safety and compliance conversations. Our goal is simple: keep rodent activity visible, documented, and under control between visits.",
  complianceImageLabel: "audit-ready rodent service documentation",
  ctaTitle: (
    <>
      Let&apos;s keep your facility <span className="text-accent">protected</span>.
    </>
  ),
  ctaBody:
    "Tell us about your site and rodent concerns. Our team will review your facility needs and outline a practical next step.",
};

export default function RodentControlPage() {
  return <ServiceDetailLayout content={content} />;
}
