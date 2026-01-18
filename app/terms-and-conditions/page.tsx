import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - PhysioPhyx",
  description: "Terms and Conditions for PhysioPhyx physiotherapy services",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-b from-[#E8FCFA] to-white">
          <div className="max-w-[1440px] mx-auto px-6 md:px-10">
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1c140d] mb-4">
              Terms and Conditions
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
                  Welcome to PhysioPhyx. These Terms and Conditions govern your use of our website and services. By accessing our website or using our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy. These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>

              {/* Services Provided */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Services Provided
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  PhysioPhyx provides physiotherapy and related healthcare services, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li>Physical therapy and rehabilitation services</li>
                  <li>Sports injury treatment and prevention</li>
                  <li>Geriatric mobility and wellness programs</li>
                  <li>Manual therapy and therapeutic exercises</li>
                  <li>Health assessments and consultations</li>
                  <li>Educational resources and wellness advice</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  All services are provided by licensed and qualified physiotherapy professionals in accordance with applicable professional standards and regulations.
                </p>
              </div>

              {/* Appointments and Bookings */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Appointments and Bookings
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Scheduling</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Appointments can be scheduled through our website, by phone, or in person. We will confirm your appointment via email or phone. You are responsible for providing accurate contact information and updating us of any changes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Cancellations and Rescheduling</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We require at least 24 hours' notice for appointment cancellations or rescheduling. Failure to provide adequate notice or missing an appointment without prior notification may result in a cancellation fee. We reserve the right to charge up to the full session fee for missed appointments.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Late Arrivals</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you arrive late for your appointment, we will do our best to accommodate you. However, late arrivals may result in a shortened session to avoid delays for other patients. You will be charged for the full scheduled appointment time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Payment Terms
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Payment is due at the time of service unless prior arrangements have been made. We accept cash, credit cards, debit cards, and insurance payments where applicable.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Insurance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      If you are using insurance coverage, you are responsible for verifying your benefits and understanding your coverage. While we will assist with insurance claims, you remain responsible for any amounts not covered by your insurance, including deductibles, co-payments, and non-covered services.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1c140d] mb-3">Outstanding Balances</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Outstanding balances must be paid within 30 days of billing. Failure to pay may result in the suspension of services and referral to a collection agency. You will be responsible for all collection costs, including reasonable attorney fees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Patient Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Patient Responsibilities
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  As a patient, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li>Provide accurate and complete medical history and health information</li>
                  <li>Inform us of any changes in your health status or medications</li>
                  <li>Follow the treatment plan and home exercise programs prescribed by your physiotherapist</li>
                  <li>Ask questions if you do not understand any aspect of your treatment</li>
                  <li>Treat our staff and other patients with respect and courtesy</li>
                  <li>Arrive on time for scheduled appointments</li>
                  <li>Notify us of any concerns or adverse reactions to treatment immediately</li>
                  <li>Comply with our policies regarding cancellations, payment, and conduct</li>
                </ul>
              </div>

              {/* Professional Standards */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Professional Standards
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Our physiotherapists are licensed professionals who adhere to the highest standards of care. However, you acknowledge that:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li>Physiotherapy is not an exact science and results cannot be guaranteed</li>
                  <li>Individual outcomes may vary based on numerous factors including adherence to treatment plans</li>
                  <li>Your physiotherapist will exercise professional judgment in recommending treatments</li>
                  <li>You have the right to refuse any treatment or to seek a second opinion</li>
                  <li>Treatment plans may be modified based on your progress and response to therapy</li>
                </ul>
              </div>

              {/* Informed Consent */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Informed Consent
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you consent to receive physiotherapy treatment. Your physiotherapist will explain the nature of the treatment, potential risks and benefits, and alternative treatments available. You have the right to ask questions and to refuse treatment at any time. While physiotherapy is generally safe, you acknowledge that certain risks may be associated with treatment, including temporary soreness, discomfort, or in rare cases, injury.
                </p>
              </div>

              {/* Confidentiality and Privacy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Confidentiality and Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to protecting your privacy and maintaining the confidentiality of your health information in accordance with applicable privacy laws and regulations. Your personal and health information will only be collected, used, and disclosed as outlined in our Privacy Policy and as permitted or required by law. You have the right to access your health records and to request corrections to any inaccurate information.
                </p>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Intellectual Property
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on our website, including text, graphics, logos, images, videos, and software, is the property of PhysioPhyx or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without our express written permission.
                </p>
              </div>

              {/* User Conduct */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  User Conduct
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  When using our website or services, you agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit any harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our website or services</li>
                  <li>Use our services for any illegal or unauthorized purpose</li>
                  <li>Harass, threaten, or abuse our staff or other patients</li>
                  <li>Provide false or misleading information</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To the fullest extent permitted by law, PhysioPhyx and its employees, contractors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services or website, even if we have been advised of the possibility of such damages.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our total liability for any claims arising from these Terms and Conditions or your use of our services shall not exceed the amount you have paid for services in the six months preceding the claim.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Disclaimer of Warranties
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our services and website are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. While we strive to provide high-quality services, we do not warrant that our services will be uninterrupted, error-free, or completely secure.
                </p>
              </div>

              {/* Indemnification */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Indemnification
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless PhysioPhyx, its employees, contractors, and affiliates from any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorney fees) arising from your violation of these Terms and Conditions, your use of our services, or your violation of any rights of another party.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Termination
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason in our sole discretion. You may terminate your use of our services at any time by discontinuing use and canceling any scheduled appointments.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Governing Law and Dispute Resolution
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which PhysioPhyx operates, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Any disputes arising from these Terms and Conditions or your use of our services shall be resolved through good faith negotiations. If negotiations fail, disputes may be resolved through mediation or arbitration before resorting to litigation, as permitted by applicable law.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Severability
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving its intent.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Changes to These Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes your acceptance of the modified terms. We encourage you to review these Terms and Conditions periodically.
                </p>
              </div>

              {/* Entire Agreement */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Entire Agreement
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms and Conditions, together with our Privacy Policy and any other legal notices or agreements published on our website, constitute the entire agreement between you and PhysioPhyx regarding your use of our services and supersede all prior agreements and understandings.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-[#1c140d] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-[#E8FCFA] p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>PhysioPhyx</strong></p>
                  <p className="text-gray-600">Email: info@physiophyx.com</p>
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
