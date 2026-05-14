"use client";

import { sidebarMenuItems } from "./sidebar-menu";
import { CrownIcon, GiftIcon, LiveSupportIcon, SubItemIcon, menuIconFor } from "./SidebarIcons";

type SideNavigationProps = {
  expanded: boolean;
  expandedId: string | null;
  onToggleItem: (id: string) => void;
  onItemClick: (id: string) => void;
  onExpand: () => void;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden
      className={`block shrink-0 text-[#a8a8a8] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M1.5 3.5L5 7l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PromoBanner() {
  return (
    <div className="mx-2 mb-2 overflow-hidden rounded-lg">
      <div className="relative flex min-h-[72px] items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#2a0808] via-[#5c1010] to-[#8b1a1a] px-3 py-2.5">
        <p className="max-w-[155px] text-[10px] leading-[1.45] text-white/95">
          ILT20-লিগে MI EMIRATES-এর নতুন প্রধান স্পন্সর।
        </p>
        <div className="absolute -right-1 bottom-0 top-0 flex w-[88px] items-center justify-center">
          <div className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-[#1a2d6e] text-center shadow-lg">
            <span className="text-[9px] font-bold leading-none text-[#f5c518]">MI</span>
            <span className="mt-0.5 text-[7px] font-semibold leading-none text-white">EMIRATES</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SideNavigation({
  expanded,
  expandedId,
  onToggleItem,
  onItemClick,
  onExpand,
}: SideNavigationProps) {
  return (
    <aside
      className={`relative z-20 flex h-full shrink-0 flex-col overflow-hidden border-r border-[#2a2a2a] bg-[#1a1a1a] transition-[width] duration-300 ease-in-out ${
        expanded ? "w-[272px]" : "w-[52px]"
      }`}
    >
      <div className={`shrink-0 p-2 ${expanded ? "" : "flex justify-center"}`}>
        <button
          type="button"
          onClick={onExpand}
          className={
            expanded
              ? "flex w-full items-center gap-3 rounded-lg bg-[#262626] px-3 py-3 text-left text-[14px] font-medium text-white transition-colors hover:bg-[#303030]"
              : "flex h-10 w-10 items-center justify-center rounded-lg bg-[#262626] transition-colors hover:bg-[#303030]"
          }
        >
          <LiveSupportIcon />
          {expanded ? <span>লাইভ সাপোর্ট</span> : null}
        </button>
      </div>

      {expanded ? <PromoBanner /> : null}

      <nav className={`flex-1 overflow-y-auto ${expanded ? "" : "px-1"}`}>
        {expanded ? (
          <div>
            {sidebarMenuItems.map((item) => {
              const hasSubItems = Boolean(item.subItems?.length);
              const isOpen = expandedId === item.id;

              if (!hasSubItems) {
                return (
                  <a
                    key={item.id}
                    href="#"
                    className="flex w-full items-center gap-3 px-3 py-[13px] text-left transition-opacity hover:opacity-90"
                  >
                    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
                      {menuIconFor(item.id)}
                    </span>
                    <span className="min-w-0 flex-1 text-[14px] font-normal leading-none text-[#c8c8c8]">
                      {item.label}
                    </span>
                    <span className="w-4 shrink-0" />
                  </a>
                );
              }

              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => onToggleItem(item.id)}
                    className="flex w-full items-center gap-3 px-3 py-[13px] text-left transition-opacity hover:opacity-90"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center">
                      {menuIconFor(item.id)}
                    </span>
                    <span className="min-w-0 flex-1 text-[14px] font-normal leading-none text-[#c8c8c8]">
                      {item.label}
                    </span>
                    <span className="flex w-4 shrink-0 items-center justify-end">
                      <Chevron open={isOpen} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-1 px-2 pb-1">
                        {item.subItems?.map((sub) => (
                          <a
                            key={sub.id}
                            href="#"
                            className="flex items-center gap-3 rounded-md bg-[#242424] px-3 py-2.5 text-[13px] text-[#d8d8d8] transition-colors hover:bg-[#2e2e2e]"
                          >
                            <SubItemIcon label={sub.label} accent={sub.accent} />
                            <span className="truncate">{sub.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-0.5">
            {sidebarMenuItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.label}
                onClick={() => onItemClick(item.id)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-[#262626]"
              >
                {menuIconFor(item.id)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {!expanded ? (
        <div className="flex shrink-0 flex-col items-center gap-1 p-2 pt-0">
          <button
            type="button"
            aria-label="Promotions"
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[#262626]"
          >
            <GiftIcon />
          </button>
          <button
            type="button"
            aria-label="VIP"
            className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-[#262626]"
          >
            <CrownIcon />
          </button>
        </div>
      ) : null}
    </aside>
  );
}
