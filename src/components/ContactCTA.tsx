import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get in touch with our travel experts to plan your perfect getaway. We're here to help make your dream vacation a reality.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Call Us</h3>
              <a href="tel:+911234567890" className="hover:underline">+91 123 456 7890</a>
              <a href="tel:+919876543210" className="hover:underline">+91 987 654 3210</a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Email Us</h3>
              <a href="mailto:info@wanderlux.com" className="hover:underline">info@wanderlux.com</a>
              <a href="mailto:bookings@wanderlux.com" className="hover:underline">bookings@wanderlux.com</a>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-semibold">Visit Us</h3>
              <p className="text-sm">123 Travel Street</p>
              <p className="text-sm">New Delhi, India 110001</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Contact Us Now
              </Button>
            </Link>
            <Link to="/tours">
              <Button size="lg" variant="outline" className="min-w-[200px] bg-white/10 border-white/30 hover:bg-white/20 text-white">
                Browse Tours
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
