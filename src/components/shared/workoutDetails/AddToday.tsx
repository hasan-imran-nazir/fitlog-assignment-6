"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkoutTypes } from "@/types/workout.types";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
interface AddTodayProps {
  workout: IWorkoutTypes;
}
const AddToday = (props: AddTodayProps) => {
  const context = useContext(workoutContext);
  if (!context) return null;

  const handleAddToday = () => {
    const isAlreadyAdded = context.addWorkout.some(
      (item) => item.id === props.workout.id,
    );

    if (!isAlreadyAdded) {
      context.setAddWorkout([...context.addWorkout, props.workout]);
      alert(`You have added ${props.workout.name}`);
    }
  };
  return (
    <button
      onClick={() => handleAddToday()}
      className="flex items-center justify-center gap-2 bg-[#ccff00] text-black text-[14px] font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer"
    >
      <FaRegCalendarPlus />
      <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default AddToday;
