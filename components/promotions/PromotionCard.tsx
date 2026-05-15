"use client";

import Image from "next/image";
import Link from "next/link";
import type { PromotionItem } from "@/lib/promotions-data";
import { getPromotionMessages } from "@/lib/i18n/promotion-messages";
import { useLocale } from "@/components/LocaleProvider";

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0 text-[#9ca3af]">
      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

type PromotionCardProps = {
  promo: PromotionItem;
  variant?: "grid" | "slider";
  href?: string;
};

export default function PromotionCard({ promo, variant = "grid", href }: PromotionCardProps) {
  const { preferences } = useLocale();
  const p = getPromotionMessages(preferences.locale);
  const title = p.titles[promo.titleKey] ?? promo.titleKey;
  const linkHref = href ?? `/${preferences.locale}/promotion`;

  if (variant === "slider") {
    return (
      <Link
        href={linkHref}
        className="focus-ring group relative block w-[min(72vw,220px)] shrink-0 snap-start overflow-hidden rounded-lg bg-[#1f1f1f] sm:w-[200px]"
      >
        <div className="relative aspect-[16/10] w-full">
          <Image src={promo.image} alt="" fill className="object-cover" sizes="200px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
          {promo.badgeKey ? (
            <span className="absolute left-0 top-2 max-w-[90%] bg-[#c41e3a] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white sm:text-[10px]">
              {p.badges[promo.badgeKey] ?? promo.badgeKey}
            </span>
          ) : null}
          <div className="absolute inset-x-2 bottom-2">
            {promo.subtitleKey ? (
              <p className="text-[9px] font-semibold uppercase text-white/90">
                {p.subtitles[promo.subtitleKey]}
              </p>
            ) : null}
            {promo.highlightKey ? (
              <p className="text-[11px] font-extrabold uppercase leading-tight text-[#fde047]">
                {p.highlights[promo.highlightKey]}
              </p>
            ) : (
              <p className="line-clamp-2 text-[11px] font-bold leading-tight text-white">{title}</p>
            )}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-lg bg-[#1a1a1a]">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image src={promo.image} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3 sm:p-4">
        <div className="flex flex-wrap gap-1.5">
          {promo.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-[#2a2a2a] px-2 py-0.5 text-[11px] font-medium text-[#9ca3af]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-start gap-1.5 text-[11px] leading-snug text-[#9ca3af] sm:text-[12px]">
          <ClockIcon />
          <span>
            {promo.validityStart} ~ {promo.validityEnd}
          </span>
        </div>
        <h3 className="text-[15px] font-bold leading-snug text-white sm:text-[16px]">{title}</h3>
        <Link
          href={linkHref}
          className="mt-auto inline-flex items-center gap-0.5 text-[13px] font-medium text-[#4ade80] hover:text-[#86efac]"
        >
          {p.readMore}
          <span aria-hidden>›</span>
        </Link>
      </div>
    </article>
  );
}
