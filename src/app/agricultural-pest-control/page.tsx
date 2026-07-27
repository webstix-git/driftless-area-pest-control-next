import type { Metadata } from "next";
import ServiceDetailLayout, {
  type ServiceDetailContent,
} from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Agricultural Pest Control | Driftless Area Pest Control",
  description:
    "Biosecurity-aware agricultural pest management for dairy, poultry, hog, grain, and feed operations in Wisconsin.",
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
  heroTitle: "Agricultural Pest Control",
  heroDescription:
    "Biosecurity-aware pest management for dairy, poultry, hog, grain, and feed operations.",
  heroImage: "/images/service_ag_pest.png",
  heroImageAlt: "Technician spraying treatment across agricultural turf and crop grounds",
  objectPosition: "58% 20%",
  breadcrumbLabel: "Agricultural Pest Control",
  introEyebrow: "Agricultural Operations",
  introTitle: (
    <>
      Service designed around how farms actually <span className="text-accent">run</span>
    </>
  ),
  introParagraphs: [
    "Agricultural sites need pest control that respects livestock health, feed areas, and biosecurity protocols. Our team comes from farm work, so we plan around production schedules instead of forcing a generic spray route.",
    "We help dairies, poultry houses, hog facilities, grain sites, and feed mills reduce rodent, fly, and insect pressure with inspection-led programs.",
  ],
  introImageLabel: "agricultural facility pest walkthrough",
  introImageSrc: "/images/service_ag_pest.png",
  introImageAlt: "Technician spraying treatment across agricultural turf and crop grounds",
  segmentsEyebrow: "Who We Serve",
  segmentsTitle: (
    <>
      Farms and facilities we <span className="text-accent">support</span>
    </>
  ),
  segmentsLead: "We tailor agricultural pest management to the way each operation actually runs.",
  segments: [
    {
      title: "Dairy Farms",
      benefit:
        "Support for barns, parlors, and calf areas with fly and rodent programs built around milk quality and herd health.",
      imageLabel: "dairy farm pest management",
    },
    {
      title: "Chicken Farms",
      benefit:
        "Poultry-focused service that accounts for housing layout, manure pressure, and biosecurity protocols.",
      imageLabel: "poultry facility pest control",
    },
    {
      title: "Hog Facilities",
      benefit:
        "Practical pest pressure reduction around barns and production areas without disrupting livestock routines.",
      imageLabel: "hog facility pest program",
    },
    {
      title: "Grain & Feed Operations",
      benefit:
        "Defense for grain facilities, feed mills, and stored-product areas where insects and rodents put inventory at risk.",
      imageLabel: "grain and feed mill pest protection",
    },
  ],
  approachTitle: (
    <>
      Root-cause and <span className="text-accent">prevention</span>-first
    </>
  ),
  approachLead:
    "We follow a connected process so every visit builds on the last — matched to farm schedules and biosecurity needs.",
  steps: [
    {
      title: "Inspect",
      description:
        "We walk barns, bins, feed areas, and perimeters to locate activity and harborage.",
      icon: icons.inspect,
    },
    {
      title: "Identify the Source",
      description:
        "We find why pests are present around livestock, feed, and structural openings.",
      icon: icons.identify,
    },
    {
      title: "Customized Plan",
      description:
        "We build a farm-specific plan around production timing, livestock areas, and pressure zones.",
      icon: icons.plan,
    },
    {
      title: "Monitor & Maintain",
      description:
        "We keep follow-up and preventive maintenance in place so pressure stays visible between visits.",
      icon: icons.monitor,
    },
  ],
  calloutEyebrow: "Biosecurity",
  calloutTitle: (
    <>
      Built for <span className="text-accent">biosecurity</span>-conscious livestock operations
    </>
  ),
  calloutBody:
    "We follow site protocols carefully and plan around livestock facilities, feed mills, and production schedules. Our agricultural work supports dairies, poultry, hog, grain, and feed sites that need pest pressure reduced without putting animal health or biosecurity at risk.",
  calloutPoints: [
    { text: "Dairy, poultry, and hog support" },
    { text: "Grain facilities and feed mills" },
    { text: "Livestock facility awareness" },
    { text: "Biosecurity-conscious protocols" },
  ],
  calloutCta: "Ask about farm service",
  calloutImageLabel: "biosecurity-aware farm pest service",
  whyTitle: (
    <>
      Why farms <span className="text-accent">choose</span> us
    </>
  ),
  whyItems: [
    {
      title: "Customized plans",
      description:
        "We design each program around your barns, bins, traffic patterns, and pressure points.",
      icon: icons.chart,
    },
    {
      title: "27+ years of experience",
      description:
        "Our team brings decades of hands-on dairy and agricultural experience to every site visit.",
      icon: icons.experience,
    },
    {
      title: "Root-cause focus",
      description:
        "We look past surface activity to correct entry points and conditions that keep pests returning.",
      icon: icons.root,
    },
    {
      title: "Biosecurity-conscious service",
      description:
        "We respect livestock protocols and keep communication clear for managers and crews.",
      icon: icons.shield,
    },
  ],
  complianceEyebrow: "Farm Operations",
  complianceTitle: (
    <>
      Support for livestock and <span className="text-accent">stored-product</span> sites
    </>
  ),
  complianceBody:
    "Whether you manage a dairy, poultry house, hog facility, grain site, or feed mill, we can document findings and keep service records useful for managers. Our goal is practical pest pressure reduction that fits how your operation runs day to day.",
  complianceImageLabel: "agricultural pest service documentation",
  ctaTitle: (
    <>
      Let&apos;s protect your farm <span className="text-accent">operation</span>.
    </>
  ),
  ctaBody:
    "Tell us about your farm or facility. Our team will review your site needs and outline a practical next step.",
};

export default function AgriculturalPestControlPage() {
  return (
    <ServiceDetailLayout content={content} defaultServiceType="agricultural" />
  );
}
