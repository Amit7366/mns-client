/** Decorative hero graphics (crown, coins, heart) for VIP banner */
export default function VipHeroArt() {
  return (
    <div className="relative h-[140px] w-[min(100%,200px)] shrink-0 sm:h-[160px] sm:w-[220px] lg:h-[180px] lg:w-[260px]" aria-hidden>
      <div className="absolute right-0 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-[#178358]/25 blur-2xl sm:h-40 sm:w-40" />
      <svg viewBox="0 0 220 180" fill="none" className="relative h-full w-full">
        <defs>
          <linearGradient id="heroCrown" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffe566" />
            <stop offset="55%" stopColor="#f5c518" />
            <stop offset="100%" stopColor="#a16207" />
          </linearGradient>
          <linearGradient id="heroCoin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff1a8" />
            <stop offset="100%" stopColor="#c48a0a" />
          </linearGradient>
        </defs>
        <ellipse cx="110" cy="155" rx="70" ry="12" fill="#000" opacity="0.35" />
        <path
          d="M70 130l18-55 22 38 20-48 22 65 18-38 20 48H70z"
          fill="url(#heroCrown)"
          stroke="#8b6914"
          strokeWidth="1.2"
        />
        <path d="M88 78h44v14H88z" fill="#7a1020" />
        <text x="110" y="72" textAnchor="middle" fill="#5c1010" fontSize="22" fontWeight="900">
          VIP
        </text>
        <circle cx="52" cy="118" r="3" fill="#dc2626" />
        <circle cx="168" cy="118" r="3" fill="#dc2626" />
        <circle cx="110" cy="48" r="4" fill="#dc2626" />
        <path
          d="M175 52c8-12 22-8 18 6-6 4-14 2-18-6z"
          fill="url(#heroCoin)"
          stroke="#a16207"
          strokeWidth="0.8"
        />
        <text x="184" y="56" textAnchor="middle" fill="#7a1020" fontSize="9" fontWeight="800">
          bj
        </text>
        <circle cx="42" cy="68" r="16" fill="url(#heroCoin)" stroke="#a16207" strokeWidth="0.8" />
        <text x="42" y="73" textAnchor="middle" fill="#7a1020" fontSize="10" fontWeight="800">
          bj
        </text>
        <path
          d="M28 95c0-10 14-18 28-12 14-6 28 2 28 12 0 14-28 28-28 28S28 109 28 95z"
          fill="url(#heroCrown)"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}
