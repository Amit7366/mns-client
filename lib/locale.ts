export const LOCALES = ["en", "bn", "hi"] as const;
export type Locale = (typeof LOCALES)[number];

export const COUNTRIES = ["bd", "in"] as const;
export type Country = (typeof COUNTRIES)[number];

export type Currency = "BDT" | "INR";

export type LocalePreferences = {
  country: Country;
  locale: Locale;
  currency: Currency;
};

export const DEFAULT_PREFERENCES: LocalePreferences = {
  country: "bd",
  locale: "bn",
  currency: "BDT",
};

export const LOCALE_COOKIE = "locale-prefs";

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function currencyForCountry(country: Country): Currency {
  return country === "bd" ? "BDT" : "INR";
}

export function languagesForCountry(country: Country): { locale: Locale; label: string }[] {
  if (country === "bd") {
    return [
      { locale: "en", label: "English" },
      { locale: "bn", label: "বাংলা" },
    ];
  }

  return [
    { locale: "en", label: "English" },
    { locale: "hi", label: "हिंदी" },
    { locale: "bn", label: "বাংলা" },
  ];
}
