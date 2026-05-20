import type { Locale } from "@/lib/locale";
import type {
  TransactionDateFilter,
  TransactionPaymentType,
  TransactionStatus,
} from "@/lib/transactions-data";

export type TransactionMessages = {
  pageTitle: string;
  filterTitle: string;
  filterClose: string;
  filterClearAll: string;
  filterApply: string;
  filterStatus: string;
  filterPaymentType: string;
  filterDate: string;
  details: string;
  detailsTitle: string;
  detailsClose: string;
  referenceId: string;
  paymentMethod: string;
  amount: string;
  status: string;
  type: string;
  dateTime: string;
  empty: string;
  recordsCount: (from: number, to: number, total: number) => string;
  dateGroupToday: (date: string) => string;
  dateGroupYesterday: (date: string) => string;
  dateGroupOn: (date: string) => string;
  statusLabels: Record<TransactionStatus, string>;
  paymentTypeLabels: Record<TransactionPaymentType, string>;
  dateFilterLabels: Record<TransactionDateFilter, string>;
};

const en: TransactionMessages = {
  pageTitle: "Transaction records",
  filterTitle: "Filter",
  filterClose: "Close filter",
  filterClearAll: "Clear all",
  filterApply: "Apply filters",
  filterStatus: "Status",
  filterPaymentType: "Payment Type",
  filterDate: "Date",
  details: "Details",
  detailsTitle: "Transaction details",
  detailsClose: "Close",
  referenceId: "Transaction ID",
  paymentMethod: "Payment method",
  amount: "Amount",
  status: "Status",
  type: "Type",
  dateTime: "Date & time",
  empty: "No transactions match your filters.",
  recordsCount: (from, to, total) => `${from} - ${to} of ${total} records`,
  dateGroupToday: (date) => `Today ${date}`,
  dateGroupYesterday: (date) => `Yesterday ${date}`,
  dateGroupOn: (date) => date,
  statusLabels: {
    processing: "Processing",
    approved: "Approved",
    rejected: "Rejected",
    reverted: "Reverted",
  },
  paymentTypeLabels: {
    deposit: "Deposit",
    withdrawal: "Withdrawal",
    adjustment: "Adjustment",
  },
  dateFilterLabels: {
    today: "Today",
    yesterday: "Yesterday",
    last7days: "Last 7 days",
  },
};

const bn: TransactionMessages = {
  pageTitle: "ট্রানজ্যাকশন রেকর্ডস",
  filterTitle: "ফিল্টার",
  filterClose: "ফিল্টার বন্ধ করুন",
  filterClearAll: "সব মুছুন",
  filterApply: "ফিল্টার প্রয়োগ করুন",
  filterStatus: "স্ট্যাটাস",
  filterPaymentType: "পেমেন্ট টাইপ",
  filterDate: "তারিখ",
  details: "বিস্তারিত",
  detailsTitle: "ট্রানজ্যাকশন বিস্তারিত",
  detailsClose: "বন্ধ",
  referenceId: "ট্রানজ্যাকশন আইডি",
  paymentMethod: "পেমেন্ট পদ্ধতি",
  amount: "পরিমাণ",
  status: "স্ট্যাটাস",
  type: "ধরন",
  dateTime: "তারিখ ও সময়",
  empty: "আপনার ফিল্টারের সাথে কোনো ট্রানজ্যাকশন মিলছে না।",
  recordsCount: (from, to, total) => `${total} রেকর্ডের মধ্যে ${from} - ${to}`,
  dateGroupToday: (date) => `আজ ${date}`,
  dateGroupYesterday: (date) => `গতকাল ${date}`,
  dateGroupOn: (date) => date,
  statusLabels: {
    processing: "প্রসেসিং",
    approved: "অনুমোদিত",
    rejected: "প্রত্যাখ্যাত",
    reverted: "রিভার্টেড",
  },
  paymentTypeLabels: {
    deposit: "ডিপোজিট",
    withdrawal: "উইথড্রয়াল",
    adjustment: "অ্যাডজাস্টমেন্ট",
  },
  dateFilterLabels: {
    today: "আজ",
    yesterday: "গতকাল",
    last7days: "গত ৭ দিন",
  },
};

const hi: TransactionMessages = {
  pageTitle: "लेनदेन रिकॉर्ड",
  filterTitle: "फ़िल्टर",
  filterClose: "फ़िल्टर बंद करें",
  filterClearAll: "सभी साफ़ करें",
  filterApply: "फ़िल्टर लागू करें",
  filterStatus: "स्थिति",
  filterPaymentType: "भुगतान प्रकार",
  filterDate: "तारीख",
  details: "विवरण",
  detailsTitle: "लेनदेन विवरण",
  detailsClose: "बंद करें",
  referenceId: "लेनदेन ID",
  paymentMethod: "भुगतान विधि",
  amount: "राशि",
  status: "स्थिति",
  type: "प्रकार",
  dateTime: "दिनांक और समय",
  empty: "आपके फ़िल्टर से कोई लेनदेन मेल नहीं खाता।",
  recordsCount: (from, to, total) => `${total} रिकॉर्ड में से ${from} - ${to}`,
  dateGroupToday: (date) => `आज ${date}`,
  dateGroupYesterday: (date) => `कल ${date}`,
  dateGroupOn: (date) => date,
  statusLabels: {
    processing: "प्रोसेसिंग",
    approved: "स्वीकृत",
    rejected: "अस्वीकृत",
    reverted: "वापस",
  },
  paymentTypeLabels: {
    deposit: "जमा",
    withdrawal: "निकासी",
    adjustment: "समायोजन",
  },
  dateFilterLabels: {
    today: "आज",
    yesterday: "कल",
    last7days: "पिछले 7 दिन",
  },
};

const MAP: Record<Locale, TransactionMessages> = { en, bn, hi };

export function getTransactionMessages(locale: Locale): TransactionMessages {
  return MAP[locale] ?? en;
}
