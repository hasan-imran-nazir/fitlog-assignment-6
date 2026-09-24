import bannerImage from "@/assets/banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto bg-[#15171D] rounded-2xl p-14  flex flex-row items-center justify-between gap-8 mt-12">
      <div className="flex-1 space-y-6 z-10">
        <span className="text-[#ccff00] text-[11px] font-bold">
          WORKOUT LIBRARY
        </span>
        <h2 className="text-5xl font-extrabold text-white mt-3">
          TRAIN WITH INTENT. LOG<br />EVERY SET.
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br />into
          today's plan, and watch the week's work add up.
        </p>
        <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition-colors">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
        <div className="relative w-90 h-90 flex items-center justify-center">
          <Image
            src={bannerImage}
            alt="Hero section Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
