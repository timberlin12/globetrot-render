import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const MapSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-4 py-1.5 rounded-full">
            Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Find Us Here
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our office is conveniently located in the heart of the city
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button size="lg" className="min-w-[200px]">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-medium hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Office Address</h4>
                  <p className="text-muted-foreground text-sm">
                    123 Travel Street, Connaught Place<br />
                    New Delhi - 110001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-medium hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone Numbers</h4>
                  <p className="text-muted-foreground text-sm">
                    +91 98765 43210<br />
                    +91 11 2345 6789
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-medium hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Address</h4>
                  <p className="text-muted-foreground text-sm">
                    info@wanderlux.travel<br />
                    bookings@wanderlux.travel
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-medium hover-lift">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Working Hours</h4>
                  <p className="text-muted-foreground text-sm">
                    Mon - Sat: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="lg:col-span-2">
            <div className="w-full h-full min-h-[400px] rounded-xl overflow-hidden shadow-large">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9744807330615!2d77.21787931508085!3d28.63124949239538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97c94d%3A0xa2bd85c2300c75d8!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WanderLux Travel Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
