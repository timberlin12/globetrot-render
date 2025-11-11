import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Percent, Tag } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Summer Beach Escape",
    discount: "40% OFF",
    validUntil: "June 30, 2024",
    description: "Enjoy pristine beaches in Goa and Kerala with exclusive summer discounts.",
    image: "/images/hero-goa.jpg",
    badge: "Limited Time"
  },
  {
    id: 2,
    title: "Monsoon Magic Special",
    discount: "30% OFF",
    validUntil: "September 15, 2024",
    description: "Experience the lush greenery of Kerala and Manali during monsoon season.",
    image: "/images/hero-kerala.jpg",
    badge: "Seasonal"
  },
  {
    id: 3,
    title: "Early Bird Winter",
    discount: "25% OFF",
    validUntil: "December 31, 2024",
    description: "Book your winter getaway to Kashmir and Himachal early and save big.",
    image: "/images/hero-kashmir.jpg",
    badge: "Book Early"
  }
];

export const SpecialOffers = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Tag className="w-6 h-6 text-secondary" />
            <Badge variant="secondary" className="text-sm">Limited Time Offers</Badge>
          </div>
          <h2 className="text-4xl font-bold mb-4">Special Offers & Seasonal Deals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exclusive deals and seasonal packages designed to make your dream vacation more affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <Card key={offer.id} className="overflow-hidden hover-lift group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-destructive text-destructive-foreground font-bold text-lg px-4 py-2">
                    {offer.discount}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{offer.badge}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{offer.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Valid until {offer.validUntil}</span>
                </div>
                <Button className="w-full" size="lg">
                  <Percent className="w-4 h-4 mr-2" />
                  Grab This Deal
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
