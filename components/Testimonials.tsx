"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    quote: "I thought my running days were over after my injury. Dr. Mercer not only fixed my knee but taught me how to run better. I'm back on the trails and feeling stronger than ever before.",
    name: "Michael Chen",
    role: "Marathon Runner",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnhdkTlFnRHoXjoaxqm-QOS52ZjxbQ-_D0x9xhh8BPDHXeUbmURyVxqzNZFidWgpXwmw6e4O8mNSi3owf98e6RPWa27SxiMiMj-IN00eTrYx3j9Mkd4nC4Xu1qHkmXAdE1zyCeObzglgVxeecSKbpN3NmKcJjHoOfSqnDqYoKj0YDMFoTmv6D5PgqtpHdR6dUTzNbTnmkHYYYxY-QeA4Y3dcc4khNcZnkzGdDx_auKm31rwwuBE_CMEjfwYFq-UjN4JuLb_vZk0jw",
  },
  {
    quote: "After years of chronic back pain, I was skeptical about recovery. The personalized treatment plan changed my life. I'm now pain-free and more active than I've been in a decade.",
    name: "Sarah Martinez",
    role: "Office Professional",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBghBeWfgrj2ow_57nsHt8rJVo9fUcdRX5mmLKHuza3UrEPwOwMJIo1J8qco2B2CwKEDbTVQqYI5mIYaPhp8h7RvbGeshYEasf64SCQ1j5YoXohX9yyST1_cs0j7G6KEkOYD7bOW7TE8LevbBWArYkdfxNxA0jcFK6dxtjQ4dRJ73A20sA5IVURr1xOvkiJ_RRrBxl9jvQYKg3VkXOt1BjglNkBj033V2rx32el0gIXel9FXvIfBfGLmL2Wd9vDwzZ3jC-TRqQDz9U",
  },
  {
    quote: "The post-surgery rehabilitation was comprehensive and effective. I regained full shoulder mobility faster than expected. The team's expertise and encouragement made all the difference.",
    name: "James Wilson",
    role: "Construction Worker",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3UHCrz4-vzPN3u0vKcjYY8qxYX_p9sUb5d_PkisYyMNAfJmDk-FC3eCtBS2oynk8pl0w4y3rgEUG2E_BHkHni6LJCbxImzoPLeBRMJApErNusPL3-jjlJUeaKhfT8BgcPuFf6H8ZNgh0GvFmGXoLynRfLxmFsoqsHgogpt79J7dGHAXTYiXXPbTlARvIkA_cOUwNX50z5C5Y2qsZBSHXXdhqvp0BnpvFTMrwJ-m4_K47nHctqqizzQG23nxCesIKtm8yJlJGXIOM",
  },
  {
    quote: "As a senior, I was worried about falling. The balance and mobility program gave me confidence back. I can now walk independently and enjoy my daily activities without fear.",
    name: "Eleanor Thompson",
    role: "Retired Teacher",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWXKkUDU71l4kiWLpdF9iysTgadzoKUgIVPhkQKFnoyuBt-sqV9RPAtLQKrM0SYfnpywkZuv-e8ofML8g_rQNaJRvXT9w7WeBEcT8nfRBnKBcDDYh6fg8JpPyrhUrtwEc425HqFtNFAFh2LEH5DpW2_TZFjcfKSG9lTPklOZtzVCktVJ0BhTTZzibESE5l8yTqqgIuwUmRbzYChyY_4evzv2jTAwkiF-1cvpOB-Z9uBPbHydwVqapDoO3mZu3bmYlGwS5rs409BG4",
  },
  {
    quote: "The sports injury recovery program got me back on the field in record time. The attention to detail and focus on proper technique has made me a better athlete overall.",
    name: "David Park",
    role: "Professional Soccer Player",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLODAuceZdYPufRmmge3L5vL-lwWuL38j3Hr5wCs3IOTbzBFrXv9YdtRJRVV1kZJOeugPCiWrTyt-X8OxKs-yNxRuVYF8vCOdBzWTc_Ccoa2bNrbiebT-lm8C9OsiS5Qskz7GGEaUuUKFdK5OqVmhihYkPRS0XCjcnxIjFs2jJ8NPgmNQrV9YB6TGXVUfQQrIZLc8VgJLiBWHDP7MBRqEXnya8mCSnuE2qsD3jsqHZ-rJGiiTHZA7IgvC_FJdoaZySaivzMpv4tAA",
  },
  {
    quote: "Pregnancy took a toll on my body, but the postnatal physiotherapy helped me recover strength and address persistent pain. I feel like myself again and can fully enjoy motherhood.",
    name: "Priya Sharma",
    role: "New Mother",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnhdkTlFnRHoXjoaxqm-QOS52ZjxbQ-_D0x9xhh8BPDHXeUbmURyVxqzNZFidWgpXwmw6e4O8mNSi3owf98e6RPWa27SxiMiMj-IN00eTrYx3j9Mkd4nC4Xu1qHkmXAdE1zyCeObzglgVxeecSKbpN3NmKcJjHoOfSqnDqYoKj0YDMFoTmv6D5PgqtpHdR6dUTzNbTnmkHYYYxY-QeA4Y3dcc4khNcZnkzGdDx_auKm31rwwuBE_CMEjfwYFq-UjN4JuLb_vZk0jw",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background-light" id="testimonials">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Testimonials</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c140d]">What Our Patients Say</h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 [&>*:last-child]:mr-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-white p-8 shadow-lg border-t-4 border-primary h-full flex flex-col">
                    <span className="material-symbols-outlined text-5xl text-primary/20 mb-4">
                      format_quote
                    </span>
                    <div className="flex text-primary mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">
                          star
                        </span>
                      ))}
                    </div>
                    <blockquote className="text-base text-[#1c140d] leading-relaxed mb-6 italic grow">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="relative w-14 h-14 grayscale shrink-0">
                        <Image
                          alt={`Portrait of ${testimonial.name}`}
                          className="w-full h-full object-cover"
                          src={testimonial.image}
                          fill
                          sizes="56px"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-base text-[#1c140d]">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-primary uppercase tracking-wider font-bold">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-400 hover:text-primary hover:bg-gray-50 shadow-lg transition-colors border border-gray-200"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center bg-white text-gray-400 hover:text-primary hover:bg-gray-50 shadow-lg transition-colors border border-gray-200"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
