import type { VipBenefitId } from "@/lib/i18n/vip-messages";

export default function VipBenefitIcon({ id }: { id: VipBenefitId }) {
  switch (id) {
    case "personalManager":
      return (
        <svg viewBox="0 0 88 88" fill="none" aria-hidden className="h-full w-full">
          <defs>
            <linearGradient id="vipChat" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fff7d6" />
              <stop offset="100%" stopColor="#f5c518" />
            </linearGradient>
            <linearGradient id="vipCrownSm" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe566" />
              <stop offset="100%" stopColor="#c48a0a" />
            </linearGradient>
          </defs>
          <path
            d="M12 28c0-8 8-14 18-14h20c10 0 18 6 18 14v22c0 6-4 10-10 10H22c-6 0-10-4-10-10V28z"
            fill="url(#vipChat)"
          />
          <path d="M22 36h36v2H22zM22 44h28v2H22z" fill="#7a1020" opacity="0.35" />
          <circle cx="44" cy="48" r="14" fill="#178358" />
          <text x="44" y="53" textAnchor="middle" fill="#f5c518" fontSize="14" fontWeight="800">
            bj
          </text>
          <path
            d="M30 18l4 6 7 1-5 5 1 7-7-4-7 4 1-7-5-5 7-1 4-6z"
            fill="url(#vipCrownSm)"
          />
          <circle cx="62" cy="22" r="7" fill="#f97316" />
          <path d="M59 22h6M62 19v6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case "exclusiveRewards":
      return (
        <svg viewBox="0 0 88 88" fill="none" aria-hidden className="h-full w-full">
          <defs>
            <linearGradient id="vipCrownLg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe566" />
              <stop offset="100%" stopColor="#b8860b" />
            </linearGradient>
            <linearGradient id="vipGem" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
          </defs>
          <path
            d="M18 52l8-28 10 14 8-20 8 20 10-14 8 28H18z"
            fill="url(#vipCrownLg)"
            stroke="#a16207"
            strokeWidth="1"
          />
          <text x="44" y="46" textAnchor="middle" fill="#7a1020" fontSize="11" fontWeight="900">
            VIP
          </text>
          <path d="M34 52h20v6H34z" fill="#a16207" />
          <path d="M58 38l14 22-8 6-6-28z" fill="url(#vipGem)" />
          <path d="M64 32l4 8-6-2 2-6z" fill="#ecfdf5" opacity="0.6" />
        </svg>
      );
    case "pointsToCash":
      return (
        <svg viewBox="0 0 88 88" fill="none" aria-hidden className="h-full w-full">
          <defs>
            <linearGradient id="vipCoinGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe566" />
              <stop offset="100%" stopColor="#c48a0a" />
            </linearGradient>
            <linearGradient id="vipCoinTeal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5eead4" />
              <stop offset="100%" stopColor="#0f766e" />
            </linearGradient>
          </defs>
          <path
            d="M44 14a26 26 0 110 52 26 26 0 010-52z"
            stroke="#f5c518"
            strokeWidth="3"
            strokeDasharray="6 4"
            opacity="0.9"
          />
          <circle cx="32" cy="44" r="18" fill="url(#vipCoinGold)" />
          <text x="32" y="49" textAnchor="middle" fill="#7a1020" fontSize="10" fontWeight="900">
            VIP
          </text>
          <circle cx="56" cy="44" r="18" fill="url(#vipCoinTeal)" />
          <text x="56" y="50" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">
            ৳
          </text>
          <path
            d="M38 30l8 6-8 6M50 58l8-6-8-6"
            stroke="#fbbf24"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "paymentChannel":
      return (
        <svg viewBox="0 0 88 88" fill="none" aria-hidden className="h-full w-full">
          <defs>
            <linearGradient id="vipWallet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffe566" />
              <stop offset="100%" stopColor="#c48a0a" />
            </linearGradient>
          </defs>
          <rect x="14" y="12" width="36" height="58" rx="6" fill="#1f1f1f" stroke="#404040" strokeWidth="1.5" />
          <rect x="18" y="18" width="28" height="8" rx="2" fill="#e2136e" />
          <text x="32" y="24" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">
            bKash
          </text>
          <rect x="18" y="30" width="28" height="7" rx="2" fill="#f97316" />
          <text x="32" y="35" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">
            Nagad
          </text>
          <rect x="18" y="41" width="28" height="7" rx="2" fill="#7c3aed" />
          <text x="32" y="46" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">
            Rocket
          </text>
          <rect x="18" y="52" width="28" height="7" rx="2" fill="#22c55e" />
          <text x="32" y="57" textAnchor="middle" fill="white" fontSize="5" fontWeight="700">
            USDT
          </text>
          <path
            d="M54 42h22c3 0 5 2 5 5v18c0 3-2 5-5 5H54c-3 0-5-2-5-5V47c0-3 2-5 5-5z"
            fill="url(#vipWallet)"
          />
          <circle cx="76" cy="38" r="10" fill="#178358" />
          <path
            d="M72 38l3 3 6-7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
