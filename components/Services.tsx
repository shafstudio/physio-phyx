import type { Service } from "@/types";

const services: Service[] = [
  {
    icon: "accessibility_new",
    title: "Manual Therapy",
    description: "Hands-on techniques including joint mobilization and soft tissue massage to reduce pain and increase range of motion.",
  },
  {
    icon: "sports_gymnastics",
    title: "Sports Rehabilitation",
    description: "Tailored programs for athletes of all levels to recover safely, address biomechanical issues, and return to peak performance.",
  },
  {
    icon: "healing",
    title: "Post-Op Recovery",
    description: "Guided rehabilitation following surgery (ACL, Rotator Cuff, Joint Replacement) to ensure proper healing and function.",
  },
  {
    icon: "self_improvement",
    title: "Pain Management",
    description: "Multidisciplinary management strategies including dry needling and education to alleviate long-term chronic pain.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#1c140d] text-white" id="services">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Expertise</h4>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Clinical <br/>Excellence</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
                We offer specialized treatments designed to facilitate recovery and enhance performance using state-of-the-art techniques.
              </p>
              <a
                className="inline-block bg-primary hover:bg-white hover:text-[#1c140d] text-white px-8 py-3 font-bold text-sm uppercase tracking-widest transition-colors rounded-none"
                href="#contact"
              >
                Book Appointment
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group bg-white/5 border border-white/10 hover:border-primary p-8 transition-colors duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="material-symbols-outlined text-4xl text-gray-500 group-hover:text-primary transition-colors">
                      {service.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
