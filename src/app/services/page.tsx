import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

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
                  src="/images/service_commercial_rodent.png"
                  alt="Mouse on a warehouse floor near stored goods"
                />
              </div>
              <div className="premium-service-body">
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
                  src="/images/service_ag_pest.png"
                  alt="Technician spraying treatment across agricultural turf and crop grounds"
                />
              </div>
              <div className="premium-service-body">
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
                  src="/images/service_insect_control.png"
                  alt="Orange beetle larvae feeding on plant leaves"
                />
              </div>
              <div className="premium-service-body">
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
                  src="/images/service_wildlife_removal.png"
                  alt="Technician installing bird exclusion mesh on a commercial building while a pigeon flies away"
                />
              </div>
              <div className="premium-service-body">
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
                  src="/images/service_remote_monitoring.png"
                  alt="Remote monitoring dashboard with gateway and floor sensors in a warehouse"
                />
              </div>
              <div className="premium-service-body">
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
                  alt="Technician applying perimeter weed treatment along a facility exterior"
                />
              </div>
              <div className="premium-service-body">
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
