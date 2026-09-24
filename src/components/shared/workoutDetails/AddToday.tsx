"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkoutTypes } from "@/types/workout.types";
import { useContext } from "react";
import { FaRegCalendarPlus } from "react-icons/fa6";
import { Slide, toast } from "react-toastify";
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
      toast.info(`You have Added ${props.workout.name}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }else {
      toast.error(`You have already added ${props.workout.name}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };
  return (
    <button
      onClick={() => handleAddToday()}
      className={`flex items-center justify-center gap-2 bg-[#ccff00] text-black text-[14px] font-semibold px-5 py-3 rounded-lg transition-colors cursor-pointer`}
    >
      <FaRegCalendarPlus />
      <span>Add to today&apos;s plan</span>
    </button>
  );
};

export default AddToday;
