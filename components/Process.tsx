import type { ProcessStep } from "@/types";

const processSteps: ProcessStep[] = [
  {
    step: 1,
    icon: "clinical_notes",
    title: "Initial Exam",
    description: "We start with a comprehensive assessment to understand your history.",
  },
  {
    step: 2,
    icon: "edit_document",
    title: "Custom Plan",
    description: "You receive a personalized treatment roadmap designed for your goals.",
  },
  {
    step: 3,
    icon: "physical_therapy",
    title: "Treatment",
    description: "Hands-on therapy and guided exercises to rebuild strength.",
  },
  {
    step: 4,
    icon: "check_circle",
    title: "Maintenance",
    description: "We equip you with the tools to prevent future injury and stay active.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="process">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">How It Works</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c140d]">Your Journey to Recovery</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gray-200 -z-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step) => (
              <div key={step.step} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 mb-6 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c140d] mb-2">{step.step}. {step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
