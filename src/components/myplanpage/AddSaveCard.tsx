"use client";
import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { FaFireFlameCurved } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IWorkoutTypes } from "@/types/workout.types";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";
import { Slide, toast } from "react-toastify";
interface IAddSaveCardProps {
  workout: IWorkoutTypes;
  list: "today" | "saved";
}
const AddSaveCard = (props: IAddSaveCardProps) => {
  const context = useContext(workoutContext);
  if (!context) return null;
  const { workout, list } = props;
  const handleRemove = () => {
    if (list === "today") {
      context.setAddWorkout((previous) =>
        previous.filter((item) => item.id !== workout.id),
      );
      toast.error(`Removed from today's plan`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    } else {
      context.setSaveWorkout((previous) =>
        previous.filter((item) => item.id !== workout.id),
      );
      toast.error(`Removed from saved workouts`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });
    }
  };
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
              <span className="text-[#D1D5DB]">{workout.duration} min</span>
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

        {list === "today" && (
          <button className="flex items-center gap-1.5 bg-[#ccff00] hover:bg-[#b8e600] text-black text-xs font-bold px-4 py-2.5 rounded-full transition-colors cursor-pointer">
            <FaCheck className="text-sm" />
            <span>Mark as Done</span>
          </button>
        )}

        <button
          onClick={handleRemove}
          className="text-zinc-500 hover:text-white p-2 transition-colors cursor-pointer ml-1"
        >
          <FaXmark className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default AddSaveCard;
