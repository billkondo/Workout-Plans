import {
  IonContent,
  IonPage,
  IonRouterLink,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonMenu,
  IonList,
  IonItem,
  IonLabel
} from '@ionic/react';
import React from 'react';
import { Icon } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import Center from 'components/center/Center';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonMenu side="start" contentId="app">
        <IonHeader>
          <IonToolbar></IonToolbar>
        </IonHeader>

        <IonContent>
          <IonList>
            <IonItem onClick={() => console.log('OI')}>
              <Icon slot="start">
                <ExitToApp />
              </Icon>
              <IonLabel>
                <p>Logout</p>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
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
