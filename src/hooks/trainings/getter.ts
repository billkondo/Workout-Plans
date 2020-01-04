import { useSelector } from 'react-redux';

import { RootState } from 'state';

export const useTrainingsGetter = () => {
  const { trainings } = useSelector((state: RootState) => state.trainings);

  return {
    trainings
  };
};
