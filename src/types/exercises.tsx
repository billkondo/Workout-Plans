import { Muscle } from 'types/muscles';

export type Exercise = {
  title: string;
  description?: string;
  muscles?: Array<Muscle>;
  id: string;
};

export type ExerciseOption = {
  exercise: Exercise;
  sets?: number;
  reps?: number;
  restInterval?: number;
  id: string;
};
