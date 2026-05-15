"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { getAuthMessages } from "@/lib/i18n/auth-messages";
import { AuthField, authInputClass } from "./AuthField";
import PasswordInput from "./PasswordInput";

export default function LoginForm() {
  const { preferences } = useLocale();
  const a = getAuthMessages(preferences.locale);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="flex min-h-[420px] flex-1 flex-col">
      <div className="space-y-5">
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

        <AuthField label={a.password}>
          <PasswordInput
            value={password}
            onChange={setPassword}
            placeholder={a.enterPassword}
            autoComplete="current-password"
          />
        </AuthField>

        <div className="flex justify-end">
          <button type="button" className="text-[13px] font-medium text-[#178358] hover:text-[#1a9664]">
            {a.forgotPassword}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="mt-auto w-full rounded-md bg-[#0d4a2e] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#178358]"
      >
        {a.logInButton}
      </button>
    </form>
  );
}
