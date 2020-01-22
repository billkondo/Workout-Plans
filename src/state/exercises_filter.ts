import { ExercisesFiltersIDs } from 'types/exercises';
import { Muscle } from 'types/muscles';

type State = {
  muscles: Muscle[];
};

const initialState: State = {
  muscles: []
};

type FilterState = {
  [key in ExercisesFiltersIDs]: State;
};

const initialFilterState: FilterState = {
  home: initialState
};

type Action = {
  type: 'EXERCISES_FILTERS_SET_FILTERS';
  filters: State;
  id: ExercisesFiltersIDs;
};

const actions = {
  setFilters: (id: ExercisesFiltersIDs, filters: State): Action => ({
    type: 'EXERCISES_FILTERS_SET_FILTERS',
    filters,
    id
  })
};

const reducer = (state = initialFilterState, action: Action): FilterState => {
  switch (action.type) {
    case 'EXERCISES_FILTERS_SET_FILTERS':
      return {
        ...state,
        [action.id]: action.filters
      };

    default:
      return state;
  }
};

export default { reducer, actions };
