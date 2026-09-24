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
  const workouts = await getWorkouts();
  return (
    <div className="container mx-auto mt-16">
      <h2 className="font-bold text-3xl">THE LIBRARY</h2>
      <p className="text-[#9CA3AF] mb-8">
        Twelve lifts covering every major muscle group.
      </p>
      <div className="grid grid-cols-3 gap-6">
        {workouts.map((item) => (
          <WorkoutCard key={item.id} workout={item} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutLibrary;
