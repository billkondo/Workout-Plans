import { useReducer } from 'react';

import { Muscle } from 'types/muscles';
import { ExerciseError, ExerciseTextKeys } from 'types/exercises';

type State = {
  muscles: Array<Muscle>;
  title: string;
  description: string;
  errors: ExerciseError;
};

type Form = {
  muscles: Array<Muscle>;
  title: string;
  description: string;
};

type Actions =
  | { type: 'ADD_MUSCLE'; muscle: Muscle }
  | { type: 'REMOVE_MUSCLE'; muscle: Muscle }
  | { type: 'CHANGE_TEXT'; key: ExerciseTextKeys; value: string }
  | { type: 'SET_ERRORS'; errors: ExerciseError };

const initialState: State = {
  muscles: [],
  title: '',
  description: '',
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
        muscles: state.muscles.filter(m => m.type !== action.muscle.type)
      };

    case 'CHANGE_TEXT':
      return {
        ...state,
        [action.key]: action.value,
        errors: {
          ...state.errors,
          [action.key]: ''
        }
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

export const useExerciseBuild = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addMuscle = (muscle: Muscle) =>
    dispatch({ type: 'ADD_MUSCLE', muscle });

  const removeMuscle = (muscle: Muscle) =>
    dispatch({ type: 'REMOVE_MUSCLE', muscle });

  const changeText = (key: ExerciseTextKeys, value: string) =>
    dispatch({ type: 'CHANGE_TEXT', key, value });

  const validate = (form: Form): boolean => {
    const errors: ExerciseError = {};

    if (form.muscles.length === 0)
      errors.muscles = 'Escolha pelo menos um músculo';

    if (!form.title) errors.title = 'Escolha um nome para o exercício';

    dispatch({ type: 'SET_ERRORS', errors });

    return Object.keys(errors).length === 0;
  };

  const createExercise = () => {
    const form: Form = {
      muscles: state.muscles,
      title: state.title,
      description: state.description
    };

    if (validate(form)) {
    }
  };

  return {
    state,
    addMuscle,
    removeMuscle,
    changeText,
    createExercise
  };
};
