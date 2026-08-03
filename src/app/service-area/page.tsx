import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

export const metadata: Metadata = {
  title: "Service Area | Driftless Area Pest Control",
  description:
    "Commercial and agricultural pest control across Richland, Sauk, Vernon, Crawford, Grant, Iowa, and neighboring Wisconsin counties.",
};

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

const localBenefits = [
  {
    title: "Faster local response",
    desc: "Crews based in the Driftless Region can reach farms and facilities quickly when pressure spikes or an audit window approaches.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Region-ready planning",
    desc: "We know southwestern Wisconsin site layouts — dairies, grain bins, warehouses, and food plants — and plan around how they actually run.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Biosecurity awareness",
    desc: "Service timing and protocols respect livestock health, production schedules, and food-facility requirements across the counties we cover.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Clear follow-through",
    desc: "Managers get practical findings, visit documentation, and next steps so coverage stays useful between service stops.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 12h6" />
        <path d="M9 16h6" />
        <path d="M7 4h10l2 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8l2-4z" />
      </svg>
    ),
  },
];

export default function ServiceAreaPage() {
  return (
    <SiteShell>
      <div className="service-area-page">
        <PageHero
          title="Service Area"
          description="Based in the Driftless Region, we serve farms, warehouses, and industrial facilities across southwestern Wisconsin. Local crews mean faster response when your site needs help."
          imageSrc="/images/service_area_hero.jpg"
          imageAlt="Sunset over farms, grain silos, and rolling hills in southwestern Wisconsin"
          objectPosition="center 45%"
        />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Service Area" },
          ]}
        />

        <section className="page-section bg-cream">
          <div className="container page-two-col">
            <div className="page-intro reveal-up">
              <span className="section-eyebrow">Coverage Map</span>
              <h2>
                Local Coverage Across the <span className="text-accent">Driftless</span> Region
              </h2>
              <p>
                Based in the Driftless Region, we provide commercial and agricultural pest control
                across Richland, Sauk, Vernon, Crawford, Grant, Iowa, and neighboring counties —
                with rapid response when your facility needs help.
              </p>
              <p>
                Whether you manage a dairy, grain site, food plant, or warehouse, our crews know
                the region and plan service around how your site actually runs.
              </p>
              <div className="county-list">
                {counties.map((county) => (
                  <span key={county} className="county-tag">
                    {county}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="reveal-up stagger-delay-1"
              style={{
                minHeight: "420px",
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
        </section>

        <section className="service-area-local page-section">
          <div className="container service-area-local-grid">
            <div className="service-area-local-copy reveal-up">
              <span className="section-eyebrow">Why Local Matters</span>
              <h2>
                Built for Southwestern <span className="text-accent">Wisconsin</span> Sites
              </h2>
              <p className="service-area-local-lead">
                Local crews, regional site knowledge, and practical follow-through — so pest
                programs hold up for dairies, grain sites, warehouses, and industrial facilities
                across our service counties.
              </p>

              <ul className="service-area-local-list">
                {localBenefits.map((item) => (
                  <li key={item.title}>
                    <span className="service-area-local-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a href="/contact" className="btn btn-service-green">
                Request Coverage for Your Site
                <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <line x1="5" x2="19" y1="12" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="service-area-local-visual reveal-up stagger-delay-1">
              <div className="service-area-local-photo">
                <img
                  src="/images/service_area_hero.jpg"
                  alt="Sunset over farms, grain silos, and rolling hills in southwestern Wisconsin"
                />
              </div>
              <div className="service-area-local-badge" aria-hidden="true">
                <span className="service-area-local-badge-value">15+</span>
                <span className="service-area-local-badge-label">Counties Served</span>
              </div>
            </div>
          </div>
        </section>

        <PageCTA />
      </div>
    </SiteShell>
  );
}
