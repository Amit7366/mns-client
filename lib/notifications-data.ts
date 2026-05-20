import type { NotificationItemId } from "@/lib/i18n/notification-messages";

export type NotificationRecord = {
  id: string;
  itemId: NotificationItemId;
  date: string;
  read: boolean;
};

export const INITIAL_NOTIFICATIONS: NotificationRecord[] = [
  {
    id: "n-1",
    itemId: "signup-success",
    date: "2026-05-19",
    read: false,
  },
];
