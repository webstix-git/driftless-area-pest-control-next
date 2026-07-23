"use client";

import { CONTACT } from "@/lib/contact";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

const services = [
  { value: "", label: "Select a service" },
  { value: "commercial", label: "Commercial Pest Control" },
  { value: "agricultural", label: "Agricultural Pest Control" },
  { value: "rodent", label: "Rodent Control & Exclusion" },
  { value: "wildlife", label: "Wildlife Removal" },
  { value: "weed", label: "Perimeter Weed Control" },
  { value: "monitoring", label: "Remote Monitoring" },
  { value: "other", label: "Other / Not sure" },
];

const mapEmbedSrc =
  "https://maps.google.com/maps?q=18617+County+Highway+A,+Wisconsin&t=&z=14&ie=UTF8&iwloc=&output=embed";

const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=18617+County+Highway+A,+Wisconsin";

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
          <div className="content-card reveal-up">
            <h2 className="contact-form-title">Send a Message</h2>
            <p className="contact-form-lead">
              Share a few details and we&apos;ll follow up soon.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Your message has been received. Our team will contact you shortly."
                );
              }}
            >
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="contactName">
                    Full Name *
                  </label>
                  <input type="text" id="contactName" className="form-control" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contactPhone">
                    Phone Number *
                  </label>
                  <input type="tel" id="contactPhone" className="form-control" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactEmail">
                  Email Address *
                </label>
                <input type="email" id="contactEmail" className="form-control" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactService">
                  Service Needed *
                </label>
                <select id="contactService" className="form-control" required defaultValue="">
                  {services.map((service) => (
                    <option
                      key={service.value || "placeholder"}
                      value={service.value}
                      disabled={service.value === ""}
                    >
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contactMessage">
                  How Can We Help? *
                </label>
                <textarea id="contactMessage" className="form-control" rows={4} required />
              </div>

              <button type="submit" className="btn btn-accent contact-submit-btn">
                Send
              </button>
            </form>
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
                    <span className="contact-detail-label">Address</span>
                    <a
                      href={directionsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-detail-value"
                    >
                      {CONTACT.addressDisplay}
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
                      {CONTACT.emailDisplay}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="content-card contact-map-card">
              <div className="contact-map-header">
                <h3>Directions</h3>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-map-link"
                >
                  Open in Google Maps
                  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </div>
              <div className="contact-map-frame">
                <iframe
                  src={mapEmbedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Directions to Driftless Area Pest Control - 18617 Cty Hwy A, Wisconsin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
