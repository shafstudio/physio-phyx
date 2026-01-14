"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import type { Stat } from "@/types";

const stats: Stat[] = [
  { value: "15+", label: "Years Experience" },
  { value: "2k+", label: "Happy Patients" },
  { value: "100%", label: "Dedication" },
];

export default function About() {
  return (
    <section className="py-24 bg-white relative" id="about">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <AnimatedSection className="w-full lg:w-1/2">
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              About the Expert
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1c140d] mb-6 leading-tight">
              Meet Dr. Alex Mercer
            </h2>
            <div className="w-20 h-1 bg-primary mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              With over 15 years of clinical experience, Dr. Mercer specializes in
              sports rehabilitation and chronic pain management. His approach
              combines evidence-based techniques with a compassionate,
              patient-centered philosophy.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Whether you are an elite athlete recovering from an injury or
              someone struggling with daily back pain, Dr. Mercer creates
              personalized treatment plans that focus on long-term wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 mb-8 border-t border-gray-100 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <Link
              className="inline-flex items-center gap-2 text-[#1c140d] font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors"
              href="/about"
            >
              View Credentials
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </AnimatedSection>
          <AnimatedSection className="w-full lg:w-1/2 relative" delay={0.2}>
            <div className="absolute bottom-4 -left-4 w-full h-full border-2 border-primary z-0 hidden md:block"></div>
            <div className="relative z-10 aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                alt="Portrait of Dr. Alex Mercer smiling in professional attire"
                className="w-full h-full object-cover shadow-none rounded-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFLYi-5-CO_0EEhh3yLpuYaBcXiFufbyhPUjSNuN1CO2xsWPEbppbowVfX1byLS3VAcq-DciVzjq2wRnBps8WN6L2GlwljN1Qd3geJ24UZKpGWFgxaoHH0519h9AkbW_I1bwmwL5uLUq09NocWTYNxQxaveEXxjLTdyqU4eKoG58hONdXPlkJO37mhGCKeaSuc5yWnMNd-IW-6_mWlkGUObZc6lk3vQskT_bvczE2su2aZcEzN153VQHXnZ5MZeRfUv7lo-01PwoI"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
