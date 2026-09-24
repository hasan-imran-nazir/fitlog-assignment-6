"use client";
import AddSaveCard from "@/components/myplanpage/AddSaveCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkoutTypes } from "@/types/workout.types";
import { useContext, useState } from "react";
import Link from "next/link";
const Page = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const context = useContext(workoutContext);
  if (!context) {
    return null;
  }
  const selectedWorkouts =
    activeTab === "today" ? context.addWorkout : context.saveWorkout;

  const totalMinutes = selectedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );
  const totalCalories = selectedWorkouts.reduce(
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
            {selectedWorkouts.length}
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
      <div className="tabs tabs-lift ">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Today's Plan"
          checked={activeTab === "today"}
          onChange={() => setActiveTab("today")}
        />
        <div className="tab-content bg-[#111317] p-6 ">
          <div className="flex flex-col gap-4">
            {context.addWorkout.length > 0 ? (
              context.addWorkout.map((workout: IWorkoutTypes) => (
                <AddSaveCard key={workout.id} workout={workout} list="today" />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 bg-[#111317] py-24">
                <h2 className="text-xl font-bold text-white">
                  NOTHING HERE YET
                </h2>
                <p className="text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href="/"
                  className="bg-[#CCFF00] text-black px-6 py-2.5 rounded-lg mt-4 inline-block"
                >
                  Browse Library
                </Link>
              </div>
            )}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Saved"
          checked={activeTab === "saved"}
          onChange={() => setActiveTab("saved")}
        />
        <div className="tab-content bg-[#111317] p-6">
          <div className="flex flex-col gap-4">
            {context.saveWorkout.length ? (
              context.saveWorkout.map((workout: IWorkoutTypes) => (
                <AddSaveCard key={workout.id} workout={workout} list="saved" />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 bg-[#111317] py-24">
                <h2 className="text-xl font-bold text-white">
                  NOTHING HERE YET
                </h2>
                <p className="text-[#A1A1AA]">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href="/"
                  className="bg-[#CCFF00] text-black px-6 py-2.5 rounded-lg mt-4 inline-block"
                >
                  Browse Library
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
