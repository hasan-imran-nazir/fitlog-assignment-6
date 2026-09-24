"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { workoutContext } from "@/context/WorkoutProvider";
const Navbar = () => {
  const context = useContext(workoutContext);
  const pathname = usePathname();
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
        <div className="flex items-center p-1.5 rounded-full border border-zinc-800/40 gap-10">
          <Link href="/">
            <button
              className={`text-sm font-semibold cursor-pointer ${
                pathname === "/" ? " text-[#ccff00]" : "text-[#9CA3AF]"
              }`}
            >
              Workouts
            </button>
          </Link>
          <Link href="/myplan">
            <button
              className={`text-sm font-semibold cursor-pointer ${
                pathname === "/myplan" ? " text-[#ccff00]" : "text-[#9CA3AF]"
              }`}
            >
              My Plan
            </button>
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/myplan"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-zinc-300">Plan</span>
              <span className="bg-[#ccff00] text-black w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                {context?.addWorkout.length ?? 0}
              </span>
            </div>
          </Link>

          <Link
            href="/myplan"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-zinc-300">Saved</span>
              <span className="border border-zinc-700 text-zinc-300 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">
                {context?.saveWorkout.length ?? 0}
              </span>
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
