import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, MapPin, Clock, Users, ArrowRight, Check, X, Phone, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";
import tourDetailHero from "@/assets/tour-detail-hero.jpg";
import heroKashmir from "@/assets/hero-kashmir.jpg";
import heroManali from "@/assets/hero-manali.jpg";
import heroKerala from "@/assets/hero-kerala.jpg";
import heroGoa from "@/assets/hero-goa.jpg";

const TourDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [date, setDate] = useState<Date>();
  const [numPersons, setNumPersons] = useState(1);
  const pricePerPerson = 15999;

  const tourImages = [
    tourDetailHero,
    heroKashmir,
    heroManali,
    heroKerala,
    heroGoa,
  ];

  const tourData = {
    name: "Amazing Kashmir Valley Tour",
    location: "Kashmir, India",
    pricePerPerson: pricePerPerson,
    duration: "5 Days / 4 Nights",
    maxPeople: 15,
    tourPlanning: [
      { name: "Delhi", type: "start" },
      { name: "Srinagar", type: "destination" },
      { name: "Gulmarg", type: "destination" },
      { name: "Pahalgam", type: "destination" },
      { name: "Delhi", type: "end" },
    ],
    description:
      "Experience the breathtaking beauty of Kashmir with our carefully curated tour package. Explore the stunning valleys, pristine lakes, and snow-capped mountains. This tour includes visits to the most iconic destinations in Kashmir, offering you an unforgettable journey through paradise on earth.",
    inclusions: [
      "Accommodation in 4-star hotels",
      "Daily breakfast and dinner",
      "All transfers and sightseeing by private vehicle",
      "Professional English-speaking guide",
      "Entry fees to monuments",
      "Airport pickup and drop",
    ],
    exclusions: [
      "International/Domestic airfare",
      "Personal expenses like tips, laundry, telephone calls",
      "Optional activities and tours",
      "Travel insurance",
      "Any meals not mentioned in inclusions",
    ],
    highlights: [
      "Shikara ride on Dal Lake",
      "Cable car ride in Gulmarg",
      "Visit to Betaab Valley",
      "Mughal Gardens tour",
      "Snow activities in Gulmarg",
      "Traditional Kashmiri cuisine experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description:
          "Arrive at Srinagar airport and transfer to your hotel. After check-in and rest, enjoy a relaxing Shikara ride on Dal Lake. Visit the famous Mughal Gardens including Nishat Bagh and Shalimar Bagh. Overnight stay in Srinagar.",
      },
      {
        day: 2,
        title: "Srinagar to Gulmarg",
        description:
          "After breakfast, drive to Gulmarg (2-3 hours). Take the Gondola cable car ride to Khilanmarg for stunning mountain views. Enjoy snow activities and explore the meadows. Return to Srinagar for overnight stay.",
      },
      {
        day: 3,
        title: "Srinagar to Pahalgam",
        description:
          "Drive to Pahalgam (3 hours) via Saffron fields and Awantipora ruins. Visit Betaab Valley and Aru Valley. Enjoy the scenic beauty and optional horse riding. Overnight in Pahalgam.",
      },
      {
        day: 4,
        title: "Pahalgam Exploration",
        description:
          "Full day to explore Pahalgam. Optional visit to Chandanwari and Baisaran meadows. Evening at leisure to explore local markets. Overnight in Pahalgam.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "After breakfast, drive back to Srinagar airport for your onward journey. Tour ends with beautiful memories.",
      },
    ],
    host: {
      name: "Rajesh Kumar",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      phone: "+91 98765 43210",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={tourImages[0]}
          alt="Tour Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{tourData.name}</h1>
            <p className="text-xl flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" />
              {tourData.location}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2">
            <img
              src={tourImages[selectedImage]}
              alt="Main tour"
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage((selectedImage + 1) % tourImages.length)}
            />
          </div>
          {tourImages.slice(1, 4).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Tour ${idx + 1}`}
              className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setSelectedImage(idx + 1)}
            />
          ))}
          <Button
            variant="secondary"
            className="h-48 w-full"
            onClick={() => setSelectedImage((selectedImage + 1) % tourImages.length)}
          >
            View More Images
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Tour Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{tourData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{tourData.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Max People</p>
                      <p className="font-semibold">{tourData.maxPeople}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <span className="text-primary font-bold">₹</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Per Person</p>
                      <p className="font-semibold">₹{tourData.pricePerPerson.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tour Planning */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  {tourData.tourPlanning.map((stop, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="px-4 py-2 bg-primary/10 rounded-lg font-medium">
                        {stop.name}
                      </div>
                      {idx < tourData.tourPlanning.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>About This Tour</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {tourData.description}
                </p>
              </CardContent>
            </Card>

            {/* Package Inclusions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tourData.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Package Exclusions */}
            <Card>
              <CardHeader>
                <CardTitle>What's Not Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tourData.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tour Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Tour Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tourData.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle>Detailed Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {tourData.itinerary.map((day, idx) => (
                    <AccordionItem key={idx} value={`day-${day.day}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                            {day.day}
                          </div>
                          <span className="font-semibold text-left">{day.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4 pl-16 text-muted-foreground">
                        {day.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Reservation */}
          <div className="space-y-6">
            {/* Reserve Your Activity */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Reserve Your Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Online Booking Form */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Online Booking</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="booking-date">Booking Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="booking-date"
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="num-persons">Number of Persons</Label>
                    <Input
                      id="num-persons"
                      type="number"
                      min="1"
                      max={tourData.maxPeople}
                      value={numPersons}
                      onChange={(e) => setNumPersons(Math.max(1, parseInt(e.target.value) || 1))}
                    />
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Price per person:</span>
                      <span className="font-semibold">₹{pricePerPerson.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Number of persons:</span>
                      <span className="font-semibold">{numPersons}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">Total Amount:</span>
                        <span className="text-2xl font-bold text-primary">
                          ₹{(pricePerPerson * numPersons).toLocaleString()}
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
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full" variant="outline">
                    Send Enquiry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tour Host */}
            <Card>
              <CardHeader>
                <CardTitle>Your Tour Host</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <img
                    src={tourData.host.image}
                    alt={tourData.host.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{tourData.host.name}</h4>
                    <p className="text-sm text-muted-foreground">Tour Guide</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <a
                    href={`tel:${tourData.host.phone}`}
                    className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {tourData.host.phone}
                  </a>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`tel:${tourData.host.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Host
                    </a>
                  </Button>
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

export default TourDetail;
