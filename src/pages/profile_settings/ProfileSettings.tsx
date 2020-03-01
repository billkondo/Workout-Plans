import React, { useContext } from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonItem,
  IonLabel,
  IonLoading,
  IonAlert
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Grid, Icon } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import routes from 'config/routes';

import { AppContext } from 'app_context';

const ProfileSettings = () => {
  const { logoutInterface } = useContext(AppContext);

  const {
    isLoggingOut,
    hasLoggingOutFailed,
    dismissLoggingOutFailure,
    logout
  } = logoutInterface;

  const onExitButtonClick = async () => {
    await logout();
  };

  return (
    <IonPage>
      <IonContent>
        <IonAlert
          isOpen={hasLoggingOutFailed}
          header="Erro"
          message="Não foi possível sair"
          onDidDismiss={dismissLoggingOutFailure}
        ></IonAlert>

        <IonLoading
          isOpen={isLoggingOut}
          message="Saindo do aplicativo"
        ></IonLoading>

        <IonHeader>
          <IonToolbar>
            <IonButtons slot="primary">
              <IonButton
                routerDirection="back"
                routerLink={routes.home.profile}
              >
                <IonIcon icon={arrowBack}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle className="header-font">Configurações</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Grid container direction="column">
          <Grid item>
            <IonItem onClick={onExitButtonClick}>
              <Icon>
                <ExitToApp></ExitToApp>
              </Icon>
              <IonLabel style={{ marginLeft: 16 }}>Sair</IonLabel>
            </IonItem>
          </Grid>
        </Grid>
      </IonContent>
    </IonPage>
  );
};

export default ProfileSettings;
