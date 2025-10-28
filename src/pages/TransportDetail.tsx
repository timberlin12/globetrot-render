import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Star, Users, Check, X, Phone, Mail, Luggage, Shield, Fuel, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const TransportDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const pricePerDay = 3500;

  const transportImages = [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
  ];

  const transportData = {
    name: "Luxury Sedan",
    type: "Car",
    capacity: 4,
    pricePerDay: pricePerDay,
    rating: 4.8,
    reviews: 189,
    description:
      "Experience comfort and style with our premium luxury sedan. Perfect for business trips, family outings, or special occasions. Our well-maintained vehicle comes with a professional driver and ensures a smooth, comfortable journey. Equipped with modern amenities and safety features, this sedan offers the perfect blend of elegance and practicality.",
    features: [
      "Air Conditioning",
      "Premium Sound System",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "USB Charging Ports",
      "Leather Seats",
      "Sunroof",
      "Automatic Transmission",
      "ABS & Airbags",
      "Rear Camera",
      "Child Safety Locks",
      "Power Windows",
    ],
    specifications: [
      { label: "Fuel Type", value: "Petrol/Diesel" },
      { label: "Transmission", value: "Automatic" },
      { label: "Seating Capacity", value: "4 Passengers" },
      { label: "Luggage Space", value: "2 Large Bags + 2 Small Bags" },
      { label: "Mileage", value: "150 km/day included" },
      { label: "Additional KM", value: "₹12 per km" },
    ],
    inclusions: [
      "Professional chauffeur",
      "Fuel for included kilometers",
      "Toll and parking fees",
      "Full insurance coverage",
      "24/7 roadside assistance",
      "Vehicle cleaning and maintenance",
    ],
    exclusions: [
      "Extra kilometers beyond daily limit",
      "Multiple city drops",
      "Night charges (11 PM - 6 AM)",
      "Driver accommodation (for outstation trips)",
      "Inter-state permit fees",
      "Additional waiting charges",
    ],
    policies: [
      "Minimum booking: 8 hours or 80 km",
      "Cancellation: Free up to 24 hours before pickup",
      "Valid driving license required",
      "Security deposit: ₹5,000 (refundable)",
      "Age requirement: 21 years and above",
      "Smoking not allowed inside vehicle",
    ],
    popularRoutes: [
      { from: "Mumbai", to: "Pune", duration: "3-4 hours" },
      { from: "Mumbai", to: "Lonavala", duration: "2-3 hours" },
      { from: "Mumbai", to: "Mahabaleshwar", duration: "5-6 hours" },
      { from: "Mumbai", to: "Alibaug", duration: "2-3 hours" },
    ],
  };

  const calculateDays = () => {
    if (!pickupDate || !returnDate) return 1;
    const diff = returnDate.getTime() - pickupDate.getTime();
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const days = calculateDays();
  const totalAmount = pricePerDay * days;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={transportImages[0]}
          alt="Transport Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{transportData.name}</h1>
            <p className="text-xl flex items-center justify-center gap-2">
              <Users className="w-5 h-5" />
              {transportData.capacity} Seater • {transportData.type}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{transportData.rating}</span>
              <span className="text-white/80">({transportData.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img
              src={transportImages[selectedImage]}
              alt="Main transport"
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage((selectedImage + 1) % transportImages.length)}
            />
          </div>
          {transportImages.slice(1, 4).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Transport ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(idx + 1)}
            />
          ))}
          <Button
            variant="secondary"
            className="h-48 w-full"
            onClick={() => setSelectedImage((selectedImage + 1) % transportImages.length)}
          >
            View More Images
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Transport Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {transportData.description}
                </p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {transportData.specifications.map((spec, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {transportData.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {transportData.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Exclusions */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Charges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {transportData.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Policies */}
            <Card>
              <CardHeader>
                <CardTitle>Rental Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {transportData.policies.map((policy, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Popular Routes */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Routes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transportData.popularRoutes.map((route, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-primary" />
                        <span className="font-medium">{route.from} → {route.to}</span>
                      </div>
                      <span className="text-muted-foreground text-sm">{route.duration}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Booking Form */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Book This Vehicle</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Online Booking Form */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Make a Reservation</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pickup-date">Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="pickup-date"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !pickupDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={pickupDate}
                          onSelect={setPickupDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="return-date">Return Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="return-date"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !returnDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={returnDate}
                          onSelect={setReturnDate}
                          initialFocus
                          disabled={(date) => !pickupDate || date <= pickupDate}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pickup-location">Pickup Location</Label>
                    <Input
                      id="pickup-location"
                      placeholder="Enter pickup location"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="drop-location">Drop Location</Label>
                    <Input
                      id="drop-location"
                      placeholder="Enter drop location"
                    />
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Price per day:</span>
                      <span className="font-semibold">₹{pricePerDay.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Number of days:</span>
                      <span className="font-semibold">{days}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Total Amount:</span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{totalAmount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    Book Now
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                </div>

                {/* Enquiry Form */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Send Enquiry</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="enquiry-name">Your Name</Label>
                    <Input id="enquiry-name" placeholder="Enter your name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enquiry-email">Email</Label>
                    <Input id="enquiry-email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enquiry-phone">Phone</Label>
                    <Input id="enquiry-phone" type="tel" placeholder="Enter your phone" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enquiry-message">Message</Label>
                    <Textarea 
                      id="enquiry-message" 
                      placeholder="Tell us about your travel plans..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full" variant="outline">
                    Send Enquiry
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="p-4 bg-muted rounded-lg space-y-2">
                  <h4 className="font-semibold mb-3">Need Help?</h4>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm">rental@transportservice.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportDetail;
