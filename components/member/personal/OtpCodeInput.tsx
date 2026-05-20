"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const OTP_LENGTH = 6;

type OtpCodeInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  autoFocus?: boolean;
};

export default function OtpCodeInput({
  value,
  onChange,
  error = false,
  disabled = false,
  autoFocus = true,
}: OtpCodeInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const [shake, setShake] = useState(false);

  const digits = value.padEnd(OTP_LENGTH, " ").slice(0, OTP_LENGTH).split("");

  useEffect(() => {
    if (!error) return;
    setShake(true);
    const t = window.setTimeout(() => setShake(false), 500);
    return () => window.clearTimeout(t);
  }, [error]);

  useEffect(() => {
    if (autoFocus && !disabled) {
      inputsRef.current[0]?.focus();
    }
  }, [autoFocus, disabled]);

  const setCode = useCallback(
    (next: string) => {
      const cleaned = next.replace(/\D/g, "").slice(0, OTP_LENGTH);
      onChange(cleaned);
    },
    [onChange],
  );

  const focusAt = (index: number) => {
    const el = inputsRef.current[Math.max(0, Math.min(index, OTP_LENGTH - 1))];
    el?.focus();
    el?.select();
  };

  const applyDigits = (raw: string, startIndex: number) => {
    const chars = raw.replace(/\D/g, "").slice(0, OTP_LENGTH - startIndex).split("");
    if (chars.length === 0) return;
    const arr = value.padEnd(OTP_LENGTH, " ").slice(0, OTP_LENGTH).split("");
    chars.forEach((ch, i) => {
      arr[startIndex + i] = ch;
    });
    const next = arr.join("").trimEnd();
    setCode(next.replace(/\s/g, ""));
    focusAt(Math.min(startIndex + chars.length, OTP_LENGTH - 1));
  };

  return (
    <div
      className={`flex max-w-sm justify-center gap-1.5 sm:mx-auto sm:gap-2.5 ${shake ? "animate-otp-shake" : ""}`}
      role="group"
      aria-label="Verification code"
    >
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={1}
          disabled={disabled}
          value={digit.trim()}
          aria-invalid={error}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, "");
            if (v.length > 1) {
              applyDigits(v, index);
              return;
            }
            const arr = value.padEnd(OTP_LENGTH, " ").slice(0, OTP_LENGTH).split("");
            arr[index] = v;
            const next = arr.join("").replace(/\s/g, "");
            setCode(next);
            if (v && index < OTP_LENGTH - 1) focusAt(index + 1);
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace") {
              if (digit.trim() && value[index]) {
                const arr = value.split("");
                arr[index] = "";
                setCode(arr.join(""));
              } else if (index > 0) {
                focusAt(index - 1);
                const arr = value.split("");
                arr[index - 1] = "";
                setCode(arr.join(""));
              }
              e.preventDefault();
            }
            if (e.key === "ArrowLeft" && index > 0) focusAt(index - 1);
            if (e.key === "ArrowRight" && index < OTP_LENGTH - 1) focusAt(index + 1);
          }}
          onPaste={(e) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text");
            applyDigits(text, index);
          }}
          onFocus={(e) => e.target.select()}
          className={`focus-ring h-12 w-11 min-w-0 flex-1 max-w-[3rem] rounded-lg border bg-[#1f1f1f] text-center text-[18px] font-semibold text-white sm:h-14 sm:max-w-[3.25rem] sm:flex-none sm:w-12 sm:text-[20px] ${
            error ? "border-[#e85d4a]" : "border-[#3a3a3a] focus:border-[#178358]"
          } ${disabled ? "opacity-50" : ""}`}
        />
      ))}
    </div>
  );
}
