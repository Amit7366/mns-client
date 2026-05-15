"use client";

import { getSidebarPromotions } from "@/lib/promotions-data";
import PromotionCard from "./PromotionCard";

export default function PromotionSidebarSlider() {
  const items = getSidebarPromotions();

  return (
    <div className="px-2 pb-3 pt-1">
      <div
        className="flex gap-2 overflow-x-auto overscroll-x-contain pb-2 [-ms-overflow-style:none] [scrollbar-width:thin] [scrollbar-color:#404040_transparent] snap-x snap-mandatory [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#404040] [&::-webkit-scrollbar-track]:bg-transparent"
      >
        {items.map((promo) => (
          <PromotionCard key={promo.id} promo={promo} variant="slider" />
        ))}
      </div>
    </div>
  );
}
