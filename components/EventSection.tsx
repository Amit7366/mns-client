"use client";

import ImageCarouselSection from "./ImageCarouselSection";
import { eventSlideImages } from "@/lib/home-carousel-data";
import { useLocale } from "./LocaleProvider";

export default function EventSection() {
  const { t } = useLocale();

  return (
    <ImageCarouselSection
      title={t.home.eventTitle}
      images={eventSlideImages}
      variant="banner"
      autoSlideMs={4500}
    />
  );
}
