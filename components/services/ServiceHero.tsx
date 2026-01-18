import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  duration: string;
  insurance: boolean;
  category: string;
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  heroImage,
  duration,
  insurance,
  category,
}: ServiceHeroProps) {
  return (
    <section className="relative w-full h-[500px] mt-24 mb-12 overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image
          alt={subtitle}
          className="w-full h-full object-cover"
          src={heroImage}
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
      </div>
      <div className="relative z-20 h-full max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col justify-center text-white">
        <div className="flex flex-wrap items-center gap-2 mb-4 text-sm">
          <Link
            href="/"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href="/#help"
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Services
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-white font-semibold">{subtitle}</span>
        </div>
        <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-3">
          <span className="w-8 h-[2px] bg-primary"></span>
          {category}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight mb-4">
          {title.split(" ").slice(0, 2).join(" ")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">
            {title.split(" ").slice(2).join(" ")}
          </span>
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed max-w-lg mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-white text-sm font-medium">
            <span className="material-symbols-outlined text-primary text-base">
              timer
            </span>
            {duration}
          </div>
          {insurance && (
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-white text-sm font-medium">
              <span className="material-symbols-outlined text-primary text-base">
                verified_user
              </span>
              Insurance Accepted
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
