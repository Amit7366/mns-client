"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authInputClass } from "@/components/auth/AuthField";
import { getPersonalInfoMessages } from "@/lib/i18n/personal-info-messages";
import { memberSectionHref } from "@/lib/member-routes";
import { useLocale } from "@/components/LocaleProvider";
import { memberBtnPrimary, memberContainerNarrow } from "@/components/member/shared/member-ui";
import MemberPersonalHeader from "./MemberPersonalHeader";
import PrivacyNotice from "./PrivacyNotice";

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden className="text-[#9ca3af]">
      <rect x="2.5" y="4" width="13" height="11.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 7h13M6 2.5v3M12 2.5v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

const EXPIRY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export default function DateOfBirthPageContent() {
  const { preferences } = useLocale();
  const locale = preferences.locale;
  const p = getPersonalInfoMessages(locale);
  const router = useRouter();
  const [dob, setDob] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const backHref = memberSectionHref(locale, "personal-info");

  return (
    <div className="min-h-full bg-[#0a0a0a]">
      <MemberPersonalHeader title={p.dateOfBirth.pageTitle} backHref={backHref} backLabel={p.back} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!EXPIRY_PATTERN.test(dob)) {
            setError(p.dateOfBirth.invalidDate);
            return;
          }
          setError(null);
          setSubmitted(true);
          window.setTimeout(() => router.push(backHref), 600);
        }}
        className={`${memberContainerNarrow} py-5 sm:py-6`}
      >
        <label className="block">
          <span className="mb-2 block text-[13px] text-[#9ca3af] sm:text-[14px]">
            {p.dateOfBirth.fieldLabel}
          </span>
          <div className="relative">
            <input
              type="text"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
                setError(null);
              }}
              placeholder={p.dateOfBirth.placeholder}
              className={`${authInputClass()} pr-11`}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex w-11 items-center justify-center"
              onClick={() => {
                const el = document.getElementById("dob-picker") as HTMLInputElement | null;
                el?.showPicker?.();
                el?.click();
              }}
              aria-label={p.dateOfBirth.fieldLabel}
            >
              <CalendarIcon />
            </button>
            <input
              id="dob-picker"
              type="date"
              className="pointer-events-none absolute h-0 w-0 opacity-0"
              tabIndex={-1}
              onChange={(e) => {
                if (e.target.value) {
                  setDob(e.target.value);
                  setError(null);
                }
              }}
            />
          </div>
          {error ? (
            <p className="mt-2 text-[12px] text-[#e85d4a]" role="alert">
              {error}
            </p>
          ) : null}
        </label>

        <div className="mt-4">
          <PrivacyNotice locale={locale} />
        </div>

        <button
          type="submit"
          disabled={!dob.trim() || submitted}
          className={`${memberBtnPrimary} mt-8`}
        >
          {submitted ? p.dateOfBirth.submitted : p.dateOfBirth.submit}
        </button>
      </form>
    </div>
  );
}
