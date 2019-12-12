import { createStore, combineReducers } from 'redux';

import authentication from './authentication';

const rootReducer = combineReducers({
  auth: authentication.reducer
});

const actions = {
  auth: authentication.actions
};

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export { store, actions };
