import type { Locale } from "@/lib/locale";

export type AuthMessages = {
  logInTab: string;
  signUpTab: string;
  username: string;
  password: string;
  enterUsername: string;
  enterPassword: string;
  forgotPassword: string;
  logInButton: string;
  chooseCurrency: string;
  phoneNumber: string;
  continue: string;
  stepContact: string;
  stepUsername: string;
  stepPassword: string;
  signUpButton: string;
  showPassword: string;
  hidePassword: string;
  home: string;
};

const en: AuthMessages = {
  logInTab: "Log in",
  signUpTab: "Sign up",
  username: "Username",
  password: "Password",
  enterUsername: "Enter your username",
  enterPassword: "Enter your password",
  forgotPassword: "Forgot password?",
  logInButton: "Log in",
  chooseCurrency: "Choose currency",
  phoneNumber: "Phone number",
  continue: "Continue",
  stepContact: "Contact",
  stepUsername: "Username",
  stepPassword: "Password",
  signUpButton: "Sign up",
  showPassword: "Show password",
  hidePassword: "Hide password",
  home: "Home",
};

const bn: AuthMessages = {
  logInTab: "লগ ইন",
  signUpTab: "সাইন আপ",
  username: "ইউজারনেম",
  password: "পাসওয়ার্ড",
  enterUsername: "আপনার ইউজারনেম লিখুন",
  enterPassword: "আপনার পাসওয়ার্ড লিখুন",
  forgotPassword: "পাসওয়ার্ড ভুলে গেছেন?",
  logInButton: "লগ ইন",
  chooseCurrency: "মুদ্রা বেছে নিন",
  phoneNumber: "ফোন নম্বর",
  continue: "চালিয়ে যান",
  stepContact: "যোগাযোগ",
  stepUsername: "ইউজারনেম",
  stepPassword: "পাসওয়ার্ড",
  signUpButton: "সাইন আপ",
  showPassword: "পাসওয়ার্ড দেখুন",
  hidePassword: "পাসওয়ার্ড লুকান",
  home: "হোম",
};

const hi: AuthMessages = {
  logInTab: "लॉग इन",
  signUpTab: "साइन अप",
  username: "उपयोगकर्ता नाम",
  password: "पासवर्ड",
  enterUsername: "अपना उपयोगकर्ता नाम दर्ज करें",
  enterPassword: "अपना पासवर्ड दर्ज करें",
  forgotPassword: "पासवर्ड भूल गए?",
  logInButton: "लॉग इन",
  chooseCurrency: "मुद्रा चुनें",
  phoneNumber: "फ़ोन नंबर",
  continue: "जारी रखें",
  stepContact: "संपर्क",
  stepUsername: "उपयोगकर्ता नाम",
  stepPassword: "पासवर्ड",
  signUpButton: "साइन अप",
  showPassword: "पासवर्ड दिखाएँ",
  hidePassword: "पासवर्ड छिपाएँ",
  home: "होम",
};

const catalogs: Record<Locale, AuthMessages> = { en, bn, hi };

export function getAuthMessages(locale: Locale): AuthMessages {
  return catalogs[locale] ?? catalogs.bn;
}
