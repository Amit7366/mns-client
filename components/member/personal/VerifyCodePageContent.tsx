"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { DEMO_VERIFICATION_CODE } from "@/lib/member-personal-routes";
import { getPersonalInfoMessages } from "@/lib/i18n/personal-info-messages";
import {
  emailHref,
  PENDING_EMAIL_KEY,
  PENDING_PHONE_KEY,
  phoneHref,
} from "@/lib/member-personal-routes";
import { memberSectionHref } from "@/lib/member-routes";
import { useLocale } from "@/components/LocaleProvider";
import {
  memberBtnPrimary,
  memberContainerNarrow,
  MEMBER_PAGE_BG,
  memberPagePaddingNarrow,
} from "@/components/member/shared/member-ui";
import MemberPersonalHeader from "./MemberPersonalHeader";
import OtpCodeInput from "./OtpCodeInput";

const RESEND_SECONDS = 60;

type VerifyKind = "phone" | "email";

export default function VerifyCodePageContent({ kind }: { kind: VerifyKind }) {
  const { preferences } = useLocale();
  const locale = preferences.locale;
  const p = getPersonalInfoMessages(locale);
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [resendLeft, setResendLeft] = useState(RESEND_SECONDS);

  const backHref = kind === "phone" ? phoneHref(locale) : emailHref(locale);
  const successHref = memberSectionHref(locale, "personal-info");

  useEffect(() => {
    const key = kind === "phone" ? PENDING_PHONE_KEY : PENDING_EMAIL_KEY;
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      router.replace(backHref);
      return;
    }
    setDestination(stored);
  }, [kind, backHref, router]);

  useEffect(() => {
    if (resendLeft <= 0) return;
    const t = window.setInterval(() => setResendLeft((s) => s - 1), 1000);
    return () => window.clearInterval(t);
  }, [resendLeft]);

  const handleResend = useCallback(() => {
    if (resendLeft > 0) return;
    setResendLeft(RESEND_SECONDS);
    setCode("");
    setError(false);
    setErrorMsg(null);
  }, [resendLeft]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) return;

    if (code !== DEMO_VERIFICATION_CODE) {
      setError(true);
      setErrorMsg(p.verify.invalidCode);
      return;
    }

    setError(false);
    setErrorMsg(null);
    setSubmitted(true);

    const key = kind === "phone" ? PENDING_PHONE_KEY : PENDING_EMAIL_KEY;
    sessionStorage.removeItem(key);

    window.setTimeout(() => router.push(successHref), 600);
  };

  const title = kind === "phone" ? p.verify.phoneTitle : p.verify.emailTitle;
  const subtitle = kind === "phone" ? p.verify.phoneSubtitle : p.verify.emailSubtitle;

  return (
    <div className={MEMBER_PAGE_BG}>
      <MemberPersonalHeader title={title} backHref={backHref} backLabel={p.back} />

      <form onSubmit={handleSubmit} className={`${memberContainerNarrow} ${memberPagePaddingNarrow}`}>
        <p className="text-center text-[13px] leading-relaxed text-[#9ca3af] sm:text-[14px]">
          {subtitle}
        </p>
        {destination ? (
          <p className="mt-2 text-center text-[14px] font-medium text-white">{destination}</p>
        ) : null}

        <div className="mt-8">
          <OtpCodeInput
            value={code}
            onChange={(v) => {
              setCode(v);
              setError(false);
              setErrorMsg(null);
            }}
            error={error}
            disabled={submitted}
          />
        </div>

        {errorMsg ? (
          <p className="mt-4 text-center text-[13px] text-[#e85d4a]" role="alert">
            {errorMsg}
          </p>
        ) : null}

        <p className="mt-6 text-center text-[13px] text-[#9ca3af]">
          {resendLeft > 0 ? (
            p.verify.resendIn.replace("{seconds}", String(resendLeft))
          ) : (
            <button
              type="button"
              onClick={handleResend}
              className="text-[#178358] underline hover:text-[#1a9664]"
            >
              {p.verify.resend}
            </button>
          )}
        </p>

        <button
          type="submit"
          disabled={code.length !== 6 || submitted}
          className={`${memberBtnPrimary} mt-8`}
        >
          {submitted
            ? kind === "phone"
              ? p.verify.successPhone
              : p.verify.successEmail
            : p.verify.submit}
        </button>
      </form>
    </div>
  );
}
