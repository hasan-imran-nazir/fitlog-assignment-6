"use client";
import { workoutContext } from "@/context/WorkoutProvider";
import { useContext } from "react";
const Page = () => {
  const context = useContext(workoutContext);
  if (!context) {
    return null;
  }
  console.log(context.addWorkout)
  return <div>
    
  </div>;
};

export default Page;
