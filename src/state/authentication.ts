const SET_AUTH = 'SET_AUTH';

interface AuthenticationState {
  isAuth: boolean;
}

interface SetAuthAction {
  type: typeof SET_AUTH;
  payload: {
    isAuth: boolean;
  };
}

const setAuth = (isAuth: boolean): SetAuthAction => ({
  type: SET_AUTH,
  payload: {
    isAuth
  }
});

const actions = {
  setAuth
};

type AuthenticationActionType = SetAuthAction;

const initialState: AuthenticationState = {
  isAuth: false
};

const reducer = (
  state = initialState,
  action: AuthenticationActionType
): AuthenticationState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default {
  reducer,
  actions
};
