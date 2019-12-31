import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from 'state';

import { Exercise } from 'types/exercises';

export const useExercisesSetter = () => {
  const dispatch = useDispatch();

  const addExerciseToState = useCallback(
    (exercise: Exercise) => dispatch(actions.exercises.addExercise(exercise)),
    [dispatch]
  );

  return {
    addExerciseToState
  };
};
