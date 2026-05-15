"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { getAuthMessages } from "@/lib/i18n/auth-messages";
import { AuthField, authInputClass } from "./AuthField";
import PasswordInput from "./PasswordInput";

const STEPS = ["contact", "username", "password"] as const;
type RegisterStep = (typeof STEPS)[number];

function BangladeshFlag() {
  return (
    <span
      className="inline-block h-3.5 w-5 shrink-0 rounded-[1px] bg-[#006a4e]"
      style={{
        backgroundImage: "radial-gradient(circle at 35% 50%, #f42a41 42%, transparent 43%)",
      }}
      aria-hidden
    />
  );
}

function StepIndicator({ step, labels }: { step: number; labels: [string, string, string] }) {
  const items = [
    { n: 1, label: labels[0] },
    { n: 2, label: labels[1] },
    { n: 3, label: labels[2] },
  ] as const;

  return (
    <div className="mb-8">
      <div className="relative flex items-center">
        <div className="absolute left-[14px] right-[14px] top-[13px] h-[2px] bg-[#3f3f3f]" />
        <div
          className="absolute left-[14px] top-[13px] h-[2px] bg-[#178358] transition-all duration-300"
          style={{ width: step === 0 ? "0%" : step === 1 ? "calc(50% - 14px)" : "calc(100% - 28px)" }}
        />
        {items.map((item, i) => {
          const active = step === i;
          const done = step > i;
          return (
            <div key={item.n} className="relative z-[1] flex flex-1 flex-col items-center">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold ${
                  active || done ? "bg-[#178358] text-white" : "bg-[#2a2a2a] text-[#9ca3af]"
                }`}
              >
                {item.n}
              </span>
              <span
                className={`mt-2 text-center text-[11px] font-medium sm:text-[12px] ${
                  active ? "text-[#178358]" : "text-[#9ca3af]"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function RegisterForm() {
  const { preferences } = useLocale();
  const a = getAuthMessages(preferences.locale);
  const [step, setStep] = useState<RegisterStep>("contact");
  const [currency, setCurrency] = useState<"BDT" | "INR">(preferences.currency);
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const stepIndex = STEPS.indexOf(step);
  const stepTitle =
    step === "contact" ? a.stepContact : step === "username" ? a.stepUsername : a.stepPassword;

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    if (step === "contact") {
      if (!phone.trim()) return;
      setStep("username");
      return;
    }
    if (step === "username") {
      if (!username.trim()) return;
      setStep("password");
      return;
    }
    if (!password.trim()) return;
  }

  return (
    <form onSubmit={handleContinue} className="flex min-h-[420px] flex-1 flex-col">
      <h2 className="mb-4 text-[15px] font-bold text-white">{stepTitle}</h2>

      <StepIndicator step={stepIndex} labels={[a.stepContact, a.stepUsername, a.stepPassword]} />

      <div className="flex-1 space-y-5">
        {step === "contact" ? (
          <>
            <AuthField label={a.chooseCurrency}>
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as "BDT" | "INR")}
                  className={`${authInputClass()} cursor-pointer appearance-none pl-[4.5rem] pr-10 text-transparent`}
                >
                  <option value="BDT">BDT</option>
                  <option value="INR">INR</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center gap-2">
                  <BangladeshFlag />
                  <span className="text-[14px] text-white">{currency}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#9ca3af]">
                  ▾
                </span>
              </div>
            </AuthField>

            <AuthField label={a.phoneNumber}>
              <div className="flex gap-2">
                <div className="flex shrink-0 items-center gap-1.5 rounded-md border border-[#178358] bg-[#1f1f1f] px-2.5 py-3">
                  <BangladeshFlag />
                  <span className="text-[14px] text-white">+880</span>
                  <span className="text-[10px] text-[#6b7280]">▾</span>
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="----------"
                  className={`${authInputClass(true)} min-w-0 flex-1 tracking-[0.2em]`}
                />
              </div>
            </AuthField>
          </>
        ) : null}

        {step === "username" ? (
          <AuthField label={a.username}>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder={a.enterUsername}
              className={authInputClass()}
            />
          </AuthField>
        ) : null}

        {step === "password" ? (
          <AuthField label={a.password}>
            <PasswordInput
              value={password}
              onChange={setPassword}
              placeholder={a.enterPassword}
              autoComplete="new-password"
            />
          </AuthField>
        ) : null}
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-md bg-[#0d4a2e] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#178358]"
      >
        {step === "password" ? a.signUpButton : a.continue}
      </button>
    </form>
  );
}
