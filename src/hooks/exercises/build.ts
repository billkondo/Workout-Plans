import { useReducer, useEffect, useState } from 'react';

import { Muscle } from 'types/muscles';
import {
  ExerciseError,
  ExerciseTextKeys,
  ExerciseForm,
  Exercise
} from 'types/exercises';

import { useStore } from 'hooks/store';

type State = {
  muscles: Array<Muscle>;
  title: string;
  description: string;
  errors: ExerciseError;
  failed: boolean;
};

type Actions =
  | { type: 'ADD_MUSCLE'; muscle: Muscle }
  | { type: 'REMOVE_MUSCLE'; muscle: Muscle }
  | { type: 'CHANGE_TEXT'; key: ExerciseTextKeys; value: string }
  | { type: 'SET_ERRORS'; errors: ExerciseError }
  | {
      type: 'SET_FAILED';
      failed: boolean;
    }
  | { type: 'RESET' }
  | { type: 'STATE_SETUP'; state: State };

const initialState: State = {
  muscles: [],
  title: '',
  description: '',
  errors: {},
  failed: false
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

    case 'SET_FAILED':
      return {
        ...state,
        failed: action.failed
      };

    case 'RESET':
      return initialState;

    case 'STATE_SETUP':
      return action.state;

    default:
      return state;
  }
};

export const useExerciseBuild = (exercise?: Exercise) => {
  const store = useStore();
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isBuilding, setIsBuilding] = useState(false);

  useEffect(() => {
    if (!!exercise)
      dispatch({
        type: 'STATE_SETUP',
        state: {
          title: exercise.title,
          description: exercise.description ? exercise.description : '',
          muscles: exercise.muscles,
          errors: {},
          failed: false
        }
      });
  }, [exercise]);

  const addMuscle = (muscle: Muscle) =>
    dispatch({ type: 'ADD_MUSCLE', muscle });

  const removeMuscle = (muscle: Muscle) =>
    dispatch({ type: 'REMOVE_MUSCLE', muscle });

  const changeText = (key: ExerciseTextKeys, value: string) =>
    dispatch({ type: 'CHANGE_TEXT', key, value });

  const setFailed = (failed: boolean) =>
    dispatch({ type: 'SET_FAILED', failed });

  const reset = () => dispatch({ type: 'RESET' });

  const validate = (form: ExerciseForm): boolean => {
    const errors: ExerciseError = {};

    if (form.muscles.length === 0)
      errors.muscles = 'Escolha pelo menos um músculo';

    if (!form.title) errors.title = 'Escolha um nome para o exercício';

    dispatch({ type: 'SET_ERRORS', errors });

    return Object.keys(errors).length === 0;
  };

  const ignoreFailed = () => setFailed(false);

  const createExercise = async (): Promise<boolean> => {
    try {
      const form: ExerciseForm = {
        muscles: state.muscles,
        title: state.title,
        description: state.description
      };

      if (validate(form)) {
        setIsBuilding(true);

        await store.addExercise(form);

        setIsBuilding(false);
        return true;
      }

      return false;
    } catch (err) {
      setFailed(true);
      return false;
    }
  };

  const editExercise = async (): Promise<boolean> => {
    if (!exercise) return false;

    try {
      const form: ExerciseForm = {
        muscles: state.muscles,
        title: state.title,
        description: state.description
      };

      if (validate(form)) {
        setIsBuilding(true);

        await store.editExercise(exercise, form);

        setIsBuilding(false);
        return true;
      }

      return false;
    } catch (err) {
      setFailed(true);
      return false;
    }
  };

  return {
    state,
    addMuscle,
    removeMuscle,
    changeText,
    ignoreFailed,
    reset,
    createExercise,
    editExercise,
    isBuilding
  };
};
