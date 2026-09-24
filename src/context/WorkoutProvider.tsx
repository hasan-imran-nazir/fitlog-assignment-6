"use client";
import { IWorkoutTypes } from "@/types/workout.types";
import React, { createContext, ReactNode, useState } from "react";

interface WorkoutContextType {
  addWorkout: IWorkoutTypes[];
  setAddWorkout: React.Dispatch<React.SetStateAction<IWorkoutTypes[]>>;
  saveWorkout: IWorkoutTypes[];
  setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkoutTypes[]>>;
}
export const workoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [addWorkout, setAddWorkout] = useState<IWorkoutTypes[]>([]);
  const [saveWorkout, setSaveWorkout] = useState<IWorkoutTypes[]>([]);
  const sharedData: WorkoutContextType = {
    addWorkout,
    setAddWorkout,
    saveWorkout,
    setSaveWorkout,
  };
  return (
    <workoutContext.Provider value={sharedData}>
      {children}
    </workoutContext.Provider>
  );
};

export default WorkoutProvider;
