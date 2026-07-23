import SiteShell from "@/components/SiteShell";
import { CONTACT } from "@/lib/contact";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="not-found-page page-section bg-cream">
        <div className="container">
          <div className="not-found-inner reveal-up active">
            <span className="section-eyebrow">Error 404</span>
            <h1>
              Page not <span className="text-accent">found</span>
            </h1>
            <p>
              The page you requested is unavailable or may have moved. Use the links below to
              continue, or contact our team if you need help finding a service.
            </p>
            <div className="not-found-actions">
              <a href="/" className="btn btn-accent">
                Back to Home
              </a>
              <a href="/services" className="btn btn-gold">
                View Services
              </a>
              <a href="/contact" className="btn btn-outline-dark">
                Contact Us
              </a>
            </div>
            <p className="not-found-contact">
              Call <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or email{" "}
              <a href={CONTACT.emailHref}>{CONTACT.emailDisplay}</a>
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
