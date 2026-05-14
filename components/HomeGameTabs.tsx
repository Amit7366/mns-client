"use client";

import { useState } from "react";
import {
  categoryProviders,
  homeTabIds,
  popularGames,
  type HomeTabId,
} from "@/lib/home-games-data";
import { menuIconFor } from "./SidebarIcons";
import { useLocale } from "./LocaleProvider";

function PopularCrownIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <defs>
        <linearGradient id="crownGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffe566" />
          <stop offset="100%" stopColor="#c48a0a" />
        </linearGradient>
      </defs>
      <path
        d="M5 19h18l-2-11-5.5 6L14 8l-1.5 6L7 8 5 19z"
        fill="url(#crownGold)"
        stroke="#a16207"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
      <path d="M5 19v3h18v-3" fill="#b8860b" />
      <circle cx="14" cy="7.5" r="1.3" fill="#fff8dc" />
      <circle cx="7.5" cy="10" r="1" fill="#fff8dc" />
      <circle cx="20.5" cy="10" r="1" fill="#fff8dc" />
    </svg>
  );
}

function tabIconFor(id: HomeTabId) {
  if (id === "popular") return <PopularCrownIcon />;
  return menuIconFor(id);
}

function PopularGameCard({
  title,
  provider,
  gradient,
  glow,
  emoji,
}: {
  title: string;
  provider: string;
  gradient: string;
  glow: string;
  emoji: string;
}) {
  return (
    <a
      href="#"
      className="group relative w-[96px] shrink-0 snap-start sm:w-[108px] lg:w-[120px]"
    >
      <div
        className={`relative aspect-[2/3] overflow-hidden rounded-md bg-gradient-to-b ${gradient} shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-[1.03]`}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${glow}, transparent 65%)`,
          }}
        />
        <span className="absolute right-1.5 top-1.5 text-[10px] font-bold">
          <span className="text-white">ba</span>
          <span className="text-[#ed1c24]">ji</span>
        </span>
        <div className="absolute inset-x-0 top-[28%] flex justify-center text-4xl drop-shadow-lg">
          {emoji}
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-2 pb-2.5 pt-10">
          <p className="text-center text-[11px] font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-sm sm:text-xs">
            {title}
          </p>
          <p className="mt-1 text-center text-[9px] font-medium uppercase tracking-wider text-white/75">
            {provider}
          </p>
        </div>
      </div>
    </a>
  );
}

function ProviderCard({
  label,
  color,
  initials,
}: {
  label: string;
  color: string;
  initials: string;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-2 rounded-md bg-[#262626] px-2.5 py-2.5 transition-colors hover:bg-[#303030]"
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-[#111]"
        style={{ backgroundColor: color }}
      >
        {initials}
      </span>
      <span className="truncate text-[12px] font-medium leading-snug text-[#e5e5e5]">{label}</span>
    </a>
  );
}

export default function HomeGameTabs() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<HomeTabId>("popular");

  return (
    <section className="bg-[#0a0a0a] px-3 py-4 sm:px-4 lg:px-6">
      <div className="flex gap-1 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {homeTabIds.map((tabId) => {
          const active = activeTab === tabId;
          return (
            <button
              key={tabId}
              type="button"
              onClick={() => setActiveTab(tabId)}
              className={`flex min-w-[72px] shrink-0 flex-col items-center gap-1 rounded-lg px-2 py-2 transition-colors sm:min-w-[80px] ${
                active
                  ? "bg-[#178358] text-white"
                  : "text-[#a3a3a3] hover:bg-[#1f1f1f] hover:text-white"
              }`}
            >
              <span className="flex h-7 w-7 items-center justify-center">{tabIconFor(tabId)}</span>
              <span className="text-center text-[10px] font-medium leading-snug sm:text-[11px]">
                {t.home.tabs[tabId]}
              </span>
            </button>
          );
        })}
      </div>

      {activeTab === "popular" ? (
        <div>
          <div className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2.5">
            {popularGames.map((game) => (
              <PopularGameCard
                key={game.id}
                title={t.home.games[game.id] ?? game.id}
                provider={t.home.providers[game.providerKey] ?? game.providerKey}
                gradient={game.gradient}
                glow={game.glow}
                emoji={game.emoji}
              />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="rounded-md bg-[#178358] px-10 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1a9664]"
            >
              {t.home.more}
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {categoryProviders[activeTab].map((provider) => (
            <ProviderCard
              key={provider.id}
              label={t.home.providers[provider.id] ?? provider.id}
              color={provider.color}
              initials={provider.initials}
            />
          ))}
        </div>
      )}
    </section>
  );
}
