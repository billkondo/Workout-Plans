import {
  IonContent,
  IonPage,
  IonButton,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { InputChangeEventDetail } from '@ionic/core';
import React, { useReducer } from 'react';
import { History } from 'history';

import Center from 'components/center/Center';
import Input from 'components/input/Input';

import routes from 'config/routes';

type Fields = 'email' | 'password';
type Errors = {
  email?: string;
  password?: string;
};

type Props = {
  history: History;
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

const Login: React.FC<Props> = ({ history }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: CustomEvent<InputChangeEventDetail>) => {
    if (e.target !== null) {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      const name = target.name as Fields;

      dispatch({ type: 'CHANGE_VALUE', field: name, value });
    }
  };

  // Check state and update errors
  const validateState = () => {
    const errors: Errors = {};

    if (state.email.length === 0) errors.email = 'Email cannot be empty';
    if (state.email.length > 255) errors.email = 'Email is too long';

    if (state.password.length === 0)
      errors.password = 'Password cannot be empty';
    if (state.password.length > 255) errors.password = 'Password is too long';

    dispatch({ type: 'SET_ERRORS', errors });

    return !errors.email && !errors.password;
  };

  const handleSubmit = () => {
    // Validate form
    if (validateState()) {
      console.log('form is valid');
      history.push(routes.home);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" id="login-page">
        <Center>
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
                <Input
                  error={state.errors.password}
                  handleChange={handleChange}
                  value={state.password}
                  type={'password'}
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
          </IonGrid>
        </Center>
      </IonContent>
    </IonPage>
  );
};

export default Login;
