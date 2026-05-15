export type PromotionCategory =
  | "welcome"
  | "slots"
  | "liveCasino"
  | "sports"
  | "fishing"
  | "lottery"
  | "table"
  | "arcade"
  | "crash"
  | "other";

export type PromotionItem = {
  id: string;
  categories: PromotionCategory[];
  tags: string[];
  titleKey: string;
  badgeKey?: string;
  subtitleKey?: string;
  highlightKey?: string;
  validityStart: string;
  validityEnd: string;
  image: string;
};

export const PROMOTION_FILTER_IDS = [
  "all",
  "welcome",
  "slots",
  "liveCasino",
  "sports",
  "fishing",
  "lottery",
  "table",
  "arcade",
  "crash",
  "other",
] as const;

export type PromotionFilterId = (typeof PROMOTION_FILTER_IDS)[number];

const U = (id: string, w = 640, h = 360) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const promotions: PromotionItem[] = [
  {
    id: "super-tiger-spins",
    categories: ["welcome", "slots"],
    tags: ["FDB", "Slots", "Welcome Offer"],
    titleKey: "superTigerSpins",
    badgeKey: "welcomeOffer",
    subtitleKey: "spinAndWin",
    highlightKey: "freeSpins100",
    validityStart: "2026/03/23 00:00:00",
    validityEnd: "2026/12/31 23:59:59",
    image: U("photo-1596838138485-dfb367046420"),
  },
  {
    id: "cricket-quest",
    categories: ["sports", "welcome"],
    tags: ["Normal", "Sports", "Welcome Offer"],
    titleKey: "cricketQuest",
    badgeKey: "cricketQuest",
    highlightKey: "crore66",
    validityStart: "2026/01/01 00:00:00",
    validityEnd: "2026/12/31 23:59:59",
    image: U("photo-1531415074969-3363381e2eb2"),
  },
  {
    id: "play-free-1000",
    categories: ["slots", "other"],
    tags: ["FDB", "Slots", "Normal"],
    titleKey: "playFree1000",
    validityStart: "2026/02/01 00:00:00",
    validityEnd: "2026/11/30 23:59:59",
    image: U("photo-1511512578047-dfb367046420"),
  },
  {
    id: "live-casino-cashback",
    categories: ["liveCasino"],
    tags: ["Live Casino", "Normal"],
    titleKey: "liveCasinoCashback",
    validityStart: "2026/03/01 00:00:00",
    validityEnd: "2026/10/31 23:59:59",
    image: U("photo-1605870445919-ffd08aecd03d"),
  },
  {
    id: "fishing-bonus",
    categories: ["fishing"],
    tags: ["Fishing", "Normal"],
    titleKey: "fishingBonus",
    validityStart: "2026/04/01 00:00:00",
    validityEnd: "2026/12/15 23:59:59",
    image: U("photo-1544551763-46a013bb70d5"),
  },
  {
    id: "lottery-jackpot",
    categories: ["lottery"],
    tags: ["Lottery", "Normal"],
    titleKey: "lotteryJackpot",
    validityStart: "2026/01/15 00:00:00",
    validityEnd: "2026/12/31 23:59:59",
    image: U("photo-1518709268805-4e9042af9b18"),
  },
  {
    id: "table-highroller",
    categories: ["table", "liveCasino"],
    tags: ["Table", "Normal"],
    titleKey: "tableHighroller",
    validityStart: "2026/05/01 00:00:00",
    validityEnd: "2026/09/30 23:59:59",
    image: U("photo-1621246331688-aa6a352a6f9a"),
  },
  {
    id: "arcade-rewards",
    categories: ["arcade"],
    tags: ["Arcade", "Normal"],
    titleKey: "arcadeRewards",
    validityStart: "2026/03/10 00:00:00",
    validityEnd: "2026/11/20 23:59:59",
    image: U("photo-1550747815-08920faebea0"),
  },
  {
    id: "crash-aviator",
    categories: ["crash"],
    tags: ["Crash", "Normal"],
    titleKey: "crashAviator",
    validityStart: "2026/02/14 00:00:00",
    validityEnd: "2026/12/01 23:59:59",
    image: U("photo-1611192447877-ef3fab59bbb8"),
  },
  {
    id: "slots-deposit",
    categories: ["slots", "welcome"],
    tags: ["Slots", "Welcome Offer", "FDB"],
    titleKey: "slotsDeposit",
    badgeKey: "welcomeOffer",
    highlightKey: "bonus100",
    validityStart: "2026/06/01 00:00:00",
    validityEnd: "2026/12/31 23:59:59",
    image: U("photo-1596838138485-dfb367046420", 700, 400),
  },
];

export function filterPromotions(
  items: PromotionItem[],
  filter: PromotionFilterId,
): PromotionItem[] {
  if (filter === "all") return items;
  return items.filter((p) => p.categories.includes(filter));
}

/** Compact set for sidebar slider */
export const sidebarPromotionIds = [
  "super-tiger-spins",
  "cricket-quest",
  "play-free-1000",
  "slots-deposit",
] as const;

export function getSidebarPromotions(): PromotionItem[] {
  return sidebarPromotionIds
    .map((id) => promotions.find((p) => p.id === id))
    .filter((p): p is PromotionItem => Boolean(p));
}
