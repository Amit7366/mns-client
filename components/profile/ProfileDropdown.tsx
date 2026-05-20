"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { getProfileMessages } from "@/lib/i18n/profile-messages";
import { useLocale } from "@/components/LocaleProvider";
import ProfileMenuPanel from "./ProfileMenuPanel";
import { ProfileNavIcon } from "./ProfileMenuIcons";

const HOVER_CLOSE_DELAY_MS = 180;

export default function ProfileDropdown() {
  const { preferences } = useLocale();
  const locale = preferences.locale;
  const p = getProfileMessages(locale);
  const pathname = usePathname();
  const memberBase = `/${locale}/member`;

  const [open, setOpen] = useState(false);
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
          <ProfileMenuPanel onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
