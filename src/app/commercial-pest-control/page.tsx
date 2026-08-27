import type { Metadata } from "next";
import ServiceDetailLayout, {
  type ServiceDetailContent,
} from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Commercial Pest Control | Driftless Area Pest Control",
  description:
    "Commercial and industrial pest control for warehouses, food plants, retail sites, and office facilities in Wisconsin. Inspection-led insect and facility programs.",
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
      <path d="M15 2H9a1 1 0 0 0-1 1v2h8V3a1 1 0 0 0-1-1Z" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="m9 14 2 2 4-4" />
    </svg>
  ),
};

const content: ServiceDetailContent = {
  heroTitle: "Commercial Pest Control",
  heroDescription:
    "Inspection-led programs for warehouses, food plants, retail sites, and commercial buildings.",
  heroImage: "/images/service_insect_control.png",
  heroImageAlt: "Orange beetle larvae feeding on plant leaves",
  objectPosition: "10% 15%",
  breadcrumbLabel: "Commercial Pest Control",
  introEyebrow: "Commercial Facilities",
  introTitle: (
    <>
      We protect operations without disrupting <span className="text-accent">production</span>
    </>
  ),
  introParagraphs: [
    "Commercial facilities need pest programs that hold up under audits, foot traffic, and production schedules. We inspect first, then build a plan around entry points, sanitation pressure, and high-risk zones.",
    "From warehouses to food plants and retail sites, our team focuses on practical prevention, targeted insect control, and clear reporting your managers can use.",
  ],
  introImageLabel: "commercial facility pest inspection",
  introImageSrc: "/images/service_insect_control.png",
  introImageAlt: "Orange beetle larvae feeding on plant leaves",
  segmentsTitle: (
    <>
      Facilities we <span className="text-accent">protect</span>
    </>
  ),
  segmentsLead:
    "We tailor commercial pest control to the way each site actually operates — not a one-route spray checklist.",
  segments: [
    {
      title: "Food Processing Facilities",
      benefit:
        "Targeted insect and facility programs that support food-safety and compliance conversations.",
      imageLabel: "food plant commercial pest program",
      imageSrc: "/images/commercial-food-processing.png?v=1",
      imageAlt: "Workers on a food processing line with stainless steel equipment",
      objectPosition: "center 45%",
    },
    {
      title: "Warehouses",
      benefit:
        "Protecting stored product, packaging, and inventory from insect pressure and contamination.",
      imageLabel: "warehouse insect and pest control",
      imageSrc: "/images/service_commercial_rodent.png",
      imageAlt: "Warehouse and industrial storage pest protection",
    },
    {
      title: "Retail Stores",
      benefit:
        "Discreet service for cockroaches, ants, spiders, and flies that keeps pests off the sales floor.",
      imageLabel: "retail store commercial pest service",
      imageSrc: "/images/commercial-retail-store.png?v=1",
      imageAlt: "Clean grocery retail aisle with produce and packaged goods",
      objectPosition: "center 40%",
    },
    {
      title: "Office Buildings",
      benefit:
        "A cleaner workspace through proactive insect prevention and monitoring around common areas.",
      imageLabel: "office building pest prevention",
      imageSrc: "/images/commercial-office-buildings.png?v=1",
      imageAlt: "Modern commercial office buildings for office pest prevention",
      objectPosition: "center 32%",
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
        "We complete a thorough site inspection to locate activity, harborage, and pressure areas.",
      icon: icons.inspect,
    },
    {
      title: "Identify the Source",
      description:
        "We find why insects and pests are present — not just where they are showing up.",
      icon: icons.identify,
    },
    {
      title: "Customized Plan",
      description:
        "We build a facility-specific plan covering cockroaches, ants, spiders, flies, grain insects, and stinging pests when appropriate.",
      icon: icons.plan,
    },
    {
      title: "Monitor & Maintain",
      description:
        "We keep proactive monitoring and follow-up in place so pressure stays visible between visits.",
      icon: icons.monitor,
    },
  ],
  calloutEyebrow: "Insect Coverage",
  calloutTitle: (
    <>
      Targeted control for the <span className="text-accent">pests</span> that disrupt facilities
    </>
  ),
  calloutBody:
    "Our commercial programs address cockroaches, ants, spiders, flies, grain insects, and bees & wasps when appropriate — with treatments matched to your building layout, sanitation pressure, and production schedule.",
  calloutPoints: [
    { text: "Cockroaches, ants, and spiders" },
    { text: "Flies and grain insects" },
    { text: "Bees & wasps when appropriate" },
    { text: "Documentation for site managers" },
  ],
  calloutCta: "Ask about commercial service",
  calloutImageLabel: "commercial insect control treatment detail",
  calloutImageSrc: "/images/blog_ants.jpg",
  calloutImageAlt: "Close detail of insect activity relevant to commercial facilities",
  calloutBgImage: "/images/service_insect_control.png",
  whyTitle: (
    <>
      Why commercial facilities <span className="text-accent">choose</span> us
    </>
  ),
  whyItems: [
    {
      title: "Customized plans",
      description:
        "We design each program around your facility layout, traffic patterns, and pressure points.",
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
        "We look past surface activity to correct conditions that keep pests coming back.",
      icon: icons.root,
    },
    {
      title: "Audit-aware service",
      description:
        "We keep documentation useful for managers and support clearer compliance conversations.",
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
    "If your site prepares for audits, we can provide reporting and documentation that supports food-safety and compliance conversations. Our goal is simple: keep pest activity visible, documented, and under control between visits.",
  complianceHighlights: [
    "Clear visit reports for managers",
    "Food-safety conversation support",
    "Activity visibility between visits",
  ],
  complianceImageLabel: "audit-ready commercial pest documentation",
  complianceImageSrc: "/images/service_remote_monitoring.png",
  complianceImageAlt: "Remote monitoring dashboard with gateway and floor sensors in a warehouse",
  ctaTitle: (
    <>
      Let&apos;s keep your facility <span className="text-accent">protected</span>.
    </>
  ),
  ctaBody:
    "Tell us about your site and pest concerns. Our team will review your facility needs and outline a practical next step.",
};

export default function CommercialPestControlPage() {
  return <ServiceDetailLayout content={content} defaultServiceType="insect" />;
}
