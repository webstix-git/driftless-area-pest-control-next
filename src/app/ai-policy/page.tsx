import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "AI Policy | Driftless Area Pest Control",
  description:
    "How Driftless Area Pest Control uses AI tools to support website content and operations while keeping human oversight on service recommendations.",
  alternates: { canonical: "/ai-policy" },
};

const sections = [
  {
    heading: "Our approach",
    body: [
      "Driftless Area Pest Control may use artificial intelligence (AI) tools to help draft, organize, or improve website content, internal notes, and routine communication support. AI is a support tool — not a replacement for field experience, inspection judgment, or licensed service decisions.",
    ],
  },
  {
    heading: "What AI may be used for",
    body: [
      "AI tools may assist with writing or refining website pages, educational guides, blog drafts, FAQs, and similar informational content.",
      "AI may also help summarize notes, organize checklists, or support administrative drafting. Final published content and customer recommendations are reviewed by our team.",
    ],
  },
  {
    heading: "What AI is not used for",
    body: [
      "We do not rely on AI alone to diagnose pest conditions at your facility, prescribe treatments, or make binding service commitments.",
      "On-site inspection, monitoring, and treatment decisions remain human-led and based on facility conditions, safety requirements, and practical experience.",
    ],
  },
  {
    heading: "Accuracy and review",
    body: [
      "Website content is prepared to be practical and useful for farms and commercial facilities. Because AI-assisted drafts can contain mistakes, our team reviews content before publication whenever practical.",
      "If you notice an error or outdated detail, contact us and we will review it.",
    ],
  },
  {
    heading: "Customer information",
    body: [
      "We take care not to place sensitive customer, employee, or proprietary facility information into public AI tools. Service requests submitted through our site are handled by our team for follow-up.",
      "For more detail on how we handle personal information, see our Privacy Policy.",
    ],
  },
  {
    heading: "Transparency",
    body: [
      "This page exists so visitors understand that some website materials may be developed with AI assistance under human review. Our goal is clear, useful information for facility managers — not automated decision-making.",
    ],
  },
  {
    heading: "Questions",
    body: [
      "If you have questions about this AI Policy, call or email Driftless Area Pest Control using the contact details below.",
    ],
  },
];

export default function AiPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        title="AI Policy"
        description="How we use AI tools to support website content while keeping human oversight on service recommendations and facility decisions."
        imageSrc="/images/why_insect.jpg"
        imageAlt="Technician sealing entry points along a facility foundation"
        objectPosition="center 35%"
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "AI Policy" }]} />

      <section className="page-section bg-cream">
        <div className="container legal-page-wrap">
          <div className="resources-hub-header reveal-up">
            <span className="section-eyebrow">Legal</span>
            <h2>
              Artificial Intelligence <span className="text-accent">Policy</span>
            </h2>
            <p>Last updated: July 23, 2026</p>
          </div>

          <div className="legal-content reveal-up">
            {sections.map((section) => (
              <section key={section.heading} className="legal-section">
                <h3>{section.heading}</h3>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.heading === "Customer information" ? (
                  <p>
                    Review our{" "}
                    <a href="/privacy-policy">Privacy Policy</a> for how contact
                    details and form submissions are handled.
                  </p>
                ) : null}
              </section>
            ))}
            <p className="legal-contact-line">
              Call{" "}
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a> or email{" "}
              <a href={CONTACT.emailHref}>{CONTACT.emailDisplay}</a>.
            </p>
          </div>
        </div>
      </section>

      <PageCTA />
    </SiteShell>
  );
}
