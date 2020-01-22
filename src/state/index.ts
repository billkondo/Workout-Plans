import { createStore, combineReducers } from 'redux';

import authentication from './authentication';
import exercises from './exercises';
import trainings from './trainings';
import trainingsFilter from './trainings_filter';
import exercisesFilter from './exercises_filter';

const rootReducer = combineReducers({
  auth: authentication.reducer,
  exercises: exercises.reducer,
  trainings: trainings.reducer,
  trainingsFilter: trainingsFilter.reducer,
  exercisesFilter: exercisesFilter.reducer
});

const actions = {
  auth: authentication.actions,
  exercises: exercises.actions,
  trainings: trainings.actions,
  trainingsFilter: trainingsFilter.actions,
  exercisesFilter: exercisesFilter.actions
};

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export { store, actions };
