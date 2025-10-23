import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Target, Eye, Rocket } from 'lucide-react';
import aboutCollage from '@/assets/about-collage.jpg';

const subsections = {
  mission: {
    icon: Target,
    title: 'Our Mission',
    content: 'To provide unforgettable travel experiences that connect people with diverse cultures, breathtaking landscapes, and life-changing adventures. We believe travel is not just about destinations, but about creating memories that last a lifetime.'
  },
  vision: {
    icon: Eye,
    title: 'Our Vision',
    content: 'To become the world\'s most trusted travel partner, known for excellence in service, authentic experiences, and sustainable tourism practices. We envision a world where travel brings people together and fosters global understanding.'
  },
  goals: {
    icon: Rocket,
    title: 'Our Future Goals',
    content: 'Expanding to 50+ destinations by 2025, implementing eco-friendly travel initiatives, partnering with local communities for authentic experiences, and leveraging technology to make travel planning seamless and personalized for every traveler.'
  }
};

export const AboutSection = () => {
  const [activeSection, setActiveSection] = useState<'mission' | 'vision' | 'goals'>('mission');
  const CurrentIcon = subsections[activeSection].icon;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
                About WanderLux
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Your Journey, Our Passion
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over a decade of experience in crafting dream vacations, WanderLux Travel has helped thousands of travelers discover the world's most enchanting destinations. We combine local expertise with global standards to deliver exceptional travel experiences.
            </p>

            {/* Clickable Subsections */}
            <div className="space-y-3">
              {Object.entries(subsections).map(([key, section]) => {
                const Icon = section.icon;
                const isActive = activeSection === key;
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key as 'mission' | 'vision' | 'goals')}
                    className={`w-full text-left p-4 rounded-lg transition-smooth border-2 ${
                      isActive 
                        ? 'bg-primary text-white border-primary shadow-medium' 
                        : 'bg-white border-border hover:border-primary/50 hover:shadow-soft'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                      <span className="font-semibold text-lg">{section.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Content Display */}
            <div className="bg-white p-6 rounded-xl shadow-soft border border-border">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <CurrentIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {subsections[activeSection].title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {subsections[activeSection].content}
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 shadow-medium hover-lift"
            >
              More About Us
            </Button>
          </div>

          {/* Right: Image Collage */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-large hover-lift">
              <img 
                src={aboutCollage} 
                alt="Travel destinations collage" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-large">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground font-medium">Happy Travelers</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-large">
              <div className="text-center">
                <div className="text-4xl font-bold">50+</div>
                <div className="text-sm font-medium">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
