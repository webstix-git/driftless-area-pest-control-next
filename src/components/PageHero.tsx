"use client";

type PageHeroProps = {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
};

export default function PageHero({
  title,
  description,
  imageSrc,
  imageAlt,
  objectPosition = "center 30%",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg">
        <img src={imageSrc} alt={imageAlt} style={{ objectPosition }} />
      </div>
      <div className="page-hero-overlay" aria-hidden="true"></div>
      <div className="container">
        <div className="page-hero-content reveal-up active">
          <h1 className="page-hero-title">{title}</h1>
          {description ? <p className="page-hero-subtitle">{description}</p> : null}
        </div>
      </div>
    </section>
  );
}
