import {
  formatLocalDateOnly,
  formatTransactionDateTime,
  isTransactionInDateFilter,
  type TransactionDateFilter,
} from "./transactions-data";

export type BettingTab = "settled" | "unsettled";

export type BettingResult = "won" | "lost" | "void";

export type BettingRecord = {
  id: string;
  betId: string;
  gameName: string;
  category: string;
  stake: number;
  payout: number;
  result: BettingResult;
  settledAt: string;
};

/** Demo settled bets; unsettled is intentionally empty. */
export const SETTLED_BETTING_RECORDS: BettingRecord[] = [
  {
    id: "bet-1",
    betId: "B10293847561",
    gameName: "Cricket — BPL Final",
    category: "Sports",
    stake: 200,
    payout: 380,
    result: "won",
    settledAt: "2026-05-20T14:22:00",
  },
  {
    id: "bet-2",
    betId: "B10293840012",
    gameName: "Fortune Gems 500",
    category: "Slots",
    stake: 50,
    payout: 0,
    result: "lost",
    settledAt: "2026-05-19T21:05:33",
  },
  {
    id: "bet-3",
    betId: "B10293799881",
    gameName: "Live Baccarat",
    category: "Casino",
    stake: 500,
    payout: 500,
    result: "void",
    settledAt: "2026-05-18T11:40:15",
  },
];

export const UNSETTLED_BETTING_RECORDS: BettingRecord[] = [];

export function bettingRecordsForTab(tab: BettingTab): BettingRecord[] {
  return tab === "settled" ? SETTLED_BETTING_RECORDS : UNSETTLED_BETTING_RECORDS;
}

export function filterBettingRecords(
  records: BettingRecord[],
  dateFilter: TransactionDateFilter,
): BettingRecord[] {
  return records.filter((r) => isTransactionInDateFilter(r.settledAt, dateFilter));
}

export function formatBettingDateTime(iso: string): string {
  return formatTransactionDateTime(iso);
}

export function formatBettingDateOnly(iso: string): string {
  return formatLocalDateOnly(new Date(iso));
}

export function formatBetAmount(amount: number): string {
  const sign = amount >= 0 ? "+" : "";
  return `${sign}${amount.toFixed(2)}`;
}
