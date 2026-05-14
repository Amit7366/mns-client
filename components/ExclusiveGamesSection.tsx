"use client";

import ImageCarouselSection from "./ImageCarouselSection";
import { exclusiveGameImages } from "@/lib/home-carousel-data";
import { useLocale } from "./LocaleProvider";

export default function ExclusiveGamesSection() {
  const { t } = useLocale();

  return (
    <ImageCarouselSection
      title={t.home.exclusiveGamesTitle}
      images={exclusiveGameImages}
      variant="card"
      autoSlideMs={4000}
    />
  );
}
