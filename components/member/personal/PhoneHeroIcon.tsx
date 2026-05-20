export default function PhoneHeroIcon() {
  return (
    <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-[#178358]/25 blur-xl" aria-hidden />
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#22c55e]/30 bg-gradient-to-br from-[#1a5c38]/80 to-[#0d2818]/90 shadow-[0_8px_32px_rgba(34,197,94,0.25)]">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden>
          <path
            d="M14 8h16c1.7 0 3 1.3 3 3v22c0 1.7-1.3 3-3 3H14c-1.7 0-3-1.3-3-3V11c0-1.7 1.3-3 3-3z"
            fill="#22c55e"
            stroke="#86efac"
            strokeWidth="1"
          />
          <circle cx="22" cy="34" r="2" fill="#0d2818" />
        </svg>
      </div>
    </div>
  );
}
