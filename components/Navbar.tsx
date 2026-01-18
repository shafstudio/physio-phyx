"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#help", label: "How We Help" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-360 mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo-removebg-preview.png"
              alt="PhysioPhyx Logo"
              width={240}
              height={80}
              priority
              className="h-16 md:h-20 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="text-gray-600 hover:text-primary text-sm font-semibold transition-colors"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="px-6 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all duration-300 rounded-none"
              href="/#contact"
            >
              Book Appointment
            </Link>
          </div>
          <button
            className="md:hidden text-[#1c140d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-70 bg-white z-50 shadow-2xl md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                  <Image
                    src="/logo/logo-removebg-preview.png"
                    alt="PhysioPhyx Logo"
                    width={150}
                    height={50}
                    className="h-10 w-auto"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600"
                    aria-label="Close menu"
                  >
                    <span className="material-symbols-outlined text-2xl">
                      close
                    </span>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col py-6 px-6 gap-1 flex-grow">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 px-4 text-gray-700 hover:bg-primary/5 hover:text-primary font-semibold transition-colors rounded-sm"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="px-6 py-6 border-t border-gray-100">
                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold uppercase tracking-wider transition-colors"
                  >
                    Book Visit
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
