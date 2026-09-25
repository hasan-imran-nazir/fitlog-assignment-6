import WorkoutCard from "@/components/homepage/WorkoutCard";
import type { IWorkoutTypes } from "@/types/workout.types";
const getWorkouts = async (): Promise<IWorkoutTypes[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};

const WorkoutLibrary = async () => {
  const workoutdata = await getWorkouts();
  return (
    <div className="container mx-auto mt-12 px-4 sm:mt-16 sm:px-6 lg:px-0">
      <h2 className="text-2xl font-bold sm:text-3xl">THE LIBRARY</h2>
      <p className="text-[#9CA3AF] mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workoutdata.map((item: IWorkoutTypes) => (
          <WorkoutCard key={item.id} workout={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;
