import type { Metadata } from "next";
import {
  CookingPot,
  Egg,
  Fan,
  Grip,
  MoonStar,
  Package,
  RectangleEllipsis,
  Settings,
  Waves,
  Wind,
} from "lucide-react";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Cockroach Guide | Driftless Area Pest Control",
  description:
    "A practical cockroach guide for commercial kitchens, food plants, and facility managers in Wisconsin.",
};

const warningSigns = [
  {
    title: "Droppings",
    detail: "Near appliances, sinks, drains, and baseboards.",
    icon: <Grip aria-hidden="true" />,
  },
  {
    title: "Warm motors",
    detail: "Activity around compressors and electrical panels.",
    icon: <Settings aria-hidden="true" />,
  },
  {
    title: "Sticky monitors",
    detail: "Live or dead insects in sticky monitors and glue boards.",
    icon: <RectangleEllipsis aria-hidden="true" />,
  },
  {
    title: "Egg cases",
    detail: "Oothecae in cracks, hinges, and equipment voids.",
    icon: <Egg aria-hidden="true" />,
  },
  {
    title: "Musty odor",
    detail: "In severe or long-running pressure areas.",
    icon: <Wind aria-hidden="true" />,
  },
  {
    title: "Night sightings",
    detail: "During night checks or early-morning open.",
    icon: <MoonStar aria-hidden="true" />,
  },
];

const hotspots = [
  {
    title: "Kitchens & Prep Areas",
    desc: "Food residue, grease films, and moisture under equipment create reliable harborage.",
    img: "/images/facility_kitchen_prep.png",
    imgAlt: "Commercial kitchen prep area with stainless equipment",
    icon: <CookingPot aria-hidden="true" />,
  },
  {
    title: "Floor Drains & Wet Zones",
    desc: "Damp drains, mop sinks, and poorly sealed floor transitions invite overnight travel.",
    img: "/images/facility_floor_drain.png",
    imgAlt: "Circular stainless floor drain in a commercial facility",
    icon: <Waves aria-hidden="true" />,
  },
  {
    title: "Warm Mechanical Rooms",
    desc: "Motors, panels, and heat sources attract cockroaches seeking shelter during the day.",
    img: "/images/facility_mechanical_room.png",
    imgAlt: "Warm mechanical room with motors and electrical equipment",
    icon: <Fan aria-hidden="true" />,
  },
  {
    title: "Storage & Packaging",
    desc: "Cardboard, pallets, and cluttered corners give cover near food and packaging inventory.",
    img: "/images/facility_storage_packaging.png",
    imgAlt: "Warehouse storage aisle with pallet racking and packaging",
    icon: <Package aria-hidden="true" />,
  },
];

const steps = [
  {
    title: "Inspect Harborage",
    desc: "Check drains, equipment legs, wall voids, hinges, and warm mechanical areas where cockroaches hide during the day.",
  },
  {
    title: "Reduce Attractants",
    desc: "Improve sanitation around prep areas, trash rooms, and moisture sources so treatments hold longer.",
  },
  {
    title: "Treat & Monitor",
    desc: "Use targeted crack-and-crevice work with follow-up monitoring so activity trends stay visible between visits.",
  },
];

export default function CockroachGuidePage() {
  return (
    <SiteShell>
      <div className="guide-page">
        <PageHero
          title="Cockroach Guide"
          description="A practical field guide for commercial kitchens, food plants, and facility spaces where warmth, moisture, and harborage create risk."
          imageSrc="/images/cockroach_guide_hero.png"
          imageAlt="American cockroach in detailed macro view for facility identification"
          objectPosition="center 45%"
        />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Cockroach Guide" },
          ]}
        />

        <section className="rc-intro page-section">
          <div className="container rc-intro-grid">
            <div className="rc-intro-copy reveal-up">
              <span className="section-eyebrow">Facility Guide</span>
              <h2>
                What facility teams should <span className="text-accent">watch for</span>
              </h2>
              <p>
                Cockroaches exploit warmth, moisture, and food residue around equipment bases,
                floor drains, and storage rooms. In commercial settings, early signs usually show
                up before staff see large numbers of insects.
              </p>
              <p>
                A strong response combines sanitation corrections, crack-and-crevice treatment, and
                follow-up monitoring — not one-time spraying alone.
              </p>
              <ul className="rc-intro-highlights">
                <li>Kitchens &amp; food plants</li>
                <li>Warehouses &amp; break areas</li>
                <li>Early detection focus</li>
              </ul>
            </div>

            <div className="rc-intro-media guide-id-media reveal-up stagger-delay-1">
              <div className="guide-id-pair">
                <figure className="guide-id-card">
                  <img
                    src="/images/cockroach_top.png"
                    alt="Top-down identification view of an American cockroach"
                  />
                  <figcaption>
                    <strong>Top-down ID</strong>
                    <span>American cockroach</span>
                  </figcaption>
                </figure>
                <figure className="guide-id-card">
                  <img
                    src="/images/cockroach_side.png"
                    alt="Side profile identification view of an American cockroach"
                  />
                  <figcaption>
                    <strong>Side profile ID</strong>
                    <span>Facility identification</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="rc-why page-section bg-cream">
          <div className="container">
            <div className="rc-section-header reveal-up">
              <span className="section-eyebrow">Warning Signs</span>
              <h2>
                Common signs of <span className="text-accent">activity</span>
              </h2>
              <p>
                These signals often appear before staff see large numbers of insects — catch them
                early and pressure is easier to contain.
              </p>
            </div>

            <div className="rc-why-grid guide-signs-grid">
              {warningSigns.map((item, index) => (
                <article
                  key={item.title}
                  className={`rc-why-item reveal-up stagger-delay-${(index % 3) + 1}`}
                >
                  <span className="rc-why-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rc-facilities page-section">
          <div className="container">
            <div className="rc-facilities-header reveal-up">
              <span className="section-eyebrow">Where Pressure Builds</span>
              <h2>
                Hotspots in <span className="text-accent">commercial</span> facilities
              </h2>
              <p>
                Focus inspections where heat, moisture, and food residue overlap. These areas drive
                most repeat cockroach pressure.
              </p>
            </div>

            <div className="rc-serve-grid">
              {hotspots.map((item, index) => (
                <article
                  key={item.title}
                  className={`rc-serve-card reveal-up stagger-delay-${(index % 3) + 1}`}
                >
                  <div className="rc-serve-media">
                    <div className="rc-media" style={{ aspectRatio: "4 / 3" }}>
                      <img src={item.img} alt={item.imgAlt} />
                    </div>
                  </div>
                  <div className="rc-serve-copy">
                    <span className="rc-serve-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rc-approach page-section">
          <div className="container">
            <div className="rc-section-header reveal-up">
              <span className="section-eyebrow">Response Steps</span>
              <h2>
                Practical next steps for <span className="text-accent">managers</span>
              </h2>
              <p>
                Treat cockroach pressure like a facility process: inspect, correct conditions, then
                monitor so you know whether activity is falling.
              </p>
            </div>

            <ol className="rc-flow guide-flow reveal-up">
              {steps.map((step, index) => (
                <li key={step.title} className="rc-flow-step">
                  <article className="rc-flow-card">
                    <div className="rc-flow-card-top">
                      <span className="rc-flow-num">{index + 1}</span>
                    </div>
                    <span className="rc-flow-label">Step {index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <PageCTA
          title="Request a Free Inspection"
          description="Seeing cockroach pressure in a kitchen, food plant, or facility space? Tell us about your site and we will outline a practical next step."
        />
      </div>
    </SiteShell>
  );
}
