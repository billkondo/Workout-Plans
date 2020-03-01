import { useAuthPersistence } from 'hooks/auth';
import { useFirebase } from 'hooks/firebase';
import { useTrainingsPersistence } from 'hooks/trainings/persistence';
import { useExercisesPersistence } from 'hooks/exercises/persistence';

export const useApp = () => {
  useFirebase();

  useAuthPersistence();
  useTrainingsPersistence();
  useExercisesPersistence();
};
