import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      initials: 'RK'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      initials: 'PS'
    },
    {
      name: 'Amit Patel',
      role: 'Travel Consultant',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      initials: 'AP'
    },
    {
      name: 'Sneha Reddy',
      role: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      initials: 'SR'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate travel experts dedicated to making your journey unforgettable
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 pb-6">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
