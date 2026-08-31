import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About Us | Driftless Area Pest Control",
  description:
    "Learn how Driftless Area Pest Control delivers farm-based, root-cause pest management for Wisconsin dairies, grain sites, warehouses, and industrial facilities.",
};

const experienceCards = [
  {
    value: "Trusted",
    label: "Built on Experience",
    desc: "Hands-on experience serving farms and commercial facilities across southwestern Wisconsin.",
  },
  {
    value: "15+",
    label: "Counties Served",
    desc: "Local coverage across the Driftless Region and neighboring counties.",
  },
  {
    value: "Root-Cause",
    label: "Inspection Focus",
    desc: "We inspect first, then seal openings and correct attractants.",
  },
  {
    value: "Audit-Ready",
    label: "Documentation",
    desc: "Clear records and optional remote monitoring for regulated sites.",
  },
];

const industries = [
  {
    title: "Dairy Farms",
    desc: "Fly and rodent programs built around barns, parlors, calf areas, and livestock movement — without disrupting milking schedules.",
    iconSrc: "/images/icons/industry-dairy.png",
    iconAlt: "Dairy farms",
  },
  {
    title: "Grain & Feed",
    desc: "Bins, mills, and feed sites where insects and rodents threaten inventory, packaging integrity, and outbound product quality.",
    iconSrc: "/images/icons/industry-grain.png",
    iconAlt: "Grain and feed",
  },
  {
    title: "Food Processing",
    desc: "Inspection-led insect and facility programs that support cleaner operations and clearer food-safety conversations.",
    iconSrc: "/images/icons/industry-food.png",
    iconAlt: "Food processing",
  },
  {
    title: "Warehouses",
    desc: "Targeted control for docks, racking, packaging zones, and storage areas where pests move with freight and foot traffic.",
    iconSrc: "/images/icons/industry-warehouse.png",
    iconAlt: "Warehouses",
  },
  {
    title: "Livestock Facilities",
    desc: "Practical pressure reduction around hog, poultry, and livestock housing — planned around animal health and daily workflows.",
    iconSrc: "/images/icons/industry-livestock.png",
    iconAlt: "Livestock facilities",
  },
  {
    title: "Retail & Offices",
    desc: "Low-disruption programs that keep cockroaches, ants, spiders, and flies away from staff, customers, and common areas.",
    iconSrc: "/images/icons/industry-retail.png",
    iconAlt: "Retail and offices",
  },
];

const counties = [
  "Richland County",
  "Sauk County",
  "Vernon County",
  "Crawford County",
  "Grant County",
  "Iowa County",
  "Lafayette County",
  "Juneau County",
  "La Crosse County",
  "Monroe County",
  "Columbia County",
  "Jackson County",
  "Adams County",
  "Western Dane County",
  "Trempealeau County",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="about-page">
      {/* 1. Hero */}
      <PageHero
        title="About Us"
        description="A farm-rooted pest control team serving dairies, grain sites, warehouses, and industrial facilities across southwestern Wisconsin."
        imageSrc="/images/about_intro_main.png"
        imageAlt="Technician reviewing dairy facility monitoring data on a tablet inside a Wisconsin dairy barn"
        objectPosition="center 35%"
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

      {/* 2. Our Story — Image | Content */}
      <section className="about-intro-section" id="our-story">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-visuals reveal-up">
              <div className="about-intro-main-img">
                <img
                  src="/images/about_intro_main.png"
                  alt="Technician reviewing dairy facility monitoring data on a tablet inside a Wisconsin dairy barn"
                />
                <span className="about-intro-experience-badge">
                  <span className="about-intro-experience-kicker">Trusted Expertise</span>
                  <strong>3+</strong>
                  <span className="about-intro-experience-label">Years Experience</span>
                </span>
              </div>
              <div className="about-intro-overlap-img">
                <img
                  src="/images/about_intro_overlap.png"
                  alt="Inspector using a flashlight and tablet to check under commercial kitchen equipment"
                />
              </div>
            </div>

            <div className="about-intro-content reveal-up stagger-delay-1">
              <span className="about-intro-badge">Our Story</span>
              <h2>
                Pest Control Built Around How <span className="text-accent">Farms</span> and
                Facilities Operate
              </h2>
              <p className="about-intro-lead">
                Driftless Area Pest Control has been serving farms, grain sites, warehouses, and
                industrial facilities across southwestern Wisconsin for the past 3 years. Our
                approach is shaped by more than 27 years of hands-on agricultural experience,
                giving us a practical understanding of farm operations, biosecurity, and the
                day-to-day challenges commercial facilities face.
              </p>
              <p className="about-intro-lead">
                Every service begins with a thorough site walkthrough. We identify entry points,
                problem areas, and the conditions that attract pests, then build a customized plan
                that fits your facility, your schedule, and your long-term goals.
              </p>
              <a href="/contact" className="btn btn-service-green about-intro-cta">
                Request a Free Inspection
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="5" x2="19" y1="12" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Experience Cards */}
      <section className="page-section bg-tan" id="experience">
        <div className="container">
          <div className="page-section-header reveal-up">
            <span className="section-eyebrow">Experience</span>
            <h2>Built From Years of Farm and Facility Work</h2>
          </div>
          <div className="about-exp-grid">
            {experienceCards.map((card, index) => (
              <article
                key={card.label}
                className={`content-card about-exp-card reveal-up${index === 1 ? " stagger-delay-1" : ""}${index === 2 ? " stagger-delay-2" : ""}`}
              >
                <p className="about-exp-value">{card.value}</p>
                <h3>{card.label}</h3>
                <p>{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Businesses Choose Us — Content | Image */}
      <section className="why-section" id="why-us">
        <div className="container">
          <div className="why-layout">
            <div className="why-copy reveal-up">
              <span className="why-badge">Why Choose Us</span>
              <h2>
                Why Businesses <span className="text-accent">Choose</span> Driftless Area Pest
                Control
              </h2>
              <p className="why-lead">
                Every property is different, so we take the time to inspect the situation, understand
                what's causing the problem, and recommend the right solution for your business or
                farm.
              </p>

              <div className="why-features">
                <div className="why-feature">
                  <div className="why-feature-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </div>
                  <div>
                    <h3>Root-Cause Inspections</h3>
                    <p>
                      We find entry points, harborage, and attractants — then seal gaps instead of
                      only treating symptoms.
                    </p>
                  </div>
                </div>
                <div className="why-feature">
                  <div className="why-feature-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </svg>
                  </div>
                  <div>
                    <h3>Biosecurity-Aware Service</h3>
                    <p>
                      We follow farm and food-facility protocols and keep documentation ready for
                      audits and site managers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-visual reveal-up stagger-delay-1">
              <div className="why-gallery">
                <div className="why-gallery-layer why-gallery-main">
                  <img
                    src="/images/whychoose-big3.png"
                    alt="Technician kneeling to inspect a facility foundation with a tablet near grain silos"
                  />
                </div>
                <div className="why-gallery-layer why-gallery-mid">
                  <img
                    src="/images/why_insect.jpg"
                    alt="Technician sealing entry points along a facility foundation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Process — Timeline */}
      <section className="rc-approach page-section about-process" id="process">
        <div className="container">
          <div className="rc-section-header reveal-up">
            <span className="section-eyebrow">Our Process</span>
            <h2>A connected process from first walkthrough to follow-up</h2>
            <p>
              Every visit builds on the last — not a spray-route checklist disconnected from your
              site.
            </p>
          </div>
          <ol className="rc-flow reveal-up">
            <li className="rc-flow-step">
              <article className="rc-flow-card">
                <span className="rc-flow-label">Step 1</span>
                <h3>Inspect</h3>
                <p>We walk the site to locate activity, entry points, and pressure areas.</p>
              </article>
            </li>
            <li className="rc-flow-step">
              <article className="rc-flow-card">
                <span className="rc-flow-label">Step 2</span>
                <h3>Identify the Source</h3>
                <p>We find why pests are present — not just where they are showing up.</p>
              </article>
            </li>
            <li className="rc-flow-step">
              <article className="rc-flow-card">
                <span className="rc-flow-label">Step 3</span>
                <h3>Customized Plan</h3>
                <p>We build a facility-specific program around your layout and schedule.</p>
              </article>
            </li>
            <li className="rc-flow-step">
              <article className="rc-flow-card">
                <span className="rc-flow-label">Step 4</span>
                <h3>Monitor &amp; Maintain</h3>
                <p>We keep monitoring and follow-up in place so pressure stays visible.</p>
              </article>
            </li>
          </ol>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="audience-section about-industries" id="industries">
        <div className="about-industries-bg" aria-hidden="true">
          <img src="/images/why_farm_facility.jpg" alt="" />
        </div>
        <div className="about-industries-overlay" aria-hidden="true"></div>
        <div className="container">
          <div className="audience-header reveal-up">
            <span className="section-eyebrow">Industries We Serve</span>
            <h2>
              Facilities Across <span className="text-accent">Agriculture</span> and Industry
            </h2>
            <p>
              Every site runs differently. We build pest programs around your facility type,
              biosecurity needs, and production schedule — not a one-route spray checklist.
            </p>
          </div>
          <div className="audience-grid">
            {industries.map((item, index) => (
              <article
                key={item.title}
                className={`audience-card reveal-up${index === 1 ? " stagger-delay-1" : ""}${index === 2 ? " stagger-delay-2" : ""}`}
              >
                <div className="audience-icon" aria-hidden="true">
                  <img src={item.iconSrc} alt="" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service Area */}
      <section className="area-section" id="service-area">
        <div className="container">
          <div className="area-grid">
            <div className="area-content reveal-up">
              <span className="section-eyebrow">Service Area</span>
              <h2>
                Serving Southwestern <span className="text-accent">Wisconsin</span>
              </h2>
              <p>
                Based in the Driftless Region, we provide commercial and agricultural pest control
                across Richland, Sauk, Vernon, Crawford, Grant, Iowa, and neighboring counties —
                with rapid response when your facility needs help.
              </p>

              <div className="county-tags">
                {counties.map((county) => (
                  <span key={county} className="county-tag">
                    {county}
                  </span>
                ))}
              </div>

              <a href="/service-area" className="btn btn-accent">
                View Full Service Area
              </a>
            </div>

            <div
              className="map-visual reveal-up stagger-delay-1"
              style={{
                padding: 0,
                minHeight: "420px",
                background: "none",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-md)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186450.77196024194!2d-90.52843484218753!3d43.33694086438865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87fd40fb7e248b11%3A0xb3e164cf38a0670!2sRichland%20Center%2C%20WI%2053581!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  width: "100%",
                  height: "100%",
                  minHeight: "420px",
                  display: "block",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Driftless Area Pest Control Service Map - Richland Center, WI"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="faq-header reveal-up">
            <span className="section-eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Straight answers to the questions commercial and agricultural clients ask most often.</p>
          </div>

          <div className="faq-list reveal-up">
            <details className="faq-item" open>
              <summary>Do you serve homes, or only businesses and farms?</summary>
              <p>
                Our focus is commercial, industrial, and agricultural clients. If you manage a
                farm, processing plant, warehouse, or similar facility in our service area, we are
                set up to help.
              </p>
            </details>

            <details className="faq-item" open>
              <summary>What does “root-cause” pest control mean?</summary>
              <p>
                It means we look for how pests get in and what keeps them there — entry gaps,
                harborage, and attractants — then seal and correct those issues instead of relying
                only on repeated sprays.
              </p>
            </details>

            <details className="faq-item" open>
              <summary>Can you work within farm biosecurity protocols?</summary>
              <p>
                Yes. Our team follows site biosecurity rules, communicates with the people on the
                ground, and plans treatments around livestock health and facility schedules.
              </p>
            </details>

            <details className="faq-item" open>
              <summary>What is remote monitoring, and who needs it?</summary>
              <p>
                Remote monitoring uses electronic sensors to track pest activity between visits. It
                is especially useful for food processors and commercial sites that need faster
                alerts and audit-ready digital records.
              </p>
            </details>

            <details className="faq-item" open>
              <summary>Which areas of Wisconsin do you cover?</summary>
              <p>
                We serve southwestern and central Wisconsin, including Richland, Sauk, Vernon,
                Crawford, Grant, Iowa, Lafayette, Juneau, and neighboring counties in the Driftless
                Region.
              </p>
            </details>

            <details className="faq-item" open>
              <summary>How do I request an inspection or quote?</summary>
              <p>
                Call <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or use the{" "}
                <a href="/contact">Request a Free Inspection</a> form. Tell us about your facility
                type and location, and our team will follow up to schedule a visit.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <PageCTA />
      </div>
    </SiteShell>
  );
}
