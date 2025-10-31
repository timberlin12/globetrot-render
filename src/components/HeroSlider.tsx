import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroKerala from '@/assets/hero-kerala.jpg';
import heroRajasthan from '@/assets/hero-rajasthan.jpg';
import heroManali from '@/assets/hero-manali.jpg';
import heroGoa from '@/assets/hero-goa.jpg';
import heroKashmir from '@/assets/hero-kashmir.jpg';

const slides = [
  {
    image: heroKerala,
    state: 'Kerala',
    place: 'God\'s Own Country',
    description: 'Experience tranquil backwaters, lush greenery, and authentic Ayurvedic retreats in this tropical paradise.',
    rating: 4.9,
    highlight: 'Best time to visit: Oct–Mar'
  },
  {
    image: heroRajasthan,
    state: 'Rajasthan',
    place: 'Land of Kings',
    description: 'Explore majestic forts, vibrant culture, and golden deserts that tell tales of royal heritage.',
    rating: 4.8,
    highlight: 'Best time to visit: Nov–Feb'
  },
  {
    image: heroManali,
    state: 'Himachal Pradesh',
    place: 'Valley of Gods - Manali',
    description: 'Adventure awaits in snow-capped mountains, scenic valleys, and thrilling outdoor activities.',
    rating: 4.9,
    highlight: 'Best time to visit: Mar–Jun, Oct–Jan'
  },
  {
    image: heroGoa,
    state: 'Goa',
    place: 'Beach Capital of India',
    description: 'Pristine beaches, vibrant nightlife, and Portuguese heritage create an unforgettable coastal escape.',
    rating: 4.7,
    highlight: 'Best time to visit: Nov–Feb'
  },
  {
    image: heroKashmir,
    state: 'Kashmir',
    place: 'Paradise on Earth',
    description: 'Serene Dal Lake, stunning gardens, and breathtaking Himalayan views make this a dream destination.',
    rating: 5.0,
    highlight: 'Best time to visit: Apr–Oct'
  }
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.place}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-2xl text-white space-y-4 md:space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  <span className="text-lg md:text-xl font-semibold text-secondary">{slide.state}</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {slide.place}
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-xl">
                  {slide.description}
                </p>
                
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{slide.rating}</span>
                  </div>
                  
                  <span className="text-sm md:text-base bg-secondary/90 px-4 py-1.5 rounded-full font-medium">
                    {slide.highlight}
                  </span>
                </div>
                
                <Button 
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 text-lg shadow-large hover-lift mt-4"
                >
                  <Link to="/tours">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full transition-smooth"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full transition-smooth"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-smooth ${
              index === currentSlide 
                ? 'bg-white w-8 md:w-12' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
