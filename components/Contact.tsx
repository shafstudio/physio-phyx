"use client";

import { useState, FormEvent } from "react";

interface ContactInfo {
  icon: string;
  title: string;
  lines: string[];
}

const contactInfo: ContactInfo[] = [
  {
    icon: "location_on",
    title: "Visit Us",
    lines: ["123 Phyx Road, Bankstown", "Sydney, NSW 2200"],
  },
  {
    icon: "mail",
    title: "Contact",
    lines: ["hello@physiophyx.com", "+61 (03) 9123 4567"],
  },
  {
    icon: "schedule",
    title: "Hours",
    lines: ["Mon - Fri: 8am - 6pm", "Sat: 9am - 1pm"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6 md:px-10 max-w-4xl">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Get in Touch
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1c140d]">
            Book an Appointment
          </h2>
        </div>
        <div className="bg-background-light p-8 md:p-12 border border-gray-100 mb-16 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full p-3 bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors rounded-none"
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="w-full p-3 bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors rounded-none"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full p-3 bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors rounded-none"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E.g. Your@email.com"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full p-3 bg-white border border-gray-200 focus:border-primary focus:ring-0 outline-none transition-colors rounded-none resize-none"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here!"
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                className="w-full md:w-auto px-12 py-4 bg-[#1c140d] hover:bg-primary text-white font-bold transition-all rounded-none uppercase tracking-widest text-sm"
                type="submit"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-gray-100 pt-12">
          {contactInfo.map((info) => (
            <div key={info.title}>
              <span className="material-symbols-outlined text-3xl text-primary mb-4">
                {info.icon}
              </span>
              <h4 className="text-sm font-bold text-[#1c140d] uppercase tracking-wider mb-2">
                {info.title}
              </h4>
              <p className="text-gray-500 leading-relaxed">
                {info.lines.map((line, index) => (
                  <span key={index}>
                    {info.icon === "mail" && index < 2 ? (
                      <a
                        className="hover:text-primary transition-colors"
                        href={index === 0 ? `mailto:${line}` : `tel:${line}`}
                      >
                        {line}
                      </a>
                    ) : (
                      line
                    )}
                    {index < info.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
