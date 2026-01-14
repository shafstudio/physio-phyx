import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-24 bg-background-light">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1c140d] mb-6">Ready to move without pain?</h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto font-light">
          Take the first step towards a healthier, more active life. Schedule your initial assessment with Dr. Mitchell today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="flex h-14 min-w-[200px] items-center justify-center bg-primary px-8 text-base font-bold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 rounded-none"
          >
            Book Appointment
          </Link>
          <Link
            href="/#contact"
            className="flex h-14 min-w-[200px] items-center justify-center border border-[#1c140d] px-8 text-base font-bold text-[#1c140d] transition-colors hover:bg-[#1c140d] hover:text-white rounded-none"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
