export default function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
    >
      <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
      <path d="M12 2C12 2 18 6 18 12C18 18 12 22 12 22" />
      <path d="M12 2C12 2 6 6 6 12C6 18 12 22 12 22" />
    </svg>
  );
}
