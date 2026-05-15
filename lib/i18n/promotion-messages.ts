import type { Locale } from "@/lib/locale";
import type { PromotionFilterId } from "@/lib/promotions-data";

export type PromotionMessages = {
  pageTitle: string;
  readMore: string;
  noResults: string;
  validity: string;
  filters: Record<PromotionFilterId, string>;
  badges: Record<string, string>;
  subtitles: Record<string, string>;
  highlights: Record<string, string>;
  titles: Record<string, string>;
};

const en: PromotionMessages = {
  pageTitle: "Promotions",
  readMore: "Read more",
  noResults: "No promotions in this category yet.",
  validity: "Validity period",
  filters: {
    all: "ALL",
    welcome: "Welcome Offer",
    slots: "Slots",
    liveCasino: "Live Casino",
    sports: "Sports",
    fishing: "Fishing",
    lottery: "Lottery",
    table: "Table",
    arcade: "Arcade",
    crash: "Crash",
    other: "Other",
  },
  badges: {
    welcomeOffer: "WELCOME OFFER",
    cricketQuest: "CRICKET QUEST MISSION",
  },
  subtitles: {
    spinAndWin: "SPIN & WIN!",
  },
  highlights: {
    freeSpins100: "100 FREE SPINS",
    crore66: "UP TO ৳6.6 CRORE",
    bonus100: "100% BONUS",
  },
  titles: {
    superTigerSpins: "Unlock Up To 100 Free Spins",
    cricketQuest: "Up to ৳6.6 Crore",
    playFree1000: "Play & Get Free ৳1,000 Bonus",
    liveCasinoCashback: "Live Casino Weekly Cashback",
    fishingBonus: "Fishing Reel Bonus Boost",
    lotteryJackpot: "Daily Lottery Jackpot Draw",
    tableHighroller: "Table Games High Roller Pack",
    arcadeRewards: "Arcade Play Rewards",
    crashAviator: "Crash & Aviator Multiplier Boost",
    slotsDeposit: "First Deposit Slots Bonus",
  },
};

const bn: PromotionMessages = {
  pageTitle: "প্রমোশন",
  readMore: "আরও পড়ুন",
  noResults: "এই বিভাগে এখনও কোনো প্রমোশন নেই।",
  validity: "মেয়াদ",
  filters: {
    all: "সব",
    welcome: "ওয়েলকাম অফার",
    slots: "স্লট",
    liveCasino: "লাইভ ক্যাসিনো",
    sports: "স্পোর্টস",
    fishing: "ফিশিং",
    lottery: "লটারি",
    table: "টেবিল",
    arcade: "আর্কেড",
    crash: "ক্র্যাশ",
    other: "অন্যান্য",
  },
  badges: {
    welcomeOffer: "ওয়েলকাম অফার",
    cricketQuest: "ক্রিকেট কোয়েস্ট মিশন",
  },
  subtitles: {
    spinAndWin: "স্পিন ও জিতুন!",
  },
  highlights: {
    freeSpins100: "১০০ ফ্রি স্পিন",
    crore66: "৳৬.৬ কোটি পর্যন্ত",
    bonus100: "১০০% বোনাস",
  },
  titles: {
    superTigerSpins: "১০০ ফ্রি স্পিন পর্যন্ত আনলক করুন",
    cricketQuest: "৳৬.৬ কোটি পর্যন্ত",
    playFree1000: "খেলুন ও ৳১,০০০ বোনাস পান",
    liveCasinoCashback: "লাইভ ক্যাসিনো সাপ্তাহিক ক্যাশব্যাক",
    fishingBonus: "ফিশিং রিল বোনাস বুস্ট",
    lotteryJackpot: "দৈনিক লটারি জ্যাকপট",
    tableHighroller: "টেবিল গেম হাই রোলার প্যাক",
    arcadeRewards: "আর্কেড প্লে রিওয়ার্ড",
    crashAviator: "ক্র্যাশ ও এভিয়েটর মাল্টিপ্লায়ার",
    slotsDeposit: "প্রথম ডিপোজিট স্লট বোনাস",
  },
};

const hi: PromotionMessages = {
  pageTitle: "प्रमोशन",
  readMore: "और पढ़ें",
  noResults: "इस श्रेणी में अभी कोई प्रमोशन नहीं है।",
  validity: "वैधता अवधि",
  filters: {
    all: "सभी",
    welcome: "वेलकम ऑफर",
    slots: "स्लॉट",
    liveCasino: "लाइव कैसीनो",
    sports: "स्पोर्ट्स",
    fishing: "फिशिंग",
    lottery: "लॉटरी",
    table: "टेबल",
    arcade: "आर्केड",
    crash: "क्रैश",
    other: "अन्य",
  },
  badges: {
    welcomeOffer: "वेलकम ऑफर",
    cricketQuest: "क्रिकेट क्वेस्ट मिशन",
  },
  subtitles: {
    spinAndWin: "स्पिन और जीतें!",
  },
  highlights: {
    freeSpins100: "100 फ्री स्पिन",
    crore66: "₹6.6 करोड़ तक",
    bonus100: "100% बोनस",
  },
  titles: {
    superTigerSpins: "100 फ्री स्पिन तक अनलॉक करें",
    cricketQuest: "₹6.6 करोड़ तक",
    playFree1000: "खेलें और ₹1,000 बोनस पाएं",
    liveCasinoCashback: "लाइव कैसीनो साप्ताहिक कैशबैक",
    fishingBonus: "फिशिंग रील बोनस बूस्ट",
    lotteryJackpot: "दैनिक लॉटरी जैकपॉट",
    tableHighroller: "टेबल गेम हाई रोलर पैक",
    arcadeRewards: "आर्केड प्ले रिवॉर्ड्स",
    crashAviator: "क्रैश और एविएटर बूस्ट",
    slotsDeposit: "पहली जमा स्लॉट बोनस",
  },
};

const catalogs: Record<Locale, PromotionMessages> = { en, bn, hi };

export function getPromotionMessages(locale: Locale): PromotionMessages {
  return catalogs[locale] ?? catalogs.bn;
}
