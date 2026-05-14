"use client";

import { useCallback, useEffect, useState } from "react";
import type { HomeSlide } from "@/lib/i18n/messages";
import { useLocale } from "./LocaleProvider";

const slideThemes = [
  "from-[#2b0a4f] via-[#6b1578] to-[#3a0d5c]",
  "from-[#0f2e1f] via-[#145a38] to-[#1f6b44]",
  "from-[#0d1f4a] via-[#1a3f8f] to-[#241f6b]",
];

function Coin({ className }: { className: string }) {
  return (
    <div
      className={`absolute rounded-full bg-gradient-to-br from-[#ffe566] via-[#f5c518] to-[#b8860b] shadow-[0_0_24px_rgba(245,197,24,0.55)] ${className}`}
    />
  );
}

function PhoneMockup({
  step,
  code,
  giftCodeLabel,
  confirmLabel,
  variant,
}: {
  step: string;
  code: string;
  giftCodeLabel: string;
  confirmLabel: string;
  variant: "gift" | "confirm";
}) {
  return (
    <div className="relative w-[92px] shrink-0 sm:w-[108px]">
      <div className="overflow-hidden rounded-[18px] border border-white/20 bg-[#111] shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
        <div className="bg-[#1a1a1a] px-2 py-1.5 text-center text-[8px] font-semibold text-white/80">
          {step}
        </div>
        <div className="space-y-1.5 bg-gradient-to-b from-[#24143f] to-[#12091f] p-2">
          {variant === "gift" ? (
            <>
              <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#f5c518]/20 text-lg">
                🎁
              </div>
              <div className="h-2 rounded bg-white/10" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
            </>
          ) : (
            <div className="rounded-lg border border-[#f5c518]/30 bg-black/40 p-2">
              <p className="text-[7px] text-white/70">{giftCodeLabel}</p>
              <p className="text-[9px] font-bold text-[#f5c518]">{code}</p>
              <div className="mt-1.5 rounded bg-[#178358] py-1 text-center text-[8px] font-bold text-white">
                {confirmLabel}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SlideContent({ slide, theme }: { slide: HomeSlide; theme: string }) {
  return (
    <div
      className={`relative min-h-[200px] overflow-hidden rounded-none bg-gradient-to-r sm:min-h-[260px] lg:min-h-[320px] ${theme}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(245,197,24,0.18),transparent_30%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:24px_24px]" />

      <Coin className="left-[8%] top-[18%] h-8 w-8 animate-float-slow" />
      <Coin className="left-[22%] top-[62%] h-6 w-6 animate-float-medium" />
      <Coin className="left-[42%] top-[12%] h-5 w-5 animate-float-fast" />
      <Coin className="left-[55%] top-[70%] h-7 w-7 animate-float-slow" />

      <div className="relative z-10 flex h-full flex-col gap-4 px-3 py-4 sm:px-8 sm:py-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
          <p className="bg-gradient-to-b from-[#fff1a8] via-[#f5c518] to-[#c48a0a] bg-clip-text text-2xl font-black tracking-tight text-transparent sm:text-4xl">
            {slide.brand}
          </p>

          <div className="hidden items-end gap-2 sm:flex sm:gap-3">
            <PhoneMockup
              step={slide.step1}
              code={slide.code}
              giftCodeLabel={slide.giftCode}
              confirmLabel={slide.confirm}
              variant="gift"
            />
            <span className="pb-8 text-xl text-white/70">→</span>
            <PhoneMockup
              step={slide.step2}
              code={slide.code}
              giftCodeLabel={slide.giftCode}
              confirmLabel={slide.confirm}
              variant="confirm"
            />
          </div>
        </div>

        <div className="flex min-w-0 flex-col items-start lg:items-end lg:text-right">
          <h2 className="text-2xl font-black uppercase leading-tight tracking-tight text-[#ffe566] sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>
          <div className="mt-3 max-w-full rounded-full bg-gradient-to-r from-[#ffe566] to-[#f5c518] px-3 py-2 sm:px-4">
            <p className="text-xs font-extrabold tracking-wide text-[#7a1020] sm:text-base">
              {slide.ctaLabel}: {slide.code}
            </p>
          </div>
          <p className="mt-3 text-xs font-bold uppercase tracking-wide text-white sm:text-base">
            {slide.urgency}
          </p>
          <p className="mt-2 text-[11px] italic text-white/70 sm:text-xs">{slide.terms}</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const { t } = useLocale();
  const slides = t.home.slides;
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((current) => (current + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden">
      <SlideContent slide={slides[active]} theme={slideThemes[active % slideThemes.length]} />

      <button
        type="button"
        aria-label={t.ui.previousSlide}
        onClick={prev}
        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65 sm:left-4"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label={t.ui.nextSlide}
        onClick={next}
        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65 sm:right-4"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`${t.ui.goToSlide} ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all ${
              index === active ? "w-6 bg-[#f5c518]" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
