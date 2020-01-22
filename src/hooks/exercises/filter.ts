import { useEffect, useReducer, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Muscle } from 'types/muscles';
import { ExercisesFiltersIDs, Exercise } from 'types/exercises';

import { RootState, actions } from 'state';

type Args = {
  id: ExercisesFiltersIDs;
  exercises: Exercise[];
};

type State = {
  muscles: Muscle[];
};

const initialState: State = {
  muscles: []
};

type Action =
  | {
      type: 'ADD_MUSCLE';
      muscle: Muscle;
    }
  | { type: 'REMOVE_MUSCLE'; muscle: Muscle }
  | { type: 'RESET' }
  | { type: 'FILTER_SETUP'; filter: State };

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_MUSCLE':
      return {
        ...state,
        muscles: state.muscles.concat(action.muscle)
      };

    case 'REMOVE_MUSCLE':
      return {
        ...state,
        muscles: state.muscles.filter(m => m.type !== action.muscle.type)
      };

    case 'RESET':
      return initialState;

    case 'FILTER_SETUP':
      return action.filter;

    default:
      return state;
  }
};

export const useExercisesFilter = (args: Args) => {
  const { id, exercises } = args;
  const [state, setState] = useReducer(reducer, initialState);
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const dispatch = useDispatch();
  const prevState = useSelector(
    (state: RootState) => state.exercisesFilter[id]
  );

  const hasFilters = state.muscles.length !== 0;
  const filtersQuantity = state.muscles.length;

  // Update page state
  useEffect(() => {
    setState({ type: 'FILTER_SETUP', filter: prevState });
  }, [id, prevState]);

  // Calculate filtered exercises
  useEffect(() => {
    const { muscles } = state;

    const isExerciseOK = (exercise: Exercise): boolean => {
      if (!hasFilters) return true;
      for (const muscle of muscles)
        if (exercise.muscles.find(m => m.type === muscle.type)) return true;
      return false;
    };

    setFilteredExercises(exercises.filter(exercise => isExerciseOK(exercise)));
  }, [exercises, hasFilters, state]);

  const addMuscle = useCallback(
    (muscle: Muscle) => setState({ type: 'ADD_MUSCLE', muscle }),
    [setState]
  );

  const removeMuscle = useCallback(
    (muscle: Muscle) => setState({ type: 'REMOVE_MUSCLE', muscle }),
    [setState]
  );

  const reset = useCallback(() => setState({ type: 'RESET' }), [setState]);

  const applyFilters = useCallback(() => {
    dispatch(actions.exercisesFilter.setFilters(id, state));
  }, [dispatch, id, state]);

  return {
    muscles: state.muscles,
    addMuscle,
    removeMuscle,
    reset,
    applyFilters,
    filteredExercises,
    hasFilters,
    filtersQuantity
  };
};
