import { Muscle } from 'types/muscles';
import { ExerciseOption } from 'types/exercises';
import { AppDate } from 'types/dates';
import { Timestamp } from 'types/firebase';

export type TrainingError = {
  muscles?: string;
  exerciseOptions?: string;
  dates?: string;
};

export type TrainingForm = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
};

export type TrainingFields = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
  userID: string;
};

export type Training = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
  userID: string;
  createdTime?: Timestamp;
  id: string;
};
