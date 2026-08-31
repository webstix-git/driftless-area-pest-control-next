"use client";

import { CONTACT } from "@/lib/contact";
import { bellAttribution } from "@/data/case-studies";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logos">
              <a href="/" className="brand-logo brand-logo--footer">
                <img
                  src="/images/logos/logo-white.backup.png?v=1"
                  alt="Driftless Area Pest Control"
                  className="brand-logo-img"
                />
              </a>
              <div className="footer-bell-logo-wrap">
                <img
                  src={`${bellAttribution.logoSrc}?v=3`}
                  alt={bellAttribution.logoAlt}
                  className="footer-bell-logo"
                />
              </div>
            </div>
            <p>Protecting farms, businesses, and facilities across Wisconsin with thoughtful pest management and dependable service.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/services">Remote Monitoring</a></li>
              <li><a href="/service-area">Service Area</a></li>
              <li><a href="/resources">Resources</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/agricultural-pest-control">Agricultural Pest Control</a></li>
              <li><a href="/commercial-pest-control">Commercial Facilities</a></li>
              <li><a href="/rodent-control">Rodent Exclusion</a></li>
              <li><a href="/wildlife-removal">Wildlife Removal</a></li>
              <li><a href="/weed-control">Perimeter Weed Control</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <svg className="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>{CONTACT.addressDisplay}</span>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href={CONTACT.phoneHref} className="contact-info-link">{CONTACT.phoneDisplay}</a>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href={CONTACT.emailHref} className="contact-info-link contact-info-email">
                  {CONTACT.emailLocal}
                  <wbr />
                  @{CONTACT.emailDomain}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Driftless Area Pest Control. All rights reserved.</div>
          <nav className="footer-legal" aria-label="Legal and site links">
            <a href="/site-map">Sitemap</a>
            <a href="/service-index">Service Index</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/ai-policy">AI Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
