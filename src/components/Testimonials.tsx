import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    text: 'WanderLux made our Kerala trip absolutely magical! Every detail was perfectly planned, and the backwater experience was unforgettable. Highly recommend!',
    avatar: 'PS',
    date: '2 weeks ago'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi, India',
    rating: 5,
    text: 'Best travel company ever! The Rajasthan heritage tour exceeded all expectations. Professional service and authentic experiences throughout.',
    avatar: 'RK',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    location: 'Bangalore, India',
    rating: 5,
    text: 'Our family had an amazing time in Manali. The itinerary was perfect, hotels were luxurious, and the team was incredibly helpful. Will book again!',
    avatar: 'AP',
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Jaipur, India',
    rating: 4,
    text: 'Fantastic Goa beach getaway! Great value for money and excellent customer support. Only minor hiccup was delayed pick-up but overall wonderful experience.',
    avatar: 'VS',
    date: '1 week ago'
  },
  {
    id: 5,
    name: 'Neha Reddy',
    location: 'Hyderabad, India',
    rating: 5,
    text: 'Kashmir was like heaven on earth! WanderLux team handled everything flawlessly. The shikara ride on Dal Lake was the highlight of our honeymoon.',
    avatar: 'NR',
    date: '4 days ago'
  },
  {
    id: 6,
    name: 'Amit Verma',
    location: 'Pune, India',
    rating: 5,
    text: 'Booked multiple trips with WanderLux and never disappointed. Their attention to detail and local expertise makes them stand out from other agencies.',
    avatar: 'AV',
    date: '2 months ago'
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visibleTestimonials = 3;
  const startIndex = currentIndex * visibleTestimonials;
  const displayedTestimonials = testimonials.slice(startIndex, startIndex + visibleTestimonials);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real experiences from real travelers who trusted us with their dream vacations
          </p>
        </div>

        {/* Desktop: 3 Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {displayedTestimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="p-6 hover-lift border-0 shadow-medium bg-white relative overflow-hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground truncate">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground truncate">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-3">
                {testimonial.text}
              </p>

              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet: Single Column */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="p-6 hover-lift border-0 shadow-medium bg-white relative overflow-hidden"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-3">
                {testimonial.text}
              </p>

              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            </Card>
          ))}
        </div>

        {/* Navigation Dots - Desktop Only */}
        <div className="hidden lg:flex justify-center gap-2">
          {[...Array(Math.ceil(testimonials.length / visibleTestimonials))].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              }}
              className={`w-2 h-2 rounded-full transition-smooth ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
