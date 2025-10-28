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
import { Search, MapPin, Star, Wifi, Coffee, UtensilsCrossed, Waves } from 'lucide-react';
import hotelHero from '@/assets/hotel-hero.jpg';

export default function Hotel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Luxury', 'Budget', 'Beach', 'Mountain', 'City'];

  const hotels = [
    {
      id: 1,
      name: 'The Grand Palace Hotel',
      location: 'Mumbai, Maharashtra',
      price: 8500,
      rating: 4.8,
      reviews: 245,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      amenities: ['Wifi', 'Restaurant', 'Pool', 'Spa'],
      category: 'luxury'
    },
    {
      id: 2,
      name: 'Seaside Resort & Spa',
      location: 'Goa',
      price: 12000,
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
      amenities: ['Wifi', 'Beach', 'Restaurant', 'Pool'],
      category: 'beach'
    },
    {
      id: 3,
      name: 'Mountain View Inn',
      location: 'Manali, Himachal Pradesh',
      price: 5500,
      rating: 4.6,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800',
      amenities: ['Wifi', 'Restaurant', 'Parking'],
      category: 'mountain'
    },
    {
      id: 4,
      name: 'Budget Stay Inn',
      location: 'Delhi',
      price: 2500,
      rating: 4.2,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800',
      amenities: ['Wifi', 'Parking'],
      category: 'budget'
    },
    {
      id: 5,
      name: 'Royal Heritage Hotel',
      location: 'Jaipur, Rajasthan',
      price: 15000,
      rating: 4.9,
      reviews: 428,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800',
      amenities: ['Wifi', 'Restaurant', 'Pool', 'Heritage'],
      category: 'luxury'
    },
    {
      id: 6,
      name: 'Lake View Resort',
      location: 'Udaipur, Rajasthan',
      price: 9500,
      rating: 4.7,
      reviews: 267,
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800',
      amenities: ['Wifi', 'Restaurant', 'Lake View', 'Spa'],
      category: 'luxury'
    }
  ];

  const popularHotels = hotels.filter(h => h.rating >= 4.7).slice(0, 3);

  const getFilteredHotels = () => {
    let filtered = hotels;

    if (searchQuery) {
      filtered = filtered.filter(hotel =>
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(hotel => hotel.category === selectedCategory.toLowerCase());
    }

    filtered = filtered.filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]);

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

  const filteredHotels = getFilteredHotels();

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'restaurant':
        return <UtensilsCrossed className="w-4 h-4" />;
      case 'pool':
      case 'beach':
        return <Waves className="w-4 h-4" />;
      default:
        return <Coffee className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hotelHero}
            alt="Luxury hotels"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Discover luxury hotels and comfortable stays across India
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
                <h3 className="text-lg font-bold mb-4">Search Hotels</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or location..."
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
                <h3 className="text-lg font-bold mb-4">Price Range (per night)</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={50000}
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

            {/* Categories */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-4">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category.toLowerCase() ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category.toLowerCase())}
                    >
                      {category}
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
                  {popularHotels.map((hotel) => (
                    <div key={hotel.id} className="flex gap-3">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">{hotel.name}</h4>
                        <p className="text-xs text-muted-foreground">{hotel.location}</p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-primary text-primary" />
                          <span className="text-xs font-medium">{hotel.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Content - Hotels */}
          <div className="lg:col-span-3 space-y-6">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-muted-foreground">
                Showing {filteredHotels.length} {filteredHotels.length === 1 ? 'hotel' : 'hotels'}
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

            {/* Hotels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-elegant transition-smooth">
                  <div className="relative h-48">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-primary">
                      ₹{hotel.price.toLocaleString()}/night
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold">{hotel.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hotel.amenities.map((amenity) => (
                        <div
                          key={amenity}
                          className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs"
                        >
                          {getAmenityIcon(amenity)}
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/hotel/${hotel.id}`} className="w-full">
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
