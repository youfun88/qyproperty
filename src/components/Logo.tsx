export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="/"
      aria-label="QY LLC — Quality Life, Yours"
      className={`group flex items-center gap-3 ${className}`}
    >
      <svg
        width="42"
        height="42"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Q — outer ring */}
        <circle
          cx="24"
          cy="24"
          r="18.5"
          stroke="#0b1c30"
          strokeWidth="2.4"
        />
        {/* Q — gold tail crossing the ring */}
        <path
          d="M30.5 30.5 L40 40"
          stroke="#d4af37"
          strokeWidth="3.2"
          strokeLinecap="round"
          className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:translate-y-[1px]"
        />
        {/* Y — nested monogram */}
        <path
          d="M16.5 15.5 L24 24.5 L31.5 15.5 M24 24.5 L24 33"
          stroke="#0b1c30"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="flex flex-col leading-none">
        <span className="text-2xl font-bold tracking-tighter text-on-surface font-[family-name:var(--font-manrope)]">
          Quality Life, Yours
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
          QY&nbsp;LLC
        </span>
      </span>
    </a>
  );
}
