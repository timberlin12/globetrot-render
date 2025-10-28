import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, MapPin, Star, Users, Luggage, Shield } from 'lucide-react';
import transportHero from '@/assets/transport-hero.jpg';

export default function Transport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedType, setSelectedType] = useState('all');

  const types = ['All', 'Car', 'Bus', 'Tempo', 'Luxury'];

  const transports = [
    {
      id: 1,
      name: 'Luxury Sedan',
      type: 'car',
      capacity: 4,
      price: 3500,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      features: ['AC', 'Music System', 'GPS', 'Insurance']
    },
    {
      id: 2,
      name: 'Tempo Traveller',
      type: 'tempo',
      capacity: 12,
      price: 8000,
      rating: 4.7,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
      features: ['AC', 'Spacious', 'GPS', 'First Aid']
    },
    {
      id: 3,
      name: 'Mini Bus',
      type: 'bus',
      capacity: 20,
      price: 12000,
      rating: 4.6,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
      features: ['AC', 'Entertainment', 'GPS', 'Luggage Space']
    },
    {
      id: 4,
      name: 'Hatchback',
      type: 'car',
      capacity: 4,
      price: 2000,
      rating: 4.5,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      features: ['AC', 'GPS', 'Insurance']
    },
    {
      id: 5,
      name: 'Luxury Coach',
      type: 'luxury',
      capacity: 35,
      price: 18000,
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
      features: ['AC', 'Reclining Seats', 'Entertainment', 'Wifi', 'Washroom']
    },
    {
      id: 6,
      name: 'SUV',
      type: 'car',
      capacity: 7,
      price: 5500,
      rating: 4.7,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      features: ['AC', '4WD', 'GPS', 'Insurance', 'Premium Sound']
    }
  ];

  const popularTransports = transports.filter(t => t.rating >= 4.7).slice(0, 3);

  const getFilteredTransports = () => {
    let filtered = transports;

    if (searchQuery) {
      filtered = filtered.filter(transport =>
        transport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        transport.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(transport => transport.type === selectedType.toLowerCase());
    }

    filtered = filtered.filter(transport => transport.price >= priceRange[0] && transport.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      default:
        return [...filtered].sort((a, b) => b.reviews - a.reviews);
    }
  };

  const filteredTransports = getFilteredTransports();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={transportHero}
            alt="Transport services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Your Journey, Our Comfort
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Safe, reliable, and comfortable transport services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">Search Transport</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Price Range */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">Price Range (per day)</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={20000}
                    step={500}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vehicle Types */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">Vehicle Type</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <Button
                      key={type}
                      variant={selectedType === type.toLowerCase() ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedType(type.toLowerCase())}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Most Popular */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">Most Popular</h3>
                <div className="space-y-4">
                  {popularTransports.map((transport) => (
                    <div key={transport.id} className="flex gap-3">
                      <img
                        src={transport.image}
                        alt={transport.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">{transport.name}</h4>
                        <p className="text-xs text-muted-foreground">{transport.capacity} seats</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          <span className="text-xs font-medium">{transport.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Transports */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-muted-foreground">
                Showing {filteredTransports.length} {filteredTransports.length === 1 ? 'option' : 'options'}
              </p>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Transports Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredTransports.map((transport) => (
                <Card key={transport.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
                  <div className="relative h-48">
                    <img
                      src={transport.image}
                      alt={transport.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      ₹{transport.price.toLocaleString()}/day
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-bold mb-2">{transport.name}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{transport.capacity} seats</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Luggage className="w-4 h-4" />
                        <span className="text-sm capitalize">{transport.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold">{transport.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({transport.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {transport.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs"
                        >
                          <Shield className="w-3 h-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/transport/${transport.id}`} className="w-full">
                      <Button className="w-full">Book Now</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
