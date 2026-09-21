import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for contacting Driftless Area Pest Control. Our team will review your request and follow up soon.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" },
          { label: "Thank You" },
        ]}
      />

      <section className="page-section bg-cream thank-you-page">
        <div className="container">
          <div className="thank-you-card reveal-up active">
            <div className="thank-you-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="m8.5 12.5 2.5 2.5 4.5-5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className="thank-you-title">Thank You</h1>
            <p className="thank-you-lead">
              We&apos;ve received your request and will be in touch soon.
            </p>
            <p className="thank-you-copy">
              Our team will review your details and follow up to talk through the next step for
              your farm or facility. Prefer to speak with someone now? Call us or continue
              browsing our services.
            </p>
            <div className="thank-you-actions">
              <a href={CONTACT.phoneHref} className="btn btn-accent">
                Call {CONTACT.phoneDisplay}
              </a>
              <a href="/services" className="btn btn-outline-dark">
                View Our Services
              </a>
              <a href="/" className="btn btn-outline-dark">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
