"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkoutTypes } from "@/types/workout.types";
import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
interface AddTodayProps {
  workout: IWorkoutTypes;
}
const SaveWorkout = (props: AddTodayProps) => {
  const context = useContext(workoutContext);
  if (!context) return null;

  const handleSaveToday = () => {
    const isAlreadySave = context.saveWorkout.some(
      (item) => item.id === props.workout.id,
    );

    if (!isAlreadySave) {
      context.setSaveWorkout([...context.saveWorkout, props.workout]);
      alert(`You have saved ${props.workout.name}`);
    }
  };
  return (
    <button
      onClick={() => handleSaveToday()}
      className="flex items-center justify-center gap-2 bg-transparent border border-zinc-800 text-white text-[14px] font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer"
    >
      <FaRegBookmark />
      <span>Save for later</span>
    </button>
  );
};

export default SaveWorkout;
