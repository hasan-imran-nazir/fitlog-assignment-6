import Image from "next/image";
import type { IWorkoutTypes } from "@/types/workout.types";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import Link from "next/link";

const WorkoutCard = (props: { workout: IWorkoutTypes }) => {
  return (
    <div className="flex justify-center">
      <Link
        href={`/workout/${props.workout.id}`}>
        <div className="w-full max-w-sm bg-[#15171D] rounded-2xl overflow-hidden border border-[#222630] shadow-lg text-white">
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              src={props.workout.image}
              alt={props.workout.name}
              width={393}
              height={192}
              className="object-cover -mt-17"
            />
          </div>

          <div className="p-5 space-y-4">
            <div className="flex flex-wrap gap-2">
              {props.workout.muscleGroups.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black text-[11px] font-bold uppercase px-3 py-1 rounded-full tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                {props.workout.name}
              </h3>
              <p className="text-zinc-400 text-xs mt-1">
                {Array.isArray(props.workout?.equipment)
                  ? props.workout.equipment.join(", ")
                  : props.workout?.equipment || ""}
              </p>
            </div>

            <div className="border-t border-zinc-800/80 pt-3">
              <div className="flex items-center gap-4 text-[#9CA3AF] text-xs">
                <div className="flex items-center gap-1.5">
                  <FaRegClock />
                  <span>{props.workout.duration} min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaFireFlameCurved />
                  <span>{props.workout.caloriesBurned} kcal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FaRegStar />
                  <span>{props.workout.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WorkoutCard;
