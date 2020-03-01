import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
  IonAlert
} from '@ionic/react';
import { InputChangeEventDetail } from '@ionic/core';
import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import Center from 'components/center/Center';
import Input from 'components/input/Input';
import Password from 'components/input/Password';

import routes from 'config/routes';

import { useLogin } from 'hooks/auth';

type Fields = 'email' | 'password';
type Errors = {
  email?: string;
  password?: string;
};
type Form = {
  email: string;
  password: string;
};

type State = {
  email: string;
  password: string;
  errors: Errors;
};

type Action =
  | {
      type: 'CHANGE_VALUE';
      field: Fields;
      value: string;
    }
  | { type: 'SET_ERRORS'; errors: Errors };

const reducer = (state: State, action: Action): State => {
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

const initialState: State = {
  email: '',
  password: '',
  errors: {}
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isErrorAlertOpen, setErrorAlert] = useState(false);
  const login = useLogin();
  const history = useHistory();
  const location = useLocation();

  const { path } = location.state || { path: routes.home.root };

  const handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
    if (e.target !== null) {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      const name = target.name as Fields;

      dispatch({ type: 'CHANGE_VALUE', field: name, value });
    }
  };

  const validateState = (form: Form) => {
    const errors: Errors = {};

    if (form.email.length === 0) errors.email = 'Email cannot be empty';
    if (form.email.length > 255) errors.email = 'Email is too long';

    if (form.password.length === 0)
      errors.password = 'Password cannot be empty';
    if (form.password.length > 255) errors.password = 'Password is too long';

    // Update errors state
    dispatch({ type: 'SET_ERRORS', errors });

    return !errors.email && !errors.password;
  };

  const handleSubmit = useCallback(async () => {
    try {
      const form = {
        email: state.email,
        password: state.password
      };

      const isValid = validateState(form);

      if (isValid) {
        await login(form);

        history.replace({
          pathname: !path
            ? routes.home.root
            : path === routes.profile.settings
            ? routes.home.root
            : path
        });
      }
    } catch (err) {
      console.log(err);
      setErrorAlert(true);
    }
  }, [history, login, path, state.email, state.password]);

  useEffect(() => {
    const handleSubmitOnEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleSubmit();
    };

    document.addEventListener('keypress', handleSubmitOnEnter);

    return () => {
      document.removeEventListener('keypress', handleSubmitOnEnter);
    };
  }, [handleSubmit]);

  return (
    <IonPage>
      <IonContent className="ion-padding" id="login-page">
        <IonAlert
          isOpen={isErrorAlertOpen}
          onDidDismiss={() => setErrorAlert(false)}
          header="Error"
          message="It was not possible to login"
        />
        <Center>
          <form>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <Input
                    error={state.errors.email}
                    handleChange={handleChange}
                    value={state.email}
                    type="email"
                    name="email"
                    label="Email"
                  />
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <Password
                    error={state.errors.password}
                    handleChange={handleChange}
                    value={state.password}
                    name={'password'}
                    label="Password"
                  />
                </IonCol>
              </IonRow>

              <IonRow style={{ marginTop: 32 }}>
                <IonCol>
                  <IonButton expand="block" onClick={handleSubmit}>
                    Enter
                  </IonButton>
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <IonRouterLink>
                    <p className="ion-text-start">Esqueci minha senha </p>
                  </IonRouterLink>
                </IonCol>

                <IonCol>
                  <IonRouterLink>
                    <p className="ion-text-end">Criar conta </p>
                  </IonRouterLink>
                </IonCol>
              </IonRow>
            </IonGrid>
          </form>
        </Center>
      </IonContent>
    </IonPage>
  );
};

export default Login;
