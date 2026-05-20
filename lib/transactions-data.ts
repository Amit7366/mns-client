export type TransactionStatus = "processing" | "approved" | "rejected" | "reverted";
export type TransactionPaymentType = "deposit" | "withdrawal" | "adjustment";
export type TransactionDateFilter = "today" | "yesterday" | "last7days";

export type TransactionRecord = {
  id: string;
  referenceId: string;
  status: TransactionStatus;
  paymentType: TransactionPaymentType;
  method: string;
  amount: number;
  createdAt: string;
};

/** Demo records; dates relative to 2026-05-20 reference from design. */
export const INITIAL_TRANSACTIONS: TransactionRecord[] = [
  {
    id: "tx-1",
    referenceId: "D00961877130",
    status: "rejected",
    paymentType: "deposit",
    method: "Bkash (E-wallet)",
    amount: 100,
    createdAt: "2026-05-20T10:36:30",
  },
  {
    id: "tx-2",
    referenceId: "W00961234001",
    status: "approved",
    paymentType: "withdrawal",
    method: "Nagad (E-wallet)",
    amount: -500,
    createdAt: "2026-05-20T08:15:00",
  },
  {
    id: "tx-3",
    referenceId: "D00961000088",
    status: "processing",
    paymentType: "deposit",
    method: "Rocket (E-wallet)",
    amount: 250,
    createdAt: "2026-05-19T14:22:10",
  },
  {
    id: "tx-4",
    referenceId: "A00960001234",
    status: "approved",
    paymentType: "adjustment",
    method: "System",
    amount: 50,
    createdAt: "2026-05-19T09:00:00",
  },
  {
    id: "tx-5",
    referenceId: "D00959887766",
    status: "reverted",
    paymentType: "deposit",
    method: "Bkash (E-wallet)",
    amount: 1000,
    createdAt: "2026-05-13T16:45:00",
  },
];

export const TRANSACTION_STATUS_IDS: TransactionStatus[] = [
  "processing",
  "approved",
  "rejected",
  "reverted",
];

export const TRANSACTION_PAYMENT_TYPE_IDS: TransactionPaymentType[] = [
  "deposit",
  "withdrawal",
  "adjustment",
];

export const TRANSACTION_DATE_FILTER_IDS: TransactionDateFilter[] = [
  "today",
  "yesterday",
  "last7days",
];

function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export function isTransactionInDateFilter(
  createdAt: string,
  filter: TransactionDateFilter,
  now = new Date(),
): boolean {
  const at = new Date(createdAt);
  const today = startOfDay(now);
  const recordDay = startOfDay(at);

  if (filter === "today") {
    return recordDay.getTime() === today.getTime();
  }
  if (filter === "yesterday") {
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return recordDay.getTime() === yesterday.getTime();
  }
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 6);
  return recordDay.getTime() >= weekAgo.getTime() && recordDay.getTime() <= today.getTime();
}

export function formatTransactionDateTime(iso: string): string {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function formatTransactionDateOnly(iso: string): string {
  return formatLocalDateOnly(new Date(iso));
}

export function formatLocalDateOnly(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function formatAmount(amount: number): string {
  const sign = amount >= 0 ? "+" : "";
  return `${sign}${amount.toFixed(2)}`;
}
