import type { Locale } from "@/lib/locale";

export type NotificationItemId = "signup-success";

export type NotificationMessages = {
  pageTitle: string;
  edit: string;
  selectAll: string;
  unread: string;
  read: string;
  delete: string;
  exit: string;
  supportLink: string;
  empty: string;
  items: Record<
    NotificationItemId,
    {
      title: string;
      preview: string;
      body: string;
    }
  >;
};

const en: NotificationMessages = {
  pageTitle: "Notifications",
  edit: "Edit",
  selectAll: "Select all",
  unread: "Unread",
  read: "Read",
  delete: "Delete",
  exit: "Exit",
  supportLink: "Support",
  empty: "No notifications yet.",
  items: {
    "signup-success": {
      title: "Sign up successful.",
      preview:
        "Your confirmation digit is shown below. Do not share it with anyone. Support",
      body: "Your confirmation digit is 847291. Do not share it with anyone. If you did not sign up, contact Support immediately.",
    },
  },
};

const bn: NotificationMessages = {
  pageTitle: "নোটিফিকেশন",
  edit: "এডিট",
  selectAll: "সব সিলেক্ট করুন",
  unread: "পড়া হয়নি",
  read: "পড়ুন",
  delete: "Delete",
  exit: "এক্সিট",
  supportLink: "সাপোর্ট",
  empty: "এখনও কোনো নোটিফিকেশন নেই।",
  items: {
    "signup-success": {
      title: "সাইন আপ সফল।",
      preview: "কনফার্মেশন ডিজিট হলো এটি কারো সাথে শেয়ার করবেন না। সাপোর্ট",
      body: "আপনার কনফার্মেশন ডিজিট 847291। এটি কারো সাথে শেয়ার করবেন না। আপনি সাইন আপ না করে থাকলে অবিলম্বে সাপোর্ট এর সাথে যোগাযোগ করুন।",
    },
  },
};

const hi: NotificationMessages = {
  pageTitle: "सूचनाएँ",
  edit: "संपादित करें",
  selectAll: "सभी चुनें",
  unread: "अपठित",
  read: "पढ़ा हुआ",
  delete: "हटाएँ",
  exit: "बाहर",
  supportLink: "सहायता",
  empty: "अभी कोई सूचना नहीं है।",
  items: {
    "signup-success": {
      title: "साइन अप सफल।",
      preview: "आपका पुष्टिकरण अंक नीचे दिखाया गया है। इसे किसी के साथ साझा न करें। सहायता",
      body: "आपका पुष्टिकरण अंक 847291 है। इसे किसी के साथ साझा न करें। यदि आपने साइन अप नहीं किया है, तो तुरंत सहायता से संपर्क करें।",
    },
  },
};

const byLocale: Record<Locale, NotificationMessages> = { en, bn, hi };

export function getNotificationMessages(locale: Locale): NotificationMessages {
  return byLocale[locale] ?? en;
}
