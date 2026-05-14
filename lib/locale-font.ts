import type { Locale } from "./locale";

export function localeFontClass(locale: Locale): string {
  if (locale === "bn") return "font-bengali";
  if (locale === "hi") return "font-hindi";
  return "font-sans";
}
