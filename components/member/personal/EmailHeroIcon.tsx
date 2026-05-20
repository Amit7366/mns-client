export default function EmailHeroIcon() {
  return (
    <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#178358]/25 blur-xl" aria-hidden />
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#22c55e]/30 bg-gradient-to-br from-[#1a5c38]/70 to-[#0d2818]/90 shadow-[0_8px_32px_rgba(34,197,94,0.2)]">
        <svg width="48" height="40" viewBox="0 0 48 40" fill="none" aria-hidden>
          <path
            d="M4 8h40v24H4V8z"
            fill="#22c55e"
            fillOpacity="0.9"
            stroke="#86efac"
            strokeWidth="1"
          />
          <path d="M4 10l20 14L44 10" stroke="#86efac" strokeWidth="1.2" />
          <rect x="14" y="16" width="20" height="12" rx="1" fill="#0d2818" opacity="0.5" />
          <path d="M17 20h14M17 23h10" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
