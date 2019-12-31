import { useSelector } from 'react-redux';

import { RootState } from 'state';

export const useExercisesGetter = () => {
  const { exercises, backRoute } = useSelector(
    (state: RootState) => state.exercises
  );

  return {
    exercises,
    backRoute
  };
};
