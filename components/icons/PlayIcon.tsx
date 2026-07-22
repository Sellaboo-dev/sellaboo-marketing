type PlayIconProps = {
  className?: string;
};

export function PlayIcon({
  className = "h-5 w-5",
}: PlayIconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <circle
        cx="10"
        cy="10"
        r="7.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M8.5 7.25 13 10l-4.5 2.75v-5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
