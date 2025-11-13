import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, Medal, Award } from 'lucide-react';

const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      year: '2023',
      title: 'Best Travel Agency',
      organization: 'India Tourism Awards'
    },
    {
      icon: Star,
      year: '2022',
      title: 'Excellence in Service',
      organization: 'Travel Excellence Foundation'
    },
    {
      icon: Medal,
      year: '2021',
      title: 'Customer Choice Award',
      organization: 'TripAdvisor Travelers Choice'
    },
    {
      icon: Award,
      year: '2020',
      title: 'Sustainable Tourism',
      organization: 'Global Green Travel Council'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honored for our commitment to excellence and customer satisfaction
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-semibold text-primary mb-2">{award.year}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
