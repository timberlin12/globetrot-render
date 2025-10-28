import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { CreditCard, Lock, CheckCircle2, Calendar, Users, MapPin, Hotel, Car } from "lucide-react";

interface BookingData {
  type: "tour" | "hotel" | "transport";
  name: string;
  price: number;
  quantity: number;
  date?: string;
  checkIn?: string;
  checkOut?: string;
  pickupDate?: string;
  returnDate?: string;
  location?: string;
  duration?: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state as BookingData;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!bookingData) {
      navigate("/");
    }
  }, [bookingData, navigate]);

  if (!bookingData) {
    return null;
  }

  const getBookingIcon = () => {
    switch (bookingData.type) {
      case "tour":
        return <MapPin className="w-6 h-6 text-primary" />;
      case "hotel":
        return <Hotel className="w-6 h-6 text-primary" />;
      case "transport":
        return <Car className="w-6 h-6 text-primary" />;
    }
  };

  const getBookingDetails = () => {
    switch (bookingData.type) {
      case "tour":
        return {
          label: "Tour Package",
          details: [
            { label: "Tour Date", value: bookingData.date },
            { label: "Number of Persons", value: bookingData.quantity },
            { label: "Duration", value: bookingData.duration },
          ],
        };
      case "hotel":
        return {
          label: "Hotel Booking",
          details: [
            { label: "Check-in", value: bookingData.checkIn },
            { label: "Check-out", value: bookingData.checkOut },
            { label: "Number of Rooms", value: bookingData.quantity },
          ],
        };
      case "transport":
        return {
          label: "Transport Booking",
          details: [
            { label: "Pickup Date", value: bookingData.pickupDate },
            { label: "Return Date", value: bookingData.returnDate },
            { label: "Duration", value: `${bookingData.quantity} days` },
          ],
        };
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    setProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Booking Confirmed!",
      description: "Your booking has been successfully confirmed. Confirmation email sent.",
    });

    setProcessing(false);
    
    // Redirect to home page after successful booking
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const bookingDetails = getBookingDetails();
  const serviceFee = bookingData.price * 0.05;
  const taxes = bookingData.price * 0.12;
  const totalAmount = bookingData.price + serviceFee + taxes;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Complete Your Booking</h1>
            <p className="text-lg text-muted-foreground">
              Just a few more steps to confirm your reservation
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Forms */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Billing Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Billing Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Mumbai"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Maharashtra"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="400001"
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                    <Lock className="w-4 h-4 text-primary" />
                    <span className="text-sm">Your payment information is secure and encrypted</span>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name *</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      I agree to the terms and conditions, cancellation policy, and privacy policy.
                      I understand that my booking is subject to availability and confirmation.
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Booking Type */}
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {getBookingIcon()}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{bookingDetails.label}</p>
                      <h3 className="font-semibold">{bookingData.name}</h3>
                      {bookingData.location && (
                        <p className="text-sm text-muted-foreground">{bookingData.location}</p>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Booking Details */}
                  <div className="space-y-3">
                    {bookingDetails.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{detail.label}</span>
                        <span className="text-sm font-medium">{detail.value}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Subtotal</span>
                      <span className="text-sm font-medium">₹{bookingData.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Service Fee (5%)</span>
                      <span className="text-sm font-medium">₹{serviceFee.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Taxes (12%)</span>
                      <span className="text-sm font-medium">₹{taxes.toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">Total Amount</span>
                    <span className="text-2xl font-bold text-primary">
                      ₹{totalAmount.toLocaleString()}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={processing}
                  >
                    {processing ? "Processing..." : "Confirm Booking"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    You will receive a confirmation email after successful payment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
