import { createStore, combineReducers } from 'redux';

import authentication from './authentication';
import exercises from './exercises';

const rootReducer = combineReducers({
  auth: authentication.reducer,
  exercises: exercises.reducer
});

const actions = {
  auth: authentication.actions,
  exercises: exercises.actions
};

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export { store, actions };
