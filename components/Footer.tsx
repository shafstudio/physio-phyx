import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Image
            src="/logo/logo-removebg-preview.png"
            alt="PhysioPhyx Logo"
            width={150}
            height={50}
            className="h-10 w-auto"
          />
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a
              className="hover:text-primary transition-colors"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="/terms-and-conditions"
            >
              Terms of Service
            </a>
          </div>
          <div className="text-xs text-gray-400">
            ©2026 PhysioPhyx. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
