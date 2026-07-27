import type { Metadata } from "next";
import ServiceDetailLayout, {
  type ServiceDetailContent,
} from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Wildlife Removal | Driftless Area Pest Control",
  description:
    "Bird and wildlife management with exclusion and prevention for Wisconsin farms and commercial facilities.",
};

const icons = {
  exclusion: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V9.5L12 4l7 5.5V21" />
      <rect x="9" y="13" width="6" height="8" rx="0.5" />
      <path d="M10.5 13v-1.5a1.5 1.5 0 0 1 3 0V13" />
      <circle cx="12" cy="16.5" r="0.7" />
      <path d="M12 17.2v1.3" />
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
    </svg>
  ),
};

const content: ServiceDetailContent = {
  heroTitle: "Wildlife Removal",
  heroDescription:
    "Exclusion and prevention for birds, raccoons, and skunks around farms and commercial buildings.",
  heroImage: "/images/service_wildlife_removal.png",
  heroImageAlt: "Technician installing bird exclusion mesh on a commercial building while a pigeon flies away",
  objectPosition: "95% 30%",
  breadcrumbLabel: "Wildlife Removal",
  introEyebrow: "Wildlife Management",
  introTitle: (
    <>
      We keep birds and wildlife out of <span className="text-accent">critical</span> areas
    </>
  ),
  introParagraphs: [
    "Birds, raccoons, and skunks create contamination, damage, and safety issues around farms and commercial buildings. We focus on exclusion and prevention so wildlife cannot nest or return to the same openings.",
    "Our wildlife services protect roofs, vents, docks, and exterior structures while supporting cleaner site conditions for managers and crews.",
  ],
  introImageLabel: "facility wildlife exclusion assessment",
  introImageSrc: "/images/service_wildlife_removal.png",
  introImageAlt: "Technician installing bird exclusion mesh on a commercial building while a pigeon flies away",
  introImageObjectPosition: "100%",
  segmentsTitle: (
    <>
      Wildlife pressure we <span className="text-accent">address</span>
    </>
  ),
  segmentsLead: "We tailor bird and wildlife management to the openings and nesting sites on your property.",
  segments: [
    {
      title: "Bird Control",
      benefit:
        "Manage nesting and roosting pressure that contaminates roofs, docks, and exterior structures.",
      imageLabel: "bird control on facility exterior",
    },
    {
      title: "Raccoons",
      benefit:
        "Respond to raccoon activity around buildings with removal and exclusion that closes access paths.",
      imageLabel: "raccoon wildlife management",
    },
    {
      title: "Skunks",
      benefit:
        "Address skunk pressure around foundations and grounds to reduce odor, damage, and safety issues.",
      imageLabel: "skunk wildlife removal",
    },
    {
      title: "Exclusion & Prevention",
      benefit:
        "Seal vents, openings, and nesting sites so wildlife cannot return to the same entry points.",
      imageLabel: "wildlife exclusion and prevention work",
    },
  ],
  approachTitle: (
    <>
      <span className="text-accent">Exclusion</span>-first wildlife management
    </>
  ),
  approachLead:
    "We follow a connected process so removal work is paired with prevention — not a temporary fix.",
  steps: [
    {
      title: "Inspect",
      description:
        "We assess roofs, vents, docks, and exterior structures for activity and entry points.",
      icon: icons.inspect,
    },
    {
      title: "Identify the Source",
      description:
        "We find where wildlife is nesting or accessing the building — and why they keep returning.",
      icon: icons.identify,
    },
    {
      title: "Customized Plan",
      description:
        "We build a removal and exclusion plan around your structure, schedule, and pressure areas.",
      icon: icons.plan,
    },
    {
      title: "Monitor & Maintain",
      description:
        "We follow up on sealed openings and prevention work so pressure stays under control.",
      icon: icons.monitor,
    },
  ],
  calloutEyebrow: "Exclusion Focus",
  calloutTitle: (
    <>
      Prevention that stops <span className="text-accent">repeat</span> nesting and access
    </>
  ),
  calloutBody:
    "Removal alone is not enough if the same openings stay open. Our bird and wildlife services pair management with exclusion and prevention so farms and commercial sites can keep critical areas cleaner and safer.",
  calloutPoints: [
    { text: "Bird nesting prevention" },
    { text: "Raccoon and skunk management" },
    { text: "Exclusion for vents and openings" },
    { text: "Facility exterior assessments" },
  ],
  calloutCta: "Ask about wildlife service",
  calloutImageLabel: "wildlife exclusion sealing detail",
  whyTitle: (
    <>
      Why facilities <span className="text-accent">choose</span> us
    </>
  ),
  whyItems: [
    {
      title: "Customized plans",
      description:
        "We design each wildlife program around your building layout, nesting sites, and access points.",
      icon: icons.chart,
    },
    {
      title: "27+ years of experience",
      description:
        "Our team brings decades of agricultural and facility experience to farms and commercial sites.",
      icon: icons.experience,
    },
    {
      title: "Root-cause focus",
      description:
        "We look past surface activity to seal openings and correct conditions that invite wildlife back.",
      icon: icons.root,
    },
    {
      title: "Prevention-led service",
      description:
        "We pair removal with exclusion so the same nesting and access issues are less likely to repeat.",
      icon: icons.exclusion,
    },
  ],
  complianceEyebrow: "Site Conditions",
  complianceTitle: (
    <>
      <span className="text-accent">Cleaner</span> exteriors for managers and crews
    </>
  ),
  complianceBody:
    "Wildlife pressure around roofs, docks, and grounds affects sanitation and safety. We document findings and exclusion work so your team has a clear record of what was addressed and what to watch for next.",
  complianceImageLabel: "wildlife service documentation and exclusion map",
  ctaTitle: (
    <>
      Let&apos;s keep wildlife out of <span className="text-accent">critical</span> areas.
    </>
  ),
  ctaBody:
    "Tell us about bird or wildlife pressure on your site. Our team will review your needs and outline a practical next step.",
};

export default function WildlifeRemovalPage() {
  return <ServiceDetailLayout content={content} defaultServiceType="wildlife" />;
}
