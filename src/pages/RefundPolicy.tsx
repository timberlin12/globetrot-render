import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import heroImage from '@/assets/hero-manali.jpg';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Refund Policy - WanderLux Travel</title>
        <meta name="description" content="Learn about WanderLux Travel's refund policy, cancellation terms, and procedures for tour packages, hotels, and transport bookings." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Refund Policy</h1>
          <p className="text-lg md:text-xl opacity-95 drop-shadow-md">Understanding our cancellation and refund procedures</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              At WanderLux Travel, we understand that travel plans can change unexpectedly. This Refund Policy outlines 
              the terms and conditions for cancellations and refunds for our tour packages, hotel bookings, and transport 
              services. Please read this policy carefully before making a booking.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              All refund requests must be submitted in writing via email to refunds@wanderlux.travel with your booking 
              reference number and reason for cancellation.
            </p>
          </div>

          {/* Tour Package Refunds */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">1. Tour Package Cancellations</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">1.1 Cancellation by Customer:</strong> The following cancellation 
                charges apply based on the number of days before the tour departure date:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-semibold text-foreground">Cancellation Period</span>
                  <span className="font-semibold text-foreground">Cancellation Charge</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>More than 45 days before departure</span>
                  <span className="font-semibold text-foreground">10% of total cost</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>31-45 days before departure</span>
                  <span className="font-semibold text-foreground">25% of total cost</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>21-30 days before departure</span>
                  <span className="font-semibold text-foreground">50% of total cost</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>15-20 days before departure</span>
                  <span className="font-semibold text-foreground">75% of total cost</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Less than 15 days before departure</span>
                  <span className="font-semibold text-destructive">100% (No refund)</span>
                </div>
              </div>
              <p>
                <strong className="text-foreground">1.2 Peak Season Cancellations:</strong> During peak travel seasons 
                (December-January, April-May), cancellation charges may be higher. Cancellations made less than 21 days 
                before departure during peak season will result in 100% cancellation charges.
              </p>
              <p>
                <strong className="text-foreground">1.3 Group Bookings:</strong> For group bookings (10+ people), special 
                cancellation terms apply. Please refer to your group booking contract for specific cancellation policies.
              </p>
            </div>
          </div>

          {/* Hotel Booking Refunds */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">2. Hotel Booking Cancellations</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">2.1 Standard Cancellation Policy:</strong> Hotel cancellation charges 
                vary by property and booking type:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong className="text-foreground">Free Cancellation:</strong> Available up to 7 days before check-in for most properties</li>
                <li><strong className="text-foreground">7-3 days before check-in:</strong> 25% cancellation charge</li>
                <li><strong className="text-foreground">2-3 days before check-in:</strong> 50% cancellation charge</li>
                <li><strong className="text-foreground">Less than 48 hours or no-show:</strong> 100% cancellation charge (no refund)</li>
              </ul>
              <p>
                <strong className="text-foreground">2.2 Non-Refundable Bookings:</strong> Special promotional rates and 
                advance purchase bookings are typically non-refundable. This will be clearly indicated during the booking 
                process.
              </p>
              <p>
                <strong className="text-foreground">2.3 Property-Specific Policies:</strong> Some hotels may have different 
                cancellation policies. Always check the specific cancellation terms displayed during booking confirmation.
              </p>
            </div>
          </div>

          {/* Transport Service Refunds */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">3. Transport Service Cancellations</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">3.1 Vehicle Rental Cancellations:</strong> For car rentals and 
                private vehicle bookings:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong className="text-foreground">More than 72 hours before pickup:</strong> Full refund minus 5% processing fee</li>
                <li><strong className="text-foreground">48-72 hours before pickup:</strong> 50% refund</li>
                <li><strong className="text-foreground">24-48 hours before pickup:</strong> 25% refund</li>
                <li><strong className="text-foreground">Less than 24 hours or no-show:</strong> No refund</li>
              </ul>
              <p>
                <strong className="text-foreground">3.2 Airport Transfers:</strong> Airport pickup and drop services can 
                be cancelled up to 24 hours before scheduled time for a full refund. Cancellations within 24 hours are 
                subject to 50% cancellation charge.
              </p>
              <p>
                <strong className="text-foreground">3.3 Multi-Day Vehicle Bookings:</strong> For bookings of 7 days or more, 
                special cancellation terms apply. Contact our support team for details.
              </p>
            </div>
          </div>

          {/* Refund Processing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">4. Refund Processing</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">4.1 Processing Time:</strong> Approved refunds are processed within 
                7-10 business days from the date of cancellation approval. The refund will be credited to the original 
                payment method used during booking.
              </p>
              <p>
                <strong className="text-foreground">4.2 Bank Processing:</strong> After we process the refund, your bank 
                or payment provider may take an additional 5-7 business days to reflect the amount in your account. We 
                are not responsible for delays by financial institutions.
              </p>
              <p>
                <strong className="text-foreground">4.3 Payment Gateway Charges:</strong> Payment gateway processing fees 
                (typically 2-3% of booking value) are non-refundable and will be deducted from your refund amount.
              </p>
              <p>
                <strong className="text-foreground">4.4 Refund Confirmation:</strong> You will receive an email confirmation 
                once your refund has been processed, including the refund amount and expected timeline for credit to your account.
              </p>
            </div>
          </div>

          {/* Cancellation by WanderLux */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">5. Cancellations by WanderLux Travel</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">5.1 Full Refund Scenarios:</strong> We may need to cancel your booking 
                due to circumstances beyond our control. In such cases, you will receive a full refund or alternative 
                arrangements of equal or greater value:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Natural disasters, severe weather conditions, or environmental hazards</li>
                <li>Political unrest, civil disturbances, or government restrictions</li>
                <li>Insufficient participant numbers for group tours (minimum 4 participants required)</li>
                <li>Service provider bankruptcy or inability to fulfill services</li>
                <li>Health emergencies or pandemic-related restrictions</li>
              </ul>
              <p>
                <strong className="text-foreground">5.2 Alternative Options:</strong> When we cancel your booking, you may 
                choose between:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Full refund to your original payment method</li>
                <li>Credit voucher for 110% of your booking value (valid for 12 months)</li>
                <li>Rebooking to alternative dates at no additional charge</li>
              </ul>
              <p>
                <strong className="text-foreground">5.3 Compensation:</strong> WanderLux Travel is not liable for any 
                additional expenses incurred due to cancellation, including but not limited to flight tickets, visa fees, 
                or other travel arrangements made independently.
              </p>
            </div>
          </div>

          {/* Special Circumstances */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">6. Special Circumstances</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">6.1 Medical Emergencies:</strong> In case of medical emergencies 
                requiring cancellation, you must provide a medical certificate from a registered practitioner. We may 
                waive or reduce cancellation charges at our discretion based on the circumstances.
              </p>
              <p>
                <strong className="text-foreground">6.2 Travel Insurance:</strong> We strongly recommend purchasing 
                comprehensive travel insurance that covers trip cancellations. Claims related to illness, accidents, or 
                other covered events should be directed to your insurance provider.
              </p>
              <p>
                <strong className="text-foreground">6.3 Force Majeure:</strong> In situations of force majeure (acts of God, 
                war, terrorism, pandemic, government restrictions), standard cancellation charges may be waived, and 
                alternative arrangements or credits will be offered.
              </p>
              <p>
                <strong className="text-foreground">6.4 Partial Cancellations:</strong> For group bookings, if some members 
                cancel while others continue, the cancellation charges apply only to the cancelled members. However, if this 
                reduces the group below minimum requirements, additional charges may apply to remaining members.
              </p>
            </div>
          </div>

          {/* Modification vs Cancellation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">7. Modifications vs. Cancellations</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">7.1 Date Changes:</strong> Changing your travel dates without cancelling 
                may incur lower fees than full cancellation. Date change fees typically range from ₹500-₹2,000 depending on 
                the service and timing.
              </p>
              <p>
                <strong className="text-foreground">7.2 Itinerary Modifications:</strong> Minor modifications to your itinerary 
                (hotel upgrades, activity changes) may be possible without cancellation charges, subject to availability and 
                price differences.
              </p>
              <p>
                <strong className="text-foreground">7.3 Transferring Bookings:</strong> Bookings may be transferred to another 
                person with at least 15 days' notice and a transfer fee of ₹1,000. The new traveler must meet all requirements 
                for the booking.
              </p>
            </div>
          </div>

          {/* How to Request a Refund */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">8. How to Request a Refund</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>To request a cancellation and refund, please follow these steps:</p>
              <ol className="list-decimal pl-8 space-y-2">
                <li>Send an email to <strong className="text-foreground">refunds@wanderlux.travel</strong> from your registered email address</li>
                <li>Include your booking reference number, name, and contact information</li>
                <li>Clearly state the reason for cancellation</li>
                <li>Provide any supporting documents (medical certificates, if applicable)</li>
                <li>Specify your preferred refund method (original payment method or credit voucher)</li>
              </ol>
              <p className="mt-4">
                Our refund team will review your request and respond within 2-3 business days with confirmation of your 
                refund amount and processing timeline.
              </p>
            </div>
          </div>

          {/* Exceptions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">9. Non-Refundable Items</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>The following items are typically non-refundable:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Visa application fees and processing charges</li>
                <li>Travel insurance premiums (refund policies apply as per insurance provider)</li>
                <li>Airport taxes and fuel surcharges (unless airline allows refund)</li>
                <li>Non-refundable promotional bookings clearly marked during purchase</li>
                <li>Payment gateway and transaction processing fees</li>
                <li>Special permits and entrance fees already paid to authorities</li>
              </ul>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">10. Policy Updates</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We reserve the right to modify this refund policy at any time. Changes will be effective immediately upon 
                posting to our website. Bookings made before policy changes will be governed by the policy in effect at 
                the time of booking.
              </p>
              <p>
                In case of disputes regarding refunds, our decisions shall be final and binding, subject to applicable 
                consumer protection laws.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Refund Support</h2>
            <p className="text-muted-foreground mb-4">
              For questions about cancellations, refunds, or to submit a refund request, please contact our refund support team:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Refund Email:</strong> refunds@wanderlux.travel</p>
              <p><strong className="text-foreground">Customer Support:</strong> +91 98765 43210 (Mon-Sat, 9 AM - 6 PM)</p>
              <p><strong className="text-foreground">WhatsApp Support:</strong> +91 98765 43210</p>
              <p><strong className="text-foreground">Office Address:</strong> 123 Travel Street, Connaught Place, New Delhi - 110001, India</p>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-foreground">
                <strong>💡 Pro Tip:</strong> Consider purchasing travel insurance with trip cancellation coverage for maximum 
                protection against unforeseen circumstances. This can help you recover costs in situations not covered by 
                our standard refund policy.
              </p>
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

export default RefundPolicy;
