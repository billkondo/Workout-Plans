import {
  IonContent,
  IonPage,
  IonRouterLink,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonButton
} from '@ionic/react';
import React from 'react';
import { ExitToApp } from '@material-ui/icons';

import Center from 'components/center/Center';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonMenu side="start" contentId="app">
        <IonHeader>
          <IonToolbar></IonToolbar>
        </IonHeader>
      </IonMenu>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" id="app">
        <Center>
          <IonRouterLink href="/login">Logar</IonRouterLink>
        </Center>
      </IonContent>
    </IonPage>
  );
};

export default Home;
