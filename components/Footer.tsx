export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-[#1c140d]">
            <span className="material-symbols-outlined text-primary text-2xl">vital_signs</span>
            <h2 className="text-lg font-bold">PhysioLife</h2>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-500">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms of Service
            </a>
          </div>
          <div className="text-xs text-gray-400">
            © 2023 PhysioLife. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
