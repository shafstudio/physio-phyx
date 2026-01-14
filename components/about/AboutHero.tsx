import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <span className="text-primary text-sm font-bold uppercase tracking-wider">Meet Dr. Sarah Mitchell</span>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1c140d] sm:text-5xl lg:text-6xl">
                Healing with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Precision &amp; Care</span>
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-gray-600 font-light max-w-xl">
              With over a decade of clinical experience, Dr. Sarah Mitchell combines evidence-based physiotherapy with a deeply personal approach to recovery. We don&apos;t just treat injuries; we empower you to reclaim your active lifestyle.
            </p>
            <div className="pt-4 flex gap-6">
              <div className="h-px w-20 bg-primary mt-3"></div>
              <p className="text-sm font-medium italic text-gray-500">
                &quot;My goal is to make myself obsolete in your life by giving you the tools to stay healthy.&quot;
              </p>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -right-4 -top-4 h-full w-full border-2 border-primary/30 z-0"></div>
            <div className="relative z-10 aspect-[4/5] w-full bg-gray-200 overflow-hidden">
              <Image
                alt="Dr. Sarah Mitchell engaging in warm, attentive conversation with a patient in a calming clinic environment."
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzoAqS9srGSTTaGSQ6ReSEAu9nwVvPr5qqFMuf-mXzqqXye2fhBdo8L2qPaUwOwkMv6QUypIeOD3yKZ5J3gPswQIJmyVfX_cQ0FfpHbFOSApGxAuysGjSHjXFH9KN0LL-u2_0_UVxO_XXTHOtJsIJpXtElxnFadAkJDLSz8-BIegX7iARjFkH6_PPQAdElYyf8UiJk7rT8tEHKodFI5nLQ1n6zc2qnMR1dKWnYCgev7n5gPXSbHL47e7vWmd04QycWlNApo5yxCC4"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
