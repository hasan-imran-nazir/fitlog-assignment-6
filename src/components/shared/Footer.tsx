import Image from "next/image";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto mt-12 w-full border-t border-[#1A1D24] px-4 py-8 sm:mt-16 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Footer Logo" className="w-6 h-6" />
            <span className="text-white font-extrabold tracking-wider text-base uppercase">
              FITLOG
            </span>
          </div>
          <p className="text-center text-xs leading-relaxed tracking-wide text-zinc-400 md:text-right">
            &copy; 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
