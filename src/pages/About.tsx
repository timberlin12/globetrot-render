import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Rocket, Users, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aboutHero from '@/assets/about-hero.jpg';
import aboutCollage from '@/assets/about-collage.jpg';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('mission');

  const subsections = {
    mission: {
      icon: Target,
      title: 'Our Mission',
      content: 'At TravelWorld, our mission is to create unforgettable travel experiences that go beyond ordinary tourism. We are committed to providing exceptional service, personalized itineraries, and seamless travel arrangements that cater to every traveler\'s unique needs. We believe in responsible tourism that respects local cultures, supports local communities, and preserves the natural beauty of destinations for future generations. Our dedicated team works tirelessly to ensure that every journey with us is not just a trip, but a collection of cherished memories that last a lifetime.',
    },
    vision: {
      icon: Eye,
      title: 'Our Vision',
      content: 'Our vision is to become India\'s most trusted and innovative travel company, recognized for excellence in customer service and sustainable tourism practices. We aspire to connect millions of travelers with the world\'s most incredible destinations while promoting cultural understanding and environmental conservation. We envision a future where travel transforms lives, bridges cultures, and creates a more connected and compassionate world. Through cutting-edge technology, expert guidance, and unwavering commitment to quality, we aim to redefine the travel industry and set new standards for customer satisfaction.',
    },
    goals: {
      icon: Rocket,
      title: 'Our Future Goals',
      content: 'Looking ahead, we are focused on expanding our global network of destinations while maintaining our commitment to sustainable and responsible tourism. We plan to introduce innovative travel packages that combine adventure with cultural immersion, implement advanced booking technologies for enhanced customer experience, and strengthen our partnerships with local communities to create more authentic travel experiences. We aim to achieve carbon neutrality in our operations by 2030, expand our team of expert travel consultants, and launch educational programs that promote environmental awareness among travelers. Our goal is to serve over 100,000 happy travelers annually while maintaining the personalized touch that makes TravelWorld special.',
    },
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutHero}
          alt="About TravelWorld"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            About TravelWorld
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Crafting Dream Journeys Since 2009
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Your Trusted Travel Partner
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                TravelWorld is more than just a travel agency – we are your companions in exploration, 
                your guides to hidden gems, and your partners in creating extraordinary memories. 
                With over 15 years of experience in the travel industry, we have helped thousands of 
                travelers discover the beauty and diversity of India and beyond.
              </p>

              {/* Subsection Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                {Object.entries(subsections).map(([key, section]) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSection(key)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-smooth ${
                        activeSection === key
                          ? 'bg-primary text-primary-foreground shadow-medium'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {section.title}
                    </button>
                  );
                })}
              </div>

              {/* Active Section Content */}
              <div className="bg-accent/30 p-8 rounded-lg border border-accent">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = subsections[activeSection as keyof typeof subsections].icon;
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                  <h3 className="text-2xl font-bold text-foreground">
                    {subsections[activeSection as keyof typeof subsections].title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {subsections[activeSection as keyof typeof subsections].content}
                </p>
              </div>

              <div className="mt-8">
                <Button onClick={() => navigate('/contact')} size="lg">
                  Get in Touch
                </Button>
              </div>
            </div>

            {/* Right: Image Collage */}
            <div className="relative h-full min-h-[600px]">
              <div className="rounded-2xl overflow-hidden shadow-large hover-lift h-full">
                <img 
                  src={aboutCollage} 
                  alt="Travel destinations collage showcasing TravelWorld experiences" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats Overlay Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary">50,000+</div>
                  <div className="text-sm text-muted-foreground font-medium">Happy Travelers</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-sunset text-white p-6 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1 justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm font-medium">Years Experience</div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-large">
                <div className="text-center">
                  <div className="flex items-center gap-2 mb-1 justify-center">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-sm font-medium">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
