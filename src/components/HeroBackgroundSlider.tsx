"use client";

export type HeroSlide = {
  src: string;
  alt: string;
  label?: string;
  /** Keep baked-in banner text; hide left HTML hero copy + dark gradient */
  imageBannerOnly?: boolean;
};
type HeroBackgroundSliderProps = {
  slides: HeroSlide[];
  index: number;
  onIndexChange: (index: number) => void;
};

export default function HeroBackgroundSlider({
  slides,
  index,
  onIndexChange,
}: HeroBackgroundSliderProps) {
  const total = slides.length;
  if (!total) return null;

  const goTo = (next: number) => {
    onIndexChange((next + total) % total);
  };

  return (
    <>
      <div className="hero-bg hero-bg-slider" aria-live="polite">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`hero-bg-slide${i === index ? " is-active" : ""}`}
            style={{ objectPosition: "center center", transform: "none" }}
          />
        ))}
      </div>

      <button
        type="button"
        className="hero-mockup-arrow hero-mockup-arrow-prev"
        aria-label="Previous background"
        onClick={() => goTo(index - 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M15 5 8 12l7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className="hero-mockup-arrow hero-mockup-arrow-next"
        aria-label="Next background"
        onClick={() => goTo(index + 1)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="m9 5 7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}

