import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IWorkoutTypes } from "@/types/workout.types";

const AddSaveCard = (props: { workout: IWorkoutTypes }) => {
  const { workout } = props;
  return (
    <div className="bg-[#14171E] border border-[#1e222d] rounded-2xl p-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="relative w-32 h-20 rounded-xl overflow-hidden shrink-0">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-1">
          <h3 className="text-white font-extrabold text-lg uppercase tracking-tight">
            {workout.name}
          </h3>
          <p className="text-zinc-400 text-xs">
            {Array.isArray(workout.equipment)
              ? workout.equipment.join(", ")
              : workout.equipment}
          </p>

          <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
            <div className="flex items-center gap-1 text-[#ccff00]">
              <FaRegClock />
              <span className="text-[#D1D5DB]">
                {workout.duration} min
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#ccff00]">
              <FaFireFlameCurved />
              <span className="text-[#D1D5DB]">
                {workout.caloriesBurned} kcal
              </span>
            </div>
            <div className="flex items-center gap-1 text-[#ccff00]">
              <FaRegStar />
              <span className="text-[#D1D5DB]">{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="border border-zinc-700/80 hover:border-zinc-500 text-white text-xs font-medium px-4 py-2.5 rounded-full transition-colors"
        >
          View Details
        </Link>

        <button className="flex items-center gap-1.5 bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold px-4 py-2.5 rounded-full transition-colors cursor-pointer">
          <FaCheck className="text-sm" />
          <span>Mark as Done</span>
        </button>

        <button className="text-zinc-500 hover:text-white p-2 transition-colors cursor-pointer ml-1">
          <FaXmark className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default AddSaveCard;
