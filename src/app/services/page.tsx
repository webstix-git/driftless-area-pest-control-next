import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import RodentIcon from "@/components/icons/RodentIcon";
import CockroachIcon from "@/components/icons/CockroachIcon";
import BirdIcon from "@/components/icons/BirdIcon";

export const metadata: Metadata = {
  title: "Services Overview | Driftless Area Pest Control",
  description:
    "Inspection-led pest management for commercial, industrial, and agricultural facilities across Wisconsin.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Services"
        description="Inspection-led pest management for commercial, industrial, and agricultural facilities across Wisconsin. Choose the program that fits how your site runs day to day."
        imageSrc="/images/service_commercial.jpg"
        imageAlt="Commercial facility pest management"
        objectPosition="center 30%"
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />

      <section className="premium-services-section" id="services">
        <div className="container">
          <div className="premium-services-header reveal-up">
            <span className="section-eyebrow">Our Services</span>
            <h2>
              Built for <span className="text-accent">Farms</span>, Warehouses &amp; Industrial Sites
            </h2>
            <p>
              Inspection-led programs for commercial, industrial, and agricultural facilities across
              Wisconsin.
            </p>
          </div>

          <div className="premium-services-grid">
            <a href="/rodent-control" className="premium-service-card reveal-up">
              <div className="premium-service-media">
                <img
                  className="pos-rodent"
                  src="/images/service_commercial_rodent.jpg"
                  alt="Commercial and industrial rodent control"
                />
              </div>
              <div className="premium-service-body">
                <span className="premium-service-icon" aria-hidden="true">
                  <RodentIcon className="icon-lg" />
                </span>
                <h3>Commercial &amp; Industrial Rodent Control</h3>
                <p className="premium-service-desc">
                  Protect food plants, warehouses, retail sites, and offices with inspection-led
                  rodent programs built for commercial and industrial facilities.
                </p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">For</p>
                    <ul className="premium-service-list">
                      <li>Food Processing Facilities</li>
                      <li>Warehouses</li>
                      <li>Retail Stores</li>
                      <li>Office Buildings</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Rodent Control
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/agricultural-pest-control" className="premium-service-card reveal-up stagger-delay-1">
              <div className="premium-service-media">
                <img
                  className="pos-ag"
                  src="/images/service_ag_pest.jpg"
                  alt="Agricultural pest management on farm facilities"
                />
              </div>
              <div className="premium-service-body">
                <span className="premium-service-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M2 22 16 8" />
                    <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                    <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                    <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
                    <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
                    <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
                    <path d="M20 13v2a4 4 0 0 1-4 4h-2v-2a4 4 0 0 1 4-4Z" />
                  </svg>
                </span>
                <h3>Agricultural Pest Management</h3>
                <p className="premium-service-desc">
                  Support dairy, poultry, hog, grain, and feed operations with biosecurity-aware
                  pest management designed around how farms actually run.
                </p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">For</p>
                    <ul className="premium-service-list">
                      <li>Dairy Farms</li>
                      <li>Chicken Farms</li>
                      <li>Hog Facilities</li>
                      <li>Grain Facilities</li>
                      <li>Livestock Facilities</li>
                      <li>Feed Mills</li>
                      <li>Biosecurity-Conscious Livestock Operations</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Farm Programs
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/commercial-pest-control" className="premium-service-card reveal-up stagger-delay-2">
              <div className="premium-service-media">
                <img
                  className="pos-insect"
                  src="/images/service_insect_control.jpg"
                  alt="Technician applying insect control treatment along a facility baseboard"
                />
              </div>
              <div className="premium-service-body">
                <span className="premium-service-icon" aria-hidden="true">
                  <CockroachIcon className="icon-lg" />
                </span>
                <h3>Insect Control</h3>
                <p className="premium-service-desc">
                  Control cockroaches, ants, spiders, flies, grain insects, and stinging pests with
                  targeted treatments for commercial and agricultural sites.
                </p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>Cockroaches</li>
                      <li>Ants</li>
                      <li>Spiders</li>
                      <li>Flies</li>
                      <li>Grain Insects</li>
                      <li>Bees &amp; Wasps</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Insect Control
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/wildlife-removal" className="premium-service-card reveal-up">
              <div className="premium-service-media">
                <img
                  className="pos-wildlife"
                  src="/images/service_wildlife_removal.jpg"
                  alt="Bird and wildlife management and exclusion"
                />
              </div>
              <div className="premium-service-body">
                <span className="premium-service-icon" aria-hidden="true">
                  <BirdIcon className="icon" />
                </span>
                <h3>Bird &amp; Wildlife Management</h3>
                <p className="premium-service-desc">
                  Manage birds, raccoons, and skunks with exclusion and prevention services that
                  stop wildlife from nesting in or contaminating your facility.
                </p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>Bird Control</li>
                      <li>Raccoons</li>
                      <li>Skunks</li>
                      <li>Exclusion Services</li>
                      <li>Prevention Services</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Wildlife Services
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/contact" className="premium-service-card reveal-up stagger-delay-1">
              <div className="premium-service-media">
                <img
                  className="pos-monitoring"
                  src="/images/service_remote_monitoring.jpg"
                  alt="Remote pest monitoring sensors and reporting"
                />
              </div>
              <div className="premium-service-body">
                <span className="premium-service-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M4.9 19.1C1.9 16.1 1.9 11.3 4.9 8.3" />
                    <path d="M7.8 16.2c-1.6-1.6-1.6-4.1 0-5.7" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M16.2 7.8c1.6 1.6 1.6 4.1 0 5.7" />
                    <path d="M19.1 4.9c3 3 3 7.8 0 10.8" />
                  </svg>
                </span>
                <h3>Remote Monitoring</h3>
                <p className="premium-service-desc">
                  Get 24/7 rodent monitoring, faster response, electronic reporting, and
                  audit-ready support that strengthens food safety and preventive maintenance.
                </p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>24/7 Rodent Monitoring</li>
                      <li>Faster Response Times</li>
                      <li>Electronic Reporting</li>
                      <li>Preventive Maintenance Plans</li>
                      <li>Food Safety &amp; Audit Support</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  Ask About Monitoring
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </div>
            </a>

            <a href="/weed-control" className="premium-service-card reveal-up stagger-delay-2">
              <div className="premium-service-media">
                <img
                  className="pos-weed"
                  src="/images/service_ag.jpg"
                  alt="Facility exterior and perimeter grounds for vegetation management"
                />
              </div>
              <div className="premium-service-body">
                <span className="premium-service-icon" aria-hidden="true">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                  </svg>
                </span>
                <h3>Perimeter Weed Control</h3>
                <p className="premium-service-desc">
                  Keep building perimeters, fence lines, and facility exteriors clear with
                  vegetation management that reduces pest harborage around your site.
                </p>
                <div className="premium-service-details">
                  <div className="premium-service-details-inner">
                    <p className="premium-service-label">Includes</p>
                    <ul className="premium-service-list">
                      <li>Vegetation Management</li>
                      <li>Building Perimeters</li>
                      <li>Fence Lines</li>
                      <li>Facility Exteriors</li>
                    </ul>
                  </div>
                </div>
                <span className="premium-service-link">
                  View Weed Control
                  <span className="premium-service-link-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <line x1="5" x2="19" y1="12" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
