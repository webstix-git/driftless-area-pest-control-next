import type { Metadata } from "next";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";
import { bellAttribution, caseStudies, plainCaseStudyText } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Bell Laboratories iQ smart rodent-monitoring case studies for commercial buildings and food production facilities.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <div className="case-studies-page">
        <PageHero
          title="Case Studies"
          description="Documented results from Bell’s iQ smart rodent-monitoring system — shared with permission from Bell Laboratories, Inc."
          imageSrc="/images/service_remote_monitoring.png"
          imageAlt="Remote monitoring dashboard and sensors used for facility rodent control"
          objectPosition="center 35%"
        />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Case Studies" },
          ]}
        />

        <section className="case-studies-pdfs page-section">
          <div className="container">
            <div className="resources-hub-header reveal-up">
              <span className="section-eyebrow">Proven Results</span>
              <h2>
                How{" "}
                <img
                  src={bellAttribution.iqLogoSrc}
                  alt="iQ"
                  className="case-study-iq-mark case-study-iq-mark-heading"
                />{" "}
                performed at working facilities
              </h2>
              <p>
                Pick a study below to see what happened on the ground: fewer rodent events, shorter service visits,
                and the numbers Bell Laboratories recorded at commercial and food production sites.
              </p>
            </div>

            <div className="case-studies-pdf-grid">
              {caseStudies.map((study, index) => (
                <a
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className={`case-study-pdf-card case-study-pdf-card-link reveal-up${index === 1 ? " stagger-delay-1" : ""}`}
                >
                  <div className="case-study-pdf-media">
                    <img src={study.imageSrc} alt={study.imageAlt} />
                    <span className="case-study-card-label">Case Study</span>
                  </div>
                  <div className="case-study-pdf-body">
                    <div className="case-study-pdf-brand">
                      <span className="case-studies-overview-tag">{study.category}</span>
                    </div>
                    <h3 className="case-study-card-title">
                      <img
                        src={bellAttribution.iqLogoSrc}
                        alt=""
                        className="case-study-iq-mark case-study-iq-mark-card"
                      />
                      <span>{study.title.replace(/\n/g, " ")}</span>
                    </h3>
                    <p className="case-study-pdf-abstract">
                      <strong>Abstract</strong>
                      <span className="case-study-pdf-abstract-text">
                        {plainCaseStudyText(study.abstract)}
                      </span>
                    </p>
                    <span className="resources-card-link">
                      View {study.category} case study
                      <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
                        <line x1="5" x2="19" y1="12" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <PageCTA
          title="Want iQ monitoring at your facility?"
          description="Tell us about your farm or commercial site. We can review monitoring options, inspection priorities, and a practical plan built around your operation."
        />
      </div>
    </SiteShell>
  );
}
