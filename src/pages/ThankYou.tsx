import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Home, Mail, Phone } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any booking data from localStorage
    localStorage.removeItem('bookingData');
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Icon */}
            <div className="text-center mb-8 animate-fade-in">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Thank You for Your Booking!
              </h1>
              <p className="text-xl text-muted-foreground">
                Your reservation has been confirmed successfully
              </p>
            </div>

            {/* Confirmation Details Card */}
            <Card className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b">
                    <h2 className="text-2xl font-semibold mb-2">Booking Confirmed</h2>
                    <p className="text-muted-foreground">
                      A confirmation email has been sent to your email address with all the details.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                      <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Check Your Email</h3>
                        <p className="text-sm text-muted-foreground">
                          We've sent you a confirmation email with your booking details, itinerary, and payment receipt.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-secondary/50 rounded-lg">
                      <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Need Help?</h3>
                        <p className="text-sm text-muted-foreground">
                          Our support team is available 24/7. Contact us at{" "}
                          <a href="tel:+1234567890" className="text-primary hover:underline">
                            +1 (234) 567-890
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <h3 className="font-semibold mb-3">What's Next?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>You'll receive a detailed itinerary within 24 hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Our team will contact you 48 hours before your booking date</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Check your spam folder if you don't see our email in your inbox</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                onClick={() => navigate("/")}
                className="gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
