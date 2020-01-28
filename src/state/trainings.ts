import { localStorage } from 'storage';

import { Training } from 'types/training';

const ADD_TRAINING = 'ADD_TRAINING';
const DELETE_TRAINING = 'DELETE_TRAINING';

type State = {
  trainings: Array<Training>;
};

// ! temporary
const initialState: State = localStorage().find('trainings') || {
  trainings: []
};

type Actions =
  | {
      type: typeof ADD_TRAINING;
      training: Training;
    }
  | {
      type: typeof DELETE_TRAINING;
      training: Training;
    };

const actions = {
  addTraining: (training: Training): Actions => ({
    type: ADD_TRAINING,
    training
  }),
  deleteTraining: (training: Training): Actions => ({
    type: DELETE_TRAINING,
    training
  })
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return {
        ...state,
        trainings: state.trainings.concat(action.training)
      };

    case 'DELETE_TRAINING':
      return {
        ...state,
        trainings: state.trainings.filter(t => t.id !== action.training.id)
      };

    default:
      return state;
  }
};

export default { reducer, actions };
