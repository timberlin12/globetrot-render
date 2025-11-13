import { Card, CardContent } from '@/components/ui/card';
import { Award, Shield, CheckCircle2, Globe } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      icon: Award,
      title: 'IATA Certified',
      description: 'Accredited by International Air Transport Association'
    },
    {
      icon: Shield,
      title: 'ISO 9001:2015',
      description: 'Quality Management System Certified'
    },
    {
      icon: CheckCircle2,
      title: '15+ Years Experience',
      description: 'Serving travelers since 2009'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Partnerships with 500+ destinations worldwide'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Experience & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted credentials and proven expertise in the travel industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
