interface PhilosophyCard {
  icon: string;
  title: string;
  description: string;
}

const philosophyCards: PhilosophyCard[] = [
  {
    icon: "person_check",
    title: "Patient-Centered",
    description: "Every body is unique. Your treatment plan is custom-tailored to your specific anatomy and goals.",
  },
  {
    icon: "science",
    title: "Science-Backed",
    description: "We stay at the forefront of physiotherapeutic research to bring you the most effective treatments available.",
  },
  {
    icon: "self_improvement",
    title: "Empowerment",
    description: "Education is a key part of our therapy. We teach you how to maintain your health long after you leave our clinic.",
  },
  {
    icon: "spa",
    title: "Compassionate Care",
    description: "We provide a safe, supportive environment where you can feel comfortable sharing your health journey.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="py-24 bg-background-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c140d] mb-8">
              A Holistic Approach <br /> to Healing
            </h2>
            <div className="space-y-6 text-base md:text-lg leading-loose font-light text-gray-600">
              <p>
                At PhysioLife, we believe that pain is often a symptom of a larger story your body is trying to tell. Standard treatments often focus solely on the &apos;where&apos;—where it hurts.
              </p>
              <p>We focus on the &apos;why&apos;.</p>
              <p>
                By understanding the root cause of your discomfort—whether it&apos;s biomechanical, lifestyle-related, or post-traumatic—we can design a recovery roadmap that provides long-lasting relief and improved mobility, not just a temporary fix.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophyCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-8 border border-gray-100 shadow-sm hover:border-primary/50 transition-colors duration-300 group h-full flex flex-col"
              >
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1c140d] mb-3">{card.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
