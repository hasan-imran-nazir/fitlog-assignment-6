"use client";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import { workoutContext } from "@/context/WorkoutProvider";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const context = useContext(workoutContext);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-[#0C0D10]">
      <header className="container relative mx-auto flex w-full flex-wrap items-center gap-4 px-4 py-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <button
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute left-4 z-10 flex items-center justify-center text-2xl text-white lg:hidden"
        >
          {<FiMenu />}
        </button>

        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:justify-self-start"
        >
          <div className="flex items-center gap-2.5">
            <Image src={logo} alt="Logo" className="w-6 h-6" />
            <span className="font-extrabold text-lg tracking-wider text-white">
              FITLOG
            </span>
          </div>
        </Link>
        <div className="hidden items-center justify-self-center gap-10 rounded-full border border-zinc-800/40 p-1.5 lg:flex">
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
        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-4 right-4 top-full z-20 flex flex-col gap-2 rounded-xl border border-zinc-800 bg-[#15171D] p-3 shadow-lg lg:hidden"
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                pathname === "/" ? "text-[#ccff00]" : "text-[#9CA3AF]"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/myplan"
              onClick={() => setIsMenuOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                pathname === "/myplan" ? "text-[#ccff00]" : "text-[#9CA3AF]"
              }`}
            >
              My Plan
            </Link>
          </div>
        )}
        <div className="ml-auto flex items-center gap-3 text-xs font-medium sm:gap-6 sm:text-sm lg:ml-0 lg:justify-self-end">
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
