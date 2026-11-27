export const rocketPaths = (
  <>
    <path d="M12 2.5c3.4 2.4 5 6.3 5 10.5v4H7v-4c0-4.2 1.6-8.1 5-10.5Z" />
    <circle cx="12" cy="10" r="2" />
    <path d="M7 12.5 4 15.5V19l3-2" />
    <path d="M17 12.5l3 3V19l-3-2" />
    <path d="M10 17v2.5M14 17v2.5M12 17v4.5" />
  </>
);

export default function Rocket({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {rocketPaths}
    </svg>
  );
}
