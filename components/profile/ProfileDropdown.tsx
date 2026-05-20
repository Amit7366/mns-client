"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { memberSectionHref } from "@/lib/member-routes";
import { getProfileMessages, PROFILE_MENU_ITEMS } from "@/lib/i18n/profile-messages";
import { MOCK_PROFILE_USER } from "@/lib/profile-user";
import { useLocale } from "@/components/LocaleProvider";
import { ChevronRight, CopyIcon, ProfileMenuIcon, ProfileNavIcon } from "./ProfileMenuIcons";

const HOVER_CLOSE_DELAY_MS = 180;

export default function ProfileDropdown() {
  const { preferences } = useLocale();
  const locale = preferences.locale;
  const p = getProfileMessages(locale);
  const pathname = usePathname();
  const router = useRouter();
  const base = `/${locale}`;
  const memberBase = `${base}/member`;

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const isMemberRoute = pathname === memberBase || pathname.startsWith(`${memberBase}/`);
  const isActive = open || isMemberRoute;

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), HOVER_CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  const handleEnter = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);

  const handleLeave = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const copyUsername = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(MOCK_PROFILE_USER.username);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    return () => clearCloseTimer();
  }, [clearCloseTimer]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative hidden md:block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`focus-ring relative flex items-center gap-1.5 rounded-md px-2.5 py-2 text-[13px] transition-colors ${
          isActive ? "text-white" : "text-[#d4d4d4] hover:bg-white/5 hover:text-white"
        }`}
      >
        {isActive ? (
          <span
            className="absolute inset-x-1 top-0 h-0.5 rounded-full bg-[#178358]"
            aria-hidden
          />
        ) : null}
        <ProfileNavIcon />
        <span>{p.navLabel}</span>
      </button>

      <div
        className={`absolute right-0 top-full z-[60] w-[min(100vw-1.5rem,320px)] pt-1 transition-all duration-150 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <div className="overflow-hidden rounded-lg border border-[#333] bg-[#1e1e1e] shadow-[0_16px_48px_rgba(0,0,0,0.55)]">
          <div className="border-b border-[#2a2a2a] bg-[#252525] px-4 py-3.5">
            <div className="flex gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#22c55e] to-[#0d3d24]"
                aria-hidden
              >
                <ProfileNavIcon />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] text-[#9ca3af]">{p.usernameLabel}</p>
                <div className="mt-0.5 flex items-center gap-2">
                  <span className="truncate text-[15px] font-bold text-white">
                    {MOCK_PROFILE_USER.username}
                  </span>
                  <button
                    type="button"
                    onClick={copyUsername}
                    aria-label={copied ? p.copied : p.copyUsername}
                    className="focus-ring shrink-0 rounded p-1 text-[#d4d4d4] transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <CopyIcon />
                  </button>
                </div>
                <p className="mt-1 text-[11px] text-[#9ca3af]">
                  {p.signUpDateLabel} : {MOCK_PROFILE_USER.signUpDate}
                </p>
              </div>
            </div>
          </div>

          <ul className="py-1">
            {PROFILE_MENU_ITEMS.map(({ id, icon }) => (
              <li key={id}>
                <Link
                  href={memberSectionHref(locale, id)}
                  className="focus-ring flex items-center gap-3 px-4 py-2.5 text-[13px] text-white transition-colors hover:bg-[#2a2a2a]"
                  onClick={() => setOpen(false)}
                >
                  <ProfileMenuIcon name={icon} />
                  <span className="min-w-0 flex-1">{p.menu[id]}</span>
                  <ChevronRight />
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-[#2a2a2a] p-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                router.push(`${base}/login`);
              }}
              className="focus-ring w-full rounded-md border border-[#444] py-2.5 text-[13px] font-medium text-white transition-colors hover:border-[#666] hover:bg-[#2a2a2a]"
            >
              {p.logout}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
