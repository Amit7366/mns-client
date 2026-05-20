import type { Locale } from "@/lib/locale";
import type { PasswordRuleId } from "@/lib/change-password-validation";

export type ChangePasswordMessages = {
  pageTitle: string;
  back: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  placeholder: string;
  submit: string;
  mismatch: string;
  success: string;
  rules: Record<PasswordRuleId, string>;
};

const en: ChangePasswordMessages = {
  pageTitle: "Change password",
  back: "Back",
  currentPassword: "Current password",
  newPassword: "New password",
  confirmPassword: "Confirm new password",
  placeholder: "Enter your password",
  submit: "Change password",
  mismatch: "New password and confirmation do not match.",
  success: "Password changed successfully.",
  rules: {
    length: "Must be 6-20 characters",
    upper: "Must contain 1 uppercase alphabet(A-Z)",
    lower: "Must contain 1 lowercase alphabet(a-z)",
    number: "Must contain 1 number(0-9)",
    allowedChars: "Allowed special symbols(!@#$%*)",
  },
};

const bn: ChangePasswordMessages = {
  pageTitle: "পাসওয়ার্ড পরিবর্তন",
  back: "পিছনে",
  currentPassword: "বর্তমান পাসওয়ার্ড",
  newPassword: "নতুন পাসওয়ার্ড",
  confirmPassword: "নতুন পাসওয়ার্ড নিশ্চিত করুন",
  placeholder: "আপনার পাসওয়ার্ড লিখুন",
  submit: "পাসওয়ার্ড পরিবর্তন",
  mismatch: "নতুন পাসওয়ার্ড এবং নিশ্চিতকরণ মিলছে না।",
  success: "পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে।",
  rules: {
    length: "৬-২০ অক্ষরের হতে হবে",
    upper: "১টি বড় হাতের অক্ষর (A-Z) থাকতে হবে",
    lower: "১টি ছোট হাতের অক্ষর (a-z) থাকতে হবে",
    number: "১টি সংখ্যা (0-9) থাকতে হবে",
    allowedChars: "অনুমোদিত বিশেষ চিহ্ন(!@#$%*)",
  },
};

const hi: ChangePasswordMessages = {
  pageTitle: "पासवर्ड बदलें",
  back: "वापस",
  currentPassword: "वर्तमान पासवर्ड",
  newPassword: "नया पासवर्ड",
  confirmPassword: "नए पासवर्ड की पुष्टि करें",
  placeholder: "अपना पासवर्ड दर्ज करें",
  submit: "पासवर्ड बदलें",
  mismatch: "नया पासवर्ड और पुष्टि मेल नहीं खाते।",
  success: "पासवर्ड सफलतापूर्वक बदल दिया गया।",
  rules: {
    length: "6-20 अक्षर होने चाहिए",
    upper: "1 बड़ा अक्षर (A-Z) होना चाहिए",
    lower: "1 छोटा अक्षर (a-z) होना चाहिए",
    number: "1 संख्या (0-9) होनी चाहिए",
    allowedChars: "अनुमत विशेष प्रतीक(!@#$%*)",
  },
};

const byLocale: Record<Locale, ChangePasswordMessages> = { en, bn, hi };

export function getChangePasswordMessages(locale: Locale): ChangePasswordMessages {
  return byLocale[locale] ?? en;
}
