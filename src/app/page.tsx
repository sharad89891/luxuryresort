import Hero from "@/components/Hero";
import FeaturedHotels from "@/components/FeaturedHotels";
import ExperienceStrip from "@/components/ExperienceStrip";
import OffersSection from "@/components/OffersSection";
import WeddingsSection from "@/components/WeddingsSection";
import InnerCircleBanner from "@/components/InnerCircleBanner";
import DiningHighlight from "@/components/DiningHighlight";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedHotels />
      <ExperienceStrip />
      <OffersSection />
      <DiningHighlight />
      <WeddingsSection />
      <InnerCircleBanner />
    </>
  );
}
