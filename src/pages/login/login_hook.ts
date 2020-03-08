import { useReducer, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import routes from 'config/routes';
import { LoginForm, LoginFormFields } from 'models/login_form';

import { useLogin } from 'hooks/auth';

type ErrorsType = {
  email?: string;
  password?: string;
};

type StateType = {
  email: string;
  password: string;
  errors: ErrorsType;
};

type Action =
  | {
      type: 'CHANGE_VALUE';
      field: LoginFormFields;
      value: string;
    }
  | { type: 'SET_ERRORS'; errors: ErrorsType };

const reducer = (state: StateType, action: Action): StateType => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.field]: action.value
      };

    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };

    default:
      return state;
  }
};

const initialState: StateType = {
  email: '',
  password: '',
  errors: {}
};

export const useLoginPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [hasFailed, setFailed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { login } = useLogin();
  const location = useLocation();
  const history = useHistory();

  const handleSubmit = async () => {
    try {
      const form = LoginForm({ email: state.email, password: state.password });

      if (form.isValid()) {
        _cleanErrors();

        setLoading(true);

        await login(form.getValues());

        setLoading(false);

        history.push(_getPathAfterLogin());
      } else {
        const errors = form.getErrors();
        dispatch({ type: 'SET_ERRORS', errors });
      }
    } catch (err) {
      setLoading(false);
      setFailed(true);
    }
  };

  type InputTextType = { field: LoginFormFields; value: string };
  const handleInputTextChange = (params: InputTextType) => {
    const { field, value } = params;
    dispatch({ type: 'CHANGE_VALUE', value, field });
  };

  const dismissFailAlert = () => setFailed(false);

  const _cleanErrors = () => dispatch({ type: 'SET_ERRORS', errors: {} });

  const _getPathAfterLogin = (): string => {
    const { path } = location.state || { path: routes.home.root };

    if (!path || path === routes.profile.settings) return routes.home.root;

    return path;
  };

  return {
    email: state.email,
    password: state.password,
    errors: state.errors,
    handleInputTextChange,
    handleSubmit,
    hasFailed,
    dismissFailAlert,
    isLoading
  };
};
