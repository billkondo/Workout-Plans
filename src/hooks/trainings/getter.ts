import { useSelector } from 'react-redux';

import { RootState } from 'state';

export const useTrainingsGetter = () => {
  const { trainings } = useSelector((state: RootState) => state.trainings);

  const findTrainingByID = (id?: string) => trainings.find(t => t.id === id);

  return {
    trainings,
    findTrainingByID
  };
};
