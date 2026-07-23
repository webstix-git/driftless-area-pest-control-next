"use client";

import { CONTACT } from "@/lib/contact";

type PageCTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
};

export default function PageCTA({
  title = "Request a Free Inspection",
  description = "Tell us about your farm or facility. We will review your site needs and recommend a practical pest control plan for your operation.",
  primaryLabel = "Request a Free Inspection",
}: PageCTAProps) {
  // Split title to highlight "Free" when present (matches homepage accent pattern)
  const renderTitle = () => {
    const freeIndex = title.indexOf("Free");
    if (freeIndex === -1) return title;
    return (
      <>
        {title.slice(0, freeIndex)}
        <span className="text-accent">Free</span>
        {title.slice(freeIndex + 4)}
      </>
    );
  };

  return (
    <section className="cta-section" id="cta-band">
      <div className="cta-bg">
        <img src="/images/final_cta_bg.jpg" alt="Pest control technician treating the exterior of a facility" />
      </div>
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content reveal-up">
          <h2>{renderTitle()}</h2>
          <p>{description}</p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-accent">{primaryLabel}</a>
            <a href={CONTACT.phoneHref} className="btn btn-gold">
              <svg className="icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
