import { useReducer } from 'react';

import { useStore } from 'hooks/store';

// Types
import { Muscle } from 'types/muscles';
import { ExerciseOption, Exercise } from 'types/exercises';
import { AppDate } from 'types/dates';
import { TrainingError, TrainingForm } from 'types/training';

type State = {
  muscles: Array<Muscle>;
  exerciseOptions: Array<ExerciseOption>;
  dates: Array<AppDate>;
  errors: TrainingError;
  failed: boolean;
  dayToOpen: string;
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
  | { type: 'REMOVE_EXERCISE_OPTION'; exercise: Exercise }
  | { type: 'ADD_DATE'; date: AppDate }
  | { type: 'REMOVE_DATE'; date: AppDate }
  | { type: 'EDIT_DATE'; date: AppDate }
  | { type: 'SET_ERRORS'; errors: TrainingError }
  | { type: 'SET_FAILED'; failed: boolean }
  | {
      type: 'EDIT_EXERCISE_OPTION_INFO';
      key: string;
      value: number | number[];
      exercise: Exercise;
    };

const initialState: State = {
  muscles: [],
  exerciseOptions: [],
  dates: [],
  errors: {},
  failed: false,
  dayToOpen: ''
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
          exerciseOption => exerciseOption.exercise.id !== action.exercise.id
        )
      };

    case 'EDIT_EXERCISE_OPTION_INFO':
      return {
        ...state,
        exerciseOptions: state.exerciseOptions.map(e =>
          e.exercise.id === action.exercise.id
            ? {
                ...e,
                info: {
                  ...e.info,
                  [action.key]: action.value
                }
              }
            : e
        )
      };

    case 'ADD_DATE':
      return {
        ...state,
        dates: state.dates.concat(action.date),
        errors: {
          ...state.errors,
          dates: ''
        },
        dayToOpen: action.date.id
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

    case 'SET_FAILED':
      return {
        ...state,
        failed: action.failed
      };

    default:
      return state;
  }
};

export const useTrainingsBuild = () => {
  const { addTraining } = useStore();
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMuscle = (muscle: Muscle) =>
    dispatch({ type: 'ADD_MUSCLE', muscle });

  const removeMuscle = (muscle: Muscle) =>
    dispatch({ type: 'REMOVE_MUSCLE', muscle });

  const addExerciseOption = (exercise: Exercise) =>
    dispatch({
      type: 'ADD_EXERCISE_OPTION',
      exerciseOption: {
        exercise,
        info: {
          sets: 0,
          reps: [0, 20],
          restInterval: [0, 30]
        }
      }
    });

  const removeExerciseOption = (exercise: Exercise) =>
    dispatch({ type: 'REMOVE_EXERCISE_OPTION', exercise });

  const addDate = (date: AppDate) => dispatch({ type: 'ADD_DATE', date });

  const removeDate = (date: AppDate) => dispatch({ type: 'REMOVE_DATE', date });

  const editDate = (date: AppDate) => dispatch({ type: 'EDIT_DATE', date });

  const editExerciseOptionInfo = (
    key: string,
    value: number | number[],
    exercise: Exercise
  ) => dispatch({ type: 'EDIT_EXERCISE_OPTION_INFO', key, value, exercise });

  const setErrors = (errors: TrainingError) =>
    dispatch({ type: 'SET_ERRORS', errors });

  const setFailed = (failed: boolean) =>
    dispatch({ type: 'SET_FAILED', failed });

  const ignoreFailed = () => setFailed(false);

  const validate = (form: TrainingForm): boolean => {
    const errors: TrainingError = {};

    if (form.muscles.length === 0)
      errors.muscles = 'Escolha pelo menos um músculo';

    if (form.exerciseOptions.length === 0)
      errors.exerciseOptions = 'Escolha pelo menos um exercício';

    if (form.dates.length === 0) errors.dates = 'Escolha pelo menos um dia';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const createTraining = async (): Promise<boolean> => {
    try {
      const form: TrainingForm = {
        muscles: state.muscles,
        exerciseOptions: state.exerciseOptions,
        dates: state.dates
      };

      // validate state
      if (validate(form)) {
        await addTraining(form);
        return true;
      }

      return false;
    } catch (err) {
      setFailed(true);
      return false;
    }
  };

  return {
    addMuscle,
    removeMuscle,
    addExerciseOption,
    removeExerciseOption,
    editExerciseOptionInfo,
    addDate,
    removeDate,
    editDate,
    state,
    createTraining,
    ignoreFailed
  };
};
