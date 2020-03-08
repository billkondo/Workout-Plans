import React, { useEffect } from 'react';
import {
  IonPage,
  IonContent,
  IonAlert,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonRouterLink,
  IonLoading
} from '@ionic/react';
import { InputChangeEventDetail } from '@ionic/core';

import Center from 'components/center/Center';
import Input from 'components/input/Input';
import Password from 'components/input/Password';

import { useLoginPage } from './login_hook';

const LoginPage = () => {
  const {
    email,
    password,
    handleSubmit,
    handleInputTextChange,
    errors,
    hasFailed,
    dismissFailAlert,
    isLoading
  } = useLoginPage();

  // Typescript complications with inputs
  const getInputValue = (e: CustomEvent<InputChangeEventDetail>): string => {
    if (e.target !== null) {
      const target = e.target as HTMLInputElement;
      return target.value;
    }
    return '';
  };

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
          isOpen={hasFailed}
          onDidDismiss={dismissFailAlert}
          header="Erro"
          message="Náo foi possível logar"
        />
        <IonLoading isOpen={isLoading} message="Logando"></IonLoading>
        <Center>
          <form>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <Input
                    error={errors.email}
                    handleChange={e =>
                      handleInputTextChange({
                        field: 'email',
                        value: getInputValue(e)
                      })
                    }
                    value={email}
                    type="email"
                    name="email"
                    label="Email"
                  />
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol>
                  <Password
                    error={errors.password}
                    handleChange={e =>
                      handleInputTextChange({
                        field: 'password',
                        value: getInputValue(e)
                      })
                    }
                    value={password}
                    name="password"
                    label="Senha"
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

export default LoginPage;
