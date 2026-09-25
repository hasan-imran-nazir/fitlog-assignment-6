import { IWorkoutTypes } from "@/types/workout.types";
import Image from "next/image";
import AddToday from "@/components/shared/workoutDetails/AddToday";
import SaveWorkout from "@/components/shared/workoutDetails/SaveWorkout";

interface IWorkoutDetailsPage {
  params: Promise<{
    id: string;
  }>;
}
const getWorkouts = async (): Promise<IWorkoutTypes[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return res.json();
};
const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPage) => {
  const { id } = await params;
  const workoutdata = await getWorkouts();
  const workout = workoutdata.find(
    (w: IWorkoutTypes) => w.id === Number(id),
  ) as IWorkoutTypes;
  return (
    <div className="container mx-auto rounded-2xl bg-[#0d0d0e] px-4 py-6 sm:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#121318]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
              {workout.name}
            </h1>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              {workout.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {workout.muscleGroups?.map((group, index) => (
                <span
                  key={index}
                  className="bg-[#ccff00] text-black text-[11px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider"
                >
                  {group}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-[#121318] rounded-xl p-4 border border-zinc-800/60 divide-y divide-zinc-800/60">
            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] font-bold tracking-wider text-[12px]">
                EQUIPMENT
              </span>
              <span className="text-[#E5E7EB] font-medium text-[14px]">
                {Array.isArray(workout?.equipment)
                  ? workout.equipment.join(", ")
                  : workout?.equipment || ""}
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] uppercase font-bold tracking-wider text-[12px]">
                DIFFICULTY
              </span>
              <span className="text-[#E5E7EB] font-medium capitalize text-[14px]">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] uppercase font-bold tracking-wider text-[12px]">
                SETS
              </span>
              <span className="text-[#E5E7EB] font-medium text-[14px]">
                {workout.sets}
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] font-bold tracking-wider text-[12px]">
                REPS
              </span>
              <span className="text-[#E5E7EB] font-medium text-[14px]">
                {workout.reps}
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] font-bold tracking-wider text-[12px]">
                DURATION
              </span>
              <span className="text-[#E5E7EB] font-medium text-[14px]">
                {workout.duration} min
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] font-bold tracking-wider text-[12px]">
                CALORIES
              </span>
              <span className="text-[#E5E7EB] font-medium text-[14px]">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-2 text-xs sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[#9CA3AF] uppercase font-bold tracking-wider text-[12px]">
                RATING
              </span>
              <span className="text-[#E5E7EB] font-medium text-[14px]">
                {workout.rating}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[16px] font-extrabold uppercase tracking-wider text-white">
              INSTRUCTIONS
            </h3>
            <ol className="space-y-2 text-xs text-zinc-400 list-decimal list-inside leading-relaxed">
              {workout.instructions?.map((instruction, index) => (
                <li key={index} className="pl-1 text-[14px]">
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <AddToday workout={workout} />

            <SaveWorkout workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
