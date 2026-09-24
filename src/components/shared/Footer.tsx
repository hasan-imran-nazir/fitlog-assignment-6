import Image from "next/image";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="container mx-auto w-full border-t border-[#1A1D24] py-8 px-6 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Footer Logo" className="w-6 h-6" />
            <span className="text-white font-extrabold tracking-wider text-base uppercase">
              FITLOG
            </span>
          </div>
          <p className="text-zinc-400 text-xs tracking-wide">
            &copy; 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
