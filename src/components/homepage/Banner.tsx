import bannerImage from "@/assets/banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto mt-8 flex w-full flex-col items-center justify-between gap-8 rounded-2xl bg-[#15171D] px-5 py-8 sm:mt-12 sm:px-8 sm:py-12 lg:flex-row lg:p-14">
      <div className="flex-1 space-y-6 z-10">
        <span className="text-[#ccff00] text-[11px] font-bold">
          WORKOUT LIBRARY
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <button className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition-colors">
          BROWSE WORKOUTS
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
        <div className="relative flex aspect-square w-full max-w-xs items-center justify-center sm:max-w-sm">
          <Image
            src={bannerImage}
            alt="Hero section Image"
            loading="eager"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
