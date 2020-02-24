import React from 'react';
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
  IonLabel
} from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { Grid, Icon } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import routes from 'config/routes';

const ProfileSettings = () => {
  return (
    <IonPage>
      <IonContent>
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
            <IonItem onClick={() => console.log('logout')}>
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
