import { useSelector } from 'react-redux';

import { RootState } from 'state';

export const useExercisesGetter = () => {
  const { exercises, backRoute } = useSelector(
    (state: RootState) => state.exercises
  );

  const findExerciseByID = (id: string) => exercises.find(e => e.id === id);

  return {
    exercises,
    backRoute,
    findExerciseByID
  };
};
