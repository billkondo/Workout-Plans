import { localStorage } from 'storage';

import { Training } from 'types/training';

const ADD_TRAINING = 'ADD_TRAINING';

type State = {
  trainings: Array<Training>;
};

type AddTrainingAction = {
  type: typeof ADD_TRAINING;
  training: Training;
};

type Action = AddTrainingAction;

// ! temporary
const initialState: State = localStorage().find('trainings') || {
  trainings: []
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_TRAINING':
      return {
        ...state,
        trainings: state.trainings.concat(action.training)
      };

    default:
      return state;
  }
};

const actions = {
  addTraining: (training: Training): AddTrainingAction => ({
    type: ADD_TRAINING,
    training
  })
};

export default { reducer, actions };
