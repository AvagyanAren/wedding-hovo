export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-sage/40 sm:w-24" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-olive"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4 C 13 9, 17 12, 20 12 C 17 12, 13 15, 12 20 C 11 15, 7 12, 4 12 C 7 12, 11 9, 12 4 Z" />
      </svg>
      <span className="h-px w-16 bg-sage/40 sm:w-24" />
    </div>
  );
}
