"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/locale";
import {
  formatRulesText,
  getReferralRulesMessages,
  type ReferralRulesMessages,
} from "@/lib/i18n/referral-rules-messages";

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M4.5 4.5l9 9M13.5 4.5l-9 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function highlightReferralTerms(text: string, rules: ReferralRulesMessages) {
  const parts: React.ReactNode[] = [];
  const tokens = [
    { key: rules.referralCode, className: "text-[#5eb3ff] hover:underline" },
    { key: rules.referralLink, className: "text-[#5eb3ff] hover:underline" },
  ];
  let remaining = text;
  let i = 0;
  while (remaining.length > 0) {
    let earliest = -1;
    let matched = "";
    for (const t of tokens) {
      const idx = remaining.indexOf(t.key);
      if (idx !== -1 && (earliest === -1 || idx < earliest)) {
        earliest = idx;
        matched = t.key;
      }
    }
    if (earliest === -1) {
      parts.push(<span key={i}>{remaining}</span>);
      break;
    }
    if (earliest > 0) parts.push(<span key={i++}>{remaining.slice(0, earliest)}</span>);
    parts.push(
      <span key={i++} className="text-[#5eb3ff]">
        {matched}
      </span>,
    );
    remaining = remaining.slice(earliest + matched.length);
  }
  return parts;
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-6 text-[15px] font-bold text-white first:mt-0">{children}</h3>
  );
}

function BulletList({
  items,
  locale,
  rules,
  highlight,
}: {
  items: string[];
  locale: Locale;
  rules: ReferralRulesMessages;
  highlight?: boolean;
}) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2.5 text-[13px] leading-relaxed text-[#d4d4d4] sm:text-[14px]">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#f5c518]" aria-hidden />
          <span>
            {highlight ? highlightReferralTerms(formatRulesText(locale, item), rules) : formatRulesText(locale, item)}
          </span>
        </li>
      ))}
    </ul>
  );
}

type ReferralRulesModalProps = {
  open: boolean;
  locale: Locale;
  onClose: () => void;
};

export default function ReferralRulesModal({ open, locale, onClose }: ReferralRulesModalProps) {
  const rules = getReferralRulesMessages(locale);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const h = rules.tableHeaders;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" aria-hidden />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="referral-rules-title"
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[min(92dvh,820px)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-[#333] bg-[#1e1e1e] shadow-[0_24px_80px_rgba(0,0,0,0.65)] sm:rounded-2xl"
      >
        <div className="h-1 shrink-0 bg-gradient-to-r from-[#178358] via-[#f5c518] to-[#178358]" />

        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-[#2a2a2a] px-4 py-3.5 sm:px-5">
          <h2 id="referral-rules-title" className="text-[17px] font-bold text-white sm:text-lg">
            {rules.modalTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={rules.close}
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg text-[#a3a3a3] transition-colors hover:bg-white/10 hover:text-white"
          >
            <CloseIcon />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-5 [-webkit-overflow-scrolling:touch]">
          <div className="space-y-3 text-[13px] leading-relaxed text-[#d4d4d4] sm:text-[14px]">
            {rules.intro.map((p, i) => (
              <p key={i}>{formatRulesText(locale, p)}</p>
            ))}
          </div>

          <SectionTitle>{rules.whatToDoTitle}</SectionTitle>
          <BulletList items={[...rules.whatToDoItems]} locale={locale} rules={rules} highlight />

          <SectionTitle>{rules.whatYouGetTitle}</SectionTitle>
          <BulletList items={[rules.whatYouGetBody]} locale={locale} rules={rules} />

          <div className="mt-4 overflow-x-auto rounded-lg border border-[#3a3a3a]">
            <table className="w-full min-w-[420px] border-collapse text-left text-[12px] sm:text-[13px]">
              <thead>
                <tr className="bg-[#2a2a2a] text-white">
                  <th className="border-b border-[#3a3a3a] px-3 py-2.5 font-semibold">{h.turnover}</th>
                  <th className="border-b border-l border-[#3a3a3a] px-3 py-2.5 font-semibold">{h.tier1}</th>
                  <th className="border-b border-l border-[#3a3a3a] px-3 py-2.5 font-semibold">{h.tier2}</th>
                  <th className="border-b border-l border-[#3a3a3a] px-3 py-2.5 font-semibold">{h.tier3}</th>
                </tr>
              </thead>
              <tbody>
                {rules.tableRows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#252525]" : "bg-[#1e1e1e]"}>
                    <td className="border-b border-[#3a3a3a] px-3 py-2.5 text-white">{formatRulesText(locale, row.turnover)}</td>
                    <td className="border-b border-l border-[#3a3a3a] px-3 py-2.5 text-[#f5c518]">{formatRulesText(locale, row.tier1)}</td>
                    <td className="border-b border-l border-[#3a3a3a] px-3 py-2.5 text-[#f5c518]">{formatRulesText(locale, row.tier2)}</td>
                    <td className="border-b border-l border-[#3a3a3a] px-3 py-2.5 text-[#f5c518]">{formatRulesText(locale, row.tier3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-4 space-y-2.5 text-[13px] leading-relaxed text-[#d4d4d4] sm:text-[14px]">
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#6b7280]" />
              <span>{formatRulesText(locale, rules.notes[0])}</span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#6b7280]" />
              <span>
                <button type="button" className="text-[#5eb3ff] hover:underline">
                  {rules.effectiveTurnover}
                </button>
                {formatRulesText(locale, rules.noteEffectiveSuffix)}
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#6b7280]" />
              <span>
                <button type="button" className="text-[#5eb3ff] underline hover:no-underline">
                  {rules.oddsExcludedHere}
                </button>
                {formatRulesText(locale, rules.noteOddsSuffix)}
              </span>
            </li>
          </ul>

          <SectionTitle>{rules.exampleTitle}</SectionTitle>
          <BulletList items={[...rules.exampleItems]} locale={locale} rules={rules} />
          <BulletList items={[...rules.exampleRewards]} locale={locale} rules={rules} />

          <SectionTitle>{rules.wageringTitle}</SectionTitle>
          <BulletList items={[...rules.wageringItems]} locale={locale} rules={rules} />

          <SectionTitle>{rules.limitationsTitle}</SectionTitle>
          <BulletList items={[...rules.limitationsItems]} locale={locale} rules={rules} highlight />

          <SectionTitle>{rules.otherTermsTitle}</SectionTitle>
          <BulletList items={[...rules.otherTermsItems]} locale={locale} rules={rules} />
        </div>
      </div>
    </div>
  );
}
