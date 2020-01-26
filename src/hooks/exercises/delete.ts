import { useState } from 'react';

import { useExercisesSetter } from 'hooks/exercises/setter';

import { Exercise } from 'types/exercises';

export const useExercisesDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const { deleteExerciseFromState } = useExercisesSetter();

  const deleteExercise = async (exercise: Exercise): Promise<boolean> => {
    setIsDeleting(true);

    const timeout = (ms: number) =>
      new Promise(resolve => {
        setTimeout(() => resolve(), ms);
      });

    try {
      // TODO add firebase calls
      await timeout(2000);

      deleteExerciseFromState(exercise);

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
