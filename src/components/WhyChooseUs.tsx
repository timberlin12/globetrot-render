import { Award, Clock, DollarSign, Globe, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Expert Travel Guides",
    description: "Professional and knowledgeable guides to make your journey memorable and enriching."
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your safety is our priority with comprehensive travel insurance and 24/7 support."
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "Competitive pricing with no hidden fees. Get the best value for your money."
  },
  {
    icon: Globe,
    title: "Wide Destinations",
    description: "Explore 100+ destinations across India with carefully curated tour packages."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you at every step of your journey."
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Customized itineraries tailored to your preferences and travel style."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose WanderLux Travel?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional travel experiences with unmatched service and care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover-lift border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
