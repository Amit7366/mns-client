import { inferLobbyGameTypes } from "./lobby-game-types";

export type VendorGameTile = {
  id: string;
  title: string;
  providerLabel: string;
  gradient: string;
  glow: string;
  emoji: string;
  /** Inferred or explicit tags for filter sheet */
  types?: string[];
};

const JILI_SLOT_GAMES: VendorGameTile[] = [
  { id: "1", title: "SUPER ACE", providerLabel: "JILI", gradient: "from-[#7c2d12] via-[#ea580c] to-[#431407]", glow: "#fb923c", emoji: "🃏" },
  { id: "2", title: "WILD BOUNTY SHOWDOWN", providerLabel: "PG SOFT", gradient: "from-[#14532d] via-[#166534] to-[#052e16]", glow: "#4ade80", emoji: "🤠" },
  { id: "3", title: "FORTUNE GEMS 500", providerLabel: "JILI", gradient: "from-[#a16207] via-[#eab308] to-[#713f12]", glow: "#fde047", emoji: "💎" },
  { id: "4", title: "SUPER ELEMENTS", providerLabel: "FA CHAI", gradient: "from-[#1e3a8a] via-[#2563eb] to-[#172554]", glow: "#60a5fa", emoji: "⚡" },
  { id: "5", title: "DIVA'S ACE", providerLabel: "YELLOW BAT", gradient: "from-[#86198f] via-[#c026d3] to-[#4a044e]", glow: "#e879f9", emoji: "👑" },
  { id: "6", title: "GOLDEN GENIE", providerLabel: "JILI", gradient: "from-[#854d0e] via-[#ca8a04] to-[#422006]", glow: "#fcd34d", emoji: "🧞" },
  { id: "7", title: "MONEY COMING", providerLabel: "JDB", gradient: "from-[#713f12] via-[#ca8a04] to-[#422006]", glow: "#fbbf24", emoji: "💰" },
  { id: "8", title: "BOXING KING", providerLabel: "JILI", gradient: "from-[#7f1d1d] via-[#dc2626] to-[#450a0a]", glow: "#f87171", emoji: "🥊" },
  { id: "9", title: "FORTUNE RABBIT", providerLabel: "PG SOFT", gradient: "from-[#5b21b6] via-[#7c3aed] to-[#2e1065]", glow: "#c084fc", emoji: "🐰" },
  { id: "10", title: "TREASURES OF AZTEC", providerLabel: "PG SOFT", gradient: "from-[#14532d] via-[#15803d] to-[#052e16]", glow: "#4ade80", emoji: "🗿" },
  { id: "11", title: "LUCKY NEKO", providerLabel: "PG SOFT", gradient: "from-[#9d174d] via-[#db2777] to-[#500724]", glow: "#fb7185", emoji: "🐱" },
  { id: "12", title: "CANDY BONANZA", providerLabel: "PG SOFT", gradient: "from-[#be185d] via-[#ec4899] to-[#831843]", glow: "#f9a8d4", emoji: "🍬" },
  { id: "13", title: "MAHJONG WAYS 2", providerLabel: "PG SOFT", gradient: "from-[#365314] via-[#65a30d] to-[#1a2e05]", glow: "#bef264", emoji: "🀄" },
  { id: "14", title: "GATES OF OLYMPUS", providerLabel: "PRAGMATIC PLAY", gradient: "from-[#4c1d95] via-[#7c3aed] to-[#2e1065]", glow: "#a78bfa", emoji: "⚡" },
  { id: "15", title: "SWEET BONANZA", providerLabel: "PRAGMATIC PLAY", gradient: "from-[#be123c] via-[#f43f5e] to-[#881337]", glow: "#fda4af", emoji: "🍭" },
  { id: "16", title: "BIG BASS BONANZA", providerLabel: "PRAGMATIC PLAY", gradient: "from-[#0c4a6e] via-[#0369a1] to-[#082f49]", glow: "#38bdf8", emoji: "🎣" },
];

const SEXY_CASINO_GAMES: VendorGameTile[] = [
  { id: "s1", title: "SEXY BACCARAT", providerLabel: "SEXY", gradient: "from-[#831843] via-[#db2777] to-[#500724]", glow: "#f472b6", emoji: "🎴" },
  { id: "s2", title: "SEXY DRAGON TIGER", providerLabel: "SEXY", gradient: "from-[#7f1d1d] via-[#dc2626] to-[#450a0a]", glow: "#f87171", emoji: "🐉" },
  { id: "s3", title: "SEXY ROULETTE", providerLabel: "SEXY", gradient: "from-[#14532d] via-[#16a34a] to-[#052e16]", glow: "#4ade80", emoji: "🎡" },
  { id: "s4", title: "SEXY SIC BO", providerLabel: "SEXY", gradient: "from-[#713f12] via-[#ca8a04] to-[#422006]", glow: "#fcd34d", emoji: "🎲" },
  ...JILI_SLOT_GAMES.slice(0, 12).map((g, i) => ({
    ...g,
    id: `sx${i}`,
    providerLabel: "SEXY",
  })),
];

const EVOLUTION_GAMES: VendorGameTile[] = [
  { id: "e1", title: "LIGHTNING ROULETTE", providerLabel: "EVOLUTION", gradient: "from-[#1e3a8a] via-[#2563eb] to-[#172554]", glow: "#93c5fd", emoji: "⚡" },
  { id: "e2", title: "CRAZY TIME", providerLabel: "EVOLUTION", gradient: "from-[#7c2d12] via-[#ea580c] to-[#431407]", glow: "#fdba74", emoji: "🎡" },
  { id: "e3", title: "MONOPOLY LIVE", providerLabel: "EVOLUTION", gradient: "from-[#14532d] via-[#22c55e] to-[#052e16]", glow: "#86efac", emoji: "🎩" },
  ...JILI_SLOT_GAMES.slice(0, 13).map((g, i) => ({
    ...g,
    id: `ev${i}`,
    providerLabel: "EVOLUTION",
  })),
];

const SPRIBE_CRASH: VendorGameTile[] = [
  { id: "av", title: "AVIATOR", providerLabel: "SPRIBE", gradient: "from-[#7f1d1d] via-[#dc2626] to-[#450a0a]", glow: "#fca5a5", emoji: "✈️" },
  ...JILI_SLOT_GAMES.slice(0, 15).map((g, i) => ({
    ...g,
    id: `sp${i}`,
    providerLabel: "SPRIBE",
  })),
];

const SPORTS_PLACEHOLDER: VendorGameTile[] = JILI_SLOT_GAMES.map((g, i) => ({
  ...g,
  id: `spo${i}`,
  title: `${g.title} LIVE`,
  providerLabel: "SPORTS",
}));

function withProviderLabel(games: VendorGameTile[], label: string): VendorGameTile[] {
  return games.map((g, i) => ({ ...g, id: `${label}-${i}`, providerLabel: label }));
}

const EXCLUSIVE_LOBBY_GAMES: VendorGameTile[] = withProviderLabel(JILI_SLOT_GAMES.slice(0, 14), "EXCLUSIVE");

const GAMES_BY_VENDOR: Record<string, VendorGameTile[]> = {
  awcv2_exclusive: EXCLUSIVE_LOBBY_GAMES,
  awcv2_jili: JILI_SLOT_GAMES,
  awcv2_pgsoft: withProviderLabel(JILI_SLOT_GAMES, "PG SOFT"),
  awcv2_pragmaticplay: withProviderLabel(JILI_SLOT_GAMES, "PRAGMATIC PLAY"),
  awcv2_jdb: withProviderLabel(JILI_SLOT_GAMES, "JDB"),
  awcv2_fachai: withProviderLabel(JILI_SLOT_GAMES, "FA CHAI"),
  awcv2_yellowbat: withProviderLabel(JILI_SLOT_GAMES, "YELLOW BAT"),
  awcv2_sexybcrt: SEXY_CASINO_GAMES,
  awcv2_evolution: EVOLUTION_GAMES,
  awcv2_spribe: SPRIBE_CRASH,
  awcv2_cricket: SPORTS_PLACEHOLDER,
};

export function getGamesForVendor(vendor: string): VendorGameTile[] {
  return (
    GAMES_BY_VENDOR[vendor] ??
    withProviderLabel(JILI_SLOT_GAMES, vendor.replace(/^awcv2_/i, "").toUpperCase())
  );
}

export function mergeGamesFromVendors(vendorCodes: string[]): VendorGameTile[] {
  const seen = new Set<string>();
  const out: VendorGameTile[] = [];
  for (const code of vendorCodes) {
    for (const g of getGamesForVendor(code)) {
      if (seen.has(g.id)) continue;
      seen.add(g.id);
      const types = g.types?.length ? g.types : inferLobbyGameTypes(g.title);
      out.push({ ...g, types });
    }
  }
  return out;
}
