import { Card } from '@/components/ui/card';

const PartnerLogos = () => {
  const partners = [
    { name: 'Air India', logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=100&fit=crop' },
    { name: 'Emirates', logo: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=200&h=100&fit=crop' },
    { name: 'Marriott Hotels', logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop' },
    { name: 'Taj Hotels', logo: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=200&h=100&fit=crop' },
    { name: 'Qatar Airways', logo: 'https://images.unsplash.com/photo-1583771132774-6f72e5615c0d?w=200&h=100&fit=crop' },
    { name: 'Hilton', logo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&h=100&fit=crop' },
    { name: 'Lufthansa', logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=200&h=100&fit=crop' },
    { name: 'ITC Hotels', logo: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=200&h=100&fit=crop' }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Our Trusted Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Collaborating with world-class airlines, hotels, and travel services
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="flex items-center justify-center p-6 hover:shadow-lg transition-shadow bg-card">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
