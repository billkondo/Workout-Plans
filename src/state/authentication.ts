import { localStorage } from 'storage';

const SET_USER_DATA = 'SET_USER_DATA';
const RESET_USER_DATA = 'RESET_USER_DATA';

type AuthenticationState = {
  userID: string;
  email: string;
};

type AuthenticationAction =
  | {
      type: typeof SET_USER_DATA;
      payload: {
        userID: string;
        email: string;
      };
    }
  | {
      type: typeof RESET_USER_DATA;
    };

const actions = {
  setUserData: (userID: string, email: string): AuthenticationAction => ({
    type: SET_USER_DATA,
    payload: {
      userID,
      email
    }
  }),
  resetUserData: () => ({
    type: RESET_USER_DATA
  })
};

// ! temporary
const initialState: AuthenticationState = localStorage().find('auth') || {
  userID: '',
  email: ''
};

const reducer = (
  state = initialState,
  action: AuthenticationAction
): AuthenticationState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userID: action.payload.userID,
        email: action.payload.email
      };

    case RESET_USER_DATA:
      return {
        userID: '',
        email: ''
      };

    default:
      return state;
  }
};

export default {
  reducer,
  actions
};
