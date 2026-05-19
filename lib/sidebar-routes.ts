import { lobbyCategoryHref, type LobbyKind } from "./vendor-routes";

const LOBBY_LINKS: Partial<Record<string, LobbyKind>> = {
  exclusive: "exclusive",
};

/** Internal sidebar link targets; `null` = placeholder (#). */
export function sidebarItemHref(locale: string, itemId: string): string | null {
  if (itemId === "vipClub") return `/${locale}/vip`;
  if (itemId === "referral") return `/${locale}/referral`;
  const kind = LOBBY_LINKS[itemId];
  if (kind) return lobbyCategoryHref(locale, kind);
  return null;
}
