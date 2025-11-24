import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import heroImage from '@/assets/privacy-hero.jpg';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Privacy Policy - WanderLux Travel</title>
        <meta name="description" content="Read our privacy policy to understand how WanderLux Travel collects, uses, and protects your personal information." />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Privacy Policy</h1>
          <p className="text-lg md:text-xl opacity-95 drop-shadow-md">Your privacy is important to us</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              At WanderLux Travel, we are committed to protecting your privacy and ensuring the security of your 
              personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you use our website and services. Please read this policy carefully.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">1. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">1.1 Personal Information:</strong> We collect information that you 
                provide directly to us, including:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Name, email address, phone number, and postal address</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Passport details and date of birth (when required for bookings)</li>
                <li>Travel preferences and special requirements</li>
                <li>Communication preferences and marketing consent</li>
              </ul>
              <p>
                <strong className="text-foreground">1.2 Automatically Collected Information:</strong> When you visit our 
                website, we automatically collect certain information, including:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>IP address, browser type, and operating system</li>
                <li>Pages viewed, time spent on pages, and navigation patterns</li>
                <li>Referring website and search terms used</li>
                <li>Device information and unique identifiers</li>
              </ul>
              <p>
                <strong className="text-foreground">1.3 Cookies and Tracking Technologies:</strong> We use cookies, 
                web beacons, and similar technologies to enhance your experience, analyze usage, and deliver personalized 
                content. You can control cookies through your browser settings.
              </p>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">2. How We Use Your Information</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong className="text-foreground">Service Delivery:</strong> To process bookings, arrange travel services, and fulfill your requests</li>
                <li><strong className="text-foreground">Communication:</strong> To send booking confirmations, updates, and important travel information</li>
                <li><strong className="text-foreground">Customer Support:</strong> To respond to inquiries, resolve issues, and provide assistance</li>
                <li><strong className="text-foreground">Marketing:</strong> To send promotional offers, newsletters, and travel recommendations (with your consent)</li>
                <li><strong className="text-foreground">Improvement:</strong> To analyze usage patterns and improve our services, website, and user experience</li>
                <li><strong className="text-foreground">Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                <li><strong className="text-foreground">Security:</strong> To detect, prevent, and address fraud, security issues, and technical problems</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We may share your information with third parties in the following circumstances:</p>
              <p>
                <strong className="text-foreground">3.1 Service Providers:</strong> We share information with third-party 
                service providers who perform services on our behalf, including:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Hotels, airlines, and tour operators</li>
                <li>Payment processors and financial institutions</li>
                <li>Technology and hosting providers</li>
                <li>Marketing and analytics services</li>
              </ul>
              <p>
                <strong className="text-foreground">3.2 Legal Requirements:</strong> We may disclose information when 
                required by law, regulation, legal process, or governmental request.
              </p>
              <p>
                <strong className="text-foreground">3.3 Business Transfers:</strong> In the event of a merger, acquisition, 
                or sale of assets, your information may be transferred to the acquiring entity.
              </p>
              <p>
                <strong className="text-foreground">3.4 With Your Consent:</strong> We may share information with third 
                parties when you have given us explicit consent to do so.
              </p>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">4. Data Security</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Employee training on data protection and privacy</li>
                <li>Secure backup and disaster recovery systems</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we 
                strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">5. Data Retention</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this 
                policy, unless a longer retention period is required or permitted by law. Retention periods vary 
                depending on:
              </p>
              <ul className="list-disc pl-8 space-y-2">
                <li>The nature of the information and why it was collected</li>
                <li>Legal, regulatory, or contractual obligations</li>
                <li>Legitimate business purposes such as fraud prevention</li>
                <li>Your consent and preferences</li>
              </ul>
              <p>
                When information is no longer needed, we securely delete or anonymize it in accordance with our data 
                retention policies.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">6. Your Privacy Rights</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong className="text-foreground">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong className="text-foreground">Objection:</strong> Object to processing of your information for certain purposes</li>
                <li><strong className="text-foreground">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong className="text-foreground">Portability:</strong> Request transfer of your information to another service provider</li>
                <li><strong className="text-foreground">Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us using the information provided at the end of this policy.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">7. Children's Privacy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our services are not directed to children under the age of 18. We do not knowingly collect personal 
                information from children. If you are a parent or guardian and believe that your child has provided us 
                with personal information, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">8. International Data Transfers</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. 
                These countries may have different data protection laws. We ensure that appropriate safeguards are in 
                place to protect your information in accordance with this policy and applicable laws.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">9. Third-Party Links</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">10. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
                legal requirements, or for other reasons. We will notify you of any material changes by posting the 
                updated policy on our website and updating the "Last Updated" date. Your continued use of our services 
                after such changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12 p-6 bg-muted rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> privacy@wanderlux.travel</p>
              <p><strong className="text-foreground">Phone:</strong> +91 98765 43210</p>
              <p><strong className="text-foreground">Address:</strong> 123 Travel Street, Connaught Place, New Delhi - 110001, India</p>
              <p><strong className="text-foreground">Data Protection Officer:</strong> dpo@wanderlux.travel</p>
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

export default PrivacyPolicy;
