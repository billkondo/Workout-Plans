import { useReducer } from 'react';

// Types
import { Muscle } from 'types/muscles';
import { ExerciseOption } from 'types/exercises';
import { AppDate } from 'types/dates';
import { TrainingError } from 'types/training';

type State = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
  errors: TrainingError;
};

type Form = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
};

type Actions =
  | {
      type: 'ADD_MUSCLE';
      muscle: Muscle;
    }
  | {
      type: 'REMOVE_MUSCLE';
      muscle: Muscle;
    }
  | { type: 'ADD_EXERCISE_OPTION'; exerciseOption: ExerciseOption }
  | { type: 'REMOVE_EXERCISE_OPTION'; exerciseOption: ExerciseOption }
  | { type: 'ADD_DATE'; date: AppDate }
  | { type: 'REMOVE_DATE'; date: AppDate }
  | { type: 'EDIT_DATE'; date: AppDate }
  | { type: 'SET_ERRORS'; errors: TrainingError };

const initialState: State = {
  muscles: [],
  exerciseOptions: [],
  dates: [],
  errors: {}
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'ADD_MUSCLE':
      return {
        ...state,
        muscles: state.muscles.concat(action.muscle),
        errors: {
          ...state.errors,
          muscles: ''
        }
      };

    case 'REMOVE_MUSCLE':
      return {
        ...state,
        muscles: state.muscles.filter(
          muscle => muscle.type !== action.muscle.type
        )
      };

    case 'ADD_EXERCISE_OPTION':
      return {
        ...state,
        exerciseOptions: state.exerciseOptions.concat(action.exerciseOption),
        errors: {
          ...state.muscles,
          exerciseOptions: ''
        }
      };

    case 'REMOVE_EXERCISE_OPTION':
      return {
        ...state,
        exerciseOptions: state.exerciseOptions.filter(
          exerciseOption => exerciseOption.id !== action.exerciseOption.id
        )
      };

    case 'ADD_DATE':
      return {
        ...state,
        dates: state.dates.concat(action.date),
        errors: {
          ...state.errors,
          dates: ''
        }
      };

    case 'REMOVE_DATE':
      return {
        ...state,
        dates: state.dates.filter(d => d.id !== action.date.id)
      };

    case 'EDIT_DATE':
      return {
        ...state,
        dates: state.dates.map(d => (d.id === action.date.id ? action.date : d))
      };

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
};

export const useTrainingBuild = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMuscle = (muscle: Muscle) =>
    dispatch({ type: 'ADD_MUSCLE', muscle });

  const removeMuscle = (muscle: Muscle) =>
    dispatch({ type: 'REMOVE_MUSCLE', muscle });

  const addExerciseOption = (exerciseOption: ExerciseOption) =>
    dispatch({ type: 'ADD_EXERCISE_OPTION', exerciseOption });

  const removeExerciseOption = (exerciseOption: ExerciseOption) =>
    dispatch({ type: 'REMOVE_EXERCISE_OPTION', exerciseOption });

  const addDate = (date: AppDate) => dispatch({ type: 'ADD_DATE', date });

  const removeDate = (date: AppDate) => dispatch({ type: 'REMOVE_DATE', date });

  const editDate = (date: AppDate) => dispatch({ type: 'EDIT_DATE', date });

  const setErrors = (errors: TrainingError) =>
    dispatch({ type: 'SET_ERRORS', errors });

  const validate = (form: Form): boolean => {
    const errors: TrainingError = {};

    if (form.muscles.length === 0)
      errors.muscles = 'Escolha pelo menos um músculo';

    if (form.exerciseOptions.length === 0)
      errors.exerciseOptions = 'Escolha pelo menos um exercício';

    if (form.dates.length === 0) errors.dates = 'Escolha pelo menos um dia';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const createTraining = () => {
    const form: Form = {
      muscles: state.muscles,
      exerciseOptions: state.exerciseOptions,
      dates: state.dates
    };

    // validate state
    if (validate(form)) {
    }
  };

  return {
    addMuscle,
    removeMuscle,
    addExerciseOption,
    removeExerciseOption,
    addDate,
    removeDate,
    editDate,
    state,
    createTraining
  };
};
