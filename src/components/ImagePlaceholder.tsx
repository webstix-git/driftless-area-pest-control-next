type ImagePlaceholderProps = {
  label: string;
  aspect?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  aspect = "16 / 10",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-skeleton ${className}`.trim()}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={`Image coming soon — ${label}`}
    >
      <svg className="img-skeleton-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m21 15-4.5-4.5L9 18" />
      </svg>
      <span className="img-skeleton-text">Image Coming Soon</span>
    </div>
  );
}
