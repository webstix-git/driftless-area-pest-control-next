import type { Metadata } from "next";
import ServiceDetailLayout, {
  type ServiceDetailContent,
} from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Perimeter Weed Control | Driftless Area Pest Control",
  description:
    "Perimeter weed and vegetation management for building exteriors, fence lines, and facility grounds in Wisconsin.",
};

const icons = {
  vegetation: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22V11" />
      <path d="M12 14c-3 0-5.5-2-6.2-5 3.2.2 5.4 2.2 6.2 5z" />
      <path d="M12 14c3 0 5.5-2 6.2-5-3.2.2-5.4 2.2-6.2 5z" />
      <path d="M12 11c-1.2-2.8-1-5.5.5-7.5" />
      <path d="M12 11c1.2-2.8 1-5.5-.5-7.5" />
      <path d="M8 22c0-2 1-3.5 2.5-4" />
      <path d="M16 22c0-2-1-3.5-2.5-4" />
      <path d="M6.5 22h11" />
    </svg>
  ),
  perimeter: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 17V11.5L12 8l4 3.5V17" />
      <path d="M10.5 17v-3h3v3" />
      <path d="M4 6h16v13H4z" />
      <path d="M4 17h16" />
      <path d="M4 12h1.5M18.5 12H20" />
    </svg>
  ),
  fence: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 21V9" />
      <path d="M12 21V9" />
      <path d="M19 21V9" />
      <path d="M4 9l1-4 1 4" />
      <path d="M11 9l1-4 1 4" />
      <path d="M18 9l1-4 1 4" />
      <path d="M5 12h14" />
      <path d="M5 16h14" />
      <path d="M7.5 21c.3-1.4 1-2.4 2-3" />
      <path d="M14.5 21c.3-1.4 1-2.4 2-3" />
    </svg>
  ),
  exterior: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 9.5 12 3l8 6.5" />
      <path d="M16.5 6.8V4.5h2" />
      <rect x="10" y="7.2" width="1.4" height="1.4" />
      <rect x="12.6" y="7.2" width="1.4" height="1.4" />
      <rect x="10" y="9.6" width="1.4" height="1.4" />
      <rect x="12.6" y="9.6" width="1.4" height="1.4" />
      <path d="M5 21V14.5" />
      <path d="M9 21V14.5" />
      <path d="M13 21V14.5" />
      <path d="M17 21V14.5" />
      <path d="M21 21V14.5" />
      <path d="M5 13.2 6.2 11.5 7.4 13.2" />
      <path d="M9 13.2 10.2 11.5 11.4 13.2" />
      <path d="M13 13.2 14.2 11.5 15.4 13.2" />
      <path d="M17 13.2 18.2 11.5 19.4 13.2" />
      <path d="M5 16.5h16" />
      <path d="M5 19h16" />
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  ),
};

const content: ServiceDetailContent = {
  heroTitle: "Perimeter Weed Control",
  heroDescription:
    "Vegetation management for building perimeters, fence lines, and facility exteriors.",
  heroImage: "/images/service_ag.jpg",
  heroImageAlt: "Perimeter weed control along a facility exterior",
  objectPosition: "100% 40%",
  breadcrumbLabel: "Perimeter Weed Control",
  introEyebrow: "Perimeter Care",
  introTitle: (
    <>
      Clearer edges that reduce pest <span className="text-accent">harborage</span>
    </>
  ),
  introParagraphs: [
    "Weeds and overgrowth around buildings create shelter for rodents and insects. Perimeter vegetation management keeps fence lines, foundations, and facility exteriors easier to inspect and maintain.",
    "This service supports agricultural and commercial sites that need cleaner grounds as part of a broader pest prevention plan.",
  ],
  introImageLabel: "facility perimeter vegetation assessment",
  segmentsTitle: (
    <>
      Areas we <span className="text-accent">manage</span>
    </>
  ),
  segmentsLead: "We keep exterior edges clear so pest pressure has fewer places to hide.",
  segments: [
    {
      title: "Vegetation Management",
      benefit:
        "Practical plant and weed control that supports cleaner grounds around farms and facilities.",
      imageLabel: "vegetation management around facility",
      icon: icons.vegetation,
    },
    {
      title: "Building Perimeters",
      benefit:
        "Clearer foundation edges that make inspections easier and reduce harborage next to structures.",
      imageLabel: "building perimeter weed control",
      icon: icons.perimeter,
    },
    {
      title: "Fence Lines",
      benefit:
        "Fence-line vegetation management that keeps boundaries visible and less inviting to pests.",
      imageLabel: "fence line vegetation clearing",
      icon: icons.fence,
    },
    {
      title: "Facility Exteriors",
      benefit:
        "Exterior grounds support that pairs with rodent, insect, and wildlife prevention programs.",
      imageLabel: "facility exterior grounds management",
      icon: icons.exterior,
    },
  ],
  approachTitle: (
    <>
      <span className="text-accent">Prevention</span>-minded perimeter service
    </>
  ),
  approachLead:
    "We treat perimeter weed control as part of a broader pest prevention plan — not an afterthought.",
  steps: [
    {
      title: "Inspect",
      description:
        "We review building edges, fence lines, and exterior growth that can shelter pests.",
      icon: icons.inspect,
    },
    {
      title: "Identify the Source",
      description:
        "We locate overgrowth and harborage zones that make rodent and insect activity harder to see.",
      icon: icons.identify,
    },
    {
      title: "Customized Plan",
      description:
        "We build a vegetation plan around your site layout, access needs, and maintenance schedule.",
      icon: icons.plan,
    },
    {
      title: "Monitor & Maintain",
      description:
        "We keep follow-up in place so perimeters stay clearer and easier to inspect over time.",
      icon: icons.monitor,
    },
  ],
  calloutEyebrow: "Why Perimeters Matter",
  calloutTitle: (
    <>
      Clear edges support stronger pest <span className="text-accent">prevention</span>
    </>
  ),
  calloutBody:
    "Overgrown perimeters hide activity and give rodents and insects places to shelter. Keeping building edges, fence lines, and facility exteriors clear helps inspections, exclusion work, and ongoing pest programs work better together.",
  calloutPoints: [
    {
      text: "Less harborage around buildings",
      icon: icons.perimeter,
    },
    {
      text: "Easier exterior inspections",
      icon: icons.inspect,
    },
    {
      text: "Cleaner fence lines and edges",
      icon: icons.fence,
    },
    {
      text: "Support for broader IPM programs",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ],
  calloutCta: "Ask about perimeter service",
  calloutImageLabel: "cleared facility perimeter after vegetation management",
  whyTitle: (
    <>
      Why facilities <span className="text-accent">choose</span> us
    </>
  ),
  whyItems: [
    {
      title: "Customized plans",
      description:
        "We design perimeter work around your building layout, fence lines, and access needs.",
      icon: icons.chart,
    },
    {
      title: "27+ years of experience",
      description:
        "Our team brings decades of agricultural and facility experience to exterior site work.",
      icon: icons.experience,
    },
    {
      title: "Root-cause focus",
      description:
        "We treat overgrowth as harborage — a condition that supports pest pressure if left unchecked.",
      icon: icons.root,
    },
    {
      title: "Integrated prevention",
      description:
        "Perimeter weed control pairs well with rodent, insect, and wildlife programs on the same site.",
      icon: icons.shield,
    },
  ],
  complianceEyebrow: "Site Maintenance",
  complianceTitle: (
    <>
      <span className="text-accent">Cleaner</span> grounds for farms and commercial sites
    </>
  ),
  complianceBody:
    "Clear perimeters help managers see issues sooner and keep exterior conditions aligned with pest prevention goals. We document service areas and keep recommendations practical for your maintenance schedule.",
  complianceImageLabel: "perimeter weed service documentation",
  ctaTitle: (
    <>
      Let&apos;s clear the edges around your <span className="text-accent">facility</span>.
    </>
  ),
  ctaBody:
    "Tell us about your perimeter and grounds concerns. Our team will review your site needs and outline a practical next step.",
};

export default function WeedControlPage() {
  return <ServiceDetailLayout content={content} />;
}
