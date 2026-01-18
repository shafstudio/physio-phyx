import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PhysioPhyx",
  description: "Privacy Policy for PhysioPhyx physiotherapy services",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-b from-[#E8FCFA] to-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c140d] mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Last updated: January 14, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="max-w-4xl">

              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-600 leading-relaxed mb-4">
                  At PhysioPhyx, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Personal Information</h3>
                    <p className="text-gray-600 leading-relaxed mb-2">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                      <li>Book an appointment or consultation</li>
                      <li>Register for our services</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Contact us through our website</li>
                      <li>Fill out forms on our website</li>
                    </ul>
                    <p className="text-gray-600 leading-relaxed mt-3">
                      This information may include your name, email address, phone number, date of birth, address, medical history, and other health-related information necessary for providing physiotherapy services.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-600 leading-relaxed">
                      When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies installed on your device. We may also collect information about your browsing behavior, such as pages visited and links clicked.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li>Providing, maintaining, and improving our physiotherapy services</li>
                  <li>Scheduling and managing appointments</li>
                  <li>Communicating with you about your treatment and appointments</li>
                  <li>Processing payments and maintaining billing records</li>
                  <li>Sending you important updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Analyzing usage patterns to improve our website and services</li>
                  <li>Complying with legal obligations and protecting our legal rights</li>
                  <li>Preventing fraud and ensuring the security of our services</li>
                </ul>
              </div>

              {/* Disclosure of Your Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Disclosure of Your Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li><strong>Healthcare Providers:</strong> With other healthcare professionals involved in your care, as necessary for treatment purposes</li>
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf, such as payment processing, data analysis, email delivery, and IT services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to respond to legal processes, court orders, or government requests</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred to the new entity</li>
                  <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Data Security
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>

              {/* Your Privacy Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Your Privacy Rights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li><strong>Access:</strong> The right to request copies of your personal information</li>
                  <li><strong>Correction:</strong> The right to request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> The right to request deletion of your personal information, subject to legal obligations</li>
                  <li><strong>Restriction:</strong> The right to request restriction of processing your personal information</li>
                  <li><strong>Portability:</strong> The right to receive your personal information in a structured, commonly used format</li>
                  <li><strong>Objection:</strong> The right to object to our processing of your personal information</li>
                  <li><strong>Withdraw Consent:</strong> The right to withdraw consent where we rely on consent to process your information</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              {/* Cookies and Tracking Technologies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Third-Party Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Children's Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
                </p>
              </div>

              {/* Changes to This Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              {/* Contact Us */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-[#E8FCFA] p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>PhysioPhyx</strong></p>
                  <p className="text-gray-600">Email: privacy@physiophyx.com</p>
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                  <p className="text-gray-600">Address: 123 Wellness Street, Health City, HC 12345</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
