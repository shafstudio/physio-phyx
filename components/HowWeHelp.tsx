import Image from "next/image";
import Link from "next/link";

export default function HowWeHelp() {
  return (
    <section className="py-24 bg-background-light" id="help">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
              Conditions We Treat
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c140d]">
              How We Can Help
            </h2>
          </div>
          <a
            className="hidden md:flex items-center gap-2 text-sm font-bold text-[#1c140d] border-b-2 border-transparent hover:border-primary pb-1 transition-all"
            href="#contact"
          >
            Tell us what&apos;s wrong{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-150">
          <Link
            href="/services/sports-injury-acl"
            className="md:col-span-6 lg:col-span-5 relative group overflow-hidden h-96 md:h-full block"
          >
            <Image
              alt="Runner tying shoes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWXKkUDU71l4kiWLpdF9iysTgadzoKUgIVPhkQKFnoyuBt-sqV9RPAtLQKrM0SYfnpywkZuv-e8ofML8g_rQNaJRvXT9w7WeBEcT8nfRBnKBcDDYh6fg8JpPyrhUrtwEc425HqFtNFAFh2LEH5DpW2_TZFjcfKSG9lTPklOZtzVCktVJ0BhTTZzibESE5l8yTqqgIuwUmRbzYChyY_4evzv2jTAwkiF-1cvpOB-Z9uBPbHydwVqapDoO3mZu3bmYlGwS5rs409BG4"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <div className="w-10 h-1 bg-primary mb-4"></div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Sports Injury &amp; ACL
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Comprehensive rehabilitation protocols to guide you from surgery
                back to high-impact sports confidently.
              </p>
            </div>
          </Link>
          <div className="md:col-span-6 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href="/services/geriatric-mobility"
              className="bg-white p-8 flex flex-col justify-between border border-gray-100 hover:border-primary/30 transition-colors group h-full"
            >
              <div>
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary mb-4 rounded-none group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">elderly</span>
                </div>
                <h3 className="text-lg font-bold text-[#1c140d] mb-2">
                  Geriatric Mobility
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Programs focused on balance, fall prevention, and maintaining
                  independence.
                </p>
              </div>
              <div className="relative w-full h-32 mt-6">
                <Image
                  alt="Senior mobility"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBghBeWfgrj2ow_57nsHt8rJVo9fUcdRX5mmLKHuza3UrEPwOwMJIo1J8qco2B2CwKEDbTVQqYI5mIYaPhp8h7RvbGeshYEasf64SCQ1j5YoXohX9yyST1_cs0j7G6KEkOYD7bOW7TE8LevbBWArYkdfxNxA0jcFK6dxtjQ4dRJ73A20sA5IVURr1xOvkiJ_RRrBxl9jvQYKg3VkXOt1BjglNkBj033V2rx32el0gIXel9FXvIfBfGLmL2Wd9vDwzZ3jC-TRqQDz9U"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            </Link>
            <Link
              href="/services/chronic-back-pain"
              className="bg-white p-8 flex flex-col justify-between border border-gray-100 hover:border-primary/30 transition-colors group h-full"
            >
              <div>
                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary mb-4 rounded-none group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">
                    accessibility_new
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1c140d] mb-2">
                  Chronic Back Pain
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Evidence-based strategies to reduce pain intensity and prevent
                  recurrence.
                </p>
              </div>
              <div className="relative w-full h-32 mt-6">
                <Image
                  alt="Yoga stretch"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLODAuceZdYPufRmmge3L5vL-lwWuL38j3Hr5wCs3IOTbzBFrXv9YdtRJRVV1kZJOeugPCiWrTyt-X8OxKs-yNxRuVYF8vCOdBzWTc_Ccoa2bNrbiebT-lm8C9OsiS5Qskz7GGEaUuUKFdK5OqVmhihYkPRS0XCjcnxIjFs2jJ8NPgmNQrV9YB6TGXVUfQQrIZLc8VgJLiBWHDP7MBRqEXnya8mCSnuE2qsD3jsqHZ-rJGiiTHZA7IgvC_FJdoaZySaivzMpv4tAA"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
            </Link>
            <Link
              href="/services/shoulder-rehab"
              className="sm:col-span-2 bg-[#1c140d] p-8 flex flex-row items-center gap-6 group relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 z-0">
                <Image
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3UHCrz4-vzPN3u0vKcjYY8qxYX_p9sUb5d_PkisYyMNAfJmDk-FC3eCtBS2oynk8pl0w4y3rgEUG2E_BHkHni6LJCbxImzoPLeBRMJApErNusPL3-jjlJUeaKhfT8BgcPuFf6H8ZNgh0GvFmGXoLynRfLxmFsoqsHgogpt79J7dGHAXTYiXXPbTlARvIkA_cOUwNX50z5C5Y2qsZBSHXXdhqvp0BnpvFTMrwJ-m4_K47nHctqqizzQG23nxCesIKtm8yJlJGXIOM"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="relative z-10 w-full flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Shoulder Rehab
                  </h3>
                  <p className="text-gray-400 text-xs">
                    Rotator cuff therapies to restore full range.
                  </p>
                </div>
                <span className="w-10 h-10 flex items-center justify-center border border-white/20 text-white rounded-none group-hover:bg-white group-hover:text-[#1c140d] transition-colors">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
