import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import GrainIcon from "@/components/icons/GrainIcon";
import RodentIcon from "@/components/icons/RodentIcon";
import CockroachIcon from "@/components/icons/CockroachIcon";
import FlyIcon from "@/components/icons/FlyIcon";
import AntIcon from "@/components/icons/AntIcon";
import BirdIcon from "@/components/icons/BirdIcon";

export const metadata: Metadata = {
  title: "Pest Library",
  description:
    "Identify common pests on Wisconsin farms and in commercial facilities—rodents, cockroaches, flies, ants, birds, and stored-product insects.",
  alternates: { canonical: "/pest-library" },
};

const pests = [
  {
    title: "Rodents",
    desc: "Mice and rats contaminate feed, damage materials, and exploit small structural openings around farms and warehouses.",
    href: "/rodent-control",
    cta: "View Rodent Control",
    imageSrc: "/images/pest-library/rodents.jpg",
    imageAlt: "Mouse inside a live-capture trap",
    icon: <RodentIcon className="icon" />,
  },
  {
    title: "Cockroaches",
    desc: "Thrive in warm, moist equipment areas and food-handling spaces. Early sanitation and crack treatments matter.",
    href: "/cockroach-guide",
    cta: "Open Cockroach Guide",
    imageSrc: "/images/pest-library/cockroaches.jpg",
    imageAlt: "Cockroaches gathered on a light-colored surface",
    icon: <CockroachIcon className="icon" />,
  },
  {
    title: "Flies",
    desc: "Common around dairies, manure areas, and food facilities. Source reduction and targeted programs reduce pressure.",
    href: "/agricultural-pest-control",
    cta: "View Farm Pest Programs",
    imageSrc: "/images/pest-library/flies.jpg",
    imageAlt: "Fly resting on a green leaf",
    icon: <FlyIcon className="icon" />,
  },
  {
    title: "Ants",
    desc: "Trail into kitchens, break rooms, and storage areas through foundation gaps and moisture pathways.",
    href: "/commercial-pest-control",
    cta: "View Commercial Pest Control",
    imageSrc: "/images/pest-library/ants.jpg",
    imageAlt: "Ants moving across a light-colored surface",
    icon: <AntIcon className="icon" />,
  },
  {
    title: "Birds",
    desc: "Nesting on roofs, ledges, and vents creates contamination and maintenance issues for commercial buildings.",
    href: "/wildlife-removal",
    cta: "View Wildlife Removal",
    imageSrc: "/images/pest-library/birds.jpg",
    imageAlt: "Two cranes flying across a mountain landscape",
    icon: <BirdIcon className="icon" />,
  },
  {
    title: "Stored-Product Insects",
    desc: "Threaten grain bins, feed mills, and commodity storage when sanitation and monitoring slip.",
    href: "/agricultural-pest-control",
    cta: "View Grain & Feed Programs",
    imageSrc: "/images/pest-library/stored-product-insects.jpg",
    imageAlt: "Bags of stored product on pallets in a warehouse",
    icon: <GrainIcon className="icon" />,
  },
];

export default function PestLibraryPage() {
  return (
    <SiteShell>
      <PageHero
        title="Pest Library"
        description="A practical reference for pests that commonly pressure Wisconsin farms, warehouses, and food sites. Use it to recognize activity early and connect it to the right service response."
        imageSrc="/images/blog_rodent.jpg"
        imageAlt="Rodent peeking from a hole in a concrete wall"
        objectPosition="center 40%"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Pest Library" },
        ]}
      />

      <section className="page-section bg-cream">
        <div className="container">
          <div className="resources-hub-header reveal-up">
            <span className="section-eyebrow">Common Pests</span>
            <h2>
              Pests that pressure <span className="text-accent">Farms</span> &amp; Facilities
            </h2>
            <p>
              Use these profiles to recognize common pressure points around Wisconsin farms,
              warehouses, and food sites — then connect to the service that fits your facility.
            </p>
          </div>
          <div className="content-grid content-grid-3 pest-library-grid">
            {pests.map((pest) => (
              <a
                key={pest.title}
                href={pest.href}
                className="content-card content-card-link content-card-media-top reveal-up"
              >
                <div className="content-card-media">
                  <img
                    src={pest.imageSrc}
                    alt={pest.imageAlt}
                    style={{ aspectRatio: "16 / 10", objectFit: "cover", width: "100%", display: "block" }}
                  />
                </div>
                <div className="content-card-body">
                  <span className="resource-card-icon" aria-hidden="true">
                    {pest.icon}
                  </span>
                  <h3>{pest.title}</h3>
                  <p>{pest.desc}</p>
                  <span className="blog-card-link">
                    {pest.cta}
                    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
