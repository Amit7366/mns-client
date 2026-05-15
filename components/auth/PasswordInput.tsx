"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { getAuthMessages } from "@/lib/i18n/auth-messages";
import { authInputClass } from "./AuthField";

function EyeOpenIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M2.5 10s2.5-5 7.5-5 7.5 5 7.5 5-2.5 5-7.5 5-7.5-5-7.5-5z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function EyeClosedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M3 3l14 14M7.5 12.2A4.2 4.2 0 0110 13c3.5 0 6.5-3 7.5-3M6 7.3C7.2 6.5 8.6 6 10 6c3.5 0 6.5 3 7.5 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type PasswordInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  autoComplete?: "current-password" | "new-password";
  className?: string;
};

export default function PasswordInput({
  value,
  onChange,
  placeholder,
  autoComplete = "current-password",
  className,
}: PasswordInputProps) {
  const { preferences } = useLocale();
  const a = getAuthMessages(preferences.locale);
  const [visible, setVisible] = useState(false);

  const toggleLabel = visible ? a.hidePassword : a.showPassword;

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`${authInputClass()} pr-11 ${className ?? ""}`}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[#9ca3af] transition-colors hover:text-white"
        aria-label={toggleLabel}
        aria-pressed={visible}
      >
        {visible ? <EyeClosedIcon /> : <EyeOpenIcon />}
      </button>
    </div>
  );
}
