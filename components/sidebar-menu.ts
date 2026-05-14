export type SidebarSubItem = {
  id: string;
  label: string;
  accent?: string;
};

export type SidebarMenuItem = {
  id: string;
  label: string;
  subItems?: SidebarSubItem[];
};

export const sidebarMenuItems: SidebarMenuItem[] = [
  { id: "exclusive", label: "এক্সক্লুসিভ গেমগুলো" },
  {
    id: "sports",
    label: "স্পোর্ট",
    subItems: [
      { id: "all", label: "অল" },
      { id: "cricket", label: "ক্রিকেট" },
      { id: "football", label: "ফুটবল" },
      { id: "tennis", label: "টেনিস" },
    ],
  },
  {
    id: "casino",
    label: "ক্যাসিনো",
    subItems: [
      { id: "all", label: "অল" },
      { id: "evolution", label: "Evolution" },
      { id: "pragmatic", label: "Pragmatic Play" },
      { id: "sexy", label: "Sexy Gaming" },
    ],
  },
  {
    id: "slots",
    label: "স্লট",
    subItems: [
      { id: "all", label: "অল" },
      { id: "jdb", label: "JDB" },
      { id: "pg", label: "PG Soft" },
      { id: "jili", label: "JILI" },
    ],
  },
  {
    id: "crash",
    label: "ক্রাশ",
    subItems: [
      { id: "all", label: "অল" },
      { id: "aviator", label: "Aviator" },
      { id: "spribe", label: "Spribe" },
    ],
  },
  {
    id: "table",
    label: "টেবিল",
    subItems: [
      { id: "all", label: "অল" },
      { id: "baccarat", label: "Baccarat" },
      { id: "roulette", label: "Roulette" },
    ],
  },
  {
    id: "fishing",
    label: "ফিশিং",
    subItems: [
      { id: "all", label: "অল" },
      { id: "jdb", label: "JDB" },
      { id: "jili", label: "JILI" },
    ],
  },
  {
    id: "arcade",
    label: "আর্কেড",
    subItems: [
      { id: "all", label: "অল" },
      { id: "jdb", label: "JDB", accent: "#f5a623" },
      { id: "fachai", label: "Fa Chai", accent: "#3b82f6" },
      { id: "pragmatic", label: "Pragmatic Play", accent: "#f97316" },
      { id: "rich88", label: "Rich88", accent: "#a855f7" },
      { id: "youlian", label: "You Lian", accent: "#38bdf8" },
      { id: "hacksaw", label: "Hacksaw", accent: "#e5e7eb" },
    ],
  },
  {
    id: "lottery",
    label: "লটারি",
    subItems: [
      { id: "all", label: "অল" },
      { id: "tc", label: "TC Gaming" },
      { id: "king", label: "King Midas" },
    ],
  },
];
