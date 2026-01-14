"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden py-40">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            alt="Physiotherapist assisting patient with shoulder exercise in modern clinic"
            className="w-full h-full object-cover"
            src="/heroImage.jpg"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-12 bg-primary"></span>
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Reclaim Your Life
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8 tracking-tight"
          >
            Movement is <br />
            <span className="text-primary">Medicine.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-xl leading-relaxed"
          >
            Expert physiotherapy tailored to your physiology. We don&apos;t just
            treat symptoms; we build the foundation for your long-term recovery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              className="flex items-center justify-center px-10 py-2 bg-primary hover:bg-primary-dark text-white font-bold text-base transition-all rounded-none hover:shadow-lg hover:-translate-y-0.5"
              href="#contact"
            >
              Start Recovery
            </a>
            <a
              className="flex items-center justify-center px-10 py-2 bg-transparent hover:bg-white text-white border border-white hover:text-black font-bold text-base transition-all rounded-none hover:shadow-lg hover:-translate-y-0.5"
              href="#services"
            >
              Explore Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
