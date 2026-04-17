export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gold/40 sm:w-24" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M12 3c2 3 5 5 8 6-3 1-6 3-8 6-2-3-5-5-8-6 3-1 6-3 8-6z" />
      </svg>
      <span className="h-px w-16 bg-gold/40 sm:w-24" />
    </div>
  );
}
