import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Service Index",
  description:
    "A–Z index of commercial and agricultural pest control services for Wisconsin farms, warehouses, and industrial facilities.",
  alternates: { canonical: "/service-index" },
};

const serviceIndex = [
  {
    href: "/agricultural-pest-control",
    title: "Agricultural Pest Control",
    desc: "Programs built for dairies, livestock sites, grain storage, and farm facilities where feed quality, animal comfort, and sanitation pressure matter.",
  },
  {
    href: "/commercial-pest-control",
    title: "Commercial Pest Control",
    desc: "Inspection-led service for warehouses, food plants, processing sites, and commercial buildings with documentation and follow-up in mind.",
  },
  {
    href: "/cockroach-guide",
    title: "Cockroach Guide",
    desc: "Practical facility guidance on cockroach warning signs, hotspots, and response steps for kitchens and commercial spaces.",
  },
  {
    href: "/pest-library",
    title: "Pest Library",
    desc: "Reference profiles for common pests that pressure farms, warehouses, and food facilities.",
  },
  {
    href: "/weed-control",
    title: "Perimeter Weed Control",
    desc: "Exterior vegetation management that reduces harborage and improves facility appearance and access around buildings.",
  },
  {
    href: "/rodent-control",
    title: "Rodent Control & Exclusion",
    desc: "Detection, exclusion, and monitoring for mice and rats around docks, storage, mechanical rooms, and structural openings.",
  },
  {
    href: "/services",
    title: "Services Overview",
    desc: "Full overview of inspection-led pest management programs for commercial, industrial, and agricultural sites.",
  },
  {
    href: "/wildlife-removal",
    title: "Wildlife Removal",
    desc: "Humane response for nuisance wildlife pressure around facilities, with focus on entry points and site conditions.",
  },
];

export default function ServiceIndexPage() {
  const sorted = [...serviceIndex].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <SiteShell>
      <PageHero
        title="Service Index"
        description="A clear directory of our commercial and agricultural pest control services for Wisconsin farms and facilities."
        imageSrc="/images/service_commercial.jpg"
        imageAlt="Commercial facility pest management"
        objectPosition="center 30%"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Service Index" },
        ]}
      />

      <section className="page-section bg-cream">
        <div className="container">
          <div className="resources-hub-header reveal-up">
            <span className="section-eyebrow">Directory</span>
            <h2>
              Service <span className="text-accent">Index</span>
            </h2>
            <p>
              Browse services alphabetically, then open the page that fits your facility type and
              pressure points.
            </p>
          </div>

          <div className="service-index-list">
            {sorted.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`service-index-item reveal-up stagger-delay-${(index % 3) + 1}`}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <span className="service-index-arrow" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <line x1="5" x2="19" y1="12" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
