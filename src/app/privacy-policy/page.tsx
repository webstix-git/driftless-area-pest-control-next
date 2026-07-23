import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy | Driftless Area Pest Control",
  description:
    "How Driftless Area Pest Control collects, uses, and protects information submitted through our website and service requests.",
};

const sections = [
  {
    heading: "Who we are",
    body: [
      "Driftless Area Pest Control provides commercial and agricultural pest management across southwestern and central Wisconsin. This Privacy Policy explains how we handle information when you visit our website, request an inspection, or contact our team.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "We may collect information you choose to provide, including your name, phone number, email address, facility or farm details, service needs, and any message you submit through our contact or request forms.",
      "We may also collect basic technical information such as browser type, device type, and pages visited to help us improve site performance and understand how the site is used.",
    ],
  },
  {
    heading: "How we use information",
    body: [
      "We use submitted information to respond to service requests, schedule inspections, answer questions, and communicate about programs that may fit your facility.",
      "We do not sell personal information. We do not use your information for unrelated marketing lists.",
    ],
  },
  {
    heading: "Sharing of information",
    body: [
      "We may share information with trusted service providers who help us operate the website or communicate with customers (for example, hosting or email delivery), only as needed to provide those services.",
      "We may also disclose information if required by law or to protect the safety, rights, or property of our company, customers, or the public.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "Our site may use cookies or similar tools that support basic site function and performance. You can control cookies through your browser settings. Disabling cookies may affect how some parts of the site work.",
    ],
  },
  {
    heading: "Data retention",
    body: [
      "We keep contact and service-request information only as long as needed to respond to your inquiry, provide service, meet business records needs, or comply with legal requirements.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You may request updates to your contact details or ask questions about information you have submitted by calling or emailing us using the contact details below.",
    ],
  },
  {
    heading: "Children’s privacy",
    body: [
      "This website is intended for business and facility decision-makers. We do not knowingly collect personal information from children.",
    ],
  },
  {
    heading: "Updates to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when revisions are made.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `If you have privacy questions, contact Driftless Area Pest Control at ${CONTACT.addressDisplay}, call ${CONTACT.phoneDisplay}, or email ${CONTACT.emailDisplay}.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect information submitted through our website and service requests."
        imageSrc="/images/final_cta_bg.jpg"
        imageAlt="Technician treating an exterior foundation area"
        objectPosition="70% 35%"
      />

      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <section className="page-section bg-cream">
        <div className="container legal-page-wrap">
          <div className="resources-hub-header reveal-up">
            <span className="section-eyebrow">Legal</span>
            <h2>
              Privacy <span className="text-accent">Policy</span>
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
