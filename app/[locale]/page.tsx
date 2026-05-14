import AnnouncementBar from "@/components/AnnouncementBar";
import EventSection from "@/components/EventSection";
import ExclusiveGamesSection from "@/components/ExclusiveGamesSection";
import HeroSlider from "@/components/HeroSlider";
import HomeGameTabs from "@/components/HomeGameTabs";
import ProviderSection from "@/components/ProviderSection";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <AnnouncementBar />
      <HomeGameTabs />
      <ProviderSection />
      <EventSection />
      <ExclusiveGamesSection />
    </>
  );
}
