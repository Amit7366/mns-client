export type HomeTabId =
  | "popular"
  | "sports"
  | "casino"
  | "slots"
  | "crash"
  | "table"
  | "fishing"
  | "arcade"
  | "lottery";

export const homeTabIds: HomeTabId[] = [
  "popular",
  "sports",
  "casino",
  "slots",
  "crash",
  "table",
  "fishing",
  "arcade",
  "lottery",
];

export type PopularGame = {
  id: string;
  providerKey: string;
  gradient: string;
  glow: string;
  emoji: string;
};

export const popularGames: PopularGame[] = [
  {
    id: "aviator",
    providerKey: "spribe",
    gradient: "from-[#c62828] via-[#8b1010] to-[#3d0808]",
    glow: "#ff5252",
    emoji: "✈️",
  },
  {
    id: "superAcePlus",
    providerKey: "lucky365",
    gradient: "from-[#f59e0b] via-[#d97706] to-[#92400e]",
    glow: "#fbbf24",
    emoji: "🃏",
  },
  {
    id: "treasuresAztec",
    providerKey: "pg",
    gradient: "from-[#166534] via-[#14532d] to-[#052e16]",
    glow: "#4ade80",
    emoji: "🗿",
  },
  {
    id: "fortuneGems",
    providerKey: "jili",
    gradient: "from-[#ca8a04] via-[#a16207] to-[#713f12]",
    glow: "#fde047",
    emoji: "💎",
  },
  {
    id: "fortuneGaruda",
    providerKey: "jili",
    gradient: "from-[#b45309] via-[#92400e] to-[#451a03]",
    glow: "#fbbf24",
    emoji: "🦅",
  },
  {
    id: "fortuneRabbit",
    providerKey: "pg",
    gradient: "from-[#7c3aed] via-[#5b21b6] to-[#2e1065]",
    glow: "#c084fc",
    emoji: "🐰",
  },
  {
    id: "bjMoneyWheel",
    providerKey: "jdb",
    gradient: "from-[#eab308] via-[#ca8a04] to-[#854d0e]",
    glow: "#fde047",
    emoji: "🎡",
  },
  {
    id: "boxingKing",
    providerKey: "jili",
    gradient: "from-[#dc2626] via-[#b91c1c] to-[#7f1d1d]",
    glow: "#f87171",
    emoji: "🥊",
  },
];

export type CategoryProvider = {
  id: string;
  color: string;
  initials: string;
};

export const categoryProviders: Record<
  Exclude<HomeTabId, "popular">,
  CategoryProvider[]
> = {
  sports: [
    { id: "cricket", color: "#e879a8", initials: "🏏" },
    { id: "btiSports", color: "#ef4444", initials: "BT" },
    { id: "inSports", color: "#3b82f6", initials: "IN" },
    { id: "fbSports", color: "#eab308", initials: "FB" },
    { id: "ugSports", color: "#06b6d4", initials: "UG" },
    { id: "iSports", color: "#f43f5e", initials: "IS" },
    { id: "cmdSports", color: "#2563eb", initials: "CM" },
    { id: "sboSports", color: "#1d4ed8", initials: "SB" },
    { id: "eSports", color: "#6366f1", initials: "E7" },
    { id: "horsebook", color: "#f97316", initials: "🐎" },
    { id: "pinnacle", color: "#ec4899", initials: "38" },
  ],
  casino: [
    { id: "evolution", color: "#1d4ed8", initials: "EV" },
    { id: "pragmatic", color: "#f97316", initials: "PP" },
    { id: "sexy", color: "#ec4899", initials: "SG" },
    { id: "ezugi", color: "#22c55e", initials: "EZ" },
    { id: "playtech", color: "#0ea5e9", initials: "PT" },
    { id: "saGaming", color: "#eab308", initials: "SA" },
    { id: "dreamGaming", color: "#a855f7", initials: "DG" },
    { id: "allbet", color: "#ef4444", initials: "AB" },
    { id: "wmCasino", color: "#14b8a6", initials: "WM" },
    { id: "vivoGaming", color: "#6366f1", initials: "VG" },
  ],
  slots: [
    { id: "jili", color: "#f59e0b", initials: "JL" },
    { id: "pg", color: "#22c55e", initials: "PG" },
    { id: "jdb", color: "#eab308", initials: "JD" },
    { id: "pragmatic", color: "#f97316", initials: "PP" },
    { id: "hacksaw", color: "#94a3b8", initials: "HS" },
    { id: "rich88", color: "#a855f7", initials: "R8" },
    { id: "fachai", color: "#3b82f6", initials: "FC" },
    { id: "spadegaming", color: "#ef4444", initials: "SP" },
    { id: "cq9", color: "#06b6d4", initials: "CQ" },
    { id: "netent", color: "#22c55e", initials: "NE" },
  ],
  crash: [
    { id: "spribe", color: "#ef4444", initials: "SP" },
    { id: "aviator", color: "#dc2626", initials: "AV" },
    { id: "jili", color: "#f59e0b", initials: "JL" },
    { id: "smartsoft", color: "#8b5cf6", initials: "SS" },
    { id: "turboGames", color: "#06b6d4", initials: "TG" },
    { id: "bgaming", color: "#22c55e", initials: "BG" },
    { id: "onlyplay", color: "#ec4899", initials: "OP" },
    { id: "inout", color: "#f97316", initials: "IO" },
    { id: "galaxsys", color: "#6366f1", initials: "GX" },
    { id: "mascot", color: "#14b8a6", initials: "MC" },
  ],
  table: [
    { id: "baccarat", color: "#ef4444", initials: "BC" },
    { id: "roulette", color: "#22c55e", initials: "RL" },
    { id: "blackjack", color: "#1d4ed8", initials: "BJ" },
    { id: "sicbo", color: "#f59e0b", initials: "SB" },
    { id: "dragonTiger", color: "#dc2626", initials: "DT" },
    { id: "teenPatti", color: "#a855f7", initials: "TP" },
    { id: "andarBahar", color: "#06b6d4", initials: "AB" },
    { id: "poker", color: "#6366f1", initials: "PK" },
    { id: "holdem", color: "#14b8a6", initials: "HE" },
    { id: "threeCard", color: "#ec4899", initials: "3C" },
  ],
  fishing: [
    { id: "jili", color: "#f59e0b", initials: "JL" },
    { id: "jdb", color: "#eab308", initials: "JD" },
    { id: "cq9", color: "#06b6d4", initials: "CQ" },
    { id: "fachai", color: "#3b82f6", initials: "FC" },
    { id: "kaGaming", color: "#22c55e", initials: "KA" },
    { id: "spadegaming", color: "#ef4444", initials: "SP" },
    { id: "rich88", color: "#a855f7", initials: "R8" },
    { id: "youlian", color: "#38bdf8", initials: "YL" },
    { id: "bigGaming", color: "#f97316", initials: "BG" },
    { id: "simplePlay", color: "#6366f1", initials: "SP" },
  ],
  arcade: [
    { id: "jdb", color: "#f5a623", initials: "JD" },
    { id: "fachai", color: "#3b82f6", initials: "FC" },
    { id: "pragmatic", color: "#f97316", initials: "PP" },
    { id: "rich88", color: "#a855f7", initials: "R8" },
    { id: "youlian", color: "#38bdf8", initials: "YL" },
    { id: "hacksaw", color: "#e5e7eb", initials: "HS" },
    { id: "spribe", color: "#ef4444", initials: "SP" },
    { id: "jili", color: "#f59e0b", initials: "JL" },
    { id: "cq9", color: "#06b6d4", initials: "CQ" },
    { id: "smartsoft", color: "#8b5cf6", initials: "SS" },
  ],
  lottery: [
    { id: "tc", color: "#22c55e", initials: "TC" },
    { id: "king", color: "#f59e0b", initials: "KM" },
    { id: "vrLottery", color: "#6366f1", initials: "VR" },
    { id: "bbin", color: "#ef4444", initials: "BB" },
    { id: "gwLottery", color: "#06b6d4", initials: "GW" },
    { id: "tpLottery", color: "#a855f7", initials: "TP" },
    { id: "igLottery", color: "#f97316", initials: "IG" },
    { id: "sgWin", color: "#14b8a6", initials: "SG" },
    { id: "aeLottery", color: "#ec4899", initials: "AE" },
    { id: "happyLottery", color: "#eab308", initials: "HP" },
  ],
};
