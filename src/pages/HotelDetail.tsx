import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import { Calendar as CalendarIcon, MapPin, Star, Users, Check, X, Phone, Mail, Wifi, Coffee, UtensilsCrossed, Waves } from "lucide-react";
import { cn } from "@/lib/utils";

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [numRooms, setNumRooms] = useState(1);
  const pricePerNight = 8500;

  const hotelImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
  ];

  const hotelData = {
    name: "The Grand Palace Hotel",
    location: "Mumbai, Maharashtra",
    pricePerNight: pricePerNight,
    rating: 4.8,
    reviews: 245,
    description:
      "Experience luxury and comfort at The Grand Palace Hotel. Located in the heart of Mumbai, our hotel offers world-class amenities and impeccable service. Whether you're here for business or leisure, enjoy our spacious rooms, fine dining restaurants, and state-of-the-art facilities.",
    amenities: [
      "Free High-Speed Wifi",
      "24/7 Room Service",
      "Swimming Pool",
      "Spa & Wellness Center",
      "Fitness Center",
      "Restaurant & Bar",
      "Business Center",
      "Valet Parking",
      "Airport Shuttle",
      "Concierge Service",
      "Conference Rooms",
      "Laundry Service",
    ],
    roomFeatures: [
      "Air Conditioning",
      "Flat Screen TV",
      "Mini Bar",
      "Coffee/Tea Maker",
      "Safe Deposit Box",
      "Premium Bedding",
      "Work Desk",
      "Complimentary Toiletries",
    ],
    inclusions: [
      "Daily breakfast buffet",
      "Free WiFi throughout property",
      "Welcome drink on arrival",
      "Daily housekeeping",
      "Complimentary newspaper",
      "Access to fitness center",
    ],
    exclusions: [
      "Airport transfers (available on request)",
      "Room service charges",
      "Spa treatments",
      "Minibar consumption",
      "Laundry services",
      "Additional meal charges",
    ],
    policies: [
      "Check-in: 2:00 PM | Check-out: 12:00 PM",
      "Cancellation: Free cancellation up to 48 hours before check-in",
      "Children under 12 stay free with existing bedding",
      "Pets are not allowed",
      "Smoking is prohibited in all rooms",
      "Valid ID proof required at check-in",
    ],
    nearbyAttractions: [
      { name: "Gateway of India", distance: "2.5 km" },
      { name: "Marine Drive", distance: "1.8 km" },
      { name: "Colaba Causeway", distance: "3 km" },
      { name: "Chhatrapati Shivaji Terminus", distance: "4 km" },
    ],
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="w-5 h-5 text-primary" />;
    if (amenity.toLowerCase().includes('restaurant') || amenity.toLowerCase().includes('service')) 
      return <UtensilsCrossed className="w-5 h-5 text-primary" />;
    if (amenity.toLowerCase().includes('pool') || amenity.toLowerCase().includes('spa')) 
      return <Waves className="w-5 h-5 text-primary" />;
    return <Coffee className="w-5 h-5 text-primary" />;
  };

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const diff = checkOut.getTime() - checkIn.getTime();
    return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const totalAmount = pricePerNight * numRooms * (nights || 1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={hotelImages[0]}
          alt="Hotel Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{hotelData.name}</h1>
            <p className="text-xl flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              {hotelData.location}
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold">{hotelData.rating}</span>
              <span className="text-white/80">({hotelData.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img
              src={hotelImages[selectedImage]}
              alt="Main hotel"
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage((selectedImage + 1) % hotelImages.length)}
            />
          </div>
          {hotelImages.slice(1, 4).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Hotel ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(idx + 1)}
            />
          ))}
          <Button
            variant="secondary"
            className="h-48 w-full"
            onClick={() => setSelectedImage((selectedImage + 1) % hotelImages.length)}
          >
            View More Images
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Hotel Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {hotelData.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Hotel Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotelData.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {getAmenityIcon(amenity)}
                      </div>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Features */}
            <Card>
              <CardHeader>
                <CardTitle>Room Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {hotelData.roomFeatures.map((feature, idx) => (
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
                  {hotelData.inclusions.map((item, idx) => (
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
                  {hotelData.exclusions.map((item, idx) => (
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
                <CardTitle>Hotel Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {hotelData.policies.map((policy, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Nearby Attractions */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Attractions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hotelData.nearbyAttractions.map((attraction, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="font-medium">{attraction.name}</span>
                      <span className="text-muted-foreground">{attraction.distance}</span>
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
                <CardTitle>Book Your Stay</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Online Booking Form */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Make a Reservation</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="check-in">Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="check-in"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="check-out">Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="check-out"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          disabled={(date) => !checkIn || date <= checkIn}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="num-rooms">Number of Rooms</Label>
                    <Input
                      id="num-rooms"
                      type="number"
                      min="1"
                      max="10"
                      value={numRooms}
                      onChange={(e) => setNumRooms(Math.max(1, parseInt(e.target.value) || 1))}
                    />
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Price per night:</span>
                      <span className="font-semibold">₹{pricePerNight.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Number of rooms:</span>
                      <span className="font-semibold">{numRooms}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Number of nights:</span>
                      <span className="font-semibold">{nights || 1}</span>
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

                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => {
                      if (!checkIn || !checkOut) {
                        alert("Please select check-in and check-out dates");
                        return;
                      }
                      navigate("/checkout", {
                        state: {
                          type: "hotel",
                          name: hotelData.name,
                          price: totalAmount,
                          quantity: numRooms,
                          checkIn: format(checkIn, "PPP"),
                          checkOut: format(checkOut, "PPP"),
                          location: hotelData.location,
                        },
                      });
                    }}
                  >
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
                      placeholder="Any special requirements..."
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
                    <span className="text-sm">booking@grandpalace.com</span>
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

export default HotelDetail;
