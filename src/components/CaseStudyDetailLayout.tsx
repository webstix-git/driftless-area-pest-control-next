import type { CaseStudy } from "@/data/case-studies";
import { bellAttribution } from "@/data/case-studies";
import SiteShell from "@/components/SiteShell";
import PageHero from "@/components/PageHero";
import Breadcrumb from "@/components/Breadcrumb";
import PageCTA from "@/components/PageCTA";

type CaseStudyDetailLayoutProps = {
  study: CaseStudy;
};

/** Renders PDF bold spans marked with **text**. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
        }
        return <span key={`${part}-${index}`}>{part}</span>;
      })}
    </>
  );
}

function IqMark({ className = "case-study-iq-mark" }: { className?: string }) {
  return (
    <img
      src={bellAttribution.iqLogoSrc}
      alt={bellAttribution.iqLogoAlt}
      className={className}
    />
  );
}

function SectionBlock({
  title,
  paragraphs,
  list,
  box,
}: {
  title: string;
  paragraphs?: string[];
  list?: string[];
  box?: boolean;
}) {
  return (
    <section className={`case-study-section${box ? " case-study-section-box" : ""}`}>
      <h2>{title}</h2>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph}>
          <RichText text={paragraph} />
        </p>
      ))}
      {list && list.length > 0 ? (
        <ul className="case-study-bullet-list">
          {list.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function ChartBlock({
  title,
  imageSrc,
  imageAlt,
}: {
  title: string;
  imageSrc?: string;
  imageAlt: string;
}) {
  return (
    <figure className="case-study-chart">
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt || title} />
      ) : (
        <>
          <figcaption>{title}</figcaption>
          <div className="case-study-chart-placeholder" aria-label={`${title} chart coming soon`}>
            <span>Chart image from Bell PDF will appear here</span>
          </div>
        </>
      )}
    </figure>
  );
}

export default function CaseStudyDetailLayout({ study }: CaseStudyDetailLayoutProps) {
  return (
    <SiteShell>
      <div className="case-study-detail-page">
        <PageHero
          title={`iQ ${study.title}`}
          imageSrc={study.imageSrc}
          imageAlt={study.imageAlt}
          objectPosition="center 40%"
        />

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Case Studies", href: "/case-studies" },
            { label: study.category },
          ]}
        />

        <article className="case-study-article page-section">
          <div className="container">
            <div className="case-study-article-layout">
            <div className="case-study-article-main reveal-up">
              <header className="case-study-article-heading">
                <IqMark />
                <h1>
                  {study.title.split("\n").map((line, index) => (
                    <span key={line} className="case-study-title-line">
                      {line}
                    </span>
                  ))}
                </h1>
              </header>

              <SectionBlock title="Abstract" paragraphs={[study.abstract]} box />
              <SectionBlock title="Introduction" paragraphs={study.introduction} />
              <SectionBlock title="Technology Overview" paragraphs={study.technologyOverview} />
              <SectionBlock
                title="Objectives"
                paragraphs={study.objectivesLead}
                list={study.objectives}
              />

              <section className="case-study-section">
                <h2>Methods and Findings</h2>
                {study.methodsLead.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
                <ul className="case-study-bullet-list">
                  {study.devices.map((device) => (
                    <li key={device}>
                      <RichText text={device} />
                    </li>
                  ))}
                </ul>
                {study.methodsClosing.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </section>

              <div className="case-study-control-block">
                <SectionBlock title="Outdoor Control" paragraphs={study.outdoorControl} />
                <ChartBlock
                  title={study.outdoorChart.title}
                  imageSrc={study.outdoorChart.imageSrc}
                  imageAlt={study.outdoorChart.imageAlt}
                />
              </div>

              <div className="case-study-control-block">
                <SectionBlock title="Indoor Control" paragraphs={study.indoorControl} />
                <ChartBlock
                  title={study.indoorChart.title}
                  imageSrc={study.indoorChart.imageSrc}
                  imageAlt={study.indoorChart.imageAlt}
                />
              </div>

              <SectionBlock title="Analysis" paragraphs={study.analysis} />
              <SectionBlock title="Customer Benefits" list={study.customerBenefits} />

              <section className="case-study-section case-study-section-box">
                <h2>Conclusion</h2>
                <ul className="case-study-bullet-list case-study-conclusion-list">
                  {study.conclusions.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
                {study.conclusionClosing.map((paragraph) => (
                  <p key={paragraph}>
                    <RichText text={paragraph} />
                  </p>
                ))}
              </section>

              <div className="case-study-doc-footer">
                <p className="case-study-learn-more">
                  {study.learnMoreBefore}{" "}
                  <IqMark className="case-study-iq-mark case-study-iq-mark-inline" />{" "}
                  {study.learnMoreAfter.split("\n").map((line, index, lines) => (
                    <span key={line}>
                      {line}
                      {index < lines.length - 1 ? <br /> : null}
                    </span>
                  ))}{" "}
                  <a
                    href="https://www.bellsensing.com"
                    className="case-study-bellsensing-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.bellsensing.com
                  </a>
                </p>
                <img
                  src={`${bellAttribution.logoSrc}?v=3`}
                  alt={bellAttribution.logoAlt}
                  className="case-study-doc-footer-logo"
                  width={200}
                  height={58}
                />
              </div>
            </div>
            </div>
          </div>
        </article>

        <PageCTA
          title="Want iQ monitoring at your facility?"
          description="Tell us about your farm or commercial site. We can review monitoring options, inspection priorities, and a practical plan built around your operation."
        />
      </div>
    </SiteShell>
  );
}
