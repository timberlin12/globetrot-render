import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import contactHero from '@/assets/contact-hero.jpg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123 Travel Street, Tourism District', 'Mumbai, Maharashtra 400001, India'],
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 87654 32109'],
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@travelworld.com', 'support@travelworld.com'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={contactHero}
          alt="Contact TravelWorld"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to help plan your perfect journey
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reach out to us for any queries, bookings, or travel assistance. 
                  Our team is always ready to help you plan your dream vacation.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="group relative bg-card border-2 border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-large hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="bg-gradient-to-br from-primary to-primary-dark p-3.5 rounded-lg shadow-medium group-hover:shadow-large transition-shadow duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border-2 border-border/50 shadow-large sticky top-24">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="mt-2 h-12 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="mt-2 h-12 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="mt-2 h-12 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-foreground font-medium">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help you?"
                        className="mt-2 h-12 border-border/50 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-foreground font-medium">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your travel plans..."
                        className="mt-2 min-h-[150px] border-border/50 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold bg-gradient-to-r from-primary to-primary-dark hover:shadow-large transition-all duration-300">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Find Us Here
          </h2>
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-large">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6987097422457!2d72.8776559!3d19.0759899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63d5c0e8e5b%3A0x5c54826f4d1a4c8e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TravelWorld Office Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
