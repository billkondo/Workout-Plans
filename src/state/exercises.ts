import { localStorage } from 'storage';

import { Exercise } from 'types/exercises';

import routes from 'config/routes';

const ADD_EXERCISE = 'ADD_EXERCISE';
const DELETE_EXERCISE = 'DELETE_EXERCISE';
const EDIT_EXERCISE = 'EDIT_EXERCISE';

type State = {
  exercises: Array<Exercise>;
  backRoute: string;
};

// ! temporary
const initialState: State = localStorage().find('exercises') || {
  exercises: [],
  backRoute: routes.home.exercises
};

type Actions =
  | {
      type: typeof ADD_EXERCISE;
      exercise: Exercise;
    }
  | {
      type: typeof DELETE_EXERCISE;
      exercise: Exercise;
    }
  | {
      type: typeof EDIT_EXERCISE;
      exercise: Exercise;
    };

const actions = {
  addExercise: (exercise: Exercise): Actions => ({
    type: ADD_EXERCISE,
    exercise
  }),
  deleteExercise: (exercise: Exercise): Actions => ({
    type: DELETE_EXERCISE,
    exercise
  }),
  editExercise: (exercise: Exercise): Actions => ({
    type: EDIT_EXERCISE,
    exercise
  })
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.concat(action.exercise)
      };

    case 'DELETE_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.filter(e => e.id !== action.exercise.id)
      };

    case 'EDIT_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.map(e =>
          e.id === action.exercise.id ? action.exercise : e
        )
      };

    default:
      return state;
  }
};

export default {
  reducer,
  actions
};
