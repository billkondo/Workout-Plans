import { Muscle } from 'types/muscles';
import { Timestamp } from 'types/firebase';

export type ExerciseTextKeys = 'title' | 'description';

export type ExerciseForm = {
  title: string;
  description: string;
  muscles: Array<Muscle>;
};

export type ExerciseFields = {
  title: string;
  description: string;
  muscles: Array<Muscle>;
  userID: string;
};

export type Exercise = {
  title: string;
  description?: string;
  muscles: Array<Muscle>;
  id: string;
  userID: string;
  createdTime?: Timestamp;
};

export type ExerciseInfo = {
  sets: number;
  reps: [number, number];
  restInterval: [number, number];
};

export type ExerciseOption = {
  exercise: Exercise;
  info: ExerciseInfo;
};

export type ExerciseError = {
  muscles?: string;
  title?: string;
  description?: string;
};

// Routing
export type ExercisesFiltersIDs = 'home';
