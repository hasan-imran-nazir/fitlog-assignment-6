"use client";
import AddSaveCard from "@/components/myplanpage/AddSaveCard";
import { workoutContext } from "@/context/WorkoutProvider";
import { IWorkoutTypes } from "@/types/workout.types";
import { useContext, useState } from "react";
import Link from "next/link";
const Page = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const context = useContext(workoutContext);
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Rating">(
    "Duration",
  );
  const sortWorkouts = (workouts: IWorkoutTypes[]) => {
    const sortedWorkouts = [...workouts];
    if (sortBy === "Duration") {
      sortedWorkouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "Calories") {
      sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "Rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }
    return sortedWorkouts;
  };
  const sortedAddedWorkouts = sortWorkouts(context?.addWorkout || []);
  const sortedSavedWorkouts = sortWorkouts(context?.saveWorkout || []);

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
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mt-8 flex flex-col sm:mt-10">
        <h2 className="text-3xl font-bold">MY PLAN</h2>
        <p className="text-zinc-400 mt-2.5">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-5 rounded-2xl border border-[#1e222d] bg-[#12141a] p-5 sm:grid-cols-3 sm:gap-0 sm:p-6">
        <div className="flex flex-col">
          <span className="text-[#8A92A0] text-xs mb-1">Exercises</span>
          <span className="text-4xl font-extrabold text-[#ccff00]">
            {selectedWorkouts.length}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[#8A92A0] text-xs font-medium mb-1">
            Minutes
          </span>
          <span className="text-4xl font-extrabold text-white">
            {totalMinutes}
          </span>
        </div>

        <div className="flex flex-col">
          <span className="text-[#8A92A0] text-xs font-medium mb-1">
            Calories
          </span>
          <span className="text-4xl font-extrabold text-white">
            {totalCalories}
          </span>
        </div>
      </div>
      <div className="tabs tabs-lift mt-6">
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
            {sortedAddedWorkouts.length > 0 ? (
              sortedAddedWorkouts.map((workout: IWorkoutTypes) => (
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
            {sortedSavedWorkouts.length ? (
              sortedSavedWorkouts.map((workout: IWorkoutTypes) => (
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
        <div className="mt-4 ml-auto flex shrink-0 flex-wrap items-center justify-end gap-2 sm:mt-0">
          <span className="text-[#8A92A0] text-xs font-semibold whitespace-nowrap">
            Sort By
          </span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "Duration" | "Calories" | "Rating")
            }
            className="bg-[#12141a] text-white text-xs border border-[#1e222d] rounded-lg px-3 py-2 outline-none cursor-pointer"
          >
            <option value={"Duration"}>Duration</option>
            <option value={"Calories"}>Calories</option>
            <option value={"Rating"}>Rating</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Page;
