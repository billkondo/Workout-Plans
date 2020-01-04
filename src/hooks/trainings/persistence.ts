import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from 'state';
import { localStorage } from 'storage';

export const useTrainingsPersistence = () => {
  const trainingsState = useSelector((state: RootState) => state.trainings);

  useEffect(() => {
    localStorage().add('trainings', trainingsState);
  }, [trainingsState]);
};
