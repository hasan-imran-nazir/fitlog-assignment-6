"use client";
import AddSaveCard from "@/components/myplanpage/AddSaveCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";
const Page = () => {
  const context = useContext(workoutContext);
  if (!context) {
    return null;
  }
  const totalMinutes = context.addWorkout.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = context.addWorkout.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );
  return (
    <div className="container mx-auto">
      <div className="flex flex-col ml-5 mt-10">
        <h2 className="text-3xl font-bold">MY PLAN</h2>
        <p className="text-zinc-400 mt-2.5">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="bg-[#12141a] border border-[#1e222d] rounded-2xl p-6 grid grid-cols-3 mt-6">
        <div className="flex flex-col pl-2">
          <span className="text-[#8A92A0] text-xs mb-1">Exercises</span>
          <span className="text-4xl font-extrabold text-[#ccff00]">
            {context.addWorkout.length}
          </span>
        </div>

        <div className="flex flex-col pl-6">
          <span className="text-[#8A92A0] text-xs font-medium mb-1">
            Minutes
          </span>
          <span className="text-4xl font-extrabold text-white">
            {totalMinutes}
          </span>
        </div>

        <div className="flex flex-col pl-6">
          <span className="text-[#8A92A0] text-xs font-medium mb-1">
            Calories
          </span>
          <span className="text-4xl font-extrabold text-white">
            {totalCalories}
          </span>
        </div>
      </div>
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {
            context.addWorkout.map((workout) => (
              <AddSaveCard key={workout.id} workout={workout} />
            ))
          }
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default Page;
