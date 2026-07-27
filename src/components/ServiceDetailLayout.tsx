import type { ReactNode } from "react";
import SiteShell from "./SiteShell";
import PageHero from "./PageHero";
import Breadcrumb from "./Breadcrumb";
import ImagePlaceholder from "./ImagePlaceholder";
import ServiceConversionForm, {
  type ServiceTypeValue,
} from "./ServiceConversionForm";

export type ServiceSegment = {
  title: string;
  benefit: string;
  imageLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: ReactNode;
};

export type ServiceStep = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ServiceWhyItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ServiceCalloutPoint =
  | string
  | {
      text: string;
      icon?: ReactNode;
    };

export type ServiceDetailContent = {
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  objectPosition?: string;
  breadcrumbLabel: string;
  introEyebrow?: string;
  introTitle: ReactNode;
  introParagraphs: string[];
  introHighlights?: string[];
  introImageLabel: string;
  introImageSrc?: string;
  introImageAlt?: string;
  introImageObjectPosition?: string;
  segmentsEyebrow?: string;
  segmentsTitle: ReactNode;
  segmentsLead: string;
  segments: [ServiceSegment, ServiceSegment, ServiceSegment, ServiceSegment];
  approachTitle: ReactNode;
  approachLead: string;
  steps: [ServiceStep, ServiceStep, ServiceStep, ServiceStep];
  calloutEyebrow: string;
  calloutTitle: ReactNode;
  calloutBody: string;
  calloutPoints: ServiceCalloutPoint[];
  calloutCta: string;
  calloutImageLabel: string;
  calloutImageSrc?: string;
  calloutImageAlt?: string;
  calloutBgImage?: string;
  whyTitle?: ReactNode;
  whyItems: [ServiceWhyItem, ServiceWhyItem, ServiceWhyItem, ServiceWhyItem];
  complianceEyebrow?: string;
  complianceTitle: ReactNode;
  complianceBody: string;
  complianceHighlights?: string[];
  complianceImageLabel: string;
  complianceImageSrc?: string;
  complianceImageAlt?: string;
  ctaTitle: ReactNode;
  ctaBody: string;
};

const defaultPointIcons = [
  <svg key="a" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="m7 14 3-3 3 2 5-6"/></svg>,
  <svg key="b" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 10-14h-7l0-6z"/></svg>,
  <svg key="c" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11V6a3 3 0 1 1 6 0v5"/><rect x="5" y="11" width="14" height="10" rx="2"/></svg>,
  <svg key="d" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12h6"/><path d="M9 16h6"/><path d="M7 4h10l2 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8l2-4z"/></svg>,
];

function resolveCalloutPoint(point: ServiceCalloutPoint, index: number) {
  if (typeof point === "string") {
    return {
      text: point,
      icon: defaultPointIcons[index % defaultPointIcons.length],
    };
  }
  return point;
}

function ServiceMedia({
  src,
  alt,
  label,
  aspect,
  className = "",
  objectPosition,
}: {
  src?: string;
  alt?: string;
  label: string;
  aspect: string;
  className?: string;
  objectPosition?: string;
}) {
  if (src) {
    return (
      <div className={`rc-media ${className}`.trim()} style={{ aspectRatio: aspect }}>
        <img
          src={src}
          alt={alt || label}
          style={objectPosition ? { objectPosition } : undefined}
        />
      </div>
    );
  }

  return <ImagePlaceholder label={label} aspect={aspect} className={className} />;
}

type ServiceDetailLayoutProps = {
  content: ServiceDetailContent;
  /** Pre-selects Service Type in the mid-page conversion form. */
  defaultServiceType?: ServiceTypeValue | string;
};

export default function ServiceDetailLayout({
  content,
  defaultServiceType = "other",
}: ServiceDetailLayoutProps) {
  return (
    <SiteShell>
      <PageHero
        title={content.heroTitle}
        description={content.heroDescription}
        imageSrc={content.heroImage}
        imageAlt={content.heroImageAlt}
        objectPosition={content.objectPosition}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: content.breadcrumbLabel },
        ]}
      />

      <section className="rc-intro page-section">
        <div className="container rc-intro-grid">
          <div className="rc-intro-copy reveal-up">
            <span className="section-eyebrow">{content.introEyebrow || "Overview"}</span>
            <h2>{content.introTitle}</h2>
            {content.introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {content.introHighlights && content.introHighlights.length > 0 ? (
              <ul className="rc-intro-highlights">
                {content.introHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rc-intro-media reveal-up stagger-delay-1">
            <ServiceMedia
              src={content.introImageSrc}
              alt={content.introImageAlt}
              label={content.introImageLabel}
              aspect="5 / 4"
              objectPosition={content.introImageObjectPosition}
            />
          </div>
        </div>
      </section>

      <section className="rc-facilities page-section">
        <div className="container">
          <div className="rc-facilities-header reveal-up">
            <span className="section-eyebrow">{content.segmentsEyebrow || "Who We Serve"}</span>
            <h2>{content.segmentsTitle}</h2>
            <p>{content.segmentsLead}</p>
          </div>

          <div className="rc-serve-grid">
            {content.segments.map((segment, index) => (
              <article
                key={segment.title}
                className={`rc-serve-card reveal-up${index === 1 ? " stagger-delay-1" : ""}${index === 2 ? " stagger-delay-2" : ""}`}
              >
                <div className="rc-serve-media">
                  <ServiceMedia
                    src={segment.imageSrc}
                    alt={segment.imageAlt}
                    label={segment.imageLabel}
                    aspect="4 / 3"
                  />
                </div>
                <div className="rc-serve-copy">
                  {segment.icon ? (
                    <span className="rc-serve-icon" aria-hidden="true">
                      {segment.icon}
                    </span>
                  ) : null}
                  <h3>{segment.title}</h3>
                  <p>{segment.benefit}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rc-approach page-section">
        <div className="container">
          <div className="rc-section-header reveal-up">
            <span className="section-eyebrow">Our Approach</span>
            <h2>{content.approachTitle}</h2>
            <p>{content.approachLead}</p>
          </div>
          <ol className="rc-flow reveal-up">
            {content.steps.map((step, index) => (
              <li key={step.title} className="rc-flow-step">
                <article className="rc-flow-card">
                  <span className="rc-flow-label">Step {index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="rc-monitor">
        {content.calloutBgImage ? (
          <div className="rc-monitor-bg" aria-hidden="true">
            <img src={content.calloutBgImage} alt="" />
          </div>
        ) : null}
        <div className="rc-monitor-overlay" aria-hidden="true"></div>
        <div className="container rc-monitor-grid">
          <div className="rc-monitor-copy reveal-up">
            <span className="section-eyebrow">{content.calloutEyebrow}</span>
            <h2>{content.calloutTitle}</h2>
            <p>{content.calloutBody}</p>
            <ul className="rc-monitor-points">
              {content.calloutPoints.map((point, index) => {
                const item = resolveCalloutPoint(point, index);
                return (
                  <li key={item.text}>
                    {item.icon ? (
                      <span className="rc-monitor-point-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                    ) : null}
                    {item.text}
                  </li>
                );
              })}
            </ul>
            <a href="#request-service" className="btn btn-gold">{content.calloutCta}</a>
          </div>
          <div className="rc-monitor-media reveal-up stagger-delay-1">
            <ServiceMedia
              src={content.calloutImageSrc}
              alt={content.calloutImageAlt}
              label={content.calloutImageLabel}
              aspect="5 / 4"
            />
          </div>
        </div>
      </section>

      <section className="rc-why page-section">
        <div className="container">
          <div className="rc-section-header reveal-up">
            <span className="section-eyebrow">Why Work With Us</span>
            <h2>{content.whyTitle || "Why facilities choose us"}</h2>
          </div>
          <div className="rc-why-grid">
            {content.whyItems.map((item, index) => (
              <article
                key={item.title}
                className={`rc-why-item reveal-up${index === 1 ? " stagger-delay-1" : ""}${index === 2 ? " stagger-delay-2" : ""}`}
              >
                <span className="rc-why-icon" aria-hidden="true">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rc-compliance page-section">
        <div className="container rc-compliance-grid">
          <div className="rc-compliance-copy reveal-up">
            <span className="section-eyebrow">{content.complianceEyebrow || "Documentation"}</span>
            <h2>{content.complianceTitle}</h2>
            <p>{content.complianceBody}</p>
            {content.complianceHighlights && content.complianceHighlights.length > 0 ? (
              <ul className="rc-compliance-list">
                {content.complianceHighlights.map((item) => (
                  <li key={item}>
                    <span className="rc-compliance-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rc-compliance-media reveal-up stagger-delay-1">
            <ServiceMedia
              src={content.complianceImageSrc}
              alt={content.complianceImageAlt}
              label={content.complianceImageLabel}
              aspect="5 / 4"
            />
          </div>
        </div>
      </section>

      <ServiceConversionForm defaultServiceType={defaultServiceType} />
    </SiteShell>
  );
}
