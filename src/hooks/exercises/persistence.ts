import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { localStorage } from 'storage';

export const useExercisesPersistence = () => {
  const exerciseState = useSelector((state: RootState) => state.exercises);

  useEffect(() => {
    localStorage().add('exercises', exerciseState);
  }, [exerciseState]);
};
