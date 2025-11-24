import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import heroImage from '@/assets/tours-hero.jpg';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Terms & Conditions - TravelWorld</title>
        <meta name="description" content="Read our terms and conditions for booking tours, hotels, and transport services with TravelWorld." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Terms & Conditions</h1>
          <p className="text-lg md:text-xl opacity-95 drop-shadow-md">Please read these terms carefully before using our services</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to TravelWorld. These Terms and Conditions govern your use of our website and services. 
              By accessing or using our services, you agree to be bound by these terms. If you do not agree with 
              any part of these terms, please do not use our services.
            </p>
          </div>

          {/* Booking Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">1. Booking Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">1.1 Booking Confirmation:</strong> All bookings are subject to availability and confirmation. 
                We reserve the right to decline any booking at our discretion.
              </p>
              <p>
                <strong className="text-foreground">1.2 Accuracy of Information:</strong> You are responsible for ensuring that all information 
                provided during booking is accurate and complete. This includes passenger names, contact details, and travel documents.
              </p>
              <p>
                <strong className="text-foreground">1.3 Booking Changes:</strong> Any changes to your booking must be requested in writing and 
                are subject to availability and additional charges. Changes requested within 7 days of departure may not be possible.
              </p>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">2. Cancellation Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">2.1 Cancellation by Customer:</strong> Cancellations must be made in writing. 
                The following cancellation charges apply:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>More than 30 days before departure: 10% of total booking value</li>
                <li>15-30 days before departure: 25% of total booking value</li>
                <li>7-14 days before departure: 50% of total booking value</li>
                <li>Less than 7 days before departure: 100% of total booking value (no refund)</li>
              </ul>
              <p>
                <strong className="text-foreground">2.2 Cancellation by TravelWorld:</strong> We reserve the right to cancel any booking 
                due to circumstances beyond our control. In such cases, we will provide a full refund or alternative arrangements.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">3. Payment Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">3.1 Payment Methods:</strong> We accept major credit cards, debit cards, and 
                online payment methods. All payments are processed securely through our payment gateway.
              </p>
              <p>
                <strong className="text-foreground">3.2 Payment Schedule:</strong> A deposit of 30% is required at the time of booking. 
                The remaining balance must be paid at least 15 days before departure.
              </p>
              <p>
                <strong className="text-foreground">3.3 Currency:</strong> All prices are quoted in Indian Rupees (INR) unless 
                otherwise stated. Exchange rates may vary for international bookings.
              </p>
            </div>
          </div>

          {/* Travel Insurance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">4. Travel Insurance</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We strongly recommend that all travelers purchase comprehensive travel insurance covering medical expenses, 
                trip cancellation, lost luggage, and personal liability. TravelWorld is not responsible for any losses 
                that could have been covered by travel insurance.
              </p>
            </div>
          </div>

          {/* Customer Responsibilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">5. Customer Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">5.1 Travel Documents:</strong> You are responsible for obtaining all necessary 
                travel documents including passports, visas, and permits. Failure to have proper documentation may result in 
                denied boarding or entry, for which we bear no responsibility.
              </p>
              <p>
                <strong className="text-foreground">5.2 Health Requirements:</strong> You must ensure that you meet all health 
                requirements for your destination, including vaccinations. Inform us of any medical conditions that may affect 
                your travel.
              </p>
              <p>
                <strong className="text-foreground">5.3 Behavior:</strong> You are expected to conduct yourself in a responsible 
                manner that does not endanger yourself or others. We reserve the right to terminate services without refund 
                for inappropriate behavior.
              </p>
            </div>
          </div>

          {/* Liability Limitations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">6. Liability and Limitations</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">6.1 Service Providers:</strong> We act as an intermediary between you and 
                various service providers (hotels, airlines, transport companies). We are not liable for the acts or omissions 
                of these third parties.
              </p>
              <p>
                <strong className="text-foreground">6.2 Force Majeure:</strong> We are not liable for failure to perform our 
                obligations due to circumstances beyond our control, including but not limited to natural disasters, war, 
                terrorism, strikes, or government actions.
              </p>
              <p>
                <strong className="text-foreground">6.3 Maximum Liability:</strong> Our liability for any claim shall not exceed 
                the total amount paid by you for the specific service in question.
              </p>
            </div>
          </div>

          {/* Complaints */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">7. Complaints and Disputes</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">7.1 During Travel:</strong> If you have a complaint during your trip, 
                you must report it immediately to our representative or the service provider so that steps can be taken 
                to resolve the issue.
              </p>
              <p>
                <strong className="text-foreground">7.2 After Travel:</strong> Any complaints after your trip must be submitted 
                in writing within 30 days of completion of services. We will investigate and respond within 14 days.
              </p>
              <p>
                <strong className="text-foreground">7.3 Governing Law:</strong> These terms are governed by Indian law, and 
                any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India.
              </p>
            </div>
          </div>

          {/* Privacy and Data Protection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">8. Privacy and Data Protection</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We respect your privacy and are committed to protecting your personal data. Your information will be used 
                solely for the purpose of providing our services and will not be shared with third parties except as 
                necessary to fulfill your booking. Please refer to our Privacy Policy for more details.
              </p>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">9. Changes to Terms</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify these terms and conditions at any time. Changes will be effective 
                immediately upon posting to our website. Your continued use of our services after changes constitutes 
                acceptance of the modified terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> info@wanderlux.travel</p>
              <p><strong className="text-foreground">Phone:</strong> +91 98765 43210</p>
              <p><strong className="text-foreground">Address:</strong> 123 Travel Street, New Delhi - 110001, India</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-sm text-muted-foreground border-t pt-8">
            <p>Last Updated: January 2025</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
