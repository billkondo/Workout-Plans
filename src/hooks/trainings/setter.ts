import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from 'state';

import { Training } from 'types/training';

export const useTrainingsSetter = () => {
  const dispatch = useDispatch();

  const addTrainingToState = useCallback(
    (training: Training) => dispatch(actions.trainings.addTraining(training)),
    [dispatch]
  );

  const deleteTrainingFromState = useCallback(
    (training: Training) =>
      dispatch(actions.trainings.deleteTraining(training)),
    [dispatch]
  );

  return {
    addTrainingToState,
    deleteTrainingFromState
  };
};
