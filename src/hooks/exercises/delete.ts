import { useState } from 'react';

import { useStore } from 'hooks/store';

import { Exercise } from 'types/exercises';

export const useExercisesDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const store = useStore();

  const deleteExercise = async (exercise: Exercise): Promise<boolean> => {
    try {
      setIsDeleting(true);

      await store.deleteExercise(exercise);

      setIsDeleting(false);
      return true;
    } catch (err) {
      setIsDeleting(false);
      return false;
    }
  };

  return {
    deleteExercise,
    isDeleting
  };
};
