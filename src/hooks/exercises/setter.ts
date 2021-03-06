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

  const deleteExerciseFromState = useCallback(
    (exercise: Exercise) =>
      dispatch(actions.exercises.deleteExercise(exercise)),
    [dispatch]
  );

  const editExerciseFromState = useCallback(
    (exercise: Exercise) => dispatch(actions.exercises.editExercise(exercise)),
    [dispatch]
  );

  return {
    addExerciseToState,
    deleteExerciseFromState,
    editExerciseFromState
  };
};
