"use client";

import { CONTACT } from "@/lib/contact";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import ServiceConversionForm from "@/components/ServiceConversionForm";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { SERVICE_COUNTIES } from "@/lib/service-area";

const serviceAreaDisplay = `${SERVICE_COUNTIES.slice(0, -1).join(", ")}, and ${
  SERVICE_COUNTIES[SERVICE_COUNTIES.length - 1]
} counties, Wisconsin`;

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        title="Contact Us"
        description="Request an inspection, ask about your facility, or call for commercial and agricultural pest support. Tell us what you are dealing with and we will help with the next step."
        imageSrc="/images/why_insect.jpg"
        imageAlt="Technician sealing entry points along a facility foundation"
        objectPosition="center 35%"
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />

      <section className="page-section bg-cream">
        <div className="container contact-page-grid">
          <div className="content-card reveal-up contact-form-card">
            <ServiceConversionForm
              variant="embedded"
              formTitle="Contact Us"
              formDescription="Share a few details and we'll follow up soon."
            />
          </div>

          <div className="contact-side reveal-up stagger-delay-1">
            <div className="content-card">
              <h3>Contact Details</h3>
              <ul className="contact-detail-list">
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-detail-label">Service Area</span>
                    <a href="/service-area" className="contact-detail-value">
                      {serviceAreaDisplay}
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-detail-label">Phone</span>
                    <a href={CONTACT.phoneHref} className="contact-detail-value">
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">
                    <svg className="icon" viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact-detail-label">Email</span>
                    <a
                      href={CONTACT.emailHref}
                      className="contact-detail-value contact-detail-email"
                    >
                      {CONTACT.emailLocal}
                      <wbr />
                      @{CONTACT.emailDomain}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="content-card contact-map-card">
              <div className="contact-map-header">
                <h3>Service Area Map</h3>
                <a href="/service-area" className="contact-map-link">
                  View Service Area
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <line x1="5" x2="19" y1="12" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
              <ServiceAreaMap className="contact-map-frame" />
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
