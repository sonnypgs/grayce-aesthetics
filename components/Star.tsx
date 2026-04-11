type Props = {
  className?: string;
  size?: number;
};

export default function Star({ className = "", size = 12 }: Props) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0 C 13 9 15 11 24 12 C 15 13 13 15 12 24 C 11 15 9 13 0 12 C 9 11 11 9 12 0 Z" />
    </svg>
  );
}
