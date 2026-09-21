import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Homeowner FAQ | Driftless Area Pest Control",
  description:
    "FAQ for homeowners and clarity on Driftless Area Pest Control’s commercial and agricultural service focus.",
  alternates: { canonical: "/homeowner-faq" },
};

const faqs = [
  {
    q: "Do you serve homes?",
    a: "Our primary focus is commercial, industrial, and agricultural clients. If you manage a farm, processing plant, warehouse, or similar facility in our service area, we are set up to help.",
  },
  {
    q: "Can homeowners still call with questions?",
    a: (
      <>
        Yes. You can call <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> with questions. We will let you know whether your need fits our commercial and agricultural service model or point you toward a better next step.
      </>
    ),
  },
  {
    q: "What areas do you cover?",
    a: "We serve southwestern and central Wisconsin, including Richland, Sauk, Vernon, Crawford, Grant, Iowa, Lafayette, Juneau, and neighboring counties in the Driftless Region.",
  },
  {
    q: "What should I do if I see rodents or insects?",
    a: "Note where activity appears, keep food sealed, and reduce clutter that creates harborage. For facility or farm sites in our area, request an inspection so we can identify entry points and pressure sources.",
  },
  {
    q: "How do I request service for a farm or business?",
    a: (
      <>
        Use <a href="/contact">Request a Free Inspection</a> or call <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>. Tell us your facility type, location, and urgency so our team can follow up quickly.
      </>
    ),
  },
];

export default function HomeownerFaqPage() {
  return (
    <SiteShell>
      <PageHero
        title="Homeowner FAQ"
        description="Helpful answers for common homeowner questions, plus clarity on the commercial and agricultural work we specialize in. If you manage a farm or facility, we can help you take the next step."
        imageSrc="/images/final_cta_bg.jpg"
        imageAlt="Technician treating an exterior foundation area"
        objectPosition="70% 35%"
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Homeowner FAQ" },
        ]}
      />

      <section className="page-section bg-cream">
        <div className="container">
          <div className="faq-page-wrap">
            <div className="resources-hub-header reveal-up">
              <span className="section-eyebrow">FAQ</span>
              <h2>
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
              <p>
                Clear answers for common homeowner questions, plus how our commercial and
                agricultural focus works if you manage a farm or facility.
              </p>
            </div>
            <div className="faq-page-list reveal-up">
              {faqs.map((item) => (
                <details key={item.q} className="faq-item" open>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
