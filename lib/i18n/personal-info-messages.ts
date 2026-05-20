import type { Locale } from "@/lib/locale";

export type PersonalInfoMessages = {
  fullLegalName: {
    pageTitle: string;
    fieldLabel: string;
    fieldHint: string;
    placeholder: string;
    submit: string;
    submitted: string;
  };
  dateOfBirth: {
    pageTitle: string;
    fieldLabel: string;
    placeholder: string;
    submit: string;
    submitted: string;
    invalidDate: string;
  };
  phone: {
    pageTitle: string;
    heading: string;
    subtitle: string;
    fieldLabel: string;
    continue: string;
    invalidPhone: string;
  };
  email: {
    pageTitle: string;
    heading: string;
    subtitle: string;
    fieldLabel: string;
    placeholder: string;
    continue: string;
    invalidEmail: string;
  };
  verify: {
    phoneTitle: string;
    emailTitle: string;
    phoneSubtitle: string;
    emailSubtitle: string;
    resend: string;
    resendIn: string;
    submit: string;
    invalidCode: string;
    successPhone: string;
    successEmail: string;
  };
  privacyText: string;
  contactCs: string;
  back: string;
};

const en: PersonalInfoMessages = {
  fullLegalName: {
    pageTitle: "Full legal name",
    fieldLabel: "Full legal name",
    fieldHint: "Must match your government-issued ID.",
    placeholder: "Enter your full legal name",
    submit: "Submit",
    submitted: "Full legal name saved.",
  },
  dateOfBirth: {
    pageTitle: "Date of birth",
    fieldLabel: "Date of birth",
    placeholder: "YYYY-MM-DD",
    submit: "Submit",
    submitted: "Date of birth saved.",
    invalidDate: "Use date format YYYY-MM-DD.",
  },
  phone: {
    pageTitle: "Phone",
    heading: "Phone number",
    subtitle: "Your phone number will receive a verification code via SMS.",
    fieldLabel: "Phone number",
    continue: "Continue",
    invalidPhone: "Enter a valid phone number.",
  },
  email: {
    pageTitle: "Email",
    heading: "Email address",
    subtitle: "A verification code will be sent to the email address you provide.",
    fieldLabel: "Email",
    placeholder: "Enter your email",
    continue: "Continue",
    invalidEmail: "Enter a valid email address.",
  },
  verify: {
    phoneTitle: "Verify phone",
    emailTitle: "Verify email",
    phoneSubtitle: "Enter the 6-digit code sent to your phone.",
    emailSubtitle: "Enter the 6-digit code sent to your email.",
    resend: "Resend code",
    resendIn: "Resend in {seconds}s",
    submit: "Submit",
    invalidCode: "Incorrect code. Please try again.",
    successPhone: "Phone number verified.",
    successEmail: "Email verified.",
  },
  privacyText:
    "For privacy and security, information can't be modified after confirmation. Please ",
  contactCs: "Contact CS",
  back: "Back",
};

const bn: PersonalInfoMessages = {
  fullLegalName: {
    pageTitle: "পূর্ণ আইনি নাম",
    fieldLabel: "পূর্ণ আইনি নাম",
    fieldHint: "সরকারি আইডির সাথে মিলতে হবে।",
    placeholder: "আপনার পূর্ণ আইনি নাম লিখুন",
    submit: "জমা দিন",
    submitted: "পূর্ণ আইনি নাম সংরক্ষিত হয়েছে।",
  },
  dateOfBirth: {
    pageTitle: "জন্ম তারিখ",
    fieldLabel: "জন্ম তারিখ",
    placeholder: "YYYY-MM-DD",
    submit: "জমা দিন",
    submitted: "জন্ম তারিখ সংরক্ষিত হয়েছে।",
    invalidDate: "YYYY-MM-DD তারিখ ফরম্যাট ব্যবহার করুন।",
  },
  phone: {
    pageTitle: "ফোন",
    heading: "ফোন নম্বর",
    subtitle: "আপনার ফোন নম্বরে SMS এর মাধ্যমে একটি ভেরিফিকেশন কোড পাঠানো হবে।",
    fieldLabel: "ফোন নম্বর",
    continue: "চালিয়ে যান",
    invalidPhone: "একটি বৈধ ফোন নম্বর লিখুন।",
  },
  email: {
    pageTitle: "ইমেইল",
    heading: "ইমেইল ঠিকানা",
    subtitle: "আপনার প্রদত্ত ইমেইল ঠিকানায় একটি ভেরিফিকেশন কোড পাঠানো হবে।",
    fieldLabel: "ইমেইল",
    placeholder: "আপনার ইমেইল লিখুন",
    continue: "চালিয়ে যান",
    invalidEmail: "একটি বৈধ ইমেইল লিখুন।",
  },
  verify: {
    phoneTitle: "ফোন যাচাই",
    emailTitle: "ইমেইল যাচাই",
    phoneSubtitle: "আপনার ফোনে পাঠানো ৬-অঙ্কের কোড লিখুন।",
    emailSubtitle: "আপনার ইমেইলে পাঠানো ৬-অঙ্কের কোড লিখুন।",
    resend: "কোড পুনরায় পাঠান",
    resendIn: "{seconds} সেকেন্ডে পুনরায় পাঠান",
    submit: "জমা দিন",
    invalidCode: "ভুল কোড। আবার চেষ্টা করুন।",
    successPhone: "ফোন নম্বর যাচাই হয়েছে।",
    successEmail: "ইমেইল যাচাই হয়েছে।",
  },
  privacyText:
    "গোপনীয়তা এবং নিরাপত্তার জন্য, নিশ্চিতকরণের পরে তথ্য পরিবর্তন করা যাবে না। অনুগ্রহ করে ",
  contactCs: "CS এর সাথে যোগাযোগ",
  back: "পিছনে",
};

const hi: PersonalInfoMessages = {
  fullLegalName: {
    pageTitle: "पूरा कानूनी नाम",
    fieldLabel: "पूरा कानूनी नाम",
    fieldHint: "सरकारी आईडी से मेल खाना चाहिए।",
    placeholder: "अपना पूरा कानूनी नाम दर्ज करें",
    submit: "जमा करें",
    submitted: "पूरा कानूनी नाम सहेजा गया।",
  },
  dateOfBirth: {
    pageTitle: "जन्म तिथि",
    fieldLabel: "जन्म तिथि",
    placeholder: "YYYY-MM-DD",
    submit: "जमा करें",
    submitted: "जन्म तिथि सहेजी गई।",
    invalidDate: "YYYY-MM-DD तिथि प्रारूप का उपयोग करें।",
  },
  phone: {
    pageTitle: "फ़ोन",
    heading: "फ़ोन नंबर",
    subtitle: "आपके फ़ोन नंबर पर SMS के माध्यम से सत्यापन कोड भेजा जाएगा।",
    fieldLabel: "फ़ोन नंबर",
    continue: "जारी रखें",
    invalidPhone: "एक वैध फ़ोन नंबर दर्ज करें।",
  },
  email: {
    pageTitle: "ईमेल",
    heading: "ईमेल पता",
    subtitle: "आपके द्वारा दिए गए ईमेल पते पर सत्यापन कोड भेजा जाएगा।",
    fieldLabel: "ईमेल",
    placeholder: "अपना ईमेल दर्ज करें",
    continue: "जारी रखें",
    invalidEmail: "एक वैध ईमेल दर्ज करें।",
  },
  verify: {
    phoneTitle: "फ़ोन सत्यापित करें",
    emailTitle: "ईमेल सत्यापित करें",
    phoneSubtitle: "अपने फ़ोन पर भेजा गया 6-अंकीय कोड दर्ज करें।",
    emailSubtitle: "अपने ईमेल पर भेजा गया 6-अंकीय कोड दर्ज करें।",
    resend: "कोड पुनः भेजें",
    resendIn: "{seconds} सेकंड में पुनः भेजें",
    submit: "जमा करें",
    invalidCode: "गलत कोड। कृपया पुनः प्रयास करें।",
    successPhone: "फ़ोन नंबर सत्यापित।",
    successEmail: "ईमेल सत्यापित।",
  },
  privacyText:
    "गोपनीयता और सुरक्षा के लिए, पुष्टि के बाद जानकारी संशोधित नहीं की जा सकती। कृपया ",
  contactCs: "CS से संपर्क करें",
  back: "वापस",
};

const byLocale: Record<Locale, PersonalInfoMessages> = { en, bn, hi };

export function getPersonalInfoMessages(locale: Locale): PersonalInfoMessages {
  return byLocale[locale] ?? en;
}
