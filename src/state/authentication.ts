const SET_USER_ID = 'SET_USER_ID';

interface AuthenticationState {
  userID: string;
}

interface SetUserIDAction {
  type: typeof SET_USER_ID;
  payload: {
    userID: string;
  };
}

const setUserID = (userID: string): SetUserIDAction => ({
  type: SET_USER_ID,
  payload: {
    userID
  }
});

const actions = {
  setUserID
};

type AuthenticationActionType = SetUserIDAction;

const initialState: AuthenticationState = {
  userID: ''
};

const reducer = (
  state = initialState,
  action: AuthenticationActionType
): AuthenticationState => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userID: action.payload.userID
      };

    default:
      return state;
  }
};

export default {
  reducer,
  actions
};
