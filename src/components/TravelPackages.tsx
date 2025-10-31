import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Star, Users, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const tourPackages = [
  {
    id: 1,
    location: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    startDate: 'Mar 15, 2025',
    price: '₹24,999',
    duration: '5 Days'
  },
  {
    id: 2,
    location: 'Rajasthan Heritage',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    startDate: 'Apr 10, 2025',
    price: '₹32,999',
    duration: '7 Days'
  },
  {
    id: 3,
    location: 'Manali Adventure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    startDate: 'May 20, 2025',
    price: '₹28,999',
    duration: '6 Days'
  }
];

const hotels = [
  {
    id: 1,
    name: 'Taj Lake Palace',
    location: 'Udaipur, Rajasthan',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'
  },
  {
    id: 2,
    name: 'The Oberoi Mumbai',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800'
  },
  {
    id: 3,
    name: 'Vivanta by Taj',
    location: 'Goa',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800'
  }
];

const transportOptions = [
  {
    id: 1,
    type: 'Luxury Sedan',
    seating: '4 Seats',
    price: '₹2,500/day',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'
  },
  {
    id: 2,
    type: 'Tempo Traveller',
    seating: '12 Seats',
    price: '₹4,500/day',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800'
  },
  {
    id: 3,
    type: 'Mini Bus',
    seating: '20 Seats',
    price: '₹6,500/day',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800'
  }
];

export const TravelPackages = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Ultimate Travel Experiences
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Explore Our Offerings
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked packages, premium hotels, and comfortable transport for your perfect journey
          </p>
        </div>

        {/* Tour Packages */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-primary" />
            Tour Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourPackages.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover-lift border-0 shadow-medium">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.location}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.duration}
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <h4 className="text-xl font-bold">{tour.location}</h4>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Starting {tour.startDate}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-primary">{tour.price}</span>
                    <Button asChild className="bg-primary hover:bg-primary-dark text-white">
                      <Link to={`/tours/${tour.id}`}>Book Trip</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Hotels */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-7 h-7 text-secondary" />
            Premium Hotels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover-lift border-0 shadow-medium">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(hotel.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="text-xl font-bold">{hotel.name}</h4>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.location}</span>
                  </div>
                  <Button asChild className="w-full bg-secondary hover:bg-secondary-light text-white">
                    <Link to={`/hotel/${hotel.id}`}>Check Availability</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transport */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <Car className="w-7 h-7 text-accent" />
            Transport Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportOptions.map((transport) => (
              <Card key={transport.id} className="overflow-hidden hover-lift border-0 shadow-medium">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={transport.image} 
                    alt={transport.type}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <h4 className="text-xl font-bold">{transport.type}</h4>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{transport.seating}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-bold text-accent">{transport.price}</span>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                      <Link to={`/transport/${transport.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
