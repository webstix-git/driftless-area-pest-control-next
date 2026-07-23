type HogIconProps = {
  className?: string;
};

/** Outlined hog / pig mark for livestock facility cards. */
export default function HogIcon({ className }: HogIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M15 11v.01" />
      <path d="M16 3v3.8A6 6 0 0 1 18.66 10H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.34A6 6 0 0 1 17 16.47V18.5a1.5 1.5 0 0 1-3 0v-.58a6 6 0 0 1-1 .08h-4a6 6 0 0 1-1-.08v.58a1.5 1.5 0 0 1-3 0v-2.03A6 6 0 0 1 9 6h2.5" />
    </svg>
  );
}
