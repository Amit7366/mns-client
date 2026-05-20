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

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[#9ca3af]">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7v4M8 5v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function FullLegalNamePageContent() {
  const { preferences } = useLocale();
  const locale = preferences.locale;
  const p = getPersonalInfoMessages(locale);
  const router = useRouter();
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const backHref = memberSectionHref(locale, "personal-info");

  return (
    <div className="min-h-full bg-[#0a0a0a]">
      <MemberPersonalHeader title={p.fullLegalName.pageTitle} backHref={backHref} backLabel={p.back} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) return;
          setSubmitted(true);
          window.setTimeout(() => router.push(backHref), 600);
        }}
        className={`${memberContainerNarrow} py-5 sm:py-6`}
      >
        <label className="block">
          <span className="mb-2 flex items-center gap-1.5 text-[13px] text-[#9ca3af] sm:text-[14px]">
            {p.fullLegalName.fieldLabel}
            <span title={p.fullLegalName.fieldHint}>
              <InfoIcon />
            </span>
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={p.fullLegalName.placeholder}
            className={authInputClass()}
          />
        </label>

        <div className="mt-4">
          <PrivacyNotice locale={locale} />
        </div>

        <button
          type="submit"
          disabled={!name.trim() || submitted}
          className={`${memberBtnPrimary} mt-8`}
        >
          {submitted ? p.fullLegalName.submitted : p.fullLegalName.submit}
        </button>
      </form>
    </div>
  );
}
