import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { SearchTabs } from '@/components/SearchTabs';
import { AboutSection } from '@/components/AboutSection';
import { TravelPackages } from '@/components/TravelPackages';
import { SpecialOffers } from '@/components/SpecialOffers';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { MapSection } from '@/components/MapSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <SearchTabs />
      <AboutSection />
      <TravelPackages />
      <SpecialOffers />
      <WhyChooseUs />
      <Testimonials />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
