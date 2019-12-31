import { Exercise } from 'types/exercises';

import routes from 'config/routes';

const ADD_EXERCISE = 'ADD_EXERCISE';

type State = {
  exercises: Array<Exercise>;
  backRoute: string;
};

type AddExerciseAction = {
  type: typeof ADD_EXERCISE;
  exercise: Exercise;
};

type Action = AddExerciseAction;

const initialState: State = {
  exercises: [
    {
      id: '1234',
      muscles: [],
      title: 'agachamento livre',
      userID: '341234'
    }
  ],
  backRoute: routes.home.exercises
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return {
        ...state,
        exercises: state.exercises.concat(action.exercise)
      };

    default:
      return state;
  }
};

const actions = {
  addExercise: (exercise: Exercise): AddExerciseAction => ({
    type: ADD_EXERCISE,
    exercise
  })
};

export default {
  reducer,
  actions
};
