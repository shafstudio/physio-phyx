import Image from "next/image";

export default function AboutMission() {
  return (
    <section className="w-full bg-white">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        <div className="relative w-full h-full min-h-[300px] md:min-h-auto bg-gray-200">
          <Image
            alt="Close-up of a therapist's hands gently supporting a patient's leg, emphasizing comfort and individualized attention."
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3lH18c1FRIhPSFnwXqeMWJWmhIHgjE7ajmmIqciXGwOhWalgtIGKwykDSwpX9mTSCtUwbo8RlyO7dBHK4MNT2eq6LKBtgAHLgVd1vcbwdJzHDlN4XEdHx7iJs56kPscCvkhElsw_XRpW9YD-jn9mg6XpSpfY_mP798rz-S2aZRX4FdjrZtPxNzd-8JY1mkPzWyipXRlAzR6e1OapMpeXXpt_gHnzyEdLFy4xPwo9SrxppxkoUTScprDveVoGaJLbSRciJd4fStps"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
        </div>
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Our Mission</span>
          <h2 className="text-3xl font-bold text-[#1c140d] mb-6">Restoring confidence through movement.</h2>
          <p className="text-gray-600 mb-8 font-light leading-relaxed">
            Established in 2012, PhysioLife began with a simple premise: physiotherapy should be personal, not transactional. We started in a small one-room clinic and have grown into a comprehensive rehabilitation center, but our core values remain the same.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
              <span className="text-[#1c140d]">Personalized 1-on-1 sessions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
              <span className="text-[#1c140d]">State-of-the-art rehabilitation equipment</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary mt-0.5">check_circle</span>
              <span className="text-[#1c140d]">Continuous post-treatment support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
