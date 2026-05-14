export function LiveSupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="9" r="4" stroke="white" strokeWidth="1.5" />
      <path
        d="M6.5 16.5c.8-2.2 2.6-3.5 4.5-3.5s3.7 1.3 4.5 3.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M4 10v2a1.5 1.5 0 001.5 1.5H6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 10v2a1.5 1.5 0 01-1.5 1.5H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function gloss() {
  return (
    <ellipse cx="12" cy="9" rx="5" ry="3" fill="url(#gloss)" opacity="0.45" />
  );
}

export function ExclusiveIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ee8a8" />
          <stop offset="100%" stopColor="#157a47" />
        </linearGradient>
        <linearGradient id="gGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
      </defs>
      <text x="2" y="18" fill="url(#gGreen)" fontSize="15" fontWeight="800">
        b
      </text>
      <text x="12" y="18" fill="url(#gGold)" fontSize="15" fontWeight="800">
        j
      </text>
    </svg>
  );
}

export function SportsBallIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <radialGradient id="ball" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="55%" stopColor="#1f9a57" />
          <stop offset="100%" stopColor="#0b5c34" />
        </radialGradient>
        <linearGradient id="band" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
        <linearGradient id="gloss" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="13" cy="13" r="11" fill="url(#ball)" />
      <path d="M4 10c4 2 8 2 12 0M4 16c4-2 8-2 12 0" stroke="url(#band)" strokeWidth="2.2" strokeLinecap="round" />
      {gloss()}
    </svg>
  );
}

export function CasinoSpadeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="spadeG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="100%" stopColor="#157a47" />
        </linearGradient>
      </defs>
      <path
        d="M13 5.5c-3.2 2.8-5.5 5.2-5.5 7.8 0 2.2 1.8 3.9 5.5 5.8 3.7-1.9 5.5-3.6 5.5-5.8 0-2.6-2.3-5-5.5-7.8z"
        fill="url(#spadeG)"
      />
      <path d="M10.5 18.5h5v2h-5z" fill="#0d4a2e" />
      <ellipse cx="11" cy="9" rx="3" ry="2" fill="#fff" opacity="0.25" />
    </svg>
  );
}

export function Slots777Icon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="sevenG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
      </defs>
      <text x="8" y="19" fill="#157a47" fontSize="16" fontWeight="900">
        7
      </text>
      <text x="5" y="17" fill="url(#sevenG)" fontSize="16" fontWeight="900">
        7
      </text>
    </svg>
  );
}

export function CrashRocketIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="rkG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="100%" stopColor="#157a47" />
        </linearGradient>
        <linearGradient id="rkGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
      </defs>
      <path d="M13 4l2.5 5.5h-5L13 4z" fill="url(#rkGold)" />
      <rect x="10.5" y="9.5" width="5" height="9" rx="2.5" fill="url(#rkG)" />
      <path d="M8.5 15.5l-2.5 4M17.5 15.5l2.5 4" stroke="#2cb86e" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="13" cy="12.5" r="1.2" fill="#d4ffe6" />
    </svg>
  );
}

export function TableIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="tblG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="100%" stopColor="#157a47" />
        </linearGradient>
      </defs>
      <rect x="4" y="11" width="18" height="7" rx="3.5" fill="url(#tblG)" />
      <circle cx="9" cy="14.5" r="1.3" fill="#ffe566" />
      <circle cx="13" cy="14.5" r="1.3" fill="#ffe566" />
      <circle cx="17" cy="14.5" r="1.3" fill="#ffe566" />
      <ellipse cx="13" cy="12" rx="9" ry="2.5" fill="#fff" opacity="0.18" />
    </svg>
  );
}

export function FishingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="fishG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="100%" stopColor="#157a47" />
        </linearGradient>
      </defs>
      <ellipse cx="11.5" cy="13" rx="7.5" ry="5" fill="url(#fishG)" />
      <path d="M18.5 10.5l4.5-2.5v10l-4.5-2.5" fill="#c48a0a" />
      <circle cx="8.5" cy="12" r="1" fill="#0d4a2e" />
      <ellipse cx="10" cy="10.5" rx="3" ry="1.5" fill="#fff" opacity="0.22" />
    </svg>
  );
}

export function ArcadeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <linearGradient id="arcG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="100%" stopColor="#157a47" />
        </linearGradient>
        <linearGradient id="arcGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
      </defs>
      <rect x="8" y="14" width="10" height="4" rx="1.5" fill="url(#arcG)" />
      <rect x="11.5" y="8" width="3" height="7" rx="1.5" fill="url(#arcGold)" />
      <circle cx="13" cy="7" r="2.8" fill="#f42a41" />
      <ellipse cx="13" cy="15" rx="4" ry="1.2" fill="#fff" opacity="0.15" />
    </svg>
  );
}

export function LotteryIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <defs>
        <radialGradient id="lotBall" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#8ef0b4" />
          <stop offset="100%" stopColor="#157a47" />
        </radialGradient>
        <linearGradient id="lot7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
      </defs>
      <circle cx="13" cy="13" r="10" fill="url(#lotBall)" />
      <text x="13" y="17.5" textAnchor="middle" fill="url(#lot7)" fontSize="11" fontWeight="900">
        7
      </text>
      <ellipse cx="10.5" cy="9.5" rx="4" ry="2.5" fill="#fff" opacity="0.22" />
    </svg>
  );
}

export function GiftIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <rect x="4" y="9" width="14" height="9" rx="1.5" stroke="white" strokeWidth="1.5" />
      <path d="M11 9V18M4 12h14" stroke="white" strokeWidth="1.5" />
      <path
        d="M11 9c-2 0-3.5-1-3.5-2.3S9 4.5 11 6c2-1.5 3.5-.8 3.5.7S13 9 11 9z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrownIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M4 16h14l-1.2-8.5L11 10 8.2 7.5 5.2 16z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 16v2h14v-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="6" r="1.2" fill="white" />
      <circle cx="5.5" cy="8" r="1" fill="white" />
      <circle cx="16.5" cy="8" r="1" fill="white" />
    </svg>
  );
}

export function SubItemIcon({
  id,
  label,
  accent,
}: {
  id?: string;
  label: string;
  accent?: string;
}) {
  const color = accent ?? "#d4a843";
  const initials = id === "all" ? "★" : label.slice(0, 2).toUpperCase();

  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-[#111]"
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}

export function ReferralIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="7" r="3" stroke="white" strokeWidth="1.5" />
      <path
        d="M5.5 17c.4-2.5 2.4-4 5.5-4s5.1 1.5 5.5 4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="17.5" cy="6.5" r="2" stroke="white" strokeWidth="1.2" />
      <circle cx="4.5" cy="6.5" r="2" stroke="white" strokeWidth="1.2" />
    </svg>
  );
}

export function AffiliateIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <circle cx="11" cy="5" r="2.5" stroke="white" strokeWidth="1.5" />
      <circle cx="5.5" cy="16" r="2.5" stroke="white" strokeWidth="1.5" />
      <circle cx="16.5" cy="16" r="2.5" stroke="white" strokeWidth="1.5" />
      <path d="M9.5 7.5L7 13.5M12.5 7.5l2.5 6M7.8 14.5h6.4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AmbassadorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M11 3.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L5.2 7.7l4-.6L11 3.5z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="16.5" r="2.5" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M11 4v9M7.5 9.5L11 13l3.5-3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 16h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ContactIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M6.5 5.5h9a2 2 0 012 2v7a2 2 0 01-2 2h-9l-3 2.5V7.5a2 2 0 012-2z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GuideIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path d="M5 5.5h12v11H5V5.5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 9h6M8 12h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ForumIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
      <path
        d="M5 6.5h12a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-1.5 1.5H10l-3.5 2.5V14H5a1.5 1.5 0 01-1.5-1.5V8A1.5 1.5 0 015 6.5z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 10h6M8 12.5h3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="text-[#a8a8a8]">
      <path d="M4.5 2.5H9v4.5M9 2.5L3 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.5 4.5v5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function menuIconFor(id: string) {
  switch (id) {
    case "exclusive":
      return <ExclusiveIcon />;
    case "sports":
      return <SportsBallIcon />;
    case "casino":
      return <CasinoSpadeIcon />;
    case "slots":
      return <Slots777Icon />;
    case "crash":
      return <CrashRocketIcon />;
    case "table":
      return <TableIcon />;
    case "fishing":
      return <FishingIcon />;
    case "arcade":
      return <ArcadeIcon />;
    case "lottery":
      return <LotteryIcon />;
    case "promotions":
      return <GiftIcon />;
    case "vipClub":
      return <CrownIcon />;
    case "referral":
      return <ReferralIcon />;
    case "affiliate":
      return <AffiliateIcon />;
    case "brandAmbassadors":
      return <AmbassadorIcon />;
    case "appDownload":
      return <DownloadIcon />;
    case "contactUs":
      return <ContactIcon />;
    case "newMemberGuide":
      return <GuideIcon />;
    case "bjForum":
      return <ForumIcon />;
    default:
      return <ExclusiveIcon />;
  }
}
