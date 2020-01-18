import { Muscle } from 'types/muscles';
import { ExerciseOption } from 'types/exercises';

type State = {
  muscles: Muscle[];
  exercisesOption: ExerciseOption[];
};

const initialState: State = {
  muscles: [],
  exercisesOption: []
};

type Actions = {
  type: 'TRAININGS_FILTER_SET_FILTERS';
  filters: State;
};

const actions = {
  setFilers: (filters: State) => ({
    type: 'TRAININGS_FILTER_SET_FILTERS',
    filters
  })
};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case 'TRAININGS_FILTER_SET_FILTERS':
      return action.filters;

    default:
      return state;
  }
};

export default { reducer, actions };
