import type { Stat } from "@/types";

const stats: Stat[] = [
  { value: "12+", label: "Years Experience" },
  { value: "5k+", label: "Patients Helped" },
  { value: "15", label: "Certifications" },
  { value: "100%", label: "Dedication" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-primary border-y border-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center text-center gap-1"
            >
              <span className="text-4xl font-bold text-white">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-neutral-100 font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
