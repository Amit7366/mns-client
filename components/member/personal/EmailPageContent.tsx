"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { authInputClass } from "@/components/auth/AuthField";
import { getPersonalInfoMessages } from "@/lib/i18n/personal-info-messages";
import { emailVerifyHref, PENDING_EMAIL_KEY } from "@/lib/member-personal-routes";
import { memberSectionHref } from "@/lib/member-routes";
import { useLocale } from "@/components/LocaleProvider";
import {
  memberBtnPrimary,
  memberContainerNarrow,
  MEMBER_PAGE_BG,
  memberPagePaddingNarrow,
} from "@/components/member/shared/member-ui";
import EmailHeroIcon from "./EmailHeroIcon";
import MemberPersonalHeader from "./MemberPersonalHeader";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailPageContent() {
  const { preferences } = useLocale();
  const locale = preferences.locale;
  const p = getPersonalInfoMessages(locale);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const backHref = memberSectionHref(locale, "personal-info");

  return (
    <div className={MEMBER_PAGE_BG}>
      <MemberPersonalHeader title={p.email.pageTitle} backHref={backHref} backLabel={p.back} />

      <div className={`${memberContainerNarrow} ${memberPagePaddingNarrow}`}>
        <EmailHeroIcon />

        <h2 className="mt-6 text-center text-[20px] font-bold text-white sm:text-[22px]">
          {p.email.heading}
        </h2>
        <p className="mt-2 text-center text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
          {p.email.subtitle}
        </p>

        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            if (!EMAIL_PATTERN.test(email.trim())) {
              setError(p.email.invalidEmail);
              return;
            }
            setError(null);
            sessionStorage.setItem(PENDING_EMAIL_KEY, email.trim());
            router.push(emailVerifyHref(locale));
          }}
        >
          <label className="block">
            <span className="mb-2 block text-[13px] text-[#9ca3af]">{p.email.fieldLabel}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              placeholder={p.email.placeholder}
              autoComplete="email"
              className={authInputClass()}
            />
          </label>
          {error ? (
            <p className="mt-2 text-[12px] text-[#e85d4a]" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className={`${memberBtnPrimary} mt-8`}
          >
            {p.email.continue}
          </button>
        </form>
      </div>
    </div>
  );
}
