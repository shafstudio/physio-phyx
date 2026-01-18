import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "@/lib/constants";

interface ServiceContentProps {
  service: ServiceDetail;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* What to Expect */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2 p-6 bg-white border border-gray-100">
          <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-3">
            <span className="bg-primary h-6 w-1"></span>
            What to Expect
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.whatToExpect.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 border border-gray-100 hover:border-primary/30 transition-colors bg-white"
              >
                <div className="shrink-0 mt-1">
                  <div className="size-5 bg-primary flex items-center justify-center text-text-main">
                    <span className="material-symbols-outlined text-white text-sm font-bold">
                      check
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-text-main text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="p-6 bg-white border border-gray-100">
          <div className="mb-6 pb-6 border-b border-gray-100">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              {service.pricing.title}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-text-main">
                ${service.pricing.price}
              </span>
              <span className="text-gray-500 font-medium">/ session</span>
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <span className="material-symbols-outlined text-primary">
                schedule
              </span>
              <span>{service.pricing.duration} Duration</span>
            </div>
            {service.pricing.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-gray-700"
              >
                <span className="material-symbols-outlined text-primary">
                  {index === 0
                    ? "person"
                    : index === 1
                      ? "receipt_long"
                      : "event_available"}
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <Link
            href="/#contact"
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 uppercase tracking-wider transition-colors mb-4 flex items-center justify-center gap-2 group"
          >
            <span>Book Appointment</span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-lg">
              arrow_forward
            </span>
          </Link>
          <p className="text-center text-xs text-gray-400">
            {service.pricing.features[service.pricing.features.length - 1]}
          </p>
        </div>

        {/* Testimonial */}
        <div className="relative p-6 bg-primary/20 overflow-hidden border border-gray-100">
          <span className="material-symbols-outlined absolute top-4 left-4 text-6xl text-primary/20 pointer-events-none">
            format_quote
          </span>
          <div className="relative z-10 max-w-full">
            <p className="text-xl md:text-xl font-medium text-text-main italic mb-6">
              &quot;{service.testimonial.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 bg-gray-300 relative overflow-hidden">
                <Image
                  alt={service.testimonial.name}
                  className="w-full h-full object-cover grayscale"
                  src={service.testimonial.image}
                  fill
                  sizes="48px"
                />
              </div>
              <div>
                <p className="font-bold text-text-main">
                  {service.testimonial.name}
                </p>
                <p className="text-sm text-gray-500">
                  {service.testimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-3 p-6 bg-white border border-gray-100">
          <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-3">
            <span className="bg-primary h-6 w-1"></span>
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 border-b-4 border-primary shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-4">
                  {benefit.icon}
                </span>
                <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 p-6 bg-white border border-gray-100">
          <h3 className="text-xl font-bold text-text-main mb-6 flex items-center gap-3">
            <span className="bg-primary h-6 w-1"></span>
            Common Questions
          </h3>
          <div className="border-t border-gray-200">
            {service.faqs.map((faq, index) => (
              <details
                key={index}
                className="group py-4 border-b border-gray-200"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-text-main list-none">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed group-open:animate-fadeIn">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
