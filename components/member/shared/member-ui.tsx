import Link from "next/link";

export const MEMBER_PAGE_BG = "min-h-full bg-[#0a0a0a]";

export const memberContainerNarrow = "mx-auto w-full max-w-lg px-3 sm:px-4";
export const memberContainerWide = "mx-auto w-full max-w-3xl px-3 sm:px-4 lg:px-6";
export const memberContainerProfile = "mx-auto w-full max-w-5xl px-3 sm:px-4 lg:px-6";

export const memberCardBorder = "rounded-lg border border-[#3a3a3a] bg-[#0a0a0a]";
export const memberPanelBorder = "rounded-lg border border-[#3a3a3a] bg-[#121212]";

export const memberBtnPrimary =
  "focus-ring min-h-11 w-full rounded-md bg-[#178358] px-4 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1a9664] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-45";

export const memberBtnSecondary =
  "focus-ring min-h-10 shrink-0 rounded-md border border-[#555] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:border-[#777] hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40";

export const memberBtnGhost =
  "focus-ring min-h-10 rounded-md bg-[#333] px-3 py-2 text-[12px] text-white transition-colors hover:bg-[#3d3d3d] disabled:cursor-not-allowed disabled:opacity-40 sm:text-[13px]";

export const memberBtnDanger =
  "focus-ring min-h-10 rounded-md bg-[#e85d4a] px-3 py-2 text-[12px] font-medium text-white transition-colors hover:bg-[#d14a38] disabled:cursor-not-allowed disabled:opacity-40 sm:text-[13px]";

export function MemberFieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-[13px] leading-snug text-[#9ca3af] sm:text-[14px]">
      {children}
    </span>
  );
}

export function BackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M12.5 4.5L7 10l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MemberPageHeader({
  title,
  backHref,
  backLabel,
  trailing,
  wide,
}: {
  title: string;
  backHref?: string;
  backLabel?: string;
  trailing?: React.ReactNode;
  wide?: boolean;
}) {
  const container = wide ? memberContainerWide : memberContainerNarrow;

  return (
    <header className="sticky top-0 z-30 border-b border-[#1f1f1f] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className={`flex min-h-[48px] flex-wrap items-center gap-x-2 gap-y-2 py-2 ${container}`}>
        {backHref ? (
          <Link
            href={backHref}
            className="focus-ring touch-target shrink-0 rounded-md text-white transition-colors hover:bg-white/10"
            aria-label={backLabel ?? "Back"}
          >
            <BackIcon />
          </Link>
        ) : null}
        <h1 className="min-w-0 flex-1 truncate text-[16px] font-semibold text-white sm:text-[17px]">
          {title}
        </h1>
        {trailing ? <div className="flex shrink-0 items-center gap-2">{trailing}</div> : null}
      </div>
    </header>
  );
}

export function MemberStickyFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-[#1f1f1f] bg-[#0a0a0a]/95 px-3 py-3 backdrop-blur-sm pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:px-4">
      <div className={memberContainerNarrow}>{children}</div>
    </div>
  );
}

export function MemberEmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-[#3a3a3a] px-6 py-14 text-center">
      <p className="max-w-sm text-[14px] leading-relaxed text-[#9ca3af]">{message}</p>
    </div>
  );
}
