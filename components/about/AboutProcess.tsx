import type { ProcessStep } from "@/types";

const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "clinical_notes",
    title: "Assessment",
    description: "Comprehensive exam to understand your history and identify the root cause.",
  },
  {
    step: 2,
    icon: "edit_document",
    title: "Custom Plan",
    description: "Receiving a personalized roadmap designed specifically for your goals.",
  },
  {
    step: 3,
    icon: "physical_therapy",
    title: "Therapy",
    description: "Hands-on treatment and guided exercises to rebuild strength safely.",
  },
  {
    step: 4,
    icon: "check_circle",
    title: "Prevention",
    description: "Equipping you with tools and knowledge to stay active and injury-free.",
  },
];

export default function AboutProcess() {
  return (
    <section className="py-24 bg-surface-light relative" id="process">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 hidden lg:block"></div>
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Process</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c140d]">Your Journey to Recovery</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="bg-white p-8 border border-gray-100 shadow-lg text-center relative group hover:-translate-y-2 transition-transform duration-300"
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div
                  className={`w-16 h-16 mx-auto ${
                    step.step === 1
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "bg-white border-2 border-primary text-primary"
                  } rounded-full flex items-center justify-center text-xl font-bold mb-6 relative z-20`}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#1c140d] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
