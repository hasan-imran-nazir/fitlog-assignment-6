import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-[#0C0D10]">
      <header className="w-full px-6 py-4 flex items-center justify-between container mx-auto">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Image src={logo} alt="Logo" className="w-6 h-6" />
            <span className="font-extrabold text-lg tracking-wider text-white">
              FITLOG
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-1 p-1.5 rounded-full border border-zinc-800/40">
          <Link href="/">
            <button className="rounded-full px-5 py-2 text-sm font-semibold text-[#9CA3AF] cursor-pointer">
              Workouts
            </button>
          </Link>
          <Link href="/myplan">
            <button className="rounded-full px-5 py-2 text-sm font-semibold text-[#9CA3AF] cursor-pointer">
              My Plan
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-zinc-300">Plan</span>
            <span className="bg-[#ccff00] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
              0
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-zinc-300">Saved</span>
            <span className="border border-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
              0
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
