import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-20 bg-[#1c140d] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Abstract gym background pattern"
          className="w-full h-full object-cover opacity-5"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGg63DywIBFUt6cDhr7xawMU1SPyAo6qnc3ML0EBGQrHURSDhtepKe1gmeHbgRCXjXuVg4s8darUKPkc8O1TJ_6BTaSBfOE6acQtiBlVnuTOz89rH3w1klXJqifXzpVcpP8vW6MvCDd0MpwYUSqtSBD1SU-L1QwM8T6g236sF7hOqy7cYeNGiKRJ9lIsmbmDEYjqqXhySTAndvTF_zRQPNOCGxmlb6OVpeVAHLHl40nvOj9EgqmBsMIVSTiVoB5Fa2HcWA4R8YtnU"
          fill
          sizes="100vw"
        />
      </div>
      <div className="container mx-auto px-6 md:px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Feel Your Best?</h2>
          <p className="text-gray-400 text-lg">
            Don&apos;t let pain hold you back any longer. Take the first step towards a healthier, pain-free life today.
          </p>
        </div>
        <div>
          <a
            className="inline-block bg-primary text-white px-10 py-4 font-bold text-lg hover:bg-white hover:text-[#1c140d] transition-colors rounded-none whitespace-nowrap"
            href="#contact"
          >
            Schedule Your Visit
          </a>
        </div>
      </div>
    </section>
  );
}
