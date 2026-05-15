import type { LobbyKind } from "./vendor-routes";

/** Vendor codes shown in filter sheet; labels come from `home.providers` keys. */
export type LobbyFilterProviderRow = {
  vendorCode: string;
  labelKey: string;
};

const CASINO_PROVIDERS: LobbyFilterProviderRow[] = [
  { vendorCode: "awcv2_evolution", labelKey: "evolution" },
  { vendorCode: "awcv2_sexybcrt", labelKey: "sexy" },
  { vendorCode: "awcv2_pragmaticplay", labelKey: "pragmatic" },
  { vendorCode: "awcv2_playtech", labelKey: "playtech" },
  { vendorCode: "awcv2_dreamgaming", labelKey: "dreamGaming" },
  { vendorCode: "awcv2_wm", labelKey: "wmCasino" },
  { vendorCode: "awcv2_biggaming", labelKey: "bigGaming" },
];

const SLOT_LIKE_PROVIDERS: LobbyFilterProviderRow[] = [
  { vendorCode: "awcv2_jili", labelKey: "jili" },
  { vendorCode: "awcv2_pgsoft", labelKey: "pg" },
  { vendorCode: "awcv2_pragmaticplay", labelKey: "pragmatic" },
  { vendorCode: "awcv2_jdb", labelKey: "jdb" },
  { vendorCode: "awcv2_fachai", labelKey: "fachai" },
  { vendorCode: "awcv2_yellowbat", labelKey: "yellowBat" },
];

const CRASH_PROVIDERS: LobbyFilterProviderRow[] = [
  { vendorCode: "awcv2_spribe", labelKey: "spribe" },
  { vendorCode: "awcv2_smartsoft", labelKey: "smartsoft" },
  { vendorCode: "awcv2_jili", labelKey: "jili" },
  { vendorCode: "awcv2_pragmaticplay", labelKey: "pragmatic" },
];

const SPORTS_PROVIDERS: LobbyFilterProviderRow[] = [
  { vendorCode: "awcv2_cricket", labelKey: "cricket" },
  { vendorCode: "awcv2_bti", labelKey: "btiSports" },
  { vendorCode: "awcv2_insports", labelKey: "inSports" },
  { vendorCode: "awcv2_fbsports", labelKey: "fbSports" },
  { vendorCode: "awcv2_jili", labelKey: "jili" },
];

/** Table / fishing / arcade / lottery: pragmatic mix of known codes */
const TABLE_PROVIDERS: LobbyFilterProviderRow[] = [
  { vendorCode: "awcv2_baccarat", labelKey: "baccarat" },
  { vendorCode: "awcv2_roulette", labelKey: "roulette" },
  { vendorCode: "awcv2_evolution", labelKey: "evolution" },
  { vendorCode: "awcv2_sexybcrt", labelKey: "sexy" },
  { vendorCode: "awcv2_pragmaticplay", labelKey: "pragmatic" },
];

export function lobbyFilterProviderRows(kind: LobbyKind): LobbyFilterProviderRow[] {
  switch (kind) {
    case "casino":
      return CASINO_PROVIDERS;
    case "sports":
      return SPORTS_PROVIDERS;
    case "crash":
      return CRASH_PROVIDERS;
    case "table":
    case "fishing":
    case "arcade":
    case "lottery":
      return TABLE_PROVIDERS;
    case "exclusive":
    case "slot":
    default:
      return SLOT_LIKE_PROVIDERS;
  }
}

export function providerLabelKeyForVendorCode(kind: LobbyKind, vendorCode: string): string | undefined {
  return lobbyFilterProviderRows(kind).find((r) => r.vendorCode === vendorCode)?.labelKey;
}

export function allLobbyVendorCodes(kind: LobbyKind): string[] {
  return lobbyFilterProviderRows(kind).map((r) => r.vendorCode);
}
