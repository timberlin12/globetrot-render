import { Navbar } from '@/components/Navbar';
import { HeroSlider } from '@/components/HeroSlider';
import { SearchTabs } from '@/components/SearchTabs';
import { AboutSection } from '@/components/AboutSection';
import { TravelPackages } from '@/components/TravelPackages';
import { Testimonials } from '@/components/Testimonials';
import { MapSection } from '@/components/MapSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <SearchTabs />
      <AboutSection />
      <TravelPackages />
      <Testimonials />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
