import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg space-y-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#ccff00]/10 flex items-center justify-center">
            <Image
              src={logo}
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span className="badge badge-warning badge-sm absolute -top-1 -right-1 font-bold">
            404
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white uppercase tracking-tight">
            404 — Missed that lift
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            The page you wanted is not in the library. Head back to the floor
            and pick a workout that exists.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="btn bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs uppercase tracking-wider border-none rounded-full px-6"
          >
            <FaArrowLeft />
            Back to Library
          </Link>

          <Link
            href="/myplan"
            className="btn btn-outline border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-bold text-xs uppercase tracking-wider rounded-full px-6"
          >
            My Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
