import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, Play, ThumbsUp, MapPin, Calendar, Camera, Video, ExternalLink, Filter } from 'lucide-react';

import heroKashmir from '@/assets/hero-kashmir.jpg';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    title: 'Magical Kerala Experience!',
    text: 'WanderLux made our Kerala trip absolutely magical! Every detail was perfectly planned, and the backwater experience was unforgettable. The houseboat stay was luxurious and the food was incredible. Our guide knew all the hidden gems. Highly recommend for anyone looking for an authentic Kerala experience!',
    avatar: 'PS',
    date: 'November 2024',
    trip: 'Kerala Backwaters Tour',
    duration: '7 Days',
    verified: true,
    helpful: 45,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    title: 'Heritage Tour Beyond Expectations',
    text: 'Best travel company ever! The Rajasthan heritage tour exceeded all expectations. Professional service and authentic experiences throughout. From the majestic forts to the colorful markets, everything was perfectly organized. The local guides were incredibly knowledgeable about history and culture.',
    avatar: 'RK',
    date: 'October 2024',
    trip: 'Rajasthan Heritage Tour',
    duration: '10 Days',
    verified: true,
    helpful: 38,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    location: 'Bangalore, India',
    rating: 5,
    title: 'Perfect Family Vacation in Manali',
    text: 'Our family had an amazing time in Manali. The itinerary was perfect for both adults and kids, hotels were luxurious with stunning mountain views, and the team was incredibly helpful at every step. The adventure activities were well-organized and safe. Will definitely book again!',
    avatar: 'AP',
    date: 'September 2024',
    trip: 'Manali Adventure Package',
    duration: '5 Days',
    verified: true,
    helpful: 52,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur, India',
    rating: 4,
    title: 'Great Goa Beach Getaway',
    text: 'Fantastic Goa beach getaway! Great value for money and excellent customer support. The beach resort was beautiful and the water sports were thrilling. Only minor hiccup was delayed pick-up on arrival but the team quickly resolved it. Overall wonderful experience!',
    avatar: 'VS',
    date: 'August 2024',
    trip: 'Goa Beach Paradise',
    duration: '4 Days',
    verified: true,
    helpful: 29,
    hasPhoto: false
  },
  {
    id: 5,
    name: 'Neha Reddy',
    location: 'Hyderabad, India',
    rating: 5,
    title: 'Honeymoon in Paradise - Kashmir',
    text: 'Kashmir was like heaven on earth! WanderLux team handled everything flawlessly for our honeymoon. The shikara ride on Dal Lake at sunset was the most romantic experience ever. The houseboats, gardens, and mountain views were breathtaking. Perfect planning for a perfect trip!',
    avatar: 'NR',
    date: 'July 2024',
    trip: 'Kashmir Honeymoon Special',
    duration: '6 Days',
    verified: true,
    helpful: 67,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400'
  },
  {
    id: 6,
    name: 'Amit Verma',
    location: 'Pune, India',
    rating: 5,
    title: 'Loyal Customer for 5 Years!',
    text: 'Booked multiple trips with WanderLux over the past 5 years and never disappointed. Their attention to detail and local expertise makes them stand out from other agencies. From budget trips to luxury experiences, they handle everything professionally. My go-to travel partner!',
    avatar: 'AV',
    date: 'June 2024',
    trip: 'Multiple Destinations',
    duration: 'Various',
    verified: true,
    helpful: 83,
    hasPhoto: false
  },
  {
    id: 7,
    name: 'Sunita Menon',
    location: 'Chennai, India',
    rating: 5,
    title: 'Solo Travel Made Easy',
    text: 'As a solo female traveler, safety was my priority. WanderLux ensured I felt safe and comfortable throughout my Ladakh trip. The accommodations were carefully selected, and they provided 24/7 support. The landscapes were incredible and the photography opportunities endless!',
    avatar: 'SM',
    date: 'May 2024',
    trip: 'Ladakh Solo Adventure',
    duration: '8 Days',
    verified: true,
    helpful: 91,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1545652985-5edd365b12eb?w=400'
  },
  {
    id: 8,
    name: 'Karthik Iyer',
    location: 'Kochi, India',
    rating: 5,
    title: 'Corporate Retreat Success',
    text: 'Organized a corporate retreat for 50 employees through WanderLux. The team handling was exceptional - from team building activities to comfortable stays, everything was seamless. Our employees are still talking about it! Highly recommend for corporate events.',
    avatar: 'KI',
    date: 'April 2024',
    trip: 'Corporate Retreat Package',
    duration: '3 Days',
    verified: true,
    helpful: 34,
    hasPhoto: true,
    photo: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400'
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: 'The Sharma Family',
    thumbnail: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400',
    trip: 'Kerala Family Tour',
    duration: '2:34'
  },
  {
    id: 2,
    name: 'Rahul & Priya',
    thumbnail: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400',
    trip: 'Kashmir Honeymoon',
    duration: '3:15'
  },
  {
    id: 3,
    name: 'Adventure Group',
    thumbnail: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400',
    trip: 'Manali Trekking',
    duration: '4:02'
  }
];

const stats = [
  { value: '10,000+', label: 'Happy Travelers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '98%', label: 'Would Recommend' },
  { value: '500+', label: 'Verified Reviews' }
];

const filterOptions = ['All Reviews', '5 Stars', '4 Stars', 'With Photos', 'Most Helpful'];

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('All Reviews');
  const [visibleReviews, setVisibleReviews] = useState(6);

  const filteredReviews = reviews.filter(review => {
    if (activeFilter === '5 Stars') return review.rating === 5;
    if (activeFilter === '4 Stars') return review.rating === 4;
    if (activeFilter === 'With Photos') return review.hasPhoto;
    if (activeFilter === 'Most Helpful') return review.helpful > 40;
    return true;
  });

  const loadMore = () => {
    setVisibleReviews(prev => prev + 4);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Customer Reviews & Testimonials | WanderLux Travel</title>
        <meta name="description" content="Read authentic reviews from our happy travelers. See why thousands trust WanderLux for their dream vacations across India." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroKashmir})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <Badge className="bg-primary/90 text-white mb-4">Trusted by Thousands</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Our Travelers Say
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Real stories from real travelers who trusted us with their dream vacations
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Reviews Integration */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Also Find Us On</h2>
            <p className="text-muted-foreground">See our reviews on trusted platforms</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">G</div>
              <div>
                <div className="font-semibold">Google Reviews</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  4.9 (324 reviews)
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a 
              href="https://tripadvisor.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">TA</div>
              <div>
                <div className="font-semibold">TripAdvisor</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  4.8 (198 reviews)
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a 
              href="https://trustpilot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">TP</div>
              <div>
                <div className="font-semibold">Trustpilot</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  4.7 (156 reviews)
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">
              <Video className="w-4 h-4 mr-2" />
              Video Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Their Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our travelers about their unforgettable journeys
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((video) => (
              <Card 
                key={video.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video">
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{video.name}</h3>
                  <p className="text-sm text-muted-foreground">{video.trip}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">
              <Camera className="w-4 h-4 mr-2" />
              Traveler Photos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Captured Moments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beautiful memories shared by our travelers from their adventures
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reviews.filter(r => r.hasPhoto).slice(0, 8).map((review, index) => (
              <div 
                key={review.id}
                className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={review.photo}
                  alt={`Photo by ${review.name}`}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-white/80">{review.trip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written Reviews */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary mb-4">
              <Quote className="w-4 h-4 mr-2" />
              Written Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Experiences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              In-depth reviews from travelers sharing their complete journey
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground self-center" />
            {filterOptions.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredReviews.slice(0, visibleReviews).map((review) => (
              <Card key={review.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-foreground">{review.name}</h4>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">Verified</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2">{review.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{review.text}</p>

                {review.hasPhoto && review.photo && (
                  <div className="mb-4">
                    <img 
                      src={review.photo} 
                      alt={`Photo from ${review.trip}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {review.date}
                    </span>
                    <span>{review.trip}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    {review.helpful}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {visibleReviews < filteredReviews.length && (
            <div className="text-center mt-8">
              <Button onClick={loadMore} variant="outline" size="lg">
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Story?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of happy travelers and start planning your dream vacation today
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Explore Tours
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
