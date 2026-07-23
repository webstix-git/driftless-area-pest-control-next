type ChickenIconProps = {
  className?: string;
};

/** Filled hen silhouette for poultry facility cards. */
export default function ChickenIcon({ className }: ChickenIconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`rc-serve-icon-img${className ? ` ${className}` : ""}`}
      src="/images/icons/chicken-hen.png"
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
    />
  );
}
