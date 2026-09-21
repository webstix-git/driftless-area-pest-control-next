import type { Metadata } from "next";
import ServiceDetailLayout, {
  type ServiceDetailContent,
} from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Rodent Control & Exclusion | Driftless Area Pest Control",
  description:
    "Root-cause rodent control for commercial and industrial facilities across Wisconsin. Inspection-led, prevention-first service with optional remote monitoring.",
  alternates: { canonical: "/rodent-control" },
};

const icons = {
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
  heroImage: "/images/service_commercial_rodent.png",
  heroImageAlt: "Mouse on a warehouse floor near stored goods",
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
  introImageSrc: "/images/service_commercial_rodent.png",
  introImageAlt: "Mouse on a warehouse floor near stored goods",
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
      imageSrc: "/images/rodent-control/food-processing.jpg",
      imageAlt: "Produce crates stored inside a refrigerated food facility",
    },
    {
      title: "Warehouses",
      benefit:
        "Protecting stored product, packaging, and inventory from rodent damage and contamination.",
      imageLabel: "warehouse rodent protection",
      imageSrc: "/images/rodent-control/warehouse.jpg",
      imageAlt: "Wrapped produce pallets in a warehouse aisle",
    },
    {
      title: "Retail Stores",
      benefit:
        "Discreet, professional service that keeps rodents out of sight and off your shelves.",
      imageLabel: "retail store rodent prevention",
      imageSrc: "/images/commercial-retail-store.png?v=1",
      imageAlt: "Rodent control treatment in a retail storage area",
    },
    {
      title: "Office Buildings",
      benefit:
        "A clean, healthy workspace through proactive rodent prevention and monitoring.",
      imageLabel: "office building rodent monitoring",
      imageSrc: "/images/rodent-control/office-building.jpg",
      imageAlt: "Clean modern office workspace with glass meeting rooms",
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
    { text: "Electronic reporting" },
    { text: "Faster response" },
    { text: "Preventive maintenance plans" },
    { text: "Audit and food-safety readiness" },
  ],
  calloutCta: "Ask about remote monitoring",
  calloutImageLabel: "remote rodent monitoring dashboard",
  calloutImageSrc: "/images/rodent-control/remote-monitoring.jpg",
  calloutImageAlt: "Technicians in protective equipment inspecting a facility",
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
      title: "Built on Experience",
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
  complianceImageSrc: "/images/rodent-control/audit-documentation.jpg",
  complianceImageAlt: "Staff organizing facility audit and compliance documents",
  ctaTitle: (
    <>
      Let&apos;s keep your facility <span className="text-accent">protected</span>.
    </>
  ),
  ctaBody:
    "Tell us about your site and rodent concerns. Our team will review your facility needs and outline a practical next step.",
};

export default function RodentControlPage() {
  return <ServiceDetailLayout content={content} defaultServiceType="rodent" />;
}
