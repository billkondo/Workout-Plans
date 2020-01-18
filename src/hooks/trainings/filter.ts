import { useState, useEffect, useCallback, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Muscle } from 'types/muscles';
import { Exercise, ExerciseOption } from 'types/exercises';
import { Training } from 'types/training';

import { RootState, actions } from 'state';

import { useTrainingsGetter } from 'hooks/trainings/getter';

type State = {
  muscles: Muscle[];
  exercisesOption: ExerciseOption[];
};

const initialState: State = {
  muscles: [],
  exercisesOption: []
};

type Actions =
  | {
      type: 'ADD_MUSCLE';
      muscle: Muscle;
    }
  | {
      type: 'ADD_EXERCISE_OPTION';
      exerciseOption: ExerciseOption;
    }
  | { type: 'REMOVE_MUSCLE'; muscle: Muscle }
  | { type: 'REMOVE_EXERCISE_OPTION'; exercise: Exercise }
  | { type: 'SET_FILTER'; filters: State }
  | { type: 'RESET' };

const reducer = (state = initialState, action: Actions): State => {
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

    case 'ADD_EXERCISE_OPTION':
      return {
        ...state,
        exercisesOption: state.exercisesOption.concat(action.exerciseOption)
      };

    case 'REMOVE_EXERCISE_OPTION':
      return {
        ...state,

        exercisesOption: state.exercisesOption.filter(
          e => e.exercise.id !== action.exercise.id
        )
      };

    case 'SET_FILTER':
      return action.filters;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

export const useTrainingsFilter = () => {
  const { trainings } = useTrainingsGetter();
  const [state, setState] = useReducer(reducer, initialState);
  const prevState = useSelector((state: RootState) => state.trainingsFilter);
  const [filteredTrainings, setFilteredTrainings] = useState(trainings);
  const dispatch = useDispatch();

  const saveFilters = useCallback(
    () => dispatch(actions.trainingsFilter.setFilers(state)),
    [dispatch, state]
  );

  const addMuscle = useCallback(
    (muscle: Muscle) => setState({ type: 'ADD_MUSCLE', muscle }),
    [setState]
  );

  const removeMuscle = useCallback(
    (muscle: Muscle) => setState({ type: 'REMOVE_MUSCLE', muscle }),
    [setState]
  );

  const addExerciseOption = useCallback(
    (exercise: Exercise) =>
      setState({
        type: 'ADD_EXERCISE_OPTION',
        exerciseOption: {
          exercise,
          info: {
            reps: [0, 20],
            sets: 0,
            restInterval: [0, 30]
          }
        }
      }),
    [setState]
  );

  const removeExerciseOption = useCallback(
    (exercise: Exercise) =>
      setState({
        type: 'REMOVE_EXERCISE_OPTION',
        exercise
      }),
    [setState]
  );

  const reset = useCallback(() => setState({ type: 'RESET' }), [setState]);

  const hasFilters =
    state.muscles.length !== 0 || state.exercisesOption.length !== 0;

  useEffect(() => {
    setState({ type: 'SET_FILTER', filters: prevState });
  }, [prevState]);

  useEffect(() => {
    const includesMuscle = (training: Training): boolean => {
      if (!hasFilters) return true;

      for (const muscle of training.muscles)
        if (state.muscles.find(m => m.type === muscle.type)) return true;

      return false;
    };

    const includesExercise = (training: Training): boolean => {
      if (!hasFilters) return true;

      for (const exerciseOption of training.exerciseOptions)
        if (
          state.exercisesOption.find(
            e => e.exercise.id === exerciseOption.exercise.id
          )
        )
          return true;

      return false;
    };

    setFilteredTrainings(
      trainings.filter(t => includesMuscle(t) || includesExercise(t))
    );
  }, [trainings, hasFilters, state.muscles, state.exercisesOption]);

  return {
    addMuscle,
    removeMuscle,
    addExerciseOption,
    removeExerciseOption,
    muscles: state.muscles,
    exercisesOption: state.exercisesOption,
    reset,
    filteredTrainings,
    hasFilters,
    saveFilters
  };
};
