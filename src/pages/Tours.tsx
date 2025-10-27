import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { MapPin, Calendar, Search, Star } from 'lucide-react';
import toursHero from '@/assets/tours-hero.jpg';

const allTours = [
  {
    id: 1,
    location: 'Kerala Backwaters',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    startDate: 'Mar 15, 2025',
    price: 24999,
    duration: '5 Days',
    destination: 'Kerala',
    rating: 4.8,
    reviews: 156,
    popular: true
  },
  {
    id: 2,
    location: 'Rajasthan Heritage',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800',
    startDate: 'Apr 10, 2025',
    price: 32999,
    duration: '7 Days',
    destination: 'Rajasthan',
    rating: 4.9,
    reviews: 203,
    popular: true
  },
  {
    id: 3,
    location: 'Manali Adventure',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800',
    startDate: 'May 20, 2025',
    price: 28999,
    duration: '6 Days',
    destination: 'Himachal Pradesh',
    rating: 4.7,
    reviews: 142,
    popular: true
  },
  {
    id: 4,
    location: 'Goa Beach Paradise',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    startDate: 'Mar 25, 2025',
    price: 19999,
    duration: '4 Days',
    destination: 'Goa',
    rating: 4.6,
    reviews: 189,
    popular: false
  },
  {
    id: 5,
    location: 'Kashmir Valley',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800',
    startDate: 'Jun 5, 2025',
    price: 35999,
    duration: '8 Days',
    destination: 'Kashmir',
    rating: 4.9,
    reviews: 178,
    popular: false
  },
  {
    id: 6,
    location: 'Leh Ladakh Expedition',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    startDate: 'Jul 15, 2025',
    price: 42999,
    duration: '10 Days',
    destination: 'Ladakh',
    rating: 5.0,
    reviews: 95,
    popular: false
  }
];

const destinations = ['All', 'Kerala', 'Rajasthan', 'Himachal Pradesh', 'Goa', 'Kashmir', 'Ladakh'];

const Tours = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([50000]);
  const [selectedDestination, setSelectedDestination] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  // Filter tours
  let filteredTours = allTours.filter(tour => {
    const matchesSearch = tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = tour.price <= priceRange[0];
    const matchesDestination = selectedDestination === 'All' || tour.destination === selectedDestination;
    return matchesSearch && matchesPrice && matchesDestination;
  });

  // Sort tours
  filteredTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  const popularTours = allTours.filter(tour => tour.popular).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={toursHero} 
            alt="Tours Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Discover Amazing Tours
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Explore handpicked destinations with unforgettable experiences
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 md:py-16 bg-background flex-1">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search Bar */}
              <Card className="p-4 space-y-3">
                <h3 className="font-semibold text-lg">Search Tours</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search destinations..." 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </Card>

              {/* Price Filter */}
              <Card className="p-4 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Price Range</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Up to ₹{priceRange[0].toLocaleString()}
                  </p>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={50000}
                  min={10000}
                  step={5000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹10,000</span>
                  <span>₹50,000</span>
                </div>
              </Card>

              {/* Destination Filter */}
              <Card className="p-4 space-y-3">
                <h3 className="font-semibold text-lg">Destination</h3>
                <div className="space-y-2">
                  {destinations.map((dest) => (
                    <button
                      key={dest}
                      onClick={() => setSelectedDestination(dest)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedDestination === dest
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {dest}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Most Popular */}
              <Card className="p-4 space-y-3">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Most Popular
                </h3>
                <div className="space-y-3">
                  {popularTours.map((tour) => (
                    <div key={tour.id} className="flex gap-3 p-2 hover:bg-muted rounded-lg transition-colors cursor-pointer">
                      <img 
                        src={tour.image} 
                        alt={tour.location}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate">{tour.location}</p>
                        <p className="text-primary font-bold text-sm">₹{tour.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Side - Tour Cards */}
            <div className="lg:col-span-3 space-y-6">
              {/* Sort Bar */}
              <div className="flex items-center justify-between bg-card p-4 rounded-lg shadow-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{filteredTours.length}</span> tours found
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Tour Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTours.map((tour) => (
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
                      {tour.popular && (
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <Star className="w-3 h-3 fill-white" />
                          Popular
                        </div>
                      )}
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold">{tour.location}</h4>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{tour.rating}</span>
                          <span className="text-muted-foreground">({tour.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{tour.destination}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">Starting {tour.startDate}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t">
                        <span className="text-2xl font-bold text-primary">₹{tour.price.toLocaleString()}</span>
                        <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                          <Link to={`/tours/${tour.id}`}>Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredTours.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No tours found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setPriceRange([50000]);
                      setSelectedDestination('All');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;