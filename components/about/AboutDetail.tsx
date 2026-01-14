import Image from "next/image";

export default function AboutDetail() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-6 md:px-10">
        <div className="relative">
          <div className="hidden lg:block absolute top-0 right-0 w-2/3 h-full bg-gray-50 -z-10"></div>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12">
              <div className="relative aspect-[3/4]">
                <Image
                  alt="Portrait of Dr. Alex Mercer"
                  className="w-full h-full object-cover shadow-2xl rounded-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFLYi-5-CO_0EEhh3yLpuYaBcXiFufbyhPUjSNuN1CO2xsWPEbppbowVfX1byLS3VAcq-DciVzjq2wRnBps8WN6L2GlwljN1Qd3geJ24UZKpGWFgxaoHH0519h9AkbW_I1bwmwL5uLUq09NocWTYNxQxaveEXxjLTdyqU4eKoG58hONdXPlkJO37mhGCKeaSuc5yWnMNd-IW-6_mWlkGUObZc6lk3vQskT_bvczE2su2aZcEzN153VQHXnZ5MZeRfUv7lo-01PwoI"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 lg:pl-10 pt-10 lg:pt-0">
              <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Meet the Specialist</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1c140d] mb-8 leading-tight">
                Dr. Alex Mercer, <span className="font-light text-gray-400">PhD</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-10">
                <div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over 15 years of clinical experience, Dr. Mercer specializes in sports rehabilitation and chronic pain management. His approach combines evidence-based techniques with a compassionate, patient-centered philosophy.
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you are an elite athlete recovering from an injury or someone struggling with daily back pain, Dr. Mercer creates personalized treatment plans that focus on long-term wellness, not just quick fixes.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-none">
                  <span className="material-symbols-outlined text-primary mr-2">school</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">PhD Physiotherapy</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-none">
                  <span className="material-symbols-outlined text-primary mr-2">local_hospital</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-600">Orthopedic Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
